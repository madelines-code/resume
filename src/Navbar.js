import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Button, Grid, GridColumn, GridRow, Icon, Menu } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable borderless className='navigation' style={{borderRadius: '0px', backgroundColor: '#305E74'}}>
           <Menu.Item
          as={Link} to="/home#about="
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
          className='navButton'
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to="/home#devprojects"
          name='devprojects'
          active={activeItem === 'devprojects'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
          className='navButton'
        >
          Dev Projects
        </Menu.Item>
        <Menu.Item
          as={Link} to="/home#portfolio"
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
          className='navButton'
        >
          Portfolio
        </Menu.Item>
        <Menu.Item
          as={Link} to="/home#resume"
          name='resume'
          active={activeItem === 'resume'}
          onClick={this.handleItemClick}
          style={{color: '#DBC8B6'}}
          className='navButton'

        >
          Resume
        </Menu.Item>
        <Menu.Menu position='right'>
      <Menu.Item className='navButton' style={{color:'#DBC8B6',  paddingTop:'8px', paddingRight: '0', opacity: '100' }} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/madelinea/'>
        <Icon class='link' enabled name='linkedin' size='large'/></Menu.Item>
      <Menu.Item className='navButton' style={{color:'#DBC8B6', paddingTop:'8px', opacity: '100'}} target="_blank" rel="noreferrer" href='https://github.com/madelines-code'>
         <Icon class='link' enabled name='github' size='large' /></Menu.Item>
         </Menu.Menu>
      </Menu>
    )
  }
}
;



    