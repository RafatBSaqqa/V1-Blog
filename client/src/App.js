import {RouterProvider} from "react-router-dom"
import { router } from "./routes";
function App() {
  return (
    <RouterProvider router={router}/>
    // <div className="App">
    //   <header className="App-header">
    
    //  <Home/>
    //    <h1>Welcome to React JS application </h1>
    //   </header>
    // </div>
  );
}

export default App;
