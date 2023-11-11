import { useEffect, useState } from "react";

export default function Hero()
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
    const heroThumbnail = "https://www.apple.com/v/apple-tv-plus/ag/images/overview/hero_startframe__fs1yactuf3qm_large.jpg";
    return <>
        <div className="bg-black">

            {/* <div className={`h-[100vh] bg-cover bg-local  bg-[url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/hero_startframe__fs1yactuf3qm_large.jpg')]`}>
            </div> */}
            <img src={heroThumbnail} className={`${show ? "":"opacity-80"}`}>
            </img>
            <div className={`pb-64 mx-auto -mt-96 max-w-xl text-white bg-transparent ${show ? "":"hidden"}`}>

                <p className="text-6xl font-black">All Apple Originals.</p>
                <p className="text-6xl font-black">Only on Apple TV+.</p>
                <button className="p-6 py-4 mt-10 font-medium text-black bg-white rounded-full hover:opacity-80">Stream now</button>
            </div>

            <div className={`py-64 mx-auto max-w-2xl text-white z-100 ${show ? "hidden" : ""}`}>

                <p className="my-10 text-5xl font-bold bg-blue-600 opacity-70">New Apple Originals every month — always ad‑free.</p>
                <p className="my-10 text-5xl font-bold bg-blue-600 opacity-70">Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
                </p>

                <p className="my-10 text-5xl font-bold bg-blue-600 opacity-70">Watch in 4K HDR video with immersive Spatial Audio.<sup>1</sup>
                </p>
                <p className="my-10 text-5xl font-bold bg-blue-600 opacity-70">Share a single subscription with up to five people.</p>
            </div>
        </div>
    </>;
}