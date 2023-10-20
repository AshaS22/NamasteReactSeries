// create h1 in react
//Object is where we give attribute to tags
const heading = React.createElement('h1', {id:'heading'}, "Namaste from react")
// We need to tell react which is the root
const elem = ReactDOM.createRoot(document.getElementById('root'))
elem.render(heading);

// React element is nothing but a normal JS Object. Prints an object of type React.Element
console.log(heading)

//Props are children+attributes that we pass in ̰ß