import React from "react";

import Right from "./Right";
import Left from "./left";

const PageContent = (props) => {
 
  return (
    <div className=" flex gap-10 h-[90vh] p-10">
      <Left />
      <Right users={props.users} />
    </div>
  );
};

export default PageContent;
