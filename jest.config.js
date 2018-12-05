module.exports = {
  setupFiles: [
    '<rootDir>/setupTests.js',
  ],
  moduleDirectories: [
    'node_modules',
    '.',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  testURL: 'http://localhost/',
};
