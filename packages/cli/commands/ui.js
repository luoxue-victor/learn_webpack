const path = require('path')
const nodemon = require('nodemon')

exports.registerCommand = (params) => {
  const { program } = params
  program
    .command('ui')
    .description('cli ui，界面话')
    .action(async (plugin, options = {}) => {
      // client()
      server()
    })
}

const client = () => {
  const {createServer, getPlugins} = require('@pkb/vite-box')
  const plugins = getPlugins();
  createServer(plugins, 8888, path.join(__dirname, '..'))
}

const server = () => {
  nodemon({
    script: path.join(__dirname, '..', 'app', 'nodemon.js')
  })
}
