import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Engineering */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-xl font-semibold text-primary">
                Bachlors In Engineering
              </h3>
              <p className="text-sm text-neutral font-semibold">2020 - 2024</p>
              <p className="text-sm text-neutral font-medium">CGPA - 8.5</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Lords Institute of Engineering and Technology, Hyderabad.
            </p>
          </div>

          {/* {Inter} */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Intermidiate
              </h3>

              <p className="text-sm text-neutral font-semibold">2018 - 2020</p>
              <p className="text-sm text-neutral font-medium">
                Percentage - 90%
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Sri Chandra Junior College, Hyderabad
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">SSC</h3>

              <p className="text-sm text-neutral font-semibold">2018</p>
              <p className="text-sm text-neutral font-medium">GPA - 8.7</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Anas Model High School, Hyderabad.
            </p>
            <p className="text-xs text-neutral text-justify">
              I have passed the Senior Secondary Certificate (SSC) with the
              highest result <b>GPA - 88</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
