import { useTheme } from '../context/ThemeContext';
import MoonIcon, { SunIcon } from '../pages/layout/header/components/SVGs';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  return (
      <button onClick={toggleTheme} className="focus:outline-none">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
  )
}

export default ThemeToggle
