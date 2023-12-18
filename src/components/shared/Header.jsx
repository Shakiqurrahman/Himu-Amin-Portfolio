import logo from '../../assets/profile-logo.jpg'

const Header = () => {
    return (
        <header className='fixed top-0 z-50 mx-auto w-full'>
            <div className=' flex m:justify-start justify-between  items-center h-16 max-width'>
            <div className='flex gap-x-3 items-center'>
            <img className='rounded-full w-12 h-12' src={logo} alt="logo" />
            <h1 className='text-xl tracking-[10px] text-white'>Himu <span>Amin</span></h1>
            </div>
            <nav>
                <ul className='flex gap-x-10 text-white'>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;