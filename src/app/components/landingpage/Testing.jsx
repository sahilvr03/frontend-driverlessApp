import { FaUncharted } from "react-icons/fa";
import Image from "next/image";

const Services = () => (
  <section className="mt-40">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        {/* Awarded Agency */}
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <i className="fas fa-award"></i>
              </div>
              <h6 className="text-xl font-semibold">Awarded Agency</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
              </p>
            </div>
          </div>
        </div>

        {/* Free Revisions */}
        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                <i className="fas fa-retweet"></i>
              </div>
              <h6 className="text-xl font-semibold">Free Revisions</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Keep your user engaged by providing meaningful information. Remember that by this time, the user is curious.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Company */}
        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h6 className="text-xl font-semibold">Verified Company</h6>
              <p className="mt-2 mb-4 text-gray-600">
                Write a few lines about each one. A paragraph describing a feature will be enough. Keep your user engaged!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Working with us is a pleasure */}
      <div className="flex flex-wrap items-center mt-10">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <FaUncharted className="text-xl" /> {/* Using FaUserFriends icon */}
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Dont let your users guess by attaching tooltips and popovers
            to any element. Just make sure you enable them first via JavaScript.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            The kit comes with three pre-built pages to help you get started faster. You can change the text and images and
            youre good to go. Just make sure you enable them first via JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            className="font-bold text-gray-800 mt-8"
          >
            Check it out
          </a>
        </div>

        {/* Image and Text Block */}
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-500"
            style={{ height: "80vh", overflow: "hidden" }}
          >
            <Image
              alt="..."
              src="/images/picture1.jpeg"
              className="w-full align-middle rounded-t-lg object-cover h-full"
              height={902}
              width={802}
            />
            <blockquote
              className="relative p-4 mb-4"
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              ></svg>
              <h4 className="text-xl font-bold text-white">
                Top Notch Services
              </h4>
              <p className="text-md font-light text-white">
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
