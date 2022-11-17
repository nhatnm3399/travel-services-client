import axios from "axios"
import { SERVER_URL } from "../../../config/config"

const login= async (account, password, setData)=> {
    const res= await axios({
        url: `${SERVER_URL}/api/login`,
        method: "post",
        data: {
             account, password
        }
    })
    const result= await res.data
    return setData(result)
}   

export default login