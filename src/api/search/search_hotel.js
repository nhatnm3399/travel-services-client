import axios from "axios"
import Cookies from "js-cookie"
import { SERVER_URL } from "../../config/config"

const search_hotel= async(search_query, setData)=> {
    const res= await axios({
        url: SERVER_URL+ "/api/hotel/search",
        method: "post", 
        headers: {
            "authorization": "Bearer "+ Cookies.get("accessToken")
        },
        body: {
            params: search_query
        }
    })
    const result= await res.data
    return setData(result)
}

export default search_hotel