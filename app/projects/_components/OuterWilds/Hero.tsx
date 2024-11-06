import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src="/projects/owv-hero.webp"
          alt="Fading Image"
          width={800}
          height={800}
          className="absolute top-0 left-0 w-full h-full object-cover object-left"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-white"></div>
        <div className="absolute top-0 right-4 sm:right-0 w-3/4 sm:w-1/2 h-full p-8 flex flex-col justify-start items-start">
          <h2 className="text-3xl text-orange-900 font-medium mt-4">Project Outer Wilds Ventures</h2>
          <div className="">
            <p className="text-lg font-semibold my-4">
              {" "}
              Company Profile of Outer Wilds Ventures
            </p>
            <p className="hidden sm:block text-base text-justify text-gray-800">
              Inspired from the Outer Wilds video game (2020), developed by
              Mobius Digital and published by Annapurna Interactive
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-8">
        <div className="block mb-4 sm:hidden">
          <p className="text-base text-justify text-gray-800">
            Inspired from the Outer Wilds video game (2020), developed by Mobius
            Digital and published by Annapurna Interactive
          </p>{" "}
        </div>

        <div className="flex flex-col mb-4 gap-4">
          <p className="text-sm text-justify">
            The information declared in the website is not an official
            statement, it is only imaginary and unrelated towards the official
            Outer Wilds video game universe.
          </p>
          <p className="text-sm text-justify">
            Sketches and illustrations on the website belongs to
            <Link href="https://www.artstation.com/skings">
              <span className="text-primary-orange"> Sebastian Kings</span>.
            </Link>
            <br />
            Images from the game are taken from the Outer Wilds video game.
          </p>
        </div>

        <div className="">
          <Link
            href="https://owventures-cpy-profile.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border-b border-primary-orange hover:text-primary-orange"
          >
            Dive in and explore the company profile here!
          </Link>
        </div>
      </div>
    </>
  );
}
