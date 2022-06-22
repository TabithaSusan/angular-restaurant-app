$con = mysqli_connect();

$startDate = $_POST['startDate'];
$PartySize = $_POST['$PartySize'];
$ResTime = $_POST['$ResTime'];
$ResName = $_POST['ResName'];
$ResEmail = $_POST['$ResEmail'];

$sql = "INSERT INTO 'reservation' ('Date', 'PartySize', 'Time', 'Name', 'Email') VALUES ('$startDate', '$PartySize', '$ResTime', '$ResName', '$ResEmail')";

$rs = mysqli_query ($con, $sql);

if ($rs) {
    echo "Reservation wurde eingetragen."
}