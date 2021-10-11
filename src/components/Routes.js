import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from '../containers/Catalog';
import BookDetails from '../containers/BookDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/details/:isbn" component={BookDetails} />
      <Route path="/" component={Catalog} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
