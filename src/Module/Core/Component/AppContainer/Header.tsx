import {NavLinks} from "@/Module/Core/Component";

function Header() {
    return (
        <div className={"flex justify-between items-center"}>
            <div className={"flex items-center justify-between"}>
                {/*<Image width={10} height={10} alt={"#"} src={"."}/>*/}
                <NavLinks/>
            </div>
        </div>
    )
}

export default Header