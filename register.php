<?php
// Koneksi ke database
$servername = "localhost"; // Ganti dengan nama server Anda
$username = "Username"; // Ganti dengan nama pengguna database Anda
$password = "Password"; // Ganti dengan kata sandi database Anda
$dbname = "bismillah"; // Ubah nama database ke 'bismillah'

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Memproses data dari formulir jika metode POST digunakan
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil nilai dari formulir dan melakukan validasi
    $username = validateInput($_POST['username']);
    $email = validateInput($_POST['email']);
    $password = validateInput($_POST['password']);

    // Validasi input tidak boleh kosong
    if (empty($username) || empty($email) || empty($password)) {
        echo "<script>alert('Jangan hati aja yang diisi, semua field pun juga harus diisi tidak boleh kosong!');</script>";
        // Redirect ke halaman register lagi setelah pesan alert muncul
        echo "<script>window.location.href = 'register.html';</script>";
    } else {
        // Query SQL untuk menyimpan data ke dalam tabel pengguna dengan prepared statement
        $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

        // Persiapkan statement
        $stmt = $conn->prepare($sql);

        // Hash password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Bind parameters
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        // Eksekusi statement
        if ($stmt->execute()) {
            // Pendaftaran berhasil
            echo "<script>alert('Pendaftaran berhasil!');</script>";
            // Redirect ke halaman login setelah pesan alert muncul
            echo "<script>window.location.href = 'login.html';</script>";
            exit(); // Pastikan tidak ada output lain sebelum redirect
        } else {
            // Tangani error
            echo "Error: " . $stmt->error;
        }

        // Tutup statement
        $stmt->close();
    }
}

// Menutup koneksi ke database
$conn->close();

// Fungsi untuk membersihkan dan memvalidasi input
function validateInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>