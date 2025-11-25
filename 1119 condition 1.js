/*
[ 조건문 ]
- 특정 조건을 통해 어떤 대상 코드의 실행 여부를 결정하는 문
- if 문, switch-case 문 등

[ if문 ]
- 특정 조건에 따라 문장을 실행하는 조건문
- 자바에서의 if문과 거의 동일
- 조건식은 반드시 결과가 true 또는 false 인 식만 사용 가능(자바만 해당됨)하며, 변수 사용도 가능

1. 단일 if문
- if문에 주어진 조건을 판별하여 true 일 때 지정된 블럭 내의 문장들을 수행하는 if문

< 기본 문법 >
문장1;

if(조건식) {
	// 조건식 판별 결과가 true 일 때 실행할 문장들...
	문장2;
}

문장3;

=> 조건식 판별 결과가 true 일 때 : 문장1 -> 문장2 -> 문장3 순으로 실행됨
=> 조건식 판별 결과가 false 일 때 : 문장1 -> 문장3 순으로 실행됨(문장2 실행은 생략됨)
*/

//console.log("태양씨가 아이티윌로 걸어간다.");
//console.log("떨어져있는 돈이 있다. 주울까?");
//
//if(true) { // if 문 조건식 부분에 강제로 boolean 타입 지정 시 무조건 해당 값을 판별 조건으로 사용
//	// 즉, true 라고 지정하면 무조건 if문 블럭 내의 문장들이 실행됨
//	console.log("돈을 주웠다, 점유물 이탈 횡령죄!"); // if 문 판별 결과가 true 일 경우에만 실행되는 문장
//}
//
//console.log("아이티윌 도착!");
// -----------------------------------------------
// 변수 num 선언 및 정수 10 으로 초기화 후 출력
//let num = 10;
let num = -10;
console.log(`num = ${num}`); // 문장1

// 단일 if문을 사용하여 [변수 num 값이 0보다 큰가?] 판별
if(num > 0) {
	// num 값이 0보다 클 경우 조건식 판별 결과가 true 이므로
	// if 문에 의해 중괄호 블럭{} 내의 문장들이 차례대로 실행됨
	// 단, 0보다 크지 않을 경우 판별 결과가 false 가 되므로 블럭 내의 문장 실행을 생략하고 if문을 바로 빠져나감
	console.log(`num : 0보다 크다!`); // 문장2
} // if(num > 0) 문 끝

console.log(`이 문장은 if 문 조건식 판별 결과와 상관없이 무조건 실행됨!`); // 문장3
// => num 값이 0보다 클 경우 문장1 -> 문장2 -> 문장3 순으로 실행됨
// => num 값이 0보다 크지 않을 경우 문장1 -> 문장3 순으로 실행됨(문장2 실행되지 않음)
// -----------------------------------------------
// confirm() 함수를 통해 "종료하시겠습니까?" 메세지 출력하고
// 사용자로부터 확인(true)/취소(false) 버튼을 입력받은 후
// 확인 버튼을 눌렀을 경우에만 "프로그램을 종료합니다!" 출력
let selectedBtn = confirm("종료하시겠습니까?");
console.log(`selectedBtn : ${selectedBtn}`);

// if 문을 사용하여 selectedBtn 값이 true 인지 판별
//if(selectedBtn == true) {} // selectedBtn == true 인 조건이 true 일 경우를 판별(= 조건을 두 번 판별)
// 따라서, if 문 조건식 부분에 boolean 타입 값을 판별할 경우에는 boolean 타입 값만 기술하여 true/false 를 판별하자!
if(selectedBtn) { // if(selectedBtn == true) {} 문장과 동일한 표현 방법
	console.log("프로그램을 종료합니다!"); // selectedBtn 값이 true 일 때 실행되는 문장
}

// 취소 버튼 클릭했을 때를 판별하여 "취소 버튼 클릭됨!" 출력하기
//if(selectedBtn == false) {} // selectedBtn == false 인 조건이 true 일 경우를 판별(= 조건을 두 번 판별)
if(!selectedBtn) {
	// => selectedBtn 값이 true 가 입력되면 !selectedBtn 의 NOT 연산자에 의해 true -> false 로 반전되고
	//    if(false) {} 가 되어 블록문을 실행하지 않고 종료함
	// => selectedBtn 값이 false 가 입력되면 !selectedBtn 의 NOT 연산자에 의해 false -> true 로 반전되고
	//    if(true) {} 가 되어 블록문을 실행함
	console.log("취소 버튼 클릭됨!"); // selectedBtn 값이 false 일 때 실행되는 문장
}

console.log("if 문 끝!");

























