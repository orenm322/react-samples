# react-samples
Sample code from learning React
Learned from Udemy.com (https://www.udemy.com/react-the-complete-guide-incl-redux)

Assignment 1
/base-syntax--assignment-problem

Code based on meeting the following requirements:

1. Create TWO new components: UserInput and UserOutput
2. UserInput should hold an input element, UserOutput two paragraphs
3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
4. Pass a username (of your choice) to UserOutput via props and display it there
5. Add state to the App component (=> the username) and pass the username to the UserOutput component
6. Add a method to manipulate the state (=> an event-handler method)
7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
9. Add two-way-binding to your input (in UserInput) to also display the starting username
10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

Assignment 2
/lists-conditionals--assignment-problem

1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.

Assignment 3
/routing--assignment-problem

1. Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)
2. Add a simple navigation with two links => One leading to "Users", one leading to "Courses"
3. Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)
4. Pass the course ID to the "Course" page and output it there
5. Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)
6. Load the "Course" component as a nested component of "Courses"
7. Add a 404 error page and render it for any unknown routes
8. Redirect requests to /all-courses to /courses (=> Your "Courses" page)
