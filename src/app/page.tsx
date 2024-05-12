import Container from "@/components/Container";
import NextLogo from "@/components/NextLogo";
import ProfileImage from "@/components/ProfileImage";
import ReactLogo from "@/components/ReactLogo";
import Timeline from "@/components/Timeline";
import Link from "next/link";



const certificates = [
  {
    id: '1',
    title: "Web Development Traning And Intership With Php and Laravel",
    year: '20-Oct-2023 To 20-Mar-2024',
  },
  {
    id: '2',
    title: "Introduction to Python Programming",
    year: "2021",
  },
  {
    id: '3',
    title: "Google It Support Professional Certificate",
    year: '2020'
  },
  {
    id: '4',
    title: "CS50 Introduction to Computer Science And Programming",
    year: "2020",
  },
  {
    id: '5',
    title: "Diploma in Maritime Technology",
    year: "From 2012 To 2014",
  },
]

const languages = [
  'Javascript',
  'Php',
  'Python',
  'Sql',
  'MangoDB',
  'Css',
  'Html'
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
          <p className="dark:text-default-500 indent-8 text-2xl my-8 text-center font-mono">
            I'm Maung Shine, a frontend and full-stack developer passionate about crafting immersive digital
            experiences. With expertise in React and Next.js, I bring creativity and precision to every project I touch.
            Let's build something amazing together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-rows-2 col-span-1 w-full gap-4">

              <article className="flex flex-col bg-white/30 backdrop-blur-sm gap-4 dark:bg-[#080808] dark:text-default-500 border items-center dark:border-default-100 rounded-md p-4">
                <h3 className="font-semibold text-center inline-block">My Educational Background</h3>
                <p className="indent-4 text-sm">
                  I sudied Maritme Technology at Myanmar Mercantile Marine College. As I did't have computer science background,
                  I had to learn to code through online courses Like CS50, and local programming courses and web development training.
                  Since I strongly believed in learning by getting my hands drity with code, I built many projects on my own. Please
                  check them out at <Link href='/projects' className="hover:border-b-2 hover:border-secondary-500 text-primary-500">Projects</Link> page.
                </p>
              </article>
              <article className="flex flex-col bg-white/30 backdrop-blur-sm gap-4 dark:bg-[#080808] dark:text-default-500 border items-center dark:border-default-100 rounded-md p-4">
                <h3 className="font-semibold text-center inline-block">Areas to be explored in future</h3>
                <p className="indent-4 text-sm">
                  I'm interested in learning and developing Generative AI application in the future in my spare time. And another skill that I'm aming to pursue in the future is developing 3D models and animations.
                </p>
              </article>
            </div>
            <article className="flex flex-col bg-white/30 backdrop-blur-sm gap-4 dark:bg-[#080808] dark:text-default-500 border dark:border-default-100 rounded-md p-4">
              <h3 className="font-semibold text-center inline-block">Languages and Framework I can use</h3>
              <div className="text-sm space-y-8">
                <div className="space-y-2 text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="font-semibold text">Languages</h3>
                  <ul className="flex gap-2 shrink-0 flex-wrap">
                    {languages.map((lang) => {
                      return <li key={lang} className="border text-xs border-cyan-400 rounded-md p-2">{lang}</li>
                    })}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="font-semibold">Frameworks and Libraries</h3>
                  <ul className="flex gap-2 shrink-0 flex-wrap">
                    {frameworks.map((lang) => {
                      return <li key={lang} className="border text-xs border-orange-400 rounded-md p-2">{lang}</li>
                    })}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                  <h3 className="font-semibold">CMS</h3>
                  <ul className="flex gap-2 shrink-0 flex-wrap">
                    {cms.map((lang) => {
                      return <li key={lang} className="border text-xs border-indigo-400 rounded-md p-2">{lang}</li>
                    })}
                  </ul>
                </div>

              </div>
            </article>
            <article className="flex col-span-1 md:col-span-2 bg-white/30 backdrop-blur-sm flex-col gap-4 dark:bg-[#080808] dark:text-default-500 border items-center dark:border-default-100 rounded-md p-8">
              <h3 className="font-semibold text-center inline-block">Diploma and Certificates that I achieved</h3>
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
