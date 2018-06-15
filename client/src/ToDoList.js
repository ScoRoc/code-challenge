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
        <a className='goHome white' href='/'>Go Back Home</a>
        <div className='top'>
          <h1 className='appTitle glowingText'>START HERE...</h1>
        </div>
        <div className='docsContainer'>
          <ul className='orderedList docs'>
            <li className='listItem'><a target="_blank" className='white' href='https://www.google.com'>google</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://reactjs.org/docs/hello-world.html'>react docs</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://nodejs.org/en/docs/'>node.js docs</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://expressjs.com/en/api.html'>express docs</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://docs.mongodb.com/manual/'>mongodb docs</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://docs.npmjs.com/'>npm info</a> and <a className='white' href='https://docs.npmjs.com/cli/docs'>docs</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom'>react-router-dom info</a> and <a className='white' href='https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom/docs'>docs</a></li>
            <li className='listItem'><a target="_blank" className='white' href='https://devcenter.heroku.com/categories/reference'>heroku docs</a></li>
          </ul>
        </div>
        <div className='overviewContainer'>
          <h1>Overview</h1>
          <p>This will be a test of the minimum skills required to be able to complete any given task as a <code>foundry10</code> engineer.</p>
          <p>We would like you to build a MERN application from a forked/cloned MERN boilerplate. Try to encorporate your own style into the app!</p>
          <p className='bold'>Build whatever you would like, just make sure you follow all of the requirements (below). Feel free to do more than the minimum.</p>
          <p>We will check that you are following all of the best practices.</p>
          <p>Recent design trends is important too. Make it look good.</p>
          <p>We are also interested in optimization / performance.</p>
          <p>Responsive design is important, especially on mobile.</p>
        </div>
        <ol className='orderedList toDo'>
          <li className='bold'><h3>Fork and Clone</h3>
            <ul>
              <li className='normalWeight'>go to <a target="_blank" href='https://github.com/stevens1434/code-challenge'>this github account</a> and fork/clone the boilerplate.</li>
              <li className='normalWeight'>get the app started on your local machine.</li>
              <li className='normalWeight'>This is intentionally vague. We want to see your creativity and problem solving skills.</li>
            </ul>
          </li>
          <li className='bold' style={{marginBottom: '100px'}}><h3>Requirements</h3>
            <ul>
              <li className='normalWeight'>Create new components
                <ul>
                  <li className='normalWeight underline'>At least one new parent component with at least two children.</li>
                  <li className='normalWeight underline'>Render them using react-router-dom -- an npm package. We want to see multiple routes with different urls.</li>
                  <li className='normalWeight underline'>Use <code>state</code> and <code>props</code> properly. Use the docs links in the header if you need help.</li>
                  <li className='normalWeight underline'>Render the data in the child, do something with it and pass data back up to parent and set state again</li>
                  <li className='normalWeight underline'>Use a <a target="_blank" className='green' href='https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/'>Stateless Functional Component</a> in all appropriate situations.</li>
                  <li className='normalWeight underline'>Example: a to-do list, which allows you to add items in parent. The parent would hold all of the items in its state. Pass the items from parents state to a child to be rendered.</li>
                </ul>
              </li>
              <li className='normalWeight'>Use node/express with Mongoose and MongoDB to add/delete/edit items from the database</li>
              <li>Please make your new app look better than this!</li>
              <li className='normalWeight'>Host this app on Heroku - You can find hints in app.js - I have commented out three things which need to be commented back in for a heroku deployment in App.js. Also, there are three things that need to be commented out in that same file. Finally, you will need to make a small change to the package.json in the backend.</li>
              <li className='normalWeight'>Optional: add/remove any npm packages that you would like</li>
              <li className='normalWeight'>Optional: feel free to use an api, such as <a target="_blank" className='green' href='https://cloudinary.com/documentation/admin_api'>cloudinary</a>, <a target="_blank" className='green' href='https://openweathermap.org/api'>weather</a>, or anything else. but make sure that you use the .env file correctly if you do.</li>
            </ul>
          </li>
        </ol>
      </div>
    );
  }
}

export default ToDoList;
