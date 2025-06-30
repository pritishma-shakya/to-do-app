'use client';

import { GoStarFill } from "react-icons/go";
import { useState } from "react";

function TaskTitle ({content}:{content:string}) {
    return (
        <h1> {content} </h1>
    )
}

function TaskDate({content}:{content:string}) {
    return (
        <h2 className="text-sm text-blue-500 font-semibold"> {content} </h2>
    )
}

function TaskCategory ({content}:{content:string}){
    return (
        <h2 className="text-sm text-gray-400 font-semibold"> {content} </h2>
    )
}

function CheckBox(){
    return (
        <input type="checkbox" ></input>
    )
}

function Star() {
  const [selected, setSelected] = useState(false);
  
  return (
    <div onClick={() => setSelected(!selected)}>
      {selected ? <GoStarFill color="#017AFF"/> : <GoStarFill color="#E2E2E2"/>}
    </div>
  );
}

type Task = { 
  title: string; 
  category: string; 
  date: string 
};

export default function TaskItem() {
  const tasks : Task [] = [
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
    <div className="space-y-0">
      {tasks.map((task, index) => (
        <div key={index} className="p-2.5 flex items-center gap-4">
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