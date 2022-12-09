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

showTopHeadIcon : {
let target2 = document.getElementById("our-costumer");
let rect2;
document.addEventListener("scroll", () => {
  rect2 = target.getBoundingClientRect();
  if (rect2.bottom <= window.innerHeight) {
    document.getElementById("go-top").style.display = "block";
  }
  if (rect.bottom > window.innerHeight) {
    document.getElementById("go-top").style.display = "none";
  }
}
)
}

achivementObserver: {
  let target = document.getElementById("company-achievements-box");
  let elements = document.getElementsByClassName("achivement-number");
  let rect;
  let counter = 0;
  document.addEventListener("scroll", () => {
    rect = target.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
      document.getElementById("go-top").style.display = "block";
      let id = setInterval(() => {
        counter += 1;
        if (counter <= 12) {
          elements[0].innerHTML = counter;
          elements[2].innerHTML = counter;
          elements[1].innerHTML = counter;
          elements[3].innerHTML = counter;
        } else if (counter <= 21) {
          elements[1].innerHTML = counter;
          elements[0].innerHTML = counter;
          elements[3].innerHTML = counter;
        } else if (counter <= 36) {
          elements[3].innerHTML = counter;
          elements[1].innerHTML = counter;
        } else if (counter <= 580) {
          counter += 5;
          elements[3].innerHTML = counter;
        } else clearInterval(id);
      }, 100);
    }
    if (rect.bottom > window.innerHeight) {
      document.getElementById("go-top").style.display = "none";
    }
  });
}

navbarClicks: {
  let menu = document.getElementById("menu");
  let responsiveNavbar = document.getElementById("responsive-nav-bar");
  let isMenuOpen = false;
  menu.onclick = () => {
    if (!isMenuOpen) {
      responsiveNavbar.style.display = "block";
      isMenuOpen = true;
      menu.style.backgroundImage = "url('pic/close-icon.png')";
    } else {
      responsiveNavbar.style.display = "none";
      isMenuOpen = false;
      menu.style.backgroundImage = "url('pic/menu-icon.png')";
    }
  };

  let arrow1 = document.getElementById("icon1-img");
  let isRegisterExpand = false;
  let registerIcon = document.getElementById("responsive-icon1");
  let registerExpand = document.getElementById(
    "responsive-register-expand-more"
  );
  registerIcon.onclick = () => {
    if (!isRegisterExpand) {
      registerExpand.style.display = "block";
      registerExpand.style.position = "relative";
      arrow1.style.transform = "rotate(0deg)";
      isRegisterExpand = true;
    } else {
      arrow1.style.transform = "rotate(90deg)";
      registerExpand.style.display = "none";
      isRegisterExpand = false;
    }
  };

  let arrow2 = document.getElementById("icon2-img");
  let isRegisterExpand2 = false;
  let registerIcon2 = document.getElementById("responsive-icon2");
  let registerExpand2 = document.getElementById("responsive-grade-expand-more");
  registerIcon2.onclick = () => {
    if (!isRegisterExpand2) {
      registerExpand2.style.display = "block";
      registerExpand2.style.position = "relative";
      arrow2.style.transform = "rotate(0deg)";
      isRegisterExpand2 = true;
    } else {
      arrow2.style.transform = "rotate(90deg)";
      registerExpand2.style.display = "none";
      isRegisterExpand2 = false;
    }
  };
}
