import Contact from "./contact";
const Footer = () => {
  return (
    <footer className="w-full h-fit  ">
      <Contact />
      <div className="flex flex-col gap-y-8 py-10 container">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full gap-y-10 gap-x-10">
          <div className="flex flex-col items-center md:fle-row md:items-start">
            <h3 className="font-semibold">Categories</h3>
            <ul className="text-[12px] flex flex-col items-center md:items-start">
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:fle-row md:items-start">
            <h3 className="font-semibold">Links</h3>
            <ul className="text-[12px]  flex flex-col items-center md:items-start">
              <li>FAQ</li>
              <li>Pages</li>
              <li>Scores</li>
              <li>Compare</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:fle-row md:items-start">
            <h3 className="font-semibold">About</h3>
            <p className="text-justify text-[12px] max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              vero ducimus consequuntur, aperiam impedit veniam accusamus
              repellendus iste expedita voluptatibus odio.
            </p>
          </div>
          <div className="flex flex-col items-center md:fle-row md:items-start">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-justify text-[12px] max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              vero ducimus consequuntur, aperiam impedit veniam accusamus
              repellendus iste expedita voluptatibus odio.
            </p>
          </div>
        </div>
        <div className="flex justify-between h-[70px] w-full ">
          <div className="flex items-center gap-x-2 w-full">
            <h2 className="font-bold text-blue-600 text-[1.3rem]">MarkShop</h2>
            <small>&copy; 2024 All rights reserved.</small>
          </div>
          <div className="flex justify-end items-center w-full">
            <img
              src="/images/header/payment.png"
              alt=""
              className="w-[20rem]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
