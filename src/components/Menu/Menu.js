import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { store } from '../components.js'

const Menu = () => {
  const state = store.getState()
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Lazy Builder</h5>
      <MenuRow path="/" label="Home" icon="home" />
      <MenuRow path="/example" label="Example Page" icon="chart-bar" />
      <h5 className="nav-group-title">Database</h5>
      {state.Database.name ? (
        <MenuRow path="/database" label={state.Database.name} icon="database" />
      ) : (
        <MenuRow
          path="/database-add"
          label="Set Database"
          icon="plus-circled"
        />
      )}
      <h5 className="nav-group-title">Models</h5>
      {state.Models.models.length > 0 && (
        <div>
          <MenuRow path="/models" label="All Models" icon="list" />
          {state.Models.models.map(model => (
            <MenuRow
              path={`/model/${model.name}`}
              label={model.name}
              key={model.name}
              icon="right-open-mini"
            />
          ))}
        </div>
      )}
      <MenuRow path="/model-add" label="Add Model" icon="plus-circled" />
      <h5 className="nav-group-title">
        <span className="icon icon-share" /> Associations
      </h5>
      {state.Associations.associations.length > 0 && (
        <MenuRow
          path="/associations"
          label="Overview"
          icon="icon icon-doc-text"
        />
      )}
      <MenuRow
        path="/add-association"
        label="Add Association"
        icon="plus-circled"
      />
      <h5 className="nav-group-title">
        <span className="icon icon-cog" /> Options
      </h5>
      <MenuRow
        path="/outputFile"
        label="Save Configuration"
        icon="icon icon-logout"
      />
    </nav>
  )
}

const MenuRow = props => {
  return (
    <NavLink
      to={props.path}
      className="nav-group-item"
      activeClassName="active"
      exact={true}
    >
      <span className={'icon icon-' + props.icon} />
      {props.label}
    </NavLink>
  )
}

export default Menu
