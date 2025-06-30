import LeftPanel from "./components/left-panel";
import MainPanel from "./components/main-panel";

export default function Home() {
  return (
    <div className="flex pt-5">
      <LeftPanel />
      <MainPanel />
    </div>
  );
}
