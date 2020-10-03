extern "C" {
    fn hello_js();
}

#[no_mangle]
fn hello_rust() {
    unsafe {
        hello_js();
    }
}
