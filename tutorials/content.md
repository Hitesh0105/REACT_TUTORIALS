1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?

    All the elements I render get put inside the div with the id of "root"
    (or whatever other element I might select when calling createRoot)

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
    An object! Unlike creating an HTML element in vanilla DOM JS, what
    gets created from the JSX we have in our React code is a plain JS object
    that React will use to fill in the view.

3. What's wrong with this code:
```
    root.render(
            <h1>Hi there</h1>
            <p>This is my website!</p>  
    )
    ```
      root.render(
        <div>
            <h1>Hi there</h1>
            <p>This is my website!</p>  
        </div>
    )
    You can only render 1 parent element at a time. That parent element can have
    as many children elements as you want.

4. What does it mean for something to be "declarative" instead of "imperative"?

    *Imperative* means we need to give specific step-by-step instructions on how to
    accomplish a task.
    *Declarative* means we can write our code to simply "describe" *what* should show up
    on the page and allow the rool (React, e.g.) to handle the details on *how* to 
    put those things on the page.

5. What does it mean for something to be "composable"?

    We have small pieces that we can put together to make something
    larger or greater than the individual pieces themselves.

6. What is a React component?

    A function that returns React elements.

7. What's wrong with this code?
    ```
    function myComponent() {
        return (
            <small>I'm tiny text!</small>
        )
    }
    ```

    ``` pascal casing
    function MyComponent() {
        return (
            <small>I'm tiny text!</small>
        )
    }
    ```

8. What's wrong with this code?
    ```
    function Header() {
        return (
            <header>
                <img src="./react-logo.png" width="40px" alt="React logo" />
            </header>
        )
    }

    root.render(Header())
    ```

    root.render(<Header/>)


<!-- props -->

1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!


Destructuring Props

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {img: image, name} = person
console.log(image)

Fragment = A wrapper that doesn't create an extra DOM element.


/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})

// console.log(squares)



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

// console.log(capitalized)



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
})

console.log(paragraphs)

1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?
    1. We often don't have the data ahead of time when we're building
       the app, so we simply can't manually type them out.
    2. It makes our code more "self-sustaining" - not requiring additional
       changes to the code whenever the data changes.