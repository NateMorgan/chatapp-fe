import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MessageBox from './components/MessageBox/MessageBox';

function App() {
  return (
    <div className="App">
      <Header/>
      <MessageBox/>
      <Footer/>
    </div>
  );
}

export default App;
