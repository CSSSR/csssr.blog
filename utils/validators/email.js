import simpleEmailRegexp from '../simpleEmailRegexp'

export default (value) => (value.match(simpleEmailRegexp) ? undefined : 'Неверный формат адреса')
