import { Outlet } from "react-router-dom";
import {StyledLink, Header} from "./Header.styled"

const Layout = () => {
    
    return <div>
        <Header>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
        </Header>
        <main>
            <Outlet />
        </main>
    </div>
};

export default Layout;