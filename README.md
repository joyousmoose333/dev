# Dev

### Link to Deployed Website
    https://joyousmoose333.github.io/dev/

### Goal and Value of the Application
    This is an application inspired by the Law's field guide to California wildflowers,
    which I have used throughout my travels in the Sierra Nevadas. This 
    app allows users to view a handbook of wildflowers with details, sort based on color and 
    habitat, and filter the flowers based on the minimum altitude that they are found at,
    from high to low or low to high. This is all meant to help the user find the flower 
    that they are looking to identify, and add that flower to their personal field journal 
    to remember what they have seen outside. Their field journal also displays a "rarity score"
    which is calculated depending on if the plants on the list are rare or not (which is a 0
    or a 1 value I gave each flower).

### Usability Principles Considered
    I used the usability principles of visual hierarchy to add headings to my app. I also used consistent 
    colors to help make the site easy to learn and access, with simplicity and without confusion. 
    The font size is pretty large to help with readability and accessibility, while still being able to view 
    everything on the page at once. Locking the right div (the field journal / sorting) at the top of the screen 
    allows for better usability, as the user does not have to scroll back up to see what is in their cart. This 
    is a brief description of a few of the usability principles considered in the building of this app.

### Organization of Components
    I have two components - one Plant comoponent and one Journal component. The Plant component is used to 
    render each of the Plant cards, and handle the buttons to add/remove plant. The Journal component 
    renders the journal information--the plants in the journal and the rarity score.

### How Data is Passed Down Through Components
    Data is passed down through components using a props parameter. For the Plant component, I use 
    props to dynamically access the list of Plants and the information about each plant, which App.js 
    retrieves from the JSON file.
    
    In Journal, props are used so that the component can access the correct and up to date list to render 
    from App.js.
 
### How the User Triggers State Changes
    The user triggers state changes through checkboxes and radio buttons. The users interaction with these 
    changes the state of the revelant arrays -- ex. the array that represents the sorted data, the array that 
    represents the filtered data, and the final array which is rendered. 

