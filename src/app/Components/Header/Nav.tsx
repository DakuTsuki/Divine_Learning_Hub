import Image from "next/image";
import Logo from "../../../../public/Logo.svg";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  return (
    <div>
      <div className="relative p-[2rem_2rem] lg:p-[2rem_4rem] flex justify-between items-center bg-[#FDF8EE]">
        {/* Logo */}
        <Image 
              src={Logo} 
              alt="Logo" 
              className="w-[7rem] lg:w-48 h-16" 
        />
        {/* NavLinks */}
        <div className="w-[42rem] 
                        h-5 
                        ml-20"
        >
          <div className="flex 
                          justify-between 
                          items-center 
                          h-full"
          >
            <ul className="hidden 
                           lg:flex 
                           justify-between 
                           items-center 
                           space-x-10"
            >
              <li className="text-[18px] 
                             font-semibold 
                             leading-5 
                             hover:text-red-600"
              >
                Home
              </li>
              <li className="text-[18px] 
                             font-semibold 
                             leading-5 
                             hover:text-red-600"
              >
                About
              </li>
              <li className="text-[18px] 
                             font-semibold 
                             leading-5 
                             hover:text-red-600"
              >
                Courses
              </li>
              <li className="text-[18px] 
                             font-semibold 
                             leading-5 
                             hover:text-red-600"
              >
                Our Services
              </li>
              <li className="text-[18px] 
                             font-semibold 
                             leading-5 
                             hover:text-red-600"
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
        {/* Buttons */}
        <div>
          <Button className="hidden 
                             lg:block 
                             bg-[#4D2C5E] 
                             w-40 
                             h-14 
                             rounded-[218px] 
                             hover:bg-[#6c3d83]"
          >
            Sign In
          </Button>
        </div>
        <GiHamburgerMenu
          onClick={openNav}
          className="lg:hidden w-[5rem] 
                  text-black h-[2rem]"
        />
      </div>
    </div>
  );
};

export default Nav;