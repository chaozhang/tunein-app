// readme data

const readmeData = {
    title: 'Mini TuneIn application',
    sections: [
	    {
            title: 'Development',
            items: [
                'gh-page repo',
                'clone chaozhang/tunein-app',
                'yarn',
                'yarn start',
                'yarn build',
                'yarn deploy'
            ]
	    },
	    {
            title: 'Tech Stack Setup',
            items: [
                'Single Page React App',
                'Public Github Integration',
                'Deploy Web App into public URL',
                'UI Components, containers, data layer separation',
                'Advanced CSS - Stylus integration'
            ]
	    },
        {
            title: 'Supported Features',
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


export default readmeData