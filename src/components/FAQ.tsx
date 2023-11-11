export default function FAQ()
{

    return <div className="px-5 mx-auto max-w-screen-xl bg-white min-h-sceen">
        <div className="flex flex-col items-center">
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-7xl">
                Questions? Answers.
            </h2>
        </div>
        <div className="grid mx-auto mt-8 max-w-xl divide-y md:max-w-4xl divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">What is Apple TV+?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.
                    </p>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">How can I watch it?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at <a className="text-blue-600 hover:underline" href="">tv.apple.com</a>.
                        <br />
                        <br />
                        <p className="font-medium text-blue-600 hover:underline">
                            <a href="">Learn more {">"}</a>
                        </p>
                    </p>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">What does it cost?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        That all depends on which offer you choose. (1) <span className="font-semibold">If you buy an Apple device, Apple TV+ is included free for 3 months.</span><sup>2</sup> (2) A monthly subscription is just $9.99 per month after a free seven-day trial.<sup>3</sup>
                        (3) Apple TV+ is included in <a href="" className="text-blue-600 hover:underline">Apple One</a>, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $19.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.<sup>5</sup>
                    </p>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">Can I share with my family?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        Of course. Apple TV+ lets you share your subscription with up to five family members.
                    </p>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">Are there commercials? And can I watch on demand?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        Apple Originals are always commercial-free. New movies and series are added every Wednesday and Friday, though some shows release all episodes at once. You can watch them on demand anytime, anywhere.
                    </p>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">Do I need an Apple TV 4K?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.
                        <br />
                        <br />
                        <p className="font-medium text-blue-600 hover:underline">
                            <a href="">See all supported devices {">"}</a>
                        </p>

                    </p>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium list-none cursor-pointer">
                        <span className="text-xl md:text-2xl">Can I download to watch offline?</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="mt-4 max-w-lg md:max-w-2xl text-neutral-800 group-open:animate-fadeIn">
                        Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.
                    </p>
                </details>
            </div>
        </div>
    </div>;

}