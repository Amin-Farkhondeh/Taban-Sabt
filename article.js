showTop: {
    document.addEventListener("scroll", () => {
      let el = document.getElementById("vp2");
      rect = el.getBoundingClientRect();
      if (rect.bottom <= 0) {
        document.getElementById("go-top").style.display = "block";
        console.log(rect.bottom + " " + window.innerHeight);
      }
      if (rect.bottom > 0) {
        document.getElementById("go-top").style.display = "none";
      }
        let tabelOfContent = document.getElementById("tabel-content");
        let vp = document.getElementsByClassName("vp");
        let lastI;
        for(let i=vp.length-1;i>= 0;i--){
          console.log(vp[i].getBoundingClientRect().top);
          if(vp[i].getBoundingClientRect().bottom <= 90){
            tabelOfContent.getElementsByTagName("p")[i].style.backgroundColor = "orange";
            lastI = i;
            break;
          }
          else {
            tabelOfContent.getElementsByTagName("p")[i].style.backgroundColor = "white";
          }
        }
        for(let j=0;j<lastI;j++){
          tabelOfContent.getElementsByTagName("p")[j].style.backgroundColor = "white";
        }
        
    });
  }

TabelOfcontent:{
    let tabelOfContent = document.getElementById("tabel-content");
    for(let i =1;i<=10;i++){
      let vpName = 'vp' + i;
      if(document.getElementById(vpName)==null)
      break;
      else {
      let newElement = document.createElement('p');
      newElement.innerHTML = document.getElementById(vpName).innerHTML;
      let newLink = document.createElement('a');
      newLink.setAttribute("href",'#'+vpName);
      newLink.appendChild(newElement);
      tabelOfContent.appendChild(newLink);
    }
    }
    let isOpen = false;
    tabelOfContent.getElementsByTagName("span")[0].addEventListener("click",()=>{
      let myElements=tabelOfContent.getElementsByTagName("a");
      if(isOpen){
        isOpen = false;
        for(const element of myElements){
          element.style.display = "none";
        }

      }
      else {
        isOpen = true;
        for(const element of myElements){
          element.style.display = "block";
        }
      }
    })
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
  
    // let arrow2 = document.getElementById("icon2-img");
    // let isRegisterExpand2 = false;
    // let registerIcon2 = document.getElementById("responsive-icon2");
    // let registerExpand2 = document.getElementById("responsive-grade-expand-more");
    // registerIcon2.onclick = () => {
    //   if (!isRegisterExpand2) {
    //     registerExpand2.style.display = "block";
    //     registerExpand2.style.position = "relative";
    //     arrow2.style.transform = "rotate(0deg)";
    //     isRegisterExpand2 = true;
    //   } else {
    //     arrow2.style.transform = "rotate(90deg)";
    //     registerExpand2.style.display = "none";
    //     isRegisterExpand2 = false;
    //   }
    // }
  }
