import {defineStore} from "pinia";

export const useScheduleStore = defineStore('scheduleStore', {
    state: () => ({
        schedule: {
            friday: [
                {
                    time: 'TBA',
                    event: 'Welcome to the event',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'Tutorial by Lightning.ai on their platform',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'Presentation of the projects and teams formation',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'Start hacking!',
                    place: 'TBA'
                },
            ],
            saturday: [
                {
                    time: 'TBA',
                    event: 'Hacking continues',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'Keynotes and activities',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'More hacking',
                    place: 'TBA'
                }
            ],
            sunday: [
                {
                    time: 'TBA',
                    event: 'Project submissions',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'Lugano sightseeing while jury determines the winners',
                    place: 'TBA'
                },
                {
                    time: 'TBA',
                    event: 'Award ceremony',
                    place: 'TBA'
                },
                {
                    time: '~ 16:30',
                    event: 'Closing remarks',
                    place: 'TBA'
                }
            ]
        }
    })
})