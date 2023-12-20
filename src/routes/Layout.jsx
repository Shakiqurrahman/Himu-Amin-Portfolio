import Header from '../components/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import SocialMedias from '../components/shared/SocialMedias';

const Layout = () => {
    return (
        <div>
            <Header />
            <SocialMedias />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;