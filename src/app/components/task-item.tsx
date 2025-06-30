'use client';

import { GoStarFill } from "react-icons/go";
import { useState } from "react";

function TaskTitle({ content }: { content: string }) {
  return <h1>{content}</h1>;
}

function TaskDate({ content }: { content: string }) {
  return <h2 className="text-sm text-blue-500 font-semibold">{content}</h2>;
}

function TaskCategory({ content }: { content: string }) {
  return <h2 className="text-sm text-gray-400 font-semibold">{content}</h2>;
}

function CheckBox() {
  return <input type="checkbox" />;
}

function Star() {
  const [selected, setSelected] = useState(false);

  return (
    <div onClick={() => setSelected(!selected)}>
      <GoStarFill color={selected ? "#017AFF" : "#E2E2E2"} />
    </div>
  );
}

type Task = {
  title: string;
  category: string;
  date: string;
};

type TaskItemProps = {
  tasks: Task[];
  showStar?: boolean;
};

export default function TaskItem({ tasks, showStar = true }: TaskItemProps) {
  return (
    <div>
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
          {showStar && <Star />}
        </div>
      ))}
    </div>
  );
}
