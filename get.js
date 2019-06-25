
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
let theUrl = 'https://st-api.yandex-team.ru/v2/issues/HDRFS-303087';
console.log(httpGet(theUrl));