import { Button, Image } from "@nextui-org/react"
import Link from "next/link"
import { FiExternalLink } from "react-icons/fi"


const Presentation = ({
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
        <article className="flex justify-center h-[80vh] gap-4 dark:bg-default-50 border border-default-100 rounded-md p-12 bg-white/80 backdrop-blur-sm overflow-y-scroll w-[80vw]">
            <div className="max-w-[800px] flex flex-col items-center gap-4">
                <div className="w-full">

                    <Image src={img_url} width={800} height={800} classNames={
                        {
                            img: "rounded-md w-full object-cover h-full",
                            wrapper: "w-full rounded-md h-full"
                        }
                    } />
                </div>
                <aside className="pl-4 py-8">
                    <h3 className="text-default-600 font-semibold">{title}</h3>
                    <p className="mt-4 font-light text-sm">
                        {description}
                    </p>
                    <p className="flex justify-end gap-4 mt-4">
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

                    </p>
                </aside>
            </div>
        </article>
    )
}

export default Presentation