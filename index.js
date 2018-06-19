const readline = require("readline");

class Soldier {
  constructor() {
    this.io = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.health = 100;
  }

  run() {
    console.log("Welcome to simple soldier simulator!");
    console.log("Here's what you can do with it:");
    console.log("1 - Print current health");
    console.log("2 - Increase health by 5");
    console.log("3 - Decrease health by 5");
    console.log("0 - Exit");

    this.io.prompt();

    this.io.on("line", line => this.handleUserInput(line));
  }

  handleUserInput(line) {
    switch (line.trim()) {
      case "0": {
        console.log("Bye...");
        process.exit(0);
      }
      case "1": {
        this.printHealth();
        break;
      }

      case "2": {
        this.increaseHealth();
        this.printHealth();
        break;
      }

      case "3": {
        this.decreaseHealth();
        this.printHealth();
        break;
      }

      default: {
        console.log("Wrong input...");
      }
    }

    this.io.prompt();
  }

  printHealth() {
    console.log(`Soldier's current health is ${this.health}`);
  }

  increaseHealth() {
    this.health += 5;
  }

  decreaseHealth() {
    this.health -= 5;
  }
}

const soldier = new Soldier();
soldier.run();
