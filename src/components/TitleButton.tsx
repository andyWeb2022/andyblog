import * as React from 'react';

interface titleButton {
    title : string;
}

export default function TitleButton ({ title }: titleButton) {
  return (
    <button className='h-[30px] w-[100px] bg-[#ffffaa]'>
      {title}
    </button>
  );
}
