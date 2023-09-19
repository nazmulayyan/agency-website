import TitleCover from "../../Components/TitleCover/TitleCover";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="relative">
        {/* Contact page banner */}
        <TitleCover serviceText='Our service' pageTitle='Our service'></TitleCover>
      </div>
      {/* Contact form */}
      <ContactForm></ContactForm>
    </>
  );
};

export default Contact;
