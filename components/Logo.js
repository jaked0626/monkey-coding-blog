import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import LogoLightMode from '@/data/monkey-black.svg'
import LogoDarkMode from '@/data/monkey-white.svg'

const Logo = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  const LogoComponent = theme === 'dark' || resolvedTheme === 'dark' ? LogoDarkMode : LogoLightMode

  return mounted && <LogoComponent />
}

export default Logo
