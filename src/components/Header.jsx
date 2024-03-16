import bannerImage from "../assets/images/banner.png";

const Header = () => {
  return (
    <div className="mb-10 relative bg-black rounded-xl">
      <img
        src={bannerImage}
        alt="Banner Image"
        className="opacity-70 min-h-80"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white p-5 w-full md:w-[70%]">
        <h3 className="text-lg sm:text-3xl font-bold mb-3">
          Explore Delicious Recipes Culinary Creations for Every Palate
        </h3>
        <p className="text-sm md:text-base font-light mb-4">
          Discover a diverse collection of mouthwatering recipes catering to all
          tastes and skill levels on our immersive culinary platform.
        </p>

        <div className="flex gap-2 justify-center">
          <button className="bg-[#7951ff] text-white border border-[#7951ff] rounded-full py-1.5 px-4 hover:bg-transparent">
            Explore Now
          </button>
          <button className="bg-transparent text-white border border-white rounded-full py-1.5 px-4 hover:bg-[#7951ff]">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
