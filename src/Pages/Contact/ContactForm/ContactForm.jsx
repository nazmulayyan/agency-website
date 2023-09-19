import Title from "../../../Components/Title/Title";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import MapLocation from "./MapLocation";

const ContactForm = () => {
  return (
    <>
      <div>
        <div className="container mx-auto mt-20">
          <div className="md:flex bg-[#f6f6f6] md:p-16 p-2 gap-10 md:mb-20 mb-10">
            {/* Contact form */}
            <div className="md:w-4/7">
              <div>
                <h2 className="md:text-5xl text-2xl font-bold mb-5 ml-5 pt-5 md:ml-0">
                  Write Us Something
                </h2>
              </div>

              {/* Input fields */}
              <div>
                <div className="md:flex gap-5 mb-5">
                  <div className="mx-7 md:mx-0">
                    <h2 className="text-gray-500">
                      Your Name <span className="text-red-500">*</span>
                    </h2>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name here"
                      id=""
                      className="p-3 w-[250px] md:w-[300px] outline-[#ff497c]   border border-gray-300 mt-2"
                    />
                  </div>

                  <div className="mx-7 md:mx-0 mt-2 md:mt-0">
                    <h2 className="text-gray-500">
                      Your Email <span className="text-red-500">*</span>
                    </h2>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your name here"
                      id=""
                      className="p-3 w-[250px] md:w-[300px] outline-[#ff497c]   border border-gray-300 mt-2"
                    />
                  </div>
                </div>

                <div className="md:flex gap-5 mb-5">
                  <div className="mx-7 md:mx-0">
                    <h2 className="text-gray-500">
                      Your Subject <span className="text-red-500">*</span>
                    </h2>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your name here"
                      id=""
                      className="p-3 w-[250px] md:w-[300px] outline-[#ff497c]   border border-gray-300 mt-2"
                    />
                  </div>
                  <div className="mx-7 md:mx-0 mt-2 md:mt-0">
                    <h2 className="text-gray-500">Contact Number</h2>
                    <input
                      type="text"
                      name="number"
                      placeholder="Your name here"
                      id=""
                      className="p-3 w-[250px] md:w-[300px] outline-[#ff497c]   border border-gray-300 mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Message textarea */}
              <div className="mx-7 md:mx-0 mt-2 md:mt-0">
                <h2 className="text-gray-500">
                  Message <span className="text-red-500">*</span>
                </h2>
                <textarea
                  name=""
                  id=""
                  className="p-3 md:w-[620px] w-[250px] h-24 outline-[#ff497c]   border border-gray-300 mt-2"
                  placeholder="Tell us a few words"
                ></textarea>
              </div>

              {/* Message button */}
              <button className="bg-buttonBg py-4 mt-5 px-4 ml-7 md:ml-0 rounded-md hover:bg-black transition ease-in text-white font-semibold uppercase">
                Send Message
              </button>
            </div>

            {/* Contact details */}
            <div className="md:w-3/6 bg-slate-900 md:p-14 p-10 rounded-md mt-10 md:mt-0">
              <div>
                <Title subheading={"Contact"}></Title>
              </div>

              <div>
                <h2 className="text-white text-2xl font-bold">
                  Our Contact Detail
                </h2>
              </div>

              {/* Contact info */}
              {/* email */}
              <div className="flex items-center gap-5 md:mt-10 mt-5 border-b-2  border-slate-700 pb-5">
                <div>
                  <img
                    src="https://flywebhtml.websitelayout.net/img/icons/04.png"
                    alt=""
                    className="bg-slate-500 p-5"
                  />
                </div>
                <div className="text-white">
                  <h2>Send E-Mail</h2>
                  <h3>info@example.com</h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 md:mt-10 mt-5 border-b-2  border-slate-700 pb-5">
                <div>
                  <img
                    src="https://flywebhtml.websitelayout.net/img/icons/05.png"
                    alt=""
                    className="bg-slate-500 p-5"
                  />
                </div>
                <div className="text-white">
                  <h2>Call Anytime</h2>
                  <h3>+44 205-658-1823</h3>
                </div>
              </div>

              {/* location */}
              <div className="flex items-center gap-5 md:mt-10 mt-5  pb-5">
                <div>
                  <img
                    src="https://flywebhtml.websitelayout.net/img/icons/03.png"
                    alt=""
                    className="bg-slate-500 p-5"
                  />
                </div>
                <div className="text-white">
                  <h2>Location</h2>
                  <h3>66 Guild Street 512B,</h3>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-5 ">
                <div>
                  <FaFacebook
                    className="text-white transition ease-in hover:text-[#ff497c]"
                    size={"30px"}
                  ></FaFacebook>
                </div>
                <div>
                  <AiFillTwitterCircle
                    className="text-white transition ease-in hover:text-[#ff497c]"
                    size={"30px"}
                  ></AiFillTwitterCircle>
                </div>

                <div>
                  <AiFillLinkedin
                    className="text-white transition ease-in hover:text-[#ff497c]"
                    size={"30px"}
                  ></AiFillLinkedin>
                </div>

                <div>
                  <FaPinterest
                    className="text-white transition ease-in hover:text-[#ff497c]"
                    size={"30px"}
                  ></FaPinterest>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {/* Google map */}
        <MapLocation></MapLocation>
      </div>
    </>
  );
};

export default ContactForm;
