/*
3. if ~ else if 문(= 다중 else if 문)
- if문에 주어진 조건을 판별하여 true 일 경우 if 문의 블럭 내의 문장들을 수행하고,
  false 일 경우 다음 if 문(else if)의 조건을 판별 후 true 이면 else if 내의 문장들을 수행,
  아니면 다음 else if 문 조건을 계속 판별함
  => 만약, 모든 조건식의 판별 결과가 false 이면 else 문이 있을 경우 해당 블럭 문장 수행
     (단, else 문은 생략 가능함)
- 주의! if문은 위에서부터 순서대로 조건을 판별하므로
  else 문은 항상 가장 마지막 조건으로 기술해야한다!

< 기본 문법 >
if(조건식1) {
	// 조건식1 판별 결과가 true 일 때 실행할 문장들...		
} else if(조건식2) {
	// 조건식1 판별 결과가 false 이고, 조건식2 판별 결과가 true 일 때 실행할 문장들...
} else if(조건식n) {
	// 조건식1, 2 판별 결과가 false 이고, 조건식n 판별 결과가 true 일 때 실행할 문장들...
} else {
	// 위의 모든 조건식 판별 결과가 false 일 때 실행할 문장들... (else 문은 생략 가능)
}
*/

let num = 0;

// 변수 num 값에 대해 "0보다 크다!", "0보다 작다!", "0 이다!" 세 가지 경우의 판별
if(num > 0) { // num 이 0보다 클 경우
	console.log(`${num} : 0보다 크다!`);
} else if(num < 0) { // num 이 0보다 작을 경우
	console.log(`${num} : 0보다 작다!`);
} else { // num 이 0보다 크지도 작지도 않을 경우
	console.log(`${num} : 0 이다!`);
}

// else 문 대신 마지막 조건(0과 같음)도 else if 문으로 처리 가능
if(num > 0) { // num 이 0보다 클 경우
	console.log(`${num} : 0보다 크다22!`);
} else if(num < 0) { // num 이 0보다 작을 경우
	console.log(`${num} : 0보다 작다22!`);
} else if(num == 0) { // num 이 0 일 경우
	console.log(`${num} : 0 이다22!`);
}
// ==============================================================
// 변수 num2 에 값을 저장한 후 "홀수", "짝수", "0" 을 판별하여 출력
let num2 = 0;

if(num2 % 2 == 1) { // 홀수
	console.log(`${num2} : 홀수!`);
} else if(num2 % 2 == 0) { // 짝수
	console.log(`${num2} : 짝수!`);
} else { // 0일 경우
	console.log(`${num2} : 0 이다!`);
}
// => 주의! 짝수 판별 조건이 0 보다 윗쪽에 위치할 경우 0이 입력되면 짝수 조건식에 대한 결과가 true 가 됨(0도 2로 나눈 나머지 0)
//    따라서, 이런 경우 짝수 판별 조건식보다 0 판별 조건식이 먼저 수행되어야 한다! => 순서 중요!
if(num2 % 2 == 1) { // 홀수
	console.log(`${num2} : 홀수!`);
} else if(num2 == 0) { // 0일 경우(최소한 짝수 판별식보다 윗쪽에 위치해야함)
	console.log(`${num2} : 0 이다!`);
} else if(num2 % 2 == 0) { // 짝수(if 조건은 생략 가능)
	console.log(`${num2} : 짝수!`);
}
// ========================================================================
// 정수 1개(num3) 입력받아 
// 1) 10보다 큰 수
// 2) 10보다 작고 5보다 크거나 같은 수 
// 3) 5보다 작고 0보다 크거나 같은 수 판별
// ex) 15 입력했을 경우 : 10보다 크다! 출력
//     7 입력했을 경우 : 10보다 작고 5보다 크다! 출력
let num3 = -1;

if(num3 > 10) {
	console.log(`${num3} : 10보다 크다!`);
} else if(num3 >= 5 && num3 < 10) {
	console.log(`${num3} : 5보다 크거나 같고 10보다 작다!`);
} else if(num3 >= 0 && num3 < 5) {
	console.log(`${num3} : 0보다 크거나 같고 5보다 작다!`);
}

