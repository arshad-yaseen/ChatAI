
import './App.css';
import ChatSendWrapper from './Components/ChatSendWrapper';
import ChatWrapper from './Components/ChatWrapper';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <ChatSendWrapper />
      <ChatWrapper />
      <Hero />
    </div>
  );
}

export default App;
