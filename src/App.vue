<template>
  <div class="container">
    <!-- <QuizBox /> -->
    <router-view />

  </div>

  <div class="footer">
    <a
      href="https://github.com/jianhui99"
      target="_blank"
      style="font-size: 14px"
    >
      by Jian（工作两年半）
    </a>
    <span class="ps">
      *声明：作者系纯路人，仅提供技术支持
    </span>
  </div>
</template>

<script setup>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@300;400;700&display=swap');

*{
  box-sizing: border-box;
}

body{
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background: url("./assets/0.jpeg");
  background-size: 100% 100%;
  max-height: 500vh;
}

.container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer a {
  color: white;
}

.ps{
  font-size: 8px;
  color: #ccc;
  display:flex;
  align-items: center;
  justify-content: center;
}

</style>
 