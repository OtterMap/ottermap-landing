const Logos = () => {
  const trades = ["Paving", "Concrete", "Sitework", "Fencing", "Excavation", "Utilities"];

  return (
    <div className="px-5 lg:px-10 py-10 text-center">
      <p className="text-sm font-semibold text-[#5B5F5A] tracking-wide mb-6">
        Built for general contractors and subcontractors across every trade
      </p>
      <div className="flex justify-center gap-8 sm:gap-12 flex-wrap text-sm sm:text-base font-bold text-[#5B5F5A] opacity-60">
        {trades.map((trade) => (
          <span key={trade}>{trade}</span>
        ))}
      </div>
    </div>
  );
};

export default Logos;
