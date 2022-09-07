class Frame {
  constructor(max, rate, config, estado) {
    this.value = 1;
    this.max = max;
    this.rate = rate;
    this.config = config;
    this.estado = estado || "";
  }

  changeEstado(estado) {
    this.estado = estado;
    switch (estado) {
      case "andando":
      case "parado":
        if (this.value > 2) this.value = 1;
        this.max = 2;
        break;
      case "pulando":
      case "morrendo":
        this.value = 1;
        this.max = 1;
        break;
      case "atirando":
        this.rate = 6;
        break;
      case "pararAtirar":
        this.estado = "atirando";
        this.rate = 10;
        this.max = 4;

        setTimeout(() => {
          this.max = 2;
          this.value = 1;
          this.estado = "parado";
        }, 300);
        break;
    }
  }

  update() {
    if (this.config.gameframe % this.rate == 0) {
      this.value == this.max ? (this.value = 1) : this.value++;
    }
  }

  update(jogador) {
    if (this.config.gameframe % this.rate == 0) {
      this.value == this.max ? (this.value = 1) : this.value++;
      jogador.image.src =
        "./img/max/max" +
        this.estado +
        jogador.controle.dirX +
        this.value +
        ".png";
    }
  }

  forceUpdate() {
    this.value == this.max ? (this.value = 1) : this.value++;
  }
}
