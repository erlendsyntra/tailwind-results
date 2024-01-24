import Result from "./Components/Result";
import Summary from "./Components/Summary";

const App = () => {
  return (
    <div className="container m-auto md:w-185 md:min-h-screen md:flex md:items-center w-88">
      <div className="md:shadow-1xl md:rounded-3xl md:flex bg-pro-white w-full">
        <Result />
        <Summary />
      </div>
    </div>
  );
};
export default App;
