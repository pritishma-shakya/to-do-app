import Header from "./header";
import TaskItem from "./task-item";

export default function MainPanel() {
    const tasks = [
    { title: "Promotion Banner", category: "Go Pay", date: "Today" },
    { title: "Daily Workout", category: "Personal", date: "Today" },
    { title: "Make Dribble shoot", category: "Kretya Studio", date: "Wednesday, Dec 28" },
    { title: "Announcement of Kretya Design challenge #1", category: "Kretya Studio", date: "Wednesday, Dec 28" },
    { title: "Buy LED Strips", category: "Personal", date: "Thursday, Dec 29" },
    { title: "Pull to refresh at promo discovery", category: "GoPay", date: "Friday, Dec 30"},
    { title: "Edit video for social media", category: "Content Dump", date: "Friday, Dec 30" },
    { title: "Make mood-board for new office interior", category: "Content Dump", date: "Friday, Dec 30"}
  ];
    return (
        <div className="flex flex-col p-4 pt-10 w-3/5">
            <Header />
            <div className="pt-6">
                <TaskItem tasks={tasks} showStar={true}/>
            </div>
        </div>
    )
}