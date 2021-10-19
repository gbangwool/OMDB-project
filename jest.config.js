module.exports = {
  //따로 파일명 작성시 확장자 명시하지 않아도 되게끔 지정
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  //경로별칭 설정
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress'
  ],

  //test evnironment
  testURL: 'http://localhost',

  transform: {
    '^.+\\.vue$' : 'vue-jest',
    '^.+\\.js$' : 'babel-jest'
  }
}