// import helloWorld from './hello-world'
import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
// import addImage from './add-image'
import Heading from './components/heading/heading.js'
import React from 'react'

const heading = new Heading()
heading.render('hello-world')
// helloWorld()
// addImage()
const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

if (process.env.NODE_ENV === 'production') {
  console.log('production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('development mode')
}

// helloWorldButton.methodThatDoesNotExist()
