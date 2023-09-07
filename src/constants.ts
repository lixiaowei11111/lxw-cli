import {
  blue,
  cyan,
  green,
  lightBlue,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from "kolorist";

type ColorFunc = (str: string | number) => string;

type Framework = {
  name: string;
  display:string;
  color: ColorFunc;
};

export const FRAMEWORKS:Array<Framework>=[
  {
    name:"react",
    display:"React+Ts+Webpack",
    color:blue,
  },
  {
    name:"chrome-extension",
    display:"React+Ts+Webpack+Chrome-extension",
    color:green,
  },
  {
    name:"h5",
    display:"React+Ts+Webpack+H5",
    color:red,
  }
]