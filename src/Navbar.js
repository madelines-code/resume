import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'



export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='navigation' style={{borderRadius: '0px', justifyContent: 'right', backgroundColor: '#305E74'}}>
           <Menu.Item
          as={Link} to="/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to="/resume"
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
        >
          Resume
        </Menu.Item>
      
        <Menu.Item
          as={Link} to="/portfolio"
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6', marginRight: '4rem'}}
        >
          Portfolio
        </Menu.Item>

     
      </Menu>
    )
  }
}



    