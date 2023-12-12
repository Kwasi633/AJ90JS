let result = document.querySelector("h1");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
          result.innerText = Math.trunc(Math.random() * 10001);
});

