function sister4(money) {
	console.log(`동생 : 오빠가 준 돈 = ${money} 원!`);
		
	money -= 200;
	let snack = "새우깡";
	
	console.log(`동생 : ${snack} 사고 남은 돈 = ${money} 원!`);
	
	// 주의! return 문에 기술 가능한 값은 하나뿐이며, 복수개의 값을 지정하더라도 맨 뒤의 값만 리턴됨
//	return snack, money;// money 값만 리턴값으로 전달됨

	return snack;
}
// ------------------------------------------------------------
// 1. 정수 1개(x)를 전달하면 1 ~ x 까지의 합계를 계산하여 리턴하는 sum() 함수 정의
function sum(x) {
	let total = 0;
	
	for(let i = 1; i <= x; i++) {
		total += i;
	}
	
	return total;
}
// ------------------------------------------------------------
// 2. 정수 1개(num) 전달하면 해당 정수에 대한 절대값을 계산하여 리턴하는 abs() 함수 정의
function abs(num) {
	// num 값이 음수일 경우를 판별하여 양수로 변환하는 작업 필요
	// 양수일 경우 변환이 불필요함
//	if(num < 0) {
//		// 음수를 양수로 변환
//		num = -num;
//	}
//
//	return num;
	// ---------------
	// 원본 데이터를 손상시키지 않고 if 문 내에서 음수 -> 양수로 변환한 값을 리턴할 수도 있다!
//	if(num < 0) {
//		return -num;
//	}
	// if 문 내에서 return 문이 있을 경우 해당 지점에서 함수 실행이 "즉시 종료"되므로
	// else 문 없이도 if문 바깥쪽 문장은 if 조건이 false 일 때만 실행될 수 있다!
//	return num;
	// ---------------
	// 삼항연산자 사용도 가능
	return num < 0 ? -num : num;
}
// -------------------------------------------------------------------
// 3. 아이디(id)와 패스워드(passwd)를 전달하여 일치 여부를 판별 후 결과를 리턴하는 login() 함수 정의
function login(id, passwd) {
	let result;
	
	if(id == "admin" && passwd == "1234") {
		result = "로그인 성공!<br>"; 
	} else {
		result = "로그인 실패!<br>"; 
	}

	return result;	
}


function login2(id, passwd) {
	if(id == "admin" && passwd == "1234") {
		return true;
	} else {
		return false;
	}
}
















