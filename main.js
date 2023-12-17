const btn = document.querySelector(".btnAdd");
btn.addEventListener("click", btnSum);
const ctn = document.querySelector(".container");

let sum = 0;

function checkSumAll() {
    const allCount = document.querySelectorAll('.numberText');
    let sum = 0;

    allCount.forEach((element) => {
        const countString = element.textContent;
        const number = parseInt(countString.match(/\d+/)[0]);
        sum += number;
    });

    const sumCount = document.querySelector('.sumCount');
    sumCount.innerText = `Sum Count :  ${Math.abs(sum)}`;

    console.log(allCount);
    console.log(sum);
}

function btnSum() {
  let cs = document.querySelector(".inputBox").value;
  number = +cs;
  console.log(number);
  const divItem = document.createElement("div");
  ctn.append(divItem);

  divItem.setAttribute("class", "counter");
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "headerDiv");
  divItem.append(headerDiv);

  const numberText = document.createElement("h3");
  numberText.setAttribute("class", "numberText");
    const textShow = document.createTextNode('Couter : ');
    numberText.append(textShow);
    const counterNum = document.createTextNode(+cs);
    numberText.append(counterNum)
    headerDiv.append(numberText);

  const stepText = document.createElement("h3");
  stepText.setAttribute("class", "stepText");
  stepText.innerText = `Step : ${cs}`;
  
  headerDiv.append(stepText);

  const plusBtn = document.createElement("button");
  plusBtn.innerText = "+";
  plusBtn.setAttribute("class", "plusBtn");
  divItem.append(plusBtn);

  const zeroBtn = document.createElement("button");
  zeroBtn.innerText = "0";
  zeroBtn.setAttribute("class", "setZero");
  divItem.append(zeroBtn);

  const decreaseBtn = document.createElement("button");
  decreaseBtn.innerText = "-";
  decreaseBtn.setAttribute("class", "decreaseBtn");
  divItem.append(decreaseBtn);

  const clearBtn = document.createElement("button");
  clearBtn.innerText = "X";
  clearBtn.setAttribute("class", "clearBtn");
  divItem.append(clearBtn);
  

  let newNum = 0;

  function plusNumber() {
    let oldNumb = +cs;
    if (!isNaN(oldNumb)) {
      if (newNum === 0) {
        newNum = oldNumb + number;
        counterNum.nodeValue = newNum;
      } else {
        newNum = oldNumb + newNum;
        counterNum.nodeValue = newNum;
        console.log(newNum);
      }
    } else {
      alert("มีบางอย่างไม่ถูกต้อง");
    }
    checkSumAll();
  };

  function setZero() {
    if(!isNaN(number)){
        newNum = 0;
        number = 0;
        counterNum.nodeValue = newNum;
    }else{
        alert('มีบางอย่างไม่ถูกต้อง')
    }
    checkSumAll();
  };

  function decreaseNumber() {
    let oldNumb = +cs;
    if (!isNaN(oldNumb)) {
        newNum = newNum - oldNumb;
        counterNum.nodeValue = newNum;
    } else {
      alert("มีบางอย่างไม่ถูกต้อง");
    }
    checkSumAll();
  };

  function deleteDiv() {
    let oldNumb = +cs;
    if (!isNaN(oldNumb)) {
      newNum = newNum - newNum;
      counterNum.nodeValue = newNum;
    } else {
      alert("มีบางอย่างไม่ถูกต้อง");
    }
    checkSumAll();
    divItem.remove();
  }

  function sendStep(){
    let stepText = +cs
    const inputText = document.querySelector('.inputBox');
    console.log(stepText);
    inputText.value = stepText;
  }

  plusBtn.addEventListener('click', plusNumber);
  zeroBtn.addEventListener('click', setZero);
  decreaseBtn.addEventListener('click', decreaseNumber);
  clearBtn.addEventListener('click',deleteDiv);
  stepText.addEventListener('click',sendStep);
  checkSumAll();
}

