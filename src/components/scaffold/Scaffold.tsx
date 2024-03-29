import style from './Scaffold.module.scss';
import { IDs, ScaffoldProps } from './types';

export const Scaffold = ({ children }: ScaffoldProps) => {
  return (
    <div data-testid={IDs.Scaffold} className={style.Scaffold}>
      <header data-testid={IDs.Header} className={style.Scaffold__Header}>
        HEADER
      </header>
      <div data-testid={IDs.Children} className={style.Scaffold__Children}>
        {children}
      </div>
      <footer data-testid={IDs.Footer} className={style.Scaffold__Footer}>
        FOOTER
      </footer>
    </div>
  );
};
