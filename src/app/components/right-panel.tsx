import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import TaskItem from "./task-item";

function Information() {
    return (
        <div className="flex gap-2 items-center">
            <img src="/person.jpg" className="w-10 h-10 rounded-full border-2 border-gray-200"/>
            <div className="flex flex-col">
                <h3 className="font-medium">Alvian Putra</h3>
                <h4 className="text-gray-400 text-sm">alvian@gojek.com</h4>
            </div>
        </div>
    )
}

function Month() {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-gray-800">December 2022</h2>
        <FaChevronRight color="#4a8af7" size={12} />
      </div>
      <div className="flex gap-3">
        <FaChevronLeft color="#4a8af7" />
        <FaChevronRight color="#4a8af7" />
      </div>
    </div>
  );
}

function Calendar() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = [
    '', '', '', '', '1', '2', '3',
    '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23', '24',
    '25', '26', '27', '28', '29', '30', '31'
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs text-gray-500 font-medium">
        {days.map(day => <div key={day}>{day}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm text-center">
        {dates.map((date, i) => (
          <div
            key={i}
            className={`h-8 w-8 flex items-center justify-center 
              ${date ? 'cursor-pointer hover:bg-blue-50' : ''} 
              ${date === '27' ? 'bg-blue-500 text-white rounded-full' : ''}`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompletedTasks(){
    const completed = [
        { title: "Cleaning Personal Room", category: "Personal", date: "Today" },
        { title: "Taking shower", category: "Personal", date: "Today" },
        { title: "Get Breakfast", category: "Personal", date: "Today" }
    ]
    return(
        <div>
            <div>
                <h1 className="font-semibold"> Completed task </h1>
            </div>
            <TaskItem tasks={completed} showStar={false}/>
        </div>
    )
}

export default function RightPanel() {
    return (
        <div className="bg-[#fafafa] p-4 pt-10 h-screen w-1/5">
            <div className="flex justify-between items-center">
                <Information />
                <div className="flex gap-3">
                    <IoNotificationsOutline color="#4a8af7" size={20}/>
                    <IoSettingsOutline color="#4a8af7" size={20}/>
                </div>
            </div>
            <div className="pt-6">
                <Month />
                <Calendar />
            </div>
            <div className="pt-5">
                <CompletedTasks />
            </div>
        </div>
    )
}