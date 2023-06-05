import { render } from "react-dom";
import ImgOne from './components/ImgOne'
import ImgTwo from './components/ImgTwo'
import ImgThree from './components/ImgThree'
import Fam from './components/Fam'
import 'atropos/css'
import Atropos from './components/Atropos'
function App() {
  return (
    <div>
      <ImgOne/>
      <ImgTwo/>
      <ImgThree/>
      <Fam/>
      <Atropos/>
    </div>
  );
}

render(<App />, document.getElementById("root"));
export default App;
