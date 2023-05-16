

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

watchEffect(() => {
  const nameRouter = router?.currentRoute?.value?.name?.toString() || ''
  isrouteName.value = listNoShowSideBar.includes(nameRouter) ? false : true
})
</script>
<style scoped>
</style>
