document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('yourName').value;
    const age = document.getElementById('yourAge').value;
    const positive1 = document.getElementById('positive1').value;
    const positive2 = document.getElementById('positive2').value;
    const negative1 = document.getElementById('negative1').value;
    const negative2 = document.getElementById('negative2').value;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Age: ${age}`, 10, 20);
    doc.text(`Positive Point 1: ${positive1}`, 10, 30);
    doc.text(`Positive Point 2: ${positive2}`, 10, 40);
    doc.text(`Negative Point 1: ${negative1}`, 10, 50);
    doc.text(`Negative Point 2: ${negative2}`, 10, 60);

    // Save the PDF
    const pdfName = 'form_data.pdf';
    doc.save(pdfName);

    // Notify the user about the download
    alert(`The PDF file "${pdfName}" has been downloaded.`); // Optional

    // You can also redirect the user to 'thanks.html' after the form submission
    window.location.href = 'html/thanks.html';
});
