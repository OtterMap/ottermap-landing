const trades = [
  "General Contractors",
  "Paving",
  "Concrete",
  "Fencing",
  "Sitework & Excavation",
  "Utilities",
  "Landscaping",
  "Snow Removal",
];

const Trades = () => {
  return (
    <div className="bg-[#EAF3EC] py-16 sm:py-24 px-4 md:px-20">
      <div className="flex flex-col gap-4 pb-10 justify-center items-center text-center max-w-3xl mx-auto">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#175f33] uppercase">
          Built for every trade
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          One takeoff tool for every GC and subcontractor on the job
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
        {trades.map((trade) => (
          <span
            key={trade}
            className="bg-white border border-[#DCE5DF] rounded-full px-5 py-2.5 text-sm font-semibold text-[#175f33]"
          >
            {trade}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Trades;
