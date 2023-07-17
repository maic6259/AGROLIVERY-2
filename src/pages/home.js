import React from "react";
import Card from "../components/Card/Card";
import Styles from "./home.module.css";
import img1 from "../img/slider1.png";
import img2 from "../img/slider2.png";
import img3 from "../img/slider3.png";


const home = () => {
  const dummyData = [
    {
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_797415-MCO48825085902_012022-O.webp",
      titulo: "Porta Llaves Para Pared Artesanía Chiva Colombiana",
      descripcion:
        "Porta llaves Hermoso y alusivo con una chiva representación Colombiana, moderno, artesanal, practico con excelentes acabados en madera de alta resistencia, hecho a mano para mantener tus llaves en el lugar apropiado, al tiempo que da ese toque de distinción a sus espacios",
      precio: "24.900",
    },
    {
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_875890-MCO53546297424_012023-O.webp",
      titulo: "Portavasos X 6 Unidades Artesanías Chiva Colombiana Cuero",
      descripcion:
        "El juego de estos portavasos exclusivos está acompañado de un estuche con forma de chiva colombiana, cada portavaso esta cubierto en su base con cartón duro y en la superficie esta cubierto con cuero para su protección.",
      precio: "49.900",
    },
    {
      imagen:
        "https://olimpica.vtexassets.com/arquivos/ids/865439-1200-auto?v=1775957718&width=1200&height=auto&aspect=true",
      titulo: "Pimentón Rojo - Productor Municipio de Pitalito",
      descripcion: "Venta en la finca o envios a la ciudad de Pitalito",
      precio: "1.500 x Libra",
    },
    {
      imagen:
        "https://olimpica.vtexassets.com/arquivos/ids/735533-1200-auto?v=1775958488&width=1200&height=auto&aspect=true",
      titulo: "Aguacate - Productor Municipio de Timana",
      descripcion: "Venta en la finca o envios a la ciudad de Pitalito, Timana",
      precio: "5.000 Unidad",
    },
    {
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bx8BJ5-8PRNwsNTgxnshvhKKlTMVvazd8Jl1f-La3K5inTcnlJ4axc2_V0tubWeQLQM&usqp=CAU",
      titulo: "Trucha Ahumada - Productor Municipio de Isnos",
      descripcion: "Venta en la finca o envios a la ciudad de Isnos, Pitalito",
      precio: "9.000 Unidad",
    },
    {
      imagen:
        "https://media.admagazine.com/photos/618a5e68b94700461d621081/master/w_1600,c_limit/93266.jpg",
      titulo: "Suculentas - Productor Cali",
      descripcion: "Ventas a domicilio en Cali, Colombia",
      precio: "9.000 Unidad",
    },
    {
      imagen:
        "https://verdecora.es/blog/wp-content/uploads/2016/01/orquideas-cuidados-exceso-agua.jpg.webp",
      titulo: "Orquideas - Productor Cali",
      descripcion: "Ventas a domicilio en Cali, Colombia",
      precio: "90.000 Unidad",
    },
    {
      imagen:
        "https://media.admagazine.com/photos/618a5e68b94700461d621081/master/w_1600,c_limit/93266.jpg",
      titulo: "Suculentas - Productor Cali",
      descripcion: "Ventas a domicilio en Cali, Colombia",
      precio: "30.000 Unidad",
    },
    {
      imagen:
        "https://calyxplantas.com/cdn/shop/products/orquideasvarias-249278.jpg?v=1627575672",
      titulo: "Orquideas - Productor Cali",
      descripcion: "Ventas a domicilio en Cali, Colombia",
      precio: "90.000 Unidad",
    },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="1000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Compre a productores locales cerca de ti</h5>
            <p>Active la ubicacion para obtener los mejores precios.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Apoye a los emprendedores nacionales</h5>
            <p> Compre gran variedad de articulos de colombianos que buscan hacer crecer sus negocios.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block  ">
            <h5>Conozca la Artesanías Nacionales</h5>
            <p>Compre gran variedad de articulos de colombianos que buscan hacer crecer sus negocios.</p>
          </div>
        </div>
      </div>

      <section className={Styles.section_padding}>
        <div className="container">
          <div className="row">
            {dummyData.map((y) => {
              return (
                <div className="col-md-4" style={{ marginTop: "40px" }}>
                  <div
                    className={`border ${Styles.image_zoom}`}
                    style={{ borderRadius: "8px" }}
                  >
                    <div className={Styles.image_zoom_wrapper}>
                      <img
                        
                        className="card-img-top"
                        alt={"imagen"}
                        src={y.imagen}
                      />
                    </div>
                    <div className="card-title m-3">
                      <h5 className="mt-4">{y.titulo}</h5>
                    </div>
                    <div className="card-text m-3">
                      <p>{y.descripcion}</p>
                    </div>
                    <span className={`g-0 ${Styles.card_button}`}>
                      $ {y.precio}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
