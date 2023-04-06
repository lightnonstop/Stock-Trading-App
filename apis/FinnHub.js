import axios from "axios";


const TOKEN = 'cgmria1r01qhveusrf10cgmria1r01qhveusrf1g'
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN,
    }
})