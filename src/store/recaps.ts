import {defineStore} from "pinia";

export interface Recap {
    year: number;
    n_images: number;
    statistics: Statistic[];
}

export interface Statistic {
    value: string;
    title: string;
}

export const useRecapsStore = defineStore('recaps', {
    state: () => ({
        recaps: [
            {
                year: 2024,
                n_images: 60,
                statistics: [
                    {
                        value: "4",
                        title: "Projects"
                    },
                    {
                        value: "17",
                        title: "Teams"
                    },
                    {
                        value: "62",
                        title: "Participants",
                    },
                    {
                        value: "21",
                        title: "Countries",
                    },
                    {
                        value: "10K",
                        title: "CHF of Price Pool"
                    }
                ] as Statistic[],
            }
        ] as Recap[],
    }),
    actions: {
        getRecapByYear() {
            return (year: number): Recap => {
                return this.recaps.filter((obj: Recap) => obj.year == year)[0]
            }
        }
    }
})