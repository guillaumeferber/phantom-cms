export const QUIZ_PROGRESS = {
    STARTED: 'STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    FINISHED: 'FINISHED'
};
export const QUIZ_LIST = [
    {
        name: 'default',
        id: 77324792,
        theme: 'Art et Culture',
        quiz: [
            {
                position: 1,
                label: 'Quel est le nom du chien dans la série des Aventures de Tintin',
                id: 223424980802,
                answerList: [
                    { label: 'Rantanplan', name:'reponse_1', slug: 'reponse_1_1', value: 'tintin', isAnswer: false },
                    { label: 'Milou', name:'reponse_1', slug: 'reponse_1_2', value: 'milou', isAnswer: true },
                    { label: 'Lassi', name:'reponse_1', slug: 'reponse_1_3', value: 'capitaine hadddock', isAnswer: false }
                ]
            },
            {
                position: 2,
                label: 'Quel est le nom du 1er homme sur la Lune',
                id: 677720002,
                answerList: [
                    { label: 'Neil Armstrong', name:'reponse_2', slug: 'reponse_2_1', value: 'Neil Armstrong', isAnswer: true },
                    { label: 'Buzz Aldring', name:'reponse_2', slug: 'reponse_2_2', value: 'Buzz Aldring', isAnswer: false },
                    { label: 'Elon Musk', name:'reponse_2', slug: 'reponse_2_3', value: 'Elon Musk', isAnswer: false }
                ]
            },
            {
                position: 3,
                label: 'Combien y a-t-il de planètes autour du Soleil',
                id: 989816636,
                answerList: [
                    { label: '9', name:'reponse_3', slug: 'reponse_3_1', value: '9', isAnswer: false },
                    { label: '6', name:'reponse_3', slug: 'reponse_3_2', value: '6', isAnswer: false },
                    { label: '8', name:'reponse_3', slug: 'reponse_3_3', value: '8', isAnswer: true }
                ]
            }
        ]
    },
    {
        name: 'Quiz #2',
        id: 87971761273,
        theme: 'Histoire',
        quiz: [
            {
                position: 1,
                label: 'Quelle est la date de la réunification de l’Allemagne ?',
                id: 9808888,
                answerList: [
                    { label: '1946', name:'reponse_1', slug: 'reponse_1_1', value: '1946', isAnswer: false },
                    { label: '1980', name:'reponse_1', slug: 'reponse_1_2', value: '1980', isAnswer: false },
                    { label: '1990', name:'reponse_1', slug: 'reponse_1_3', value: '1990', isAnswer: true }
                ]
            },
            {
                position: 2,
                label: 'Quand l’URSS a-t-elle disparue (à la suite de la chute du mur de Berlin) ?',
                id: 76749980833,
                answerList: [
                    { label: '1971', name:'reponse_2', slug: 'reponse_2_1', value: '1971', isAnswer: false },
                    { label: '1981', name:'reponse_2', slug: 'reponse_2_2', value: '1981', isAnswer: false },
                    { label: '1991', name:'reponse_2', slug: 'reponse_2_3', value: '1991', isAnswer: true }
                ]
            }
        ]
    }
];
