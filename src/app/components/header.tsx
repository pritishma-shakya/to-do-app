import Buttons from "./buttons";

function Date({content}:{content:string}){
    return (
        <h2 className="text-gray-400 font-semibold"> {content} </h2>
    )
}

function MainTitle ({content}:{content:string}) {
    return (
        <h1 className="text-xl font-semibold"> {content} </h1>
    )
}

export default function Header() {
    return (
        <div className="p-3 flex items-center">
            <div className="text-left flex-1">
                <MainTitle content="My Day"/>
                <Date content="December 2022"/>
            </div>
            <Buttons content=" + New Task "/>
        </div>
    )
}