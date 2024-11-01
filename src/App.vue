<template>
  <div>
    <Sidebar v-if="isRouteName"></Sidebar>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import Sidebar from './views/Sidebar/SidebarView.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ROUTER_NAME_AUTHENTICATION } from '@/constant/index'

const isRouteName = ref()
const router = useRouter()

const listNoShowSideBar = Object.values(ROUTER_NAME_AUTHENTICATION)

watchEffect(() => {
  const nameRouter = router?.currentRoute?.value?.name?.toString() || ''
  isRouteName.value = listNoShowSideBar.includes(nameRouter) ? false : true
})
</script>
<style scoped></style>
