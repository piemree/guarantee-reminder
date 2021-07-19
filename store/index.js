export const actions={

    nuxtServerInit({commit}){
        console.log("merhaba world")
        commit("user/setToken")
    }

}