extern "C" {
    fn hello_js();
}

#[no_mangle]
pub fn hello_rust() {
    unsafe {
        hello_js();
    }
}
