import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-5 my-3">
        <div className="card bg-base-100 w-50 shadow-xl  ">
          <figure>
            <img src={item.image} alt="Books" />
          </figure>
          <div className="card-body mx-">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
