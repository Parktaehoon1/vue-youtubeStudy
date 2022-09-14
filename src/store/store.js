import { createStore } from "vuex"
import { fetchAllApi,fetchInfoApi } from '../api/index'
export default createStore({
    // 데이터
    state:{
        youtubeList:[],
        youtubeInfo:[]
    },
    actions:{
        fetchYoutubeList({commit}){
            fetchAllApi()
            .then(res => {
                commit('YOUTUBE_LIST_INIT', res.data.items)
            })
            .catch(err => console.log(err))
        },
        fetchYoutubeInfo({commit}, _id){
            fetchInfoApi(_id)
            .then(res => {
                commit('YOUTUBE_INFO', res.data.items)
                console.log("무엇",res.data.items)
            })
            .catch(err => console.log(err))
        }
    },
    mutations:{
        YOUTUBE_LIST_INIT(state, payload){
            state.youtubeList = payload
        },
        YOUTUBE_INFO(state, payload){
            state.youtubeInfo = payload
        }
    },
    getters:{
        getYoutubeList(state){
            return state.youtubeList
        },
        getYoutubeInfo(state){
            return state.youtubeInfo
        }
    }
});