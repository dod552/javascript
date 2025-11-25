/*
[ 반복문(Loop) ]
- 특정 문장(들)을 원하는 횟수(또는 상황)만큼 반복하는 문
- 주어진 조건식을 판별하여 조건이 true 일 동안 반복문을 수행하는 구조
- for 문과 while 문으로 나뉘어짐(문법 구조가 약간 다름)
  1) for 문 : 주로 반복 횟수가 정해져 있는 경우 사용
  2) while 문 : 주로 반복 횟수가 정해져 있지 않은 경우 사용
  => for 문과 while 문은 상호 변환이 100% 가능하다!
==============================================================================================
[ for문 ]
for(①초기식; ②조건식; ④증감식) {
	// ③ 조건식 판별 결과가 true 일 경우 반복 수행할 문장들...
	// 반복 1회 끝나면 중괄호(}) 위치에서 4번 - 증감식 위치로 이동
}

1) 초기식 : 반복 횟수를 결정하는데 사용할 변수 값을 초기화하는 코드(변수 선언까지도 가능)
2) 조건식 : 반복 횟수를 결정하는데 사용되는 목표값을 지정하는 식
            => 판별 결과가 true 이면 블럭 내의 코드를 실행하고, false 이면 for문 종료
3) 실행문 : 조건식 판별 결과가 true 일 때 실행할 문장들을 기술
4) 증감식 : 반복 횟수를 결정하는데 사용되는 변수의 증감을 위한 식
=> for문은 최초 1번을 한 번 실행 후 2번 조건식을 판별하여 true 일 동안
   3번 -> 4번 -> 2번 과정을 반복 실행함
*/

// 1. document.write() 메서드로 "Hello, World!" 문자열 5번 출력
document.write("1 : Hello, World!<br>");
document.write("2 : Hello, World!<br>");
document.write("3 : Hello, World!<br>");
document.write("4 : Hello, World!<br>");
document.write("5 : Hello, World!<br>");
document.write("<hr>");

// 2. 위의 작업을 for문을 활용하여 동일하게 수행
// => 제어변수 i 값이 1부터 시작해서 5보다 작거나 같을 동안(1 ~ 5까지)
//    i값을 1만큼 증가시키면서 "Hello, World!" 문자열 출력
//for(let i = 1; i <= 5; i++) {
//	document.write(`${i} : Hello, World!<br>`);
//}
//
//document.write(`for문 종료 후 i값 = ${i}<br>`);
// => 주의! for문 내에서 선언된 변수를 for문이 끝난 후 for문 바깥에서 접근할 경우
//    해당 변수가 존재하지 않아 오류가 발생함(i is not defined)
//    (기본적으로 변수는 선언된 블록 내에서만 사용 가능하기 때문(예외도 있음))
// => 따라서, 해당 변수를 for문 종료 후에도 사용(접근)하려면
//    1) 변수 선언 키워드를 let 대신 var 로 바꿔서 사용(권장하지 않음)
//    2) for문 시작 전 윗쪽에서 변수 선언
let i;
for(i = 1; i <= 5; i++) {
	document.write(`${i} : Hello, World22!<br>`);
}

document.write(`for문 종료 후 i값 = ${i}<br>`);
/*
---------------------------------------------------------------------------------------
위의 반복문(for)에 대한 디버깅(Debugging) 과정 추적                  
---------------------------------------------------------------------------------------
초기식(i)   조건식(i <= 5)   실행문(${i} : Hello, World!<br> 출력)      증감식(i++)
---------------------------------------------------------------------------------------
  i = 1         true          "1 : Hello, World!" 출력됨              i = 1 -> 2 증가
  i = 2         true          "2 : Hello, World!" 출력됨              i = 2 -> 3 증가
  i = 3         true          "3 : Hello, World!" 출력됨              i = 3 -> 4 증가
  i = 4         true          "4 : Hello, World!" 출력됨              i = 4 -> 5 증가
  i = 5         true          "5 : Hello, World!" 출력됨              i = 5 -> 6 증가
  i = 6         false         for문 반복 종료하고 빠져나감(끝)
*/

document.write("<hr>");
// =====================================================================================
// [ for문 연습 ]
// 제어변수 i값이 1 ~ 10까지 1씩 증가하면서 i값 차례대로 출력하기(1 2 3 4 5 6 7 8 9 10)
for(let i = 1; i <= 10; i++) {
	document.write(`${i} `);
}
document.write("<br>");

// 제어변수 i값이 1 ~ 10까지 2씩 증가하면서 i값 차례대로 출력하기(1 3 5 7 9)
for(let i = 1; i <= 10; i += 2) {
	document.write(`${i} `);
}
document.write("<br>");

// 제어변수 i값이 2 ~ 10까지 2씩 증가하면서 i값 차례대로 출력하기(2 4 6 8 10)
for(let i = 2; i <= 10; i += 2) {
	document.write(`${i} `);
}
document.write("<br>");

// 제어변수 i값이 10 ~ 1까지 1씩 감소하면서 i값 차례대로 출력하기(10 9 8 7 6 5 4 3 2 1)
for(let i = 10; i >= 1; i--) {
	document.write(`${i} `);
}
document.write("<hr>");
// ======================================================================================
// for문과 if문의 조합 연습
// => 1) for문 내에 if 문을 사용하여 반복 과정에서 조건을 추가하거나
//    2) if 문 내에 for 문 사용하여 특정 조건일 때 반복을 수행
// 1 ~ 10 까지 1씩 증가하는 동안 짝수일 때만 숫자를 출력(2 4 6 8 10)
for(let i = 1; i <= 10; i++) {
	if(i % 2 == 0) {
		document.write(`${i} `);
	}
}
document.write("<br>");

/*
구구단 2단 출력하기
ex)
 < 2단 >
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
*/

let dan = 2;
document.write(` < ${dan}단 ><br>`);

//let x = 1;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;
//document.write(`${dan} * ${x} = ${dan * x}<br>`);
//x++;

for(let x = 1; x <= 9; x++) {
	document.write(`${dan} * ${x} = ${dan * x}<br>`);
}
// ===========================================================
//document.write(`<table border="1">`);
//document.write(`<tr><td>1</td></tr>`);
//document.write(`<tr><td>2</td></tr>`);
//document.write(`<tr><td>3</td></tr>`);
//document.write(`<tr><td>4</td></tr>`);
//document.write(`<tr><td>5</td></tr>`);
//document.write(`<tr><td>6</td></tr>`);
//document.write(`<tr><td>7</td></tr>`);
//document.write(`<tr><td>8</td></tr>`);
//document.write(`<tr><td>9</td></tr>`);
//document.write(`<tr><td>10</td></tr>`);
//document.write(`</table>`);

// for문을 사용하여 동일한 테이블 생성
document.write(`<table border="1">`);
document.write(`	<tr><th>i값</td></tr>`);
for(let i = 1; i <= 10; i++) {
	document.write(`	<tr><td>${i}</td></tr>`);
}
document.write(`</table>`);























