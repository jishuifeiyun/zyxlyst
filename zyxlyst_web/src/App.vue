<template>
  <div id="app">
    <Head />  <!-- 头部组件 -->
    <router-view />   <!-- 路由显示区域 -->
  </div>
</template>

<script setup>
import Head from '@/components/HeadPart/HeadPart.vue';

</script>

<style>
/* 全局样式 */
#app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: 100%;
    background-color: #eb2525;
}

</style>
