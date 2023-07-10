module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    // 'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
};
