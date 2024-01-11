import React,{useState} from "react";

function Navbar() {

    const [toggle, setToggle] = useState(false)
    
    const toggleHandler = () => {
        setToggle(!toggle)
    }

  return (
    <div className="Navbar container xl:p-10 p-5">
      <div className="flex xl:flex-row xl:justify-between flex-col">
        <div className="flex flex-row xl:space-x-10 justify-between w-full xl:w-min">
          <div>
            <p className="font-poppins text-[36px] font-bold my-auto">
              Shortly
            </p>
          </div>

          <div className="xl:flex hidden flex-row xl:space-x-5">
            <button className="font-poppins text-Grayish-Violet hover:text-Very-Dark-Blue duration-300 font-bold">
              Features
            </button>
            <button className="font-poppins text-Grayish-Violet hover:text-Very-Dark-Blue duration-300 font-bold">
              Pricing
            </button>
            <button className="font-poppins text-Grayish-Violet hover:text-Very-Dark-Blue duration-300 font-bold">
              Resources
            </button>
          </div>

          <div className="xl:hidden flex justify-center items-center">
            <button onClick={toggleHandler}>
              <img
                src="/menu_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                className="w-10 h-10"
              />
            </button>
          </div>
        </div>

       {toggle && <div className="mt-5 Hamburblock z-10">
          <div className="xl:hidden w-full h-96 bg-Dark-Violet rounded-lg ">
            <div className="flex flex-col space-y-8 xl:p-10 p-5  text-[18px]">
              <button className="font-poppins text-white hover:text-Very-Dark-Blue duration-300 font-bold">
                Features
              </button>
              <button className="font-poppins text-white hover:text-Very-Dark-Blue duration-300 font-bold">
                Pricing
              </button>
              <button className="font-poppins text-white hover:text-Very-Dark-Blue duration-300 font-bold">
                Resources
              </button>
              
              <hr className="w-full h-[1px] mx-auto my-4 rounded bg-Grayish-Violet border-0 z-0"/>

              <button className="font-poppins font-bold  text-white rounded-3xl duration-300  ">
                Login
              </button>
              <button className="font-poppins font-bold  text-white rounded-3xl duration-300 bg-cyan py-2 px-5">
                Sign Up
              </button>
            </div>
          </div>
        </div>
}

        <div className="xl:flex hidden flex-row my-auto space-x-5">
          <button className="font-poppins font-bold text-z py-2 px-5 text-Grayish-Violet hover:bg-cyan hover:text-white rounded-3xl duration-300">
            Login
          </button>
          <button className="font-poppins font-bold text-z py-2 px-5 hover:opacity-50 bg-cyan text-white rounded-3xl duration-300">
            Sign Up
          </button>
        </div>

        <div className="xl:hidden flex"></div>
      </div>
    </div>
  );
}

export default Navbar;
