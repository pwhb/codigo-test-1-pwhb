import HorizontalScroll from "./HorizontalScroll";

export default function Lineup()
{
    return <>
        <div className="py-12 text-center bg-black">
            <HorizontalScroll />
            <button className="px-4 py-2 mt-12 rounded-full border-2 border-white text-neutral-200">See full lineup {">"}</button>
        </div>
    </>;
}