"use client";
import { useState } from 'react';
import HeaderSidebar from './HeaderSidebar';
import HeaderMenu from './HeaderMenu';

const HeaderV1 = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const openSidebar = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const closeSidebar = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <HeaderSidebar isSidebarActive={isSidebarActive} onClose={closeSidebar} />
            <HeaderMenu onOpenSidebar={openSidebar} />
        </>
    );
};

export default HeaderV1;
