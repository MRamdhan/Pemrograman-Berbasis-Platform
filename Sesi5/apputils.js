import { formatRupiah, capitalize } from "./utils.js";

const amount = 1500000;
const namaProduk = "laptop";

console.log(`Harga ${formatRupiah(amount)}`);
console.log(`Nama Produk: ${capitalize(namaProduk)}`);
