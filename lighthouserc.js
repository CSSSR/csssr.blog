module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.csssr.cloud',
      token: 'd9aff931-87e0-402e-985c-123d5a3bdab2',
    },
    // assert: {
    //   preset: 'lighthouse:recommended',
    // },
  },
}
