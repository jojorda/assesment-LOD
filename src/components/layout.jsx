import React from 'react';
import './globals.css';
import Navbar from '../components/navbar';

export default function Layouts({ children }) {
  return (
    <html lang="en">
        <section className="d-flex px-5 px-20">
          <Navbar/>
          <div className="my-7">
             {children}
          </div>
          <div className='mt-19 p-3'>
            <a href='https://www.youtube.com/watch?v=0XJqJJQ35oc'>
              Butuh Menu Lain?
            </a>
          </div>
        </section>
    </html>
  );
}
