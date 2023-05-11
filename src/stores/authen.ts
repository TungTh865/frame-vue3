import { defineStore } from 'pinia'
import api from '@/api/api.js'

export const useAuthenStore = defineStore('authen', {
  state: () => ({
    counters: []
  }),

  getters: {},

  actions: {
    async login(payload: any) {
      try {
        const res = await api('login', payload)
        if (res.success) {
          return res
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
})
