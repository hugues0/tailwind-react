import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className="bg-gray-100">
      <section>
        <form>
          <input placeholder="type here to fill" type="text" />
        </form>
      </section>
      <section>
        <ContactCard />
      </section>
    </div>
  );
}

export default App;
