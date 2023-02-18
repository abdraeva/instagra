

import React from 'react';
import { Components } from '../../components';
import { Route, Routes as Switch } from "react-router-dom";
import { Layout } from '../../services/path';
import { LayoutPages } from '../Lazy';
import { Providers } from './../../providers/index';
import { Hooks } from '../../hooks';





export default function Layouts() {
  const  { token} = Providers.useAuth();
  const {goToLogin} = Hooks.useLocations();

  React.useEffect(() => {
    if(!token){
      goToLogin();
    }
  }, [token])


   return (
    <React.Fragment>
      <section className='layout_row'>
        
        <div className='layout_sidebar'>
          <Components.Sidebar/>
        </div>

        <div className='layout_routes'>
          <Switch>
            <Route path={Layout.home} element={<LayoutPages.Home/>} />
          </Switch>

        </div>

      </section>

    </React.Fragment>
  )
}
