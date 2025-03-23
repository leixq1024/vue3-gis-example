import { loadModules, loadCss } from 'esri-loader'

// 存储已经获取过的模块,避免重复获取
const moduleStore: any = {}
// 本地arcgis资源配置
const option: {
  api: string
  css: string
  font: string
} = {
  api: '/library/4.18/dojo/dojo.js',
  css: '/library/4.18/esri/css/main.css',
  font: '/library/ArcGIS_pbf_Font'
}
// 初始化 arcgis api
export const initApi = () => {
  return new Promise((resolve, reject) => {
    loadCss(option.css)
    getModules(['esri/config'])
      .then(modules => {
        const [config] = modules
        config.fontsUrl = option.font
        config.log.level = 'none'
        resolve(true)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * @funciton 批量获取模块
 * @param modulePaths 模块地址数组
 * @returns 模块对象
 */
export const getModules = (modulePaths: string[]) => {
  const promise = new Promise<any[]>((resolve, reject) => {
    const arr: Promise<any>[] = []
    modulePaths.forEach(path => {
      arr.push(getModule(path))
    })
    Promise.all(arr)
      .then(modules => {
        resolve(modules)
      })
      .catch(e => {
        reject(e)
      })
  })
  return promise
}
/**
 * @function
 * @param path 模块地址
 * @returns 返回单个模块 异步对象
 */
export const getModule = (path: string) => {
  return new Promise<any>((resolve, reject) => {
    const name = path.split('/').pop() as string
    if (moduleStore[name]) {
      resolve(moduleStore[name])
    } else {
      loadModules([path], { url: option.api })
        .then(modules => {
          const module = modules[0]
          moduleStore[name] = module
          resolve(module)
        })
        .catch(e => {
          reject({ msg: `load modules ${name} failed`, err: e })
        })
    }
  })
}
