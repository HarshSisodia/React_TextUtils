
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    //fragment tag<></> 
  //using fragment tag to avoid using div tag
  //and to avoid using extra div tag in the DOM
<>
<Navbar title = "TextUtils" aboutText="About"/>
<TextForm/>
{/* <Navbar/> */}
{/* <Navbar title = "TextUtils"/> */}

 </>
  );

}

export default App;
