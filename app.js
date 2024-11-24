let input = document.querySelector("input");
let elements = document.querySelectorAll(
  ".background , .head , .slider , div.result , .btns , .open , p.result , .reset"
);
let on = document.querySelector(".open");
let background = document.querySelector(".background");
let head = document.querySelector(".head");
let slider = document.querySelector(".slider");
let screenResult = document.querySelector("div.result");
let btns = document.querySelector(".btns");
let resultBtn = document.querySelector("p.result");
let reset = document.querySelector(".reset");
let sum = document.querySelector("p.sum");
let sub = document.querySelector("p.sub");
let mul = document.querySelector("p.mul");
let divid = document.querySelector("p.divid");
let signs = document.querySelector(".signs");
input.addEventListener("change", () => {
  Array.from(elements).forEach((element) => {
    if (input.value === "2") {
      element.classList.remove("theme_three");
      element.classList.add("theme_two");
    } else if (input.value === "3") {
      element.classList.remove("theme_two");
      element.classList.add("theme_three");
    } else {
      element.classList.remove("theme_two");
      element.classList.remove("theme_three");
    }
  });
});
on.addEventListener("click", () => {
  screenResult.querySelector("p").textContent = "";
  if (screenResult.querySelector("p").style.display === "block") {
    screenResult.querySelector("p").style.display = "none";
    screenResult.querySelector("span").style.display = "flex";
  } else {
    screenResult.querySelector("p").style.display = "block";
    screenResult.querySelector("span").style.display = "none";
  }
});
reset.addEventListener("click", () => {
  screenResult.querySelector("p").textContent = "";
  screenResult.querySelector("p").style.display = "none";
  screenResult.querySelector("span").style.display = "flex";
});
let nums = [];
btns.addEventListener("click", (e) => {
  if (!isNaN(e.target.textContent) || e.target.textContent === ".") {
    screenResult.querySelector("p").textContent += e.target.textContent;
  } else if (e.target.textContent === "+") {
    if (screenResult.querySelector("p").textContent !== "") {
      nums.push(screenResult.querySelector("p").textContent);
    }
    screenResult.querySelector("p").textContent = "";
  } else if (e.target.textContent === "-") {
    if (screenResult.querySelector("p").textContent !== "") {
      nums.push(screenResult.querySelector("p").textContent);
    }
    screenResult.querySelector("p").textContent = "";
  } else if (e.target.textContent === "x") {
    if (screenResult.querySelector("p").textContent !== "") {
      nums.push(screenResult.querySelector("p").textContent);
    }
    screenResult.querySelector("p").textContent = "";
  } else if (e.target.textContent === "/") {
    if (screenResult.querySelector("p").textContent !== "") {
      nums.push(screenResult.querySelector("p").textContent);
    }
    screenResult.querySelector("p").textContent = "";
  }
});
let result;
resultBtn.addEventListener("click", () => {
  nums.push(screenResult.querySelector("p").textContent);
  Array.from(signs.children).forEach((sign) => {
    if (sign.style.opacity === "1" && sign.classList.contains("sum")) {
      result = Number(nums[0]) + Number(nums[1]);
    } else if (sign.style.opacity === "1" && sign.classList.contains("sub")) {
      result = nums[0] - nums[1];
    } else if (sign.style.opacity === "1" && sign.classList.contains("mul")) {
      result = nums[0] * nums[1];
    } else if (sign.style.opacity === "1" && sign.classList.contains("divid")) {
      result = nums[0] / nums[1];
    }
  });
  screenResult.querySelector("p").textContent = result;
  nums = [];
  result = "";
});
sum.addEventListener("click", () => {
  Array.from(signs.children).forEach((sign) => {
    if (sign.classList.contains("sum")) {
      sign.style.color = sign.parentElement.parentElement.style.color;
      sign.style.opacity = "1";
      sign.style.fontWeight = "bold";
      sign.style.fontSize = "15px";
    } else {
      sign.style.opacity = "0.5";
      sign.style.fontSize = "unset";
    }
  });
});
sub.addEventListener("click", () => {
  Array.from(signs.children).forEach((sign) => {
    if (sign.classList.contains("sub")) {
      sign.style.color = sign.parentElement.parentElement.style.color;
      sign.style.opacity = "1";
      sign.style.fontWeight = "bold";
      sign.style.fontSize = "15px";
    } else {
      sign.style.opacity = "0.5";
      sign.style.fontSize = "unset";
    }
  });
});
mul.addEventListener("click", () => {
  Array.from(signs.children).forEach((sign) => {
    if (sign.classList.contains("mul")) {
      sign.style.color = sign.parentElement.parentElement.style.color;
      sign.style.opacity = "1";
      sign.style.fontWeight = "bold";
      sign.style.fontSize = "15px";
    } else {
      sign.style.opacity = "0.5";
      sign.style.fontSize = "unset";
    }
  });
});
divid.addEventListener("click", () => {
  Array.from(signs.children).forEach((sign) => {
    if (sign.classList.contains("divid")) {
      sign.style.color = sign.parentElement.parentElement.style.color;
      sign.style.opacity = "1";
      sign.style.fontWeight = "bold";
      sign.style.fontSize = "15px";
    } else {
      sign.style.opacity = "0.5";
      sign.style.fontSize = "unset";
    }
  });
});
