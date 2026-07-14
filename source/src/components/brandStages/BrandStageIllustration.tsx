const commonProps = {
    viewBox: "0 0 240 200",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
};

const bold = {
    stroke: "#000000",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const thin = {
    stroke: "#000000",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};

const StrategyIllustration = () => (
    <svg {...commonProps}>
        {/* Base grid / desk plane */}
        <path {...thin} d="M20 168h200" opacity="0.35" />

        {/* Bullseye target */}
        <g className="illu-float">
            <circle cx="90" cy="88" r="52" {...thin} strokeDasharray="1 7" opacity="0.4" />
            <circle cx="90" cy="88" r="40" {...bold} />
            <circle cx="90" cy="88" r="26" {...bold} opacity="0.75" />
            <circle cx="90" cy="88" r="12" {...bold} opacity="0.55" />
            <circle cx="90" cy="88" r="4" fill="#000000" />
        </g>

        {/* Arrow landing dead-center */}
        <g className="illu-draw">
            <path {...bold} d="M158 30 94 84" pathLength="240" />
        </g>
        <path {...bold} d="M158 30 148 32 156 40Z" fill="#000000" />
        <path {...thin} d="m152 26 14-8 4 16-9-3-9 3 0-8Z" opacity="0.7" />

        {/* Roadmap dotted path with milestones */}
        <path {...thin} d="M30 150c20-30 40 10 60-10s30-40 60-30" strokeDasharray="1 8" opacity="0.55" />
        <circle className="illu-pulse" cx="30" cy="150" r="4" fill="#000000" />
        <circle className="illu-pulse" cx="90" cy="140" r="4" fill="#000000" style={{ animationDelay: "0.3s" }} />
        <circle className="illu-pulse" cx="150" cy="110" r="4" fill="#000000" style={{ animationDelay: "0.6s" }} />

        {/* Floating strategy note */}
        <g className="illu-float-slow" style={{ animationDelay: "0.4s" }}>
            <rect x="176" y="120" width="42" height="30" rx="4" {...bold} />
            <path {...thin} d="M183 130h28M183 137h20" opacity="0.7" />
        </g>
    </svg>
);

const IdentityIllustration = () => (
    <svg {...commonProps}>
        {/* Back mockup card */}
        <g className="illu-float-slow">
            <rect x="132" y="34" width="86" height="108" rx="10" {...thin} opacity="0.5" transform="rotate(8 175 88)" />
        </g>

        {/* Main brand card */}
        <g className="illu-float">
            <rect x="26" y="30" width="120" height="122" rx="12" {...bold} />
            <circle cx="60" cy="66" r="16" {...bold} />
            <path {...bold} d="M52 66a8 8 0 1 1 16 0" opacity="0.6" />
            <path {...thin} d="M86 60h48M86 72h34" opacity="0.7" />
            <path {...bold} d="M40 108h92M40 122h60M40 136h74" opacity="0.85" />
        </g>

        {/* Colour palette swatches */}
        <g>
            <circle className="illu-pulse" cx="168" cy="150" r="10" fill="#000000" />
            <circle className="illu-pulse" cx="190" cy="150" r="10" {...bold} style={{ animationDelay: "0.25s" }} />
            <circle className="illu-pulse" cx="212" cy="150" r="10" {...bold} opacity="0.5" style={{ animationDelay: "0.5s" }} />
        </g>

        {/* Typography sample */}
        <g className="illu-float-slow" style={{ animationDelay: "0.6s" }}>
            <text x="176" y="110" fontSize="34" fontFamily="serif" fill="#000000">Aa</text>
        </g>
    </svg>
);

const ActivationIllustration = () => (
    <svg {...commonProps}>
        {/* Ground line */}
        <path {...thin} d="M18 168h204" opacity="0.35" />

        {/* Growth bars */}
        <g>
            <rect className="illu-float" x="34" y="122" width="18" height="46" rx="2" fill="#000000" opacity="0.85" />
            <rect className="illu-float" x="62" y="98" width="18" height="70" rx="2" fill="#000000" opacity="0.85" style={{ animationDelay: "0.15s" }} />
            <rect className="illu-float" x="90" y="70" width="18" height="98" rx="2" fill="#000000" opacity="0.85" style={{ animationDelay: "0.3s" }} />
        </g>

        {/* Trend arrow arcing up to rocket */}
        <path {...bold} className="illu-draw" d="M34 150c40-10 70-60 110-90" pathLength="240" />

        {/* Rocket */}
        <g className="illu-float" style={{ animationDelay: "0.2s" }}>
            <path {...bold} d="M168 34c14 4 22 16 24 30-8 4-18 4-26-2-6-8-4-20 2-28Z" />
            <circle cx="180" cy="52" r="5" {...bold} />
            <path {...bold} d="m164 58-10 6 4-12" opacity="0.75" />
            <path {...bold} d="m190 46 10 4-8 8" opacity="0.75" />
        </g>

        {/* Radiating reach rings */}
        <circle className="illu-pulse" cx="192" cy="40" r="10" {...thin} opacity="0.5" />
        <circle className="illu-pulse" cx="192" cy="40" r="18" {...thin} opacity="0.3" style={{ animationDelay: "0.4s" }} />

        {/* Market pins */}
        <g className="illu-blink">
            <path {...bold} d="M204 118c0 10-8 16-8 16s-8-6-8-16a8 8 0 0 1 16 0Z" />
            <circle cx="196" cy="118" r="2.6" fill="#000000" />
        </g>
        <g className="illu-blink" style={{ animationDelay: "0.5s" }}>
            <path {...bold} d="M132 150c0 8-6 13-6 13s-6-5-6-13a6 6 0 0 1 12 0Z" opacity="0.75" />
            <circle cx="126" cy="150" r="2" fill="#000000" opacity="0.75" />
        </g>
    </svg>
);

const illustrationsById: Record<number, React.FC> = {
    1: StrategyIllustration,
    2: IdentityIllustration,
    3: ActivationIllustration,
};

const BrandStageIllustration = ({ id }: { id: number }) => {
    const Illustration = illustrationsById[id] ?? StrategyIllustration;
    return <Illustration />;
};

export default BrandStageIllustration;
