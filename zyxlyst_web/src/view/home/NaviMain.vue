<template>
  <div id="main_container">
    <iframe
      :src="iframeSrc"
      width="100%"
      height="100%"
      style="border: none">
    </iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义一个响应式变量作为 iframe 的 src
const iframeSrc = ref("https://d.xiumi.us/board/v5/5HyTu/432446538")
</script>

<style scoped>
#main_container {
  height: 100%;
  width: 100%;
}
</style>
