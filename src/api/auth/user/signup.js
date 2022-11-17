import axios from "axios"
import { SERVER_URL } from "../../../config/config"

const signup= async (userName, account, password, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/signup`,
        method: "post",
        data: {
            userName, account, password
        }
    })
    const result= await res.data
    return setData(result)
}   

export default signup