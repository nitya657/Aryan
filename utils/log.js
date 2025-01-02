const chalk = require('chalk');
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
module.exports = (data, option) => {
  switch (option) {
    case "warn":
        console.log(chalk.bold.hex("#ff0000").bold('» Log « ') + data);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff0000").bold('» Log « ') + data);
      break;
    default:
        console.log(chalk.bold.hex(randomColor()).bold(`${option} » `) + data);
      break;
  }
}

module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      console.log(chalk.bold.hex(randomColor()).bold(" [ ARYAN ❤️ ] ") + chalk.bold.hex("#8B8878").bold(data)+chalk.bold.hex("FF00DD")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ LEGEND ARYAN ❤️ (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ))
      break;
    case "error":
    console.log(chalk.bold.hex(randomColor()).bold(" [ ARYAN ❤️ ] ") + data+chalk.bold.hex("5EFF00")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ LEGEND ARYAN ❤️ (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ));
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold(" [ ARYAN ❤️ ] ") + chalk.bold.hex(randomColor()).bold(data) +chalk.bold.hex("FFF0000")("\n✧➜  ✧ ✧ ✧ ✧ ✧ ✧ LEGEND ARYAN ❤️ (👑)✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧" ));
      break;
  }
}
