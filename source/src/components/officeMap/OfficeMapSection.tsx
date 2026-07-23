"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import officeData from "@/assets/jsonData/offices/OfficeData.json";
import type { Office } from "./types";

const offices = officeData as Office[];

// UAE bounding box — keeps the map from panning/zooming out past the country.
const UAE_BOUNDS: [[number, number], [number, number]] = [
    [22.4, 51.0],
    [26.2, 56.6],
];

type LoadState = "idle" | "loading" | "ready" | "error";

const OfficeMapSection = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const mapElRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<LeafletMap | null>(null);
    const markersRef = useRef<Record<string, Marker>>({});

    const [shouldLoadMap, setShouldLoadMap] = useState(false);
    const [loadState, setLoadState] = useState<LoadState>("idle");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedOffice = useMemo(
        () => offices.find((office) => office.id === selectedId) ?? null,
        [selectedId]
    );

    // Lazy-load the map once the section nears the viewport.
    useEffect(() => {
        const node = sectionRef.current;

        if (!node || typeof IntersectionObserver === "undefined") {
            setShouldLoadMap(true);
            return;
        }

        // Fast path: the section may already be at or near the viewport on mount
        // (e.g. a short page, or a deep link that scrolls straight to it).
        const rect = node.getBoundingClientRect();
        const nearViewport = rect.top < window.innerHeight + 300 && rect.bottom > -300;
        if (nearViewport) {
            setShouldLoadMap(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setShouldLoadMap(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const focusOffice = useCallback((officeId: string) => {
        setSelectedId(officeId);

        const map = mapRef.current;
        const marker = markersRef.current[officeId];
        if (map && marker) {
            map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.6 });
            marker.openPopup();
        }
    }, []);

    useEffect(() => {
        if (!shouldLoadMap || offices.length === 0) return;
        if (loadState !== "idle") return;

        let cancelled = false;
        setLoadState("loading");

        (async () => {
            try {
                const L = (await import("leaflet")).default;

                if (cancelled || !mapElRef.current) return;

                const bounds = L.latLngBounds(offices.map((o) => [o.lat, o.lng] as [number, number]));

                const map = L.map(mapElRef.current, {
                    scrollWheelZoom: false,
                    minZoom: 6,
                    maxZoom: 17,
                    maxBounds: UAE_BOUNDS,
                    maxBoundsViscosity: 1.0,
                });

                map.fitBounds(bounds.pad(0.35), { animate: false });

                L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    maxZoom: 19,
                }).addTo(map);

                // Enable scroll-zoom only once the user has focused/clicked the map,
                // so normal page scrolling isn't hijacked.
                map.getContainer().addEventListener("focus", () => map.scrollWheelZoom.enable());
                map.getContainer().addEventListener("mouseenter", () => map.scrollWheelZoom.enable());
                map.getContainer().addEventListener("mouseleave", () => map.scrollWheelZoom.disable());

                offices.forEach((office) => {
                    const icon = L.divIcon({
                        className: "office-marker-icon",
                        html: `<span class="office-marker-dot" role="button" tabindex="0"
                                aria-label="${office.name}, ${office.city}. Show details">
                                <span class="office-marker-pulse"></span>
                              </span>`,
                        iconSize: [28, 28],
                        iconAnchor: [14, 14],
                        popupAnchor: [0, -16],
                    });

                    const marker = L.marker([office.lat, office.lng], {
                        icon,
                        alt: `${office.name}, ${office.city}`,
                        keyboard: true,
                    }).addTo(map);

                    const popupHtml = `
                        <div class="office-popup">
                            <h3>${office.name}</h3>
                            <p class="office-popup-city">${office.city}, UAE</p>
                            <p><strong>Address:</strong> ${office.address}</p>
                            <p><strong>Phone:</strong> <a href="tel:${office.phone.replace(/\s+/g, "")}">${office.phone}</a></p>
                            <p><strong>Email:</strong> <a href="mailto:${office.email}">${office.email}</a></p>
                            <p><strong>Timings:</strong> ${office.hours}</p>
                            <a class="office-popup-directions" href="${office.directionsUrl}" target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </div>
                    `;
                    marker.bindPopup(popupHtml);

                    marker.on("click", () => setSelectedId(office.id));
                    marker.on("popupclose", () => {
                        setSelectedId((current) => (current === office.id ? null : current));
                    });

                    const el = marker.getElement();
                    const dot = el?.querySelector(".office-marker-dot");
                    dot?.addEventListener("keydown", (event) => {
                        const keyboardEvent = event as KeyboardEvent;
                        if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                            keyboardEvent.preventDefault();
                            focusOffice(office.id);
                        }
                    });

                    markersRef.current[office.id] = marker;
                });

                mapRef.current = map;
                if (!cancelled) setLoadState("ready");
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error("Office map failed to load", err);
                if (!cancelled) setLoadState("error");
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [shouldLoadMap, loadState, focusOffice]);

    useEffect(() => {
        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, []);

    return (
        <div className="offices-sec" id="offices" ref={sectionRef}>
            <div className="custom-container">
                <div className="offices-header">
                    <h2 className="offices-title">Our Offices Across the UAE</h2>
                    <p className="offices-desc">
                        Find the office nearest to you and connect with our team across the United Arab Emirates.
                    </p>
                </div>

                <div className="offices-layout">
                    <div className="offices-map-wrap">
                        <div
                            className="offices-map"
                            ref={mapElRef}
                            role="application"
                            aria-label="Interactive map of Creative42 office locations in the UAE"
                        >
                            {loadState !== "ready" && (
                                <div className="offices-map-placeholder" aria-hidden={loadState === "error" ? undefined : true}>
                                    {loadState === "error" ? (
                                        <p className="offices-map-error">
                                            {`We couldn't load the interactive map. You can still find every office's`}{" "}
                                            address, phone, and email in the list.
                                        </p>
                                    ) : (
                                        <>
                                            <span className="offices-map-skeleton" />
                                            <p>Loading map…</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="offices-list" role="list" aria-label="Creative42 office locations">
                        {offices.length === 0 && (
                            <p className="offices-empty">Office details will be published here soon.</p>
                        )}

                        {offices.map((office) => (
                            <div
                                key={office.id}
                                role="listitem"
                                className={`office-card${selectedId === office.id ? " is-selected" : ""}`}
                            >
                                <div className="office-card-head">
                                    <h3>{office.name}</h3>
                                    <span className="office-card-city">{office.city}</span>
                                </div>

                                <p className="office-card-address">{office.address}</p>
                                <p className="office-card-row">
                                    <a href={`tel:${office.phone.replace(/\s+/g, "")}`}>{office.phone}</a>
                                </p>
                                <p className="office-card-row">
                                    <a href={`mailto:${office.email}`}>{office.email}</a>
                                </p>
                                <p className="office-card-row office-card-hours">{office.hours}</p>

                                <div className="office-card-actions">
                                    <button
                                        type="button"
                                        className="office-card-btn office-card-btn-outline"
                                        onClick={() => focusOffice(office.id)}
                                        aria-pressed={selectedId === office.id}
                                    >
                                        View on Map
                                    </button>
                                    <a
                                        className="office-card-btn office-card-btn-solid"
                                        href={office.directionsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedOffice && (
                    <p className="sr-only" role="status">
                        {`Showing details for ${selectedOffice.name} in ${selectedOffice.city}.`}
                    </p>
                )}
            </div>
        </div>
    );
};

export default OfficeMapSection;
