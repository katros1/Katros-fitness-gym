import { SelectedPage } from "@/shared/newFile";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {

    const lowerCase = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
   <AnchorLink 
   href={`#${lowerCase}`}
   className={`${selectedPage === lowerCase ? "text-primary-500" : "" } transition duration-500 hover:text-primary-300`}
   onClick={() => setSelectedPage(lowerCase)}
   >
    {page}
   </AnchorLink>
  )
}

export default Links 