import MeetingCard from "./components/MeetingCard";

function App() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-none">
      </div> 
      <div className="absolute inset-0 flex items-center justify-center">
        <MeetingCard className="bg-white bg-opacity-100 p-8 rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default App;
