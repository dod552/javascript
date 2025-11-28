// 정수 1개를 전달받아 출력하는 함수 sister3() 정의
// => 외부에서 sister3 함수 호출하는 형태 : sister3(200);
// => 전달인자가 있으므로 함수 정의 시 소괄호() 내에 전달인자를 저장할 변수(= 매개변수) 기술
//    이 때, 자바와 달리 데이터타입 없이 변수명만 기술
//function sister3(let money) {} // 자바스크립트 함수 파라미터 선언 시 let 또는 var 키워드 등 명시 불가! (오류 발생!)
function sister3(money) { // 외부에서 함수 호출 시 전달하는 데이터가 파라미터 money 에 저장됨
	console.log(`동생 : 오빠가 과자 사먹으라고 ${money} 원을 줬다!`);
	
	money -= 200;
	console.log(`동생 : 과자 사먹고 남은 돈 = ${money} 원!`);
}
// ==============================================================================
// 1. 문자열 1개를 전달받아, 함수 내에서 전달받은 문자열 출력하는 printMessage() 함수 정의
//    ex) "Hello, World!" 전달 시 해당 문자열 그대로 브라우저에 출력
function printMessage(msg) { // let msg = "Hello, World!" 이 코드와 동일한 코드가 됨
	document.write(`전달받은 데이터(전달인자) : ${msg}<br>`);
}
// -----------------------------------------------------------
// 2. 정수 1개(count)를 전달받아 count 값만큼 "Hello, World!" 문자열을 반복 출력하는 printHello() 함수 정의
function printHello(count) {
	for(let i = 1; i <= count; i++) {
		document.write(`${i} : Hello, World!<br>`);
	}
} 
// -----------------------------------------------------------
// 3. 정수 1개(x) 전달하면 1 ~ x 까지의 합계를 계산하여 출력하는 sum() 함수 정의
function sum(x) {
	let total = 0;
	
	for(let i = 1; i <= x; i++) {
		total+= i;
	}
	
	document.write(`1 ~ ${x} 까지의 합 = ${total}<br>`);
}
// ---------------------------------------------------------
// 4. 정수 1개(dan) 전달하면 dan 에 해당하는 구구단을 출력하는 gugudan() 함수 정의
//function gugudan(dan) {}
// 만약, 외부로부터 dan 값이 전달되지 않았을 경우 기본값으로 2단을 출력하도록 파라미터 dan 에 기본값 2 설정
// => 전달인자가 있으면 해당 값을 매개변수에 저장하고, 전달인자가 없을 경우에만 기본값을 매개변수에 저장
function gugudan(dan = 2) {	
	document.write(` < ${dan} 단3333 ><br>`);
	for(let i = 1; i <= 9; i++) {
		document.write(`${dan} * ${i} = ${dan * i}<br>`);
	}
}
// ---------------------------------------------------------
// 5. 정수 2개를 전달하여 두 수의 합계를 계산하여 출력하는 sum2() 함수 정의
// => ex) sum2(10, 20) 전달 시 num1 = 10, num2 = 20 형태가 되고
//        sum2(50) 전달 시 num1 = 50, num2 는 아무것도 전달받지 못했으므로 undefined 가 됨
//        따라서, 기본값을 활용하여 두 번째 값이 전달되지 않았을 때 0 으로 설정 가능
function sum2(num1 = 0, num2 = 0) {
	document.write(`${num1} + ${num2} = ${num1 + num2}<br>`);
}
// ---------------------------------------------------------
// 6. 문자열 1개와 정수 1개(x)를 전달하여, 문자열을 정수 x번만큼 반복 출력하는 printMessage2() 함수 정의
function printMessage2(text, count) {
	for(let i = 1; i <= count; i++) {
		document.write(`${i} : ${text}<br>`);
	}
} 
// ---------------------------------------------------------
// 7. 아이디(id)와 패스워드(passwd)를 전달하여 일치 여부를 판별 후 결과를 출력하는 login() 함수 정의
function login(id, passwd) {
	document.write(`아이디 : ${id}, 패스워드 : ${passwd}<br>`);
	if(id == "admin" && passwd == "1234") {
		document.write("로그인 성공!<br>");
	} else {
		document.write("로그인 실패!!!!!<br>");
	}
	
	let result = (id == "admin" && passwd == "1234") ? "로그인 성공!<br>" : "로그인 실패!!!!!<br>";
	document.write(result);
}



















