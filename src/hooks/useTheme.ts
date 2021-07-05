import { useState, useEffect } from 'react'
import { useFetch } from './useFetch'

import { Theme } from '../ts/interfaces'
import { FETCH_URL } from './../ts/constants'

export const useTheme = () => {
  const { data } = useFetch(FETCH_URL)
  const [theme, setTheme] = useState(null)
  const [themeLoaded, setThemeLoaded] = useState(false)

  useEffect(() => {
    const mainTheme = data.find((item: Theme) => item.themeName.toLowerCase() === 'ausar')
    theme ? setTheme(theme) : setTheme(mainTheme)
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded, setTheme }
}