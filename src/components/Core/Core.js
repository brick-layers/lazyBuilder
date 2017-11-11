import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { components, history, store } from '../components.js'
import styles from './component.less'
import logoimg from '../../assets/lazybuilder.png'

const Core = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="window">
          <div className="window-content">
            <div className="pane-group">
              <div className="pane-sm sidebar">
                <components.Menu />
              </div>
              <div className="pane padded">
                <AppRouter />
              </div>
            </div>
          </div>
          <components.Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={components.Example} />
      <Route path="/database" component={components.Database} />
      <Route path="/database-add" component={components.DatabaseForm} />
      <Route path="/models" component={components.Models} />
      <Route path="/model/:name" component={components.Model} />
      <Route path="/model-edit/:name" component={components.ModelForm} />
      <Route path="/model-add" component={components.ModelForm} />
      <Route path="/associations" component={components.Associations} />
      <Route path="/add-association" component={components.AssociationForm} />
    </Switch>
  )
}

const Home = () => {
  return <components.Drag />
}

export default Core
