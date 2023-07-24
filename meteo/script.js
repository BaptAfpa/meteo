

fetch('https://api.openweathermap.org/data/2.5/weather?q=amiens&units=metric&lang=fr&appid=9d63106b0003583259d7d973d5addfa9')
			.then(function(response) {
				
			  return response.json();
			})
			.then(function(json) {
			
			console.log(json);
			document.getElementById('temp').innerHTML=json.main.temp+"°C";
			document.getElementById('taux').innerHTML=json.main.humidity+"%";
            document.getElementById('vent').innerHTML="Vitesse : "+json.wind.speed+" Rafale : "+json.wind.gust;
            document.getElementById('nuages').innerHTML=json.clouds.all;
            document.getElementById('desc').innerHTML=json.weather[0].description;
            var icon = json.weather[0].icon;
            document.getElementById('icontemp').src='http://openweathermap.org/img/wn/'+icon+'@2x.png';
            var lon=json.coord.lon;
            var lat=json.coord.lat;
            console.log(lon);
            console.log(icon);
            console.log(lat);
                fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&cnt=40&units=metric&lang=fr&appid=9d63106b0003583259d7d973d5addfa9')
                    .then(function(response) {
				
                    return response.json();
                })
                    .then(function(json) {
                        
                    console.log(json.list);
                    var i=0;
                    json.list.forEach(myFunction);
					function myFunction(){
						
						
                     // create a new div element
                    const table = document.createElement("table");
                    table.setAttribute('class','table table-striped');
                    table.setAttribute('id',i)
                    const test =document.getElementById('test');
                    document.body.insertBefore(table, test);
                        const thead = document.createElement("thead");
                        table.appendChild(thead);
                            const tr = document.createElement("tr");
                            thead.appendChild(tr);
                                const th = document.createElement("th");
                                th.setAttribute('scope','col');
                                tr.appendChild(th);
                                    const h1 = document.createElement("h1");
                                    h1.setAttribute('class','text-center');
                                    h1.innerHTML=json.list[i].dt_txt;
                                    th.appendChild(h1);
                                    //console.log(json.list.dt_txt);
                                        const th2 = document.createElement('th');
                                        th2.setAttribute('scope','col');
                                        tr.appendChild(th2);
                                            h2 = document.createElement('h1');
                                            h2.setAttribute('class','text-center');
                                            th2.appendChild(h2);
                                                const tbody = document.createElement('tbody');
                                                table.appendChild(tbody);
                                                    const tr1 = document.createElement('tr');
                                                    tbody.appendChild(tr1);
                                                    const tr2 = document.createElement('tr');
                                                    tbody.appendChild(tr2);
                                                    const tr3 = document.createElement('tr');
                                                    tbody.appendChild(tr3);
                                                    const tr4 = document.createElement('tr');
                                                    tbody.appendChild(tr4);
                                                    const tr5 = document.createElement('tr');
                                                    tbody.appendChild(tr5);
                                                    const th3 = document.createElement('th');
                                                    th3.setAttribute('scope','row');
                                                    tr1.appendChild(th3);
                                                    const th4 = document.createElement('th');
                                                    th4.setAttribute('scope','row');
                                                    tr2.appendChild(th4);
                                                    const th5 = document.createElement('th');
                                                    th5.setAttribute('scope','row');
                                                    tr3.appendChild(th5);
                                                    const th6 = document.createElement('th');
                                                    th6.setAttribute('scope','row');
                                                    tr4.appendChild(th6);
                                                    const th7 = document.createElement('th');
                                                    th7.setAttribute('scope','row');
                                                    tr5.appendChild(th7);
                                                        const divth3 = document.createElement('div');
                                                        divth3.setAttribute('class','text-center');
                                                        th3.appendChild(divth3);
                                                        divth3.innerHTML="Température";
                                                        const divth4 = document.createElement('div');
                                                        divth4.setAttribute('class','text-center');
                                                        th4.appendChild(divth4);
                                                        divth4.innerHTML="Taux d'humidité";
                                                        const divth5 = document.createElement('div');
                                                        divth5.setAttribute('class','text-center');
                                                        th5.appendChild(divth5);
                                                        divth5.innerHTML="Vitesse du vent";
                                                        const divth6 = document.createElement('div');
                                                        divth6.setAttribute('class','text-center');
                                                        th6.appendChild(divth6);
                                                        divth6.innerHTML="Densité des nuages";
                                                        const divth7 = document.createElement('div');
                                                        divth7.setAttribute('class','text-center');
                                                        th7.appendChild(divth7);
                                                        divth7.innerHTML="Type de temps";
                                                            const td3 = document.createElement('td');
                                                            tr1.appendChild(td3);
                                                            const td4 = document.createElement('td');
                                                            tr2.appendChild(td4);
                                                            const td5 = document.createElement('td');
                                                            tr3.appendChild(td5);
                                                            const td6 = document.createElement('td');
                                                            tr4.appendChild(td6);
                                                            const td7 = document.createElement('td');
                                                            tr5.appendChild(td7);
                                                            const divtd3 = document.createElement('div');
                                                            divtd3.setAttribute('class','text-center');
                                                            divtd3.innerHTML=json.list[i].main.temp+'°C';
                                                            td3.appendChild(divtd3);
                                                            const divtd4 = document.createElement('div');
                                                            divtd4.setAttribute('class','text-center');
                                                            divtd4.innerHTML=json.list[i].main.humidity+'%';
                                                            td4.appendChild(divtd4);
                                                            const divtd5 = document.createElement('div');
                                                            divtd5.setAttribute('class','text-center');
                                                            divtd5.innerHTML="Vitesse : "+json.list[i].wind.speed+" Rafale : "+json.list[i].wind.gust;
                                                            td5.appendChild(divtd5);
                                                            const divtd6 = document.createElement('div');
                                                            divtd6.setAttribute('class','text-center');
                                                            divtd6.innerHTML=json.list[i].clouds.all;
                                                            td6.appendChild(divtd6);
                                                            const divtd7 = document.createElement('div');
                                                            divtd7.setAttribute('class','text-center');
                                                            divtd7.innerHTML=json.list[i].weather[0].description;
                                                            td7.appendChild(divtd7);
                                                            const img = document.createElement('img');
                                                            img.setAttribute('src','http://openweathermap.org/img/wn/'+json.list[i].weather[0].icon+'@2x.png');
                                                            td7.appendChild(img);


                    
                                            i++;  
				}

        });	   
	});	
         