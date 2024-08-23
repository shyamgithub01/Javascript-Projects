const form = document.querySelector('form')
  form.addEventListener("submit" , (e) =>{
    e.preventDefault()
   const height = parseInt(document.querySelector("#height").value)
   const weight = parseInt(document.querySelector("#weight").value)
   const results = document.querySelector("#results")
   const message = document.querySelector("#msg")
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(height === " " || height < 0 || isNaN(height)){
        results.innerHTML = "Please Give a valid Height"
    }
    else if(weight === " " || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a valid weight  `
    }
    else{
        results.innerHTML = `<span>${bmi}</span>`
    }

    if(bmi < 18.6){
        message.innerHTML= "Under weight"
    }
    if(bmi > 18.6  || bmi < 24.9){
        message.innerHTML= "Normal weight"
    }
    if(bmi > 24.9){
        message.innerHTML= "Over weight"
    }
  
})






























