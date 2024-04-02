import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Sections.scss';

const getLinkClass = ({ isActive }) => classNames('sections__link', {
    'sections__link--active': isActive,
  });

export const Sections = () => {
  return (
    <div className="sections">
      <NavLink to="/" className={getLinkClass}>
        <img src="./images/User.svg" alt="user" />
        Користувач
      </NavLink>
      <NavLink to="/profile" className={getLinkClass}>
        <img src="./images/Profile.svg" alt="profile" />
        Профіль
      </NavLink>
      <NavLink to="/offers" className={getLinkClass}>
        <img src="./images/Offers.svg" alt="offers" />
        Пропозиції
      </NavLink>
      <NavLink to="monitor" className={getLinkClass}>
        <img src="./images/monitor.svg" alt="monitor" />
        Моніторинг
      </NavLink>
      <NavLink to="balance" className={getLinkClass}>
        <img src="./images/Balance.svg" alt="balance" />
        Баланс
      </NavLink>
      <NavLink to="/help"className={getLinkClass}>
        <img src="./images/Help.svg" alt="help" />
        Технічна підтримка
      </NavLink>
    </div>
  )
}