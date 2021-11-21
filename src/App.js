import './App.css';
import {Search} from './components/todosearch'
import { Alllist } from './components/showlist';

export function App() {

  return (
    <div className="container">
      <div className='containercard'>
              <Search />
              <Alllist />
      </div> 
    </div>
  );
}



