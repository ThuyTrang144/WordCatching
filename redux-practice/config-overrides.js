const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@features": "src/features",
    "@components": "src/components",
    "@assets": "src/assets",
    "@constants": "src/constants",
    "@helpers": "src/helpers",
    "@pages": "src/pages",
  })(config);

  return config;
};
