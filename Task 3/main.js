function addStudent()
{
    console.log("Hello world")
    var name= document.getElementById("Text").value;
    var Roll_No= document.getElementById("Number").value;
    var email= document.getElementById("email").value;
    var Mobile_Number = document.getElementById("Phone").value;
    var Branch= document.getElementById("stream").value;
    var gndr= document.getElementsByName("gender");
    var gender = "";
    for(var i =0;i<gndr.length; i++){
        if(gndr[i].checked){
            gender = gndr[i].value;
        }
    }
    var tr= document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    td1.innerHTML=name;
    td2.innerHTML=Roll_No;
    td3.innerHTML= email;
    td4.innerHTML=Mobile_Number;
    td5.innerHTML= Branch;
    td6.innerHTML= gender;
    document.getElementById("tbl").appendChild(tr);
    console.log("Hello World!")
    
    
}