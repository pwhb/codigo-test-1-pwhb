const movies = [
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/A3RqcRODqsL1IkMDfK3rEA/1679x945sr.webp"

];
export default function HorizontalScroll()
{

    return <>
        <div className="flex overflow-x-auto flex-row gap-5 mx-auto my-3 max-w-3xl bg-black scrollbar-hide no-scrollbar">
            {movies.map((src, idx) => (
                <img
                    key={`top-img-${idx}`}
                    id={`top-img-${idx}`}
                    className="h-32 rounded-md"
                    src={src}
                />
            ))}

        </div>

        <div className="flex overflow-x-auto flex-row gap-5 mx-auto my-3 max-w-3xl bg-black scrollbar-hide no-scrollbar">
            {movies.map((src, idx) => (
                <img
                    key={`btm-img-${idx}`}
                    id={`top-img-${idx}`}
                    className="h-32 rounded-md"
                    src={src}
                />
            ))}

        </div>

    </>;
}
