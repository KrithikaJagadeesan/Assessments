### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.

 //Your Answer
Dumb components only render HTML from smart (logic) components. Smart components generate the logic, props and give info to dumb components to render.  

 //Googled Answer
 Smart Components:Describe how things work
Provide no DOM markup or styles
Provide application data, do data fetching
Call Flux actions
Named Container by convention
Dumb Components:Describe how things look
Have no app dependencies
Receive only props, providing data and callbacks
Rarely have own state, when they do, it’s just UI state
Named anything that’s a UI noun


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer
yarn add ..., yarn is adding all of the packages to the dependancies. yarn.lock and package.json will be automatically updated when we add a package with yarn.

 //Googled Answer
 In general, a package is simply a folder with code and a package.json file that describes the contents. When you want to use another package, you first need to add it to your dependencies. This means running yarn add [package-name] to install it into your project.

 This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.

 Most packages will be installed from the npm registry and referred to by simply their package name. For example, yarn add react will install the react package from the npm registry.

#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends React.Component {
      constructor(props){
        super(props)
        this.state = {
          recipes:
            name:['Meatballs', 'Mac & Cheese']

        }
      }

      render() {

        return (
          <div>
            let recipes = this.state.recipes.map(function(recipe, index)=>
                <li key={index}>{recipe}</li>
              )
            })

            <ul>
              {recipes}
            </ul>

          </div>
        );
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
button, submit, text

 //Googled Answer
email, password, date pickers, radio

 #### 7. How would you explain state to a friend who doesn't know code?

 //Your Answer
 It is how a component renders and behaves, essentially it is what you can see on the webpage that can be capable of changing dynamically.


 //Googled Answer
The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer
Component state is used to display data on current webpage. While props are used to pass data or functions to children components.

 //Googled Answer
"Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope.As you can see we can pass props to our React component using attributes and then can access them inside our component using this.props pretty straightforward. Props are similar to passed arguments to a function. Props as you can see we can pass props to our React component using attributes and then can access them inside our component using this.props pretty straightforward. Props are similar to passed arguments to a function. "

#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.

Tic-tac-toe was challenging as we pair programmed, although we were successful able to finish the project. I learned that I really to to get a better grasp on all the parts of React and really need to keep trying to learn and re-learn the syntax.
