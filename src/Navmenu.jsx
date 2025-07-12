import React from 'react'
import { Spotlight } from '../components/motion-primitives/spotlight';
import { Magnetic } from '../components/motion-primitives/magnetic';
const Navmenu = () => {
 return (
    <div className='w-[100%] flex justify-center'>
    <Magnetic >
      <button
        type='button'
        className='flex  justify-center items-center rounded-md border border-zinc-100 bg-transparent px-4 py-2 text-sm text-zinc-950 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-600'
      >
        <span>Submit</span>
      </button>
    </Magnetic>
    </div>
  );

}

export default Navmenu