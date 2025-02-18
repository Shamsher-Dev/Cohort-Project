

function calculateBMI(){
    const hieght = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('.result');

    if(!hieght && hieght < 0 && isNaN){
        result.innerHTML = "Invelid height!";
        
    }else if(!weight && weight < 0 && isNaN){
        result.innerHTML = "Invelid weight";
        
    }else{
        result.style.color = 'red'
        result.innerHTML = "Please Provide Valid Input!";
    }

    const bmi = (weight / ((hieght * hieght) / 10000)).toFixed(2);

    if(bmi < 18.5){
        result.style.color = 'yellow';
        result.innerHTML = `Under Weight: ${bmi}`;

    }else if(bmi > 18.5 && bmi < 24.9){
        result.style.color = 'rgb(3,252,15)';
        result.innerHTML = `Normal Weight : ${bmi}`;

    }else if(bmi > 25 && bmi < 29.9){
        result.style.color = 'orange';
        result.innerHTML = `Over Weight : ${bmi}`;
        
    }else if(bmi > 30 && bmi < 34.9){
        result.style.color = 'red';
        result.innerHTML = `Obesity (Class I) : ${bmi}`;

    }else if(bmi > 35 && bmi < 39.9){
        result.style.color = 'red';
        result.innerHTML = `Obesity (Class II) : ${bmi}`;

    }else if(bmi > 40){
        result.style.color = 'red';
        result.innerHTML = `Extreme Obesity : ${bmi}`;


}   
}

const button = document.querySelector('.btn');
button.addEventListener('click',calculateBMI);