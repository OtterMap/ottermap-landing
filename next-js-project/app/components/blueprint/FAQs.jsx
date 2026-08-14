import FAQ from "../common/FAQ";

const FAQs = () => {
  const faq = [
    {
      id: 1,
      question: "What file types can I upload for blueprint takeoffs?",
      answer:
        "Ottermap accepts multi-page PDF plan sets, scanned drawings, and common CAD export formats. Single sheets or full plan sets can be uploaded in one project.",
    },
    {
      id: 2,
      question: "How does Ottermap calibrate scale automatically?",
      answer:
        "Ottermap reads the scale bar and title block on each sheet to calibrate measurements automatically. You can always adjust or manually set scale if a sheet is missing this information.",
    },
    {
      id: 3,
      question: "Can blueprint takeoffs be combined with aerial/parcel takeoffs?",
      answer:
        "Yes. Blueprint takeoffs work alongside Ottermap's existing aerial and parcel-based takeoff tools within the same project and dashboard.",
    },
    {
      id: 4,
      question: "Which trades is this built for?",
      answer:
        "Blueprint takeoffs are built for general contractors and subcontractors across paving, concrete, fencing, sitework, excavation, utilities, landscaping, and snow removal.",
    },
    {
      id: 5,
      question: "Can I export takeoffs to my estimating software or CRM?",
      answer:
        "Yes. Takeoffs export to PDF and Excel, and can be pushed directly into your CRM or estimating software via integration.",
    },
  ];

  return <FAQ faq={faq} />;
};

export default FAQs;
