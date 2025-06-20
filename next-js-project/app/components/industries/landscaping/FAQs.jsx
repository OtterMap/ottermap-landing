import FAQ from "../../common/FAQ";
const FAQs = () => {
    const faq = [
        {
            id: 1,
            question: 'How fast can I generate a landscape takeoff using OtterMaps?',
            answer: 'With OtterMaps, you can go from entering a property address to generating a detailed takeoff map in under 2 minutes. The platform uses AI to automatically detect turf, mulch, beds, and more—eliminating the need for time-consuming manual site measurements.'
        },
        {
            id: 2,
            question: 'Can OtterMaps really replace on-site measurements?',
            answer: 'Yes—for most properties. OtterMaps leverages high-resolution aerial imagery and AI zone detection to deliver takeoffs with over 98% accuracy. For highly complex sites, estimators can make manual adjustments directly within the platform to match on-ground realities.'
        },
        {
            id: 3,
            question: 'Does OtterMaps help with managing multiple landscaping sites or clients?',
            answer: 'Absolutely. OtterMaps includes a Portfolio Management Dashboard that allows you to organize properties by region, client name, or contract status. You can handle 10 or 10,000 sites with ease—making it ideal for regional or national contractors managing large volumes.'
        },
        {
            id: 4,
            question: 'Is OtterMaps mobile-friendly for on-site teams?',
            answer: 'Yes. Field crews and estimators can access, edit, and draw on maps using GPS-enabled mobile devices. Whether you’re marking trees, zones, or irrigation lines on the go, OtterMaps ensures seamless collaboration between office and field teams.'
        },
        {
            id: 5,
            question: 'Will using OtterMaps improve my proposal win rate?',
            answer: 'Yes—contractors using OtterMaps have reported up to a 35% increase in proposal win rates. With clean, branded, and visual PDF proposals that clearly show scope and coverage zones, clients are more confident in your professionalism and pricing.'
        },
    ];
    return (
        <FAQ faq={faq} />
    )
}

export default FAQs
