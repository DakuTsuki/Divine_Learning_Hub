import Image from 'next/image'
import mergeImg from '../../../../public/Group (1).png'
import mergeImg2 from '../../../../public/Group (2).png'
import mergeImg3 from '../../../../public/Group (3).png'
import mergeImg4 from '../../../../public/Group (4).png'
import mergeImg5 from '../../../../public/Group (5).png'
import mergeImg6 from '../../../../public/Group (6).png'
import mergeImg7 from '../../../../public/Group (7).png'
import heroimg from  '../../../../public/OBJECTS.svg'
import yellowRing from '../../../../public/Ellipse 1.png'
import whiteBackground from '../../../../public/Rectangle 41.png'
import readyImg1 from '../../../../public/online-test 1.png'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaSearch } from "react-icons/fa";
 



export default function Hero(){
  return <div>
    <div className="bg-[#FDF8EE] w-full sm:h-[50vh] lg:h-[100vh] relative ">
      <Image src={mergeImg} className="absolute w-[60px] left-[426px]" alt='background_Image'/>
      <Image src={mergeImg2} alt='background_Image2'className="absolute w-[70px] left-[270px] top-[400.18px]"/>
      <Image src={mergeImg3} alt='background_Image3' className="absolute w-[85px] left-[700px] top-[33.18px]"/>
      <Image src={mergeImg4} alt='background_Image4' className="absolute w-[82px] left-[819px] top-[450.13px]"/>
      <Image src={mergeImg5} alt='background_Image5' className="absolute w-[93.51px] left-[1300.25px] top-[425.13px]"/>
      <Image src={mergeImg6} alt='background_Image6' className="absolute w-[93.51px] left-[1300.25px] top-[33.13px]"/>
      <Image src={mergeImg7} alt='background_Image7' className="absolute w-[60.51px] left-[1380.25px] top-[250.13px]"/>
      <Image src={yellowRing} alt='YellowRing' className='absolute w-[300px] left-[1098px] top-[65.13px] z-0'/>

 
      {/* HeroText */}
      <div className="flex flex-cols lg:flex-row justify-between items-center p-[100px_30px] lg:p-[100px_61px]">
        <div className="text-left">
          <h2 className="text-[2.7rem] md:text-[3rem] lg:text-[4rem] font-black leading-[3.75rem] lg:leading-[4.75rem]">The <span className="text-[#FF7426]">Smart</span> <br /> Choice for <span  className="text-[#FF7426]">Future</span>.</h2>
          <p className="text-[#8A8A8A] font-medium text-[1rem] lg:text-[20px] w-[23rem] md:w-[25rem] md:[36rem] lg:w-[39rem]">Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>

          <div className="p-[10px_21px] flex w-full max-w-[35rem] items-center space-x-2 bg-white rounded-[15px]">
          <FaSearch className='text-black text-[30px]'/>
      <Input type="email" placeholder="Email" className='bg-[transparent] border-none active:border-none'/>
      <Button type="submit">Subscribe</Button>
    </div>
        </div>

      {/* Image */}
      <Image src={heroimg} alt='Hero_Img' className="hidden lg:block w-[600px]"/>
      </div>

      <div className='w-[90%] h-[227px] bg-[#4D2C5E] absolute left-[5%] hidden lg:flex justify-between items-center rounded-[20px] p-[1%]'>
      <div className='flex'>
      <div className='flex '>
          <div className='relative flex'>
          <Image src={whiteBackground} alt='whitebackground' className='w-[13.3rem] h-[6rem]'/>
          <Image src={readyImg1} alt='onlineTest' className='absolute left-[20px] top-[20px]'/>
          </div>
          <div className='ml-3'>
            <h2 className='text-[23px] text-white font-semibold'>Learn The Latest Skills</h2>
            <p className='text-[13px] text-white w-[90%] font-thin leading-7 h-[100px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='relative flex'>
          <Image src={whiteBackground} alt='whitebackground' className='w-[13.3rem] h-[6rem]'/>
          <Image src={readyImg1} alt='onlineTest' className='absolute left-[20px] top-[20px]'/>
          </div>
          <div className='ml-3'>
            <h2 className='text-[23px] text-white font-semibold'>Learn The Latest Skills</h2>
            <p className='text-[13px] text-white w-[90%] font-thin leading-7 h-[100px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='relative flex'>
          <Image src={whiteBackground} alt='whitebackground' className='w-[13.3rem] h-[6rem]'/>
          <Image src={readyImg1} alt='onlineTest' className='absolute left-[20px] top-[20px]'/>
          </div>
          <div className='ml-3'>
            <h2 className='text-[23px] text-white font-semibold'>Learn The Latest Skills</h2>
            <p className='text-[13px] text-white w-[90%] font-thin leading-7 h-[100px]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
          </div>
        </div>
        
      </div>

      </div>
      </div>
  </div>
  
}
