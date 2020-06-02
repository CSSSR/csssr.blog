// Взято отсюда https://github.com/CSSSR/actions/blob/93d5148a5d1365f7aa831bad6dfe4d5d588c8d56/libs/github.js

function getCurrentBranch() {
  if (process.env.GITHUB_HEAD_REF) {
    return process.env.GITHUB_HEAD_REF
  }

  const ref = process.env.GITHUB_REF
  if (!ref.startsWith('refs/heads/')) {
    throw new Error(`Unexpected ref ${ref}`)
  }

  return ref.replace('refs/heads/', '')
}

function branchToReleaseID(branch) {
  return branch.toLowerCase().replace(/[^a-z\d-]/g, '-')
}

// Результат этого скрипта это вывод текста в терминал
console.log(branchToReleaseID(getCurrentBranch()))
