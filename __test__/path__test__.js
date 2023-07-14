import path from "path";

console.log(import.meta.url);// file:///E:/Code/lxw-cli/__test__/path__test__.js

console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));// ..\..\impl\bbb