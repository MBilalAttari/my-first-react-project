import React from "react";
import Section1 from "./component/Section-1";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1681491989810-fec17d4311ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
      color: "royalblue",
    },
    {
      img: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underserved",
      color: "lightseagreen",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      tag: "Average",
      color: "orange",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Proffesional",
      color: "black",
    },{
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Worker",
      color: "#8B0000",
    }
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;
