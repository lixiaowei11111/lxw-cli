# [参考Vite写一个快速生成webpack+react+ts项目的cli](https://github.dev/vitejs/vite)
[原作者zhi-cli](https://terwergreen.com/post/use-typescript-to-develop-a-custom-nodejs-frontend-development-scaffold-1i5fne.html#commander-%E5%A4%84%E7%90%86%E5%91%BD%E4%BB%A4)


# `child_process`
+ `spawn`
+ + [node 中 使用 `child_process`的 `spawn`来创建一个子进程](https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html#child_processspawncommand-args-options)
+ + `git-clone` 使用spawn 方法来拉起git process 进程发起git clone 命令
+ + 通常使用 [`cross_spawn`]()来替代node上的spawn命令
  ```lua
    cross_spawn 是一个用于在 Node.js 中替代 child_process.spawn() 的工具。它的目的是解决在不同操作系统上使用 spawn() 时可能出现的一些兼容性问题。
    child_process.spawn() 在 Windows 和 POSIX 系统上的行为略有不同。特别是在 Windows 上，spawn() 使用了不同的命令解析规则，可能导致在某些情况下出现问题。cross_spawn 通过在不同平台上使用正确的命令解析规则来解决这些问题，确保在不同操作系统上的一致性。

    使用 cross_spawn 的好处包括：
    跨平台兼容性：cross_spawn 可以在不同操作系统上产生一致的结果，无需手动处理平台差异。
    命令解析一致性：cross_spawn 在 Windows 上使用与 POSIX 系统相同的命令解析规则，避免了由于差异而引起的问题。
    更好的错误处理：cross_spawn 提供了更好的错误处理机制，可以更准确地捕获和处理与子进程相关的错误。
    综上所述，使用 cross_spawn 可以提供更可靠和一致的子进程管理，尤其是在涉及跨平台开发时。
  ```

# `process`
+ `cwd`
+ + 返回Nodejs 进程的当前工作目录(current working directory of the Node.js process.)

+ [`argv`](https://nodejs.org/dist/latest-v18.x/docs/api/process.html#processargv)
+ + 
  ```plaintext
  process.argv 属性返回一个数组，其中包含在启动 Node.js 进程时传递的命令行参数。第一个元素将是 process.execPath。如果需要访问 argv[0] 的原始值，则请参阅 process.argv0。第二个元素将是正在执行的 JavaScript 文件的路径。其余元素将是任何其他命令行参数。
  ```
+ + **process.argv.slice(2) 可用于获取node启动时的命令行参数**,`minimist`是一个轻量级的命令行参数解析工具，可以将命令行参数解析成一个JavaScript对象。
+ + `process-args.js`
    ```js
    import { argv } from 'node:process';

    // print process.argv
    argv.forEach((val, index) => {
      console.log(`${index}: ${val}`);
    });
    ```
    `Launching the Node.js process as:`\
    ```bash
    $ node process-args.js one two=three four
    ```
    `Would generate the output:`
    ```sh
      0: /usr/local/bin/node
      1: /Users/mjr/work/node/process-args.js
      2: one
      3: two=three
      4: four
    ```