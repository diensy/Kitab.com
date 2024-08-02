import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Card from "./Card";
const FreeBook_Section = () => {
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(filterData);
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      div
        <h1 className="font-bold text-2xl">Free Offered Courses Books</h1>
        <p className="font-normal">
          A book is a garden, an orchard, a storehouse, a party, a company by
          the way, a counselor, a multitude of counselors.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FreeBook_Section;
