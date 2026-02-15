<template>
    <div id="head_main" >
        <div id="head_logo" ></div>
        <div id="head_login" @click = "go_to_login">
          <img src="@/assets/login.png" alt="登录" style="width: 30px; height: 30px; border-radius: 100px;">
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function go_to_login(){
  router.push('/login')
}
</script>

<style scoped>
#head_main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 18vh;
  text-align: center;
}

#head_logo {
  width: 95%;
  height: 60%;
  background-color: #42b900;
  background-size: cover;
  display: inline-block;
}

#head_login {
  padding-top: 40px;
  width: 5%;
  height: 100%;
  background-size: cover;
  display: inline-block;
  justify-content: center;
  align-items: center; 
}
</style>