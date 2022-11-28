costumerMovingSection: {
  let costumersName = [
    "ایمان پیمان",
    "آذین صنعت بردیا",
    "بهتاش گستران یاقوت",
    "پارت سازه آوید",
    "علم و صنعت نهضت خراسان",
    "کیهان سازه سپهر هشتم",
    "گیتی برق آروند",
    "آسمان هشتم توس",
    "آرتا پیمان سهند",
    "آروین تجارت فردا آسیا",
    "آسیا دیزل توس",
    "بهین ساخت فرزام",
    "پارس گستران شریف بارثاوا",
    "زیبا گستران طبیعت شرق",
    "استحکام راه کیان",
    "اطلس عمران ساباط",
    "اندیشه صنعت مهرزاد",
    "آرمان اقتصاد مانا",
    "پاژ پیمان شرق",
    "کاوش طرح شریف",
    "درسان قطره",
    "مجموعه گروه امید نور",
    "مهندسی ستاوند آگور",
    "مهندسی سازه حرارت مشهد",
  ];
  let costumerBox = document.getElementById("some-costumer-names");
  setInterval(() => {
    let rndNum = Math.floor(Math.random() * 24);
    newCostumer = document.createElement("h6"); //random costumer created
    newCostumer.setAttribute("class", "costumers"); //random costumer created
    newCostumer.innerHTML = costumersName[rndNum]; //random costumer created
    costumerBox.appendChild(newCostumer); //random costumer Added
    rndTop = Math.floor(Math.random() * 180);
    newCostumer.style.top = rndTop + "px";
    moveForward(newCostumer);
    moveUpDown(newCostumer, rndTop);
  }, 500);

  function moveForward(element, left = 0) {
    let forwardMove = setInterval(() => {
      left += 1;
      element.style.left = left + "px";
      if (left == 450) {
        clearInterval(forwardMove);
        element.remove();
      }
    }, 10);
    element.onmouseover = () => {
      element.style.zIndex = 2;
      element.style.backgroundColor = "#fcdb8c";
      clearInterval(forwardMove);
    };
    element.onmouseout = () => {
      element.style.zIndex = 0;
      element.style.backgroundColor = "#fcdb8c80";
      moveForward(element, left);
    };
  }
}

achivementObserver : {
  let target = document.getElementById("company-achievements-box");
  let elements = document.getElementsByClassName("achivement-number");
  let rect ;
  let counter = 0;
  document.addEventListener("scroll",()=>{
    rect = target.getBoundingClientRect();
    if(rect.bottom<=window.innerHeight){
    let id=  setInterval(() => {
      counter+=1;
      if(counter<=12){
        elements[0].innerHTML=counter;
        elements[2].innerHTML=counter;
        elements[1].innerHTML=counter;
        elements[3].innerHTML=counter;
      }
      else if(counter<=21){
        elements[1].innerHTML=counter;
        elements[0].innerHTML=counter;
        elements[3].innerHTML=counter;
      }
      else if(counter<=36){
        elements[3].innerHTML=counter;
        elements[1].innerHTML=counter;
      }
      else if(counter<=580){
        counter +=5;
        elements[3].innerHTML=counter;
      }
      else clearInterval(id);
      }, 100);
    }
  })
}

fromController : {
  let element = document.getElementById("subject");
  console.log(typeof element.value)

}

