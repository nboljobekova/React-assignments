var xhr=new XMLHttpRequest();
xhr.open("GET","D:/input.txt");
xhr.onload=function(){
    console.log(xhr.responseText);
}
xhr.send();

// function readFile (evt) {
//     var files = evt.target.files;
//         if (files) {
//             for (var i=0, f; f=files[i]; i++) {
//                 var file = files[i];           
//                 var reader = new FileReader();
//                 reader.onload = function() { 
//                     var contents = [];
//                     contents = this.result.split("\n");
//                         for (var i = 0; i < contents.length; i++) {
//                             if(contents[i] === "SECTION") {
//                                 alert("This is section");
//                             }
//                             document.getElementById('textArea').innerHTML +=contents[i];
//                         }
//                 }
//                 reader.readAsText(file);
//             }
//         }
//     }