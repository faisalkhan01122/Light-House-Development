import React from "react";

const GetStart = () => {
  const svg = "https://quiety-vue.themetags.com/img/google-icon.ab6de191.svg";
  return (
    <div className="bg-[#44160a] h-[150vh] pt-20">
      <form className="max-w-lg mx-auto h-[80vh] mt-20 pt-5 bg-white shadow-md rounded-lg">
        <div className="mb-4 flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-semibold">Nice to See You Again</h1>
          <p className="opacity-45">Please log in to access your account.</p>
          <button className="px-2 py-3 bg-white text-black border-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-3">
            <img src={svg} alt="" /> Sign In With Google{" "}
          </button>
          <h1 className="text-center text-xl">Or</h1>
          <div className="w-full ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email *
            </label>
            <input
              type="text"
              value=""
              placeholder="Enter Email"
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password *
            </label>
            <input
              type="text"
              value=""
              placeholder="Enter Password"
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full "></div>
        </div>

        <button type="submit" className="btn w-[85%] ml-10 ">
          Git In Touch
        </button>
      </form>
    </div>
  );
};

export default GetStart;
