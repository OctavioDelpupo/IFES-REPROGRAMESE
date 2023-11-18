function getStorge() {
  return JSON.parse(localStorage.getItem("contatos")) ?? [];
}
