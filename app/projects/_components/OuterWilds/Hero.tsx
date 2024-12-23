import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        id="outerwilds"
        className="relative w-full h-[500px] overflow-hidden"
      >
        <a
          href="https://owventures-cpy-profile.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/projects/owv-hero.webp"
            alt="Fading Image"
            width={1500}
            height={1500}
            className="absolute top-0 left-0 w-full h-full object-cover object-left"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent from-0% via-black/65 via-50% to-black"></div>
          <div className="absolute top-0 right-4 sm:right-0 w-3/4 sm:w-1/2 h-full p-8 flex flex-col justify-start items-start">
            <h2 className="text-3xl text-primary-orange font-medium mt-4">
              Project Outer Wilds
            </h2>
            <div className="">
              <p className="text-lg text-gray-300 font-semibold my-4">
                {" "}
                Company Profile of Outer Wilds Ventures
              </p>
              <p className="hidden sm:block text-base text-justify text-gray-300">
                Inspired from the Outer Wilds video game (2020), developed by
                Mobius Digital and published by Annapurna Interactive
              </p>{" "}
            </div>
          </div>
        </a>
      </div>

      <div className="p-4 lg:p-8">
        <div className="block mb-4 sm:hidden">
          <p className="text-base text-justify text-gray-800">
            Inspired from the Outer Wilds video game (2020), developed by Mobius
            Digital and published by Annapurna Interactive
          </p>
        </div>

        <div className="mb-4">
          <p className="text-primary-orange">A Front End Project</p>
        </div>

        <div>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>
              The information declared in the website is not an official
              statement, it is only imaginary and unrelated towards the official
              Outer Wilds video game universe
            </li>
            <li>
              Sketches and illustrations on the website belongs to
              <a
                href="https://www.artstation.com/skings"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-primary-orange"> Sebastian Kings</span>
              </a>
            </li>
            <li>
              Images from the game are taken from the Outer Wilds video game
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <a
            href="https://owventures-cpy-profile.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border-b border-primary-orange hover:text-primary-orange"
          >
            Dive in and explore the company profile here!
          </a>
        </div>
      </div>
    </>
  );
}
