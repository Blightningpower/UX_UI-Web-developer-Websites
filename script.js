function addRow(type) {
    var section = document.getElementById('additionalPoints'); 
    var newRow = document.createElement('div');
    newRow.className = 'row';
    newRow.innerHTML = '<label for="' + type + '"> ' + (type == 'positive' ? 'Positief punt:' : 'Negatief punt:') + '</label>' +
        '<textarea class="inputWidth" id="' + type + '" name="' + type + '" placeholder="' + (type == 'positive' ? 'Positief punt' : 'Negatief punt') + '" rows="4" cols="50"' + 
        (type == 'positive' ? ' title="Noteer een positief punt"' : ' title="Noteer een negatief punt"') + '></textarea>' +
        '<button type="button" onclick="removeRow(this)">Verwijder</button>'; // Toevoeging van verwijderknop
    section.appendChild(newRow);
}

function removeRow(button) {
    var row = button.parentNode;
    row.parentNode.removeChild(row);
}

// title="Noteer een positief punt"