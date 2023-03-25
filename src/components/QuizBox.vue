<template>
    <div class="card">
        <form @submit.prevent="submitAnswer" class="form">
            <div class="questionBox">
                <div class="question">
                     <span class="q-title"> {{ questionCount }} . {{ selectedQuestion.name }} </span>
                     <span class="q-hint" v-if="selectedQuestion.checkType === 'multiple'">
                            <span v-if="selectedQuestion.max">
                                (最多选 {{ selectedQuestion.max }} 项)
                            </span>
                            <span v-else>
                                (多选)
                            </span>
                     </span>
                    <span class="q-hint" v-else>
                            (单选)
                    </span>
                </div>

                <div class="option" v-for="(val, key) in selectedQuestion.options">
                    <div class="single" v-if="selectedQuestion.checkType === 'single'">
                        <input 
                            type="radio" 
                            :id="`option${val.key}`" 
                            v-model="answer" 
                            :name="`option${val.key}`" 
                            :value="val.key"
                        />
                        <label :for="`option${val.key}`">{{ val.key }} . {{ val.name }}</label>
                    </div>
                    <div class="multiple" v-else>
                        <input 
                            type="checkbox" 
                            :id="`option${val.key}`" 
                            v-model="answer" 
                            :name="`option${val.key}`" 
                            :value="val.key"
                        />
                        <label :for="`option${val.key}`">{{ val.key }} . {{ val.name }}</label>
                    </div>
                </div>
            </div>

            <button v-if="questionCount >= totalQuestion" class="formBtn" type="submit">提交</button>
            <button v-else class="formBtn" type="submit">下一题</button>
        </form>
        <audio id="audio1" src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/ikun-audio/niganma.aac" preload="auto"></audio>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { questionMap, totalQuestion } from "../data/questions";
import { results } from "../data/results";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";

const router = useRouter();
const questionCount = ref(1);
const selectedQuestion = ref(questionMap[1]);
const answer = ref([]);
const selectedOptions = ref([]);
const score = ref(0);
const showResult = ref(false);
var resultName = ref('');
var resultImage = ref('');
var resultMusic = ref('');

const submitAnswer = () => {
    if(answer.value === '' || answer.value.length === 0) {
        audio1.play();
        alert('哎哟，你干嘛不选呢？');
        return;
    }

    if(selectedQuestion.value.checkType === 'multiple' && selectedQuestion.value.max) {
        if(answer.value.length > selectedQuestion.value.max) {
            audio1.play();
            alert('哎哟，你选的太多了，最多选 ' + selectedQuestion.value.max + ' 项');
            return;
        }

        selectedQuestion.value.options.forEach((option) => {
            if(answer.value.includes(option.key)) {
                score.value += option.score;
            }
        })
    }else{
        if(selectedQuestion.value.answer != undefined) {
            if(selectedQuestion.value.answer.includes(answer.value)){
                score.value += selectedQuestion.value.score;
            }
        }else{
            selectedQuestion.value.options.forEach((option) => {
                if(answer.value.includes(option.key)) {
                    score.value += option.score;
                }
            })
        }
    }

    answer.value = [];

    const currentQuestion = parseInt(questionMap[selectedQuestion.value.id].id);
    const nextQuestion =  currentQuestion + 1;
    
    if(nextQuestion > totalQuestion) {
        showResult.value = true;

        results.forEach((result) => {
            if(score.value >= result.score) {
                resultName.value = result.name;
                resultImage.value = result.img;
                resultMusic.value = result.music;
            }
        })

        router.push({
            name: 'ResultPage',
            query: {
                rn: resultName.value,
                ri: resultImage.value,
                rm: resultMusic.value,
                rs: score.value
            }
        })
    }else{
        questionCount.value++;
        selectedQuestion.value = questionMap[nextQuestion];
        selectedOptions.value = '';
    }


}

</script>

<style scoped>

.form{
    height: 100%;
    display: flex;
    flex-direction: column;
}

.questionBox{
    flex: 1;
    padding: 2px;
}

.formBtn {
    background-color: #4869ef;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    margin: 1rem;
}

.question{
    margin-bottom: 2px;
    display: flex;
}

.q-title{
    height: 21px;
    font-size: 12px;
    color: #111217;
}

.q-hint{
    margin-left: 0.5rem;
    color: #111217;
    font-size: 15px;
}

.option{
    display: flex;
    padding: 3px 0;
    font-size: 12px;
}

.option input{
    margin-right: 0.5rem;
}

.option label{
    cursor: pointer;
}

.result{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #111217;
    height: 100%;
}

.result p{
    font-size: 1.5rem;
    font-weight: 500;
    color: #111217;
}
.restartBtn{
    background-color: #4869ef;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
}


.resultImg{
    width: 30%;
    height: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


</style>