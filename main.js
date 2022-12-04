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
        console.log(list)

        let countries = list.reduce((acc, cur) => {
            acc[cur.name] = cur;
            return acc;
        }, [])

        let capitals = list.reduce((acc, cur) => {
            acc[cur.capital] = cur;
            return acc;
        }, [])
        
        countries = Object.keys(countries).sort()//choose 1 random
        capitals = Object.keys(capitals).sort()//from this arry choose 3 random

        console.log(capitals)

         countriesOnly = countries;
         printCountryData(countries[Math.floor(Math.random() * 251)])
         capitalsOnly = capitals;
         getRandomThree(capitals)
        
    }catch(error){
        console.log(error)
    }
}

 const printCountryData = country => {
     document.getElementById('h1').innerText = `What is the capital of ${country}?`
     const h3 = document.getElementById('h3');
     const answers = document.getElementById('answers')
     h3.classList.add('visibility')
     answers.classList.remove('visibility')
     
 } 

 const getRandomThree = capitalsArr => {
    let randomThreeArr = []
    while(randomThreeArr.length < 3){
        //let randomOne = capitalsArr[Math.floor(Math.random()) * 243]
        randomThreeArr.push(capitalsOnly[Math.floor(Math.random() * 243)])
    }
        
    console.log(randomThreeArr)
    printCapitalData(randomThreeArr)
 }

 const printCapitalData = capitalsArr => {
    const optionOne = document.getElementById('1')
    const optionTwo = document.getElementById('2')
    const optionThree = document.getElementById('3')
    const optionFour = document.getElementById('4')
    optionOne.innerText = capitalsArr[0]
    optionTwo.innerText = capitalsArr[1]
    optionThree.innerText = capitalsArr[2]
}



button.addEventListener('click', apiRequest)



//do separate fetch and rearrange data so it's listed by country name first
//loop through the data and match country name to the country randomly pulled
//pull the capital city and save to variable
//add this capital to random capitalsArr so length is 4
//randomly populate the answers buttons
//build score tracker
//store score in localstorage
//fix it to total of 10 questions at first
//when finished show total correct out of 10
//give user chance to redo quiz