import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='App'>
        <div className='top'>
          <a className='goHome white' href='/'>Go Back Home</a>
          <h1 className='appTitle'>THIS IS YOUR BOILERPLATE</h1>
        </div>
        <div className='docsContainer'>
          <ul className='orderedList docs'>
            <li className='listItem'><a className='white' href='https://reactjs.org/docs/hello-world.html'>react docs</a></li>
            <li className='listItem'><a className='white' href='https://nodejs.org/en/docs/'>node.js docs</a></li>
            <li className='listItem'><a className='white' href='https://expressjs.com/en/api.html'>express docs</a></li>
            <li className='listItem'><a className='white' href='https://docs.mongodb.com/manual/'>mongodb docs</a></li>
            <li className='listItem'><a className='white' href='https://docs.npmjs.com/'>npm info</a> and <a className='white' href='https://docs.npmjs.com/cli/docs'>docs</a></li>
            <li className='listItem'><a className='white' href='https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom'>react-router-dom info</a> and <a className='white' href='https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom/docs'>docs</a></li>
            <li className='listItem'><a className='white' href='https://devcenter.heroku.com/categories/reference'>heroku docs</a></li>
          </ul>
        </div>
        <ol className='orderedList toDo'>
          <li className='bold'><h3>Fork and Clone</h3>
            <ul>
              <li className='normalWeight'>go to <a href=''>this github account</a> and fork/clone the boilerplate.</li>
              <li className='normalWeight'>get the app started on your local machine.</li>
              <li className='normalWeight'>There are some questions below. Write the answers down somewhere and bring them with you to your interview.</li>
              <li className='normalWeight'>This is intentionally vague. We want to see your creativity and problem solving skills.</li>
              <li className='normalWeight'>You will see it after you first run <code>npm start</code> but the page is intentionally ugly. Please help us make it pretty!</li>
            </ul>
          </li>
          <li className='bold'><h3>Explore/Understand Backend</h3>
            <ul>
              <li className='normalWeight'><span className='bold'>package.json</span> - what does this file do? How do you install new items to this file?</li>
              <li className='normalWeight'><span className='bold'>.env</span> - what is this file and when do you use it?</li>
              <li className='normalWeight'><span className='bold'>routes/index.js</span> - what does a routes file do?</li>
              <li className='normalWeight'><span className='bold'>app.js</span> - You will have to edit this file to complete this assignment.</li>
            </ul>
          </li>
          <li className='bold'><h3>Explore/Understand Database</h3>
            <ul>
              <li className='normalWeight'><span className='bold'>models</span> - What is a Schema? What are the advantages of using a Schema vs. not using one?</li>
            </ul>
          </li>
          <li className='bold'><h3>Explore/Understand React</h3>
            <ul>
              <li className='normalWeight'><span className='bold'>client/package.json</span> - How does this differ form the package.json in the backend?</li>
              <li className='normalWeight'><span className='bold'>client/src/App.js</span> - this is your home page, it was declared in client/src/index.js.</li>
            </ul>
          </li>
          <li className='bold'><h3>To Do</h3>
            <ul>
              <li className='normalWeight'>Create new components
                <ul>
                  <li className='normalWeight underline'>At least one new parent component with at least two children.</li>
                  <li className='normalWeight underline'>render them using react-router-dom -- an npm package</li>
                  <li className='normalWeight underline'>set state in each and pass data down to at least one child component</li>
                  <li className='normalWeight underline'>render the data in the child, do something with it and pass data back up to parent and set state again</li>
                  <li className='normalWeight underline'>at least one of these should be a <a className='green' href='https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/'>Stateless Functional Component</a></li>
                  <li className='normalWeight underline'>Example: a to-do list, which allows you to add items in parent. The parent would hold all of the items in its state. Pass the items from parents state to a child to be rendered.</li>
                </ul>
              </li>
              <li className='normalWeight'>Use node/express with Mongoose and MongoDB to add/delete/edit items from the database</li>
              <li>Please make your new app look better than this!</li>
              <li className='normalWeight'>Host this app on Heroku - You can find hints in app.js - I have commented out three things which need to be commented back in for a heroku deployment in App.js. Also, there are three things that need to be commented out in that same file. Finally, you will need to make a small change to the package.json in the backend.</li>
              <li className='normalWeight'>Optional: add/remove any npm packages that you would like</li>
              <li className='normalWeight'>Optional: feel free to use an api, such as <a className='green' href='https://cloudinary.com/documentation/admin_api'>cloudinary</a>, <a className='green' href='https://openweathermap.org/api'>weather</a>, or anything else.</li>
            </ul>
          </li>
        </ol>
      </div>
    );
  }
}

export default ToDoList;
