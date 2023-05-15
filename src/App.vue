

<template>
  <div>
    {{ routeName }}
    <Sidebar v-if="routeName"></Sidebar>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import Sidebar from './views/Sidebar/SidebarView.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { ROUTER_NAME_AUTHENTICATION } from '@/constant/index'

const routeName = ref()
const router = useRouter()

const listNoShowSideBar = Object.values(ROUTER_NAME_AUTHENTICATION)
console.log(listNoShowSideBar)

watchEffect(() => {
  routeName.value = listNoShowSideBar.includes(router.currentRoute.value.name) ? false : true
})
</script>
<style scoped>
</style>
