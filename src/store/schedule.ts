import {defineStore} from "pinia";

export const useScheduleStore = defineStore('scheduleStore', {
    state: () => ({
        schedule: {
            friday: [
                {
                    time: '17:00',
                    event: 'Arrival, registration and team formation',
                    place: 'Aula Magna'
                },
                {
                    time: '18:00',
                    event: 'Welcome by the Neural Wave team',
                    place: 'Aula Magna'
                },
                {
                    time: '18:15',
                    event: 'Presentation of the projects',
                    place: 'Aula Magna'
                },
                {
                    time: '18:45',
                    event: 'Tutorial by Lightning.ai on their platform',
                    place: 'Aula Magna'
                },
                {
                    time: '19:00',
                    event: 'Event Kick-Off: Start Hacking!',
                    place: 'Aula Magna'
                },
            ],
            saturday: [
                {
                    time: '07:00 07:15',
                    event: 'Morning Yoga',
                    place: 'TBA'
                },
                {
                    time: '08:00 09:00',
                    event: 'Breakfast',
                    place: 'TBA'
                },
                {
                    time: '11:00',
                    event: 'Keynote',
                    place: 'TBA'
                },
                {
                    time: '12:00 12:15',
                    event: 'Surprise challenge #1',
                    place: 'TBA'
                },
                {
                    time: '13:00',
                    event: 'Lunch',
                    place: 'TBA'
                },
                {
                    time: '14:00 16:00',
                    event: 'Networking at company stands',
                    place: 'TBA'
                },
                {
                    time: '17:00',
                    event: 'Keynote',
                    place: 'TBA'
                },
                {
                    time: '18:00',
                    event: 'Dinner',
                    place: 'TBA'
                },
                {
                    time: '20:30 20:45',
                    event: 'Surprise challenge #2',
                    place: 'TBA'
                }
            ],
            sunday: [
                {
                    time: '07:00 07:15',
                    event: 'Morning Yoga',
                    place: 'TBA'
                },
                {
                    time: '08:00 09:00',
                    event: 'Breakfast',
                    place: 'TBA'
                },
                {
                    time: '11:00',
                    event: 'Project submissions',
                    place: 'Online'
                },
                {
                    time: '12:00',
                    event: 'Lunch',
                    place: 'TBA'
                },
                {
                    time: '14:00',
                    event: 'Award ceremony',
                    place: 'Aula Magna'
                },
                {
                    time: '15:00',
                    event: 'Closing remarks',
                    place: 'Aula Magna'
                },
                {
                    time: '16:00',
                    event: 'The end',
                    place: 'Aula Magna'
                }
            ]
        }
    })
})