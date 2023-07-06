module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};