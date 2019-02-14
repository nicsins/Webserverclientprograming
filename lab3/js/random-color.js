






let newItem = document.querySelector('#text');



// Find the add button, and add a click listener


document.querySelector('#add').addEventListener('click', function() {

    // Find the ul list by the id. Note the # in the selector


    let my_list_element = document.querySelector("#my-list");



    //Make a new HTML element for this document, of type <li>

    var new_list_item = document.createElement("li");

    if(!newItem in document.querySelectorAll('LI').values()){



        // Configure properties of this element. innerHTML can be any text or HTML

        // Format strings use backticks, and ${var} notation
        if ($(newItem) in document.querySelectorAll('li'))
        {

            new_list_item.innerHTML = `'<svg width="400" height="110">
    <rect width="200" height="200" style="fill:${colorString};stroke-width:3;stroke:rgb(0,0,0)" />
    </svg>' ${newItem.value}`;
        }
        // Add the new item to as a new child to the unordered list

        my_list_element.appendChild(new_list_item);

        // Increase the count of items added, for the next item

        newItem.value='';

    }
    else {alert('already there')
        newItem.value=''};