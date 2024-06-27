const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const boxbiscoito = document.querySelector("#boxbiscoito");
const btnReset = document.querySelector("#btnReset");

const fortune = [
  
  "Você tem os olhos e o olhar mais encantador, e cativante que já vi nessa vida!",
  "Você jamais estará sozinha nas dificuldades, pois o seu noivo, nunca a deixará!",
  "Você tem uma beleza incompáravel a qualquer ser nesse universo!!",
  "Dentre essas duas famílias, existe alguém que mataria e morreria por você!",
  "Você tem 2 famílias, que a ama demais, e que cuida e se importa com você!",
  "A sua sorte é ter um noivo como o Matheus, para cuidar e amar você pra sempre!",
  "Por mais que não acredite em sorte, e sim em Deus, você é a pessoa mais sortuda e abençoada dessa vida!"
  
  
  
];

boxbiscoito.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen2.classList.contains("hide")) {
    handleTryClick();
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

function handleTryClick(event) {
  toggleScreen();
  pickFortune();
}

function handleResetClick() {
  toggleScreen();
}

function pickFortune() {
  let allFortunes = fortune.length;
  let randomNumber = Math.floor(Math.random() * allFortunes);
  screen2.querySelector("#boxparagraph").innerText = `${fortune[randomNumber]}`;
}

function toggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}
