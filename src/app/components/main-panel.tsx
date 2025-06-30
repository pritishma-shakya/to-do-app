import Header from "./header";
import TaskItem from "./task-item";

export default function MainPanel() {
    return (
        <div className="flex flex-col px-5 w-3/5">
            <Header />
            <TaskItem />
        </div>
    )
}