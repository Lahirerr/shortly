import { log } from "console";
import React, { useState } from "react";

interface Link {
  FullPath: string;
  ShortPath: string;
}

function Second() {
  const [link, setLink] = useState("");
  const [newlink, setNewLink] = useState<Link[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  const url = "http://localhost:8080/shortlink";

  const sendLink = {
    FullPath: link,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendLink),
      });
      const data = await res.json();
      console.log(data);
      setNewLink((prevLinks) => [...prevLinks, data]);
      
    } catch (error) {
      console.error("Error is ", error);
    }
  };

  const copyLink = (linkCopy: string) => {
    navigator.clipboard.writeText(linkCopy).then(() => {
      setIsCopied(true);
    });
    
  };

  return (
    <div className="bg-gray-light h-full flex flex-col items-center justify-center relative p-20">
      <div className="flex justify-center items-center absolute top-[-80px]">
        <form
          onSubmit={handleSubmit}
          className="xl:w-[1000px] w-[300px] xl:p-10 p-6 rounded-lg bg-boost-pattern bg-cover bg-center bg-no-repeat xl:space-x-4 bg-Dark-Violet  flex xl:block flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            required
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="xl:px-7 xl:py-4  p-2 xl:rounded-xl rounded-lg xl:w-10/12 placeholder-Very-Dark-Blue placeholder-opacity-50 font-poppins"
          />

          <button
            type="submit"
            className="font-poppins text-z xl:py-2 xl:px-5 py-2 px-3 hover:opacity-50 bg-cyan text-white rounded-lg duration-300"
          >
            Shorten it!
          </button>
        </form>
      </div>

      <div className="p-5 flex flex-col space-y-5">
        {newlink.map((newlink, index) => (
          <div
            key={index}
            className="xl:w-[1000px] w-[300px] xl:h-[80px] xl:p-10 rounded-lg bg-white font-poppins text-[15px] flex xl:flex-row flex-col xl:justify-between items-center p-2"
          >
            <div className="xl:flex xl:flex-row xl:justify-between xl:w-full text-left xl:text-start xl:p-0 p-4 xl:space-y-0 space-y-2">
            <div className="my-auto">
              <p>{newlink.FullPath}</p>
            </div>
            
            <hr className="w-[300px] h-[2px] bg-Gray border-0 rounded absolute z-0 left-[38px] xl:hidden " />

            <div className="flex xl:flex-row flex-col font-poppins xl:items-center xl:space-x-5 xl:space-y-0 space-y-2 pt-3 xl:pt-0">
              <div className="">
              <p className="text-cyan ">{newlink.ShortPath}</p>
              </div>
              
              <button
                onClick={() => copyLink(newlink.ShortPath)}
                className={`font-poppins text-[15px] xl:py-2 xl:px-4 w-full xl:w-[90px] h-[35px] hover:opacity-50 rounded-lg duration-300 text-white ${
                  isCopied ? "bg-Dark-Violet" : "bg-cyan"
                }`}
              >
               {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
            </div>
            
          </div>
        ))}
      </div>

      <div className="flex xl:items-center container flex-col space-y-20 justify-center items-center xl:space-y-0">
        <div className="xl:w-[550px] w-[350px] pt-5 xl:pt-0">
          <p className="font-poppins font-bold xl:text-[36px] text-[24px]">
            Advanced Statictics
          </p>
          <p className="font-poppins text-[18px] text-Grayish-Violet">
            Track how your links are performing <br className="xl:hidden" />
            across the web with <br className="hidden xl:block" />
            our advanced <br className="xl:hidden" />
            statictics dashboard
          </p>
        </div>
        <div className="flex xl:flex-row xl:space-x-10 xl:relative flex-col justify-center items-center">
          <div className="bg-white w-[300px] h-[230px] relative z-[1]">
            <div className=" bg-Dark-Violet rounded-[50%] absolute xl:w-16 xl:h-16 w-20 h-20 top-[-30px] xl:left-5 left-[6.8rem] flex items-center justify-center ">
              <img
                src="/icon-brand-recognition.svg"
                alt=""
                className="xl:w-8 w-10"
              />
            </div>
            <div className="p-12 xl:mt-0 mt-5 flex flex-col space-y-2">
              <p className="font-poppins font-bold xl:text-left">
                Brand recognition
              </p>
              <p className="xl:text-left">
                Lorem ipsum dolor, sit amet consectetur dignissimos rerum
                consequuntur? Maxime cum incidunt at.
              </p>
            </div>
          </div>

          <hr className="w-[30rem] h-[0.4rem] mx-auto my-4 bg-cyan border-0 rounded absolute z-0 left-48 top-50 hidden xl:block" />
          <div className="border-l-8 border-l-cyan h-[30rem] absolute z-0 xl:hidden"></div>

          <div className="bg-white w-[300px] h-[230px] relative xl:mt-16 mt-[80px]">
            <div className=" bg-Dark-Violet rounded-[50%] absolute xl:w-16 xl:h-16 w-20 h-20 top-[-30px] xl:left-5 left-[6.8rem] flex items-center justify-center">
              <img
                src="/icon-detailed-records.svg"
                alt=""
                className="xl:w-8 w-10"
              />
            </div>
            <div className="p-12 flex flex-col space-y-2 xl:mt-0 mt-5">
              <p className="font-poppins font-bold xl:text-left">
                Detailed Records
              </p>
              <p className="xl:text-left">
                Lorem ipsum dolor, sit amet consectetur dignissimos rerum
                consequuntur? Maxime cum incidunt at.
              </p>
            </div>
          </div>

          <div className="bg-white w-[300px] h-[230px] relative xl:mt-32 mt-[80px]">
            <div className=" bg-Dark-Violet rounded-[50%] absolute xl:w-16 xl:h-16 w-20 h-20 top-[-30px] xl:left-5 left-[6.8rem] flex items-center justify-center">
              <img
                src="/icon-fully-customizable.svg"
                alt=""
                className="xl:w-8 w-10"
              />
            </div>
            <div className="p-12 flex flex-col space-y-2 xl:mt-0 mt-5">
              <p className="font-poppins font-bold xl:text-left">
                Fully Customizable
              </p>
              <p className="xl:text-left">
                Lorem ipsum dolor, sit amet consectetur dignissimos rerum
                consequuntur? Maxime cum incidunt at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Second;
