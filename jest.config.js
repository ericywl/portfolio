module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^Data(.*)$": "<rootDir>/data/config",
    "^Components(.*)$": "<rootDir>/src/components$1",
    "^Common(.*)$": "<rootDir>/src/common$1",
    "^Static(.*)$": "<rootDir>/static$1",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  // Gatsby includes un-transpiled ES6 code
  // Because gatsby-browser-entry.js isn’t being transpiled before running in Jest
  // we need to exclude gatsby module when transforming
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
