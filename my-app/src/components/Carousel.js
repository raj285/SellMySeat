import React from "react";

export default function carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{objectFit:"contain !important"}}
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
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-caption ">
        <div class="input-group" style={{zIndex:'1'}}>
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                class="btn btn-outline-primary"
                data-mdb-ripple-init
              >
                search
              </button>
            </div>
        </div>
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/5036526/pexels-photo-5036526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", width: "400px" ,filter:"brightness(20%)"}}
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ color: "white" }}
          >
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <div className="container" style={{height:'100px'}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", width: "400px" ,filter:"brightness(20%)" }}
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ color: "white" }}
          >
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <div className="container" style={{height:'100px'}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/18772963/pexels-photo-18772963/free-photo-of-seats-upholstered-with-brown-imitation-leather-in-a-cinema-hall.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", width: "400px" ,filter:"brightness(20%)" }}
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ color: "white" }}
          >
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
            <div className="container" style={{height:'100px'}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://wallpapercave.com/wp/wp12183303.jpg"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", width: "400px" ,filter:"brightness(20%)"}}
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ color: "white" }}
          >
            <h5>4 slide label</h5>
            <p>Some representative placeholder content for the 4 slide.</p>
            <div className="container" style={{height:'100px'}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/761543/pexels-photo-761543.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", width: "400px" ,filter:"brightness(20%)"}}
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ color: "white" }}
          >
            <h5>5 slide label</h5>
            <p>Some representative placeholder content for the 5 slide.</p>
            <div className="container" style={{height:'100px'}}></div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/5769707/pexels-photo-5769707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
            style={{ height: "600px", width: "400px" ,filter:"brightness(20%)"}}
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{ color: "white" }}
          >
            <h5>6 slide label</h5>
            <p>Some representative placeholder content for the 6 slide.</p>
            <div className="container" style={{height:'100px'}}></div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
