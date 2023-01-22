import axios from "axios"

export const api = axios.create({
    baseURL: 'http://172.10.10.105:3333'
})