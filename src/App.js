import {ep} from './Star Trek episodes-ranked'
import styled from 'styled-components';

const ListItem = styled('li')`
  list-style-type: none;
  padding: 0;
  margin: 0
`

function App() {
  console.log(ep)
  return (
    <div className="App">
      <button></button>
      <ul>
        {ep.map(x =>{ 
          return (
            <ListItem>
              <input type='checkbox'/>
                <label>{x}</label>
            </ListItem>
        )}
        )}
      </ul>
    </div>
  );
}

export default App;
