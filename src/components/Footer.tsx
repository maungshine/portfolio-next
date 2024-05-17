import { Link } from "@nextui-org/react"
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillMail, AiFillRedEnvelope } from "react-icons/ai"


const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 items-center justify-center mt-auto py-8">
            <div className="flex justify-center gap-8">
                <Link href="/" className="text-default-500 border-b-2 hover:border-primary-400 border-default-400">
                    Home
                </Link>
                <Link href="/projects" className="text-default-500 border-b-2 hover:border-primary-400 border-default-400">
                    Projects
                </Link>
                <Link href="/contact" className="text-default-500 border-b-2 hover:border-primary-400 border-default-400">
                    Contact
                </Link>
            </div>
            <div className="flex justify-center gap-2">
                <Link href="www.linkedin.com/in/maung-shine-5aa254a6" target="_balnk">
                    <AiFillLinkedin className="text-2xl dark:text-default-500 text-default-800" />
                </Link>
                <Link href="https://github.com/maungshine" target="_blank">
                    <AiFillGithub className="text-2xl dark:text-default-500 text-default-800" />
                </Link>
                <Link href="mailto: shinekoko1276@gmail.com">
                    <AiFillMail className="text-2xl dark:text-default-500 text-default-800" />
                </Link>
            </div>
            <div className="flex justify-center text-xs">
                <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved by Maung Shine</p>
            </div>
        </footer>
    )
}

export default Footer
