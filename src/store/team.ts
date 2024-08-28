import {defineStore} from "pinia";

interface TeamMember {
    name: string
    image: string
    linkedin: string
    github: string
    website: string
}

export const useTeamStore = defineStore('team', {
    state: () => ({
        teamMembers: [
            {
                name: 'Christian Altrichter',
                image: 'chris',
                linkedin: 'https://www.linkedin.com/in/christian-altrichter/',
                github: 'https://github.com/Altricch',
                website: ''
            },
            {
                name: 'Andrea Brites Marto',
                image: 'andrea',
                linkedin: 'https://www.linkedin.com/in/andrea-brites-marto/',
                github: 'https://github.com/britesma',
                website: ''
            },
            {
                name: 'Michele Cattaneo',
                image: 'michele',
                linkedin: 'https://www.linkedin.com/in/michele-cattaneo-614527210/',
                github: 'https://github.com/MicheleCattaneo',
                website: ''
            },
            {
                name: 'Jury D\'Onofrio',
                image: 'jury',
                linkedin: 'https://www.linkedin.com/in/jury-andrea-d-onofrio-905118298/',
                github: 'https://github.com/JuryAndrea',
                website: ''
            },
            {
                name: 'Nicolai Hermann',
                image: 'nico',
                linkedin: 'https://www.linkedin.com/in/nicolai-hermann-9598121b5/',
                github: 'https://github.com/nihermann',
                website: ''
            },
            {
                name: 'Francesco Huber',
                image: 'fra',
                linkedin: 'https://www.linkedin.com/in/francesco-huber-60111013b/',
                github: '',
                website: ''
            },
            {
                name: 'Kyla Kaplan',
                image: 'kyla',
                linkedin: 'https://www.linkedin.com/in/kyla-kaplan/',
                github: 'https://github.com/kybeka',
                website: ''
            },
            {
                name: 'Sophie Kergassner',
                image: 'sophie',
                linkedin: 'https://www.linkedin.com/in/sophie-kergassner/',
                github: '',
                website: ''
            },
            {
                name: 'Volodymyr Kyrylov',
                image: 'vol',
                linkedin: 'https://www.linkedin.com/in/darkproger/',
                github: 'https://github.com/proger',
                website: ''
            },
            {
                name: 'Adam Novak',
                image: 'adam',
                linkedin: 'https://www.linkedin.com/in/adam-novak-2a03b216b/',
                github: '',
                website: ''
            },
            {
                name: 'Edoardo Riggio',
                image: 'edo',
                linkedin: 'https://www.linkedin.com/in/edoardo-riggio/',
                github: 'https://github.com/edoriggio',
                website: 'https://www.erc-apps.com/'
            },
            {
                name: 'Elvi Mihai Sabau',
                image: 'elvi',
                linkedin: 'https://www.linkedin.com/in/elvimihai/',
                github: 'https://github.com/Frenzoid/',
                website: 'https://frenzoid.dev/'
            }
        ] as TeamMember[]
    })
})