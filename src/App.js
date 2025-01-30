import PhotoComponent from "./components/PhotoComponent";
import {useEffect, useState} from 'react'

function App() {
  const apiKey = `8UQXGA5eCF04KJ0YgIVks5yPYrYEnP7v8xEcWIpSoRI`
  const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=1`

  const [photos , setPhotos] = useState([])

  //* เมื่อมีการเรียกใช้ fetchImage ให้รอข้อมูลรูปภาพก่อน
  const fetchImage = async()=>{
    const res = await fetch(apiUrl) 
    const data = await res.json() //ตัวแปร Array ก้อนนึง
    setPhotos(data)
  }
useEffect(()=>{
  fetchImage()
},[])

  return (
   <main>
    <h1>Infinite Scroll photo | Unsplash API</h1>
    <PhotoComponent />
   </main>
  );
}

export default App;
