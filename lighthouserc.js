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
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.4 }],
        'categories:accessibility': ['warn', { minScore: 0.6 }],
        'categories:best-practices': ['warn', { minScore: 0.7 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
  },
}
