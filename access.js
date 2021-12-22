function data(){
    var url = "http://localhost:8080/mhsjson";
    fetch(url)
    .then((response) => response.json())
    .then((datamhs) => {
      const tb = document.createElement("table");
      tb.setAttribute("id", "tb");
      tb.setAttribute("class", "table table-success table-dark");
  
      const thead = tb.createTHead();
      for(var i = 0; i < datamhs.length; i++){
        const tr = tb.insertRow()
        for(var j = 0; j < Object.keys(datamhs[i]).length; j++){
          const td = tr.insertCell();
          td.innerHTML = datamhs[i][Object.keys(datamhs[i])[j]];
        }
      }
      $(".container").append(tb);
      $("#tb").find('thead').append('<tr><th>NIM</th><th>Nama</th><th>Alamat</th><th>Program Studi</th><th>Fakultas</th></tr>');
    })
  }


  function deleteTabel(){
    $("#tb").remove();
    $("#tb2").remove();
  }