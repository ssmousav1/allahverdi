import { useState } from "react";
import "./App.css";
import { Carousel } from "./components/Carousel";
import img1 from "./assets/img/img1.jpeg";
import img2 from "./assets/img/img2.jpeg";
import img3 from "./assets/img/img3.jpeg";
import img4 from "./assets/img/img4.jpeg";
import logo from "./assets/img/logo.jpeg";
import { Header } from "./components/Header";

const images = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }];

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <section className="main-content"></section> */}
      <section className="content">
        <div>
          <img src={img1} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "500px",
            justifyContent: "center",
          }}
        >
          <p style={{ direction: "rtl" }}>
            سیستم انتقال پنوماتیک راهکاری مناسب جهت اتنقال مدارک ، اسناد و اوراق
            در سازمان ها
          </p>
          <p>4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462</p>
          <p style={{ direction: "rtl" }}>
            سیستم انتقال پنوماتیک راهکاری مناسب جهت اتنقال مدارک ، اسناد و اوراق
            در سازمان ها
          </p>
          <p>4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462</p>
          <p style={{ direction: "rtl" }}>
            سیستم انتقال پنوماتیک راهکاری مناسب جهت اتنقال مدارک ، اسناد و اوراق
            در سازمان ها
          </p>
          <p>4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462</p>
          <p style={{ direction: "rtl" }}>
            سیستم انتقال پنوماتیک راهکاری مناسب جهت اتنقال مدارک ، اسناد و اوراق
            در سازمان ها
          </p>
          <p>4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462</p>
        </div>
        <div style={{ display: "flex", gap: "50px" }}>
          <p style={{ display: "flex", alignItems: "center" }}>
            4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462 4520
            Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462 4520 Mt
            Pleasant Rd, Brantford, ON N3T 6L5, Canada +12264000462
          </p>
          <img style={{ width: "600px" }} src={img2} />
        </div>
      </section>
      <footer>
        <img
          style={{ height: "300px", objectFit: "cover", marginBottom: "50px" }}
          src={img3}
        />
        <img style={{ width: "230px" }} src={logo} />
      </footer>
    </div>
  );
}

export default App;
