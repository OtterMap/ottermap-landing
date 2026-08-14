const steps = [
  {
    num: "1",
    title: "Upload your plans",
    body: "Drop in PDF blueprints, architectural drawings, spec sheets, or legends — single sheet or full set.",
  },
  {
    num: "2",
    title: "Auto-calibrate scale",
    body: "Ottermap reads the title block and scale bar to calibrate every sheet, no manual ruler work required.",
  },
  {
    num: "3",
    title: "Review AI-generated quantities",
    body: "Areas, lines, and counts are detected automatically by layer and trade — edit, relabel, or add notes in a click.",
  },
  {
    num: "4",
    title: "Export and bid",
    body: "Send branded, exportable takeoffs to your estimating software, CRM, or straight into a proposal.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#EAF3EC] py-16 sm:py-24 px-4 md:px-20">
      <div className="flex flex-col gap-4 pb-12 sm:pb-16 justify-center items-center text-center">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#175f33] uppercase">
          How it works
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          From PDF to priced takeoff in four steps
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.num} className="bg-white border border-[#DCE5DF] rounded-2xl p-6">
            <div className="w-9 h-9 rounded-full bg-[#218448] text-white font-bold text-sm flex items-center justify-center mb-5">
              {step.num}
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-[#5B5F5A]">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
