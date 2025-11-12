import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { MenuButton } from '../MenuButton';
import styles from './style.module.css';

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <MenuButton icon={<HouseIcon size={24} />} />
      <MenuButton icon={<HistoryIcon size={24} />} />
      <MenuButton icon={<SettingsIcon size={24} />} />
      <MenuButton icon={<SunIcon size={24} />} />
    </nav>
  );
}
