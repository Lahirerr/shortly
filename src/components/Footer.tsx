function Footer() {
  return (
    <div className="bg-Very-Dark-Violet h-full xl:p-10 p-5">
      <div className="flex xl:flex-row flex-col container xl:justify-between xl:space-x-44 space-y-10 xl:space-y-0 items-center justify-center xl:items-start">
        <div className="flex xl:p-10">
          <p className="font-poppins font-bold text-[36px] text-white">
            Shortly
          </p>
        </div>
        <div className="flex xl:flex-row flex-col w-full xl:space-x-32 xl:p-12 xl:space-y-0 space-y-14">
          <div className="flex flex-col space-y-5 xl:text-left">
            <p className="text-white font-poppins font-bold text-[18px] xl:p-0 p-2">
              Features
            </p>
            <ul className="space-y-4 xl:space-y-4">
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Link shortening
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Branded Links
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Analytics
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5 xl:text-left">
            <p className="text-white font-poppins font-bold text-[18px] xl:p-0 p-2">
              Resources
            </p>
            <ul className="space-y-4 xl:space-y-4">
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Blog
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Developers
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Support
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5 xl:text-left">
            <p className="text-white font-poppins font-bold text-[18px] xl:p-0 p-2">
              Company
            </p>
            <ul className="space-y-4 xl:space-y-4">
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                About
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Our Team
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Careers
              </li>
              <li className="mb-[6px] text-Gray font-poppins  hover:text-cyan">
                Contact
              </li>
            </ul>
          </div>

          
            <div className="flex flex-row  space-x-5  justify-center ">
                <a href="" className="text-white h-10 w-10 ">
                <img src="/icon-facebook.svg" alt="" className="" />
                </a>
              
                <a href="" className="text-white h-10 w-10 mt-[2px]">
                <img src="/icon-twitter.svg" alt="" className="" />
                </a>

                <a href="" className="text-white h-10 w-10  ">
                <img src="/icon-pinterest.svg" alt="" className="" />
                </a>

                <a href="" className="text-white h-10 w-10 ">
                <img src="/icon-instagram.svg" alt="" className="" />
                </a>
            </div>
          
        </div>
      </div>
    </div>
  );
}
export default Footer;
