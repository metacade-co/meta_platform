export function formatEthereumAddress(address) {
  if (address) return address.substr(0, 6) + "..." + address.substr(address.length - 4, address.length);
  return "";
}
