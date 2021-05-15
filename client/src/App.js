import Timer from "./Timer";
import History from "./History";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {

  
  
    return (
  
     
        <Router>
          <div className="App">
          
        
            
            
            <Switch>
              <Route exact path="/">
                <Timer />
              
              </Route>
              <Route path="/view">
                <History />
              </Route>
              
  
            
            
            </Switch>
           
           
          </div>
      </Router>
  
    );
  }
  
  export default App;
  