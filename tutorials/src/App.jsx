import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Navbar from './components/Navbar'
// import Main from './components/Main'

// travel journal project
import Header from './travel_journal_components/Header'
import Entry from './travel_journal_components/Entry'
import Contact from './travel_journal_components/Contact'
import Data from './data'
function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <section id="center">
  //       <div className="hero">
  //         <img src={heroImg} className="base" width="170" height="179" alt="" />
  //         <img src={reactLogo} className="framework" alt="React logo" />
  //         <img src={viteLogo} className="vite" alt="Vite logo" />
  //       </div>
  //       <div>
  //         <h1>Get started</h1>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
  //         </p>
  //       </div>
  //       <button
  //         type="button"
  //         className="counter"
  //         onClick={() => setCount((count) => count + 1)}
  //       >
  //         Count is {count}
  //       </button>
  //     </section>

  //     <div className="ticks"></div>

  //     <section id="next-steps">
  //       <div id="docs">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#documentation-icon"></use>
  //         </svg>
  //         <h2>Documentation</h2>
  //         <p>Your questions, answered</p>
  //         <ul>
  //           <li>
  //             <a href="https://vite.dev/" target="_blank">
  //               <img className="logo" src={viteLogo} alt="" />
  //               Explore Vite
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://react.dev/" target="_blank">
  //               <img className="button-icon" src={reactLogo} alt="" />
  //               Learn more
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //       <div id="social">
  //         <svg className="icon" role="presentation" aria-hidden="true">
  //           <use href="/icons.svg#social-icon"></use>
  //         </svg>
  //         <h2>Connect with us</h2>
  //         <p>Join the Vite community</p>
  //         <ul>
  //           <li>
  //             <a href="https://github.com/vitejs/vite" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#github-icon"></use>
  //               </svg>
  //               GitHub
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://chat.vite.dev/" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#discord-icon"></use>
  //               </svg>
  //               Discord
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://x.com/vite_js" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#x-icon"></use>
  //               </svg>
  //               X.com
  //             </a>
  //           </li>
  //           <li>
  //             <a href="https://bsky.app/profile/vite.dev" target="_blank">
  //               <svg
  //                 className="button-icon"
  //                 role="presentation"
  //                 aria-hidden="true"
  //               >
  //                 <use href="/icons.svg#bluesky-icon"></use>
  //               </svg>
  //               Bluesky
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </section>

  //     <div className="ticks"></div>
  //     <section id="spacer"></section>
  //   </>
  // )

  const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"];

  // const dataArray=Data.map((data)=>
  //   {
  //     return (
  //       <Entry 
  //              key={data.id}
  //              img={data.img}
  //              title={data.title}
  //              country={data.country}
  //              googleMapsLink={data.googleMapsLink}
  //              dates={data.dates}
  //              text={data.text}
  //       />
  //     )
  //   });

  // we can use like this as well but id is prefered then index in order to add or remove elements from db
  //  const dataArray=Data.map((data,index)=>
  // {
  //   return (
  //     <Entry 
  //            key={index}
  //            img={data.img}
  //            title={data.title}
  //            country={data.country}
  //            googleMapsLink={data.googleMapsLink}
  //            dates={data.dates}
  //            text={data.text}
  //     />
  //   )
  // });

  // const dataArray = Data.map((data) => {
  //   return (
  //     <Entry
  //       key={data.id}
  //       entry={data}   // instead of writing all properties we can directly send entire object like this 
  //     />
  //   )
  // });

    const dataArray = Data.map((data) => {
    return (
      <Entry
        key={data.id}
        {...data}  // using spread operator to pass object
      />
    )
  });


  return (
    <>
      {/* <main>
        {ninjaTurtles.map((t)=><h2>{t}</h2>)}
      </main> */}
      {/* <Navbar />
      <Main /> */}

      {/* Travel Journal Project */}
      <Header />
      <main className='container'>
        {/* <Entry 
          img={{
            src:'https://scrimba.com/links/travel-journal-japan-image-url',
            alt:'Mount Fuji'
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        /> */}
        {dataArray}
      </main>
      {/* <div className='contacts'>
        <Contact
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@cat.com"
          alt="photo of whiskerson"
        />
        <Contact
          name="Mr. Thommas"
          phone="(123) 666-2726"
          email="mr.tom@kitty.com"
          alt="photo of Thommas"
        />
        <Contact
          name="Mr. Flicker"
          phone="(901) 777-4367"
          email="mr.flick@cat.com"
          alt="photo of Flicker"
        />
        <Contact 
          name="Mr. Pumpkin"
          phone="(897) 726-2415"
          email="mr.pumpkin@cat.com"
          alt="photo of Pumpkin"
        />
      </div> */}
    </>
  )
}

export default App
