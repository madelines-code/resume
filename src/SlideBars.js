import React, { useState } from "react";
import { Icon} from 'semantic-ui-react'



export const SlideBars = [
  {
    title: 'Home',
    path: '/home#about=',
    cName: 'navText'
  },
  {
    title: 'Dev Projects',
    path: '/home#devprojects',
    cName: 'navText'
  },
  {
    title: 'Portfolio',
    path: '/home#portfolio',
    cName: 'navText'
  },
  {
    title: 'Resume',
    path: '/home#resume',
    cName: 'navText'
  },
  {
    title: '',
    path: 'https://www.linkedin.com/in/madelinea/',
    icon: <Icon class='link' enabled name='linkedin' size='large'/>,
    cName: 'navText iconSidebar'
  },
  {
    title: '',
    path: '/',
    icon: <Icon class="link" enabled name="github" size="large" />,
    cName: 'navText iconSidebar'
  },

 
]