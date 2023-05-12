//variable

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
    {
        qoute: "Be the change that you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        qoute: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        qoute: "We can't solve problems by using the same kind of thinking we used when we created them.",
        person: "Albert Einstein"
    },
    {
        qoute: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
    },
    {
        qoute: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        person: "Edmund Burke"
    },
    {
        qoute: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison"
    },
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        person: "Albert Einstein"
    },
    {
        qoute: "Don't cry because it's over, smile because it happened.",
        person: "Dr. Seuss"
    },
    {
        qoute: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        qoute: "The best way to predict your future is to create it.",
        person: "Abraham Lincoln"
    },
    {
        qoute: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        person: "Ralph Waldo Emerson"
    },
    {
        qoute: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        qoute: "The future belongs to those who believe in the beauty of their dreams.",
        person: " Eleanor Roosevelt"
    },
    {
        qoute: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky"
    },
    {
        qoute: "Education is the most powerful weapon which you can use to change the world.",
        person: "Nelson Mandela"
    },
    {
        qoute: "Happiness is not something ready-made. It comes from your own actions.",
        person: "Dalai Lama"
    },
    {
        qoute: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        person: "Martin Luther King Jr."
    },
    {
        qoute: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        qoute: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        person: " Albert Einstein"
    },
    {
        qoute: "If you want to go fast, go alone. If you want to go far, go together.",
        person: "African Proverb"
    },
]

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].qoute;
    person.innerText = quotes[random].person;
})