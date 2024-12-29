import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { IoStarSharp } from "react-icons/io5";
// import Link from "next/link"

export default function Tracks() {
  const cards = [
    {
      id: 1,
      title: "FullStack Development",
      price: "$98",
      image: '/Group 337.png',
      topcenter: "top-center"
    },
    {
      id: 2,
      title: "FrontEnd Development",
      price: "$98",
      image: '/Group 337.png',
    },

    {
      id: 3,
      title: "BackEnd Development",
      price: "$98",
      image: '/Group 337.png',
    },
  ];
  return (
    <>

      <section className="px-5 
                          lg:px-16 
                          py-24"
      >
      <div className=" flex 
                       justify-center 
                       md:justify-between 
                       flex-wrap 
                       gap-y-10 
                       mt-20"
       >
        {cards.map((card) => (
          <div
            key={card.id}
            className="border 
                       border-lightGray-10 
                       p-4 
                       max-w-[380px] 
                       md:max-w-[48%] 
                       lg:max-w-[31%]"
           >
            <Image 
                  src={card.image} 
                  alt="" 
                  className="rounded-md w-full mb-3" 
                  width={100} 
                  height={100}
            />

            <div className="pt-4 relative">
            <ul className=" list-none relative">
            <li className="ml-1 product-head ">
            <h3 className="text-lg 
                           font-medium 
                           max-w-[70%]"
            >
              {card.title}
            </h3>

            <span className="absolute top-0 bottom-0 flex items-center right-0 font-medium text-base">
                    4 months
                  </span>
                  </li>
                  </ul>

                  <p className=" text-base pt-2">
                The training targets people with basic or no experience in a
                particular sector in the I.T industry, for student aspiring to
                work.
              </p>
            {/* <p className="text-sm text-gray-600">{card.price}</p> */}
            <div className="flex items-center absolute top-0 left-[14rem]">
              {/* Map five stars */}
              {Array(5)
              .fill(null)
              .map((_, index) => (
                <IoStarSharp key={index} className="w-5 h-5 text-yellow-500" />
              ))}
            

            </div>

            <div className="w-[19rem] lg:w-[100%] h-[1px] bg-[#ACACAC] my-4"></div>
            <div className="text-[#ACACAC] flex justify-between w-[20rem]">
            <div className="flex items-center text-[1rem]"><FaRegClock className="text-black"/>22hr 30min</div>
            <div className="flex items-center text-[1rem]"><CiVideoOn className="text-black"/>34 Courses</div>
            <div className="flex items-center text-[1rem]"><HiDownload className="text-black"/>250 Sales</div>
            </div>
            <div className=" flex justify-between items-center pt-8">
                <p className=" font-medium text-lg">₦250,000</p>
                {/* <Link href={/}> */}
                  <Button
                    className="bg-[#FF7426]"
                    type={"button"}
                  >
                    Start Now
                    </Button>
                {/* </Link> */}
              </div>
          </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
}
