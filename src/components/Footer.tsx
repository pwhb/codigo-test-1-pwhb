import "./Footer.css";

function FooterMenu({ text }: { text: string; })
{
    return <li className="hover:underline">
        <a href="">{text}</a>
    </li>;
}
export default function Footer()
{
    const shop_and_learn = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
    ];


    const apple_wallet = [
        "Wallet",
        "Apple Card",
        "Apple Pay",
        "Apple Cash"];

    const account = [
        "Manage Your Apple ID",
        "Apple Store Account",
        "iCloud.com",];

    const entertainment = [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness+",
        "Apple News+",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
    ];

    const apple_store = [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
        "Certified Refurbished",
        "Apple Trade In",
        "Financing",
        "Carrier Deals at Apple",
        "Order Status",
        "Shopping Help",
    ];

    const for_business = [
        "Apple and Business",
        "Shop for Business",];
    const for_education =
        ["Apple and Education",
            "Shop for K-12",
            "Shop for College",];
    const for_healthcare =
        ["Apple in Healthcare",
            "Health on Apple Watch",
            "Health Records on iPhone",];
    const for_government =
        [
            "Shop for Government",
            "Shop for Veterans and Military"
        ];

    const apple_values = [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supplier Responsibility"
    ];

    const about_apple = [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple"
    ];
    return <>
        <div className="footer">

            <ol className="gap-10 mt-4 ml-4 text-xs list-decimal text-neutral-500">
                <li>Not all content is available in 4K or 4K HDR. 4K resolution requires a 4K‑capable device. Accessing Dolby Atmos features requires a Dolby Atmos‑capable system. Playback quality will depend on hardware and internet connection.</li>
                <br />
                <li>New and qualified returning subscribers only. $9.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ three months free or one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</li>
                <br />
                <li>One subscription per Family Sharing group. Plan automatically renews until cancelled.</li>
                <br />
                <li>The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.</li>
                <br />
                <li>
                    Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group.
                </li>
            </ol>
            <hr className="my-4" />

            <div className="my-3">
                <ul className="flex flex-row gap-3 items-center text-xs text-neutral-600">
                    <img className="w-4" src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="" />
                    <li><img className="w-3 h-8 opacity-20" src="https://www.svgrepo.com/show/374808/chevronright.svg" alt="" /></li>
                    <li className="hover:underline"><a href="">Only on Apple</a></li>
                    <li><img className="w-3 h-8 opacity-20" src="https://www.svgrepo.com/show/374808/chevronright.svg" alt="" /></li>
                    <li>Apple TV+</li>
                </ul>
            </div>

            <div className="grid grid-cols-5 gap-3">

                <ul className="flex flex-col gap-2 text-xs">
                    <li className="font-semibold">Shop and Learn</li>
                    {shop_and_learn.map((v: string) => <FooterMenu key={v} text={v} />)}
                    <br />
                    <li className="font-semibold">Apple Wallet</li>
                    {apple_wallet.map((v: string) => <FooterMenu key={v} text={v} />)}
                </ul>

                <ul className="flex flex-col gap-2 text-xs">
                    <li className="font-semibold">Account
                    </li>
                    {account.map((v: string) => <FooterMenu key={v} text={v} />)}
                    <br />
                    <li className="font-semibold">Entertainment</li>
                    {entertainment.map((v: string) => <FooterMenu key={v} text={v} />)}
                </ul>

                <ul className="flex flex-col gap-2 text-xs">
                    <li className="font-semibold">Apple Store
                    </li>
                    {apple_store.map((v: string) => <FooterMenu key={v} text={v} />)}
                </ul>

                <ul className="flex flex-col gap-2 text-xs">
                    <li className="font-semibold">For Business
                    </li>
                    {for_business.map((v: string) => <FooterMenu key={v} text={v} />)}
                    <br />
                    <li className="font-semibold">For Education</li>
                    {for_education.map((v: string) => <FooterMenu key={v} text={v} />)}
                    <br />
                    <li className="font-semibold">For Healthcare</li>
                    {for_healthcare.map((v: string) => <FooterMenu key={v} text={v} />)}
                    <br />
                    <li className="font-semibold">For Government</li>
                    {for_government.map((v: string) => <FooterMenu key={v} text={v} />)}
                </ul>
                <ul className="flex flex-col gap-2 text-xs">
                    <li className="font-semibold">Apple Values
                    </li>
                    {apple_values.map((v: string) => <FooterMenu key={v} text={v} />)}
                    <br />
                    <li className="font-semibold">About Apple</li>
                    {about_apple.map((v: string) => <FooterMenu key={v} text={v} />)}
                </ul>

            </div>
            <br />
            <p className="text-xs text-neutral-600">More ways to shop: <a href="" className="text-blue-600 underline">Find an Apple Store</a> or <a className="text-blue-600 underline">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
            <hr className="my-3" />
            <div className="flex flex-row flex-1 justify-between mb-12">

                <p className="text-xs text-neutral-500">Copyright © 2023 Apple Inc. All rights reserved.</p>

                <ul className="flex flex-row gap-2 text-xs text-neutral-700">
                    <li className="hover:underline"><a href="">Privacy Policy</a></li>
                    <li>|</li>
                    <li className="hover:underline"><a href="">Terms of Use</a></li>
                    <li>|</li>
                    <li className="hover:underline"><a href="">Sales and Refunds</a></li>
                    <li>|</li>
                    <li className="hover:underline"><a href="">Legal</a></li>
                    <li>|</li>
                    <li className="hover:underline"><a href="">Site Map</a></li>
                </ul>

                <a className="text-xs text-neutral-500 hover:underline" href="/">United States</a>
            </div>
        </div >
    </>;
}

// function Separator()
// {
//     return <img src="https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/separator/icon_large.svg" className="inline" alt="" />;
// }