const questions = [
    {
        'question': 'Live in a Desert or a Tundra',
        'answer1' : 'Desert',
        'answer2' : 'Tundra'
    },
    {
        'question': 'would you rather be a Cat or Dog',
        'answer1' : 'Cat',
        'answer2' : 'Dog'
    },
    {
        'question': 'would you rather be Rich or Happy',
        'answer1' : 'Rich',
        'answer2' : 'Happy'
    },
    {
        'question': 'would you rather be born 1000 years in the future or the past',
        'answer1' : 'Future',
        'answer2' : 'Past'
    },
    {
        'question': 'would you rather Live in a Sci-fi world or a Fantasy world?',
        'answer1' : 'Sci-fi',
        'answer2' : 'Fantasy'
    },
    {
        'question': 'would you rather make a ground breaking discovery but no one will ever know about it, or do something controversial and be know throught the whole world? ',
        'answer1' : 'Make a groundbreaking discovery',
        'answer2' : 'Become famous through controversy'
    }
]

function randomWYRQuestions() {
    const randomIndex = Math.floor(Math.random() * questions.length)
    const randomQuestion = questions[randomIndex]
    return randomQuestion
}

module.exports = randomWYRQuestions //doesn't need parenthesis