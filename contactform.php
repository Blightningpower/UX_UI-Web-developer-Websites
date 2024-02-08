<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $eMail = $_POST['eMail'];
    $yourName = $_POST['yourName'];
    $yourAge = $_POST['yourAge'];
    $positive1 = $_POST['positive1'];
    $positive2 = $_POST['positive2'];
    $negative1 = $_POST['negative1'];
    $negative2 = $_POST['negative2'];

    // Database connection parameters
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_database_name";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL statement to insert data into database
    $sql = "INSERT INTO survey_responses (email, name, age, positive1, positive2, negative1, negative2) VALUES ('$eMail', '$yourName', '$yourAge', '$positive1', '$positive2', '$negative1', '$negative2')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close database connection
    $conn->close();

    $_SESSION['form_submitted'] = true;

    // Redirect to another page
    header("Location: html/thanks.html");
    exit();
}
?>
