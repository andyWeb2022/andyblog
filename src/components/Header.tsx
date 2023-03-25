import * as React from 'react';

export interface header {
}

export default function Header (props: header) {
  return (
    <div className='h-1/5 w-full flex justify-center items-center'>
        <h1 className='text-7xl'>
            𝓐𝓷𝓭𝔂 𝓦𝓮𝓫
        </h1>
    </div>
  );
}
