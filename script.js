
function AddtoTheList(){
    var main=document.getElementById("todolist");
    var add=document.getElementById("mytodo");
    if(add.value!=""){
        var wow=document.createElement('li',id="");
        var texty=document.createTextNode(add.value);
        wow.appendChild(texty);
        console.log(wow)
        main.appendChild(wow);
    }
    
}
function RemoveFromTheList(){
    var main=document.getElementById("todolist");
    var remove=document.getElementById("nottodo");
    var e= document.querySelector(`#todolist :nth-child(${remove.value})`)
    e.remove();
    console.log(remove.value);
    
}