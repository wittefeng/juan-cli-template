import styles from './index.less';
import { example } from '@/service/example';

export default () => {
  example().then((data) => {
    console.log(data);
  });
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
