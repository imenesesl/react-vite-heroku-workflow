import { MiddleSection } from './MiddleSection';
import style from './SignInSignUp.module.scss';
import { SignInSignUpProps } from './types';

export function SignInSignUp<T>({ middleSection }: SignInSignUpProps<T>) {
  return (
    <div className={style.SignInSignUp}>
      <section className={style.SignInSignUp__TopSection}>Top</section>
      <MiddleSection<T> {...middleSection} />
      <section className={style.SignInSignUp__BottomSection}>Bottom</section>
    </div>
  );
}
