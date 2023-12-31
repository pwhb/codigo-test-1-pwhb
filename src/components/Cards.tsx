import React from "react";
import "./Cards.css";
export default function Cards()
{
    return <>
        <div className="md:grid grid-cols-2 gap-5 mx-auto my-8 max-w-2xl lg:max-w-[84rem] hidden">
            <AppleOne></AppleOne>
            <AppleMusic></AppleMusic>
            <AppleTV></AppleTV>
            <AirPlay></AirPlay>
        </div>

        <div className="md:hidden flex flex-col gap-10 mx-auto my-8 max-w-2xl md:max-w-[84rem]">
            <AppleOne></AppleOne>
            <AppleMusic></AppleMusic>
            <AppleTV></AppleTV>
            <AirPlay></AirPlay>
        </div>
    </>;
}

function AppleOne()
{
    return <>
        <div className="col-span-2 px-16 py-16 h-80 sm:h-[32rem] card hidden sm:block">
            <div className="flex flex-row justify-center items-center">
                <img className="h-36 lg:h-64" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/bundle__e93qdcv7mtm6_medium.jpg" alt="" />
                <div className="flex flex-col items-center max-w-sm lg:max-w-lg">
                    <img className="w-12 lg:w-24" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_one__b0modw3b87xy_large.png" alt="" />
                    <p className="my-3 text-xl font-bold text-center lg:my-8 lg:text-4xl">Bundle Apple TV+ with
                        up to five other great services.
                        And enjoy more for less.</p>

                    <Button>Try Apple One free<sup>4</sup></Button>
                    <br />
                    <a href="" className="text-blue-600 hover:underline">Learn more {">"}</a>
                </div>
            </div>
        </div>
        <div className="col-span-2 px-16 py-16 card sm:hidden">
            <div className="flex flex-col items-center max-w-sm sm:max-w-lg">
                <img className="w-12 sm:w-24" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_one__b0modw3b87xy_large.png" alt="" />
                <p className="my-3 w-72 text-2xl font-bold text-center">Bundle Apple TV+ with
                    up to five other great services.
                    And enjoy more for less.</p>

                <Button>Try Apple One free<sup>4</sup></Button>
                <br />
                <a href="" className="text-blue-600 hover:underline">Learn more {">"}</a>

                <img className="h-40 sm:h-80" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/bundle__e93qdcv7mtm6_medium.jpg" alt="" />
            </div>

        </div>
    </>;
}
function AppleMusic()
{
    return <>
        <div className="hidden col-span-2 px-16 h-64 sm:h-96 card md:block">
            <div className="flex flex-row gap-6 justify-center items-center">
                <div className="flex flex-col items-start w-56 lg:w-[26rem]">
                    <p className="my-3 text-xl font-bold lg:text-4xl">The Apple Music Student Plan comes with Apple TV+ for free.<sup>5</sup></p>

                    <Button>Try Apple Music free</Button>

                </div>
                <img className="h-64 lg:h-[24rem]" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/student_plan__bm7yp0v4tf6u_large.jpg" alt="" />
            </div>
        </div>
        <div className="col-span-2 px-16 card sm:hidden">
            <div className="flex flex-col gap-6 justify-center items-center">
                <p className="my-3 w-72 text-2xl font-bold text-center sm:text-4xl">The Apple Music Student Plan comes with Apple TV+ for free.<sup>5</sup></p>

                <Button>Try Apple Music free</Button>

                <img className="h-64 sm:h-[24rem]" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/student_plan__bm7yp0v4tf6u_large.jpg" alt="" />
            </div>
        </div>
    </>;
}
function AppleTV()
{
    return <div className="col-start-1 row-start-3 card">
        <div className="flex flex-col justify-center items-center">
            <img className="mt-10 h-5 lg:h-10" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_logo__bx1mtrage32a_large.png" alt="" />
            <p className="my-2 w-64 text-xl font-bold text-center lg:my-10 lg:w-96 lg:text-4xl">The Apple experience.
                Cinematic in every sense.

            </p>
            <br />
            <div className="flex gap-4 items-center">
                <button className="px-3 py-1 text-lg font-medium text-white bg-blue-600 rounded-full hover:opacity-70">Buy</button>
                <a href="" className="text-blue-600 hover:underline">Learn more {">"}</a>
            </div>
            <br />
            <img className="w-72" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_remote__igmcbznr1w2u_large.jpg" alt="" />
        </div>
    </div>;


}
function AirPlay()
{
    return <div className="col-start-2 row-start-3 card">
        <div className="flex flex-col justify-center items-center">


            <p className="mt-10 text-xl font-semibold text-center lg:text-4xl">AirPlay</p>
            <p className="mt-2 mb-4 w-64 text-xl font-bold text-center lg:w-96 lg:text-4xl">Bring Apple TV+ to
                a screen near you.</p>
            <a href="" className="text-blue-600 hover:underline">Learn more {">"}</a>
            <br />
            <img className="w-72 lg:w-[48rem]" src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/air_play__dyuvvwnd5riq_large.jpg" alt="" />
        </div>
    </div>;
}



function Button({ children }: { children: React.ReactNode; })
{
    return <button className="px-5 py-2 font-medium text-white bg-black rounded-full hover:opacity-70">{children}</button>;
}