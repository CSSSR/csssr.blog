import { format, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'

const DateFormatter = ({ children, className, language }) => {
  const date = parseISO(children)
  const locale = language === 'ru' ? ru : enUS
  const localeFormat = language === 'ru' ? 'd MMMM, yyyy' : 'LLLL d, yyyy'
  return (
    <time className={className} dateTime={children}>
      {format(date, localeFormat, { locale })}
    </time>
  )
}

export default DateFormatter
