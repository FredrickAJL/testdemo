var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

    //assgnmt day 4
    for(var i=0; i<data.length; i++){
        console.log(data[i].flag);
    }
    
    //assngmnt day 4
    for(var i=0; i<data.length; i++)
    {
        console.log(`name:${data[i].name} region:${data[i].region} subregion:${data[i].subregion} population:${data[i].population}`);
    }
}