// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Aloha from './components/Aloha';
require('./css/application.css')

const Hello = props => {
  const [name, setName] = useState('')
  useEffect(async ()=> {
    const resp = await axios.get('/episodes/1.json')
    console.log(resp.data);
    setName(resp.data.title);
  },[]);

  return (<div>
    Hello {name}!
    <Button>Do Stuff!</Button>
    <Aloha />
  </div>)
}

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
