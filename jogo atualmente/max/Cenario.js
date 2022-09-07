class Cenario {
  constructor({ objetos, config, ctx, max }) {
    this.ctx = ctx;
    this.config = config;
    this.max = max;
    this.objetos = objetos;
    this.width = canvas.width;
    this.height = canvas.height;
    this.cenarioatual = 0;
    this.image = new Image();
    this.image.src = "./img/cenario/cenario" + this.cenarioatual + ".png";

    this.podepassar = false;
    this.aberta = 1;
    this.porta = new Image();
    this.porta.src = "./img/cenario/animados/porta" + this.aberta + ".png";
  }

  draw() {
    this.ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
  }
  desenhaobj() {
    //porta
    if (this.cenarioatual == 1) {
      this.porta.src = "./img/cenario/animados/porta" + this.aberta + ".png";
      this.ctx.drawImage(this.porta, 10, 210, 140, 300);
    } else if (this.cenarioatual == 0) {
      this.porta.src = "./img/cenario/salvar/porta0" + this.aberta + ".png";
      this.ctx.drawImage(this.porta, 30, 218, 220, 330);
    }
    //para cada objeto na variavel do cenario, anima

    this.objetos.forEach((objanimado) => {
      let i = this.objetos.indexOf(objanimado);
      this.animaobj = new Image();
      this.animaobj.src =
        "./img/cenario/animados/" +
        objanimado.obj +
        this.objetos[i].frameatual +
        ".png";

      this.ctx.drawImage(
        this.animaobj,
        this.objetos[i].objetox,
        this.objetos[i].objetoy,
        this.objetos[i].objetowidth,
        this.objetos[i].objetoheight
      );

      if (this.config.gameframe % 10 == 0) {
        this.objetos[i].frameatual == this.objetos[i].objetoqframes
          ? (this.objetos[i].frameatual = 1)
          : this.objetos[i].frameatual++;
      }
    });
  }
  transicoes() {
    this.draw();

    this.objetos.splice(0, this.objetos.length);
    switch (this.cenarioatual) {
      case 0:
        this.objetos.push(bolhas);

        if (this.max.position.x <= 160 && this.config.gameframe % 10 == 0) {
          this.aberta == 4 ? (this.aberta = 4) : this.aberta++;

          //tentar tecla
          setTimeout(() => {
            this.cenarioatual = 1;
            this.image.src =
              "./img/cenario/cenario" + this.cenarioatual + ".png";
            this.aberta = 1;
          }, 950);
        }

        break;
      case 1:
        this.objetos.push(ventilador);

        if (max.position.x < 10 && this.podepassar) {
          this.cenarioatual = 2;
          this.image.src = "./img/cenario/cenario" + this.cenarioatual + ".png";
          this.podepassar = false;
        }
        break;
      case 2:
        this.objetos.push(gatinhocenario);
        break;
    }
  }
}
