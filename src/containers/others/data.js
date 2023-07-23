// others data

const othersData = {
    title: 'Mini TuneIn application - Other Considerations',
    sections: [
	    {
            title: 'UI Tech Stack and Frameworks',
            items: [
                'Angular(https://angular.io/): if we consider building certain views in Angular and later port/integrate to non Angular web apps by leveraging https://angular.io/guide/elements. A sample use case, we need to build a TuneIn audio plater UI embeding to users web products built by any UI frameworks.',
                'React(https://react.dev/): if we consider further scaling TuneIn web app into Mobile(React-native), and AR/VR/Metaverse ecosystem.',
                'Nextjs(https://nextjs.org/): if we plan to build TuneIn marketing site that is less complex logic wise but better page load rendering and SEO opimizations.',
            ]
	    },
	    {
            title: 'UI Rendering Engine and Strategy',
            items: [
                'CSR(Client Side Rendering): build highly interactive TuneIn web apps/tools such as content creator studio, users data insights/analytics apps.',
                'SSR(Server Side Rendering): build certain TuneIn web features that can leverage server side generated markups deliverying to the clients',
                'SSG(Static Site Generator): build TuneIn web pages that are less complex but more sensive to page load speed and SEO results such as Tunein.com marketing page.'
            ]
	    },
	    {
            title: 'Page Speed and Performance',
            items: [
                'Server side rendering: for certain parts of TuneIn web apps mixing with CSR as needed.',
                'Code splitting: clear seperations between required data before page inial render, data for initial render and non visual UI handlings after initial view render(import, importForDisplay, importForAfterDisplay).',
                'Graphql: no over or under data fetching, leverage difer/streaming support for certain Graphql fields to better opimize page initial render, also support EntryPoint for parallelized code+data downloading. A sample use case will be only fetch visible TuneIn stations for initial render, and stream all other items afterwards without blocking the initial paint.'
            ]
	    },
        {
            title: 'Cross Platform and Mobile Support',
            items: [
                'React-Native: if we opimite web/mpbile engineering resources mobility, productivity and less learning curve, but it sacrafise performance.',
                'Native app engineering: iOS -> Objective C, Swift(better), Android -> Java, Kotlin(KComponent API, better).',
                'SSR on Mobile: produce mobile markups from the server side and pass unified data into both iOS and Andoird clients, we need a spcial Andoird and iOS infra integrator to render properly based on the returned data.'
            ]
        },
        {
            title: 'Quality Improvements(i18n, a11y, theme, security, logging etc)',
            items: [
                'i18n: if we have needs scaling to international users.',
                'a11y: if we need to scale to certain audiance group users such as goverment/community related partnerships.',
                'theme: ',
                'Full station details store in a Map for fast data look up',
                'Single station detailed view with audio playable(if the streaming URL works)',
                'Stations Grid view, clicking on a single station opens up full detailed view on the top',
                'Added Readme view on navigation',
                'Added Future Consideration discussion points for future conversations is applicable'
            ]
        },
        {
            title: 'Impact Measurement, Experimentation, A/B Testing Support',
            items: [
                'On initial page load fetch all stations data',
                'Cache and store optimized stations data',
                'Simple stations list with limited data',
                'Full station details store in a Map for fast data look up',
                'Single station detailed view with audio playable(if the streaming URL works)',
                'Stations Grid view, clicking on a single station opens up full detailed view on the top',
                'Added Readme view on navigation',
                'Added Future Consideration discussion points for future conversations is applicable'
            ]
        },
        {
            title: 'AI, ML, Generative AI',
            items: [
                'On initial page load fetch all stations data',
                'Cache and store optimized stations data',
                'Simple stations list with limited data',
                'Full station details store in a Map for fast data look up',
                'Single station detailed view with audio playable(if the streaming URL works)',
                'Stations Grid view, clicking on a single station opens up full detailed view on the top',
                'Added Readme view on navigation',
                'Added Future Consideration discussion points for future conversations is applicable'
            ]
        },
        {
            title: 'AR/VR, Metaverse',
            items: [
                'On initial page load fetch all stations data',
                'Cache and store optimized stations data',
                'Simple stations list with limited data',
                'Full station details store in a Map for fast data look up',
                'Single station detailed view with audio playable(if the streaming URL works)',
                'Stations Grid view, clicking on a single station opens up full detailed view on the top',
                'Added Readme view on navigation',
                'Added Future Consideration discussion points for future conversations is applicable'
            ]
        },
        {
            title: 'Monetization, Enterprise Patnerships',
            items: [
                'On initial page load fetch all stations data',
                'Cache and store optimized stations data',
                'Simple stations list with limited data',
                'Full station details store in a Map for fast data look up',
                'Single station detailed view with audio playable(if the streaming URL works)',
                'Stations Grid view, clicking on a single station opens up full detailed view on the top',
                'Added Readme view on navigation',
                'Added Future Consideration discussion points for future conversations is applicable'
            ]
        }
    ]
};



export default othersData