import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ColorRing } from  'react-loader-spinner'
import {StyledLink, Header} from "./Header.styled"
import { Container } from "components/Container.styled";

const Layout = () => {
    
    return <div>
        <Header>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
        </Header>
        <Container>
            <Suspense fallback={<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}>
                <Outlet />
            </Suspense>
        </Container>
    </div>
};

export default Layout;