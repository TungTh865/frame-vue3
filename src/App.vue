

<template>
  <div>
    <Sidebar v-if="isrouteName"></Sidebar>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import Sidebar from './views/Sidebar/SidebarView.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ROUTER_NAME_AUTHENTICATION } from '@/constant/index'

const isrouteName = ref()
const router = useRouter()

const listNoShowSideBar = Object.values(ROUTER_NAME_AUTHENTICATION)
console.log(listNoShowSideBar)

watchEffect(() => {
  isrouteName.value = listNoShowSideBar.includes(router.currentRoute.value.name) ? false : true
})
</script>
<style scoped>
</style>
