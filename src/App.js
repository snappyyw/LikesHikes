import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { RegistrationPage, AuthorizationPage, BlogPage, MainPage ,RoutesPage, ProfilePage, NotFound } from "./pages"
import { auth } from './action/user';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)

  React.useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/Blog' component={BlogPage} />
      <Route path='/Routes' component={RoutesPage} />
      {user && <Route path='/Profile' component={ProfilePage} />}
      <Route path='/Registration' component={RegistrationPage} />
      <Route path='/Authorization' component={AuthorizationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
