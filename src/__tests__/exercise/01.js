// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const container = document.createElement('div')
  document.body.append(container)

  ReactDOM.render(<Counter />, container)

  const [decrement, increment] = container.querySelectorAll('button')

  const message = container.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')

  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })

  increment.dispatchEvent(clickEvent)
  expect(message.textContent).toBe('Current count: 1')
  decrement.dispatchEvent(clickEvent)
  expect(message.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
