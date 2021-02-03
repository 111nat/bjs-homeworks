"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    percent = parseInt(percent) / 100;
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    if (isNaN(percent))
    {
        return `Параметр percent содержит неправильное значение ${percent}`;
    }
    if (isNaN(contribution))
    {
        return `Параметр contribution содержит неправильное значение ${contribution}`;
    }
    if (isNaN(amount))
    {
        return `Параметр amount содержит неправильное значение ${amount}`;
    }

    let carcass = amount - contribution;
    let months = ((date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth()) + date.getMonth() + 1;
    let moneyPerMonth = carcass * ((percent / 12) + (percent / 12) / (((1 + (percent / 12))**months) - 1));
    let finalResult = moneyPerMonth * months;
    console.log(finalResult.toFixed(2));
    return finalResult.toFixed(2);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    if(name === "")
    {
        name = "Аноним";
    }
    console.log(`Привет, мир! Меня зовут ${name}.`)
    return `Привет, мир! Меня зовут ${name}.`;
}