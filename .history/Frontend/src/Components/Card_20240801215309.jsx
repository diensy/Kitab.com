import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-5 my-2 p-3 ">
        <div className="card bg-base-100 w-90 shadow-xl hover ">
          <figure>
            <img src={item.image} alt="Books" className="rounded" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 ">
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
