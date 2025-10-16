import './App.css';

function App() {
  const user = {
    name: 'Josh',
    energy: 5,
    toDoItems: [
      'Make Coffee',
      'Drink Coffee',
      'Update Lesson Plans',
      'Grade Assignments',
      'Take a Nap',
    ],
  };

  const serveRefreshments = (event, refreshment = 'coffee') => {
    console.log(`Here's your ${refreshment}!`);
    console.log(event);
  };

  const outputToDos = (toDoItems) => {
    return (
      <ul>
        {toDoItems.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <header>
        <h1>My To Do List</h1>
      </header>
      <main>
        <section id="user-info">
          {/* Use a ternary operator to conditionally output user.name or, if empty, Anonymous */}
          <h2>User: {user.name ? user.name : 'Anonymous'}</h2>
        </section>
        <section id="todo-list">
          <h2>Things to do today:</h2>
          {/* Use ternary operator to output to do list or nothing to do  */}
          {user.toDoItems.length === 0 ? (
            <p>Nothing to do.</p>
          ) : (
            outputToDos(user.toDoItems)
          )}
          {/* Use logical and to conditionally output "so much to do" if there are 5 or more to do items */}
          {user.toDoItems.length >= 5 && <p>So much to do!</p>}
        </section>
        {/* Use logical and to conditionally output coffee button */}
        {user.energy < 50 && (
          <>
            <button onClick={serveRefreshments}>Click for Coffee</button>
            <button
              onClick={(event) => {
                serveRefreshments(event, 'tea');
              }}
            >
              Click for Tea
            </button>
          </>
        )}
      </main>
    </>
  );
}

export default App;
