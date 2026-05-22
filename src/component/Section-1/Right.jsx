import React from "react";
import CardContent from "./CardContent";

const Right = (props) => {
  return (
    <div className="h-full flex overflow-auto scrollbar-none gap-8 w-2/3 py-5">
      {props.users.map((elem ,idx) => (
        <CardContent key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag} />
      ))}
    </div>
  );
};

export default Right;
