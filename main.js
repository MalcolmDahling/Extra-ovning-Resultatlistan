players = []; //{'name':'', 'points':''}

document.getElementById('addPlayerButton').addEventListener('click', function(){
    players.push( {'name':document.getElementById('addPlayerName').value, 'points':0} );
    document.getElementById('addPlayerName').value = '';

    document.getElementById('tbody').innerHTML += `
    <tr>
        <td>`+players[players.length - 1].name+`</td>

        <td>
            <span id="points`+players.length+`">`+players[players.length - 1].points+`</span>
            <button class="addButton" id="add`+players.length+`">+</button>
            <button class="subButton" id="sub`+players.length+`">-</button>
        </td>
    </tr>`;



    let addButtons = document.getElementsByClassName('addButton');

    for(let i = 0; i < addButtons.length; i++){
        addButtons[i].addEventListener('click', function(){
            let a = addButtons[i].id.toString().replace('add', 'points'); //Gets the buttons id which is add# and changes it to points# and converts it to a string.
            document.getElementById(a).innerHTML = parseInt(document.getElementById(a).innerHTML) + 1;
        });
    }

    let subButtons = document.getElementsByClassName('subButton');

    for(let i = 0; i < addButtons.length; i++){
        subButtons[i].addEventListener('click', function(){
            let a = subButtons[i].id.toString().replace('sub', 'points');
            document.getElementById(a).innerHTML = parseInt(document.getElementById(a).innerHTML) - 1;
        });
    }


});


