import './assests/styles/main.scss';
import { BrowserRouter} from 'react-router-dom';
import Path from './Routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Path />
    </BrowserRouter>
  );
}
