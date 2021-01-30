 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	
	// реализуйте здесь задание №1
	let algebra;
	let geography;
	let physics;

	algebra = a;
	geography = g;
	physics = p;

	let answer = (algebra + geography + physics) / 3;
    
	return answer;// ваш ответ;
}

function sayHello(userName) {
	
	// реализуйте здесь задание №2
	let myName = userName;
	let message = `Привет, мир! Меня зовут ${myName}`;
    
	return message;// ваш ответ;
}

function calculateFormula() {
    
	// реализуйте здесь задание №3
	let x, y, z;
	x = 2;
	y = 22;
	z = 0;
	let result = x * y + 5 * z + x - 1;
	
    return result;// ваш ответ;
}
