const dummyQuestions = [
    {
        index: 1,
        correctAnswer: 2,
        question: "Wich bird cannot fly?",
        answers: [
            {
                answer: "Chicken",
                index: 1,
            },
            {
                answer: "Ostrich",
                index: 2,
            },
            {
                answer: "Duck",
                index: 3,
            },
            {
                answer: "Goose",
                index: 4,
            },
        ]
    },
    {
        index: 2,
        correctAnswer: 2,
        question: "What cows drink?",
        answers: [
            {
                answer: "Milk",
                index: 1,
            },
            {
                answer: "Water",
                index: 2,
            },
            {
                answer: "Wine",
                index: 3,
            }
        ]
    },
    {
        index: 3,
        correctAnswer: 4,
        question: "Dummy question 3?",
        answers: [
            {
                answer: "Sample answer 21",
                index: 1,
            },
            {
                answer: "Sample answer 22",
                index: 2,
            },
            {
                answer: "Sample answer 23",
                index: 3,
            },
            {
                answer: "Sample answer 24",
                index: 4,
            },
        ]
    },
]

export function getAllQuestions() {
    return dummyQuestions;
}

export function getQuestion(i) {
    return dummyQuestions[i];
}