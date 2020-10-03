const imports = {
  env: {
    hello_js: helloJs,
  },
}

let WasmInst: any

// wasm読み込み
fetch('./hello_world.wasm')
  .then((response) => {
    if (!response.ok) throw Error('File error')
    return response.arrayBuffer()
  })
  .then((bytes) => WebAssembly.instantiate(bytes, imports))
  .then((results) => {
    init(results.instance)
  })
  .catch((err) => console.log(err))

function init(wasm: any) {
  WasmInst = wasm
  WasmInst.exports.hello_rust()
}
