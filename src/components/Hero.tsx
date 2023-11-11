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
        <div className="pb-96 bg-black">

            {/* <div className={`h-[100vh] bg-cover bg-local  bg-[url('https://www.apple.com/v/apple-tv-plus/ag/images/overview/hero_startframe__fs1yactuf3qm_large.jpg')]`}>
            </div> */}
            <img src={heroThumbnail} className={`mx-auto h-[90vh] object-cover ${show ? "":"opacity-80"}`}>
            </img>
            <div className={`pb-64 md:mx-auto mx-10 -mt-96 max-w-xl text-white bg-transparent ${show ? "":"hidden"}`}>

                <p className="text-3xl font-black md:text-6xl">All Apple Originals.</p>
                <p className="text-3xl font-black md:text-6xl">Only on Apple TV+.</p>
                <div className="mt-32">
                    <a className="p-6 py-4 font-medium text-black bg-white rounded-full hover:opacity-80" href="/channel/tv">Stream now</a>
                </div>
            </div>

            <div className={`py-64 md:mx-auto mx-10 max-w-2xl text-white z-100 ${show ? "hidden" : ""}`}>
                <p className="text-xl text-5xl font-bold opacity-70 md:my-10">New Apple Originals every month — always ad‑free.</p>
                <p className="my-10 text-xl font-bold opacity-70 md:text-5xl">Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
                </p>

                <p className="my-10 text-xl font-bold opacity-70 md:text-5xl">Watch in 4K HDR video with immersive Spatial Audio.<sup>1</sup>
                </p>
                <p className="my-10 text-xl font-bold opacity-70 md:text-5xl">Share a single subscription with up to five people.</p>
            </div>
        </div>
    </>;
}