import FAQ from "../../common/FAQ";
const FAQs = () => {
    const faq = [
        {
            id: 1,
            question: 'How accurate are OtterMaps takeoffs compared to manual measurements?',
            answer: 'OtterMaps uses high-resolution aerial imagery and advanced mapping algorithms to deliver takeoff accuracy of over 98%, reducing the risk of over- or underestimating asphalt volume and material costs.'
        },
        {
            id: 2,
            question: 'Can OtterMaps handle multi-location or franchise paving projects?',
            answer: 'Yes. Our portfolio tagging and filtering tools are built for scalability—ideal for contractors managing regional or national accounts across schools, franchises, and municipalities.'
        },
        {
            id: 3,
            question: 'Do I need special equipment or software to use OtterMaps in the field?',
            answer: 'No special hardware is required. OtterMaps is cloud-based and works on any desktop, tablet, or mobile device. Field teams can access live edits, markups, and proposal tools directly from the truck or job site.'
        },
        {
            id: 4,
            question: 'Is OtterMaps compliant with ADA standards for commercial paving?',
            answer: 'Yes. OtterMaps includes ADA compliance mapping to help contractors measure and mark ramps, paths, and accessibility zones accurately—crucial for municipal, school, and commercial bids.'
        },
        {
            id: 5,
            question: 'What’s included in the free trial?',
            answer: 'The free trial gives you full access to OtterMaps\' core features—automated takeoffs, ADA zone mapping, proposal exports, and more—with no credit card required. You can start quoting real jobs immediately.'
        },
    ];
    return (
        <FAQ faq={faq} />
    )
}

export default FAQs
