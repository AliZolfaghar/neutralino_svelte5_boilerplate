import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { init } from '@neutralinojs/lib'

init()

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
