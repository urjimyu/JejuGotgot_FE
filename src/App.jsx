import { ThemeProvider } from '@goorm-dev/vapor-core';
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1 className="text-3xl font-bold underline">Vite + React</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
