/*
[ 중첩 반복문(for, while 동일) ]
- 반복문 내에서 또 다른 반복문이 수행되는 형태
- 바깥쪽 반복문과 안쪽 반복문으로 구별되며, 바깥쪽 반복문이 1바퀴 실행될 때 안쪽 반복문이 x바퀴 실행되므로
  안쪽 반복문의 총 반복 횟수는 바깥쪽 반복문 반복횟수 * 안쪽 반복문 반복횟수가 된다!
  ex) 바깥쪽 반복횟수 3회 * 안쪽 반복횟수 5회 = 총 반복횟수 15회
- 중첩 for문 기본 문법
	----------------------------------
	문장1;
	
	for(초기식; 조건식; 증감식) { // 바깥쪽 for문(반복횟수 x회)
		문장2; // 반복횟수 = x회(바깥쪽 반복문의 영향만 받음) 
		
		for(초기식; 조건식; 증감식) { // 안쪽 for문(반복횟수 y회)
			문장3; // 반복횟수 = x회(바깥쪽 횟수) * y회(안쪽 횟수)
		} // 안쪽 for문 끝
		
		문장4; // 반복횟수 = x회(바깥쪽 반복문의 영향만 받음)
	} // 바깥쪽 for문 끝
	
	문장5;
	----------------------------------
*/ 

//for(let i = 1; i <= 5; i++) { // 바깥쪽 for문(반복횟수 5회)
//	
//	document.write(`i = ${i}<br>`); // 반복횟수 5회 
//	// => 단, 안쪽 for문 반복이 시작되기 전 실행됨
//	
//	for(let j = 1; j <= 3; j++) { // 안쪽 for문(반복횟수 3회)
//		
//		document.write(`---------> j = ${j}<br>`); // 반복횟수 = 3회(안쪽) * 5회(바깥쪽) = 15회
//		
//	}
//	
//	document.write(`====================<br>`); // 반복횟수 5회 
//	// => 단, 안쪽 for문 반복이 종료된 후 실행됨
//	
//}
// =================================================================
// [ 연습문제 ]
// 1) 시계에서 초를 제외한 시각과 분을 출력하는 중첩 for문
//    ex) 0시 0분
//        0시 1분
//        0시 2분
//        ...생략...
//        1시 0분
//        0시 59분
//        1시 0분
//        1시 1분
//        1시 2분
//        ...생략...          
//        23시 59분
//for(let hour = 0; hour <= 23; hour++) { // 시(0 ~ 23)
//	document.write(`------> ${hour}시입니다!<br>`);
//
//	for(let min = 0; min <= 3; min++) { // 분(0 ~ 59)
//		
//		document.write(`${hour}시 ${min}분<br>`);
//		
//	} // 안쪽 for문 끝
//	
//	document.write(`<hr>`);
//} // 바깥쪽 for문 끝
// ================================================================
// 구구단 2단 ~ 9단까지 차례대로 출력
//for(let dan = 2; dan <= 9; dan++) { // 단(2 ~ 9)
//	document.write(`&nbsp;&lt; ${dan}단 &gt;<br>`);
//
//	for(let num = 1; num <= 9; num++) { // 곱해지는 수(1 ~ 9)
//		
//		document.write(`${dan} * ${num} = ${dan * num}<br>`);
//		
//	} // 안쪽 for문 끝
//	
//	document.write(`<br>`);
//} // 바깥쪽 for문 끝

// ===============================================================
// 1 ~ 100 까지의 숫자 중 2 와 3의 공배수 출력
// ex) 6, 12, 18, 24...
for(let i = 1; i <= 100; i++) {
	if(i % 2 == 0 && i % 3 == 0) {
		document.write(`${i}&nbsp;`)
	}
}
document.write(`<hr>`);

// 중첩 for문을 활용하여 방정식 해 찾기
// 1) x * y = 72 를 만족하는 해(단, 1 <= x <= 100 이고, 1 <= y <= 100 인 값)
//    ex) x = 1, y = 72 일 때 1 * 72 = 72
//        x = 2, y = 36 일 때 2 * 36 = 72
//for(let x = 1; x <= 100; x++) {
//	
//	for(let y = 1; y <= 100; y++) {
//		
//		if(x * y == 72) {
//			document.write(`${x} * ${y} = ${x * y}<br>`);
//		}
//		
//	}
//	
//}
// =========================================================
// 1) 총 인원 수에 대한 한 줄 당 인원 수를 제한하여 필요한 줄 수를 계산하여 출력하고
// 2) 해당 결과에 따른 좌석 배치 형태를 출력하기
//let memNum = prompt("총 인원 수를 입력하세요");
//let colNum = prompt("한 줄에 앉을 인원 수를 입력하세요");
//// 필요한 줄 수 계산
//let rowNum = parseInt(memNum / colNum) + ((memNum % colNum > 0) ? 1 : 0);
//
//document.write(`총 인원 : ${memNum} 명<br>`);
//document.write(`한 줄에 앉을 인원 : ${colNum} 명<br>`);
//document.write(`필요한 줄 수 : ${rowNum} 줄<br>`);
//
//// 좌석 배치 형태를 출력
//for(let i = 1; i <= memNum; i++) { // 전체 인원 수 카운팅
//	document.write(`${i}&nbsp;`);
//	
//	if(i % 3 == 0) { // 한 줄당 앉을 인원 수만큼 배치(출력) 후 줄바꿈
//		document.write(`<br>`);
//	}
//}
//document.write(`<hr>`);
//// ---------------------------------
//// 위의 작업을 테이블로 출력하기 -> 중첩 for문 활용
//let count = 1; // 인원 수(좌석번호)를 카운팅 할 변수 선언
//document.write(`<table border="1">`);
//
//for(let row = 1; row <= rowNum; row++) { // 바깥쪽 for문은 줄 수(rowNum)만큼 반복
//	document.write(`<tr>`);
//	
//	for(let col = 1; col <= colNum && count <= memNum; col++) { // 안쪽 for문은 한 줄 당 좌석 수(colNum)만큼 반복
//		document.write(`<td>${count}</td>`); // 좌석 번호 출력
//		count++; // 좌석번호 카운트 1 증가
//	}
//	
//	document.write(`</tr>`);
//}
//
//document.write(`</table>`);
//document.write(`<hr>`);
// ========================================================================
/*
[ * 출력하기 ]
1) 직각삼각형 1번 형태
   *
   **
   ***
   ****
   *****
*/
document.write(`<table border="1">`);
for(let i = 1; i <= 5; i++) {
	document.write(`<tr>`);
	
	for(let j = 1; j <= i; j++) {
		document.write(`<td>*</td>`);
	}
	
	for(let j = 1; j <= 5 - i; j++) {
		document.write(`<td></td>`);
	}
	
	document.write(`</tr>`);
}
document.write(`</table>`);

document.write(`<hr>`);

/*
[ * 출력하기 ]
2) 직각삼각형 2번 형태
       *
      **
     ***
    ****
   *****
*/
document.write(`<table border="1">`);
for(let i = 1; i <= 5; i++) {
	document.write(`<tr>`);
	
	for(let j = 1; j <= 5 - i; j++) {
		document.write(`<td></td>`);
	}
	
	for(let j = 1; j <= i; j++) {
		document.write(`<td>*</td>`);
	}
	
	document.write(`</tr>`);
}
document.write(`</table>`);

document.write(`<hr>`);






















