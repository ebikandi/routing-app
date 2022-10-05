const babel = require("./babel.config");

module.exports = (api) => {
  api.cache(true);

  return {
    ...babel(api),

    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: "auto",
        },
      ],
      ["@babel/preset-react"],
    ],
  };
};
