(function validate(){

    var todo = document.querySelector( '#todolist' ),
        form = document.querySelector( 'form' ),
        field = document.querySelector( '#newitem' );
    field.addEventListener('click',function () {
        if (field.length < 1 || field.length > 50){
            alert('Item must be between 2 -50 chars');
            return false; }
        else {
            return true;
        }

    });
    form.addEventListener( 'submit', function( ev ) {
        todo.innerHTML += '<li>' + field.value + '</li>';
        field.value = '';
        field.focus();
        ev.preventDefault();
    }, false);

    todo.addEventListener( 'click', function( ev ) {
        var t = ev.target;
        if ( t.tagName === 'LI' ) {
            if ( t.classList.contains( 'done' ) ) {
                t.parentNode.removeChild( t );
            } else {
                t.classList.add( 'done' );
            }
        };
        ev.preventDefault();
    }, false);

})();