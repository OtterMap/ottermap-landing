const problems = [
  {
    title: "Manual scaling is slow and error-prone",
    body: "Every plan set has a different scale, orientation, and revision. Measuring by hand across dozens of sheets eats hours estimators don't have.",
    answer: "Ottermap auto-detects scale from the title block and calibrates every sheet automatically.",
  },
  {
    title: "Missed scope means lost margin",
    body: "A detail buried in a legend or a revision cloud on sheet 9 can throw off an entire bid — and by the time it's caught, the job is already priced.",
    answer: "Layered takeoffs flag every callout, legend item, and revision so nothing slips through.",
  },
  {
    title: "Every trade re-measures the same plan set",
    body: "Paving, concrete, fencing, and sitework crews often re-derive quantities from the same drawings independently, wasting time and creating inconsistent numbers.",
    answer: "One shared, editable takeoff per project keeps every trade working from the same numbers.",
  },
  {
    title: "Large plan sets don't scale",
    body: "Multi-sheet, multi-phase projects and portfolio bids turn into a filing problem before they're even an estimating problem.",
    answer: "Bulk upload and organize hundreds of sheets across phases, revisions, and sites in one dashboard.",
  },
];

const Problems = () => {
  return (
    <div className="pt-16 sm:pt-24 px-4 md:px-20 pb-16 sm:pb-24">
      <div className="flex flex-col gap-4 pb-12 sm:pb-16 justify-center items-center text-center max-w-3xl mx-auto">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D85A30] uppercase">
          The problem with manual takeoffs
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Blueprints shouldn&apos;t cost you a day of estimating
        </h2>
        <p className="text-base sm:text-lg text-[#5B5F5A]">
          Scaling rulers, printed plan sets, and spreadsheets slow every bid down — and one missed detail on page 14 can cost you the job.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {problems.map((item) => (
          <div key={item.title} className="bg-[#EAF3EC] border border-[#DCE5DF] rounded-2xl p-6 sm:p-7">
            <div className="flex items-start gap-3 text-[#D85A30] font-bold text-sm uppercase tracking-wide mb-4">
              <span className="w-6 h-6 rounded-full border-[1.5px] border-[#D85A30] flex items-center justify-center text-sm flex-shrink-0">
                !
              </span>
              {item.title}
            </div>
            <p className="text-sm sm:text-base">{item.body}</p>
            <p className="text-sm sm:text-base text-[#175f33] font-medium mt-4">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
