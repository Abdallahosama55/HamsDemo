import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AccordionList = ({ sections ,iconUp,iconDown }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col w-full my-4">
      {sections?.map((section, index) => (
        <div className="w-full px-3 " key={index}>
          <div
            className="border-b-2 border-gray-200 flex justify-between items-center px-4 py-2 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <h3 className='text-xl text-[#363636] opacity-[50] font-[500] py-2'>
              <span className='text-[#B8B8B8]'>{section.number}</span>
              {section.title}
            </h3>
            <div>
              {activeIndex === index ? iconDown||<IoIosArrowUp /> :iconUp||<IoIosArrowDown />}
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-4">
              <h3 className='text-[1rem] text-[#000] opacity-75 font-bold'>{section.contents}</h3>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionList;
