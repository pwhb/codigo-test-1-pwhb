export default function Pricing()
{
    return <>
        <div className="text-white bg-black">

            <div className="grid grid-cols-3 gap-3 mx-auto max-w-2xl lg:max-w-4xl">
                <div className="w-[200px] my-20">
                    <p className="text-lg font-semibold text-neutral-100">
                        Buy an Apple device</p>
                    <p className="my-2 text-3xl font-bold text-neutral-100">3 months free.</p>
                    <p className="text-neutral-400">Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.<sup>2</sup></p>

                    <button className="px-4 py-3 mt-10 mb-5 w-36 text-sm font-medium text-black rounded-full bg-neutral-100">Check eligibility</button>
                </div>
                <div className="w-[200px] my-20">
                    <p className="text-lg font-semibold text-neutral-100">
                        Free 7-day trial</p>
                    <p className="my-2 text-3xl font-bold text-neutral-100">$9.99/mo.</p>
                    <p className="text-neutral-400">A monthly subscription is just $9.99 per month after a free 7-day trial. Share Apple TV+ with your family.<sup>3</sup></p>

                    <button className="px-4 py-3 mt-10 mb-5 w-36 text-sm font-medium text-black rounded-full bg-neutral-100">Try it free</button>
                </div>
                <div className="w-[200px] my-20">
                    <p className="text-lg font-semibold text-neutral-100">
                        Free 1‑month trial</p>
                    <p className="my-2 text-3xl font-bold text-neutral-100">Apple One</p>
                    <p className="text-neutral-400">Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less. </p>

                    <a href="" className="text-blue-600 hover:underline">Learn more {">"}</a>
                    <button className="px-4 py-3 mt-3 mb-5 w-48 text-sm font-medium text-black rounded-full bg-neutral-100">Try Apple One free <sup>4</sup></button>
                </div>
            </div>
        </div>
    </>;
}