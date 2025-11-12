import styles from './styles.module.css';

type MenuButtonProps = {
  icon: React.ReactNode;
  onCLick?: () => void;
};

export function MenuButton({ icon, onCLick }: MenuButtonProps) {
  return (
    <button className={styles.menuButton} onClick={onCLick}>
      {icon}
    </button>
  );
}
