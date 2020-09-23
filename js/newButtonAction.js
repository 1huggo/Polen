// acão do botão nova ong, limpa os campos e altera no nome do botão submit para 
function openNew() {
    window.localStorage.setItem('currentRecordId', "new");
    $('#formModal').modal('show');
    $('#name').val('');
    $('#slogan').val('');
    $('#link').val('');
    $("#active").prop("checked", false);
    $("#submit").html('Cadastrar');
  }
  