<template>
    <div class="card" v-if="!start">
        <h2>🏀🐔 ikun 测试 🏀</h2>
        <span>测试你是真爱坤还是小黑子？</span>
        <button class="startBtn" @click="startBtn">开始测试</button>
    </div>

    <QuizBox v-else/>

  <audio ref="audioRef" src="https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/ikun-audio/niganma.aac" />
  </template>
  
<script setup>
import QuizBox from '../components/QuizBox.vue';
import { ref } from "vue";

const audioRef = ref(null);
const start = ref(false);
const startBtn = () => {
    start.value = true;
    audioRef.value.play();
}
  
</script>
  
<style scoped>
.card{
    width: 100%;
    max-width: 500px;
    height: 40%;
    max-height: 500px;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    opacity: 0.9;
    z-index: 999;
    padding: 16px;
    text-align: center;
}

.startBtn {
    background-color: #4869ef;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
}

</style>