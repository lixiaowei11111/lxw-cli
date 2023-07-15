[TOC]



# minimist

+ `minimist` 是一个 `Node.js` 工具库，用于解析命令行参数。它可以将命令行参数转换为一个简单易用的 `JavaScript` 对象，方便开发者使用和处理命令行参数。通过 `minimist`，开发者可以轻松地获取和解析命令行参数，并在程序中进行相应的处理。它特别适用于编写命令行工具和脚本。
+ 在`minimist`中，第二个参数是一个配置对象，用于指定一些解析选项。其中，`string`选项可以将指定的参数名解析成字符串类型，而不是默认的布尔类型或数值类型。
+ example
  ```ts
    const argv = minimist<{
    t?: string;
    template?: string;
  }>(process.argv.slice(2), { string: ["_"] });
  ```
+ 在这个例子中，`string: ["_"]`的意思是将命令行参数中不带参数名的部分（即_数组）的所有元素都解析成字符串类型。默认情况下，`minimist`会将不带参数名的部分解析成布尔类型或数值类型，具体类型取决于参数的值。
+ 例如，假设命令行参数是`node index.js foo 42`，那么默认情况下，_数组的元素会被解析成以下类型：
  ```ts
  const argv = minimist(process.argv.slice(2));
  console.log(argv); // { _: [ 'foo', 42 ] }
  console.log(typeof argv._[0]); // 'string'
  console.log(typeof argv._[1]); // 'number'
  ```
  可以看到，\_数组的第一个元素被解析成了字符串类型，而第二个元素被解析成了数值类型。如果希望将所有的不带参数名的部分都解析成字符串类型，可以使用`string: ["_"]`选项：
  ```ts
  const argv = minimist(process.argv.slice(2), { string: ["_"] });
  console.log(argv); // { _: [ 'foo', '42' ] }
  console.log(typeof argv._[0]); // 'string'
  console.log(typeof argv._[1]); // 'string'
  ```
  可以看到，现在_数组的所有元素都被解析成了字符串类型。

# cross_spawn
+ `cross_spawn` 是一个` Node.js` 模块，用于在跨平台的环境下启动子进程。它类似于 `Node.js` 内置的` child_process.spawn` 方法，但提供了更好的跨平台支持。在 `Windows` 平台上，`child_process.spawn` 可能无法正确地执行命令，而 `cross_spawn` 可以确保命令在所有平台上都能正确执行。因此，`cross_spawn` 是一个非常有用的工具，特别是在编写跨平台的 `Node.js` 应用程序时。

# fs-extra
+ `fs-extra` 是一个` Node.js` 模块，提供了比 `Node.js` 内置的 `fs` 模块更多的文件系统操作功能。它是` fs` 模块的一个增强版，可以帮助开发者更方便、更高效地进行文件系统操作。 `fs-extra` 支持的操作包括复制、移动、删除、创建目录、读取文件、写入文件等。它还提供了许多有用的功能，如递归地操作目录、自动创建目录、读取 `JSON` 文件等。因此，`fs-extra` 是一个非常有用的工具，特别是在编写` Node.js` 应用程序时需要频繁进行文件系统操作的场景下。

# ora
+ `ora` 是一个 `Node.js` 模块，用于在命令行界面显示加载中、等待、成功、失败等状态的动画效果。它提供了一系列的 `API`，可以自定义动画效果、文本内容、颜色等。开发者可以使用 `ora` 来增强他们的命令行工具或应用程序的用户交互体验，使得用户在等待耗时操作时感觉更加友好、专业。



## Kolorist

+ 

# inquirer
+ `Inquirer`是一个`Node.js`库，用于创建交互式命令行界面（`CLI`）的询问提示。通过`Inquirer`，开发者可以在`CLI`中向用户提出问题，获取用户的输入，并根据用户的响应执行相应的操作。`Inquirer`提供了多种不同类型的问题，例如多选、单选、输入、确认等等，同时还支持自定义问题类型和答案验证。`Inquirer`的作用在于简化CLI应用程序的开发流程，使得开发者可以更轻松地构建功能丰富、易于使用的`CLI`应用程序。

# prompts
+ `Node`库` prompts` 的作用是提供一个简单而强大的命令行交互界面，使开发者可以轻松地与终端用户进行交互。 `prompts` 库可以用于收集用户输入，验证输入数据的格式，以及在需要时提示用户重新输入。它还可以处理复杂的用户交互流程，例如嵌套提示和动态提示。`prompts` 库提供了许多不同类型的提示，包括文本输入、多选、单选、确认等，使开发者可以轻松地构建交互式命令行工具。

# inquirer 与 prompts的区别

+ `prompts` 和 `inquirer` 都是 `Node.js` 库，用于构建交互式命令行工具。它们的主要区别在于：

​	`prompts` 使用 `async/await` 语法，而 `inquirer` 使用 `Promise`，因此在代码编写上有所不同。
​	`prompts` 提供了一些 `inquirer` 不具备的特性，例如支持动态提示和嵌套提示。
​	`prompts` 的代码量更少，因为它只是 `inquirer` 的一个子集，而` inquirer` 的功能更为全面。
​	`prompts` 的 `API` 设计更加简单，易于使用和扩展。
​	总的来说，如果需要一个简单、易于使用的库来处理命令行交互，可以选择 `prompts`。如果需要更多的功能和更全面的支持，可以选	择 `inquirer`。