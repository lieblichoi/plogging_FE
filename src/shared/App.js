import React, { useEffect } from 'react';
import './App.css';
import { Switch, Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import user, { userCreators } from '../redux/modules/user';
import ReactGA from 'react-ga';
import RouteChangeTraker from './RouteChangeTracker';
import { getsCookie } from './Cookie';

//pages
import { Header } from '../components';

import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Posting from '../pages/Posting';
import PostDetail from '../pages/PostDetail';
import Reviews from '../pages/Reviews';
import ReviewDetails from '../pages/ReviewDetails';
import ReviewWrite from '../pages/ReviewWrite';
import EditReview from '../pages/EditReview';
import Mypage from '../pages/MyPage';

import {
  CrewsMyForm,
  MypageForm,
  ReviewsMyForm,
  BookMarkMyForm,
} from '../components';
import MeetingMyForm from '../components/MypageTab/MeetingMyForm';
import MeetingCheckForm from '../components/MypageTab/MeetingCheckForm';
import CheckSave from '../components/MypageTab/CheckSave';
import MyprofileEditTab from '../components/MypageTab/MyprofileEditTab';

import { Footer } from '../components/Footer';
import EditPosting from '../pages/EditPosting';
import Campaign from '../pages/Campaign';
import CampaignDetail from '../pages/CampaignDetail';
import Searches from '../pages/Searches';

function App() {
  const TRACKING_ID = 'G-1TKZEMZ03J'; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  const is_login = getsCookie('token');

  if (is_login) {
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path='/meetingcheck/:postId'
              exact
              component={MeetingCheckForm}
            />
            <Route path='/checksave' exact component={CheckSave} />
            <>
              <Header />
              <Route path='/' exact component={Main} />
              <Route path='/posting' exact component={Posting} />
              <Route path='/post/:id' exact component={PostDetail} />
              <Route path='/post/:id/edit' exact component={EditPosting} />
              <Route path='/review' exact component={Reviews} />
              <Route
                path='/review/:postId/:reviewId/edit'
                exact
                component={EditReview}
              />

              <Route
                path='/reviewWrite/:postId'
                exact
                component={ReviewWrite}
              />
              <Route path='/review/:reviewId' exact component={ReviewDetails} />
              <Route path='/my' exact component={Mypage} />
              <Route path='/crews/my' exact component={CrewsMyForm} />
              <Route path='/reviews/my' exact component={ReviewsMyForm} />
              <Route path='/my/edit' exact component={MyprofileEditTab} />
              <Route path='/meeting/my' exact component={MeetingMyForm} />
              <Route path='/bookMark/my' exact component={BookMarkMyForm} />
              <Route path='/searches' exact component={Searches} />
              <Route path='/campaign' exact component={Campaign} />
              <Route path='/campaign/1' exact component={CampaignDetail} />
              <Footer />
            </>
          </Switch>
          <RouteChangeTraker />
        </ConnectedRouter>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path='/meetingcheck/:postId'
              exact
              component={MeetingCheckForm}
            />
            <>
              <Header />
              <Route path='/' exact component={Main} />
              <Route path='/login' exact component={Login} />
              <Route path='/signup' exact component={SignUp} />
              <Route path='/post/:id' exact component={PostDetail} />
              <Route path='/review' exact component={Reviews} />
              <Route path='/review/:reviewId' exact component={ReviewDetails} />
              <Route path='/meeting/my' exact component={MeetingMyForm} />
              <Route path='/searches' exact component={Searches} />
              <Route path='/campaign' exact component={Campaign} />
              <Route path='/campaign/1' exact component={CampaignDetail} />
              <Footer />
            </>
          </Switch>
          <RouteChangeTraker />
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default App;
