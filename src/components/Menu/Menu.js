import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Lazy Builder</h5>
      <MenuRow path="/" label="Home" icon="home" />
      <MenuRow path="/example" label="Example Page" icon="chart-bar" />
      <h5 className="nav-group-title">
        <span className="icon icon-database" /> Database
      </h5>
      <MenuRow path="/add-database" label="Set Database" icon="plus-circled" />
      <h5 className="nav-group-title">
        <span className="icon icon-list" /> Models
      </h5>
      <MenuRow path="/add-model" label="Add Model" icon="plus-circled" />
      <h5 className="nav-group-title">
        <span className="icon icon-share" /> Associations
      </h5>
      <MenuRow
        path="/add-association"
        label="Add Association"
        icon="plus-circled"
      />
      <h5 className="nav-group-title">
        <span className="icon icon-cog" /> Options
      </h5>
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
