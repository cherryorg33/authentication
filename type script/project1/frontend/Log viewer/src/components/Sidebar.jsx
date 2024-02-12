// Sidebar.js
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/service/apache">Apache</Link>
        </li>
        <li>
          <Link to="/service/nginx">Nginx</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
