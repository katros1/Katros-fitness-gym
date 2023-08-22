import { useState } from "react";
import Links from "../Links";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/newFile";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
        <div
            className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
            >

                <div className={`${flexBetween} mx-auto w-5/6`}>
                  <div className={`${flexBetween} w-full gap-16 `} >
                    <img src={Logo} alt="logo" />
                    {isAboveMediumScreen ? (<div className={`${flexBetween} w-full `}>
                      <div className={`${flexBetween} gap-0 text-sm `}>
                        <Links 
                        page="Home" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links 
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links 
                        page="Our classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Links 
                        page="Contact us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                      </div>
                      <div className={`${flexBetween} gap-8 `}>
                        <p>Sign In</p>
                        <button>Become a Member</button>
                      </div>
                    </div>) : (
                      <button
                        className="rounded-full bg-secondary-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                      >
                        <Bars3Icon className="h-6 w-6 text-white" />
                      </button>
                    )}
                  </div>
                </div>
        </div>
    </nav>
  )
}

export default Navbar