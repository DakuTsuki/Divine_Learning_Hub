import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { IoStarSharp } from "react-icons/io5";

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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between p-[2rem_6rem] lg:p-[10rem_6rem] gap-11 md:w-[65rem] lg:w-[94rem]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white w-[27rem] h-[25rem] rounded-[14px] shadow-lg backdrop-blur-md"
            data-aos="zoom-in"
            data-aos-delay="200"
             data-aos-mirror="true"
             data-aos-once="false">
            <Image src={card.image} alt="" className="rounded-md w-full mb-3" width={100} height={100}/>

            <div className="p-[1rem_1rem]">
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.price}</p>
            <div className="flex items-center mt-[-2.5rem] float-right ">
              {/* Map five stars */}
              {Array(5)
              .fill(null)
              .map((_, index) => (
                <IoStarSharp key={index} className="w-5 h-5 text-yellow-500" />
              ))}
            

            </div>

            <div className="w-[24rem] h-[1px] bg-[#ACACAC] my-4"></div>
            <div className="text-[#ACACAC] flex justify-between w-[20rem]">
            <div className="flex items-center text-[1rem]"><FaRegClock className="text-black"/>22hr 30min</div>
            <div className="flex items-center text-[1rem]"><CiVideoOn className="text-black"/>34 Courses</div>
            <div className="flex items-center text-[1rem]"><HiDownload className="text-black"/>250 Sales</div>
            </div>
            <Button className="bg-[#FF7426] w-[13rem] h-[3.5rem] mt-[0.5rem] rounded-[50px] ml-[5rem]">Join Course</Button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
