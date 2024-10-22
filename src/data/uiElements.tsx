import React from 'react'

export const buttons = [
  {
    id: 'button1',
    name: 'Pink Button',
    html: '<button class="pink-button">Button 1</button>',
    css: `.pink-button {
  background-color: #ff77e9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}`,
    component: <button className="bg-bubble-gum text-white px-5 py-2.5 rounded-md">Button 1</button>
  },
  {
    id: 'button2',
    name: 'Outline Button',
    html: '<button class="outline-button">Button 2</button>',
    css: `.outline-button {
  background-color: transparent;
  color: #3f3cbb;
  padding: 10px 20px;
  border: 2px solid #3f3cbb;
  border-radius: 5px;
  cursor: pointer;
}`,
    component: <button className="bg-transparent text-purple border-2 border-purple px-5 py-2.5 rounded-md">Button 2</button>
  },
  {
    id: 'button3',
    name: 'Neon Glow Button',
    html: '<button class="neon-button">Neon Glow</button>',
    css: `.neon-button {
  background-color: #00ff00;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
  transition: all 0.3s ease;
}
.neon-button:hover {
  box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00, 0 0 60px #00ff00;
}`,
    component: <button className="bg-[#00ff00] text-black px-5 py-2.5 rounded-md shadow-[0_0_10px_#00ff00,0_0_20px_#00ff00,0_0_30px_#00ff00] hover:shadow-[0_0_20px_#00ff00,0_0_40px_#00ff00,0_0_60px_#00ff00] transition-all duration-300">Button 3</button>
  },
  {
    id: 'button4',
    name: 'Neumorphic Button',
    html: '<button class="neumorphic-button">Neumorphic</button>',
    css: `.neumorphic-button {
  background-color: #e0e5ec;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 8px 8px 15px #a3b1c6, -8px -8px 15px #ffffff;
  transition: all 0.2s ease;
}
.neumorphic-button:hover {
  box-shadow: 6px 6px 10px #a3b1c6, -6px -6px 10px #ffffff;
}`,
    component: <button className="bg-[#e0e5ec] text-gray-700 px-5 py-2.5 rounded-xl shadow-[8px_8px_15px_#a3b1c6,-8px_-8px_15px_#ffffff] hover:shadow-[6px_6px_10px_#a3b1c6,-6px_-6px_10px_#ffffff] transition-all duration-200">Button 4</button>
  },
  {
    id: 'button5',
    name: 'Ripple Effect Button',
    html: '<button class="ripple-button">Ripple Effect</button>',
    css: `.ripple-button {
  position: relative;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}
.ripple-button::after {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`,
    component: <button className="relative bg-[#4CAF50] text-white px-5 py-2.5 rounded-md overflow-hidden" onClick={(e) => {
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.background = 'rgba(255, 255, 255, 0.3)';
      ripple.style.borderRadius = '50%';
      ripple.style.width = ripple.style.height = '100px';
      ripple.style.transform = 'scale(0)';
      ripple.style.left = e.clientX - e.currentTarget.offsetLeft - 50 + 'px';
      ripple.style.top = e.clientY - e.currentTarget.offsetTop - 50 + 'px';
      e.currentTarget.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      ripple.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(4)', opacity: 0 }
      ], { duration: 600, easing: 'linear' });
    }}>Button 5</button>
  },
  {
    id: 'button6',
    name: 'Subtle Button',
    html: '<button class="button-2" role="button">Subtle Button</button>',
    css: `.button-2 {
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}`,
    component: <button className="bg-[rgba(51,51,51,0.05)] rounded-lg text-[#333333] text-sm font-medium py-2.5 px-3 transition-all duration-200">Button 6</button>
  },
  {
    id: 'button7',
    name: 'GitHub Style',
    html: '<button class="button-4" role="button">GitHub Style</button>',
    css: `.button-4 {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-4:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}`,
    component: <button className="bg-[#FAFBFC] border border-[rgba(27,31,35,0.15)] rounded-md shadow-[0_1px_0_rgba(27,31,35,0.04),0_1px_0_rgba(255,255,255,0.25)_inset] text-[#24292E] text-sm font-medium py-1.5 px-4 transition-colors duration-200 hover:bg-[#F3F4F6]">Button 7</button>
  },
  {
    id: 'button8',
    name: 'Elevated Button',
    html: '<button class="button-6" role="button">Elevated Button</button>',
    css: `.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  transition: all 250ms;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}`,
    component: <button className="bg-white border border-[rgba(0,0,0,0.1)] rounded shadow-sm text-[rgba(0,0,0,0.85)] text-base font-semibold py-2 px-4 transition-all duration-250 hover:border-[rgba(0,0,0,0.15)] hover:shadow-md hover:text-[rgba(0,0,0,0.65)] hover:-translate-y-0.5 active:bg-[#F0F0F1] active:shadow active:translate-y-0">Button 8</button>
  },
  {
    id: 'button9',
    name: 'Stack Overflow Style',
    html: '<button class="button-8" role="button">Stack Overflow</button>',
    css: `.button-8 {
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-8:hover,
.button-8:focus {
  background-color: #b3d3ea;
  color: #2c5777;
}

.button-8:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button-8:active {
  background-color: #a0c7e4;
  box-shadow: none;
  color: #2c5777;
}`,
    component: <button className="bg-[#e1ecf4] border border-[#7aa7c7] rounded shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset] text-[#39739d] text-xs py-2 px-3 hover:bg-[#b3d3ea] hover:text-[#2c5777] focus:shadow-[0_0_0_4px_rgba(0,149,255,0.15)] active:bg-[#a0c7e4] active:shadow-none">Button 9</button>
  },
  {
    id: 'button10',
    name: 'Material Design',
    html: '<button class="button-9" role="button">Material Design</button>',
    css: `.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}`,
    component: <button className="bg-[#405cf5] rounded-md shadow-[rgba(50,50,93,0.1)_0_0_0_1px_inset,rgba(50,50,93,0.1)_0_2px_5px_0,rgba(0,0,0,0.07)_0_1px_1px_0] text-white h-11 px-6 transition-all duration-200 focus:shadow-[rgba(50,50,93,0.1)_0_0_0_1px_inset,rgba(50,50,93,0.2)_0_6px_15px_0,rgba(0,0,0,0.1)_0_2px_2px_0,rgba(50,151,211,0.3)_0_0_0_4px]">Button 10</button>
  },
  {
    id: 'button11',
    name: 'Minimalistic Button',
    html: '<button class="button-11" role="button">Button 11</button>',
    css: `.button-11 {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 6px 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
      border-radius: 6px;
      color: #3D3D3D;
      background: #fff;
      border: none;
      box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-11:focus {
      box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
    }`,
    component: (
      <button
        className="flex flex-col items-center py-1.5 px-[14px] font-sans rounded-md text-[#3D3D3D] bg-white shadow-sm select-none focus:shadow-[0px_0.5px_1px_rgba(0,0,0,0.1),0px_0px_0px_3.5px_rgba(58,108,217,0.5)] focus:outline-none"
      >
        Button 11
      </button>
    ),
  },
  {
    id: 'button12',
    name: 'Dark Minimalistic Button',
    html: '<button class="button-12" role="button">Button 12</button>',
    css: `.button-12 {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 6px 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
      border-radius: 6px;
      border: none;
      background: #6E6D70;
      box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
      color: #DFDEDF;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-12:focus {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
    }`,
    component: (
      <button
        className="flex flex-col items-center py-1.5 px-[14px] font-sans rounded-md bg-[#6E6D70] text-[#DFDEDF] select-none shadow-[0px_0.5px_1px_rgba(0,0,0,0.1),inset_0px_0.5px_0.5px_rgba(255,255,255,0.5),0px_0px_0px_0.5px_rgba(0,0,0,0.12)] focus:shadow-[inset_0px_0.8px_0px_-0.25px_rgba(255,255,255,0.2),0px_0.5px_1px_rgba(0,0,0,0.1),0px_0px_0px_3.5px_rgba(58,108,217,0.5)] focus:outline-none"
      >
        Button 12
      </button>
    ),
  },
  {
    id: 'button13',
    name: 'Amazon Style Button',
    html: '<button class="button-13" role="button">Button 13</button>',
    css: `.button-13 {
      background-color: #fff;
      border: 1px solid #d5d9d9;
      border-radius: 8px;
      box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
      box-sizing: border-box;
      color: #0f1111;
      cursor: pointer;
      display: inline-block;
      font-family: "Amazon Ember", sans-serif;
      font-size: 13px;
      line-height: 29px;
      padding: 0 10px 0 11px;
      text-align: center;
      user-select: none;
      touch-action: manipulation;
      width: 100px;
    }
  
    .button-13:hover {
      background-color: #f7fafa;
    }
  
    .button-13:focus {
      border-color: #008296;
      box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
      outline: 0;
    }`,
    component: (
      <button
        className="bg-white border border-[#d5d9d9] rounded-lg shadow-md text-[#0f1111] text-[13px] leading-[29px] px-[11px] pr-[10px] py-0 w-[100px] hover:bg-[#f7fafa] focus:border-[#008296] focus:outline-none"
      >
        Button 13
      </button>
    ),
  },
  {
    id: 'button14',
    name: 'Simple Grey Button',
    html: '<button class="button-16" role="button">Button 16</button>',
    css: `.button-16 {
      background-color: #f8f9fa;
      border: 1px solid #f8f9fa;
      border-radius: 4px;
      color: #3c4043;
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-size: 14px;
      height: 36px;
      line-height: 27px;
      min-width: 54px;
      padding: 0 16px;
      text-align: center;
      user-select: none;
      touch-action: manipulation;
      white-space: pre;
    }
  
    .button-16:hover {
      border-color: #dadce0;
      box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
      color: #202124;
    }
  
    .button-16:focus {
      border-color: #4285f4;
      outline: none;
    }`,
    component: (
      <button
        className="bg-[#f8f9fa] border border-[#f8f9fa] rounded text-[#3c4043] font-sans text-sm h-9 leading-[27px] min-w-[54px] px-4 text-center select-none hover:border-[#dadce0] hover:shadow-[0_1px_1px_rgba(0,0,0,0.1)] hover:text-[#202124] focus:border-[#4285f4] focus:outline-none"
      >
        Button 14
      </button>
    ),
  },
  {
    id: 'button15',
    name: 'Google Style Button',
    html: '<button class="button-17" role="button">Button 17</button>',
    css: `.button-17 {
      align-items: center;
      appearance: none;
      background-color: #fff;
      border-radius: 24px;
      border-style: none;
      box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
      color: #3c4043;
      cursor: pointer;
      display: inline-flex;
      font-family: "Google Sans", Roboto, Arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      height: 48px;
      justify-content: center;
      letter-spacing: .25px;
      padding: 2px 24px;
      text-align: center;
      transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
      user-select: none;
      touch-action: manipulation;
      width: auto;
      z-index: 0;
    }
  
    .button-17:hover {
      background: #F6F9FE;
      color: #174ea6;
    }
  
    .button-17:focus {
      outline: none;
      border: 2px solid #4285f4;
    }
  
    .button-17:active {
      box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    }`,
    component: (
      <button
        className="inline-flex items-center bg-white rounded-full shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0_rgba(0,0,0,0.14),0_1px_18px_0_rgba(0,0,0,0.12)] text-[#3c4043] cursor-pointer font-sans text-sm font-medium h-12 justify-center px-6 py-0.5 transition-all duration-300 select-none hover:bg-[#F6F9FE] hover:text-[#174ea6] focus:outline-none focus:border-2 focus:border-[#4285f4] active:shadow-[0_4px_4px_0_rgba(60,64,67,0.3),0_8px_12px_6px_rgba(60,64,67,0.15)]"
      >
        Button 15
      </button>
    ),
  },
  {
    id: 'button16',
    name: 'LinkedIn Style Button',
    html: '<button class="button-18" role="button">Button 18</button>',
    css: `.button-18 {
      align-items: center;
      background-color: #0A66C2;
      border: 0;
      border-radius: 100px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      display: inline-flex;
      font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      line-height: 20px;
      padding: 0 20px;
      text-align: center;
      transition: background-color 0.167s, box-shadow 0.167s, color 0.167s;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-18:hover,
    .button-18:focus {
      background-color: #16437E;
      color: #ffffff;
    }
  
    .button-18:active {
      background: #09223b;
      color: rgba(255, 255, 255, .7);
    }
  
    .button-18:disabled {
      cursor: not-allowed;
      background: rgba(0, 0, 0, .08);
      color: rgba(0, 0, 0, .3);
    }`,
    component: (
      <button
        className="inline-flex items-center bg-[#0A66C2] rounded-full text-white cursor-pointer font-semibold text-base justify-center leading-5 px-5 py-2 transition-colors duration-150 select-none hover:bg-[#16437E] active:bg-[#09223b] active:text-[rgba(255,255,255,0.7)] focus:outline-none disabled:bg-[rgba(0,0,0,0.08)] disabled:text-[rgba(0,0,0,0.3)] disabled:cursor-not-allowed"
      >
        Button 16
      </button>
    ),
  },
  {
    id: 'button17',
    name: 'Bold Blue Button',
    html: '<button class="button-19" role="button">Button 19</button>',
    css: `.button-19 {
      appearance: button;
      background-color: #1899D6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: din-round, sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: .8px;
      line-height: 20px;
      padding: 13px 16px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transition: filter .2s;
      user-select: none;
      vertical-align: middle;
      width: 100%;
    }
  
    .button-19:after {
      background-clip: padding-box;
      background-color: #1CB0F6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  
    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
    }
  
    .button-19:active {
      border-width: 4px 0 0;
      background: none;
    }`,
    component: (
      <button
        className="relative bg-[#1899D6] text-white uppercase font-bold text-[15px] leading-5 tracking-[0.8px] py-3 px-4 w-full rounded-[16px] transition-filter duration-200 select-none focus:outline-none after:content-[''] after:absolute after:inset-0 after:-bottom-1 after:bg-[#1CB0F6] after:rounded-[16px] after:z-[-1] hover:filter brightness-110 active:border-t-4 active:border-b-0 active:bg-none"
      >
        Button 17
      </button>
    ),
  },
  {
    id: 'button18',
    name: 'Gradient Blue Button',
    html: '<button class="button-20" role="button">Button 20</button>',
    css: `.button-20 {
      background-color: #4D4AE8;
      background-image: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));
      border: 1px solid #4D4AE8;
      border-radius: 1rem;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: Inter, sans-serif;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
      padding: .5rem 1rem;
      text-align: center;
      transition: background-color .15s, border-color .15s, box-shadow .15s;
      user-select: none;
      vertical-align: middle;
    }
  
    .button-20:hover {
      background-color: #3733E5;
      border-color: #3733E5;
    }
  
    .button-20:focus {
      background-color: #413FC5;
      border-color: #3E3BBA;
      box-shadow: 0 0 0 .2rem rgba(104, 101, 235, 0.5);
    }
  
    .button-20:active {
      background-color: #3E3BBA;
      box-shadow: inset 0 3px 5px rgba(46, 54, 80, 0.125);
    }`,
    component: (
      <button
        className="bg-[#4D4AE8] bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent border border-[#4D4AE8] rounded-xl text-white font-medium text-base leading-6 py-2 px-4 text-center transition-colors duration-150 select-none hover:bg-[#3733E5] hover:border-[#3733E5] focus:bg-[#413FC5] focus:border-[#3E3BBA] focus:shadow-[0_0_0_4px_rgba(104,101,235,0.5)] focus:outline-none active:bg-[#3E3BBA] active:shadow-[inset_0_3px_5px_rgba(46,54,80,0.125)]"
      >
        Button 18
      </button>
    ),
  },
  {
    id: 'button19',
    name: 'Blue Gradient Button',
    html: '<button class="button-21" role="button">Button 21</button>',
    css: `.button-21 {
      align-items: center;
      background-color: #3EB2FD;
      background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
      background-size: calc(100% + 20px) calc(100% + 20px);
      border-radius: 100px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-flex;
      font-family: CircularStd, sans-serif;
      font-size: 1rem;
      padding: 6px 20px;
      text-align: center;
      transition: background-position .2s;
      user-select: none;
      white-space: nowrap;
    }
  
    .button-21:hover {
      background-position: -20px -20px;
    }
  
    .button-21:focus:not(:active) {
      box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
    }`,
    component: (
      <button
        className="inline-flex items-center bg-[#3EB2FD] bg-gradient-to-r from-[#4F58FD] to-[#149BF3] bg-[length:calc(100%_+_20px)_calc(100%_+_20px)] bg-center hover:bg-[position:-20px_-20px] rounded-full text-white font-sans text-base py-1.5 px-5 transition-all duration-200 select-none focus:outline-none focus:shadow-[0_0_0_2px_rgba(40,170,255,0.25)]"
      >
        Button 19
      </button>
    ),
  },
  {
    id: 'button20',
    name: 'White Border Button',
    html: '<button class="button-23" role="button">Button 23</button>',
    css: `.button-23 {
      background-color: #FFFFFF;
      border: 1px solid #222222;
      border-radius: 8px;
      box-sizing: border-box;
      color: #222222;
      cursor: pointer;
      font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      padding: 13px 23px;
      text-align: center;
      transition: box-shadow .2s, transform .1s;
      user-select: none;
      width: auto;
    }
  
    .button-23:focus-visible {
      box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    }
  
    .button-23:active {
      background-color: #F7F7F7;
      border-color: #000000;
      transform: scale(.96);
    }
  
    .button-23:disabled {
      border-color: #DDDDDD;
      color: #DDDDDD;
      cursor: not-allowed;
    }`,
    component: (
      <button
        className="bg-white border border-[#222222] rounded-lg text-[#222222] font-semibold text-base leading-5 py-3 px-5 text-center transition-all duration-200 select-none focus:outline-none focus-visible:shadow-[0_0_0_2px_#222222,0_0_0_4px_rgba(255,255,255,0.8)] active:bg-[#F7F7F7] active:border-black active:scale-95 disabled:border-[#DDDDDD] disabled:text-[#DDDDDD] disabled:cursor-not-allowed"
      >
        Button 20
      </button>
    ),
  },
  {
    id: 'button21',
    name: 'Bold Black Button',
    html: '<button class="button-27" role="button">Button 27</button>',
    css: `.button-27 {
      background-color: #000000;
      border: 2px solid #1A1A1A;
      border-radius: 15px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      min-height: 60px;
      padding: 16px 24px;
      text-align: center;
      transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
      user-select: none;
      width: 100%;
    }
  
    .button-27:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
  
    .button-27:active {
      box-shadow: none;
      transform: translateY(0);
    }`,
    component: (
      <button
        className="bg-black border-2 border-[#1A1A1A] rounded-[15px] text-white font-semibold text-base min-h-[60px] py-4 px-6 w-full text-center transition-all duration-300 select-none hover:shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:shadow-none active:translate-y-0"
      >
        Button 21
      </button>
    ),
  },
  {
    id: 'button22',
    name: 'Outlined Black Button',
    html: '<button class="button-28" role="button">Button 28</button>',
    css: `.button-28 {
      appearance: none;
      background-color: transparent;
      border: 2px solid #1A1A1A;
      border-radius: 15px;
      box-sizing: border-box;
      color: #3B3B3B;
      cursor: pointer;
      display: inline-block;
      font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      margin: 0;
      min-height: 60px;
      min-width: 0;
      outline: none;
      padding: 16px 24px;
      text-align: center;
      text-decoration: none;
      transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 100%;
      will-change: transform;
    }
  
    .button-28:disabled {
      pointer-events: none;
    }
  
    .button-28:hover {
      color: #fff;
      background-color: #1A1A1A;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
  
    .button-28:active {
      box-shadow: none;
      transform: translateY(0);
    }`,
    component: (
      <button
        className="appearance-none bg-transparent border-2 border-[#1A1A1A] rounded-[15px] text-[#3B3B3B] cursor-pointer inline-block font-sans text-base font-semibold m-0 min-h-[60px] min-w-0 outline-none py-4 px-6 text-center select-none w-full transition-all duration-300 hover:text-white hover:bg-[#1A1A1A] hover:shadow-[0_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:shadow-none active:translate-y-0"
      >
        Button 22
      </button>
    ),
  },
  {
    id: 'button23',
    name: 'Gradient Shadow Button',
    html: '<button class="button-29" role="button">Button 29</button>',
    css: `.button-29 {
      align-items: center;
      appearance: none;
      background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
      border: 0;
      border-radius: 6px;
      box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,
        rgba(45, 35, 66, .3) 0 7px 13px -3px,
        rgba(58, 65, 111, .5) 0 -3px 0 inset;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-family: "JetBrains Mono", monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      overflow: hidden;
      padding: 0 16px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow .15s, transform .15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      font-size: 18px;
    }
  
    .button-29:focus {
      box-shadow: #3c4fe0 0 0 0 1.5px inset,
        rgba(45, 35, 66, .4) 0 2px 4px,
        rgba(45, 35, 66, .3) 0 7px 13px -3px,
        #3c4fe0 0 -3px 0 inset;
    }
  
    .button-29:hover {
      box-shadow: rgba(45, 35, 66, .4) 0 4px 8px,
        rgba(45, 35, 66, .3) 0 7px 13px -3px,
        #3c4fe0 0 -3px 0 inset;
      transform: translateY(-2px);
    }
  
    .button-29:active {
      box-shadow: #3c4fe0 0 3px 7px inset;
      transform: translateY(2px);
    }`,
    component: (
      <button
        className="inline-flex items-center appearance-none bg-[radial-gradient(100%_100%_at_100%_0,#5adaff_0%,#5468ff_100%)] border-0 rounded-md shadow-[0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),inset_0_-3px_0_rgba(58,65,111,0.5)] text-white cursor-pointer font-mono h-12 justify-center leading-none px-4 text-lg transition-all duration-150 select-none focus:shadow-[inset_0_0_0_1.5px_#3c4fe0,0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),inset_0_-3px_0_#3c4fe0] hover:shadow-[0_4px_8px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),inset_0_-3px_0_#3c4fe0] hover:-translate-y-0.5 active:shadow-[inset_0_3px_7px_#3c4fe0] active:translate-y-0.5"
      >
        Button 23
      </button>
    ),
  },
  {
    id: 'button24',
    name: 'White Shadow Button',
    html: '<button class="button-30" role="button">Button 30</button>',
    css: `.button-30 {
      align-items: center;
      appearance: none;
      background-color: #FCFCFD;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
        #D6D6E7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395A;
      cursor: pointer;
      display: inline-flex;
      font-family: "JetBrains Mono", monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      overflow: hidden;
      padding: 0 16px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow .15s, transform .15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      font-size: 18px;
    }
  
    .button-30:focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset,
        rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
        #D6D6E7 0 -3px 0 inset;
    }
  
    .button-30:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
        #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }
  
    .button-30:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }`,
    component: (
      <button
        className="inline-flex items-center appearance-none bg-[#FCFCFD] rounded-md shadow-[0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),inset_0_-3px_0_#D6D6E7] text-[#36395A] cursor-pointer font-mono h-12 justify-center leading-none px-4 text-lg transition-all duration-150 select-none focus:shadow-[inset_0_0_0_1.5px_#D6D6E7,0_2px_4px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),inset_0_-3px_0_#D6D6E7] hover:shadow-[0_4px_8px_rgba(45,35,66,0.4),0_7px_13px_-3px_rgba(45,35,66,0.3),inset_0_-3px_0_#D6D6E7] hover:-translate-y-0.5 active:shadow-[inset_0_3px_7px_#D6D6E7] active:translate-y-0.5"
      >
        Button 24
      </button>
    ),
  },
  {
    id: 'button25',
    name: 'Solid Black Button',
    html: '<button class="button-31" role="button">Button 31</button>',
    css: `.button-31 {
      background-color: #222;
      border-radius: 4px;
      border-style: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      min-height: 44px;
      padding: 9px 20px 8px;
      text-align: center;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 100%;
    }
  
    .button-31:hover,
    .button-31:focus {
      opacity: .75;
    }`,
    component: (
      <button
        className="bg-[#222] rounded-md border-none text-white cursor-pointer inline-block font-sans text-base font-bold leading-6 min-h-[44px] py-2.5 px-5 text-center select-none w-full hover:opacity-75 focus:opacity-75"
      >
        Button 25
      </button>
    ),
  },
  {
    id: 'button26',
    name: 'Bold Yellow Button',
    html: '<button class="button-32" role="button">Button 32</button>',
    css: `.button-32 {
      background-color: #fff000;
      border-radius: 12px;
      color: #000;
      cursor: pointer;
      font-weight: bold;
      padding: 10px 15px;
      text-align: center;
      transition: 200ms;
      width: 100%;
      box-sizing: border-box;
      border: 0;
      font-size: 16px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-32:not(:disabled):hover,
    .button-32:not(:disabled):focus {
      outline: 0;
      background: #f4e603;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, .2), 0 3px 8px 0 rgba(0, 0, 0, .15);
    }
  
    .button-32:disabled {
      filter: saturate(0.2) opacity(0.5);
      cursor: not-allowed;
    }`,
    component: (
      <button
        className="bg-[#fff000] rounded-xl text-black cursor-pointer font-bold py-2.5 px-4 text-center transition duration-200 w-full box-border border-0 text-base select-none hover:bg-[#f4e603] hover:outline-none hover:shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] focus:bg-[#f4e603] focus:outline-none focus:shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Button 26
      </button>
    ),
  },
  {
    id: 'button27',
    name: 'Green Shadow Button',
    html: '<button class="button-33" role="button">Button 33</button>',
    css: `.button-33 {
      background-color: #c2fbd7;
      border-radius: 100px;
      box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, .15) 0 1px 2px,
        rgba(44, 187, 99, .15) 0 2px 4px,
        rgba(44, 187, 99, .15) 0 4px 8px,
        rgba(44, 187, 99, .15) 0 8px 16px,
        rgba(44, 187, 99, .15) 0 16px 32px;
      color: green;
      cursor: pointer;
      display: inline-block;
      font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
      padding: 7px 20px;
      text-align: center;
      text-decoration: none;
      transition: all 250ms;
      border: 0;
      font-size: 16px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-33:hover {
      box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, .25) 0 1px 2px,
        rgba(44, 187, 99, .25) 0 2px 4px,
        rgba(44, 187, 99, .25) 0 4px 8px,
        rgba(44, 187, 99, .25) 0 8px 16px,
        rgba(44, 187, 99, .25) 0 16px 32px;
      transform: scale(1.05) rotate(-1deg);
    }`,
    component: (
      <button
        className="bg-[#c2fbd7] rounded-full shadow-[inset_0_-25px_18px_-14px_rgba(44,187,99,0.2),0_1px_2px_rgba(44,187,99,0.15),0_2px_4px_rgba(44,187,99,0.15),0_4px_8px_rgba(44,187,99,0.15),0_8px_16px_rgba(44,187,99,0.15),0_16px_32px_rgba(44,187,99,0.15)] text-green-700 cursor-pointer inline-block font-sans text-base py-1.5 px-5 text-center transition-all duration-250 select-none hover:shadow-[inset_0_-25px_18px_-14px_rgba(44,187,99,0.35),0_1px_2px_rgba(44,187,99,0.25),0_2px_4px_rgba(44,187,99,0.25),0_4px_8px_rgba(44,187,99,0.25),0_8px_16px_rgba(44,187,99,0.25),0_16px_32px_rgba(44,187,99,0.25)] hover:scale-105 hover:-rotate-1"
      >
        Button 27
      </button>
    ),
  },
  {
    id: 'button28',
    name: 'Purple Shadow Button',
    html: '<button class="button-34" role="button">Button 34</button>',
    css: `.button-34 {
      background: #5E5DF0;
      border-radius: 999px;
      box-shadow: #5E5DF0 0 10px 20px -10px;
      color: #FFFFFF;
      cursor: pointer;
      font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      padding: 8px 18px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      border: 0;
    }`,
    component: (
      <button
        className="bg-[#5E5DF0] rounded-full shadow-[0_10px_20px_-10px_#5E5DF0] text-white cursor-pointer font-sans text-base font-bold leading-6 py-2 px-4 select-none w-fit border-0"
      >
        Button 28
      </button>
    ),
  },
  {
    id: 'button29',
    name: 'White Rounded Button',
    html: '<button class="button-35" role="button">Button 35</button>',
    css: `.button-35 {
      align-items: center;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px;
      color: #121212;
      cursor: pointer;
      display: inline-flex;
      font-family: Inter, sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1;
      padding: 1rem 1.2rem;
      text-align: center;
      text-decoration: none;
      transition: box-shadow .2s;
      white-space: nowrap;
      border: 0;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-35:hover {
      box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
    }`,
    component: (
      <button
        className="inline-flex items-center bg-white rounded-xl shadow-[0_0_0_3px_transparent,0_6px_20px_rgba(18,18,18,0.1)] text-[#121212] cursor-pointer font-sans text-lg font-bold justify-center leading-none py-4 px-5 text-center transition-shadow duration-200 whitespace-nowrap border-0 select-none hover:shadow-[0_0_0_3px_#121212,0_0_0_0_transparent]"
      >
        Button 29
      </button>
    ),
  },
  {
    id: 'button30',
    name: 'Bright Yellow Button',
    html: '<button class="button-32" role="button">Button 32</button>',
    css: `.button-32 {
      background-color: #fff000;
      border-radius: 12px;
      color: #000;
      cursor: pointer;
      font-weight: bold;
      padding: 10px 15px;
      text-align: center;
      transition: 200ms;
      width: 100%;
      box-sizing: border-box;
      border: 0;
      font-size: 16px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-32:not(:disabled):hover,
    .button-32:not(:disabled):focus {
      outline: 0;
      background: #f4e603;
      box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    }
  
    .button-32:disabled {
      filter: saturate(0.2) opacity(0.5);
      cursor: not-allowed;
    }`,
    component: (
      <button
        className="bg-[#fff000] rounded-xl text-black font-bold py-2.5 px-4 text-center transition duration-200 w-full box-border border-0 text-base select-none hover:bg-[#f4e603] hover:shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] focus:outline-none focus:bg-[#f4e603] focus:shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Button 30
      </button>
    ),
  },
  {
    id: 'button31',
    name: 'Green Shadow Button',
    html: '<button class="button-33" role="button">Button 33</button>',
    css: `.button-33 {
      background-color: #c2fbd7;
      border-radius: 100px;
      box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, .15) 0 1px 2px,
        rgba(44, 187, 99, .15) 0 2px 4px,
        rgba(44, 187, 99, .15) 0 4px 8px,
        rgba(44, 187, 99, .15) 0 8px 16px,
        rgba(44, 187, 99, .15) 0 16px 32px;
      color: green;
      cursor: pointer;
      display: inline-block;
      font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
      padding: 7px 20px;
      text-align: center;
      text-decoration: none;
      transition: all 250ms;
      border: 0;
      font-size: 16px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-33:hover {
      box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset,
        rgba(44, 187, 99, .25) 0 1px 2px,
        rgba(44, 187, 99, .25) 0 2px 4px,
        rgba(44, 187, 99, .25) 0 4px 8px,
        rgba(44, 187, 99, .25) 0 8px 16px,
        rgba(44, 187, 99, .25) 0 16px 32px;
      transform: scale(1.05) rotate(-1deg);
    }`,
    component: (
      <button
        className="bg-[#c2fbd7] rounded-full shadow-[inset_0_-25px_18px_-14px_rgba(44,187,99,0.2),0_1px_2px_rgba(44,187,99,0.15),0_2px_4px_rgba(44,187,99,0.15),0_4px_8px_rgba(44,187,99,0.15),0_8px_16px_rgba(44,187,99,0.15),0_16px_32px_rgba(44,187,99,0.15)] text-green-700 cursor-pointer inline-block font-sans text-base py-1.5 px-5 text-center transition-all duration-250 select-none hover:shadow-[inset_0_-25px_18px_-14px_rgba(44,187,99,0.35),0_1px_2px_rgba(44,187,99,0.25),0_2px_4px_rgba(44,187,99,0.25),0_4px_8px_rgba(44,187,99,0.25),0_8px_16px_rgba(44,187,99,0.25),0_16px_32px_rgba(44,187,99,0.25)] hover:scale-105 hover:-rotate-1"
      >
        Button 31
      </button>
    ),
  },
  {
    id: 'button32',
    name: 'Purple Shadow Button',
    html: '<button class="button-34" role="button">Button 34</button>',
    css: `.button-34 {
      background: #5E5DF0;
      border-radius: 999px;
      box-shadow: #5E5DF0 0 10px 20px -10px;
      color: #FFFFFF;
      cursor: pointer;
      font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      padding: 8px 18px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      border: 0;
    }`,
    component: (
      <button
        className="bg-[#5E5DF0] rounded-full shadow-[0_10px_20px_-10px_#5E5DF0] text-white cursor-pointer font-sans text-base font-bold leading-6 py-2 px-4 select-none w-fit border-0"
      >
        Button 32
      </button>
    ),
  },
  {
    id: 'button33',
    name: 'White Rounded Button',
    html: '<button class="button-35" role="button">Button 35</button>',
    css: `.button-35 {
      align-items: center;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px;
      color: #121212;
      cursor: pointer;
      display: inline-flex;
      font-family: Inter, sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1;
      padding: 1rem 1.2rem;
      text-align: center;
      text-decoration: none;
      transition: box-shadow .2s;
      white-space: nowrap;
      border: 0;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
  
    .button-35:hover {
      box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
    }`,
    component: (
      <button
        className="inline-flex items-center bg-white rounded-xl shadow-[0_0_0_3px_transparent,0_6px_20px_rgba(18,18,18,0.1)] text-[#121212] cursor-pointer font-sans text-lg font-bold justify-center leading-none py-4 px-5 text-center transition-shadow duration-200 whitespace-nowrap border-0 select-none hover:shadow-[0_0_0_3px_#121212,0_0_0_0_transparent]"
      >
        Button 33
      </button>
    ),
  },
  {
    id: 'button34',
    name: 'Simple White Button',
    html: '<button class="button-38" role="button">Button 38</button>',
    css: `.button-38 {
      background-color: #FFFFFF;
      border: 0;
      border-radius: .5rem;
      box-sizing: border-box;
      color: #111827;
      font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;
      font-size: .875rem;
      font-weight: 600;
      line-height: 1.25rem;
      padding: .75rem 1rem;
      text-align: center;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                  0 1px 2px 0 rgba(0, 0, 0, 0.06);
      cursor: pointer;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-38:hover {
      background-color: rgb(249,250,251);
    }
  
    .button-38:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }`,
    component: (
      <button
        className="bg-white border-0 rounded-md text-[#111827] font-sans text-sm font-semibold leading-5 py-3 px-4 text-center shadow-md cursor-pointer select-none hover:bg-[rgb(249,250,251)] focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2"
      >
        Button 34
      </button>
    ),
  },
  {
    id: 'button35',
    name: 'Dark Gray Button',
    html: '<button class="button-40" role="button">Button 40</button>',
    css: `.button-40 {
      background-color: #111827;
      border: 1px solid transparent;
      border-radius: .75rem;
      color: #FFFFFF;
      cursor: pointer;
      font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif;
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.5rem;
      padding: .75rem 1.2rem;
      text-align: center;
      transition-duration: .2s;
      transition-property: background-color,border-color,color,fill,stroke;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-40:hover {
      background-color: #374151;
    }
  
    .button-40:focus {
      box-shadow: none;
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  
    @media (min-width: 768px) {
      .button-40 {
        padding: .75rem 1.5rem;
      }
    }`,
    component: (
      <button
        className="bg-[#111827] border border-transparent rounded-lg text-white cursor-pointer font-sans text-lg font-semibold leading-6 py-3 px-5 text-center transition-colors duration-200 select-none hover:bg-[#374151] focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 md:px-6"
      >
        Button 35
      </button>
    ),
  },
  {
    id: 'button36',
    name: 'Light Gray Button',
    html: '<button class="button-46" role="button">Button 46</button>',
    css: `.button-46 {
      align-items: center;
      background-color: rgba(240, 240, 240, 0.26);
      border: 1px solid #DFDFDF;
      border-radius: 16px;
      color: #000000;
      cursor: pointer;
      display: flex;
      font-family: Inter, sans-serif;
      font-size: 18px;
      justify-content: center;
      line-height: 28px;
      max-width: 100%;
      padding: 14px 22px;
      text-decoration: none;
      transition: all .2s;
      user-select: none;
      touch-action: manipulation;
      width: 100%;
    }
  
    .button-46:hover {
      background-color: #FFFFFF;
      border-color: rgba(0, 0, 0, 0.19);
    }
  
    @media (min-width: 768px) {
      .button-46 {
        font-size: 20px;
        min-width: 200px;
        padding: 14px 16px;
      }
    }`,
    component: (
      <button
        className="flex items-center bg-[rgba(240,240,240,0.26)] border border-[#DFDFDF] rounded-[16px] text-black cursor-pointer font-sans text-lg justify-center leading-7 max-w-full py-3.5 px-5.5 transition-all duration-200 select-none w-full hover:bg-white hover:border-[rgba(0,0,0,0.19)] md:text-xl md:min-w-[200px] md:px-4"
      >
        Button 36
      </button>
    ),
  },
  {
    id: 'button37',
    name: 'Shadowed Black Button',
    html: '<button class="button-50" role="button">Button 50</button>',
    css: `.button-50 {
      appearance: button;
      background-color: #000;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      padding: 12px 40px;
      text-align: center;
      text-transform: none;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-50:not([disabled]):active {
      box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
      transform: translate(2px, 2px);
    }`,
    component: (
      <button
        className="appearance-button bg-black border border-black rounded-md shadow-[#fff_4px_4px_0_0,#000_4px_4px_0_1px] text-white cursor-pointer font-sans text-sm font-normal leading-5 py-3 px-10 text-center select-none transition-all duration-200 hover:shadow-[#fff_2px_2px_0_0,#000_2px_2px_0_1px] hover:translate-x-0.5 hover:translate-y-0.5"
      >
        Button 37
      </button>
    ),
  },
  {
    id: 'button38',
    name: 'Retro Styled Button',
    html: '<button class="button-54" role="button">Button 54</button>',
    css: `.button-54 {
      font-family: "Open Sans", sans-serif;
      font-size: 16px;
      letter-spacing: 2px;
      text-decoration: none;
      text-transform: uppercase;
      color: #000;
      cursor: pointer;
      border: 3px solid;
      padding: 0.25em 0.5em;
      box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px,
                  3px 3px 0px 0px, 4px 4px 0px 0px,
                  5px 5px 0px 0px;
      position: relative;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-54:active {
      box-shadow: 0px 0px 0px 0px;
      top: 5px;
      left: 5px;
    }`,
    component: (
      <button
        className="font-sans text-base tracking-widest uppercase text-black cursor-pointer border-4 py-1 px-2 shadow-[1px_1px_0_0,2px_2px_0_0,3px_3px_0_0,4px_4px_0_0,5px_5px_0_0] relative select-none transition-all duration-200 active:shadow-none active:translate-x-1.25 active:translate-y-1.25"
      >
        Button 38
      </button>
    ),
  },
  {
    id: 'button39',
    name: 'Pink Shadow Button',
    html: '<button class="button-56" role="button">Button 56</button>',
    css: `.button-56 {
      align-items: center;
      background-color: #fee6e3;
      border: 2px solid #111;
      border-radius: 8px;
      color: #111;
      cursor: pointer;
      display: flex;
      font-family: Inter, sans-serif;
      font-size: 16px;
      height: 48px;
      justify-content: center;
      line-height: 24px;
      padding: 0 25px;
      position: relative;
      text-align: center;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-56:after {
      background-color: #111;
      border-radius: 8px;
      content: "";
      display: block;
      height: 48px;
      left: 0;
      width: 100%;
      position: absolute;
      top: -2px;
      transform: translate(8px, 8px);
      transition: transform .2s ease-out;
      z-index: -1;
    }
  
    .button-56:hover:after {
      transform: translate(0, 0);
    }
  
    .button-56:active {
      background-color: #ffdeda;
      outline: 0;
    }
  
    @media (min-width: 768px) {
      .button-56 {
        padding: 0 40px;
      }
    }`,
    component: (
      <button
        className="relative flex items-center bg-[#fee6e3] border-2 border-[#111] rounded-md text-[#111] cursor-pointer font-sans text-base h-12 justify-center leading-6 px-6 text-center select-none transition-transform duration-200 after:content-[''] after:absolute after:bg-[#111] after:rounded-md after:w-full after:h-12 after:top-[-2px] after:left-0 after:transform after:translate-x-2 after:translate-y-2 after:transition-transform after:duration-200 hover:after:translate-x-0 hover:after:translate-y-0 active:bg-[#ffdeda] md:px-10"
      >
        Button 39
      </button>
    ),
  },
  {
    id: 'button40',
    name: 'Animated Text Button',
    html: '<button class="button-57" role="button"><span class="text">Button 57</span><span>Alternate text</span></button>',
    css: `.button-57 {
      position: relative;
      overflow: hidden;
      border: 1px solid #18181a;
      color: #18181a;
      display: inline-block;
      font-size: 15px;
      line-height: 15px;
      padding: 18px 18px 17px;
      text-decoration: none;
      cursor: pointer;
      background: #fff;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-57 span:first-child {
      position: relative;
      transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 10;
    }
  
    .button-57 span:last-child {
      color: white;
      display: block;
      position: absolute;
      bottom: 0;
      transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 100;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translateY(225%) translateX(-50%);
      height: 14px;
      line-height: 13px;
    }
  
    .button-57:after {
      content: "";
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      transform-origin: bottom center;
      transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
      transform: skewY(9.3deg) scaleY(0);
      z-index: 50;
    }
  
    .button-57:hover:after {
      transform-origin: bottom center;
      transform: skewY(9.3deg) scaleY(2);
    }
  
    .button-57:hover span:last-child {
      transform: translateX(-50%) translateY(-100%);
      opacity: 1;
      transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
    }`,
    component: (
      <button
        className="relative overflow-hidden border border-[#18181a] text-[#18181a] inline-block text-[15px] leading-[15px] py-[18px] px-[18px_17px] bg-white cursor-pointer select-none"
      >
        <span className="relative z-10 transition-colors">Button 40</span>
        <span className="absolute bottom-0 left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[225%] h-[14px] leading-[13px] text-white opacity-0 transition-all z-20">
          Alternate text
        </span>
        <span className="absolute bottom-[-50%] left-0 w-full h-full bg-black transform origin-bottom-center skew-y-[9.3deg] scale-y-0 transition-transform z-10"></span>
      </button>
    ),
  },
  {
    id: 'button41',
    name: 'Outline White Button',
    html: '<button class="button-59" role="button">Button 59</button>',
    css: `.button-59 {
      align-items: center;
      background-color: #fff;
      border: 2px solid #000;
      color: #000;
      cursor: pointer;
      display: inline-flex;
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-weight: 600;
      height: 48px;
      justify-content: center;
      letter-spacing: -.8px;
      line-height: 24px;
      min-width: 140px;
      padding: 0 17px;
      text-align: center;
      text-decoration: none;
      transition: all .3s;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-59:hover {
      border-color: #06f;
      color: #06f;
    }
  
    @media (min-width: 768px) {
      .button-59 {
        min-width: 170px;
      }
    }`,
    component: (
      <button
        className="inline-flex items-center bg-white border-2 border-black text-black cursor-pointer font-sans text-base font-semibold h-12 justify-center tracking-[-0.8px] leading-6 min-w-[140px] px-4 text-center transition-all duration-300 select-none hover:border-[#06f] hover:text-[#06f] md:min-w-[170px]"
      >
        Button 41
      </button>
    ),
  },
  {
    id: 'button42',
    name: 'Simple White Border Button',
    html: '<button class="button-60" role="button">Button 60</button>',
    css: `.button-60 {
      align-items: center;
      background-color: #fff;
      border: 1px solid #dbdbdb;
      border-radius: .375em;
      color: #363636;
      cursor: pointer;
      display: inline-flex;
      font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 1rem;
      height: 2.5em;
      justify-content: center;
      line-height: 1.5;
      padding: calc(.5em - 1px) 1em;
      text-align: center;
      user-select: none;
      touch-action: manipulation;
      vertical-align: top;
      white-space: nowrap;
    }
  
    .button-60:hover {
      border-color: #b5b5b5;
    }
  
    .button-60:focus:not(:active) {
      box-shadow: rgba(72, 95, 199, .25) 0 0 0 .125em;
    }`,
    component: (
      <button
        className="inline-flex items-center bg-white border border-[#dbdbdb] rounded-md text-[#363636] cursor-pointer font-sans text-base h-10 justify-center leading-[1.5] px-4 text-center select-none hover:border-[#b5b5b5] focus:outline-none focus:ring-2 focus:ring-[#485fc7] focus:ring-opacity-25"
      >
        Button 42
      </button>
    ),
  },
  {
    id: 'button43',
    name: 'Colorful Gradient Button',
    html: '<button class="button-63" role="button">Button 63</button>',
    css: `.button-63 {
      align-items: center;
      background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
      border: 0;
      border-radius: 8px;
      box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
      color: #FFFFFF;
      display: flex;
      font-family: Phantomsans, sans-serif;
      font-size: 20px;
      justify-content: center;
      line-height: 1em;
      min-width: 140px;
      padding: 19px 24px;
      text-decoration: none;
      user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      cursor: pointer;
    }
  
    @media (min-width: 768px) {
      .button-63 {
        font-size: 24px;
        min-width: 196px;
      }
    }`,
    component: (
      <button
        className="flex items-center bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] rounded-md shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] text-white font-sans text-lg justify-center leading-none min-w-[140px] py-4.5 px-6 text-center select-none cursor-pointer md:text-xl md:min-w-[196px]"
      >
        Button 43
      </button>
    ),
  },
  {
    id: 'button44',
    name: 'Gradient Border Button',
    html: '<button class="button-64" role="button"><span class="text">Button 64</span></button>',
    css: `.button-64 {
      align-items: center;
      background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
      border: 0;
      border-radius: 8px;
      box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
      color: #FFFFFF;
      display: flex;
      font-family: Phantomsans, sans-serif;
      font-size: 20px;
      justify-content: center;
      line-height: 1em;
      min-width: 140px;
      padding: 3px;
      text-decoration: none;
      user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      cursor: pointer;
    }
  
    .button-64 span {
      background-color: rgb(5, 6, 45);
      padding: 16px 24px;
      border-radius: 6px;
      width: 100%;
      height: 100%;
      transition: 300ms;
    }
  
    .button-64:hover span {
      background: none;
    }
  
    @media (min-width: 768px) {
      .button-64 {
        font-size: 24px;
        min-width: 196px;
      }
    }`,
    component: (
      <button
        className="flex items-center bg-gradient-to-r from-[#AF40FF] via-[#5B42F3] to-[#00DDEB] rounded-md shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] text-white font-sans text-lg justify-center leading-none min-w-[140px] p-[3px] text-center select-none cursor-pointer md:text-xl md:min-w-[196px]"
      >
        <span className="bg-[rgb(5,6,45)] rounded-[6px] w-full h-full py-4 px-6 transition-all duration-300">
          Button 44
        </span>
      </button>
    ),
  },
  {
    id: 'button45',
    name: 'Blue Rounded Button',
    html: '<button class="button-65" role="button">Button 65</button>',
    css: `.button-65 {
      background-color: #2f80ed;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
      font-size: 15px;
      font-weight: 500;
      height: 50px;
      padding: 14px 30px;
      text-align: center;
      transition: all .3s;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-65:hover {
      background-color: #1366d6;
      box-shadow: rgba(0, 0, 0, .05) 0 5px 30px,
                  rgba(0, 0, 0, .05) 0 1px 4px;
      transform: translateY(0);
      transition-duration: .35s;
    }
  
    .button-65:active {
      box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0,
                  rgba(0, 0, 0, .1) 0 0 10px 0,
                  rgba(0, 0, 0, .1) 0 1px 4px -1px;
      transform: translateY(2px);
      transition-duration: .35s;
    }
  
    @media (min-width: 768px) {
      .button-65 {
        padding: 14px 22px;
        width: 176px;
      }
    }`,
    component: (
      <button
        className="bg-[#2f80ed] rounded-[10px] text-white cursor-pointer font-sans text-[15px] font-medium h-[50px] px-7 text-center transition-all duration-300 select-none hover:bg-[#1366d6] hover:shadow-[0_5px_30px_rgba(0,0,0,0.05),0_1px_4px_rgba(0,0,0,0.05)] hover:transform hover:translate-y-0 hover:duration-350 active:shadow-[0_3px_6px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.1),0_1px_4px_-1px_rgba(0,0,0,0.1)] active:translate-y-0.5 md:px-5.5 md:w-[176px]"
      >
        Button 45
      </button>
    ),
  },
  {
    id: 'button46',
    name: 'Green Rounded Button',
    html: '<button class="button-68" role="button">Button 68</button>',
    css: `.button-68 {
      appearance: none;
      backface-visibility: hidden;
      background-color: #27ae60;
      border-radius: 8px;
      border-style: none;
      box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      padding: 13px 20px;
      text-align: center;
      transition: all .3s;
      user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
    }
  
    .button-68:hover {
      background-color: #1e8449;
      box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
    }
  
    .button-68:active {
      transform: translateY(2px);
    }`,
    component: (
      <button
        className="appearance-none backface-hidden bg-[#27ae60] rounded-lg border-none shadow-[0_4px_9px_rgba(39,174,96,0.15)] text-white cursor-pointer inline-block font-sans text-base font-semibold leading-6 py-3 px-5 text-center transition-all duration-300 select-none hover:bg-[#1e8449] hover:shadow-[0_6px_12px_rgba(39,174,96,0.2)] active:translate-y-0.5"
      >
        Button 46
      </button>
    ),
  },
  {
    id: 'button47',
    name: 'Blue Pill Button',
    html: '<button class="button-71" role="button">Button 71</button>',
    css: `.button-71 {
      background-color: #0078d0;
      border: 0;
      border-radius: 56px;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
      font-size: 18px;
      font-weight: 600;
      padding: 16px 21px;
      text-align: center;
      transition: all .3s;
      user-select: none;
      touch-action: manipulation;
      position: relative;
    }
  
    .button-71:before {
      content: "";
      position: absolute;
      top: 0;
      left: 4%;
      width: 92%;
      height: 50%;
      background-image: linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%);
      border-radius: 125px;
      opacity: .5;
      transition: all .3s;
    }
  
    .button-71:hover {
      transform: scale(1.05);
      box-shadow: rgba(255, 255, 255, .2) 0 3px 15px inset,
                  rgba(0, 0, 0, .1) 0 3px 5px,
                  rgba(0, 0, 0, .1) 0 10px 13px;
    }
  
    @media (min-width: 768px) {
      .button-71 {
        padding: 16px 48px;
      }
    }`,
    component: (
      <button
        className="relative bg-[#0078d0] rounded-full text-white cursor-pointer inline-block font-sans text-lg font-semibold py-4 px-5 text-center transition-all duration-300 select-none hover:scale-105 hover:shadow-[inset_0_3px_15px_rgba(255,255,255,0.2),0_3px_5px_rgba(0,0,0,0.1),0_10px_13px_rgba(0,0,0,0.1)] md:px-12"
      >
        Button 47
      </button>
    ),
  },
  {
    id: 'button48',
    name: 'White Rounded Button',
    html: '<button class="button-73" role="button">Button 73</button>',
    css: `.button-73 {
      appearance: none;
      background-color: #FFFFFF;
      border-radius: 40em;
      box-shadow: #ADCFFF 0 -12px 6px inset;
      color: #000000;
      cursor: pointer;
      display: inline-block;
      font-family: -apple-system, sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0;
      padding: 1rem 1.3rem;
      text-align: center;
      text-decoration: none;
      transition: all .15s;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-73:hover {
      background-color: #FFC229;
      box-shadow: #FF6314 0 -6px 8px inset;
      transform: scale(1.125);
    }
  
    .button-73:active {
      transform: scale(1.025);
    }
  
    @media (min-width: 768px) {
      .button-73 {
        font-size: 1.5rem;
        padding: .75rem 2rem;
      }
    }`,
    component: (
      <button
        className="appearance-none bg-white rounded-full shadow-[inset_0_-12px_6px_#ADCFFF] text-black cursor-pointer inline-block font-sans text-xl font-bold py-4 px-5 text-center transition-all duration-150 select-none hover:bg-[#FFC229] hover:shadow-[inset_0_-6px_8px_#FF6314] hover:scale-112.5 active:scale-102.5 md:text-2xl md:py-3 md:px-8"
      >
        Button 48
      </button>
    ),
  },
  {
    id: 'button49',
    name: 'Shadowed Beige Button',
    html: '<button class="button-74" role="button">Button 74</button>',
    css: `.button-74 {
      background-color: #fbeee0;
      border: 2px solid #422800;
      border-radius: 30px;
      box-shadow: #422800 4px 4px 0 0;
      color: #422800;
      cursor: pointer;
      display: inline-block;
      font-weight: 600;
      font-size: 18px;
      padding: 0 18px;
      line-height: 50px;
      text-align: center;
      text-decoration: none;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-74:hover {
      background-color: #fff;
    }
  
    .button-74:active {
      box-shadow: #422800 2px 2px 0 0;
      transform: translate(2px, 2px);
    }
  
    @media (min-width: 768px) {
      .button-74 {
        min-width: 120px;
        padding: 0 25px;
      }
    }`,
    component: (
      <button
        className="bg-[#fbeee0] border-2 border-[#422800] rounded-[30px] shadow-[4px_4px_0_0_#422800] text-[#422800] cursor-pointer inline-block font-semibold text-lg px-4.5 leading-[50px] text-center select-none transition-all duration-200 hover:bg-white active:shadow-[2px_2px_0_0_#422800] active:translate-x-0.5 active:translate-y-0.5 md:min-w-[120px] md:px-6"
      >
        Button 49
      </button>
    ),
  },
  {
    id: 'button50',
    name: 'Gradient Pink Button',
    html: '<button class="button-75" role="button"><span class="text">Button 75</span></button>',
    css: `.button-75 {
      align-items: center;
      background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
      border: 0;
      border-radius: 10px;
      color: #fff;
      cursor: pointer;
      display: flex;
      font-family: "Codec cold", sans-serif;
      font-size: 16px;
      font-weight: 700;
      height: 54px;
      justify-content: center;
      letter-spacing: .4px;
      line-height: 1;
      padding: 3px 20px;
      text-decoration: none;
      text-transform: uppercase;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-75:hover span {
      transform: scale(.9);
      opacity: .75;
    }
  
    @media screen and (max-width: 991px) {
      .button-75 {
        font-size: 15px;
        height: 50px;
      }
    }`,
    component: (
      <button
        className="flex items-center bg-gradient-to-r from-[#f34079] to-[#fc894d] rounded-[10px] text-white cursor-pointer font-sans text-base font-bold h-[54px] justify-center tracking-[0.4px] leading-none py-0.5 px-5 uppercase select-none transition-all duration-200 hover:scale-90 hover:opacity-75 sm:text-sm sm:h-[50px]"
      >
        Button 50
      </button>
    ),
  },
  {
    id: 'button51',
    name: 'Gradient Orange Button',
    html: '<button class="button-77" role="button">Button 77</button>',
    css: `.button-77 {
      align-items: center;
      background-color: transparent;
      border: none;
      border-radius: 80px;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-family: Eina01, sans-serif;
      font-size: 16px;
      font-weight: 800;
      justify-content: center;
      line-height: 24px;
      min-height: 64px;
      padding: 19px 26px;
      position: relative;
      text-align: center;
      transition: all 100ms ease-out;
      user-select: none;
      touch-action: manipulation;
      z-index: 0;
    }
  
    .button-77:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(249, 58, 19, .32);
      border-radius: 80px;
      z-index: -2;
    }
  
    .button-77:after {
      content: "";
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      border-radius: 80px;
      z-index: -1;
    }
  
    .button-77:hover:after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  
    .button-77:active {
      color: #ccc;
    }
  
    .button-77:active:after {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
    }
  
    .button-77:disabled {
      cursor: default;
      opacity: .24;
    }`,
    component: (
      <button
        className="relative inline-flex items-center bg-transparent border-none rounded-full text-white cursor-pointer font-sans text-base font-extrabold justify-center leading-6 min-h-[64px] py-[19px] px-6 text-center transition-all duration-100 select-none z-0 before:content-[''] before:absolute before:inset-0 before:bg-[rgba(249,58,19,0.32)] before:rounded-full after:content-[''] after:absolute after:inset-y-1 after:inset-x-1 after:bg-gradient-to-r from-[#ff7426] to-[#f93a13] after:rounded-full hover:after:inset-0 active:text-gray-300 active:after:bg-gradient-to-r active:after:from-[#ff7426] active:after:to-[#f93a13] disabled:opacity-24"
      >
        Button 51
      </button>
    ),
  },
  {
    id: 'button52',
    name: 'Orange Gradient Button',
    html: '<button class="button-78" role="button">Button 78</button>',
    css: `.button-78 {
      align-items: center;
      background-color: transparent;
      border: none;
      border-radius: 80px;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-family: Eina01, sans-serif;
      font-size: 16px;
      font-weight: 800;
      justify-content: center;
      line-height: 24px;
      min-height: 64px;
      padding: 19px 26px;
      position: relative;
      text-align: center;
      transition: all 100ms ease-out;
      user-select: none;
      touch-action: manipulation;
      z-index: 0;
    }
  
    .button-78:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      border-radius: 80px;
      z-index: -2;
    }
  
    .button-78:after {
      content: "";
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
      border-radius: 80px;
      z-index: -1;
      opacity: 1;
      transition: all 100ms ease-out;
    }
  
    .button-78:hover:after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }
  
    .button-78:active {
      color: #ccc;
    }
  
    .button-78:active:before {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
    }
  
    .button-78:active:after {
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      background-image: linear-gradient(#541a0f 0, #0c0d0d 100%);
      opacity: 1;
    }
  
    .button-78:disabled {
      cursor: default;
      opacity: .24;
    }`,
    component: (
      <button
        className="relative inline-flex items-center bg-transparent border-none rounded-full text-white cursor-pointer font-sans text-base font-extrabold justify-center leading-6 min-h-[64px] py-[19px] px-6 text-center transition-all duration-100 select-none z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r from-[#ff7426] to-[#f93a13] before:rounded-full after:content-[''] after:absolute after:inset-y-1 after:inset-x-1 after:bg-gradient-to-b from-[#541a0f] to-[#0c0d0d] after:rounded-full after:opacity-100 hover:after:inset-0 hover:after:opacity-0 active:text-gray-300 active:before:bg-gradient-to-r active:before:from-[#ff7426] active:before:to-[#f93a13] active:after:inset-1 active:after:bg-gradient-to-b active:after:from-[#541a0f] active:after:to-[#0c0d0d] disabled:opacity-24"
      >
        Button 52
      </button>
    ),
  },
  {
    id: 'button53',
    name: 'White Elevated Button',
    html: '<button class="button-80" role="button">Button 80</button>',
    css: `.button-80 {
      background: #fff;
      border-radius: .375rem;
      border: .125rem solid;
      border-color: transparent;
      color: #212121;
      cursor: pointer;
      display: inline-block;
      font-family: Circular, Helvetica, sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.3;
      padding: .875rem 1.125rem;
      text-align: left;
      text-decoration: none;
      transform: translateZ(0) scale(1);
      transition: transform .2s;
      user-select: none;
      touch-action: manipulation;
    }
  
    .button-80:hover {
      transform: scale(1.05);
    }
  
    .button-80:active {
      transform: translateY(.125rem);
    }`,
    component: (
      <button
        className="bg-white rounded-md border-2 border-transparent text-[#212121] cursor-pointer inline-block font-sans text-xl font-bold leading-snug py-3.5 px-4.5 text-left transition-transform duration-200 select-none hover:scale-105 active:translate-y-0.5"
      >
        Button 53
      </button>
    ),
  },
  {
    id: 'button54',
    name: 'Red Outline Button',
    html: '<button class="button-54" role="button">Button 54</button>',
    css: `.button-54 {
      background: #FF4742;
      border: 1px solid #FF4742;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
      font-size: 16px;
      font-weight: 800;
      line-height: 16px;
      min-height: 40px;
      outline: 0;
      padding: 12px 14px;
      text-align: center;
      text-rendering: geometricprecision;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;
    }

    .button-54:hover,
    .button-54:active {
      background-color: initial;
      background-position: 0 0;
      color: #FF4742;
    }

    .button-54:active {
      opacity: .5;
    }`,
    component: (
      <button
        className="bg-[#FF4742] border border-[#FF4742] rounded-md shadow-[rgba(0,0,0,0.1)_1px_2px_4px] text-white cursor-pointer font-sans text-base font-extrabold leading-4 min-h-[40px] py-3 px-3.5 text-center select-none hover:bg-transparent hover:text-[#FF4742] active:opacity-50 transition-colors duration-200"
      >
        Button 54
      </button>
    ),
}
]

