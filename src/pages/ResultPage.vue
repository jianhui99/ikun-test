<template>
    <div class="result-page">
      <div class="card">
        <div>
          得分：{{ score }}，
          <!-- 排名：xx， -->
          超过了 99.9% 的人
        </div>
        <div>
            鉴定你是： <span class="result-name">{{ resultName }}</span>
        </div>

        <div class="imgBox">
            <span class="imgBoxClick">
                图片点了有惊喜
            </span>
            <img class="result-img" :src="resultImage" @click="jiMing" />
        </div>

        <!-- <button class="checkRankBtn" @click="toRankPage">查看排行</button> -->
        <span class="gap-5"></span>
        <button class="restartBtn" type="warning" @click="restartBtn">重新测试</button>
      </div>
      <audio ref="audioRef" id="audio2" :src="resultMusic" />
    </div>
  </template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter();

const resultName = computed(() => route.query.rn)
const resultImage = computed(() => route.query.ri)
const resultMusic = computed(() => route.query.rm)
const score = computed(() => route.query.rs)


const restartBtn = () => {
    router.push({
        name: 'IndexPage',
    })
}

const jiMing = () => {
    audio2.play();
}


</script>
  
<style scoped>
.result-img {
    width: 100%;
    margin-bottom: 16px;
}

.imgBox:hover {
    cursor: pointer;
}

.imgBoxClick{
    font-size: 7px;
}

.result-name {
    font-size: 1.5rem;
    font-weight: bold;
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

.checkRankBtn{
    background-color: #ea5667;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
}

.gap-5 {
    padding: 5px;
}

.card{
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    opacity: 0.9;
    z-index: 999;
    padding: 16px;
    text-align: center;
}
</style>