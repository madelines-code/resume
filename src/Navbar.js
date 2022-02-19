import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu >
           <Menu.Item
          as={Link} to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to="/resume"
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
        >
          Resume
        </Menu.Item>
      
        <Menu.Item
          as={Link} to="/portfolio"
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>

     
      </Menu>
    )
  }
}



    