import { useEffect, useState } from "react";
import { FaPaperPlane, FaPeoplePulling } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/lib/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerOverlay, DrawerPortal, DrawerTrigger } from "@/lib/ui/drawer";

export function Nav() {

    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();
    useEffect(() => setOpen(false), [pathname]);

    return (
        <div className="fixed w-full bg-white/60 backdrop-blur-xl select-none z-20 border-b">
            <nav className="container mx-auto flex mt-6 mb-5 px-6 items-center" role="banner">
                <div className="flex items-center">
                    <Link to="/" className="brand-mark h-8 me-2 mt-1" aria-label="Q6 Technologies Logo"></Link>
                </div>
                <ul className="list-none font-semibold items-end text-gray-950 ms-auto hidden md:flex">
                    <NavItems />
                </ul>

                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger className="ms-auto block md:hidden p-3 hover:bg-slate-200 border border-transparent hover:border-black rounded-md">
                        <TbMenu2 className="h-8 w-8 ms-auto" />
                    </DrawerTrigger>

                    <DrawerPortal>
                        <DrawerContent className="">
                            <div className="flex flex-col items-center grow">
                                <div className="flex items-center mt-6">
                                    <Link to="/" className="brand-mark h-8 me-2 mt-1" aria-label="Q6 Technologies Logo"></Link>
                                </div>
                                <ul className="list-none -ms-9 mt-6">
                                    <NavItems />
                                </ul>
                                <div className="mt-auto p-6 pt-24 opacity-70 text-sm">
                                    Quality in Engineering
                                </div>
                            </div>
                        </DrawerContent>
                        <DrawerOverlay />
                    </DrawerPortal>
                </Drawer>
            </nav>
        </div>
    )
}

function NavItems() {
    return (
        <>
            <li className="ms-9 flex items-center">
                <FaPeoplePulling className="me-2" />
                <NavLink to="/meet-the-team" className="link link-hover">Meet the Team</NavLink>
            </li>
            <li className="ms-9 flex items-center">
                <FaPaperPlane className="me-2" />
                <NavLink to="/contact-us" className="link link-hover">Contact Us</NavLink>
            </li>
        </>
    );
}

function NavDrawer() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <div className="p-4 pb-0">

                    </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
