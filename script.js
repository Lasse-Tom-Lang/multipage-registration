btnNext = document.querySelectorAll(".btn-next");
btnBack = document.querySelectorAll(".btn-back");
pages = document.querySelectorAll(".page");
page1Inputs = pages[1].querySelectorAll(".inputs");
page2Inputs = pages[2].querySelectorAll(".inputs");
page3Inputs = pages[3].querySelectorAll(".inputs");
progressBar = document.getElementById("progressBar");
progressBox = document.getElementById("progressBox");
pageIndex = 0;

btnNext.forEach(element => {
  element.addEventListener("click", () => {
    if (checkValid()) {
      pageIndex += 1;
      updatePages();
    }
  });
});
btnBack.forEach(element => {
  element.addEventListener("click", () => {
    pageIndex -= 1;
    updatePages();
  });
});

function checkValid() {
  switch (pageIndex) {
    case 0: return true
    case 1: isValid = true;
      page1Inputs.forEach(element => {
        if (!element.checkValidity()) {
          isValid = false
        }
      });
      return isValid;
    case 2: isValid = true;
      page2Inputs.forEach(element => {
        if (!element.checkValidity()) {
          isValid = false
        }
      });
      return isValid;
    case 3: isValid = true;
      page3Inputs.forEach(element => {
        if (!element.checkValidity()) {
          isValid = false
        }
      });
      return isValid;
  }
}

function updatePages() {

  switch (pageIndex) {
    case 0: progressBar.style.transform = "translateX(-100%)";
    break;
    case 1: progressBar.style.transform = "translateX(calc(-100% + 41px))";
    break;
    case 2: progressBar.style.transform = "translateX(-50%)";
    break;
    case 3: progressBar.style.transform = "translateX(calc(0% - 41px))";
    break;
    case 4: progressBar.style.transform = "translateX(0)";
  }

  pages.forEach(element => {
    element.style.display = "none";
  });
  pages[pageIndex].style.display = "flex";

  if (pageIndex != 0 && pageIndex != 4) {
    progressBox.style.display = "flex";
  }
  else {
    progressBox.style.display = "none";
  }
}