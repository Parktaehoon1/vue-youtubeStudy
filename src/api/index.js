import axios from 'axios';
// http Request 및 response URL
const config = {
    baseUrl: 'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDiDvDwoy9y-PKep5hMVATFrzTLu70ageQ'
}

// 전처 API 데이터 호출 함수
function fetchAllApi() {
    // axios 호출의 결과는 Promise 객체이므로 
    // then(), catch() 를 통해 결과 확인 가능
    return axios.get(`${config.baseUrl}`)
}

export {
    fetchAllApi
}