import FAQ from "../common/FAQ"
const FAQs = () => {
    const faq = [
        {
            id: 1,
            question: 'What is Ottermap and how does it work?',
            answer: 'Ottermap is a smart mapping tool that generates fast, accurate takeoffs and property maps for landscaping, paving, and snow removal teams—no manual measurements required.'
        },
        {
            id: 2,
            question: 'Can Ottermap be used across divisions (landscape, paving, snow)?',
            answer: 'Yes. Our layered mapping system supports all major outdoor service verticals.'
        },
        {
            id: 3,
            question: 'What types of areas can Ottermap map?',
            answer: 'Ottermap can handle lawns, beds, drive lanes, sidewalks, snow zones, salt areas, and more.'
        },
        {
            id: 4,
            question: 'Can I export takeoffs to other formats like PDF or Excel?',
            answer: 'Absolutely. You can export maps and measurements to PDF, Excel, or integrate with your CRM.'
        },
        {
            id: 5,
            question: 'Can I manage multi-property portfolios with Ottermap?',
            answer: 'Yes. Easily tag, filter, and sort thousands of properties by region, site type, or client.'
        },
    ];
    return (
        <FAQ faq={faq} />
    )
}

export default FAQs
