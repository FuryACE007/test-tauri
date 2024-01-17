// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::ffi::CStr;

extern "C" {
  fn get_hello_world() -> *const std::os::raw::c_char;
}

#[tauri::command]
fn hello_world() -> String {
  let c_str: &CStr = unsafe { CStr::from_ptr(get_hello_world()) };
  c_str.to_str().unwrap().to_string()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![hello_world])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
