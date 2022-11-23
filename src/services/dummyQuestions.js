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
        question: "How much is 3 x 3?",
        answers: [
            {
                answer: "21",
                index: 1,
            },
            {
                answer: "12",
                index: 2,
            },
            {
                answer: "6",
                index: 3,
            },
            {
                answer: "9",
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