import FAQ from "../../common/FAQ";
const FAQs = () => {
    const faq = [
        {
            id: 1,
            question: 'How accurate are Ottermap’s snow takeoffs?',
            answer: 'Ottermap delivers over 98% accuracy on snow zone takeoffs using high-resolution aerial imagery and AI-enhanced tools. You get clear, reliable measurements for drive lanes, walkways, salt zones, and piling areas—helping you price jobs precisely and reduce risk.'
        },
        {
            id: 2,
            question: 'Can I quote multiple snow properties at once with Ottermap?',
            answer: 'Yes. Ottermap is designed for multi-site bidding. Use our dashboard to manage, tag, and filter hundreds—or thousands—of snow removal sites, saving days of manual work across your portfolio.'
        },
        {
            id: 3,
            question: 'Do I still need to visit the site to build a snow proposal?',
            answer: 'No site visits required. With Ottermap, you enter an address or drop a pin, and our system automatically builds your snow service zones. Proposals are ready in minutes—perfect for peak season speed.'
        },
        {
            id: 4,
            question: 'Can I export branded proposals for snow contracts?',
            answer: 'Absolutely. Ottermap allows you to generate branded PDF proposals with your logo, zone color codes, and service annotations—ensuring your bids look professional and consistent across all clients.'
        },
        {
            id: 5,
            question: 'Is Ottermap easy for field and ops teams to use during snow season?',
            answer: 'Yes. Our platform is fully mobile-friendly, intuitive, and role-based—ideal for estimators, ops managers, and subcontractors. It works right from the field, streamlining communication and execution.'
        },
    ];
    return (
        <FAQ faq={faq} />
    )
}

export default FAQs
