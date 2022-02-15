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
          <p style={{ direction: "rtl", fontSize: "30px" }}>
            نوع انسانها مدتها قبل از اینكه ما حتی حرفی برای آن داشته باشیم از فن
            آوری استفاده كرده اند. در حالی که ما برای به انجام رساندن کاری بهتر
            از آنچه در توان خود بود ، شروع به طراحی ابزارهایی کردیم ، ما از
            فناوری استفاده می کردیم. "پیشنهاد ما" عبارت است از - دانش و کاربرد
            روشها و مهارتهای خاص در ایجاد محصولات و خدماتی که نیازهای خاص را
            برآورده می کنند. فناوری از نظر ماهیت خود نوآورانه است - یا می تواند
            چیزی را که در حال حاضر وجود دارد بهبود بخشد یا چیزی را ایجاد کند که
            قبلاً برای حل یک مشکل یا مسئله حل نشده دیده نشده است.
          </p>
          <p style={{ direction: "rtl", fontSize: "30px" }}>
            ما مفتخریم که سیستم های لوله پنوماتیک (PTS) با فناوری جدید و به روز
            را برای سراسر جهان ارائه می دهیم ، سیستم های کاملاً ابتکاری و
            خلاقانه ، آشنا با هر کاربر و سیستم های خاص خاص:
            <p>- صنعت عمومی و خاص</p>
            <p>-سیستم های سنگین</p>
            <p style={{ direction: "ltr" }}>Hi tech سیستم های پزشکی-</p>
            سیستم های با کارایی بالا برای محیط های خاص.
          </p>
          <p style={{ direction: "rtl", fontSize: "30px" }}>
            در همین حال ، در جمع آوری و نوآوری سیستمها از روشهای معمول و جدید ،
            کارایی و اثر بخشی سیستم که انتقال سریع و پویایی سیستم را بهبود می
            بخشد ، مورد توجه قرار گرفته است. از طرف دیگر با یکپارچه سازی در
            طراحی و تکنیک ، به یک سیستم با کارایی بالا دست یافته ایم برای دریافت
            اطلاعات و کاتالوگ ها ، لطفا با نماینده ما در منطقه خود تماس بگیرید
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
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            <p style={{ textAlign: "center" }}>
              4520 Mt Pleasant Rd, Brantford, ON N3T 6L5, Canada
            </p>
            <p>+12264000462</p>
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
