import Header from '../components/shared/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import SocialMedias from '../components/shared/SocialMedias';

const Layout = () => {
    return (
        <div>
            <Header />
            <SocialMedias />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default Layout;