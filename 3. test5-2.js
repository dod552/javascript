// 변수 선언 방법의 차이점(var vs let)
// 1. var 키워드로 변수 선언 시 동일한 이름의 변수를 선언하더라도 중복이 가능하며
//    선언된 변수 값을 다른 데이터로 변경 시에도 문제가 발생하지 않는다!
var varNum = 10;
console.log("varNum(var) = " + varNum + " => " + typeof(varNum));

// 기존에 선언된 varNum 변수와 동일한 이름의 변수를 다시 선언하더라도 오류가 발생하지 않고
// 해당 변수에 다른 데이터를 저장(변경)해서 사용도 가능함(기존의 변수값을 새로 덮어씀)
var varNum = "홍길동";
console.log("varNum(var) = " + varNum + " => " + typeof(varNum));
// ------------------------------------------------------------------
// 2. let 키워드로 변수 선언 시 동일한 이름의 변수를 중복 선언할 수 없다! (= 자바와 동일)
//    선언된 변수 값을 다른 데이터로 변경 시 문제가 발생하지 않는다! (= var 와 동일)
let letNum = 10;
console.log("letNum(let) = " + letNum + " => " + typeof(letNum));

// 기존에 선언된 letNum 변수와 동일한 이름으로 let 키워드를 사용하여 다시 중복 선언할 경우
// 변수명 중복으로 인한 오류 발생함!
//let letNum = 10; // 오류 발생
// => 이클립스 오류 메세지 : Cannot redeclare block-scoped variable 'letNum'.
// => 개발자도구 - 콘솔 메세지 : Identifier 'letNum' has already been declared

// var 와 동일하게 기존 값을 다른 값으로 변경 가능함
letNum = "홍길동"; // 이 시점에 10 -> "홍길동" 으로 바뀌면서 변수 데이터타입도 number -> string 으로 바뀜
console.log("letNum(let) = " + letNum + " => " + typeof(letNum));

// 결론!!!! 일반적인 상황에서 변수 선언 시에는 var 보다 let 키워드를 사용하자!!!!
// ==============================================================================
/*
3. const 가 var 또는 let 과 다른 점
=> const 키워드를 사용하여 선언한 변수는 [상수(Constant)] 로 취급되어
   처음 저장된 값을 다른 값으로 변경이 불가능해진다!
=> 따라서, const 로 선언하는 변수는 선언 시점에 반드시 초기화도 함께 수행되어야 한다!
=> 상수는 일반 변수와 구별을 위해 식별자를 모두 대문자로 작성하는 것을 권장(단어 사이의 구분은 언더스코어 사용)
*/
//const constNum; // 오류 발생! (콘솔 메세지 : Missing initializer in const declaration)
const constNum = 10;
console.log("constNum(const) = " + constNum + " => " + typeof(constNum));

// const 는 let 과 마찬가지로 중복 선언 불가!
//const constNum = 10; // 오류 발생(Identifier 'constNum' has already been declared)

// const 는 값 변경 불가
//constNum = "홍길동"; // 이클립스 상에서는 오류 확인 불가능
// => 실행 시 브라우저 콘솔 오류 메세지 : Assignment to constant variable
// => 결론! const 로 선언된 변수 값은 절대 변경 불가!
//    따라서, 일반 변수와 이름을 구별하기 위해 대문자로 작성하자!

const CONST_NUM2 = 20;
// ======================================================================
// 템플릿 리터럴 사용하려면 백틱(`) 기호를 활용하여 데이터 및 문자열을 감싸고
// 이 때, 데이터를 변수를 사용하려면 ${} 를 사용하여 변수명을 지정
let name = "Kim";
let classRoom = 5;
// 콘솔에 "Kim님, 5강의장으로 입장하세요!" 형태로 출력하기
console.log(name, "님, ", classRoom, " 강의장으로 입장하세요!");
console.log(name + "님, " + classRoom + " 강의장으로 입장하세요!");
// 위의 출력 방법(일반적인 방법 = 연결연산자(+)나 콤마(,) 로 구별) 대신 
// 백틱(``)을 사용하여 직관적인 문자열과 데이터 표현이 가능
console.log(`name님, classRoom 강의장으로 입장하세요.`);
// => name님, classRoom 강의장으로 입장하세요. 형태로 출력됨
//    백틱도 일반 문자열처럼 그대로 출력 가능함

// 백틱 사이에 출력할 데이터 형태를 문자열 그대로 작성하고
// 변수가 위치할 곳은 ${} 사이에 변수명을 지정하면 실행 시점에 변수가 해당 위치에 바인딩(Binding)되어 출력됨
console.log(`${name}님, ${classRoom} 강의장으로 입장하세요.`); // Kim님, 5 강의장으로 입장하세요.
// => ${name} 부분은 name 변수값, ${classRoom} 부분은 classRoom 변수값이 사용되어 실제 출력 시 변수값이 출력됨



























