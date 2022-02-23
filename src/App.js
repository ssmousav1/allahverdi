import { useState } from "react";
import "./App.css";
import { Carousel } from "./components/Carousel";
import img1 from "./assets/img/img1.jpeg";
import img2 from "./assets/img/img7.jpeg";
import img3 from "./assets/img/img6.jpeg";
import img4 from "./assets/img/img4.jpeg";
import logo from "./assets/img/img8.jpeg";
import { Header } from "./components/Header";

const images = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }];

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <section className="main-content"></section> */}
      <section className="content">
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src={img2}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // height: "500px",
            justifyContent: "center",
            padding: "30px 50px",
            textAlign: "center",
            background: "#dfdfdf",
            boxShadow: "8px 8px 13px 5px #A6A6A6",
            // borderRadius: "10px",
          }}
        >
          <p style={{ fontSize: "30px", lineHeight: "40px" }}>
            Humans kind have been using technology long before we even had a
            word for it.  While we started fashioning tools to accomplish a task
            better than we could on our own, we were using technology.  “Our
            offer” is – the knowledge and application of certain methodologies
            and skills in the creation of products and services that fulfil
            specific needs. Technology by its very nature is inventive – either
            improving on what currently exists or creating something never seen
            before to address an unsolved problem or issue.
          </p>
          <p
            style={{ fontSize: "30px", marginTop: "40px", lineHeight: "40px" }}
          >
            We are proud to offer pneumatic tube systems (PTS) with new and
            up-to-date technology for around the world  , completely innovative
            and creative systems   , familiar with every user and specific
            purpose Systems:  <p>- Industry general and special     </p>
            <p>-Heavy duty systems  </p>
            <p>-Advanced and hi tech medical systems  </p>
            <p>-High performanc systems for specific environments.</p>
          </p>
          <p
            style={{ fontSize: "30px", marginTop: "40px", lineHeight: "40px" }}
          >
            Meanwhile In collecting and innovating of systems from the usual and
            new techniques that the efficiency and effectiveness of the system
            which improve rapid transfer and system dynamics have been
            considered.  On the other hand with integration in   design and
            technique, we has been achieved   a high efficiency system  
            <p>
              To receive information and catalogues, please contact our
              representative in your area
            </p>
          </p>
        </div>
        <div style={{ display: "flex", gap: "50px" }}>
          <div
            style={{
              background: "#8fbc32",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "50px",
              width: "50%",
              color: "#525252",
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            <p style={{ textAlign: "center" }}>
              4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada
            </p>
            <p>+12264000462</p>
            <p>Info@xptesla.com</p>
          </div>
          <img style={{ width: "50%" }} src={img1} />
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
