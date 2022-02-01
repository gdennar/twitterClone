import './app.css';
import Sidebar from './Sidebar';
import './sidebar.css';
import './sidebarOption.css';
import './sidebarProfile.css';
import Feed from './Feed'
import './feed.css';
import Widget from './Widget';
import './widget.css';





function App() {

 

  return (
    <div className="app">
     
     <Sidebar />
     <Feed />
     <Widget />
    </div>
  );
}

export default App;
