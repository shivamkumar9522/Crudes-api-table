import Crudes from "./Component/Crude";
import Edit from "./Component/EditForm";
import Forms from "./Component/FormPage";
import Outlate from "./Component/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App"> 
       <BrowserRouter>
      <Routes>
         
          <Route  path="/" element={<Crudes />} />
          {/* <Route index path="/crude" element={<Crudes />} />
          <Route path ="/editform"element={<EditForm/>}/> */}
          <Route path ="/user/form"element={<Forms/>}/> 
          <Route path ="/"element={<Forms/>}/> 
        
           
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
