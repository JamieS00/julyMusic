clientInfo = () => {
  let name = prompt("What's you name?");
  let email = prompt("What's your email?");
  alert(`Thanks ${name} !! , be on the look out for the August vibesss 💃🏾!`);
};

let button = document.querySelector("button");
button.addEventListener("click", clientInfo);
