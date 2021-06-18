export default (content, length) => {
  const endCharacter = '...'
  const descriptionLength = length - endCharacter.length

  if (content?.length > descriptionLength) {
    return `${content.slice(0, descriptionLength)}${endCharacter}`
  }

  return content
}
