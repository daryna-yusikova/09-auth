import css from './Loader.module.css';

interface LoaderProps {
  label?: string;
  fullscreen?: boolean;
}

export default function Loader({
  label = 'Loading your notes...',
  fullscreen = false,
}: LoaderProps) {
  return (
    <div className={`${css.wrapper} ${fullscreen ? css.fullscreen : ''}`}>
      <span className={css.spinner} aria-hidden="true" />
      <span className={css.label}>{label}</span>
    </div>
  );
}
