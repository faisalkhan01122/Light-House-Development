import { MailMinus, MessageSquare, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  const img =
    "https://quiety-vue.themetags.com/img/contact-us-img-2.d573bf86.svg";
  return (
    <>
      <div className="h-[60vh]  bg-[#44160a] ">
        <div className="container  ">
          <h1 className="text-4xl text-white font-bold pt-10">Contact Us </h1>{" "}
          <br />
          <p className="text-white text-2xl opacity-50 ">
            Seamlessly actualize client-based users after out-of-the-box value
            data <br /> through frictionless expertise. Proactively coordinate
            quality quality <br /> vectors vis-a-vis supply chains. Quickly
            engage client-centric web <br /> services.
          </p>
        </div>
      </div>
      <div className="container h-[200vh]">
        <div className="grid grid-cols-3 justify-center items-center gap-5  pt-20">
          <div className=" h-[50vh] border-2 rounded-lg flex flex-col justify-center items-center gap-2">
            <MessageSquare className="  text-xl" />
            <h1 className="text-2xl font-semibold">Chat with us</h1>
            <p className=" opacity-50">
              We've got live Social Experts <br />
              waiting to help you monday to <br /> friday from 9am to 5pm EST.
            </p>{" "}
            <br />
            <button className="btn">Chat With Us</button>
          </div>
          <div className="h-[50vh] border-2 rounded-lg ">
            <div className=" h-[50vh] border-2 rounded-lg flex flex-col justify-center items-center gap-2">
              <MailMinus className="text-xl" />
              <h1 className="text-2xl font-semibold">Email with us</h1>
              <p className=" opacity-50 text-center">
                Simply drop us an email at <br /> hellothemetags@gmail.com{" "}
                <br /> and you'll receive a reply within <br /> 24 hours
              </p>{" "}
              <br />
              <button className="btn">Email With Us</button>
            </div>
          </div>
          <div className="h-[50vh] border-2 rounded-lg ">
            <div className=" h-[50vh] border-2 rounded-lg flex flex-col justify-center items-center gap-2">
              <Phone />
              <h1 className="text-2xl font-semibold">Give us a call</h1>
              <p className=" opacity-50 text-center">
                Give us a ring. Our Experts are <br /> standing by monday to
                friday <br />
                from 9am to 5pm EST.
              </p>{" "}
              <br />
              <button className="btn">00-976-455-356</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 pt-20">
          <div>
            <h1 className="text-2xl font-bold pl-10">
              Talk to Our Sales & Marketing <br />
              Department Team
            </h1>{" "}
            <br />
            <br />
            <p className=" opacity-50 pl-10">
              Collaboratively promote client-focused convergence vis-a-vis{" "}
              <br />
              customer directed alignments via standardized infrastructures.
            </p>{" "}
            <br />
            <form className="max-w-lg mx-auto h-96 mt-20 pt-5 bg-white shadow-md rounded">
              <div className="mb-4 flex justify-center items-center gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder=" First Name"
                    className="shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder=" Last Name"
                    className="shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 flex justify-center items-center gap-3">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone *
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder=" Phone"
                    className="shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="text"
                    value=""
                    placeholder="Enter Email"
                    className="shadow appearance-none border-2 rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <textarea
                name="Message"
                placeholder="Meassage"
                className=" h-20 border-2 rounded-lg w-[85%] ml-10  "
                id=""
              ></textarea>{" "}
              <br />
              <br />
              <button type="submit" className="btn w-[85%] ml-10 ">
                Git In Touch
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center ">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
