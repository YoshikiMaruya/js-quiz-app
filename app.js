const quiz = [
    {
        question: 'マルヤヨシキの1番好きなコーヒーは何でしょう？',
        answers: [
            'WONDA　モーニングショット',
            'BOSS カフェオレ',
            'WANDA 金の微糖',
            'タリーズコーヒー　バリスタズブラック'
        ],
        correct: 'WONDA　モーニングショット'
    },
    {
        question: 'マルヤヨシキの1番好きなゲームは何でしょう？',
        answers: [
            'グランブルーファンタジー',
            '荒野行動',
            '第五人格',
            'PUBG'
        ],
        correct: 'グランブルーファンタジー'
    },
    {
        question: 'もにが作ってくれる料理の中でマルヤヨシキが1番好きなものは何でしょう？',
        answers:[
            'モヤシ炒め',
            '生姜焼き',
            '鮭ときのこの何か',
            'もに'
        ],
        correct: 'もに'
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }
    quizIndex++;
    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};
