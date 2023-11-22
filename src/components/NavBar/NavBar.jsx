import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open, setOpen] =useState(false);
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Services',
          path: '/services'
        },
              ];
      
    return (
        <nav className='bg-purple-400'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
            <span>
                {open == true ?
                <XMarkIcon className="h-6 w-6 text-black" />:
                <Bars3Icon className="h-6 w-6 text-black" />
             }
            
             

            </span>
            </div>
             
            <ul className={`md:flex absolute md:static bg-purple-400 pl-12 py-2
            duration-500 ${open ? 'top-6' : '-top-48' }`}>
                {
                routes.map(route => <Link
                key ={route.id}
                route={route}
                ></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;