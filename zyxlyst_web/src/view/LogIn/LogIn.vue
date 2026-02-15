<template>
  <div id = "login_page">

    <h1>登录</h1>
    <input class="styled-input" v-model="username" placeholder="用户名"  />
    <input class="styled-input" v-model="password" type="password" placeholder="密码"  />
    <GloButton inner_text="登录"  :inner_function="login" />
    <p>{{ loginMessage }}</p>
  </div>
  <div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router' 
import GloButton from '@/components/button/GloButton.vue' 

const router = useRouter()
const username = ref('')
const password = ref('')
const loginMessage = ref('')

const token = ref('')


const login = async () => {
  try {
    const res = await axios.post('/api/logIn', {
      username: username.value,
      password: password.value
    })
    loginMessage.value = res.data.message
    token.value = res.data.token
    if(token.value)
    {
      router.push('/home')
    }
  } catch (error) {
    loginMessage.value ='' + error.response.data.message
  }
} 
</script>


<style scoped>
#login_page{
  display: flex;
  flex-direction: column;
  align-items: center;      
  text-align: center;
  margin-top: 50px;
  justify-content: center;
}


.styled-input {
  margin: 10px;
  padding: 10px 15px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  width: 300px;

}

.styled-input:focus {
  justify-content: center;
  border-color: #409eff;
  box-shadow: 0 0 3px #409eff;
}
</style>