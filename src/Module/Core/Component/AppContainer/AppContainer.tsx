'use client'


import {AppShell} from "@mantine/core";
import {Header} from "@/Module/Core/Component";

function AppContainer() {
    return <AppShell header={{height: 60}}>
        <AppShell.Header className={"flex items-center"}>
            <Header/>
        </AppShell.Header>
    </AppShell>
}

export default AppContainer