//hard code question "What is the capital of ${data.country}"
//GET request for data of cities let data = await res.json()
//for the question pull the city and country randomly together
//for the answers pull 3 random cities
//after getting the JSON 
// let cities = []
//Math.random() * 3

//https://countriesnow.space/api/v0.1/countries/cities this is country names API

async function apiRequest(){
    try{
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`)
        const data = await response.json()
        const oneSet = data.data
        let cities;
        let countries;
        console.log(oneSet)
    }catch(error){
        console.log(error)
    }
}

apiRequest()