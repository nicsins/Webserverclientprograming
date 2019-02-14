function validate(){
    var showName=document.querySelector('#show-name').value;
    var lis = document.getElementById("list").getElementsByTagName("li");
    var isMovie = document.getElementById("is-movie").checked;
    var lisArray = Array.prototype.slice.call(lis);
    let save_button=document.getElementById("#save");
    save_button.innerHTML="save";




    save_button.addEventListener('submit',function () {
        if (showName !== '') {
            var isShow=0;
            if (lis.length !== 0) {
                lisArray.forEach(function (el) {

                    if (el.innerHTML ===showName) {
                       isShow=1;
                        showName='';
                       }})}

                   if(isShow){
                       var new_list_el = document.createElement("li");
                       new_list_el.innerHTML = `${name}`;
                   }  if (isMovie){
                    new_list_el.className = "movie";
                }
                else {
                    new_list_el.className = "tv-show";
                }
                //Add the new li element to the list.
                let user_list = document.getElementById("list");
                user_list.appendChild(new_list_el);
            }
        else {
                alert('This is already in your list!')
            }
            // Clear the input and un-check the checkbox.
            showName= "";
            document.querySelector("#is-movie").checked = false;
        })}
