    var thumbnailArray = []
    var my_json;
    // Create a request variable and assign a new XMLHttpRequest object to it.
        var request = new XMLHttpRequest();

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://api.mcmakler.de/v1/advertisements', true);

        request.onload = function() {
       // Begin accessing JSON data here
       
        var useTheData = JSON.parse(this.response);
       
        if (request.status >= 200 && request.status < 400) {
            //console.log(useTheData['data']);
           // var imgstoreArray = [];
            //console.log(imgstoreArray);
            for (var i = 9; i < 18; i++) {
                        
                var para = document.createElement("span"); //Create span
                para.setAttribute("id", "img-id");
                var DOM_img = document.createElement("img"); //Create image
                DOM_img.src = useTheData['data'][i]['advertisementAssets']['advertisementThumbnails']['inventory_m'].url;
                
                DOM_img.setAttribute("width", "370");
                DOM_img.setAttribute("height", "230");
                para.appendChild(DOM_img); // add img with span
                
                
                var paratext = document.createElement("div");// Create content div
                paratext.setAttribute("id", "Div1");// create and set id
                // create text
                var paratextinner = document.createElement("div");// Create content div
                paratextinner.setAttribute("id", "Div2");// create and set id
                var paratext1 = document.createTextNode(useTheData['data'][i].title);
                paratextinner.appendChild(paratext1);// add text with content div
                
                //element.appendChild(i).appendChild(j);
                
                var element = document.getElementById("first-cell-id");// Assign parent id to variable
                element.appendChild(para).appendChild(paratext).appendChild(paratextinner); // Add image and text content with parent id
            
            }
        
        }
        else { console.log('error');}
    }
    
    // Send request
    request.send();

