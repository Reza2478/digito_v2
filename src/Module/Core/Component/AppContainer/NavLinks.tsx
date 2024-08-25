import LINKS from "@/Module/Core/Constant/LINKS";
import Links from "@/Module/Core/Model/enum/Links";
import Link from "next/link";

interface INavLinks {
    path: string;
    label: string;
}

function NavLinks() {
    const NavLinkItems: INavLinks[] = [
        {
            path: LINKS.HOME,
            label: Links.HOME
        },
        {
            path: LINKS.ABOUT_US,
            label: Links.ABOUT_US
        },
        {
            path: LINKS.CONTACT_US,
            label: Links.CONTACT_US
        }
    ]

    return (
        <ul className={"flex items-center gap-2"}>
            {NavLinkItems.map(navLink => <li key={navLink.label}>
                <Link href={navLink.path}>{navLink.label}</Link>
            </li>)}
        </ul>
    )
}

export default NavLinks