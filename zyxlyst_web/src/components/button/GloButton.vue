<template>
    <button class="buttons" @click="prop.inner_function">
        {{ prop.inner_text }}
    </button>
</template>

<script setup>

const prop = defineProps({
    inner_text: {
        type: String,
        default: "全局按钮"
    },
    inner_function:
    {}
})
</script>

<style scoped>
.buttons {
  padding: 10px 20px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 10px;
}
</style>