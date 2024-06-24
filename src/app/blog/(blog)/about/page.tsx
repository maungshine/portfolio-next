import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    <main className="flex-1 flex items-center dark:bg-[#040309] justify-center">
      <div className="px-4 py-8 flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-500 text-transparent bg-clip-text inline-block">
          About this blog{" "}
          <span className="w-4 h-4 rounded-full inline-block bg-indigo-400"></span>
        </h1>
        <div className="text-lg mb-4">
          <p>
            Welcome to my tech blog! I&apos;m passionate about programming and love
            sharing knowledge and tutorials on various programming-related
            topics.
          </p>
          <p>
            This blog is a collection of my experiences, insights, and tutorials
            to help fellow developers and enthusiasts learn and grow in their
            programming journey.
          </p>
        </div>
        <p className="text-gray-500">
          Feel free to explore and dive into the world of programming with me!
        </p>
        <div className="mt-8">
          <p className="flex gap-2">
            Visit my personal homepage:
            <Link href="https://maungshine.site" target="_blank">
              <span className="text-blue-500" rel="noopener noreferrer">
                www.maungshine.site
              </span>
            </Link>
          </p>
          <p className="mt-4 mb-2">Connect with me:</p>
          <ul className="list-disc pl-4">
            <li>Email: devmaungshine@gmail.com</li>
            <li>
              Twitter:{" "}
              <a
                href="https://x.com/devmaungshine"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                @devmaungshine
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
