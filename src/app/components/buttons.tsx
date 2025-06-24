'use client';

export default function Buttons ({content}:{content : string}) {
    const handleClick = () => {
        alert("Button clicked");
    }
    return (
        <button className="text-blue-600 font-semibold bg-blue-100 pl-3 pr-3 pt-1 pb-1 rounded-lg hover:bg-blue-200" onClick={handleClick}> {content} </button>
    )
}