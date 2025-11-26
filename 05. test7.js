/*
- 함수와 연산자에 전달되는 값은 대부분 적절한 데이터타입(자료형)으로 자동 형변환 일어남
  ex) prompt() 함수로 입력받은 숫자는 string 타입이며 number 타입과 연산 시 
      number 타입으로 자동 형변환이 일어남(타입을 일치시킨 후 연산을 수행)
- 상황에 따라 개발자가 의도한 타입으로 변환하는 것을 강제 형변환(= 명시적 형변환)이라고 함
  => 자바스크립트에서 명시적 형변환을 수행하는 방법 : 타입(데이터)
  => 주의! 자바에서 명시적 형변환과 소괄호 위치가 다름! => (타입)데이터
  => 주의! 대표적인 타입 이름(string, number, boolean 등)의 첫글자를 대문자로 지정
     ex) 변수 num 의 값을 string 타입으로 변환 시 : String(num)
  => 단, 어떤 데이터를 문자열로 변환 시 형변환 연산자 대신 널스트링("")과 결합 연산해도 동일함
     ex) 정수 10 + "" = 문자열 "10" 으로 변환됨
*/

// 1. 문자열(string) 타입으로 변환
// => string 타입으로 명시적 형변환 방법 : String(데이터)
let value1 = 10;
document.write(`${value1} 의 변환 전 타입 : ${typeof(value1)}<br>`); // number

// number 타입 변수 value1 을 문자열 타입(string)으로 강제 형변환
value1 = String(value1);
document.write(`${value1} 의 변환 후 타입 : ${typeof(value1)}<br>`); // string

value1 = 20;
document.write(`${value1} 의 변환 전 타입 : ${typeof(value1)}<br>`); // number

// 어떤 데이터(x)를 문자열로 변환 시 형변환 연산 대신 널스트링("")과 덧셈연산 수행이 결합 연산으로 인해 문자열이 됨
//value1 = value1 + "";
value1 += ""; // 확장 대입연산자도 동일함
document.write(`${value1} 의 변환 후 타입222 : ${typeof(value1)}<br>`); // string
// -------------------------------------------------------------------------------
// value2 변수 선언 및 boolean 타입 값 true 저장 후 string 타입으로 변환
let value2 = true;
document.write(`${value2} 의 변환 전 타입 : ${typeof(value2)}<br>`); // boolean

// boolean 타입 변수 value2 를 문자열 타입(string)으로 강제 형변환
value2 = String(value2);
document.write(`${value2} 의 변환 후 타입 : ${typeof(value2)}<br>`); // string
document.write(`<hr>`);
// ===============================================================================
// 2. 숫자(number) 타입으로 변환
// - 수학 관련된 함수 및 수치 연산 과정 등에서 자동으로 number 타입으로 변환이 일어남
//   ex) 문자열숫자("10") / 문자열숫자("2") = 10 / 2 = 5 (정수로 변환 후 실제 연산 수행됨)
document.write(`"10" / "2" = ${"10" / "2"}<br>`); // "10" / "2" = 5
// - 단, 덧셈연산(+)의 경우 피연산자가 문자열이면 연결연산자로 바뀌므로 산술 연산이 일어나지 않는다!
// - 따라서, 산술연산자로 사용해야할 경우 피연산자들을 강제로 숫자(number) 타입으로 형변환 후 연산 수행 필요
//   => 강제 형변환 방법 : Number(데이터)
document.write(`"10" + "2" = ${"10" + "2"}<br>`); // "10" + "2" = "102"
// 만약, 10 + 2 형태로 덧셈 수행하도록 하려면 "10" 과 "2" 를 number 타입으로 변환 필수!
document.write(`Number("10") + Number("2") = ${Number("10") + Number("2")}<br>`);
// => Number("10") + Number("2") = 10 + 2 = 12
// -------------------
// 실제 활용 예시
// => 주로, 텍스트를 입력받는 텍스트 필드 등에서 숫자 데이터를 입력받아 연산을 수행하는 경우 형변환이 필요함
//    (ex. prompt() 함수, HTML 의 텍스트필드 등에서 입력받은 모든 값은 문자열로 취급됨)
// 두 개의 숫자를 prompt() 함수를 통해 각각 입력받아 변수 num1, num2 에 저장하고
// 두 수의 덧셈 결과를 변수 sum 에 저장 후 출력
//let num1 = prompt("정수1 입력");
//let num2 = prompt("정수2 입력");
//document.write(`${num1} 의 변환 전 타입 : ${typeof(num1)}<br>`);
//document.write(`${num2} 의 변환 전 타입 : ${typeof(num2)}<br>`);
//
//let sum = num1 + num2; // "num1" + "num2" 에 의해 연결 연산으로 "num1num2" 출력됨
//document.write(`${num1} + ${num2} = ${sum}<br>`); // 10 + 20 = 1020
//
//// 연산 수행 전 각 데이터를 number 타입으로 변환 후 연산 결과를 sum2 에 저장
//let sum2 = Number(num1)+ Number(num2); // "num1" + "num2" = num1 + num2 = 산술연산으로 계산됨
//document.write(`${num1} + ${num2} = ${sum2}<br>`); // 10 + 20 = 30
// -------------------------------------------------
let num3 = "1234a";
document.write(`${num3} 의 변환 전 타입 : ${typeof(num3)}<br>`); // string

