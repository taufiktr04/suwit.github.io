// pilihan komputer
function getPilihanBot() {
  const bot = Math.random();

  if (bot < 0.34) return "orang";
  if (bot >= 0.34 && bot < 0.67) return "gajah";
  return "semut";
}

// rules
function getHasil(bot, player) {
  if (player == bot) return "SERI";
  if (player == "orang") return bot == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return bot == "orang" ? "KALAH" : "MENANG";
  if (player == "gajah") return bot == "orang" ? "MENANG" : "KALAH";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanBot = getPilihanBot();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanBot, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanBot + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
