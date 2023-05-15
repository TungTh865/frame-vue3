const api = (config: any) => ({
  getUnits: () => config('get', `/post`),

  login: (payload: any) =>
    config('post', `v1/login`, {
      ...payload
    })
})

export default api
