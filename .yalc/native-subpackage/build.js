const { babel } = require("./babel");
const { command } = require("./command");

(() => {
  const params = process.argv.splice(2).join(" ");
  command("yarn install");

  // ! If you want ES6 friendly build ------------------------------------------
  // babel(params, 'babel.config.production.js');
  // ! -------------------------------------------------------------------------

  // babel(params);
  babel(params, "babel.config.production.js");

  // Disabled because breaks the build (@babel/preset-typescript installed instead)
  //command('npx -p typescript tsc build/**/*.js --declaration --allowJs --emitDeclarationOnly --skipLibCheck');
})();
