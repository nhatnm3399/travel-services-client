// import axios from "axios"

const nearly_place= async (longtitude, latitude)=> {
    const url= `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCKbIS2qC0sJJuol4rcPZFnNiJsRfzK7j0`
    fetch( url, { headers: {
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'application/json',

    }, method: "post"}) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}

export default nearly_place