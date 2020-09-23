// ação do botão na tabela carregada na página
function openModal(id) {
  window.localStorage.setItem("currentRecordId", id);
  $("#formModal").modal("show");
  const record = recoveryData().find((record) => record.id === id);
  $("#name").val(record.name);
  $("#slogan").val(record.slogan);
  $("#link").val(record.link);
  $("#active").prop("checked", record.active);
  $("#submit").html("Salvar");
}
