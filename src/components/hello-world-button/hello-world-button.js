import './hello-world-button.scss'

// const helloWorld = () => console.log('Hello world')
// export default helloWorld

class HelloWorldButton {
  buttonClass = 'hello-world-button'

  render() {
    const body = document.querySelector('body')

    const button = document.createElement('button')
    button.innerHTML = 'Hello world'
    button.classList.add(this.buttonClass)
    button.onclick = () => {
      const p = document.createElement('p')
      p.innerHTML = 'Hello world'
      p.classList.add('hello-world-text')

      body.appendChild(p)
    }

    body.appendChild(button)
  }
}

export default HelloWorldButton
