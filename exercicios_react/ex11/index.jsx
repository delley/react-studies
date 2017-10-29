import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
  <div>
    <Family lastName="Oliveira">
      <Member name="Guilherme" />
      <Member name="Melyssa" />
      <Member name="Manuela" />
    </Family>
  </div>
  , document.getElementById('app'))
