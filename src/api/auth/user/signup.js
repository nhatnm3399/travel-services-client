import axios from "axios"
import { SERVER_URL } from "../../../config/config"

const signup= async (username, email, password, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/auth/signup`,
        method: "post",
        data: {
            username, email, password, role: ["user"]
        }
    })
    const result= await res.data
    return setData(result)
}   

export default signup