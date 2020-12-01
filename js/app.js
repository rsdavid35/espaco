// faz uma requisição para api e trata o resultado (data).
$.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?mode=list', function(data) {
    for (let i = 0; i <data['results'].length; i++) {
        $('#lancamentos').append(`
        <div class='lancamento'>
            <p>
                <strong>${data['results'][i]['name']}</strong><br>
                ${new Date(data['results'][i]['net'])}<br>
                Missão: ${data['results'][i]['mission'] == null ? 'Não especificada.': data['results'][i]['mission']}
            </p>
        </div>
        `)
    }
});

// faz uma requisição para api e trata o resultado (data).
$.get('https://spacelaunchnow.me/api/3.3.0/event/upcoming/', function(data) {
    for (let i = 0; i <data['results'].length; i++) {
        $('#eventos').append(`
        <div class='evento'>
            <img src="${data['results'][i]['feature_image']}">
            <p>
                <strong>${data['results'][i]['name']}</strong><br>
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
});