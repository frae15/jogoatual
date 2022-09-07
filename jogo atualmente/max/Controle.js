class Controle {
  constructor() {
    this.w = false;
    this.s = false;
    this.d = false;
    this.a = false;
    this.dirX = "d";
  }

  changeDir() {
    this.dirX = this.dirX == "d" ? "e" : "d";
  }

  toggle(tecla) {
    return (this[tecla] = !this[tecla]);
  }

  enable(tecla) {
    this[tecla] = true;
  }

  disable(tecla) {
    this[tecla] = false;
  }

  enableW() {
    this.enable("w");
  }

  enableA() {
    this.enable("a");
  }

  enableD() {
    this.enable("d");
  }

  disableW() {
    this.disable("w");
  }

  disableA() {
    this.disable("a");
  }

  disableD() {
    this.disable("d");
  }

  toggleW() {
    this.toggle("w");
  }

  toggleA() {
    this.toggle("a");
  }

  toggleW() {
    this.toggle("d");
  }
}
