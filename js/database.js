// regitra chave primária no localStore
function writeKey() {
  const keyValue = parseInt(window.localStorage.getItem("key"), 10);
  window.localStorage.setItem("key", keyValue + 1);
  return keyValue + 1;
}

// recupera chave primária da localStore
function getKey() {
  if (!window.localStorage.getItem("key")) {
    window.localStorage.setItem("key", 0);
    return writeKey();
  } else {
    return writeKey();
  }
}

// recupera os registros do localStore
function recoveryData() {
  if (!window.localStorage.getItem("data")) {
    return [];
  }
  return JSON.parse(window.localStorage.getItem("data"));
}

// grava os registros(records) no localStore
function writeRecords(records) {
    window.localStorage.setItem("data", JSON.stringify(records));
}
// prepara storage para gravação
function setupStorage() {
    if (!window.localStorage.getItem("key")) {
        window.localStorage.setItem("key", 0);
      }
      if (recoveryData().length === 0) window.localStorage.clear();
}

