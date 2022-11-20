import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const add_new_event= async (place, title,image, start_time, end_time, description ,setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/activities/add-new",
        method :"post",
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        data: {
            place, title,image, start_time, end_time, description
        }
    })
    const result= await res.data
    return setData(result)
}

export default add_new_event