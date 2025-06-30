export default function SideBarItem({icon, content, count}:{
        icon: React.ReactNode, 
        content: string, 
        count: number
    }){
    return(
        <div>
            {icon}
            <span> {content} </span>
            <span> {count} </span>
        </div>
    )
}