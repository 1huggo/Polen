// atualiza o campo active (ativo) ao se clicar no checkbox da tabela
function saveActiveStatus(id) {
  const active = $(`#check-${id}`).prop("checked");
  const updated = recoveryData().find((record) => record.id === id);
  updated.active = active;
  const result = [];
  recoveryData().forEach((record) => {
    if (record.id === id) {
      result.push(updated);
    } else {
      result.push(record);
    }
  });
  writeRecords(result);
}

// altera a cor da linha verde ao se clicar no checkbox e este tem a proviedade checked == true
function changeLineColor(id) {
  saveActiveStatus(id);
  $(`#line-${id}`).toggleClass("line");
  $(`#check-${id}`).toggleClass("rollCheck");
}

// ao carrer a tabela na págia tornará as linhas ativas verdes
function loadGreenLines() {
  recoveryData().forEach((record) => {
    if (record.active) {
      $(`#line-${record.id}`).toggleClass("line");
      $(`#check-${record.id}`).toggleClass("rollCheck");
    }
  });
}

// carrega os dados do localStore e exibe na pagina pricincia na div #contentTable ou #contentTableInifty
function loadDataToTable() {
  setupStorage();

  const records = recoveryData();
  const result = records.map((record) => {
    return `
            <tr id="line-${record.id}">
              <td>${record.name}</td>
              <td>${record.slogan}</td>
              <td>${record.link}</td>
              <td>${
                record.active
                  ? `<input id="check-${record.id}" onclick="changeLineColor(${record.id})" type="checkbox" checked></input>`
                  : `<input id="check-${record.id}" onclick="changeLineColor(${record.id})" type="checkbox" "></input>`
              }</td>
              <td>
              <button class="btn btn-link" type="button" onclick="openModal(${
                record.id
              })">editar</button> | <button class="btn btn-link" type="button" onclick="del(${
      record.id
    })">deletar</button>
              </td>
            </tr>
            `;
  });

  let outterHtml = `
    <div class="col-md-12"></div>
    <p class="title-table">Estas são as Ongs da Polen</p>
    <table class="w3-table-all w3-hoverable">
      <!--data-->
      <thead>
        <tr class="w3-light-grey">
          <th>Nome</th>
          <th>Slogan</th>
          <th>Link Site</th>
          <th>Ativo</th>
          <th>Configuração</th>
        </tr>
      </thead>
    `;

  result.forEach((line) => {
    outterHtml += line;
  });
  
  outterHtml += "      </table>";

  let idTable = "";
  // melhoria para que ao crescer a table em número de registros não se quer o design do footer
  if (records.length < 11) {
    idTable = "#contentTable";
    $("#contentTableInfity").prop("hidden", true);
    $("#contentTable").prop("hidden", false);
    $("#contentTableInfity").html("");
  } else {
    idTable = "#contentTableInfity";
    $("#contentTable").prop("hidden", true);
    $("#contentTableInfity").prop("hidden", false);
    $("#contentTable").html("");
  }

  $(idTable).html(outterHtml);
  loadGreenLines();
}
