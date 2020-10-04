const imports = {
  env: {
    hello_js: helloJs,
  },
}

fetch('./hello_world.wasm')
  .then((response) => {
    if (!response.ok) throw Error('File error')
    return response.arrayBuffer()
  })
  .then((bytes) => WebAssembly.instantiate(bytes, imports))
  .then(main)

function helloJs() {
  const canvas = document.getElementById('canvas')
  const gl = canvas?.getContext('webgl')
  gl.clearColor(0.6, 0.8, 0.9, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.finish()
  window.addEventListener('beforeunload', function (e) {
    gl.getExtension('WEBGL_lose_context').loseContext()
  })
}

function main(results) {
  const wasm = results.instance
  wasm.exports.hello_rust()
}
