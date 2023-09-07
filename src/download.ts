/**
 * 使用git-clone 远程拉取git模板
 */

import gitclone from 'git-clone/promise'
//git clone的源码非常简单
//从git-clone的source code得知其基本原理是在本地使用 child_process的spawn方法 再机器本地拉起一个git process 进行 git clone操作,如果本地没有安装git,其实会拉取失败
import fs from 'fs-extra'
import path from 'path'
import ora from 'ora'


export const downloadTemplate=async (templateGitURL:string,downloadPath:string,branch:string="branch")=>{
  const loading=ora("pull boilerplate")
  return new Promise((resolve,reject)=>{
    loading.start("start download boilerplate")

    gitclone(templateGitURL,downloadPath,{checkout:branch,shallow:true}).then(()=>{
      fs.removeSync(path.join(downloadPath,".git")) // 移除.git文件夹
      loading.succeed("download success")
      loading.stop()
      resolve("download success")
    }).catch(err=>{
      loading.fail("download fail, removeing file")
      fs.removeSync(downloadPath) // 拉取分支失败后,移除该文件夹
      loading.stop()
      reject(err)
    })
  })

}