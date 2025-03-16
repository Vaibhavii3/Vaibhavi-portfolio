import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border border-none justify-center w-screen flex">
            
            <div className="border rounded-full border-none border-opacity-50 shadow-md shadow-purple-800 justify-center">
                <ul className="p-4 flex gap-10">
                    <li className="p-2">
                        <Link href="/"> Home </Link>
                    </li>
                    <li className="p-2">
                        <Link href="/about"> About </Link>
                    </li>
                    <li className="p-2">
                        <Link href="/experience">
                        Experience </Link>
                    </li>
                    <li className="p-2">
                        <Link href="/projects">
                        Projects </Link>
                    </li>
                    <li className="p-2">
                        <Link href="/service"> Service </Link>
                    </li>
                    <li className="p-2">
                        <Link href="/contact"> Let's connect </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
};