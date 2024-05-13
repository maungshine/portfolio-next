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
                <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_balnk">
                    <AiFillLinkedin className="text-2xl text-default-50 dark:text-default-500" />
                </Link>
                <Link href="https://github.com/maungshine" target="_blank">
                    <AiFillGithub className="text-2xl dark:text-default-500 text-default-50" />
                </Link>
                <Link href="mailto: shinekoko1276@gmail.com">
                    <AiFillMail className="text-2xl dark:text-default-500 text-default-50" />
                </Link>
            </div>
        </footer>
    )
}

export default Footer