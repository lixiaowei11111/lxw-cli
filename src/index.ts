#!/usr/bin/env node --experimental-specifier-resolution=node
import { Command } from "commander";
import { log } from "console";
import inquirer from "inquirer";

// type ColorFunc = (str: string | number) => string;

// type Boilerplate = {
//   name: string;
//   color: ColorFunc;
// };

const program = new Command();

const InitPrompts = [
  {
    name: "description",
    message: "please input description",
    default: "",
  },
  {
    name: "author",
    message: "please input author",
    default: "",
  },
];

program
  .name("zhi-cli")
  .description("zhi+TS+React boilerplate")
  .version("0.0.1");

program
  .command("init <name>")
  .description("init a react project")
  .action(async (name: string) => {
    log("start init react project", name);
    const initOptions = await inquirer.prompt(InitPrompts);
    log("initOptions", initOptions);
  });
program.parse();
