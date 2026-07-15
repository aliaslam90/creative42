const BrandingMockup = () => (
    <div className="service-mockup mockup-branding">
        <div className="mockup-dots">
            <span /><span /><span />
        </div>

        <div className="mockup-brand-row">
            <div className="mockup-brand-mark" />
            <div className="mockup-brand-lines">
                <span className="mockup-bar-line" style={{ width: "72%" }} />
                <span className="mockup-bar-line" style={{ width: "46%" }} />
            </div>
        </div>

        <div className="mockup-swatches">
            <span className="mockup-swatch" style={{ background: "#000000" }} />
            <span className="mockup-swatch" style={{ background: "#c8a244" }} />
            <span className="mockup-swatch" style={{ background: "#ffffff" }} />
            <span className="mockup-swatch" style={{ background: "#7a7a85" }} />
        </div>

        <div className="mockup-type-sample">Aa</div>

        <span className="mockup-pill-btn">Brand Kit</span>
    </div>
);

const UiUxMockup = () => (
    <div className="service-mockup mockup-uiux">
        <div className="mockup-dots">
            <span /><span /><span />
            <span className="mockup-topbar" />
        </div>

        <div className="mockup-avatar-row">
            <span className="mockup-avatar" />
            <span className="mockup-bar-line" style={{ width: "60%" }} />
        </div>

        <div className="mockup-grid">
            <span /><span /><span />
            <span /><span /><span />
        </div>

        <div className="mockup-slider-row">
            <span className="mockup-slider-icon"><i className="iconoir-filter-alt" /></span>
            <span className="mockup-slider-track"><span className="mockup-slider-dot" /></span>
        </div>
    </div>
);

const ContentMockup = () => (
    <div className="service-mockup mockup-content">
        <div className="mockup-tabs">
            <span className="mockup-tab active">Article.md</span>
            <span className="mockup-tab">Draft.txt</span>
        </div>

        <div className="mockup-doc-lines">
            <span className="mockup-doc-line title" style={{ width: "70%" }} />
            <span className="mockup-doc-line" style={{ width: "94%" }} />
            <span className="mockup-doc-line" style={{ width: "88%" }} />
            <span className="mockup-doc-line" style={{ width: "60%" }} />
            <span className="mockup-doc-line" style={{ width: "92%" }} />
            <span className="mockup-doc-line" style={{ width: "40%" }} />
        </div>

        <div className="mockup-status-bar">
            <span className="mockup-status-ok"><i className="iconoir-check-circle" /> Published</span>
            <span>1,204 words</span>
        </div>
    </div>
);

const WebDevMockup = () => (
    <div className="service-mockup mockup-webdev">
        <div className="mockup-tabs">
            <span className="mockup-tab active">index.tsx</span>
            <span className="mockup-tab">api.py</span>
            <span className="mockup-tab">main.go</span>
        </div>

        <div className="mockup-code-lines">
            <div className="mockup-code-line">
                <span className="mockup-line-no">1</span>
                <span className="mockup-lang-badge lang-ts">TS</span>
                <span className="mockup-code-text">const build = () =&gt; {`{`}</span>
            </div>
            <div className="mockup-code-line">
                <span className="mockup-line-no">2</span>
                <span className="mockup-code-text mockup-indent">const ui = &lt;App /&gt;</span>
            </div>
            <div className="mockup-code-line">
                <span className="mockup-line-no">3</span>
                <span className="mockup-code-text mockup-indent">return render(ui)</span>
            </div>
            <div className="mockup-code-line">
                <span className="mockup-line-no">4</span>
                <span className="mockup-code-text">{`}`}</span>
            </div>
            <div className="mockup-code-line">
                <span className="mockup-line-no">5</span>
                <span className="mockup-lang-badge lang-py">PY</span>
                <span className="mockup-code-text">def deploy(app):</span>
            </div>
            <div className="mockup-code-line">
                <span className="mockup-line-no">6</span>
                <span className="mockup-lang-badge lang-go">GO</span>
                <span className="mockup-code-text">func main() {`{}`}</span>
            </div>
        </div>

        <div className="mockup-status-bar">
            <span className="mockup-status-ok"><i className="iconoir-check-circle" /> build passing</span>
            <span>UTF-8</span>
        </div>
    </div>
);

