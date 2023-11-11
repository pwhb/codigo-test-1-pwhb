export default function Devices()
{
    const logos = [
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_vizio__crgnno5ezt2e_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_sony__dv28xq4n91ea_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_roku__d3kr4gpcimoi_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_firetv__f6qpefrj0ree_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_google_tv__e5t4asdc2gsy_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_playstation__djtq2b40wf2a_medium.jpg",
        "https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xbox__cfelmbxxfoaa_medium.jpg",
    ];
    return <>
        <div className="flex flex-col items-center mx-8 mt-24">

            <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_app_icon__cth1s5qlqpyu_medium.png" alt="" />

            <p className="my-4 max-w-lg font-bold text-center md:text-4xl">Watch Apple TV+ anywhere on the Apple TV app.</p>

            <p className="max-w-md text-center">Find the Apple TV app on your favorite Apple devices.
                Or watch Apple TV+ online at <a href="" className="text-blue-600 hover:underline">tv.apple.com</a>.</p>
            <div className="flex flex-row flex-wrap gap-12 justify-center items-center my-10">
                <div className="text-center">
                    <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_apple_tv__r2nel0gcigam_medium.jpg" alt="" />
                    <p className="mt-3 font-medium">Apple TV</p>
                </div>
                <div className="text-center">
                    <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_iphone__c914mkstye0y_medium.jpg" alt="" />
                    <p className="mt-3 font-medium">iPhone</p>
                </div>
                <div className="text-center">
                    <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_ipad__cyk6qow5fiqa_medium.jpg" alt="" />
                    <p className="mt-3 font-medium">iPad</p>
                </div>
                <div className="text-center">
                    <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_mac__b7y797p7oouq_medium.jpg" alt="" />
                    <p className="mt-3 font-medium">Mac</p>
                </div>
                <div className="text-center">
                    <img src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_airplay__ddkvcm0sxtm6_medium.jpg" alt="" />
                    <p className="mt-3 font-medium">AirPlay</p>
                </div>
            </div>

            <p className="max-w-xs text-2xl font-bold text-center">See it on your smart TV or streaming device.</p>
            <a href="" className="my-3 text-blue-600 hover:underline">Set up your device {">"}</a>

            <div className="flex flex-row flex-wrap gap-3 justify-center items-center my-8 max-w-3xl md:gap-12">
                {logos.map((logo, idx) => <img className="w-16" src={logo} key={`logo-${idx}`} />)}
            </div>
        </div>
    </>;
}