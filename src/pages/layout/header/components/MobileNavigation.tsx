import { navLinks } from '../utils/navLinks';
import { CrossIcon } from './SVGs';

const MobileNavigation = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const menuStyles = isOpen ? 'translate-x-0' : 'translate-x-full';

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className={`fixed top-0 right-0 bottom-0 ${menuStyles} w-64 bg-background shadow-xl z-50 transition-transform duration-300 ease-in-out`}
            >
                <button
                    className="close-btn p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <CrossIcon />
                </button>
                <ul className="flex flex-col items-center justify-center space-y-4 mt-10">
                    {navLinks.map((link, index) => (
                        <li key={index} className="w-full text-center">
                            <a href={link.href} className="nav-link block py-2 w-full transition-colors duration-200 hover:bg-opacity-50">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MobileNavigation;
