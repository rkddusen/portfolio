import { useEffect, useState } from 'react'

export const useTheme = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] => {
  const handleSetIsDarkMode = (): boolean => {
    const mode = window.localStorage.getItem('themeMode')
    let _isDarkMode = mode === 'light' ? false : mode === 'dark' ? true : null

    if (_isDarkMode === null) {
      // 브라우저 테마 정보 확인
      const isBrowserDarkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches

      _isDarkMode = isBrowserDarkMode
    }
    return _isDarkMode
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(handleSetIsDarkMode)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      setIsDarkMode(handleSetIsDarkMode)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return [isDarkMode, setIsDarkMode]
}
