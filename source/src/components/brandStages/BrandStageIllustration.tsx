const StrategyMockup = () => (
    <div className="brand-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
            <span className="mockup-topbar" />
        </div>

        <span className="brand-mockup-label">Positioning Map</span>

        <div className="brand-mockup-map">
            <span className="brand-mockup-map-axis brand-mockup-map-axis-x" />
            <span className="brand-mockup-map-axis brand-mockup-map-axis-y" />
            <span className="brand-mockup-map-dot" style={{ top: "70%", left: "24%" }} />
            <span className="brand-mockup-map-dot" style={{ top: "34%", left: "62%" }} />
            <span className="brand-mockup-map-dot" style={{ top: "56%", left: "78%" }} />
            <span className="brand-mockup-map-dot highlight" style={{ top: "22%", left: "80%" }}>
                <span className="brand-mockup-map-ring" />
            </span>
        </div>

        <div className="mockup-stat-row">
            <span className="mockup-stat-pill">Audience <strong>Defined</strong></span>
            <span className="mockup-stat-pill">Differentiator <strong>Clear</strong></span>
        </div>

        <div className="mockup-status-bar">
            <span className="mockup-status-ok"><i className="iconoir-check-circle" /> Core insight found</span>
        </div>
    </div>
);

const IdentityMockup = () => (
    <div className="brand-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="mockup-brand-row">
            <div className="mockup-brand-mark" />
            <div className="mockup-brand-lines">
                <span className="mockup-bar-line" style={{ width: "76%" }} />
                <span className="mockup-bar-line" style={{ width: "48%" }} />
            </div>
        </div>

        <div className="mockup-swatches">
            <span className="mockup-swatch" style={{ background: "#000000" }} />
            <span className="mockup-swatch" style={{ background: "#c8a244" }} />
            <span className="mockup-swatch" style={{ background: "#ffffff" }} />
            <span className="mockup-swatch" style={{ background: "#7a7a85" }} />
        </div>

        <div className="brand-mockup-identity-row">
            <span className="mockup-type-sample">Aa</span>
            <div className="brand-mockup-lockup">
                <span className="brand-mockup-lockup-mark" />
                <div className="brand-mockup-lockup-lines">
                    <span className="mockup-bar-line" style={{ width: "80%" }} />
                    <span className="mockup-bar-line" style={{ width: "55%" }} />
                </div>
            </div>
        </div>

        <span className="mockup-pill-btn">Brand Guidelines</span>
    </div>
);

const ActivationMockup = () => (
    <div className="brand-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="mockup-stat-row">
            <span className="mockup-stat-pill"><i className="iconoir-globe" /> Web</span>
            <span className="mockup-stat-pill"><i className="iconoir-share-android" /> Social</span>
            <span className="mockup-stat-pill"><i className="iconoir-mail" /> Email</span>
        </div>

        <div className="mockup-trend-chart">
            <svg viewBox="0 0 200 90" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="brandTrendFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                </defs>
                <path d="M0,72 L30,64 L60,66 L90,44 L120,50 L150,22 L200,12 L200,90 L0,90 Z" fill="url(#brandTrendFill)" />
                <path d="M0,72 L30,64 L60,66 L90,44 L120,50 L150,22 L200,12" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="mockup-trend-badge">▲ 32%</span>
        </div>

        <div className="mockup-funnel">
            <div className="mockup-funnel-row">
                <span>Impressions</span>
                <span className="mockup-funnel-bar" style={{ width: "100%" }} />
            </div>
            <div className="mockup-funnel-row">
                <span>Clicks</span>
                <span className="mockup-funnel-bar" style={{ width: "58%" }} />
            </div>
            <div className="mockup-funnel-row">
                <span>Conversions</span>
                <span className="mockup-funnel-bar" style={{ width: "24%" }} />
            </div>
        </div>
    </div>
);

const illustrationsById: Record<number, React.FC> = {
    1: StrategyMockup,
    2: IdentityMockup,
    3: ActivationMockup,
};

const BrandStageIllustration = ({ id }: { id: number }) => {
    const Mockup = illustrationsById[id] ?? StrategyMockup;
    return <Mockup />;
};

export default BrandStageIllustration;
