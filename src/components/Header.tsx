import Working from "./Working";
import Workingmb from "./Workingmobile";
function Header() {
  return (
    <div className="flex flex-row container xl:p-10 p-5 h-full ">
      <div className="flex xl:my-40 flex-col xl:flex-row">
        <div className="xl:hidden">
          <img
            src="/illustration-working.svg"
            alt=""
            className="w-[1000px] h-full"
          />
        </div>

        <div className="flex flex-col xl:text-left justify-center items-center xl:justify-normal xl:items-baseline">
          <p className="xl:text-[72px] font-poppins font-bold xl:text-left xl:leading-[86px] text-[42px] leading-[50px]">
            More than just <br />
            <span className="inline-block">shorter links</span>
          </p>
          
            <p className="xl:text-left text-Grayish-Violet font-poppins">
              Build your brand's recognition and
              <br className="xl:hidden" />
               get detailed <br className="xl:block hidden"/>insights on how 
               your <br className="xl:hidden"/>links are performing.
            </p>
            <div className="pt-5 text-left">
              <button className="font-poppins font-semibold text-z xl:py-2 xl:px-5 px-10 py-[10px]  hover:opacity-50 bg-cyan text-white rounded-3xl duration-300">
                Get Started
              </button>
            </div>
          
        </div>
        <div className="hidden xl:absolute xl:block right-0 top-[25%]">
          <Working />
        </div>
      </div>
      
    </div>
    
  );
}
export default Header;
