
interface HeadingProps {
    title: string;
    description: string;
  }
  
  const Heading = ({ title, description }: HeadingProps) => {
    return (
      <>
        <div className="px-4 lg:px-4 flex items-center gap-x-3 mb-8 mt-2">
          <div>
            <h2 className="text-2xl text-black font-[900]">{title}</h2>
            <p className="text-xs text-black">{description}</p>
          </div>
        </div>
      </>
    );
  };
  export default Heading;
  