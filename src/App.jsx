
import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Tickets from "./Components/Tickets";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {

  const fetchPromise = fetchTickets();

  const [inProgress, setInProgress] = useState([]);

  const [resolved, setResolved] = useState([]);

  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetchPromise.then((data) => setStock(data));
  }, []);

  const addToProgress = (ticketId) => {
    setStock((previousState) =>
      previousState.map((et) => 
        et.id === ticketId ? {...et, status: "In Progress"} : et)
      );

      const ticket = stock.find((et) => et.id === ticketId);

      if (ticket && !inProgress.find((et) => et.id === ticketId)) {
        setInProgress([...inProgress, {...ticket, status: "In Progress"}]);
        toast.info(`${ticket.title} moved to In Progress`);
      }
  };

  const addToResolved = (ticketId) => {
    const ticket = inProgress.find((et) => et.id === ticketId);
    setInProgress(inProgress.filter((et) => et.id !== ticketId));

    setStock(stock.filter((et) => et.id !== ticketId));

    if(ticket) {
      setResolved([...resolved, {...ticket, status: "Resolved"}]);
      toast.success(`${ticket.title} marked as Resolved`);
    }

  }

  return (
    <>

      <Navbar/>
      <Overview progresscount={inProgress.length} resolvedcount={resolved.length}/>

      <Suspense fallback={<div className='text-center text-2xl font-semibold text-[#34485A] my-10'><span className="loading loading-spinner loading-xl"></span></div>}>
        <Tickets stock={stock} inProgress={inProgress} resolved={resolved} addToProgress={addToProgress} addToResolved={addToResolved}/>
      </Suspense>

      <Footer/>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
