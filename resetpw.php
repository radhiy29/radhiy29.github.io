<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['Email'];
    $new_password = $_POST['Password'];

    // Lakukan koneksi ke database
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $dbname = "bismillah";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    // Query untuk memperbarui kata sandi berdasarkan alamat email
    $sql = "UPDATE users SET password='$new_password' WHERE email='$email'";

    if ($conn->query($sql) === TRUE) {
        // Kata sandi berhasil diubah, tampilkan pesan alert dan redirect ke halaman login
        echo "<script>alert('Kata sandi berhasil diubah!');</script>";
        echo "<script>window.location.href = 'login.html';</script>";
        exit(); // Pastikan tidak ada output lain sebelum redirect
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
