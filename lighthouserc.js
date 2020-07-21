module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthouse.csssr.cloud',
      token: '4f1afffc-7983-4e24-aee7-9c446cb2fe25',
    },
    // assert: {
    //   preset: 'lighthouse:recommended',
    // },
  },
}
