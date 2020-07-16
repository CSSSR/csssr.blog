import { useEffect, useState } from 'react'

const useMediaMatch = (media) => {
  const [isMatches, setIsMatchesState] = useState(false)

  useEffect(() => {
    const handleMediaMatch = ({ matches }) => setIsMatchesState(matches)
    const mediaQuery = window.matchMedia(media)

    handleMediaMatch(mediaQuery)
    mediaQuery.addListener(handleMediaMatch)

    return () => mediaQuery.removeListener(handleMediaMatch)
  })

  return isMatches
}

export default useMediaMatch
