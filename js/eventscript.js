
function loadeventtable(showall, showempty)
{
	var today = new Date();

	var heading = new Array();
	heading[0] = new Array("Event date", "90");
	heading[1] = new Array("Event name", "400");
	
	var eventlist = new Array();
	eventlist[0] = new Array("10/07/2017", "Fall Crown Tournament");
	eventlist[1] = new Array("10/14/2017", "Ansteorra Coronation");
	eventlist[2] = new Array("10/21/2017", "");
	eventlist[3] = new Array("10/28/2017", "");
	eventlist[4] = new Array("11/04/2017", "");
	eventlist[5] = new Array("11/11/2017", "Æthelmearc and East Kingdom War (Corn maze)");
	eventlist[6] = new Array("11/18/2017", "");
	eventlist[7] = new Array("11/25/2017", "");
	eventlist[8] = new Array("12/02/2017", "Christmas Tourney 46 (Middle Kingdom)");
	
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
