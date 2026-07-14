const commonProps = {
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
};

const strokeProps = {
    stroke: "#ffffff",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const thinStrokeProps = {
    stroke: "#ffffff",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const BrandingIllustration = () => (
    <svg {...commonProps}>
        <circle cx="60" cy="60" r="46" {...thinStrokeProps} strokeDasharray="2 8" opacity="0.35" className="illu-spin" />
        <path
            {...strokeProps}
            d="M60 22c-20.4 0-37 14.8-37 33 0 13.2 10.7 18.4 19.2 18.4 3.3 0 4.8-2.2 4.8-4.8 0-2.4-1.7-3.7-1.7-6.3 0-3.6 3-6.4 7.2-6.4H60c13.3 0 24-8.7 24-21.4C84 24.6 72.6 22 60 22Z"
        />
        <circle className="illu-pulse" cx="45" cy="42" r="4.4" fill="#ffffff" />
        <circle className="illu-pulse" cx="60" cy="34" r="4.4" fill="#ffffff" style={{ animationDelay: "0.4s" }} />
        <circle className="illu-pulse" cx="75" cy="42" r="4.4" fill="#ffffff" style={{ animationDelay: "0.8s" }} />
        <g className="illu-float">
            <path {...strokeProps} d="M83 70c6-4 12-2 14 3s-1 10-7 11" />
            <circle cx="93" cy="88" r="3" fill="#ffffff" />
        </g>
        <path {...strokeProps} d="M34 92v10M60 96v8M86 92v10" opacity="0.5" />
    </svg>
);

const UiUxIllustration = () => (
    <svg {...commonProps}>
        <rect x="16" y="20" width="88" height="70" rx="8" {...strokeProps} />
        <path {...strokeProps} d="M16 36h88" />
        <circle cx="28" cy="28" r="2.6" fill="#ffffff" />
        <circle cx="38" cy="28" r="2.6" fill="#ffffff" />
        <circle cx="48" cy="28" r="2.6" fill="#ffffff" />
        <rect x="28" y="46" width="30" height="32" rx="4" {...strokeProps} />
        <path {...thinStrokeProps} d="M70 48h24M70 58h24M70 68h16" opacity="0.7" />
        <g className="illu-float">
            <path {...strokeProps} d="m66 96 9 9 18-20" />
        </g>
        <g className="illu-float-slow" style={{ animationDelay: "0.6s" }}>
            <path {...strokeProps} d="M92 92c4 4 4 9 0 13" />
            <circle cx="94" cy="98" r="2.4" fill="#ffffff" />
        </g>
        <circle className="illu-pulse" cx="43" cy="62" r="3" fill="#ffffff" opacity="0.7" />
    </svg>
);

const ContentIllustration = () => (
    <svg {...commonProps}>
        <path {...strokeProps} d="M32 16h38l16 16v64a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V20a4 4 0 0 1 4-4Z" />
        <path {...strokeProps} d="M70 16v16h16" />
        <path {...thinStrokeProps} d="M38 50h36M38 60h36M38 70h24" opacity="0.75" />
        <g className="illu-float">
            <path
                {...strokeProps}
                d="M42 96 50 92l19-19a3.6 3.6 0 0 1 5.1 5.1L55 97l-13 3 0-4Z"
            />
        </g>
        <circle className="illu-pulse" cx="94" cy="34" r="4" fill="#ffffff" opacity="0.6" />
        <circle className="illu-pulse" cx="100" cy="46" r="2.6" fill="#ffffff" style={{ animationDelay: "0.5s" }} opacity="0.6" />
    </svg>
);

const WebDevIllustration = () => (
    <svg {...commonProps}>
        <rect x="14" y="22" width="92" height="68" rx="8" {...strokeProps} />
        <path {...strokeProps} d="M14 36h92" />
        <circle cx="26" cy="29" r="2.6" fill="#ffffff" />
        <circle cx="36" cy="29" r="2.6" fill="#ffffff" />
        <circle cx="46" cy="29" r="2.6" fill="#ffffff" />
        <g className="illu-float">
            <path {...strokeProps} d="m42 54-14 14 14 14" />
        </g>
        <g className="illu-float" style={{ animationDelay: "0.3s" }}>
            <path {...strokeProps} d="m78 54 14 14-14 14" />
        </g>
        <path {...strokeProps} d="M66 50 58 82" opacity="0.85" />
        <circle className="illu-spin" cx="60" cy="68" r="30" {...thinStrokeProps} strokeDasharray="1 10" opacity="0.25" />
    </svg>
);

const SocialIllustration = () => (
    <svg {...commonProps}>
        <g className="illu-float">
            <circle cx="26" cy="60" r="12" {...strokeProps} />
        </g>
        <g className="illu-float-slow">
            <circle cx="86" cy="28" r="12" {...strokeProps} />
        </g>
        <g className="illu-float-slow" style={{ animationDelay: "0.8s" }}>
            <circle cx="86" cy="92" r="12" {...strokeProps} />
        </g>
        <path {...thinStrokeProps} d="m37 54 38-18M37 66l38 18" opacity="0.8" />
        <circle className="illu-pulse" cx="60" cy="60" r="3.4" fill="#ffffff" />
        <circle className="illu-blink" cx="26" cy="60" r="3.4" fill="#ffffff" />
        <circle className="illu-blink" cx="86" cy="28" r="3.4" fill="#ffffff" style={{ animationDelay: "0.4s" }} />
        <circle className="illu-blink" cx="86" cy="92" r="3.4" fill="#ffffff" style={{ animationDelay: "0.8s" }} />
    </svg>
);

const MediaIllustration = () => (
    <svg {...commonProps}>
        <path {...strokeProps} d="M16 40a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v38a5 5 0 0 1-5 5H21a5 5 0 0 1-5-5V40Z" />
        <path {...strokeProps} d="m64 50 24-12v42l-24-12" />
        <circle cx="40" cy="59" r="12" {...strokeProps} />
        <circle className="illu-spin" cx="40" cy="59" r="18" {...thinStrokeProps} strokeDasharray="1 8" opacity="0.3" />
        <circle className="illu-blink" cx="94" cy="30" r="4" fill="#ffffff" />
        <path {...thinStrokeProps} d="M88 30h-6" opacity="0.6" />
    </svg>
);

const DigitalMarketingIllustration = () => (
    <svg {...commonProps}>
        <path {...strokeProps} d="M22 90V26M22 90h76" />
        <g>
            <rect className="illu-float" x="32" y="66" width="10" height="24" rx="2" fill="#ffffff" opacity="0.85" />
            <rect className="illu-float" x="50" y="50" width="10" height="40" rx="2" fill="#ffffff" opacity="0.85" style={{ animationDelay: "0.2s" }} />
            <rect className="illu-float" x="68" y="58" width="10" height="32" rx="2" fill="#ffffff" opacity="0.85" style={{ animationDelay: "0.4s" }} />
            <rect className="illu-float" x="86" y="36" width="10" height="54" rx="2" fill="#ffffff" opacity="0.85" style={{ animationDelay: "0.6s" }} />
        </g>
        <path {...strokeProps} d="m68 32 22-6 6 22" />
        <circle className="illu-pulse" cx="90" cy="26" r="4" fill="#ffffff" />
    </svg>
);

const illustrationsById: Record<number, React.FC> = {
    1: BrandingIllustration,
    2: UiUxIllustration,
    3: ContentIllustration,
    4: WebDevIllustration,
    5: SocialIllustration,
    6: MediaIllustration,
    7: DigitalMarketingIllustration,
};

const ServiceIllustration = ({ id }: { id: number }) => {
    const Illustration = illustrationsById[id] ?? BrandingIllustration;
    return <Illustration />;
};

export default ServiceIllustration;
