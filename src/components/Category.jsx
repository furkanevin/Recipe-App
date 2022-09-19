import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function category() {
  return (
    <div className="category">
      <NavLink className="navlink a" to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="navlink a" to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink className="navlink a" to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink className="navlink a" to={'/cuisine/British'}>
        <GiChopsticks />
        <h4>British</h4>
      </NavLink>
    </div>
  );
}

export default category;
