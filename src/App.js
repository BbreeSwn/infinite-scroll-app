import PhotoComponent from "./components/PhotoComponent";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiKey = `8UQXGA5eCF04KJ0YgIVks5yPYrYEnP7v8xEcWIpSoRI`;
  const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=1`;

  const [photos, setPhotos] = useState([]);

  //* เมื่อมีการเรียกใช้ fetchImage หรือการเรียกใช้งานรูปภาพจาก unsplash รอ server ส่งข้อมูลกลับมา และเก็บ state ไว้ใน photos
  const fetchImage = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json(); //ตัวแปร Array ก้อนนึง
    setPhotos(data);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <main>
      <h1>Infinite Scroll photo | Unsplash API</h1>
      <section className="photos">
        <div className="display-photo">
          {photos.map((data, index) => {
            return <PhotoComponent key={index} {...data} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
