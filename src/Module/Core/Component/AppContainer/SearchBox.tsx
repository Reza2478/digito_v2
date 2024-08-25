'use client'

import {Input} from "@mantine/core";
import {CiSearch} from "react-icons/ci";

function SearchBox() {
    return (

        <Input placeholder={"جستجو"} leftSection={<CiSearch/>}/>
    )
}

export default SearchBox