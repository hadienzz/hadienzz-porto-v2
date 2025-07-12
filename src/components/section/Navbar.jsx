import { motion } from "framer-motion"
import { Menu, MenuIcon } from "lucide-react"

const Navbar = () => {
    return (
        <header className="w-full border-b-[1px] border-[#4b5563] py-6  px-4 z-100">
            <div className="flex justify-between items-center lg:max-w-[1252px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    Logo
                </motion.div>
                <nav className="hidden lg:inline-flex">
                    <p>LIST 1</p>
                    <p>LIST 2</p>
                    <p>LIST 3</p>
                </nav>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 4, duration: 1 }}
                >
                    <Menu />
                </motion.div>
            </div>
        </header >
    )
}

export default Navbar