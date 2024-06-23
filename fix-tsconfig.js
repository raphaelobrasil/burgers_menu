const fs = require('fs')
const path = require('path')

const tsconfigPath = path.resolve(__dirname, 'tsconfig.json')

function fixTsconfig() {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'))
  tsconfig.compilerOptions.jsx = 'react-jsx'

  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2))
  console.log('tsconfig.json fix applied.')
}

fixTsconfig()
