import { Oval } from "react-loader-spinner";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="bg-[#171a29] h-[340px] flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="relative">
            <Oval
              visible={true}
              height="65"
              width="65"
              color="#f0f0f0"
              secondaryColor="grey"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
          <img
            className="absolute h-8"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
            alt=""
          />
        </div>
        <p className="mt-8 text-2xl text-gray-300">
          Looking for great food near you...
        </p>
      </div>
      <div className="my-10  mx-40 flex justify-between">
        <div className="w-[254px] h-[600px] border mr-12">
          <div className="bg-gray-100 flex p-4">
            <div className="w-12 h-12 rounded-full bg-white mr-4"></div>
            <div className="bg-white w-32 h-3 my-4"></div>
          </div>
          <div className="flex p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mr-4"></div>
            <div className="bg-gray-100 w-32 h-3 my-4"></div>
          </div>
          <div className="flex p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mr-4"></div>
            <div className="bg-gray-100 w-32 h-3 my-4"></div>
          </div>
          <div className="flex p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mr-4"></div>
            <div className="bg-gray-100 w-32 h-3 my-4"></div>
          </div>
          <div className="flex p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mr-4"></div>
            <div className="bg-gray-100 w-32 h-3 my-4"></div>
          </div>
          <div className="flex p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mr-4"></div>
            <div className="bg-gray-100 w-32 h-3 my-4"></div>
          </div>
          <div className="flex p-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 mr-4"></div>
            <div className="bg-gray-100 w-32 h-3 my-4"></div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 w-32 h-3 my-4"></div>
          <div className="grid grid-cols-3 gap-10">
            <div className="mt-4 mb-8">
              <div className="w-[280px] h-[170px] bg-gray-100"></div>
              <div className="bg-gray-100 w-36 h-3 my-4"></div>
              <div className="bg-gray-100 w-28 h-3 my-4"></div>
            </div>

            <div className="card mt-4 mb-8">
              <div className="w-[280px] h-[170px] bg-gray-100"></div>
              <div className="bg-gray-100 w-36 h-3 my-4"></div>
              <div className="bg-gray-100 w-28 h-3 my-4"></div>
            </div>

            <div className="card mt-4 mb-8">
              <div className="w-[280px] h-[170px] bg-gray-100"></div>
              <div className="bg-gray-100 w-36 h-3 my-4"></div>
              <div className="bg-gray-100 w-28 h-3 my-4"></div>
            </div>

            <div className="card mt-4 mb-8">
              <div className="w-[280px] h-[170px] bg-gray-100"></div>
              <div className="bg-gray-100 w-36 h-3 my-4"></div>
              <div className="bg-gray-100 w-28 h-3 my-4"></div>
            </div>

            <div className="card mt-4 mb-8">
              <div className="w-[280px] h-[170px] bg-gray-100"></div>
              <div className="bg-gray-100 w-36 h-3 my-4"></div>
              <div className="bg-gray-100 w-28 h-3 my-4"></div>
            </div>

            <div className="card mt-4 mb-8">
              <div className="w-[280px] h-[170px] bg-gray-100"></div>
              <div className="bg-gray-100 w-36 h-3 my-4"></div>
              <div className="bg-gray-100 w-28 h-3 my-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
