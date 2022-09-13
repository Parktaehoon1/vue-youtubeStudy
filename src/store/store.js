import { createStore } from "vuex"
import { fetchAllApi } from '../api/index'
export default createStore({
    // 데이터
    state:{
        youtubeList:[]
    },
    actions:{
        fetchYoutubeList({commit}){
            fetchAllApi()
            .then(res => {
                commit('YOUTUBE_LIST_INIT', res.data.items)
                console.log(res.data.items.length)
            })
            .catch(err => console.log(err))
        }
    },
    mutations:{
        YOUTUBE_LIST_INIT(state, payload){
            state.youtubeList = payload
        }
    },
    getters:{
        getYoutubeList(state){
            return state.youtubeList
        }
    }
});