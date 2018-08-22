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

/*
function myFunctiondisplay() {
    var thumbnailArray = []
    var my_json;

    $.getJSON("myData.json", function(json) {
        my_json = json.data;
        useTheData();
    });

    function useTheData() {
        for (var i = 0; i < my_json.length; i++) {
        // for (var i = 0; i < thumbnailArray.length; i++) {
        //console.log(thumbnailArray.length);
        var para = document.createElement("span"); //Create span
            para.setAttribute("id", "img-id");
        var DOM_img = document.createElement("img"); //Create image
            DOM_img.src = my_json[i].fileId;
            DOM_img.setAttribute("width", "370");
            DOM_img.setAttribute("height", "230");
            para.appendChild(DOM_img); // add img with span

        var paratext = document.createElement("div");// Create content div
        paratext.setAttribute("id", "Div1");// create and set id
        // create text
        var paratext1 = document.createTextNode(my_json[i].text_content);
        paratext.appendChild(paratext1);// add text with content div
        
        var element = document.getElementById("first-cell-id");// Assign parent id to variable
        element.appendChild(para).appendChild(paratext); // Add image and text content with parent id

        //console.log(i, "-", my_json[i].thumbnill);
        //console.log(i, "-", my_json[i].text_content);
        }
    } 
} */
/*function myFunctiondisplay() {
    
    var thumbnailArray = [{
        thumbnill : "images/img_forest.jpg",
        text_content : "First test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_5terre.jpg",
        text_content : "Second test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_lights.jpg",
        text_content : "Third test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_5terre.jpg",
        text_content : "Fourth test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_lights.jpg",
        text_content : "Fifth test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_forest.jpg",
        text_content : "Sixth test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_lights.jpg",
        text_content : "Seventh test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_forest.jpg",
        text_content : "Eightth test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {thumbnill : "images/img_5terre.jpg",
        text_content : "ninth test display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }];

    for (var i = 0; i < thumbnailArray.length; i++) {
        console.log(thumbnailArray.length);
        var para = document.createElement("span"); //Create span
            para.setAttribute("id", "img-id");
        var DOM_img = document.createElement("img"); //Create image
            DOM_img.src = thumbnailArray[i].thumbnill;
            DOM_img.setAttribute("width", "370");
            DOM_img.setAttribute("height", "230");
            para.appendChild(DOM_img); // add img with span

        var paratext = document.createElement("div");// Create content div
        paratext.setAttribute("id", "Div1");// create and set id
        // create text
        var paratext1 = document.createTextNode(thumbnailArray[i].text_content);
        paratext.appendChild(paratext1);// add text with content div
        
        var element = document.getElementById("first-cell-id");// Assign parent id to variable
        element.appendChild(para).appendChild(paratext); // Add image and text content with parent id

    }  
}   */           