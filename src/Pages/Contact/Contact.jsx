import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="relative">
        {/* Contact page banner */}
        <img
          src="https://flywebhtml.websitelayout.net/img/banner/page-title.jpg"
          alt=""
          className="w-full h-[250px] md:h-full bg-cover bg-no-repeat"
        />

        {/* Overlay texts on contact page banner */}
        <div className="absolute  bg-slate-900 bg-opacity-60 top-0 left-0 w-full h-full overlay mb-20">
          <div className="container md:mx-28">
            {/* banner texts here */}
            <div className="">
              <h2 className="md:text-7xl text-3xl text-white font-bold md:mt-48 mt-28">
                Contact Us
              </h2>
              <div className="flex items-center gap-5">
                <h3 className="md:text-2xl font-semibold mt-2 text-white  after:bg-[#ff497c] after:w-[10px]">
                  Home
                </h3>

                <p className="bg-buttonBg py-[2px] mt-2 px-4 rounded-sm"></p>

                <h4 className="md:text-2xl font-semibold mt-2 text-gray-300">
                  Contact Us
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact form */}
      <ContactForm></ContactForm>
    </>
  );
};

export default Contact;
