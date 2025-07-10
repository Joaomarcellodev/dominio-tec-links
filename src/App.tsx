import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";

import "./styles/global.css";

function App() {
 

  return (
    <> 
      <div className="center">
        <Logo/>
        <Button />
        <Footer/>
      </div>
      
    </>
  )
}

export default App
