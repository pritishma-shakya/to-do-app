import LeftPanel from "./components/left-panel";
import MainPanel from "./components/main-panel";
import RightPanel from "./components/right-panel";

export default function Home() {
  return (
    <div className="flex">
      <LeftPanel />
      <MainPanel />
      <RightPanel />
    </div>
  );
}
