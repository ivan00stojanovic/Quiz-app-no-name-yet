//hard code question "What is the capital of ${data.country}"
//GET request for data of cities let data = await res.json()
//for the question pull the city and country randomly together
//for the answers pull 3 random cities
//after getting the JSON 
// let cities = []
//Math.random() * 3

const button = document.getElementById('btn')
let countriesOnly = [];
let capitalsOnly = [];


//https://countriesnow.space/api/v0.1/countries/cities this is country names API

async function apiRequest(){
    try{
        //fetch data from URL
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/capital`)
        const data = await response.json()
        let list = data.data

        let countries = list.reduce((acc, cur) => {
            acc[cur.name] = cur;
            return acc;
        }, [])

        let capitals = list.reduce((acc, cur) => {
            acc[cur.capital] = cur;
            return acc;
        }, [])
        
        countries = Object.keys(countries).sort()//choose 1 random
        capitals = Object.keys(capitals).sort()//from this arry choose 3 random As

         countriesOnly = countries;
         printData(countries[Math.floor(Math.random() * 251)])
        
    }catch(error){
        console.log(error)
    }
}

 const printData = country => {
     document.getElementById('h1').innerText = `What is the capital of ${country}?`
     const h3 = document.getElementById('h3');
     const answers = document.getElementById('answers')
     h3.classList.add('visibility')
     answers.classList.remove('visibility')
     
 }


button.addEventListener('click', apiRequest)




//countriesOnly array that has all countries
//populate 1 random country from that array -> push it to 
//citiesOnly array with all capitals
//populate 3 random capitals and print them to the DOM
//loop through countries array that arranges items by country name
//and match to find the already randomly populated country name and
//