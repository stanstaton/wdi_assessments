<img src="https://res.cloudinary.com/briezh/image/upload/v1545165944/Screen_Shot_2018-12-18_at_12.44.56_PM_jofkzq.png">

# Project 1 Assessment - RETAKE

## Introduction (By Instructor)

Students who retake project 1 assessment are to be given class time to finish it, either in class or in another campus location and will be excused from whatever lab is going on in the class at that time. 

### GOAL

The goal of this final assessment is to gauge your ability to develop a **minimal** front-end web application using HTML, CSS & JavaScript, including your ability to:

- Write HTML that provides the application's overall structure and content. 
- Use CSS to provide styling.
- Use JavaScript to:
    - Define variables that hold application state, cache DOM elements, hold lookup data (constants), etc.
    - Select elements in the DOM.
    - Listen for browser events, such as `click`, being dispatched by DOM elements.
    - Manipulate a DOM element's content and style. 

### DEMO

The instructor will now demonstrate the app you will be building.

### OVERALL APPLICATION REQUIREMENTS

As you saw, the application's UI consists of:

- A temperature display, in degrees Fahrenheit
- A <input> element, in which the user can enter a number
- A button that, when clicked, converts a Fahrenheit temperature to Celsius
- A results div or p tag that displays the converted temperature

Use the screenshots below as your "wireframes".

Lastly, the styling does not have to be exact! Just make sure the functionality works!

### PROCESS

This assessment is an **individual** assignment - no collaboration please.

The good news is that it's "open book" - you may reference anything on your computer, Google, use notes, etc. 

However, don't spend too much time researching unless you're stuck - **do not over-think this application!!!**

It is estimated that this project assessment will take 60 to 90 minutes to complete. However, you have 3 hours should you need the extra time.

## Instructions & Time Guidelines (You've Got This!)

Please follow the following steps in order:

- **STEP 1 - Prepare** (&asymp; 5 minutes)
- **STEP 2 - Set Up the App** (&asymp; 5 minutes)
- **STEP 3 - Implement the App's Requirements** (&asymp; 40 minutes)
- **STEP 4 - Deploy to GitHub Pages** (&asymp; 10 minutes)
- **STEP 5 - Bonus**

**The times above are just estimated guidelines.**

## Assessment Steps to Complete

### STEP 1 - Prepare (5 minutes)

Briefly read through the rest of this assignment to better understand what is required before starting to code.

### STEP 2 - Set Up the App (5 minutes)

Be sure to follow best practices when setting up the project:

- Create a folder named `project-1-assessment` outside of all repos.
- Touch `index.html`
- Touch `script.js`, and include it in `index.html` such that it runs after the DOM is ready.

### STEP 3 - Implement the App's Requirements (40 minutes)

#### Upon Loading

When the application initially loads, the `<input>`'s value should be set to `32` and the result should be set to `0.00C` is rendered such that the display looks something like this:

<img src="https://res.cloudinary.com/briezh/image/upload/v1545165944/Screen_Shot_2018-12-18_at_12.44.20_PM_n9cmi6.png">

#### When the "Calculate" Button is Clicked

When the "Calculate" button is clicked, the value entered in the `<input>` is converted from degrees Fahrenheit to degrees Celsius. The Celsius value should be displayed in the results section.

<img src="https://res.cloudinary.com/briezh/image/upload/v1545165944/Screen_Shot_2018-12-18_at_12.44.56_PM_jofkzq.png">

Congrats, that's all there is to it!

### STEP 4 - Deploy to GitHub Pages (10 minutes)

Please follow these steps to deploy your app to GitHub Pages. You can either follow steps 1 through 7 below OR you may use the Github GUI settings to deploy. Your choice!

1. In Terminal, create a local git repo: `$ git init`

2. Make a commit: `$ git add -A && git commit -m "Initial commit"`

3. In your GitHub account, create a new repository named `project-1-assessment-retake`.

4. Back in Terminal, add the `origin` remote:<br>`$ git remote add origin https://github.com/<your github username>/project-1-assessment.git`

    > Be sure to replace **\<your github username\>** with your GitHub username!

5. Create the `gh-pages` branch:<br>`$ git checkout -b gh-pages` 

6. Now run the command `$ git push origin gh-pages` to deploy! Enter your credentials if necessary.

7. Browse to `https://<your github username>.github.io/project-1-assessment` to check it out!

> Note that the link might take a minute to become active.

**Slack the deployed app's link to your instructors - congrats, you are done!**

### STEP 5 - Bonus!

As an optional bonus, if you have extra time, complete one or more of the following:

* Display the result in red if the temperature is above 30 degrees Celsius 
* Display the result in light blue if the temperature is below 0 degrees Celsius!
* Round off the number of decimal places to 2 using the `toFixed()` function
* Do error checking to make sure the user entered a valid number. If they didn't, scold them!

<img src="https://res.cloudinary.com/briezh/image/upload/v1545166468/Screen_Shot_2018-12-18_at_12.54.13_PM_s3udrl.png">

### HINTS

* Don't spin your wheels! If something isn't working, look for a different approach!

