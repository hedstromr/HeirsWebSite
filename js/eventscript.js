
function loadeventtable(showall, showempty)
{
	var today = new Date();

	var heading = new Array();
	heading[0] = new Array("Event date", "90");
	heading[1] = new Array("Event name", "400");
	
	var eventlist = GetEventListFunction();
	
	var tableDiv = document.getElementById("eventtable");
	var table = document.createElement('TABLE');
	var tableBody = document.createElement('TBODY');

	table.appendChild(tableBody);
	
	var tr = document.createElement('TR');
	tableBody.appendChild(tr);
	for (i = 0; i < heading.length; i++) {
		var th = document.createElement('TH');
		th.width = heading[i][1];
		th.align = "left";
		th.appendChild(document.createTextNode(heading[i][0]));
		tr.appendChild(th);
	}
	
	for (i = 0; i < eventlist.length; i++) {
		var parts = eventlist[i][0].split('/');
		var eventdate = new Date(parts[2],parts[0]-1,parts[1]); 
		if (eventdate >= today || showall === 1) {
			if (eventlist[i][1] !== "" || showempty === 1) {
				var tr = document.createElement('TR');
				for (j = 0; j < eventlist[i].length; j++) {
					var td = document.createElement('TD');
					td.appendChild(document.createTextNode(eventlist[i][j]));
					tr.appendChild(td);
				}
				tableBody.appendChild(tr);
			}
		}
	}
	
	tableDiv.innerHTML = "";
	tableDiv.appendChild(table);
}

function load() {
	loadeventtable(0,0);
	
    console.log("Page load finished");
}