// 주의! string -> number 변환 과정에서 문자열 내에 숫자가 아닌 데이터가 포함될 경우
// 변환 과정에서 숫자 형태로 데이터 타입 자체는 변환되지만 숫자가 아닌 데이터를 변환하게 되므로
// 변환 결과값도 숫자가 아니게 됨. 따라서, [NaN] 이라는 특수한 값이 사용됨
num3 = Number(num3);
document.write(`${num3} 의 변환 후 타입 : ${typeof(num3)}<br>`); // NaN
// => number 타입으로 변환이 되었더라도 숫자가 아닌 데이터이기 때문에 NaN 이라는 특수값이 출력됨
//    NaN : Not a Number = 숫자가 아님
// -------------------------------------------------
//let data = 123.78;
//data = Number(data); // 실수도 number 타입이므로 변환이 의미가 없음. 기존 123.78 그대로 유지됨
//document.write(`${data} 의 변환 후 타입 : ${typeof(data)}<br>`);

// Number() 형변환 연산자 대신 parseInt() 함수를 활용하면 어떤데이터 -> 정수로 변환 가능함
//let data = 123.78; // 실수 -> 정수로 변환(소수점 이하 자릿수 모두 탈락됨 = 버림)
//let data = "456ABC!"; // 정수부분 뒤에 정수가 아닌 데이터(소수점, 문자 등 포함)가 있더라도 제거하고 정수로 변환
let data = "ABC!456"; // 정수 앞쪽의 정수가 아닌 데이터는 제거가 불가능하므로 NaN
data = parseInt(data); 
document.write(`${data} 의 parseInt() 변환 후 타입 : ${typeof(data)}<br>`);

// 실수 타입은 parseFloat() 함수로 변환(parseInt() 와 동작 동일함)
//let data2 = "789.12";
let data2 = "123.45ABC";
data2 = parseFloat(data2);
document.write(`${data2} 의 parseFloat() 변환 후 타입 : ${typeof(data2)}<br>`);
document.write(`<hr>`);
// =================================================================================
// 3. boolean 타입으로 변환
// => boolean 타입으로 변환시에는 변환 대상 데이터가 "존재하지 않으면" 무조건 false 로 변환됨(그 외에는 true)
// false 가 되는 값들
//let data3 = 0; // 0 또는 -0 은 false 로 변환됨
//let data3 = ""; // 널스트링은 문자열 데이터가 "존재하지 않으므로" false 로 변환됨
//let data3 = undefined; // undefined(생략도 가능하며, 변수만 선언해도 동일) 도 값이 없으므로 false
//let data3 = null; // 특수값인 null 값도 객체가 없으므로 false

// true 가 되는 값들
//let data3 = "홍길동"; // 문자열 데이터가 "존재하므로" true
//let data3 = 100; // 0을 제외한 나머지 숫자 데이터도 값이 "존재하므로" true
let data3 = "false"; // 문자열 "false" 는 문자열이 "존재하므로" true(실제 false 값은 따옴표 없이 표현해야함)
document.write(`${data3} 의 변환 전 타입 : ${typeof(data3)}<br>`);

data3 = Boolean(data3);
document.write(`${data3} 의 변환 후 타입 : ${typeof(data3)}<br>`);





















