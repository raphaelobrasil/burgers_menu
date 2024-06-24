'use client'
 
import ReactDOM from 'react-dom'

 
export function PreloadResources() {
  ReactDOM.preload('/img/banner.jpeg', { as: 'image' })
  ReactDOM.preload('/img/logo.png', { as: 'image' })
 
  return null
}