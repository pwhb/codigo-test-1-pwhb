
const movies = [
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
        <div className="flex overflow-x-auto flex-row gap-5 my-3 bg-black scrollbar-hide no-scrollbar">
            {movies.map((src, idx) => (
                <img
                    key={`img-${idx}`}
                    className="h-32 rounded-md"
                    src={src}
                />
            ))}

        </div>

        <div className="flex overflow-x-auto flex-row gap-5 my-3 bg-black scrollbar-hide no-scrollbar">
            {movies.map((src, idx) => (
                <img
                    key={`img-${idx}`}
                    className="h-32 rounded-md"
                    src={src}
                />
            ))}

        </div>

        <div className="flex overflow-x-auto flex-row gap-5 my-3 bg-black scrollbar-hide no-scrollbar">
            {movies.map((src, idx) => (
                <img
                    key={`img-${idx}`}
                    className="h-32 rounded-md"
                    src={src}
                />
            ))}

        </div>
    </>;
}