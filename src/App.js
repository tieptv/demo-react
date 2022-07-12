import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ParentComponent from './component/licycle';
import HookComponent from './component/hook';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Switch>
        <Route
          path="/"
          name="lifecycle"
          exact
         component={ParentComponent}
        />
        <Route
          path="/hook"
          name="hook"
         component={HookComponent}
        />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
