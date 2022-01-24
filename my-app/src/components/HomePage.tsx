export default function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
      <div className="App">
        <header className="App-header" data-testid={"header"}>
          Welcome to the Sherlock Game
        </header>
        <div className="choiceButtons">
          <button data-testid={"bottle1Button"}>Drink from bottle 1</button>
          <button data-testid={"bottle2Button"}>Drink from bottle 2</button>
        </div>
      </div>
    </>
  );
}