import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
    
    return <div>
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
};

export default Layout;