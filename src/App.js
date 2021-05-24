import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RegistrationPage, AuthorizationPage,
    BlogPage, MainPage ,RoutesPage,
    ProfilePage, NotFoundPage,
    RouteDetailsPage, CreatingRoute
} from "./pages";
import { auth } from './action/user';

function App() {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.user.userName);
    const coordinates = useSelector(state => state.creatingRoutes.coordinates);

    React.useEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(auth())
        }
    }, [])

    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/Blog' component={BlogPage} />
            <Route exact path='/Routes' component={RoutesPage} />
            {
                userName &&
                <Route exact path='/Profile' component={ProfilePage} />
            }
            <Route path='/Registration' component={RegistrationPage} />
            <Route path='/Authorization' component={AuthorizationPage} />
            <Route path="/Routes/:id" component={RouteDetailsPage} />
            {
                coordinates.length > 1 &&
                <Route path="/Profile/Routes" component={CreatingRoute} />
            }
            <Route component={NotFoundPage} />
        </Switch>
    );
}

export default App;
