import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';


export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='navigation' style={{borderRadius: '0px', justifyContent: 'right', backgroundColor: '#305E74'}}>
           <Menu.Item
          as={Link} to="/home#about="
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to="/home#devprojects"
          name='devprojects'
          active={activeItem === 'devprojects'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
        >
          Dev Projects
        </Menu.Item>
        <Menu.Item
          as={Link} to="/home#portfolio"
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
        >
          Portfolio
        </Menu.Item>
        <Menu.Item
          as={Link} to="/home#resume"
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6', marginRight: '4rem'}}
        >
          Resume
        </Menu.Item>
     
      </Menu>
    )
  }
}



    