//http://api.weatherapi.com/v1/current.json?key=5d58e46b0d7a472aae4103332251403&q=delhi&aqi=no

let target = "mumbai"
const fetchData = async function(targetlocation){
    let url = `http://api.weatherapi.com/v1/current.json?key=5d58e46b0d7a472aae4103332251403&q=${targetlocation}&aqi=no`
    const response = await fetch(url)
    const data = response.json()
    console.log(data)

    //  let locationName = data.location.name
    //  console.log(locationName)
     
     let time = data.location.localtime
     console.log(time)

}
fetchData(target)