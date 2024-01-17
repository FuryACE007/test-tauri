fn main() {
  println!("cargo:rustc-link-search=native=./binaries");
  println!("cargo:rustc-link-lib=dylib=hello");
  tauri_build::build()
}
