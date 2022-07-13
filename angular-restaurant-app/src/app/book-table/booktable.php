$con = mysqli_connect();

$startDate = $_POST['startDate'];
$PartySize = $_POST['$PartySize'];
$ResTime = $_POST['$ResTime'];
$ResName = $_POST['ResName'];
$ResEmail = $_POST['$ResEmail'];
$ResTelephone = $_POST['ResTelephone'];

$sql = "INSERT INTO 'reservation' ('Date', 'PartySize', 'Time', 'Name', 'Email', 'Telephone') VALUES ('$startDate', '$PartySize', '$ResTime', '$ResName', '$ResEmail', '$ResTelephone')";

$rs = mysqli_query ($con, $sql);

if ($rs) {
    echo "Reservation wurde eingetragen."
}