import { home } from '../../configs/globals';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { Menu } from '../molecules';
import { Absolute, Img } from '../atoms';
import { useRouter } from 'next/router';
export default function Header() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  return (
    <div className={`m-auto  text-headerUl shadow-xl z-50 `}>
      <div className=' relative z-40'>
        <ul className='w-full  grid grid-cols-2 relative sm:max-w-4xl sm:mx-auto'>
          {/*           <Link href='/' className={`z-50 relative hover:cursor-pointer p-2 px-0 flex items-center `}>
            <Img src='bmo.png' w='50'></Img>
            {!visible && <p className='text-lg capitalize bg-orange-400 px-2 rounded'>{home.title}</p>}
            {visible && <p className='z-50'>Home</p>}
          </Link> */}
          <Menu></Menu>
          <Link href='/Saved'>
            <div
              className={`overflow-hidden absolute flex flex-col text-gray-500 items-center bg-white justify-center  p-4 rounded-full left-1/2 -translate-x-1/2 -translate-y-1/2  top-1/2  ${
                router.pathname === '/Saved' && '-rotate-6 shadow-2xl border-4 border-red-300 fill-red-300'
              }`}>
              <svg className='z-10 relative' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path d='M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z' />
              </svg>
            </div>
          </Link>
        </ul>
        <div className='hidden w-full grid grid-cols-3 items-center relative z-0'>
          <div
            className={` hover:cursor-pointer p-4 flex justify-start  ${visible && 'invisible'}`}
            onClick={() => {
              setVisible(true);
              document.body.style.overflow = 'hidden';
            }}>
            <MenuIcon></MenuIcon>
          </div>
          <Link href='/' className={`z-50 hover:cursor-pointer absolute  rounded-full  pt-0 place-self-center ${visible && 'pt-4'}`}>
            {/*       <Absolute className='bg-black left-0 rounded-full z-0 top-3'></Absolute> */}
            <Img src='bmo.png' w='50' className='z-50 relative'></Img>
            {visible && <p className='relative z-40 px-2 bg-white/50 rounded-full'>Home</p>}
          </Link>
        </div>
      </div>

      {/*Mobile only*/}
      {visible && (
        <div
          onClick={() => {
            setVisible(false);
            document.body.style.overflow = 'auto';
          }}
          className='fixed top-0 bg-black/90 w-full h-full flex items-center justify-center z-30'>
          <div>
            <Img mot={true} src='hell.jpg' className='absolute bottom-0 w-full left-0'></Img>
          </div>
          <div className='absolute right-0 top-0 p-4 text-4xl'>
            <HighlightOffIcon></HighlightOffIcon>
          </div>
          <ul className='flex flex-col space-y-6 items-center text-center justify-center'>
            <Menu></Menu>
          </ul>
        </div>
      )}
    </div>
  );
}