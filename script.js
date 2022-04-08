const salary = document.querySelector('#salary'),
      freelance = document.querySelector('#freelance') ,
      profit1 = document.querySelector('#additional_profit1'),
      profit2 = document.querySelector('#additional_profit2');

const rent = document.querySelector('#rent'),
      services = document.querySelector('#communal_services'),
      transport = document.querySelector('#transport'),
      credits = document.querySelector('#credits');

const monthInput = document.querySelector('.money_to_spend'),
      daySpend = document.querySelector('.money_to_spend_per_day'),
      yearInput = document.querySelector('.money_year');

let totalMonth, totalDay , totalYear;

const moneyRange = document.querySelector('#range'),
      profit = document.querySelector('.prof'),
      spend = document.querySelector('.spends');
      
let accumulation = 0
let totalPercent = 0; 



const inputs = document.querySelectorAll('.input');

const strToNum = str => str.value ? parseInt(str.value) : 0

const countAvaliableMoney = () => {
    const totalPerMonth = strToNum(salary) + strToNum(freelance) + strToNum(profit1) + strToNum(profit2);
    const totalSpendings = strToNum(rent) + strToNum(services) + strToNum(transport) + strToNum(credits);
    totalMonth = totalPerMonth - totalSpendings ;
    monthInput.innerHTML = totalMonth;   
}

for(input of inputs){
    input.addEventListener('input',() =>{
        countAvaliableMoney()
        calculationPercents()   
    })
}

moneyRange.addEventListener('input', e => {
    const percents = document.querySelector('.total_percents');
    totalPercent = e.target.value;
    percents.innerHTML = totalPercent;
    calculationPercents()
})

const calculationPercents = () => {
   accumulation = ((totalMonth * totalPercent)/100).toFixed();
   profit.innerHTML = accumulation;
   spend.innerHTML = totalMonth - accumulation;
   totalDay = (spend.innerHTML/30).toFixed()
   daySpend.innerHTML = totalDay
   totalYear = accumulation*12
   yearInput.innerHTML = totalYear
}








