<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Ruta al archivo JSON
$jsonFile = 'empleados.json';

// Leer el contenido del archivo JSON
$usersData = file_get_contents($jsonFile);

// Decodificar el contenido en un array de PHP
$users = json_decode($usersData, true);

// Recoger los datos enviados por el formulario
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Crear un nuevo usuario
    $newUser = [
        'name' => $name,
        'email' => $email,
        'password' => $password
    ];

    // Verificar si el usuario ya existe
    $exists = false;
    foreach ($users as $user) {
        if ($user['email'] == $email) {
            $exists = true;
            break;
        }
    }

    // Si el usuario no existe, agregarlo
    if (!$exists) {
        $users[] = $newUser;

        // Convertir el array nuevamente a JSON
        $newData = json_encode($users, JSON_PRETTY_PRINT);

        // Guardar el JSON actualizado en el archivo
        file_put_contents($jsonFile, $newData);

        // Redirigir con mensaje de éxito
        header('Location: registroEmp.html?message=Usuario registrado con éxito');
    } else {
        // Redirigir con mensaje de error
        header('Location: registroEmp.html?message=El usuario ya existe');
    }
} else {
    // Redirigir con mensaje de error si faltan campos
    header('Location: registroEmp.html?message=Faltan campos por llenar');
}
?>