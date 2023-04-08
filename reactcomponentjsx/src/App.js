
import './App.css';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';
import Photo from './component/profile/Photo';

function App() {
  return (
    <div className="App">
      <Photo />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
