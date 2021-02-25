
import Blogdetails from "./blogdetail";
import Update from './update'
import Home from './Home'
import  { BrowserRouter as Router,Route,Switch  } from 'react-router-dom'
import Navbar from "./navbar";
import Create from './create'
function App() {
  return (
    <Router>
    <div className="App">
      <div className="div1">
       
       <h1>TRAVEL BUG</h1>
        <Navbar></Navbar>
        <p>Explore the experience..</p>
        </div>
      <div className="content">
        <Switch>
          <Route path="/" exact={true}><Home/></Route>
          <Route path="/blogs/:id"><Blogdetails/></Route>
          <Route path="/create"><Create/></Route>
          <Route path="/update/blogs/:id"><Update/></Route>
  
        </Switch>
      </div>
      <div className="contact">
       <p>Contact Us</p>
        <p></p>
       <p> @TRAVEL BUG </p>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
