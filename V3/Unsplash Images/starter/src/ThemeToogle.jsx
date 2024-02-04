import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const ThemeToogle = () => {
  const { toggleTheme, isDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button onClick={toggleTheme} className="dark-toggle">
        {isDarkTheme ? <BsFillMoonFill className="toggle-icon" /> : <BsFillSunFill className="toggle-icon" />}
      </button>
    </section>
  );
};
export default ThemeToogle;
