/*
switch-case 문
=> if~else if 문 처럼 조건에 대한 복수개의 값을 비교할 수 있는 조건문
=> 단, 비교 대상으로 사용할 값은 범위를 지정할 수 없고 단일 값만 지정 가능(자바의 특징)
   자바스크립트는 범위 지정이 가능하나 switch 문의 조건에 true 라고 명시해야함
=> if 문에 비해 상대적으로 실행 속도가 빠름

*/

let countryCode = "JPN";

// if문을 사용하여 countryCode 값이 "KOR" 일 경우 "대한민국" 출력, "USA" 일 경우 "미국", 
//                                  "JPN" 일 경우 "일본", 그 외의 경우 "기타" 출력
if(countryCode === "KOR") {
	document.write(`${countryCode} : 대한민국!<br>`);
} else if(countryCode === "USA") {
	document.write(`${countryCode} : 미국!<br>`);
} else if(countryCode === "JPN") {
	document.write(`${countryCode} : 일본!<br>`);
} else {
	document.write(`${countryCode} : 기타!<br>`);
}
document.write(`<hr>`);

// switch-case 문으로 동일한 작업 수행
switch(countryCode) { // 비교할 값을 switch 문의 조건식 부분에 지정
	// 판별 대상 값들을 각각의 case 문을 통해 기술하고 case 문 뒤의 : 뒤에 실행할 문장을 기술
	case "KOR" : document.write(`${countryCode} : 대한민국!<br>`);
	case "USA" : document.write(`${countryCode} : 미국!<br>`);
	case "JPN" : document.write(`${countryCode} : 일본!<br>`);
	// if문에서 else 에 해당하는 부분을 switch-case 에서는 default 블럭으로 작성
	default: document.write(`${countryCode} : 기타!<br>`);
}
// => 주의! case 문 실행 한 후 나머지 아래쪽의 case 및 default 블럭의 문장들을 차례대로 무조건 실행함
// ex) "USA" 일 때, 미국 출력 후 일본과 기타까지 모두 출력됨
// => 특정 문장 실행 후 switch 문을 빠져나가려면 break 문을 지정
document.write(`<hr>`);
switch(countryCode) { // 비교할 값을 switch 문의 조건식 부분에 지정
	// 판별 대상 값들을 각각의 case 문을 통해 기술하고 case 문 뒤의 : 뒤에 실행할 문장을 기술
	case "KOR" : 
		document.write(`${countryCode} : 대한민국!<br>`); 
		break;
	case "USA" : 
//		document.write(`${countryCode} : 미국!<br>`); 
//		break;
	case "JPN" : 
		document.write(`${countryCode} : 일본!<br>`); 
		break;
	// if문에서 else 에 해당하는 부분을 switch-case 에서는 default 블럭으로 작성
	default: 
		document.write(`${countryCode} : 기타!<br>`); 
//		break; // default 블럭 등 맨 밑에 있는 블럭은 break 문 생략 가능
}
// ===============================================================
// prompt() 활용하여 학생 점수(score)를 입력받아 학점 판별하기 (ex. XX점 : A)
// A학점 : 90 ~ 100점 
// B학점 : 80 ~ 89점
// C학점 : 70 ~ 79점
// D학점 : 60 ~ 69점
// F학점 : 0 ~ 59점
// 단, 입력받은 점수가 0 ~ 100 사이가 아닐 경우 "점수 입력 오류!" 출력
let score = 185;
switch(true) { // 내부에서 case 문을 통해 범위 비교를 수행하려면 switch 조건은 true 만 명시
	case (score >= 90 && score <= 100) : 
		document.write(`${score} 점의 학점 : A<br>`);
		break;
	case (score >= 80 && score <= 89) : 
		document.write(`${score} 점의 학점 : B<br>`);
		break;
	case (score >= 70 && score <= 79) : 
		document.write(`${score} 점의 학점 : C<br>`);
		break;
	case (score >= 60 && score <= 69) : 
		document.write(`${score} 점의 학점 : D<br>`);
		break;
	case (score >= 0 && score <= 59) : 
		document.write(`${score} 점의 학점 : F<br>`);
		break;
	default :
		document.write(`${score} 점 : 점수 입력 오류!<br>`);
}
document.write(`<hr>`);
// =========================================================

let memNum = prompt("총 인원 수를 입력하세요");
let colNum = prompt("한 줄에 앉을 인원 수를 입력하세요");
// 필요한 줄 수 = 
// ex) 총 인원 수 51명, 한 줄 당 인원 수 10명 = 6줄(5줄 + ) 
// 1) 총 인원 수를 한 줄 당 인원수로 나눈 몫 계산
//let rowNum = parseInt(memNum / colNum);
// 2) 나머지를 계산하여 0보다 클 경우 1줄 추가(+ 1)
//if(memNum % colNum > 0) {
//	rowNum++;
//} 

// 삼항연산자로 동일한 작업 수행
//rowNum += (memNum % colNum > 0) ? 1 : 0;

// 위의 두 가지 연산을 한 문장으로 결합
let rowNum = parseInt(memNum / colNum) + ((memNum % colNum > 0) ? 1 : 0);

document.write(`총 인원 : ${memNum} 명<br>`);
document.write(`한 줄에 앉을 인원 : ${colNum} 명<br>`);
document.write(`필요한 줄 수 : ${rowNum} 줄<br>`);

 




















