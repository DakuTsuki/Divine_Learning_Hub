import Image from "next/image";
import bgImg from "../../../../public/OBJECTS.png";
import purple from '../../../../public/Purple.png'
import heart from '../../../../public/hearts 1.png'

export default function Experince() {
  return (
    <div>
      <div className="mt-6 bg-[#FDF8EE] w-full h-full relative flex  flex-col lg:flex-row items-center gap-[6rem] p-[2rem_1rem] md:p-[2rem_9rem] lg:p-[2rem_10rem]">
        <Image
          src={bgImg}
          alt="Background_Image"
          className="w-[50%] lg:w-[40%]"
        />

        <div className=" flex 
                         flex-col 
                         gap-[1.5rem]"
        >
          <h1 className="text-[1.8rem] 
                         font-extrabold"
           >
            Premium <span className="text-[#FF7426]">Learning </span> 
            Experience
          </h1>

          <div className="flex 
                          w-[130%] 
                          gap-4"
          >
            <div className="relative flex">
              <Image 
                    src={purple} 
                    alt="purple_background" 
                    className="w-[]"
              />
              <Image 
                    src={heart} 
                    alt="Heart_Icon" 
                    className="absolute top-8 left-6"
              />
            </div>
            <div>
              <h3 className="pt-[1.4rem] 
                             font-semibold 
                             pb-2"
              >
                Easily Accessible
              </h3>
              <p className="text-[#8A8A8A]
                              w-[80%]"
              >
                Learning Will fell Very Comfortable With Courslab.
             </p>
            </div>
          </div>
          <div className="flex 
                          w-[130%] 
                          gap-4"
          >
            <div className="relative flex">
              <Image 
                   src={purple} 
                   alt="purple_background" 
                   className=""
              />
              <Image 
                    src={heart} 
                    alt="Heart_Icon" 
                    className="absolute top-8 left-6"
              />
            </div>
            <div>
              <h3 className="pt-[1.4rem] 
                            font-semibold 
                            pb-2"
              >
                Easily Accessible
              </h3>
              <p className="text-[#8A8A8A] 
                              w-[80%]"
              >
                Learning Will fell Very Comfortable With Courslab.
              </p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}