const SocialMockup = () => (
    <div className="service-mockup mockup-social">
        <span className="mockup-platform-bubble bubble-instagram" style={{ top: "6%", left: "8%" }}>
            <i className="lab la-instagram" />
        </span>
        <span className="mockup-platform-bubble bubble-facebook" style={{ top: "12%", right: "10%" }}>
            <i className="lab la-facebook-f" />
        </span>
        <span className="mockup-platform-bubble bubble-tiktok" style={{ top: "46%", left: "4%" }}>
            <i className="iconoir-tiktok" />
        </span>
        <span className="mockup-platform-bubble bubble-x" style={{ top: "50%", right: "6%" }}>
            <i className="lab la-twitter" />
        </span>
        <span className="mockup-platform-bubble bubble-linkedin" style={{ bottom: "8%", left: "14%" }}>
            <i className="lab la-linkedin-in" />
        </span>
        <span className="mockup-platform-bubble bubble-youtube" style={{ bottom: "4%", right: "16%" }}>
            <i className="lab la-youtube" />
        </span>

        <span className="mockup-float-badge badge-like"><i className="iconoir-heart-solid" /> 12.4k</span>
        <span className="mockup-float-badge badge-comment"><i className="iconoir-chat-bubble" /> 3.2k</span>

        <div className="mockup-reach-card">
            <div className="mockup-reach-label">
                <span>Reach</span>
                <span className="mockup-reach-value">+248%</span>
            </div>
            <div className="mockup-reach-bars">
                <span style={{ height: "35%" }} />
                <span style={{ height: "48%" }} />
                <span style={{ height: "40%" }} />
                <span style={{ height: "62%" }} />
                <span style={{ height: "56%" }} />
                <span style={{ height: "75%" }} />
                <span style={{ height: "100%" }} className="highlight" />
            </div>
        </div>
    </div>
);

const MediaMockup = () => (
    <div className="service-mockup mockup-media">
        <div className="mockup-video-frame">
            <span className="mockup-rec-badge"><span className="mockup-rec-dot" /> REC</span>
            <span className="mockup-play-btn"><i className="iconoir-play-solid" /></span>
            <span className="mockup-timecode">00:24:11</span>
        </div>
        <div className="mockup-filmstrip">
            <span /><span /><span /><span /><span />
        </div>
    </div>
);

const DigitalMarketingMockup = () => (
    <div className="service-mockup mockup-marketing">
        <div className="mockup-stat-row">
            <span className="mockup-stat-pill">CTR <strong>4.8%</strong></span>
            <span className="mockup-stat-pill">ROAS <strong>6.2x</strong></span>
        </div>

        <div className="mockup-trend-chart">
            <svg viewBox="0 0 200 90" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                </defs>
                <path d="M0,70 L30,60 L60,64 L90,42 L120,48 L150,20 L200,10 L200,90 L0,90 Z" fill="url(#trendFill)" />
                <path d="M0,70 L30,60 L60,64 L90,42 L120,48 L150,20 L200,10" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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
                <span className="mockup-funnel-bar" style={{ width: "62%" }} />
            </div>
            <div className="mockup-funnel-row">
                <span>Conversions</span>
                <span className="mockup-funnel-bar" style={{ width: "28%" }} />
            </div>
        </div>
    </div>
);

const mockupsById: Record<number, React.FC> = {
    1: BrandingMockup,
    2: UiUxMockup,
    3: ContentMockup,
    4: WebDevMockup,
    5: SocialMockup,
    6: MediaMockup,
    7: DigitalMarketingMockup,
};

const ServiceIllustration = ({ id }: { id: number }) => {
    const Mockup = mockupsById[id] ?? BrandingMockup;
    return <Mockup />;
};

export default ServiceIllustration;
