const api = (config: any) => ({
  getUnits: () => config('get', `/post`),

  login: (payload: any) =>
    config('post', `login`, {
      ...payload
    })
})

export default api
