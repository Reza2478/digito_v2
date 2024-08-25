import {NavLinks, SearchBox} from "@/Module/Core/Component";
import Image from "next/image";
import {IoPersonCircle} from "react-icons/io5";

function Header() {
    return (
        <div className={"flex justify-between items-center bg-red-100 h-full w-full"}>
            <div className={"flex items-center gap-4 justify-between"}>
                <Image width={45} height={45} alt={"#"} src="/assets/images/logo.png"/>
                <NavLinks/>
                <SearchBox/>
            </div>
            <div>
                <IoPersonCircle width="1000px" className={"text-blue-950 "}/>
            </div>
        </div>
    )
}

export default Header