import React from "react";

import list from "../../public/list.json";
const FreeBook_Section = () => {
  const filterData = list.filter((data) => data.category === "free");
  console.log(filterData);
  return <>
  
  </>;
};

export default FreeBook_Section;
