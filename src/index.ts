#!/usr/bin/env node --experimental-specifier-resolution=node
//  上面的一行为 npm执行bin全局命令要添加注释

/**
 * https://terwergreen.com/post/use-typescript-to-develop-a-custom-nodejs-frontend-development-scaffold-1i5fne.html#%E9%9C%80%E6%B1%82%E6%9D%A5%E6%BA%90
 */
import { Command } from "commander";
import { log } from "console";
import inquirer from "inquirer";
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

import { downloadTemplate } from "./download";
import { modifyPackageJson } from "./modify";
import {formatTargetDir} from './util'


const templateGitURL="https://github.com/lixiaowei11111/my-log.git"
let downloadPath=null

type ColorFunc = (str: string | number) => string;

console.log(process.argv,"command param");


type Framework = {
  name: string;
  display:string;
  color: ColorFunc;
};

const program = new Command();

const defaultTargetDir="lxw-project"

let targetDir:string=defaultTargetDir

const InitPrompts = [
  {
    type:"text",
    name: reset("project name"),
    message: "please input description",
    default: defaultTargetDir,
    filter:(input:string)=>{
      targetDir=formatTargetDir(input)||defaultTargetDir
    }
  },
  {
    name: "author",
    message: "please input author",
    default: "",
  },
  {
    
  }
];

program.action(async (name: string,branch:string) => {
    try {
    log("start init react project", name);
    const b = branch ?? "main"
    log("current branch:", b ,branch)
    const initOptions = await inquirer.prompt(InitPrompts);
    log("initOptions", initOptions);
    downloadPath=`./${name}`
    await downloadTemplate(templateGitURL , downloadPath , b)
    await modifyPackageJson(downloadPath , {name ,...initOptions})
    } catch (error:any) {
      console.log(error,"boilerplate pull fail");
      if (error.isTtyError) {
        console.log('Prompt could not be rendered in the current environment');
      } else {
        console.log('User cancelled the prompt');
      }
    }
  });
program.parse();
