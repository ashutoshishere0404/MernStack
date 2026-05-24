let heading = document.createElement('h3');
heading.innerHTML = "Creates a list from prompt results";
document.body.append(heading);

let list = document.createElement('ul');
while(true) {
    let listItem = prompt("Enter String: ","");
    console.log(listItem);
    if(listItem=="" || listItem==null) {
        document.body.appendChild(list);
        break;
    }
    else {
        let lii = document.createElement('li');
        lii.textContent = listItem;
        console.log(lii);
        list.appendChild(lii);
    }
}