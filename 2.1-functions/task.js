// Задание 1
function getSolutions(a, b, c) {
    let D = Math.pow(b,2) - 4 * a * c;
    if (D < 0) {
        return { D, roots: [] };
    } else if (D == 0) {
        let x1 = (-b) / (2 * a);
        return {D, roots: [x1]}
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D, roots: [ x1, x2 ] };
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задание 2
function getAverageScore(data) {
    let object = new Object();
    object.average = 0;
    let counter = 0;
    for (let property in data) {
        object[property] = getAverageMark(data[property]);
        object.average += getAverageMark(data[property]);
        counter++;
    }
    object.average = object.average / counter;
    if (isNaN(object.average)) {
        object.average = 0;
    }
    return object;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length != 0) {
        for (let i = 0; i < marks.length; i++)
        {
            averageMark += marks[i];
        }
        return averageMark / marks.length;
    } else {
        return 0;
    }
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));

console.log(getAverageScore(
    {}
));

// Задание 3
function getPersonData(secretData) {
    let object = new Object();
    for(let property in secretData) {
        if (property == 'aaa') {
            object.firstName = getDecodedValue(secretData[property]);
        } else if (property == 'bbb') {
            object.lastName = getDecodedValue(secretData[property]);
        }
    }
    return object;
}

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    } else if (secret === 1) {
        return 'Эмильо';
    }
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));

console.log(getPersonData({
    bbb: 0,
    bbb: 0
}));

console.log(getPersonData({
    bbb: 1,
    aaa: 1
}));