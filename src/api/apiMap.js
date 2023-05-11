const api = config => ({
    getUnits: () => config('get', `/post`),

    login: payload=>config('post', `v1/login`,{
        ...payload
    }),
})

export default api