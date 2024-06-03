import Container from "@/components/Container";
import NextLogo from "@/components/NextLogo";
import ProfileImage from "@/components/ProfileImage";
import ReactLogo from "@/components/ReactLogo";
import Timeline from "@/components/Timeline";
import Link from "next/link";



const certificates = [
  {
    id: '1',
    title: "Meta Frontend Developer Professional Certificate",
    year: 'May-2023 To Jun-2024',
  },
  {
    id: '2',
    title: "Web Development Traning And Internship With Php and Laravel",
    year: '20-Oct-2023 To 20-Mar-2024',
  },
  {
    id: '3',
    title: "Introduction to Python Programming",
    year: "2021",
  },
  {
    id: '4',
    title: "Google It Support Professional Certificate",
    year: '2020'
  },
  {
    id: '5',
    title: "CS50 Introduction to Computer Science And Programming",
    year: "2020",
  },
  {
    id: '6',
    title: "Diploma in Maritime Technology",
    year: "From 2012 To 2014",
  },
]

const languages = [
  'Javascript',
  'TypeScript',
  'Php',
  'Python',
  'Sql',
  'MangoDB',
  'Css',
  'Html',
  'Git'
]

const frameworks = [
  'Nextjs',
  'React',
  'Laravel',
  'Django',
  'Flask',
  'Prisma ORM',
  'Eloquent ORM',
  'Tailwind',
  'Bootsrap'
]

const cms = [
  'wordpress',
  'filament',
  'strapi'
]

export default function Home() {
  return (
    <main>
      <section className="flex justify-center">
        <Container classnames="items-center w-full relative">
          {/* <NextLogo />
          <ReactLogo /> */}
          <ProfileImage />
          <p className="dark:text-default-500 indent-8 md:text-2xl text-xl my-8 text-center font-mono">
            I&apos;m Maung Shine, a frontend and full-stack developer passionate about crafting software that is useful, yet apealing in visual
            using React and Nextjs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-rows-2 col-span-1 w-full gap-4">

              <article className="flex flex-col bg-white/30 backdrop-blur-sm gap-4 dark:bg-[#080808] dark:text-default-500 border items-center dark:border-default-100 rounded-md p-4">
                <h3 className="font-semibold text-center inline-block text-xl md:text-2xl font-serif">Working Experience</h3>


                <p className="text-sm mt-8 self-start">Web Developer Training And Internship</p>
                <p className="text-xs self-start">20-Oct-2023 To 20-Mar-2024</p>
                <p className="text-sm">
                  In this position, I primarily work on a project called, Win Bo Myint which is a accounting and business training school. The website includes frontend to showcase their school and courses and admin dashboard to handle the frontend. We used laravel and php for fullstack development. Other technologies include bootstarp for styling, filament for cms dashboard and some Javascript for interacitvity.
                </p>

              </article>
              <article className="flex flex-col bg-white/30 backdrop-blur-sm gap-4 dark:bg-[#080808] dark:text-default-500 border items-center dark:border-default-100 rounded-md p-4">
                <h3 className="font-semibold text-center inline-block text-xl md:text font-serif">Areas to be explored in future</h3>
                <p className="mt-8 text-sm">
                  I&apos;m interested in learning and developing Generative AI application in the future in my spare time. And another skill that I&apos;m aming to pursue in the future is developing 3D models and animations.
                </p>
              </article>
            </div>
            <article className="flex flex-col bg-white/30 backdrop-blur-sm gap-4 dark:bg-[#080808] dark:text-default-500 border dark:border-default-100 rounded-md p-4">
              <h3 className="font-semibold text-center inline-block text-xl md:text font-serif">Languages and Frameworks</h3>
              <div className="text-sm space-y-8 mt-8">
                <div className="space-y-4 text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="font-semibold text">Languages</h3>
                  <ul className="flex gap-2 shrink-0 flex-wrap">
                    {languages.map((lang) => {
                      return <li key={lang} className="border text-xs border-cyan-400 rounded-md p-2 font-mono">{lang}</li>
                    })}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="font-semibold">Frameworks and Libraries</h3>
                  <ul className="flex gap-2 shrink-0 flex-wrap">
                    {frameworks.map((lang) => {
                      return <li key={lang} className="border text-xs border-orange-400 rounded-md p-2 font-mono">{lang}</li>
                    })}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="font-semibold">CMS</h3>
                  <ul className="flex gap-2 shrink-0 flex-wrap">
                    {cms.map((lang) => {
                      return <li key={lang} className="border text-xs border-indigo-400 rounded-md p-2 font-mono">{lang}</li>
                    })}
                  </ul>
                </div>

              </div>
            </article>
            <article className="flex col-span-1 md:col-span-2 bg-white/30 backdrop-blur-sm flex-col gap-4 dark:bg-[#080808] dark:text-default-500 border items-center dark:border-default-100 rounded-md p-8">
              <h3 className="font-semibold text-center inline-block text-xl md:text font-serif">Diploma and Certificates</h3>
              <div className="flex justify-start w-full">
                <Timeline timelineElements={certificates} />
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
