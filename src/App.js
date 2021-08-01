import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfilesPage from './pages/ProfilesPage';
import DetailsPage from './pages/DetailsPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path='/details/:id' component={DetailsPage} />
        <Route path='/' component={ProfilesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;