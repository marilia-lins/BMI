//capture the button id from html n put into a const
//it needs to be global cuz it's used on the event bellow
const calc = document.getElementById('calc')

calc.addEventListener('click', bmi => {
    //capture id from html n put into a const = name, height, weight n final result
    const name = document.getElementById('name').value // only get the input's value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    const output = document.getElementById('output') //i'll put some value here so no need to get it

    //verify if the input is empty or not
    if(name != '' && height != '' && weight != '') {
        const a = weight / (height * height) 
        let b = '' //just to initialize
        //output receives const a and put it in some phrase based on conditions
        if (a < 18.5){
            b = 'underweight :(';
        }else if (a < 25) {
            b = 'on ideal weight :D';
        }else if (a < 30){
            b = 'slightly overweight...';
        }else if (a < 35){
            b = 'with obesity I :(';
        }else if (a < 40){
            b = 'with obesity II :((';
        }else {
            b = 'with obesity III please take care';
        }
        // return b with interpolations to form a phrase
        output.textContent = `Hi ${name}, your BMI is ${a.toFixed(1)}, and you're ${b}`
        //console.log(a.toFixed(1)) 
    }else {
        output.textContent = "Empty Input"
    }

    
}) 