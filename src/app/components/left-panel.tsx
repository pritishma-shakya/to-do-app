import { IoSearchOutline, IoAlertCircleOutline, IoGridOutline, 
    IoCheckmarkCircleOutline, IoShareSocialOutline, IoWallet } from "react-icons/io5";
import { LuCircleUser } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { SiEmpirekred } from "react-icons/si";
import { RiInboxFill } from "react-icons/ri";

type Items = {
    icon: React.ReactNode;
    content: string;
    count: number | null;
}

function SideBarItem ({data}: {data: Items}) {
    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                {data.icon}
                <span className="text-sm"> {data.content} </span>
            </div>
            {data.count !== null && (
                <span className="text-xs text-[#717171] bg-[#EDEDED] rounded-full px-2 py-0.5">
                    {data.count}
                </span>
            )}
        </div>
    )
}

function Search(){
    return (
        <div className="bg-[#efefef] rounded-lg"> 
            <div className="flex items-center p-1">
                <div className="pl-1 pr-2">
                    <IoSearchOutline color="#717171" size={14}/>
                </div>
                <h3 className="text-[#717171] text-sm"> Search </h3>
            </div>
            
        </div>
    )
}

function Title({content}:{content:string}){
    return (
        <div>
            <h3 className="text-[#717171] text-sm font-semibold"> {content} </h3>
        </div>
    )
}

function Logo(){
    return (
        <div>
            <h1 className="text-xl font-semibold"> Rutinitas </h1>
        </div>
    )
}

export default function LeftPanel () {
    const items: Items[]=[
        { icon: <SlEnergy color="4a8af7"/>, content: "My Day", count: 8},
        { icon: <IoAlertCircleOutline color="4a8af7"/>, content: "Important", count: null},
        { icon: <LuCircleUser color="4a8af7"/>, content: "Personal", count: 4},
        { icon: <IoGridOutline color="4a8af7"/>, content: "All", count: 56},
        { icon: <IoCheckmarkCircleOutline color="4a8af7"/>, content: "Completed", count: 10},
        { icon: <IoShareSocialOutline color="4a8af7"/>, content: "Assigned to me", count: null}
    ]
    const ownItems: Items[]=[
        { icon: <IoWallet/> , content: "Go Pay", count: 4},
        { icon: <SiEmpirekred/>, content: "Kretya Studio", count: 2},
        { icon: <RiInboxFill/>, content: "Content Dump", count: 21},

    ]
    return (
        <div className="bg-[#fafafa] p-4 h-screen w-1/5">
            <Logo />
            <div className="pt-6">
                <Search />
            </div>
            <div className="pt-4 flex flex-col gap-3">
                <Title content="Favorites" />
                {items.map((item, index) => (
                    <SideBarItem key={index} data={item}/>
                ))}
            </div>
            <div className="border border-gray-200 flex items-center my-5"></div>
            <div className="flex flex-col gap-3">
                <Title content="Your own tags" />
                {ownItems.map((item, index) => (
                    <SideBarItem key={index} data={item}/>
                ))}
            </div>
        </div>
    )
}