// 주의! 세번째 조건 대신 else 문을 통해 나머지 모든 조건을 처리할 경우
// 10 초과, 5 ~ 9 사이, 를 제외한 나머지의 경우 0 ~ 4 사이가 아니더라도 else 문으로 처리하므로 올바르지 못한 결과가 됨 
//if(num3 > 10) {
//	console.log(`${num3} : 10보다 크다!`);
//} else if(num3 >= 5 && num3 < 10) {
//	console.log(`${num3} : 5보다 크거나 같고 10보다 작다!`);
//} else {
//	console.log(`${num3} : 0보다 크거나 같고 5보다 작다!`);
//}

if(num3 > 10) {
	console.log(`${num3} : 10보다 크다!`);
} else if(num3 >= 5 && num3 < 10) {
	console.log(`${num3} : 5보다 크거나 같고 10보다 작다!`);
} else if(num3 >= 0 && num3 < 5) {
	console.log(`${num3} : 0보다 크거나 같고 5보다 작다!`);
} else {
	console.log(`${num3} : 숫자 입력 오류!!`);
}
// ==================================================================
// prompt() 활용하여 학생 점수(score)를 입력받아 학점 판별하기 (ex. XX점 : A)
// A학점 : 90 ~ 100점 
// B학점 : 80 ~ 89점
// C학점 : 70 ~ 79점
// D학점 : 60 ~ 69점
// F학점 : 0 ~ 59점
// 단, 입력받은 점수가 0 ~ 100 사이가 아닐 경우 "점수 입력 오류!" 출력
//let score = prompt("점수를 입력하세요!");
let score = 105;
document.write(`입력받은 점수 : ${score}<br>`);

if(score >= 90 && score <= 100) {
	document.write(`학점 : A<br>`);
} else if(score >= 80 && score <= 89) {
	document.write(`학점 : B<br>`);
} else if(score >= 70 && score <= 79) {
	document.write(`학점 : C<br>`);
} else if(score >= 60 && score <= 69) {
	document.write(`학점 : D<br>`);
} else if(score >= 0 && score <= 59) {
	document.write(`학점 : F<br>`);
} else {
	document.write(`점수 입력 오류!<br>`);
}

//score = 75;
//document.write(`입력받은 점수2 : ${score}<br>`);
//if(score >= 90 && score <= 100) {
//	document.write(`학점 : A<br>`);
//} else if(score >= 80) { // 80 ~ 89 사이(이 때, 90 ~ 100 사이가 아니므로 90 미만 조건 생략되어 있음. 따라서, score <= 89 생략 가능)
//	// 단, 100 보다 큰 값도 현재 조건에서 true 가 되므로 문제가 발생할 수 있음
//	document.write(`학점 : B<br>`);
//} else if(score >= 70) {
//	document.write(`학점 : C<br>`);
//} else if(score >= 60) {
//	document.write(`학점 : D<br>`);
//} else if(score >= 0) {
//	document.write(`학점 : F<br>`);
//} else {
//	document.write(`점수 입력 오류!<br>`);
//}
// => 주의! 위의 첫번째 조건 통과 후 두번째 조건 80 이상 판별 시 105점도 B 학점으로 포함되는 문제 해결해야함
// => 학점 판별 전 먼저 0 ~ 100 사이 점수를 판별하거나, 반대로 0보다 작거나 100보다 큰 점수를 제외시켜야함 
score = 105;
document.write(`입력받은 점수2 : ${score}<br>`);
if(score > 100 || score < 0) {
	document.write(`점수 입력 오류!<br>`);	
} else if(score >= 90 && score <= 100) {
	document.write(`학점 : A<br>`);
} else if(score >= 80) {
	document.write(`학점 : B<br>`);
} else if(score >= 70) {
	document.write(`학점 : C<br>`);
} else if(score >= 60) {
	document.write(`학점 : D<br>`);
} else if(score >= 0) {
	document.write(`학점 : F<br>`);
}

score = 100;
document.write(`입력받은 점수3 : ${score}<br>`);
// 중첩 if 문(if문 블록 내에서 또 다시 if문 사용)을 활용하여 동일한 작업 수행 가능
if(score >= 0 && score <= 100) { // 정상 점수 범위일 경우
	if(score >= 90) { //  && score <= 100 생략 가능
		document.write(`학점 : A<br>`);
	} else if(score >= 80) {
		document.write(`학점 : B<br>`);
	} else if(score >= 70) {
		document.write(`학점 : C<br>`);
	} else if(score >= 60) {
		document.write(`학점 : D<br>`);
	} else { // else if(score >= 0) {} 대신 else 만 처리 가능
		document.write(`학점 : F<br>`);
	}
} else { // 점수 입력 오류일 경우
	document.write(`점수 입력 오류!<br>`);	
}























