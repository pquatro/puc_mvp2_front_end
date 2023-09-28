function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
} 

function mes_portugues(mes){

    let num_mes = 0;
    switch (mes){
        case 'Jan': 
            num_mes = '01';
            break;
        case 'Feb': 
            num_mes = '02';
            break;
        case 'Mar': 
            num_mes = '03';
            break;
        case 'Apr': 
            num_mes = '04';
            break;
        case 'May': 
            num_mes = '05';
            break;
        case 'Jun': 
            num_mes = '06';
            break;
        case 'Jul': 
            num_mes = '07';
            break;
        case 'Aug': 
            num_mes = '08';
            break;
        case 'Sep': 
            num_mes = '09';
            break;
        case 'Oct': 
            num_mes = '10';
            break;
        case 'Nov': 
            num_mes = '11';
            break;
        case 'Dec': 
            num_mes = '12';
            break;           
    }
    return num_mes;
}