import Nginep from "./_components/Nginep";
import OuterWilds from "./_components/OuterWilds";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-[1536px] mt-20 mx-auto">
      <div className="flex flex-col gap-8 py-12 px-4">
        <OuterWilds />
        <div className="h-[4px] w-[200px] sm:w-[400px] bg-primary-orange my-10 bg-opacity-60"></div>
        <Nginep />
      </div>
    </div>
  );
};

export default Projects;
