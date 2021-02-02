"use strict";

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // return x;
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let answer = [];
    if(discriminant < 0) {

    } else if (discriminant == 0) {
        answer[0] = (-b) / (2 * a);
    } else if (discriminant > 0) {
        answer[0] = ((-b) + Math.sqrt(discriminant)) / (2 * a);
        answer[1] = ((-b) - Math.sqrt(discriminant)) / (2 * a);
    }
    return answer;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Оценок больше 5");
        marks = marks.slice(0, 5);
    }

    let averageMark = 0;
    for (let i = 0; i < marks.length; i++)
    {
        averageMark = averageMark + marks[i];
    }

    averageMark = averageMark / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
   let date = new Date;
    if (date.getFullYear() - dateOfBirthday.getFullYear() > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    
    
}