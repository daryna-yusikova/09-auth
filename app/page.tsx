import css from './Home.module.css';

export default function Home() {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to NoteyPop</h1>
        <p className={css.description}>
          NoteyPop is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether you are at home or on the go.
        </p>
        <p className={css.description}>
          The app provides a clean interface for writing, editing, and browsing
          notes. With support for keyword search and structured organization,
          NoteyPop offers a streamlined experience for anyone who values clarity
          and productivity.
        </p>
      </div>
    </main>
  );
}
