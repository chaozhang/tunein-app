// header data
import profile from '../../data/profile'
import gitRepo from '../../data/gitRepo'


const footerData = {
    year: (new Date()).getFullYear().toString(),
    name: profile.name,
    title: profile.title,
    repo: {
        name: 'tunein-app',
        user: gitRepo.user,
        url: gitRepo.url
    },
    gitBtns: gitRepo.gitBtns
};


export default footerData