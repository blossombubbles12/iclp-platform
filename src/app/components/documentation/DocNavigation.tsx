"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export const DocNavigation = () => {

    const [navItem, setNavItem] = useState("version");

    function getNavItem(item: string) {
        setNavItem(item)
    }

    useEffect(() => {
        console.log(navItem);
    }, [navItem])

    const DocsNav = [
        { id: 1, navItem: "Overview", hash: "overview" },
        { id: 2, navItem: "Courses & Programs", hash: "courses" },
        { id: 3, navItem: "Enrollment", hash: "enrollment" },
        { id: 4, navItem: "Branding & Theme", hash: "branding" },
        { id: 5, navItem: "Navigation", hash: "navigation" },
        { id: 6, navItem: "API Reference", hash: "api" },
        { id: 7, navItem: "Data Model", hash: "data-model" },
    ]

    return (
        <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4" >
            {
                DocsNav.map((item) => {
                    return (
                        <Link key={item.id} href={`#${item.hash}`} onClick={() => getNavItem(item.hash)} className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-midnight_text text-base font-medium  ${item.hash === navItem ? "bg-purple_blue text-white hover:bg-primary! hover:text-white! dark:text-opacity-100! dark:hover:text-white" : "dark:text-grey"}`}>{item.navItem}</Link>
                    )
                })
            }
        </div>
    )
}