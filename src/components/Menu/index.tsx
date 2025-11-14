import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';
import { MenuButton } from '../MenuButton';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export default function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme || 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon size={24} />,
    light: <MoonIcon size={24} />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(preveTheme => {
      const nextTheme = preveTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a href='#' title='Ir para a home' aria-label='Ir para a home'>
        <MenuButton icon={<HouseIcon size={24} />} />
      </a>

      <a href='#' title='Ir para o histórico' aria-label='Ir para o histórico'>
        <MenuButton icon={<HistoryIcon size={24} />} />
      </a>
      <a
        href='#'
        title='Ir para as configurações'
        aria-label='Ir para as configurações'
      >
        <MenuButton icon={<SettingsIcon size={24} />} />{' '}
      </a>

      <a
        href='#'
        title='Mudar tema'
        aria-label='Mudar tema'
        onClick={handleThemeChange}
      >
        <MenuButton icon={nextThemeIcon[theme]} />
      </a>
    </nav>
  );
}
