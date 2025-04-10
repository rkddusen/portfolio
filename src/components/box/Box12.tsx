// Box 형태 (1 * 2)
// ㅁㅁ
import { Box } from '../../models/Box';

const Box12 = ({ children, bg = 'bg-light-box' }: Box) => {
  return (
    <div
      className={`row-span-1 col-span-2 rounded-20 ${bg} ${bg === 'bg-light-box' ? 'dark:bg-dark-box' : null} overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default Box12;
