
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    //fragment tag<></> 
  //using fragment tag to avoid using div tag
  //and to avoid using extra div tag in the DOM
<>
{/* <Navbar title = "TextUtils" aboutText="About"/> */}
{/* <Navbar title = "TextUtils"/> */}
<Navbar/>
 </>
  );

}

export default App;
