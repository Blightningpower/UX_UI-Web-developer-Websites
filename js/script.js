var positiveCount = 2; // Start with 2 since you already have positive1 and positive2
var negativeCount = 2; // Start with 2 since you already have negative1 and negative2

function addRow(type) {
    var section = document.getElementById('additionalPoints'); 
    var newRow = document.createElement('div');
    newRow.className = 'row';
    
    var id = (type === 'positive') ? 'positive' + (++positiveCount) : 'negative' + (++negativeCount);
    
    newRow.innerHTML = '<label for="' + id + '"> ' + (type == 'positive' ? 'Positief punt:' : 'Negatief punt:') + '</label>' +
        '<textarea class="inputWidth" id="' + id + '" name="' + id + '" placeholder="' + (type == 'positive' ? 'Positief punt' : 'Negatief punt') + '" rows="4" cols="50"' + 
        (type == 'positive' ? ' title="Noteer een positief punt"' : ' title="Noteer een negatief punt"') + '></textarea>' +
        '<button type="button" onclick="removeRow(this)">Verwijder</button>'; // Toevoeging van verwijderknop
    section.appendChild(newRow);
}

function removeRow(button) {
    var row = button.parentNode;
    row.parentNode.removeChild(row);
}