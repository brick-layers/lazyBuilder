import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { components, history, store } from '../components.js'
import styles from './component.less'
import logoimg from '../../assets/lazybuilder.png'

document.ondragover = document.ondrop = ev => {
  ev.preventDefault()
}

document.body.ondrop = ev => {
  ev.preventDefault()
  // this.setState({ json: ev.dataTransfer.files[0].path })
  console.log(ev.dataTransfer.files[0].path)
}

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
    </Switch>
  )
}

const Home = () => {
  return (
    <div>
      <div className={styles.center}>
        <img width="50%" src={logoimg} alt="lazyBuilder Logo" />
        <div className={`${styles.logoText}`}>lazyBuilder</div>
        <h3 className={styles.dragText}>Drop a JSON file here</h3>
      </div>
      {/*<div className="padded">
        <div className={`box padded ${styles.box}`}>
          This has a disdsdsdsdfferent background color, but uses the same 'box'
          className. However, thanks to CSS modules the names dont collide. Here
          we are setting a background color, and overriding the shadow.
        </div>
  </div>*/}
    </div>
  )
}

export default Core
