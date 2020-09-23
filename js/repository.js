// grava um registros(record) no localStorage
function save(record) {
  if (!window.localStorage.getItem("data")) {
    const data = [];
    data.push(record);
    window.localStorage.setItem("data", JSON.stringify(data));
  } else {
    const data = JSON.parse(window.localStorage.getItem("data"));
    data.push(record);
    window.localStorage.setItem("data", JSON.stringify(data));
  }
}

// cria novo registro com base no modal cadastrar nova ong
function create() {
  const record = {
    id: getKey(),
    name: $("#name").val(),
    slogan: $("#slogan").val(),
    link: $("#link").val(),
    active: $("#active").prop("checked"),
  };
  save(record);
  loadDataToTable();
  return true;
}

// atualiza registro carregado no modal
function update(id) {
  const updated = {
    id,
    name: $("#name").val(),
    slogan: $("#slogan").val(),
    link: $("#link").val(),
    active: $("#active").prop("checked"),
  };

  const result = [];
  recoveryData().forEach((record) => {
    if (record.id === id) {
      result.push(updated);
    } else {
      result.push(record);
    }
  });

  writeRecords(result);
  loadDataToTable();
}

// apaga regsitro no localStorage
function del(id) {
  const records = recoveryData().filter((record) => record.id !== id);
  writeRecords(records);
  loadDataToTable();
}
