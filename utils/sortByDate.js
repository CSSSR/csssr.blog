export default (array) => array.sort((postA, postB) => new Date(postB.date) - new Date(postA.date))
