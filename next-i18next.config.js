const path = require("path");
module.exports = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    localeDetection: false
  },
  localePath: path.resolve("./public/locales")
};
