import { Facebook, Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="h-[50px] p-2 flex justify-around items-center w-full bg-blue-600 ">
      <div>
        <h5 className="text-white text-[18px]">BE IN TOUCH WITH US:</h5>
      </div>
      <div className="flex">
        <input
          type="email"
          name="email"
          id="email"
          className="p-1 outline-none h-[28px] text-12px"
          placeholder="Enter your e-mail"
        />
        <button className="bg-black text-[12px] text-white p-1 h-[28px] flex items-center justify-center">
          JOIN US
        </button>
      </div>
      <div className="text-white">
        <ul className="flex gap-x-2 ">
          <li>
            <Facebook size={24} />
          </li>
          <li>
            <Mail size={24} />
          </li>
          <li>
            <Instagram size={24} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
