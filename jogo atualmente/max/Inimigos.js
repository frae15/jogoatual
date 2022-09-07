class Inimigos {
  constructor({ position, veloci, sprite, width, height, frame, config, ctx }) {
    this.position = position;
    this.veloci = veloci;
    this.sprite = sprite;
    this.frame = frame;
    this.dirX = "d";
    this.ctx = ctx;
    this.config = config;
    this.width = width;
    this.height = height;
    this.vida = 150;
    this.image = new Image();
    this.image.src =
      "./img/inimigos/inimigo" + this.dirX + this.sprite + ".png";
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  gravi(max, removerInimigo) {
    if (this.vida == 0) {
      removerInimigo(this);
      // fazer animação??
      return;
    }

    if (
      max.position.x + max.width >= this.position.x &&
      max.position.x <= this.position.x + this.width
    ) {
      this.veloci.x = 0;

      if (
        max.position.y + max.height >= this.position.y &&
        max.position.y <= this.position.y + this.height
      )
        max.vida -= 0.1;
    } else {
      this.veloci.x = max.position.x < this.position.x ? -4 : 4;
      // muda a direção da imagem
      this.dirX = this.veloci.x > 0 ? "d" : "e";
      this.image.src =
        "./img/inimigos/inimigo" + this.dirX + this.sprite + ".png";

      this.position.y += this.veloci.y;
      this.position.x += this.veloci.x;

      this.veloci.y += this.config.gravidade;

      if (this.position.y + this.height + 65 >= this.ctx.canvas.height) {
        this.veloci.y = 0;
        if (this.position.y + this.height > this.ctx.canvas.height)
          this.position.y = this.ctx.canvas.height - this.height;
      }
    }

    this.draw();
  }
}
