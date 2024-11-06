import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div id="nginep" className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="/projects/nginep-hero.webp"
          alt="Fading Image"
          width={1500}
          height={1500}
          className="absolute top-0 left-0 w-full h-full object-cover object-left"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black"></div>
        <div className="absolute top-0 right-4 sm:right-0 w-3/4 sm:w-1/2 h-full p-8 flex flex-col justify-start items-start">
          <h2 className="text-3xl text-primary-orange font-medium mt-4">
            Project Nginep
          </h2>
          <div className="">
            <p className="text-lg text-gray-300 font-semibold my-4">
              Renting Property Management Website
            </p>
            <p className="hidden sm:block text-base text-justify text-gray-300">
              Developed with back end and front end by using Java and
              TypeScript, respectively. Mainly inspired by
              <Link href="https://www.airbnb.com/" target="_blank">
                <span className=""> Airbnb</span>.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8">
        <div className="block mb-4 sm:hidden">
          <p className="text-base text-justify text-gray-800">
            Developed with back end and front end by using Java and TypeScript,
            respectively. Mainly inspired by
            <Link href="https://www.airbnb.com/" target="_blank">
              <span className=""> Airbnb</span>.
            </Link>
          </p>
        </div>

        <div className="mb-4">
          <p className="text-primary-orange">
            A Full Stack Project (Back End and Front End)
          </p>
        </div>


        <div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>
              The project was made by{" "}
              <Link href="https://github.com/irfazbow" target="_blank">
                <span className="text-primary-orange"> Irfan</span>
              </Link>{" "}
              and{" "}
              <Link href="https://github.com/Yosef1997" target="_blank">
                <span className="text-primary-orange"> Yosef</span>
              </Link>
              , with each having their own features and tasks
            </li>
            <li>
              Irfan worked on the back end and front end, focusing on the
              following features:
              <ul className="list-disc space-y-2 pl-5 py-2 text-sm font-light text-gray-800 dark:text-gray-300 leading-relaxed">
                <li>
                  The{" "}
                  <span className="text-primary-orange">
                    flow of transaction
                  </span>{" "}
                  process entirely, whether manual or automatic
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-orange">room reservation</span>{" "}
                  by guest, and reservation management by tenant
                </li>
                <li>
                  The <span className="text-primary-orange">review</span> from
                  guest and{" "}
                  <span className="text-primary-orange">response</span> by the
                  tenant
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-orange">
                    report, analytics, and graphs
                  </span>{" "}
                  on the dashboard page
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-orange">
                    calendar room availability
                  </span>{" "}
                  on the dashboard page
                </li>
              </ul>
            </li>
            <li>
              <span className="text-primary-orange">Agile</span> methodology
              with <span className="text-primary-orange">Jira</span> as the
              platform was used in the process to maintain the flow of
              development
            </li>
            <li>
              The website is for preview only, all the property inside it are
              dummy data, and{" "}
              <span className="text-primary-orange">
                do not make any real transaction
              </span>{" "}
              inside the website
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <Link
            href="https://nginep-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border-b border-primary-orange hover:text-primary-orange"
          >
            Let&apos;s try and simulate to reserve a room at Nginep!
          </Link>
        </div>
      </div>
    </>
  );
}
