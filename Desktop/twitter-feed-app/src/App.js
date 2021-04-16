
import './App.css';
import Feed from './Feed';
import Sidebar from "./Sidebar";
import Widgets from './Widgets'

function App() {
  return (
    <div className="app">
     
      <Sidebar/>
      {/* FEED BAR */}
     <Feed/>
      {/* RIGHT SIDE BAR */}
      <Widgets/>
    </div>
  );
}

export default App;
