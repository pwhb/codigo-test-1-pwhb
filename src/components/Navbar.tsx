import { useEffect, useRef, useState } from "react";

const dropdowns = {
    none: "",
    store: "Store",
    mac: "Mac",
    ipad: "iPad",
    iphone: "iPhone",
    watch: "Watch",
    vision: "Vision",
    airpods: "AirPods",
    tv_and_home: "TV & Home",
    entertainment: "Entertainment",
    accessories: "Accessories",
    support: "Support"

};
export default function Navbar()
{
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () =>
    {
        if (typeof window !== 'undefined')
        {
            if (window.scrollY > lastScrollY)
            { // if scroll down hide the navbar
                setShow(false);
            } else
            { // if scroll up show the navbar
                setShow(true);
            }
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() =>
    {
        if (typeof window !== 'undefined')
        {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () =>
            {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    // const [tab, setTab] = useState(0);
    return <div className="fixed top-0 w-full bg-black text-neutral-300">
        <div className="mx-auto max-w-6xl">
            <div className={`flex flex-row justify-between items-center px-5 text-xs  ${show ? "":"hidden"}`} >
                <img src="/apple-173-svgrepo-com.svg" className="my-3 w-4" alt="" />
                {Object.values(dropdowns).map((v, idx) => <button key={`nav-menu-${idx}`}>{v}</button>)}

                <img src="/search-svgrepo-com.svg" alt="" className="my-3 w-4" />

                <img src="/shop-bag-svgrepo-com.svg" alt="" className="my-3 w-4" />
            </div>

            <div className="flex flex-row justify-between items-center px-5 py-3 text-xs bg-black text-neutral-300">
                <a href="" className="text-xl font-semibold text-neutral-100">Apple TV+</a>
                <a href="" className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-800">Stream now</a>
            </div>
        </div>
    </div>;
}

