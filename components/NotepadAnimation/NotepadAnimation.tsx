import css from './NotepadAnimation.module.css';
import Image from 'next/image';

export default function NotepadAnimation() {
  return (
    <div className={css.charecter_container}>
      <Image
        className={`${css.charecter_animation} ${css.charecter_animation_dance}`}
        alt="dancing notebook animation"
        src="/images/sprite-notepad.webp"
        width={1500}
        height={900}
      />
    </div>
  );
}
