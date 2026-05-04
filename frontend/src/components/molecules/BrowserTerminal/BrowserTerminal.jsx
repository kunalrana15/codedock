import { Terminal } from 'xterm';
import { FitAddon } from '@xterm/addon-fit'
import "xterm/css/xterm.css"
import { useEffect, useRef } from 'react';

const Terminal = () => {

  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: "monospace",
      theme: {
        background: "#333254",
        foreground: "#fffff"
      } 
    })
  },[]);

  return (

    <div
     style={{
      width: "100%",
      height: "100vh",
      overflow: "hidden"
     }} >
      
    </div>
  )
}

export default Terminal
