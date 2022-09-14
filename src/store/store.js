import {
    createStore
} from "vuex"
import {
    fetchAllApi,
    fetchInfoApi
} from '../api/index'
export default createStore({
    // 데이터
    state: {
        youtubeList: [],
        youtubeInfo: []
    },
    actions: {
        fetchYoutubeList({
            commit
        }) {
            fetchAllApi()
                .then(res => {
                    commit('YOUTUBE_LIST_INIT', res.data.items)
                })
                .catch(err => console.log(err))
        },
        fetchYoutubeInfo({commit}, _id) {
            fetchInfoApi(_id)
                .then(res => {
                    // console.log("첫번쨰", res.data.items[0].id) // 첫번째 배열 나옴
                    // console.log("ID",_id)
                    console.log("배열",res.data.items)
                    res.data.items.forEach(element => {
                        console.log("ID값",_id)
                        console.log("배열",element)
                        if(element.id === _id){
                            commit('YOUTUBE_INFO', element)
                        }
                    
                    });
                })
                .catch(err => console.log(err))
        }
    },
    mutations: {
        YOUTUBE_LIST_INIT(state, payload) {
            state.youtubeList = payload
        },
        YOUTUBE_INFO(state, payload) {
            state.youtubeInfo = payload
        }
    },
    getters: {
        getYoutubeList(state) {
            return state.youtubeList
        },
        getYoutubeInfo(state) {
            return state.youtubeInfo
        }
    }
});