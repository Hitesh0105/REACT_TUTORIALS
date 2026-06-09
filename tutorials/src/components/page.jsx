
function Page() {
    return (
        <>
            <header>
                <img src='./src/assets/react.svg' alt='react-Logo' />
            </header>
            <main>
                <h1>Learn React</h1>
                <ol>
                    <li>React is a JavaScript library for building user interfaces</li>
                    <li>React uses virtual dom to boost its performance</li>
                    <li>Virtual DOM is a concept where a virtual representation
                        of the UI is kept in memory and synced with the real DOM</li>
                </ol>
            </main>
            <footer>
                <small>© 2026 HIT development. All rights reserved.</small>
            </footer>
        </>
    )
}

export default Page;