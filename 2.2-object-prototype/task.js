//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
    for (let i = 0, j = (this.length - 1); i < this.length, j > -1; i++, j--) {
        if(this[i] == ' ') {
            i++;
        }

        if(this[j] == ' ') {
            j--;
        }

        if (this[i].toLowerCase() != this[j].toLowerCase()) {
            return false;
        }
    }
    return true;
}
console.log("А роза упала на лапу Азора".isPalindrome());
console.log("еле-еле шёл Емеля!".isPalindrome());


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
    if (marks.length == 0) {
        return 0;
    }

    let average = 0;
    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }
    average = average / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
    let now = +(new Date);
    let year = birthday.slice(0, 4), month = birthday.slice(5, 7) - 1, day = birthday.slice(8, 10);
    let birth = new Date(year, month, day);
    birthday = +birth;

    let diff = now - birthday;
    let age = diff / 31536000000;
    return age > 18;
}