const FlashWord = {
    data() {
        return {
            words:
            [
                {
                    word_a: 'merhaba',
                    word_b: 'hello',
                    hint: 'greeting',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'bir',
                    word_b: 'one',
                    hint: 'number',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'gri',
                    word_b: 'grey',
                    hint: 'color',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'elma',
                    word_b: 'apple',
                    hint: 'fruit',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'kahve',
                    word_b: 'coffee',
                    hint: 'drink',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
                {
                    word_a: 'isim',
                    word_b: 'name',
                    hint: 'human attribute',
                    answer: '',
                    correct: false,
                    checked: false,
                    answeredWrong: false
                },
            ],
            correctCount: 0,
            completed: false
        }
    },
    methods: {
        checkAnswer(word) {
            word.checked = true;
            word.correct = word.word_b == word.answer;
            if (word.correct) {
                this.correctCount++;
            }
            else {
                word.answeredWrong = true;
                setTimeout(() => {word.answeredWrong = false;}, 500);
            }
        },
        reset() {
            this.words.forEach((item) => {
                item.checked = false;
                item.answer = '';
                item.correct = false;
            });
            this.correctCount = 0;
            this.completed = false;
        }
    },
    computed: {
        shuffledWords() {
            return this.words.sort(() => .5 - Math.random());
        },
        wordCount() {
            return this.words.length;
        }
    },
    watch: {
        correctCount() {
            this.completed = this.correctCount == this.wordCount;
        }
    }
}

const app = Vue.createApp(FlashWord).mount('#app');