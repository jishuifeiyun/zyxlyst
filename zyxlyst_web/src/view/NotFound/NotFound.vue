<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>你访问的页面不存在。</p>
    <router-link to="/home">返回首页</router-link>
  </div>
</template>

<style scoped>
.not-found {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100vw;
    background-color: rgb(188, 77, 132);
}
</style>
