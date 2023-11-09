import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';

function Nav() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
              <ul className="flex-column">
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </li>
                <li>
                    <FontAwesomeIcon icon='fa-solid fa-user' />
                </li>
                <li>
                    <FontAwesomeIcon icon="fa-solid fa-person-through-window" />
                </li>
              </ul>
            );
        } else {
            return (
                <ul className="flex-column">
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-toilet" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon="fa-solid fa-poo" />
                    </li>

                </ul>
            )
        }
    }
}

export default Nav;