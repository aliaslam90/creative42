const StrategyMockup = () => (
    <div className="approach-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="approach-mockup-trend">
            <span className="approach-mockup-insight-badge">
                <i className="iconoir-light-bulb" /> Insight
            </span>
            <svg viewBox="0 0 160 70" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="approachTrendFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                </defs>
                <path d="M0,10 L0,70 L160,70 L160,10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <path d="M0,54 L24,48 L48,50 L72,34 L96,38 L120,20 L156,14 L156,70 L0,70 Z" fill="url(#approachTrendFill)" />
                <path d="M0,54 L24,48 L48,50 L72,34 L96,38 L120,20 L156,14" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="156" cy="14" r="3.5" fill="#0d0d0d" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <span className="approach-mockup-trend-value">+184%</span>
        </div>

        <div className="mockup-stat-row">
            <span className="mockup-stat-pill mono">Research <strong>Done</strong></span>
            <span className="mockup-stat-pill mono">Insight <strong>Found</strong></span>
        </div>
    </div>
);

const DesignMockup = () => (
    <div className="approach-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="approach-mockup-tool">
            <div className="approach-mockup-layers">
                <span className="approach-mockup-layer-row active"><i className="iconoir-square" /> Shape</span>
                <span className="approach-mockup-layer-row"><i className="iconoir-text" /> Type</span>
                <span className="approach-mockup-layer-row"><i className="iconoir-media-image" /> Image</span>
                <span className="approach-mockup-layer-row"><i className="iconoir-group" /> Group</span>
            </div>

            <div className="approach-mockup-canvas">
                <span className="approach-mockup-canvas-shape circle" />
                <span className="approach-mockup-canvas-shape square">
                    <span className="handle handle-tl" />
                    <span className="handle handle-tr" />
                    <span className="handle handle-bl" />
                    <span className="handle handle-br" />
                </span>
                <span className="approach-mockup-cursor">
                    <i className="iconoir-cursor" />
                </span>
            </div>
        </div>

        <div className="mockup-swatches small">
            <span className="mockup-swatch" style={{ background: "#000000" }} />
            <span className="mockup-swatch" style={{ background: "#ffffff" }} />
            <span className="mockup-swatch" style={{ background: "#7a7a85" }} />
            <span className="mockup-swatch" style={{ background: "#3a3a40" }} />
        </div>
    </div>
);

const ImmersionMockup = () => (
    <div className="approach-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="approach-mockup-doc">
            <span className="approach-mockup-doc-line" style={{ width: "72%" }} />
            <span className="approach-mockup-doc-line" style={{ width: "94%" }} />
            <span className="approach-mockup-doc-line" style={{ width: "58%" }} />
            <span className="approach-mockup-doc-line" style={{ width: "84%" }} />

            <span className="approach-mockup-cursor-tag tag-a">
                <span className="approach-mockup-cursor-dot" />
                <i className="iconoir-cursor" /> Alex
            </span>
            <span className="approach-mockup-cursor-tag tag-b">
                <span className="approach-mockup-cursor-dot" />
                <i className="iconoir-cursor" /> Sam
            </span>
        </div>

        <span className="approach-mockup-live-badge">
            <span className="approach-mockup-live-dot" /> Live Session
        </span>
    </div>
);

const illustrationsByIcon: Record<string, React.FC> = {
    "iconoir-compass": StrategyMockup,
    "iconoir-design-pencil": DesignMockup,
    "iconoir-community": ImmersionMockup,
};

const ApproachIllustration = ({ icon }: { icon: string }) => {
    const Mockup = illustrationsByIcon[icon] ?? StrategyMockup;
    return <Mockup />;
};

export default ApproachIllustration;
