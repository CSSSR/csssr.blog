module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    // assert: {
    //   preset: 'lighthouse:recommended',
    // },
  },
}
