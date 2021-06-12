import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RegistrationPage, AuthorizationPage,
    BlogPage, MainPage ,RoutesPage,
    ProfilePage, NotFoundPage,
    RouteDetailsPage, CreatingRoute,
    EditReportPage, ReportPage,
    CreateBlog, DetailsBlog
} from "./pages";
import { auth } from './action/user';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const coordinates = useSelector(state => state.creatingRoutes.coordinates);

    React.useEffect(() => {
        if(localStorage.getItem('token')){
            dispatch(auth())
        }
    }, [])

    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/Blog' component={BlogPage} />
            <Route exact path='/Routes' component={RoutesPage} />
            {
                user.userName &&
                <Route exact path='/Profile' component={ProfilePage} />
            }
            {
                user.userName &&
                <Route exact path='/Profile/CreateRouteReport/:id' component={EditReportPage} />
            }
            {
                user.userName &&
                <Route path='/Profile/RouteReport/:id' component={ReportPage} />
            }
            {
                user.isAdmin &&
                <Route path='/CreateBlog' component={CreateBlog} />
            }
            <Route path='/Registration' component={RegistrationPage} />
            <Route path='/Authorization' component={AuthorizationPage} />
            <Route path="/Routes/:id" component={RouteDetailsPage} />
            {
                coordinates.length > 1 &&
                <Route path="/Profile/Routes" component={CreatingRoute} />
            }
            <Route path="/Blog/:id" component={DetailsBlog} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}

export default App;
