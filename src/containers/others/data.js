// others data

const othersData = {
    title: 'Other Considerations',
    sections: [
	    {
            title: 'UI Tech Stack and Frameworks',
            items: [
                'Angular(https://angular.io/): if we consider building certain views in Angular and later port/integrate to non Angular web apps by leveraging https://angular.io/guide/elements. A sample use case, we need to build a TuneIn audio player UI embedding to users web products built by any UI frameworks.',
                'React(https://react.dev/): if we consider further scaling TuneIn web app into Mobile(React-native), and AR/VR/Metaverse ecosystem.',
                'Nextjs(https://nextjs.org/): if we plan to build TuneIn marketing site that is less complex logic wise but better page load rendering and SEO optimizations.',
            ]
	    },
	    {
            title: 'Page Data and Rendering Strategy',
            items: [
                'CSR(Client Side Rendering): build highly interactive TuneIn web apps/tools such as content creator studio, users data insights/analytics apps.',
                'SSR(Server Side Rendering): build certain TuneIn web features that can leverage server side generated mark ups delivering to the clients',
                'SSG(Static Site Generator): build TuneIn web pages that are less complex but more sensitive to page load speed and SEO results such as Tunein.com marketing page.',
                'UI State Management(Redux): for high interactive experiences powered by client side data such as heavy editing functions, undo/redo etc'
            ]
	    },
	    {
            title: 'Page Speed and Performance',
            items: [
                'Server side rendering: for certain parts of TuneIn web apps mixing with CSR as needed.',
                'Code splitting: clear separations between required data before page initial render, data for initial render and non visual UI handlings after initial view render(import, importForDisplay, importForAfterDisplay).',
                'Graphql: no over or under data fetching, leverage differ/streaming support for certain Graphql fields to better optimize page initial render, also support EntryPoint for parallelized code+data downloading. A sample use case is to fetch visible TuneIn stations for initial render, and stream all other items afterwards without blocking the first visual completion. Consider usering Relay for react app, and Appolo for non React apps.'
            ]
	    },
        {
            title: 'Cross Platform and Mobile Support',
            items: [
                'React-Native: if we optimize web/mobile engineering resources mobility, productivity and less learning curve, but it sacrifices overall performance given a larger js bundle size and less optimized mobile hardware manipulations.',
                'Native app engineering: iOS -> Objective C, Swift(better), Android -> Java, Kotlin(KComponent API, better).',
                'SSR on Mobile: produce mobile markups from the server side and pass unified data into both iOS and Android clients, we need special Android and iOS infra integrators to render the views properly based on the returned(SSR) data.'
            ]
        },
        {
            title: 'Quality Improvements(i18n, a11y, theme, security, logging etc)',
            items: [
                'i18n: if we have needs scaling to international users.',
                'a11y: if we need to scale to certain audiences such as government/community related partnerships.',
                'Theme: establish a centralized design system primitives value fetcher utility, ideally shared for both web and mobile for consistent theming control, easier to upgrade design system version and dark mode support.',
                'Security: from the UI side it is mostly around escaping user generated content(including Generative AI outputs) and make sure any script is not executed on the browser.',
                'Logging: it is essential for UI performance and user flow collection and measurement, usually handling logging initiatives after page initial render to avoid blocking the visual experience.'
            ]
        },
        {
            title: 'Impact Measurement, Experimentation, A/B Testing Support',
            items: [
                'To better quantify the impact from newly released features, we can consider establish an experimentation infra that allows shipping new features in A/B testing, debug regressions and quantify business impacts before launch decisions.',
                'Due to novelty effect, UX/Styling changes can be subjective which require longer time for experiment to capture user behaviors impacts.',
                'This also contributes to more proper team prioritization and future OKR/roadmapings.'
            ]
        },
        {
            title: 'AI, ML, Generative AI',
            items: [
                'Consider training AutoML(custom models) based on TuneIn users data, and leverage that for web app content recommendations and targeted ads.',
                'Consider adding a global power search experience that can answer users\' natural language, and respond with proper content with TuneIn content suggestions.'
            ]
        },
        {
            title: 'AR/VR, Metaverse',
            items: [
                'Can leverage React ecosystem and build AR/VR based TuneIn experience',
                'Further integrate with third-party apps including Roblox, Metaverse, Quest 3, Vision Pro etc.',
                'Potentially work with advertisers in AR/VR space on ads features.'
            ]
        },
        {
            title: 'Monetization, Enterprise Partnerships',
            items: [
                'For consumer side we can have free content access account and a premium account based on subscription model.',
                'For the enterprise side we provide advertisers management and insight tools, helping businesses grow their success.',
                'For third-party partnership we can consider making TuneIn experience embeddable just like Google Map JS API, business users/developers can embed TuneIn player/stations into their apps(web and mobile), and we monetize based on subscription, pay as you go(usages consumption captured from API key), only pay from materialized profit etc.'
            ]
        }
    ]
};


export default othersData