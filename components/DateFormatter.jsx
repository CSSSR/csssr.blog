import { parseISO, format } from 'date-fns'
// TODO: может потом пригодится
export default function DateFormatter({ children, className }) {
  const date = parseISO(children)
  return (
    <time className={className} dateTime={children}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}
