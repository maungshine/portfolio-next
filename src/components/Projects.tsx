'use client';
import Container from "@/components/Container"
import Project from "@/components/Project"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CgClose } from "react-icons/cg";
import Presentation from "@/components/Presentation";


const projects = [
    {
        id: '1',
        img_url: '/ms-portfolio.png',
        title: 'Portfolio Website',
        description: `This porfolio website is to showcase my skills and projects. I will add blog later to this portfolio.
                        I used TypeScript, React, Nextjs, Framermotion, Nextui, Tailwind, Prisma ORM and Postgres, and deployed to vercel.`,
        demo_url: 'https://maungshine.site',
        github_url: null,
    },
    {

        id: '2',
        img_url: '/demo-rentx.png',
        title: 'RentX (Real Estate Rental Listing Website)',
        description: ` A property rental web application where users can list their properties, 
                        look for properties, save property they like and find properties on map ( leaflet map). 
                        I am still improving the app. Recently I added infinite scrolling for listings.
                        I used TypeScript, React, Nextjs, Nextui, Shadcn, Tailwind, Prisma ORM and Postgres for this project and deployed to vercel.`,
        demo_url: 'https://rentx-neon.vercel.app',
        github_url: null,
    },
    {
        id: '3',
        img_url: '/demo-social-nextjs.png',
        title: 'Simple Nextjs Social App',
        description: `A social media app where users can make friends, create topics, make
                        comments and reply on each others, and save posts. It includes authentication 
                        with github oAuth.I used TypeScript, React, Nextjs, Tailwind, Prisma ORM and sqlite for this project. `,
        github_url: 'https://github.com/maungshine/discuss',
        demo_url: null,
    },
    {
        id: '4',
        img_url: '/social-laravel.png',
        title: 'Simple laravel Social App',
        description: `A social media app where users can follow friends, create posts with photos, 
                        make comments and reply on each others, and like posts. I used PHP, Laravel, Bootstrap, Eloquent ORM and MySql 
                        for this project`,
        github_url: 'https://github.com/maungshine/laravel-social',
        demo_url: null,
    },
    {
        id: '5',
        img_url: '/django-ecommerce.png',
        title: 'Django Ecommerce Application',
        description: `An ecommerce application where users can sell their products using auctions. 
                    Buyers can participate in these autions and watch the ones the are interested in.
                    I used Python, Django, CSS, Html`,
        github_url: 'https://github.com/maungshine/commerce-101',
        demo_url: null,
    },
    {
        id: '6',
        img_url: '/shune-portfolio.png',
        title: 'Porfolio Website With Wordpress',
        description: `This is a portfolio website to showcase skills, experiences, education and blog. I used wordpress for this project.`,
        demo_url: 'https://shunelaithida.site',
        github_url: null,
    }
]

const Projects = () => {
    const [selectedItem, setSelectedItem] = useState<{ id: string, img_url: string, title: string, description: string, demo_url?: string | null, github_url?: string | null } | null>(null);

    function getSelectedItem(id: string) {
        return projects.filter((item) => item.id === id)[0];
    }

    return (

        <Container classnames="items-center w-full relative">
            {projects.map((project) => (
                <motion.div key={project.id} layoutId={project.id} onClick={() => setSelectedItem(getSelectedItem(project.id))} className="cursor-pointer w-full">
                    <Project img_url={project.img_url} title={project.title} description={project.description} demo_url={project.demo_url} github_url={project.github_url} />
                </motion.div>
            ))}

            <AnimatePresence >
                {selectedItem && (
                    <motion.div key={selectedItem.id} layoutId={selectedItem.id} className="fixed top-0 max-w-[800px] z-50 h-[100vh] flex items-center dark:bg-default-200/50">
                        <div className="relative">
                            <CgClose className="absolute text-default-600 dark:text-default-500 cursor-pointer right-5 top-5 z-50" onClick={() => setSelectedItem(null)} />

                            <Presentation github_url={selectedItem.github_url} img_url={selectedItem.img_url} title={selectedItem.title} description={selectedItem.description} demo_url={selectedItem.demo_url} />
                        </div>



                    </motion.div>
                )}
            </AnimatePresence>
        </Container>

    )
}

export default Projects