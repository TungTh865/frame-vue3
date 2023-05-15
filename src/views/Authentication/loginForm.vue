<template>
  <div>
    <div>
      <label for="email">email</label>
      <input type="text" id="email" v-model="form.email" />
    </div>
    <div>
      <label for="email">password</label>
      <input type="password" id="email" v-model="form.password" />
    </div>
    <div>
      <button @click="submitForm()">submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthenStore } from '@/stores/authen'
import { useRouter } from 'vue-router'
import { ROUTER_NAME_PAGE } from '@/constant/index'

const authenStore = useAuthenStore()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})
async function submitForm() {
  await authenStore.login(form).then((res: any) => {
    if (res.success) {
      const date = new Date()
      date.setTime(date.getTime() + res.data.data.expires_in * 1000)
      const expiresTime = 'expires=' + date.toUTCString()
      const accessToken = 'access_token=' + res.data.data.access_token
      document.cookie = accessToken + ';' + expiresTime + '; path=/'
      router.push({ name: ROUTER_NAME_PAGE.HOME })
    }
  })
}
</script>

<style>
</style>