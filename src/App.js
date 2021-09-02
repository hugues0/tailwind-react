
import './App.css';
import useFetch from 'react-fetch-hook'
import ContactCard from './ContactCard';

function App() {
  const url = 'https://randomuser.me/api'
  const {isLoading,data,error} = useFetch( path :url+'?results=200')
  data && console.log(data)
  return (
    <div className="bg-gray-100 p-4">
      <section>
        <form>
          <input placeholder="type here to fill..." type="text" className="ml-20 mt-6 rounded-md p-2 m-10" />
        </form>
      </section>
      <section className="p-20 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <ContactCard />
      </section>
    </div>
  );
}

export default App;
