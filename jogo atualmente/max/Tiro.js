class Tiro {
  constructor({ position, veloci, config, ctx }) {
    this.config = config;
    this.position = position;
    this.veloci = veloci;
    this.ctx = ctx;
    this.width = 30;
    this.height = 30;
    this.frame = 1;
    this.sprite = new Image();
    this.sprite.src = "./img/tiromax/TiroMandioca" + this.frame + ".png";
    this.framemax = 4;
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  colisao(inimigos, removerTiros) {
    const inimigosAtingidos = inimigos.filter(
      (inimigo) =>
        inimigo.position.x + inimigo.width >= this.position.x &&
        inimigo.position.x <= this.position.x + this.width &&
        inimigo.position.y <= this.position.y + this.height &&
        inimigo.position.y + inimigo.height >= this.position.y
    );
    if (inimigosAtingidos.length > 0) {
      removerTiros(this);
      inimigosAtingidos.forEach((inimigo) => (inimigo.vida -= 10));
    }

    if (
      this.position.x + this.width >= this.ctx.canvas.width ||
      this.position.x <= 0
    ) {
      removerTiros(this);
    }
  }

  func(inimigos, removerTiros) {
    this.colisao(inimigos, removerTiros);
    this.draw();

    //mov do tiro
    this.position.x += this.veloci.x;

    //sprite
    if (this.config.gameframe % 5 == 0) {
      this.frame == this.framemax ? (this.frame = 1) : this.frame++;
      this.sprite.src = "./img/tiromax/TiroMandioca" + this.frame + ".png";
    }
  }
}
