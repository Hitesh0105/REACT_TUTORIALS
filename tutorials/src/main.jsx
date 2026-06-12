import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Page from './components/page.jsx'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const root = createRoot(document.querySelector('#root'));
// root.render(<p>Hello ! Welcome to the React World</p>)

// const root=createRoot(document.querySelector('#root'));
// root.render(<ul>
//   <li>React is a Java script library</li>
//   <li>React uses Virtual DOM</li>
//   <li>React is a popular frontend library</li>
// </ul>)

//createElement
// const root=createRoot(document.querySelector('#root'));
// //const reactElement=createElement("h1",null,"Hello from Create element");
// const reactElement=<h1>replacing createElement syntax code</h1>
// root.render(
//   reactElement
// )


//day2

// const root=createRoot(document.getElementById('root'));

// function MyAwesomeNavbar() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarsExample03">
//           <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="#">Action</a></li>
//                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//           </ul>
//           <form role="search">
//             <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//           </form>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function MainContent(){
//   return(
//     <h1>React is Great</h1>
//   )
// }

// root.render(
//   <div>
//     <MyAwesomeNavbar/>
//     <MainContent/>
//   </div>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/

// const h1=document.createElement("h1");
// h1.textContent="This is Imperative";
// h1.className="Header";
// document.getElementById("root").appendChild(h1);


// root.render(
//   <h1 className='Header'>This is Declarative</h1>
// )

// const root =createRoot(document.getElementById('root'));
// root.render(
//   <h1 className='Header'>This is Declarative</h1>
// )

const root = createRoot(document.getElementById('root'));
root.render(
    // <Temporary/>
    //<Page/>
    <App/>
)

function Temporary() {
    return (
        <main>
            <img src='./src/assets/react.svg' alt='react-logo' />
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}