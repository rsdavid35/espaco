
// faz uma requisição para api e trata o resultado (data). (lançamentos)
function obter_lancamentos() {
  $.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=detailed', function(data) {
      for (let i = 0; i <data['results'].length; i++) {
          $('#lancamentos').append(`
          <div class='lancamento'>
              <p>
                  <strong>${data['results'][i]['name']}</strong><br>
                  <hr>
                  ${new Date(data['results'][i]['net'])}<br>
                  Missão: ${data['results'][i]['mission']['description'] == null ? 'Não especificada.': data['results'][i]['mission']['description']}
              </p>
              <div class='icones'>
                <img src='${data['results'][i]['rocket']['configuration']['launch_service_provider']['logo_url']}' id='iconeAgencia' >
                <img src='${data['results'][i]['rocket']['configuration']['launch_service_provider']['nation_url']}' id='iconeNacao'>
              </div>
          </div>
          `)
      }
  });
}

// faz uma requisição para api e trata o resultado (data). (eventos)
function obter_eventos() {
  $.get('https://spacelaunchnow.me/api/3.3.0/event/upcoming/', function(data) {
      for (let i = 0; i <data['results'].length; i++) {
          $('#eventos').append(`
          <div class='evento'>
              <img src="${data['results'][i]['feature_image']}">
              <p>
                  <strong>${data['results'][i]['name']}</strong><hr><br>
                  ${new Date(data['results'][i]['date'])}<br><br>
                  ${data['results'][i]['description']}<br>
              </p>
              <div class='links'>
                  ${data["results"][i]["video_url"] == null ? "":'<a href='+data["results"][i]["video_url"]+'>Transmissão</a>'}
                  ${data["results"][i]["news_url"] == null ? "":'<a href='+data["results"][i]["news_url"]+'>Notícia</a>'}
              </div>
          </div>
          `)
      }
      if (data['next'] == null) {
        $('#exibirmais').attr('href', '');
        $('#exibirmais').text('Não há mais eventos para serem exibidos!');
      } else {
        $('#exibirmais').attr('href', data['next']);
      }
  });
}

obter_lancamentos()
obter_eventos()
