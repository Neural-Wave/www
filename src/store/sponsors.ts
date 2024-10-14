import {defineStore} from "pinia";

interface Sponsor {
    name: string
    url: string
    type: string
}

export const useSponsorsStore = defineStore('sponsors', {
    state: () => ({
        categories: ['main', 'silver', 'bronze', 'project', 'compute', 'other'],
        sponsors: [
            {
                name: 'usi',
                url: 'https://www.usi.ch/',
                type: 'main'
            },
            {
                name: 'lightning',
                url: 'https://lightning.ai/',
                type: 'compute'
            },
            {
                name: 'bosch',
                url: 'https://www.bosch.ch/',
                type: 'project'
            },
            {
                name: 'swisscom',
                url: 'https://www.swisscom.ch/',
                type: 'project'
            },
            {
                name: 'cscs',
                url: 'https://www.cscs.ch/',
                type: 'bronze'
            },
            {
                name: 'duferco',
                url: 'https://www.duferco.com/',
                type: 'silver, project'
            },
            {
                name: 'brightside',
                url: 'https://brightside-capital.com/',
                type: 'bronze'
            },
            {
                name: 'confinale',
                url: 'https://confinale.ch/en/',
                type: 'bronze'
            },
            {
                name: 'banana',
                url: 'https://www.banana.ch/',
                type: 'bronze'
            },
            {
                name: 'pastahr',
                url: 'https://www.pastahr.com/',
                type: 'project'
            },
            {
                name: 'seegarten',
                url: 'https://www.hotellido-lugano.com/en/',
                type: 'other'
            },
            {
                name: 'masaba',
                url: 'https://www.masabacoffee.ch/en',
                type: 'other'
            }
        ] as Sponsor[]
    })
})