import axios from "axios"
import { baseURl } from "./constants/constant"

const instance=axios.create({
    baseURL:baseURl
})

export default instance