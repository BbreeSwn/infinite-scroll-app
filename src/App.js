import PhotoComponent from "./components/PhotoComponent";

function App() {
  const apiKey = `8UQXGA5eCF04KJ0YgIVks5yPYrYEnP7v8xEcWIpSoRI`
  const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}`
  return (
   <main>
    <h1>Infinite Scroll photo | Unsplash API</h1>
    <PhotoComponent />
   </main>
  );
}

export default App;
