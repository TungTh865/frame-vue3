import { defineStore } from 'pinia';
import  api  from '@/api/api.js'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counters: []
  }),

  getters: {

  },

  actions: {
    async getListPost(payload: any) {
      try {
        const res = await api('getUnits', payload)
        if (res.success) {
          this.counters = res.data.data
          return res.data.data
        }
      } catch (error) {
        console.error(error)
      }

    },
  }
})
