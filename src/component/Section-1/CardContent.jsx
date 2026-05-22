import React from "react";

const CardContent = (props) => {
  return (
    <div className="h-full w-1/3 shrink-0 overflow-hidden flex items-center justify-center relative rounded-4xl bg-amber-50">
      <img
        className="object-cover  h-full w-full"
        src={props.img}
        alt="Placeholder"
      />
      <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-between p-10">
        <div className="h-12 w-12 rounded-full flex justify-center items-center font-bold text-2xl bg-amber-50">
          {props.id + 1}
        </div>
        <div className="text-amber-50">
          <p className="text-xl pb-7 text-shadow-2xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            temporibus dignissimos consequuntur! Eveniet, exercitationem dolore?
          </p>
          <div className="flex items-center justify-between gap-3 mt-4">
            <button
              style={{ backgroundColor: props.color }}
              className=" py-2 px-5 flex items-center text-xl rounded-full "
            >
              {props.tag}
            </button>

            <button
              style={{ backgroundColor: props.color }}
              className=" py-2 px-3 text-2xl rounded-full"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