export const gradients = [
  {
    id: 'gradient1',
    name: 'Sunset Gradient',
    html: '<div class="sunset-gradient"></div>',
    css: `.sunset-gradient {
  background: linear-gradient(to right, #ff77e9, #3ab7bf);
  width: 100px;
  height: 100px;
}`,
    component: <div className="w-24 h-24 bg-gradient-to-r from-bubble-gum to-tahiti rounded-md"></div>
  },
  {
    id: 'gradient2',
    name: 'Northern Lights',
    html: '<div class="northern-lights"></div>',
    css: `.northern-lights {
  background: linear-gradient(to bottom right, #00c3ff, #ffff1c, #00ff9d);
  width: 100px;
  height: 100px;
}`,
    component: <div className="w-24 h-24 bg-gradient-to-br from-[#00c3ff] via-[#ffff1c] to-[#00ff9d] rounded-md"></div>
  },
  {
    id: 'gradient3',
    name: 'Deep Ocean',
    html: '<div class="deep-ocean"></div>',
    css: `.deep-ocean {
  background: linear-gradient(to bottom, #1a2980, #26d0ce);
  width: 100px;
  height: 100px;
}`,
    component: <div className="w-24 h-24 bg-gradient-to-b from-[#1a2980] to-[#26d0ce] rounded-md"></div>
  },
  {
    id: 'gradient4',
    name: 'Green Blue Gradient',
    html: '<div class="gradient-4"></div>',
    css: `.gradient-4 {
      background: linear-gradient(135deg, #42E695, #3BB2B8);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#42E695] to-[#3BB2B8]"></div>,
  },
  {
    id: 'gradient5',
    name: 'Light Green Gradient',
    html: '<div class="gradient-5"></div>',
    css: `.gradient-5 {
      background: linear-gradient(135deg, #B1EA4D, #459522);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#B1EA4D] to-[#459522]"></div>,
  },
  {
    id: 'gradient6',
    name: 'Blue Purple Gradient',
    html: '<div class="gradient-6"></div>',
    css: `.gradient-6 {
      background: linear-gradient(135deg, #6E8EFB, #A777E3);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#6E8EFB] to-[#A777E3]"></div>,
  },
  {
    id: 'gradient7',
    name: 'Cyan Blue Gradient',
    html: '<div class="gradient-7"></div>',
    css: `.gradient-7 {
      background: linear-gradient(135deg, #13F1FC, #0470DC);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#13F1FC] to-[#0470DC]"></div>,
  },
  {
    id: 'gradient8',
    name: 'Red Gradient',
    html: '<div class="gradient-8"></div>',
    css: `.gradient-8 {
      background: linear-gradient(135deg, #F5515F, #A1051D);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#F5515F] to-[#A1051D]"></div>,
  },
  {
    id: 'gradient9',
    name: 'Purple Gradient',
    html: '<div class="gradient-9"></div>',
    css: `.gradient-9 {
      background: linear-gradient(135deg, #CE9FFC, #7367F0);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]"></div>,
  },
  {
    id: 'gradient10',
    name: 'Orange Gradient',
    html: '<div class="gradient-10"></div>',
    css: `.gradient-10 {
      background: linear-gradient(135deg, #FAD961, #F76B1C);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#FAD961] to-[#F76B1C]"></div>,
  },
  {
    id: 'gradient11',
    name: 'Gray Gradient',
    html: '<div class="gradient-11"></div>',
    css: `.gradient-11 {
      background: linear-gradient(135deg, #E3E3E3, #5D6874);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#E3E3E3] to-[#5D6874]"></div>,
  },
  {
    id: 'gradient12',
    name: 'Blue Violet Gradient',
    html: '<div class="gradient-12"></div>',
    css: `.gradient-12 {
      background: linear-gradient(135deg, #65799B, #5E2563);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#65799B] to-[#5E2563]"></div>,
  },
  {
    id: 'gradient13',
    name: 'Green Gradient',
    html: '<div class="gradient-13"></div>',
    css: `.gradient-13 {
      background: linear-gradient(135deg, #40E495, #30DD8A, #2BB673);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#40E495] via-[#30DD8A] to-[#2BB673]"></div>
    ),
  },
  {
    id: 'gradient14',
    name: 'Orange Red Gradient',
    html: '<div class="gradient-14"></div>',
    css: `.gradient-14 {
      background: linear-gradient(135deg, #F5CE62, #E43603, #E85A19);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#F5CE62] via-[#E43603] to-[#E85A19]"></div>
    ),
  },
  {
    id: 'gradient15',
    name: 'Pink Red Gradient',
    html: '<div class="gradient-15"></div>',
    css: `.gradient-15 {
      background: linear-gradient(135deg, #FC6076, #E75516);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#FC6076] to-[#E75516]"></div>,
  },
  {
    id: 'gradient16',
    name: 'Blue Gradient',
    html: '<div class="gradient-16"></div>',
    css: `.gradient-16 {
      background: linear-gradient(135deg, #667EEA, #6B8DD6, #8E37D7);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#667EEA] via-[#6B8DD6] to-[#8E37D7]"></div>
    ),
  },
  {
    id: 'gradient17',
    name: 'Emerald Gradient',
    html: '<div class="gradient-17"></div>',
    css: `.gradient-17 {
      background: linear-gradient(135deg, #0BA360, #30DD8A, #2BB673);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#0BA360] via-[#30DD8A] to-[#2BB673]"></div>
    ),
  },
  {
    id: 'gradient18',
    name: 'Purple Blue Gradient',
    html: '<div class="gradient-18"></div>',
    css: `.gradient-18 {
      background: linear-gradient(135deg, #6253E1, #04BEFE);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#6253E1] to-[#04BEFE]"></div>,
  },
  {
    id: 'gradient19',
    name: 'Dark Blue Gradient',
    html: '<div class="gradient-19"></div>',
    css: `.gradient-19 {
      background: linear-gradient(135deg, #29323C, #2B5876, #4E4376);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#29323C] via-[#2B5876] to-[#4E4376]"></div>
    ),
  },
  {
    id: 'gradient20',
    name: 'Light Blue Gradient',
    html: '<div class="gradient-20"></div>',
    css: `.gradient-20 {
      background: linear-gradient(135deg, #25AAE1, #04BEFE, #3f86ED);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#25AAE1] via-[#04BEFE] to-[#3f86ED]"></div>
    ),
  },
  {
    id: 'gradient21',
    name: 'Crimson Gradient',
    html: '<div class="gradient-21"></div>',
    css: `.gradient-21 {
      background: linear-gradient(135deg, #EB3941, #F15E64, #E2373f);
      width: 100px;
      height: 100px;
    }`,
    component: (
      <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#EB3941] via-[#F15E64] to-[#E2373f]"></div>
    ),
  },
  {
    id: 'gradient22',
    name: 'Orange Gradient 2',
    html: '<div class="gradient-22"></div>',
    css: `.gradient-22 {
      background: linear-gradient(135deg, #Ef9d43, #E75516);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#Ef9d43] to-[#E75516]"></div>,
  },
  {
    id: 'gradient23',
    name: 'Indigo Gradient',
    html: '<div class="gradient-23"></div>',
    css: `.gradient-23 {
      background: linear-gradient(135deg, #6B73FF, #000DFF);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#6B73FF] to-[#000DFF]"></div>,
  },
  {
    id: 'gradient24',
    name: 'Green Cyan Gradient',
    html: '<div class="gradient-24"></div>',
    css: `.gradient-24 {
      background: linear-gradient(135deg, #70F570, #07F7F7);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#70F570] to-[#07F7F7]"></div>,
  },
  {
    id: 'gradient25',
    name: 'Purple Gradient 2',
    html: '<div class="gradient-25"></div>',
    css: `.gradient-25 {
      background: linear-gradient(135deg, #3B2667, #BC78EC);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#3B2667] to-[#BC78EC]"></div>,
  },
  {
    id: 'gradient26',
    name: 'Deep Blue Gradient',
    html: '<div class="gradient-26"></div>',
    css: `.gradient-26 {
      background: linear-gradient(135deg, #033395, #27F0F0);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#033395] to-[#27F0F0]"></div>,
  },
  {
    id: 'gradient27',
    name: 'Red Yellow Gradient',
    html: '<div class="gradient-27"></div>',
    css: `.gradient-27 {
      background: linear-gradient(135deg, #EB121A, #FAEB18);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#EB121A] to-[#FAEB18]"></div>,
  },
  {
    id: 'gradient28',
    name: 'Gray Gradient 2',
    html: '<div class="gradient-28"></div>',
    css: `.gradient-28 {
      background: linear-gradient(135deg, #7A7A7A, #E3E0E0);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#7A7A7A] to-[#E3E0E0]"></div>,
  },
  {
    id: 'gradient29',
    name: 'Purple Pink Gradient',
    html: '<div class="gradient-29"></div>',
    css: `.gradient-29 {
      background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#a18cd1] to-[#fbc2eb]"></div>,
  },
  {
    id: 'gradient30',
    name: 'Red Orange Gradient',
    html: '<div class="gradient-30"></div>',
    css: `.gradient-30 {
      background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-r from-[#ff8177] via-[#ff8c7f] via-[#f99185] via-[#cf556c] to-[#b12a5b]"></div>,
  },
  {
    id: 'gradient31',
    name: 'Purple Pink Gradient 2',
    html: '<div class="gradient-31"></div>',
    css: `.gradient-31 {
      background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]"></div>,
  },
  {
    id: 'gradient32',
    name: 'Pink Gradient',
    html: '<div class="gradient-32"></div>',
    css: `.gradient-32 {
      background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#fdcbf1] via-[#fdcbf1] to-[#e6dee9]"></div>,
  },
  {
    id: 'gradient33',
    name: 'Blue Gradient',
    html: '<div class="gradient-33"></div>',
    css: `.gradient-33 {
      background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(120deg,#a1c4fd_0%,#c2e9fb_100%)]"></div>,
  },
  {
    id: 'gradient34',
    name: 'Green Gradient',
    html: '<div class="gradient-34"></div>',
    css: `.gradient-34 {
      background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(120deg,#d4fc79_0%,#96e6a1_100%)]"></div>,
  },
  {
    id: 'gradient35',
    name: 'Gray Gradient',
    html: '<div class="gradient-35"></div>',
    css: `.gradient-35 {
      background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]"></div>,
  },
  {
    id: 'gradient36',
    name: 'Light Gray Gradient',
    html: '<div class="gradient-36"></div>',
    css: `.gradient-36 {
      background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(120deg,#fdfbfb_0%,#ebedee_100%)]"></div>,
  },
  {
    id: 'gradient37',
    name: 'Purple Blue Gradient',
    html: '<div class="gradient-37"></div>',
    css: `.gradient-37 {
      background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(120deg,#e0c3fc_0%,#8ec5fc_100%)]"></div>,
  },
  {
    id: 'gradient38',
    name: 'Blue Purple Gradient',
    html: '<div class="gradient-38"></div>',
    css: `.gradient-38 {
      background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-br from-[#667eea] to-[#764ba2]"></div>,
  },
  {
    id: 'gradient39',
    name: 'Light Purple Gradient',
    html: '<div class="gradient-39"></div>',
    css: `.gradient-39 {
      background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#cd9cf2] to-[#f6f3ff]"></div>,
  },
  {
    id: 'gradient40',
    name: 'Pink Purple Gradient',
    html: '<div class="gradient-40"></div>',
    css: `.gradient-40 {
      background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#c471f5] to-[#fa71cd]"></div>,
  },
  {
    id: 'gradient41',
    name: 'Blue Gradient 2',
    html: '<div class="gradient-41"></div>',
    css: `.gradient-41 {
      background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#48c6ef] to-[#6f86d6]"></div>,
  },
  {
    id: 'gradient42',
    name: 'Deep Blue Gradient',
    html: '<div class="gradient-42"></div>',
    css: `.gradient-42 {
      background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#00c6fb] to-[#005bea]"></div>,
  },
  {
    id: 'gradient43',
    name: 'Teal Purple Gradient',
    html: '<div class="gradient-43"></div>',
    css: `.gradient-43 {
      background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#88d3ce] to-[#6e45e2]"></div>,
  },
  {
    id: 'gradient44',
    name: 'Purple Blue Gradient 2',
    html: '<div class="gradient-44"></div>',
    css: `.gradient-44 {
      background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(-20deg,#b721ff_0%,#21d4fd_100%)]"></div>,
  },
  {
    id: 'gradient45',
    name: 'Blue Purple Gradient 2',
    html: '<div class="gradient-45"></div>',
    css: `.gradient-45 {
      background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#5f72bd] to-[#9b23ea]"></div>,
  },
  {
    id: 'gradient46',
    name: 'Pink Purple Gradient 2',
    html: '<div class="gradient-46"></div>',
    css: `.gradient-46 {
      background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-gradient-to-t from-[#cc208e] to-[#6713d2]"></div>,
  },
  {
    id: 'gradient47',
    name: 'Dark Gradient with Blend',
    html: '<div class="gradient-47"></div>',
    css: `.gradient-47 {
      background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
      background-blend-mode: multiply;
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(to_bottom,#323232_0%,#3F3F3F_40%,#1C1C1C_150%),linear-gradient(to_top,rgba(255,255,255,0.40)_0%,rgba(0,0,0,0.25)_200%)] bg-blend-multiply"></div>,
  },
  {
    id: 'gradient48',
    name: 'Dark Gradient with Blend',
    html: '<div class="gradient-48"></div>',
    css: `.gradient-48 {
      background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
      background-blend-mode: multiply;
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(to_bottom,#323232_0%,#3F3F3F_40%,#1C1C1C_150%),linear-gradient(to_top,rgba(255,255,255,0.40)_0%,rgba(0,0,0,0.25)_200%)] bg-blend-multiply"></div>,
  },
  {
    id: 'gradient49',
    name: 'Cyan Purple Gradient',
    html: '<div class="gradient-49"></div>',
    css: `.gradient-49 {
      background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(-225deg,#2CD8D5_0%,#6B8DD6_48%,#8E37D7_100%)]"></div>,
  },
  {
    id: 'gradient50',
    name: 'Cyan Purple Gradient',
    html: '<div class="gradient-50"></div>',
    css: `.gradient-50 {
      background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
      width: 100px;
      height: 100px;
    }`,
    component: <div className="w-24 h-24 rounded-md bg-[linear-gradient(-225deg,#2CD8D5_0%,#6B8DD6_48%,#8E37D7_100%)]"></div>,
  },
]