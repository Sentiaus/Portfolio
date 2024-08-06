import Link from 'next/link'
import Links from './links/Links';

const Navbar = () => {
    return (
        <div>
            <nav className="h-24 flex items-center justify-between">
                <Link className="hidden md:block" href="/">Victor</Link>
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <Links></Links>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;