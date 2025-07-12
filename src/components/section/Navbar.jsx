import { Menu, MenuIcon } from "lucide-react"

const Navbar = () => {
    return (
        <header className="w-full border-b-[1px] border-[#4b5563] py-6 md:px-25 px-2 ">
            <div className="flex justify-between items-center w-[1252px] bg-black mx-auto">
                <div>
                    Logo
                </div>
                <nav className="inline-flex">
                    <p>LIST 1</p>
                    <p>LIST 2</p>
                    <p>LIST 3</p>
                </nav>
                <div>

                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Navbar