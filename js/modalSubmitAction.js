// ação do submit do form no modal
function processarRegistro() {
    const currentRecordId = localStorage.getItem("currentRecordId");
    if (currentRecordId === "new") {
      create();
    } else {
      update(parseInt(currentRecordId, 10));
    }
  }