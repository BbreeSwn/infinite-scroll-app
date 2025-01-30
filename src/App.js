import PhotoComponent from "./components/PhotoComponent";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const apiKey = `8UQXGA5eCF04KJ0YgIVks5yPYrYEnP7v8xEcWIpSoRI`;
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1); //เมื่อมีการเปลี่ยนแปลงค่า page ให้เรียกใชังาน fetchImage
  const [isLoading, setIsLoading] = useState(false);

  //* เมื่อมีการเรียกใช้ fetchImage หรือการเรียกใช้งานรูปภาพจาก unsplash รอ server ส่งข้อมูลกลับมา และเก็บ state ไว้ใน photos
  const fetchImage = async () => {
    setIsLoading(true);
    try {
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`;
      const res = await fetch(apiUrl);
      const data = await res.json(); //ตัวแปร Array ก้อนนึง
      setPhotos((oldData) => {
        return [...oldData, ...data];
      });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  //* ดึงข้อมูลรูปภาพหลังจากที่ state page มีการเปลี่ยนค่า
  useEffect(() => {
    fetchImage();
    // eslint-disable-next-line
  }, [page]); 

  //* จัดการ scroll หน้าจอแอพ
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >
        document.body.offsetHeight - 20 && !isLoading
      ) {
        //เพิ่มค่าให้กับ page state
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
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
