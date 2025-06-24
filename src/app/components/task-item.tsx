import TaskTitle from "./task-title";
import TaskCategory from "./task-category";
import TaskDate from "./task-date";
import CheckBox from "./checkbox";
import Star from "./star";

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

export default function TaskItem() {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div key={index} className="border border-gray-400 rounded-lg p-4 flex items-center gap-4">
          <CheckBox />
          <div className="flex-1">
            <TaskTitle content={task.title} />
            <div className="flex gap-2 items-center text-sm">
              <TaskCategory content={task.category} />
              <span className="text-gray-300">•</span>
              <TaskDate content={task.date} />
            </div>
          </div>
          <Star />
        </div>
      ))}
    </div>
  );
}