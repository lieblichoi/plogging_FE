import React, { useEffect } from 'react';
import './App.css';
import { Switch, Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';

//pages
import { Header } from '../components';
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Posting from '../pages/Posting';
import PostDetail from '../pages/PostDetail';
import Reviews from '../pages/Reviews';
import ReviewDetails from '../pages/ReviewDetails';
import ReviewWrite from '../components/Reviews/ReviewWrite';
import { CrewsMyForm, MypageForm, ReviewsMyForm } from '../components';

function App() {
  const is_login = document.cookie;

  if (is_login) {
    return (
      <React.Fragment>
        <Header />
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/posting" exact component={Posting} />
            <Route path="/post/:id" exact component={PostDetail} />
            <Route path="/review" exact component={Reviews} />
            <Route path="/reviewWrite" exact component={ReviewWrite} />
            <Route path="/review/:reviewId" exact component={ReviewDetails} />
            <Route path="/my" exact component={MypageForm} />
            <Route path="/crews/my" exact component={CrewsMyForm} />
            <Route path="/reviews/my" exact component={ReviewsMyForm} />
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/post/:id" exact component={PostDetail} />
            <Route path="/review" exact component={Reviews} />
            <Route path="/review/:reviewId" exact component={ReviewDetails} />
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default App;
