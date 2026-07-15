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
                        <stop offset="0%" stopColor="rgba(200,162,68,0.4)" />
                        <stop offset="100%" stopColor="rgba(200,162,68,0)" />
                    </linearGradient>
                </defs>
                <path d="M0,54 L24,48 L48,50 L72,34 L96,38 L120,20 L156,14 L156,70 L0,70 Z" fill="url(#approachTrendFill)" />
                <path d="M0,54 L24,48 L48,50 L72,34 L96,38 L120,20 L156,14" fill="none" stroke="#c8a244" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="156" cy="14" r="3.5" fill="#0d0d0d" stroke="#c8a244" strokeWidth="2" />
            </svg>
            <span className="approach-mockup-trend-value">+184%</span>
        </div>

        <div className="mockup-stat-row">
            <span className="mockup-stat-pill gold">Research <strong>Done</strong></span>
            <span className="mockup-stat-pill gold">Insight <strong>Found</strong></span>
        </div>
    </div>
);

const DesignMockup = () => (
    <div className="approach-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="approach-mockup-canvas">
            <span className="approach-mockup-shape shape-back" />
            <span className="approach-mockup-shape shape-mid" />
            <span className="approach-mockup-shape shape-front">
                <i className="iconoir-design-pencil" />
                <span>Design System</span>
            </span>
        </div>

        <div className="mockup-swatches small">
            <span className="mockup-swatch" style={{ background: "#000000" }} />
            <span className="mockup-swatch" style={{ background: "#c8a244" }} />
            <span className="mockup-swatch" style={{ background: "#ffffff" }} />
            <span className="mockup-swatch" style={{ background: "#7a7a85" }} />
        </div>
    </div>
);

const ImmersionMockup = () => (
    <div className="approach-mockup-frame">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="approach-mockup-huddle">
            <div className="approach-mockup-avatar-stack">
                <span className="approach-mockup-avatar"><i className="iconoir-user" /></span>
                <span className="approach-mockup-avatar gold"><i className="iconoir-user" /></span>
                <span className="approach-mockup-avatar"><i className="iconoir-user" /></span>
                <span className="approach-mockup-avatar-count">+3</span>
            </div>
            <span className="approach-mockup-huddle-label">Working side by side</span>
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
