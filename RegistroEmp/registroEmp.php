<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Empleado</title>
    <link rel="stylesheet" href="registroEmp.css">
</head>

<body>
    <h1>Formulario de Registro</h1>
    <form action="AgregarEmp.php" method="POST">
        <input type="text" name="name" placeholder="Nombre del cliente" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
    </form>

    <p id="message">
        <?php 
        // Mostrar mensaje de éxito o error si hay uno
        if(isset($_GET['message'])) {
            echo $_GET['message'];
        }
        ?>
    </p>
</body>

</html>