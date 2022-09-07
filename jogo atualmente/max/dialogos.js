let guardadial = 0;
let caractere = 0;

const balao = new Image();
balao.src = "./img/info/dialogo.png";


function dialogos(dialogo, pessoa) {
  ctx.font = '35px Georgia'
  if (guardadial >= dialogo.length) return;
  ctx.drawImage(balao, 30, 10, canvas.width - 60, 200);
  ctx.fillStyle = "white";
  ctx.fillText(
    dialogo[guardadial].substr(0, caractere),
    canvas.width / 8,
    130,
    canvas.width - 250
  );
  ctx.font = "15pt sans-serif";
  ctx.fillText(pessoa[guardadial], canvas.width / 8, 25, canvas.width - 30);
  ctx.font = "10pt sans-serif";
  ctx.fillText("E", (canvas.width / 15) * 14, 180, canvas.width - 30);
  if (config.gameframe % 3 == 0) caractere++;
  if (caractere < dialogo[guardadial].length) return;

  document.onkeypress = function (e) {
    if (e.key !== "e" && e.key !== "E") return;
    caractere = 0;
    guardadial++;
  };
  ctx.font = '20px Arial'
}
