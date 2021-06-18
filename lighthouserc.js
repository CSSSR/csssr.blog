module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthouse.csssr.cloud',
      token: '61bcff51-0978-40ad-a6f1-9c26511520d5',
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
