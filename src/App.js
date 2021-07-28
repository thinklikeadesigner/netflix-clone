import { BrowserRouter as Router, Route } from 'react-router-dom';
import jumboData from './fixtures/jumbo.json';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

console.log(jumboData);
export default function App() {
  // const Source = styled.src``;

  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
    </Router>
    //
  );
}
