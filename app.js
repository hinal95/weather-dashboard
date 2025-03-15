//http://api.weatherapi.com/v1/current.json?key=5d58e46b0d7a472aae4103332251403&q=delhi&aqi=no

const city = document.querySelector('#city')
const mainIcon = document.querySelector('#mainIcon')
const mainCondition = document.querySelector('#mainCondition')
const mainDegree = document.querySelector('#degree')
const date = document.querySelector('#date')

// const icon1 = document.querySelector('#icon1')
const temp1 = document.querySelector('#temp1')
const condition1 = document.querySelector('#condition1')

// const icon2 = document.querySelector('#icon2')
const temp2 = document.querySelector('#temp2')
const condition2 = document.querySelector('#condition2')

// const icon3 = document.querySelector('#icon3')
const temp3 = document.querySelector('#temp3')
const condition3 = document.querySelector('#condition3')


const button = document.querySelector('#btn')
const search = document.querySelector('#search')
const form = document.querySelector('#form')


form.addEventListener("submit", searchField)


let target = "mumbai"
const fetchData = async function(targetlocation){
    let url = `http://api.weatherapi.com/v1/current.json?key=5d58e46b0d7a472aae4103332251403&q=${targetlocation}&aqi=no`
    const response = await fetch(url)
    

    const data = await response.json()
    
    console.log('data:', data);

     let locationName = data.location.name
      console.log(locationName)
    
     let time = data.location.localtime
     console.log(time)

     let tempratureC = data.current.temp_c
     console.log(tempratureC)

     let tempratureF = data.current.temp_f
     console.log(tempratureF)

     let humidity = data.current.humidity
     console.log(humidity)

     let condition1 = data.current.condition.text
     console.log('condition', condition1)

     let iconUrl1 = data.current.condition.icon
    

     updateData(locationName,time,tempratureC, tempratureF, condition1, iconUrl1)

}

function updateData(locationName,time,tempratureC, tempratureF, condition, iconUrl1){
    city.innerText = locationName
    date.innerText = time
    degree.innerText = tempratureC
    mainCondition.innerText = condition
    mainIcon.src = iconUrl1
    

    temp1.innerText = tempratureF
    condition1.innerText = condition
    temp2.innerText = tempratureF
    condition2.innerText = condition
    temp3.innerText = tempratureF
    condition3.innerText = condition
}


function searchField(e){
    e.preventDefault()
    target = search.value
    fetchData(target)
}


fetchData(target)