const button = document.getElementById('btn')
const options = document.querySelectorAll('.option')
let score = 0;
let questionAnswer;
let testing = 0 

//https://countriesnow.space/api/v0.1/countries/cities this is country names API



async function apiRequest(){
    try{
        //fetch data from URL
        const response = await fetch(`https://countriesnow.space/api/v0.1/countries/capital`)
        const data = await response.json()
        let list = data.data
        // console.log(list)

        //get object from fetch and use reduce to reorder data by country name first as an array of objects
        let listOfCountryNames = list.reduce((acc, cur) => {
            acc[cur.name] = cur;
            return acc;
        }, [])

        //reorder data from original fetch as array of objects listed by country name (again so that we have two?)
        let countries = list.reduce((acc, cur) => {
            acc[cur.name] = cur;
            return acc;
        }, [])

        //reorder data from original fetch as array of objects but listed by capital names
        let capitals = list.reduce((acc, cur) => {
            acc[cur.capital] = cur;
            return acc;
        }, [])
        
        //remove all extra data from both countries and capitals arrays and leave only the names
        countries = Object.keys(countries).sort()//choose 1 random
        capitals = Object.keys(capitals).sort()//from this array choose 3 random

         //get one random country name from countries array
         let randomCountry = countries[Math.floor(Math.random() * 251)]

         //gettin the correct answer first
         var answer = listOfCountryNames[randomCountry].capital

         let randomThreeArr = []
         while(randomThreeArr.length < 3 && !(randomThreeArr.includes(answer))){
            randomThreeArr.push(capitals[Math.floor(Math.random() * 243)])
        }
        //spread
        let answerOptions = [...randomThreeArr]
        answerOptions.push(answer)
        
         //pass the one random country into printCountryData function
         printCountryData(randomCountry)
         shuffleAnswers(answerOptions)
        
    
        //increments the score if the correct answer is clicked, NOTE: need to work on letting the user know that the answer is correct
        //for each btn adding an event listener to grab text and compare
        //to the answer previously defined
        //NOTE: issue with duplicates in console log when game is
        //restarted
         options.forEach((option) => {
            option.addEventListener('click', (e) => {
                if(e.target.innerText === answer){
                    e.target.style.background = 'green'
                    score++
                }else{
                   e.target.style.background = 'red'
                }
                    if(testing > 1) option.style.background = ''
            })
        })         
         button.innerText = 'Next Question'

         
        
          //  testing++
          //  console.log(testing)
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

 const shuffleAnswers = answerOptions => {
    let shuffled = answerOptions.sort((a, b) => 0.5 - Math.random())
    printCapitalData(shuffled)
 }

//fill the option slots with text
 const printCapitalData = capitalsArr => {
    const optionOne = document.getElementById('1')
    const optionTwo = document.getElementById('2')
    const optionThree = document.getElementById('3')
    const optionFour = document.getElementById('4')
    optionOne.innerText = capitalsArr[0]
    optionTwo.innerText = capitalsArr[1]
    optionThree.innerText = capitalsArr[2]
    optionFour.innerText = capitalsArr[3]   
}

button.addEventListener('click', apiRequest)





//do separate fetch and rearrange data so it's listed by country name first
//
//loop through the data and match country name to the country randomly pulled
//
//pull the capital city and save to variable
//
//add this capital to random capitalsArr so length is 4
//
//randomly populate the answers buttons
//
//build score tracker
//
//store score in localstorage
//
//fix it to total of 10 questions at first
//
//when finished show total correct out of 10
//
//give user chance to redo quiz after the end