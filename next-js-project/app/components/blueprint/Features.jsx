const features = [
  {
    icon: "PDF",
    title: "Any plan format",
    body: "Upload multi-page PDF plan sets, scanned drawings, or CAD exports — Ottermap handles them all in one project.",
  },
  {
    icon: "◎",
    title: "Automatic scale calibration",
    body: "No manual ruler-setting. Ottermap detects scale bars and title-block data to calibrate every sheet automatically.",
  },
  {
    icon: "▦",
    title: "Layered, trade-specific takeoffs",
    body: "Separate layers for paving, concrete, fencing, utilities, and sitework so every trade sees only what's relevant.",
  },
  {
    icon: "🛡",
    title: "Revision tracking",
    body: "See what changed between plan revisions so re-bids and change orders don't mean starting over.",
  },
  {
    icon: "👥",
    title: "Team collaboration",
    body: "Multiple estimators can work the same plan set with role-based permissions, comments, and shared notes.",
  },
  {
    icon: "↻",
    title: "Export anywhere",
    body: "Push finished takeoffs to PDF, Excel, your CRM, or estimating software — white-labeled with your branding.",
  },
];

const Features = () => {
  return (
    <div id="features" className="py-16 sm:py-24 px-4 md:px-20">
      <div className="flex flex-col gap-4 pb-12 sm:pb-16 justify-center items-center text-center max-w-3xl mx-auto">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D85A30] uppercase">
          Everything you need
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Built for plan sets, not just parcels
        </h2>
        <p className="text-base sm:text-lg text-[#5B5F5A]">
          Everything from Ottermap&apos;s aerial takeoff tools, purpose-built for blueprint and construction-document workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="border border-[#DCE5DF] rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-[#EAF3EC] flex items-center justify-center mb-4 text-[#175f33] font-bold text-sm">
              {feature.icon}
            </div>
            <h3 className="text-base font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-[#5B5F5A]">{feature.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
