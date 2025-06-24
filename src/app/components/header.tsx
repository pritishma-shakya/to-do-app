import MainTitle from "./main-title";
import Date from "./date";
import Buttons from "./buttons";

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