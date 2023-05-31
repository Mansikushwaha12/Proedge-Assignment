# CONTACT APP

This code consists of a React application component called "MobileApp" that represents the main application. Let's take a look at the components and libraries/plugins used in the code.

## Component:

`<div className='full-body'>`: This represents the main container of your app.

`<div className='searchTag'> `: This is the container for the search box input and reset buttons.

And there is a search box input field where the user can enter search text.

`<button className="button" onClick={handleReset}>` This is a reset button that allows the user to clear the search text and reset the selected contact.

`<ul className='list'>` This is an unordered list container for rendering filtered contacts.
And there is a `li` which is represents a contact in your contact list.

`<div className='selectedContact'>`: This is the container for the popup that displays the name and number of the selected contact.

`<button className="button" onClick={handlePopupClose}>` This is the button inside the popup that allows the user to close the popup.

Let's talk about Libraries:-
## Libraries:

React is a JavaScript library used to build user interfaces and manage component-based architectures.
`useState:` This is a React hook used to manage state variables for functional components.
`MobileApp.css`: This is the CSS file that is imported to style the components inside the MobileApp component.
It includes CSS styles for the mobile app, search box, input, reset button, contact list, popup, and close button.
It also include responsive styles using media queries for different screen sizes.

# Deploy Link:

https://stunning-tartufo-551a79.netlify.app/
