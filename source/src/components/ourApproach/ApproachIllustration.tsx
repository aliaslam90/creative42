const commonProps = {
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
};

const gold = {
    stroke: "#c8a244",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const goldThin = {
    stroke: "#c8a244",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const ivory = {
    stroke: "#ffffff",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const StrategyIllustration = () => (
    <svg {...commonProps}>
        {/* Data trend behind the lens */}
        <path {...ivory} opacity="0.55" d="M18 66c8-4 10-22 18-24s10 14 18 10 12-24 20-26" />
        <circle className="illu-pulse" cx="36" cy="42" r="2.4" fill="#ffffff" opacity="0.6" />
        <circle className="illu-pulse" cx="54" cy="52" r="2.4" fill="#ffffff" opacity="0.6" style={{ animationDelay: "0.3s" }} />

        {/* Magnifying glass revealing the insight */}
        <g className="illu-float">
            <circle cx="46" cy="46" r="20" {...gold} />
            <circle cx="46" cy="46" r="20" {...goldThin} strokeDasharray="1 6" opacity="0.5" />
            <path {...gold} d="m61 61 12 12" />
        </g>

        {/* Lightbulb insight inside the lens */}
        <g className="illu-pulse" style={{ animationDelay: "0.5s" }}>
            <path {...gold} d="M46 36a8 8 0 0 0-4 15v3h8v-3a8 8 0 0 0-4-15Z" fill="#c8a244" opacity="0.15" />
            <path {...goldThin} d="M43 56h6" />
        </g>
    </svg>
);

const DesignIllustration = () => (
    <svg {...commonProps}>
        {/* Layered geometric canvas being crafted */}
        <rect x="18" y="52" width="30" height="30" rx="4" {...goldThin} opacity="0.45" transform="rotate(-8 33 67)" />
        <circle cx="60" cy="66" r="16" {...gold} className="illu-float-slow" opacity="0.9" />
        <rect x="46" y="24" width="26" height="26" rx="4" {...gold} className="illu-float" transform="rotate(10 59 37)" />

        {/* Pen actively drafting a line */}
        <g className="illu-draw">
            <path {...ivory} d="M20 40 44 16" pathLength="240" />
        </g>
        <path {...gold} d="M40 12 50 22 44 28 34 18Z" fill="#c8a244" />
        <path {...ivory} d="m19 41-3 8 8-3Z" fill="#ffffff" opacity="0.85" />

        {/* Sparkle accents */}
        <path {...goldThin} className="illu-blink" d="M76 20v6M73 23h6" />
    </svg>
);

const ImmersionIllustration = () => (
    <svg {...commonProps}>
        {/* Table / shared surface */}
        <path {...goldThin} d="M14 72c12-6 60-6 72 0" opacity="0.5" />

        {/* Three collaborators in a huddle */}
        <g className="illu-float">
            <circle cx="50" cy="30" r="9" {...gold} />
            <path {...gold} d="M35 58c1.6-11 7-16.5 15-16.5S63.4 47 65 58" />
        </g>
        <g className="illu-float-slow" style={{ animationDelay: "0.2s" }}>
            <circle cx="26" cy="42" r="8" {...ivory} opacity="0.85" />
            <path {...ivory} d="M14 64c1.4-9.5 6-14.3 12-14.3S37.6 54.5 39 64" opacity="0.85" />
        </g>
        <g className="illu-float-slow" style={{ animationDelay: "0.4s" }}>
            <circle cx="74" cy="42" r="8" {...ivory} opacity="0.6" />
            <path {...ivory} d="M62 64c1.4-9.5 6-14.3 12-14.3S86.6 54.5 88 64" opacity="0.6" />
        </g>

        {/* Connection spark at the centre of collaboration */}
        <circle className="illu-pulse" cx="50" cy="58" r="3" fill="#c8a244" />
    </svg>
);

const illustrationsByIcon: Record<string, React.FC> = {
    "iconoir-compass": StrategyIllustration,
    "iconoir-design-pencil": DesignIllustration,
    "iconoir-community": ImmersionIllustration,
};

const ApproachIllustration = ({ icon }: { icon: string }) => {
    const Illustration = illustrationsByIcon[icon] ?? StrategyIllustration;
    return <Illustration />;
};

export default ApproachIllustration;
