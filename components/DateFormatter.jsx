import { parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

// TODO: может потом пригодится
export default function DateFormatter({ children, className, language }) {
  const date = parseISO(children)
  const locale = language === 'ru' && ru
  const localeFormat = language === 'ru' ? 'd MMMM, yyyy' : 'LLLL d, yyyy'
  return (
    <time className={className} dateTime={children}>
      {format(date, localeFormat, { locale })}
    </time>
  )
}
