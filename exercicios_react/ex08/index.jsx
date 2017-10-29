import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
  <div>
    <Family>
      <Member name="Guilherme" lastName="Oliveira" />
    </Family>
  </div>
  , document.getElementById('app'))
