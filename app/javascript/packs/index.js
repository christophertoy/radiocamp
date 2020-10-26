// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Aloha from './components/Aloha';
import NavBar from './components/NavBar';
require('./css/application.css')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Aloha name="React" />,
    <NavBar />,
    document.getElementById("root")
    // document.body.appendChild(document.createElement('div')),
  )
})
