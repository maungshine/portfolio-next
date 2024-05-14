import { Button, Image } from "@nextui-org/react"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"


const Project = ({
    img_url,
    title,
    description,
    demo_url,
    github_url
}: {
    img_url: string,
    title: string,
    description: string,
    demo_url?: string | null,
    github_url?: string | null
}) => {
    return (
        <article className="w-full grid gap-4 sm:grid-cols-12 dark:bg-default-50 border border-default-100 sm:max-h-[240px] rounded-md p-4 bg-white/30 backdrop-blur-sm">
            <div className="sm:col-span-4 h-[240px] sm:h-[200px]">

                <Image src={img_url} width={600} height={600} classNames={
                    {
                        img: "rounded-md h-full w-full object-cover",
                        wrapper: "rounded-md h-full w-full",
                    }
                } />
            </div>
            <aside className="sm:col-span-8 pl-4 flex flex-col gap-4">
                <h3 className="text-default-600 font-semibold">{title}</h3>
                <p className="mt-2 font-light text-sm">
                    {description.slice(0, 100) + '...'}
                </p>
                <div className="flex justify-end mt-auto gap-4">
                    {demo_url &&
                        <Button as={Link} href={demo_url} target="_blank" className="flex gap-2">
                            <span>Live Demo</span> <FiExternalLink />
                        </Button>
                    }
                    {github_url &&
                        <Button as={Link} href={github_url} target="_blank" className="flex gap-2">
                            <span>Github Link</span> <FiExternalLink />
                        </Button>
                    }

                </div>
            </aside>
        </article>
    )
}

export default Project