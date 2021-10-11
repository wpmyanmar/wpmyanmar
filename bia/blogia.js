function blogia(){
    var ss = 'https://docs.google.com/spreadsheets/d/18o9zQjiVEz4G8Ol-DSoL0-froQ_GRe9QAGd85tkEfwg/export?format=csv';
    return fetch(
        ss,{
            method: "GET",
            b: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
    )
    .then((res) => {
        var res = res.text();
        return res;
    })
    .then ((a) => {
        var c = a.split("\n");
        var e = [];
        var b = c[0].split("&bia;,");
        for ( var i = 1; i < c.length; i++){
            var d = {};
            var currentline = c[i].split("&bia;,");
            for ( var j = 0; j < b.length; j++){
                d[b[j]] = currentline[j]; 
            }
            e.push(d);
        }
        return e;
    })
    .catch(error => console.warn(error));
}
