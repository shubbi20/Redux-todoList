import './App.css';
import {Search} from './components/todosearch'
import AllList  from './components/showlist';

export function App() {

  return (
    <div className="container">
      <div className='containercard'>
              <Search />
              <AllList />
      </div> 
    </div>
  );
}



