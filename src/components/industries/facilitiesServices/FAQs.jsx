import FAQ from "../../common/FAQ";
const FAQs = () => {
    const faq = [
        {
            id: 1,
            question: 'How does OtterMaps help with managing large, multi-site portfolios?',
            answer: 'OtterMaps is built for scale. Whether you manage 10 or 10,000 sites, our multi-site dashboard with tagging and filtering allows you to organize properties by region, service type, or client—making portfolio management fast and frictionless.'
        },
        {
            id: 2,
            question: 'Can OtterMaps generate service maps for different types of facility zones?',
            answer: 'Yes. OtterMaps supports layered takeoffs for lawn care, snow removal, tree maintenance, walkways, service routes, and more—so you can create precise, service-specific visuals for any property type.'
        },
        {
            id: 3,
            question: 'Do field teams and managers have real-time access to site updates?',
            answer: 'Absolutely. Field users can drop GPS pins, draw edits, and sync updates instantly via mobile or tablet. Managers can monitor changes and status in real time across all active sites.'
        },
        {
            id: 4,
            question: 'What proposal formats can I export for client presentations or RFPs?',
            answer: 'You can export branded PDFs with high-resolution service maps and zone layers, ready for use in procurement meetings, bid responses, and facility audits—ensuring a professional and consistent presentation.'
        },
        {
            id: 5,
            question: 'How long does it take to start using OtterMaps?',
            answer: 'You can start immediately. With our free trial and no credit card required, simply upload a property address or drop a pin to begin mapping. Most users complete their first facility takeoff in under 15 minutes.'
        },
    ];
    return (
        <FAQ faq={faq} />
    )
}

export default FAQs
