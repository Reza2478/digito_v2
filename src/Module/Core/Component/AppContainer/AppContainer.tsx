'use client'

import {AppShell} from "@mantine/core";
import {Header} from "@/Module/Core/Component";
import React from "react";

interface IAppContainer {
    children: React.ReactNode;
}

function AppContainer({children}: IAppContainer) {
    return <AppShell header={{height: 60}}>
        <AppShell.Header>
            <Header/>
        </AppShell.Header>
        <AppShell.Main>
            {children}
        </AppShell.Main>
    </AppShell>
}

export default AppContainer