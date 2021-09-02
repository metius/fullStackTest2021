import {Switch, Route} from 'react-router-dom';

import HomePage from '../pages/HomePage.page'
import NotFoundPage from '../pages/NotFoundPage.page'
import Question1 from '../pages/Question1.page'
import Question2 from '../pages/Question2.page'
import Question3 from '../pages/Question3.page'
import Question4 from '../pages/Question4.page'
import Question5 from '../pages/Question5.page'
import CountryCardPage from '../pages/CountryCardPage.page';

const AppRoutes = () => {
  return(
    <div className='container'>
      <div className='section is-medium'>
        <Switch>
          <Route exact path="/q1" component={Question1} />
          <Route exact path="/q2" component={Question2} />
          <Route exact path="/q3" component={Question3} />
          <Route exact path="/q4" component={Question4} />
          <Route exact path="/q5" component={Question5} />
          <Route exact path="/country/:name" component={CountryCardPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  )
}

export default AppRoutes;