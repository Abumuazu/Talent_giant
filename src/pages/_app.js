/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/

import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
import "../components/form.css"
import "../components/NewHero/hero.css"
import "../components/footer2/footer.css"
// import 'tailwindcss/tailwind.css';
// import "../../global.css"

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef } from 'react';
import { NextUIProvider } from '@nextui-org/react';


export default function CustomApp({ Component, pageProps }) {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };


  return(
    <NextUIProvider>
    <Component {...pageProps} />

{/* <button onClick={handleMinimize}> Minimize the Chat </button> */}
 <TawkMessengerReact
   propertyId='62af87b57b967b1179955918'
   widgetId='1g5uqk7lk'
   useRef={tawkMessengerRef}      />
    </NextUIProvider>
 
  
  );
}
