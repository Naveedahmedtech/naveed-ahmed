import Logo from './components/Logo';
import Navigation from './components/Navigation';
import { Footer } from '..';
import Home from '../../home/Home';

const Header = () => {
    return (
        <>
            <header className="bg-background text-text shadow-md" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <div className="px-4 md:px-20 mx-auto py-5 flex justify-between items-center">
                    <Logo />
                    <Navigation />
                </div>
            </header>
            <Home />
            <Footer />
        </>
    );
};

export default Header;

