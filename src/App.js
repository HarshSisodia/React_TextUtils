
import './App.css';
import Navbar from './Components/Navbar';
import textForm from './Components/textForm';

function App() {
  return (
    //fragment tag<></> 
  //using fragment tag to avoid using div tag
  //and to avoid using extra div tag in the DOM
<>
<Navbar title = "TextUtils" aboutText="About"/>
<textForm/>
{/* <Navbar/> */}
{/* <Navbar title = "TextUtils"/> */}

 </>
  );

}

export default App;
