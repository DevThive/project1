function select(number) {
  let identify; //={id,height,top}; 나중
  switch (number) {
    case 0:
      identify = $("#Bcard0"); //명함0의 값을 받음
      //identify[1]="150px" 나중
      //identify[2]="0px"; 나중
      return identify;
      break;
    case 1:
      identify = $("#Bcard1"); //명함1의 값을 받음
      return identify;
      break;
    case 2:
      identify = $("#Bcard2"); //명함2의 값을 받음
      return identify;
      break;
    case 3:
      identify = $("#Bcard3"); //명함3의 값을 받음
      return identify;
      break;
    case 4:
      identify = $("#Bcard4"); //명함4의 값을 받음
      return identify;
      break;
    case 5:
      identify = $("#Bcard5"); //명함5의 값을 받음
      return identify;
      break;
    case 6:
      identify = $("#Kdoller"); //지폐의 값을 받음
      return identify;
      break;
  }
}

function Mover(no) {
  //누구 위에 마우스를 올렸는지 확인
  let id; //={id,height,top}; 나중
  id = select(no); //함수 실행 후 누른 오브젝트의 값을 가진 변수를 생성
  if (no < 6) {
    //오브젝트가 명함일때
    id.css("height", "150px");
    id.css("top", "0px");
  } else {
    //오브젝가 지갑일떄
    let Height = "225px";
    id.css("height", "225px");
    id.css("top", "0px");
  }
}

function Mout(no) {
  //마우스가 사라졌을 때
  let id;
  id = select(no);
  if (no < 6) {
    //오브젝트가 명함일때
    id.css("height", "100px");
    id.css("top", "50px");
  } else {
    //오브젝가 지갑일떄
    let Height = "225px";
    id.css("height", "150px");
    id.css("top", "50px");
  }
}
function Mclick(no) {
  //마우스로 클릭했을 때
  let id;
  id = select(no);
  //id.toggle();//누른 오브젝트가 사라짐
}
