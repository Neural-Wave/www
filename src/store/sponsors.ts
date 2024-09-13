import {defineStore} from "pinia";

interface Sponsor {
    name: string
    url: string
}

export const useSponsorsStore = defineStore('sponsors', {
    state: () => ({
        sponsors: [
            {
                name: 'usi',
                url: 'https://www.usi.ch/'
            },
            {
                name: 'lightning',
                url: 'https://lightning.ai/'
            },
            {
                name: 'bosch',
                url: 'https://www.bosch.ch/'
            },
            {
                name: 'swisscom',
                url: 'https://www.swisscom.ch/'
            },
            {
                name: 'cscs',
                url: 'https://www.cscs.ch/'
            },
            {
                name: 'duferco',
                url: 'https://www.duferco.com/'
            },
            {
                name: 'brightside',
                url: 'https://brightside-capital.com/'
            },
            {
                name: 'confinale',
                url: 'https://confinale.ch/en/'
            },
            {
                name: 'banana',
                url: 'https://www.banana.ch/'
            },
            {
                name: 'egonym',
                url: 'https://egonym.com/'
            },
            {
                name: 'pastahr',
                url: 'https://www.pastahr.com/'
            },
            {
                name: 'seegarten',
                url: 'https://www.hotellido-lugano.com/en/'
            }
        ] as Sponsor[]
    })
})