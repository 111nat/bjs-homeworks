// Задание 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
    return weapons.map(elem => elem.name);
}

function getCountReliableWeapons(durability) {
    return weapons.filter(elem => elem.durability > durability).length;
}

function hasReliableWeapons(durability) {
    return weapons.some(elem => elem.durability > durability);
}

function getReliableWeaponsNames(durability) {
    return weapons.filter(elem => elem.durability > durability).map(elem => elem.name);
}

function getTotalDamage() {
    return weapons.reduce((acc, elem) => acc + elem.attack, 0);
}

// Задание 2
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays( arr1, arr2 ) {
    return (arr1.every(elem => arr1.indexOf(elem) == arr2.indexOf(elem))) && (arr2.every(elem => arr2.indexOf(elem) == arr1.indexOf(elem)));
}

function memorize(fn, limit) {
    const memory = [
        { args: [3, 4], result: 7 }
    ];
    return function fun(...arg) {
        if(memory.find(elem => compareArrays(elem.args, arg)) != undefined) {
            console.log("Из памяти");
            return memory.find(elem => compareArrays(elem.args, arg)).result;
        } else {
            console.log("Не из памяти");
            const sum = fn(...arg);
            memory.push({args: arg, result: sum});
            if (memory.length > limit) {
                memory.shift();
            }
            return sum;
        }
    };
}

const mSum = memorize(sum, 2);
// console.log(mSum(3, 4)); // 7
// console.log(mSum(3, 4)); // 7
// console.log(mSum(1, 3)); // 4
// console.log(mSum(1, 2)); // 
// console.log(mSum(1, 4)); // 
// console.log(mSum(1, 6)); // 
console.log(mSum(1, 7)); // 
console.log(mSum(1, 7)); // 
console.log(mSum(1, 7)); // 
console.log(mSum(1, 7)); // 