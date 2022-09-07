class Jogador {
  constructor({ position, veloci, frame, controle, config, ctx }) {
    this.position = position;
    this.veloci = veloci;
    this.controle = controle;
    this.frame = frame;
    this.ctx = ctx;
    this.config = config;
    this.width = 120;
    this.height = 140;
    this.vida = 100;
    this.image = new Image();
    this.image.src =
      "./img/max/max" +
      this.frame.estado +
      this.controle.dirX +
      this.frame.value +
      ".png";
    //defini o width/height aqui pq tem alguns sprites com tamanho diferente, deixei
    //por precaução, porem não usei. talvez seja melhor depois colocar todos os sprites lado a lado
    //para arrumarmos
    this.spritew = 120;
    this.spriteh = 120;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      0,
      0,
      this.spritew,
      this.spriteh,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  gravi(inimigos) {
    // if (inimigos.filter(inimigo => inimigo.position.x + inimigo.width >= this.position.x &&
    //     inimigo.position.x <= this.position.x + this.width).length > 0) {
    //     this.veloci.x = 0
    // } else {
    this.position.y += this.veloci.y;
    this.position.x += this.veloci.x;

    this.veloci.y += this.config.gravidade;

    if (this.position.y + this.height + 65 >= this.ctx.canvas.height) {
      this.veloci.y = 0;
      if (this.position.y + this.height > this.ctx.canvas.height)
        this.position.y = this.ctx.canvas.height - this.height;
    }
    if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
      this.position.x = this.position.x <= 0 ? 0 : canvas.width - this.width;
    }
    //}

    this.draw();
  }

  upd(inimigos) {
    this.gravi(inimigos);
    this.veloci.x = 0;
    if (this.vida > 0) {
      if (this.controle.a) {
        this.frame.changeEstado("andando");
        this.veloci.x = -7;
      } else if (this.controle.d) {
        this.frame.changeEstado("andando");
        this.veloci.x = 7;
      } else if (this.frame.estado != "atirando") {
        this.frame.changeEstado("parado");
      }
      //pulo único
      if (this.controle.w && this.veloci.y == 0) {
        this.veloci.y = -15;
      }

      if (this.veloci.y != 0) {
        this.frame.changeEstado("pulando");
      }
    } else {
      if (this.vida == 0) this.veloci.y = -10;
      this.vida--;
      this.frame.changeEstado("morrendo");
    }

    /* if (this.position.x <= 10) Cenario.cenarioatual = 2; */

    //anima os sprites
    this.frame.update(this);
  }
}
