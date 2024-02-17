import React from "react";

export default function Card() {
  return (       
    <>
    <></>
      <div
        className=" mx-auto my-2 card"
        style={{
          width: "30vw",
          maxHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="https://wallpaperaccess.com/full/837955.jpg " className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {/* writing the code of dropdown */}
          <div className="container w-100">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total price</div>
          </div>
          <button type="button" class="btn btn-secondary">
            Secondary
          </button>
        </div>
      </div>
    </>
  );
}
