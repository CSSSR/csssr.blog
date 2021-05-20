export default (...validators) =>
  (value) =>
    validators.reduce((error, validator) => {
      return error || (validator && validator(value))
    }, undefined)
