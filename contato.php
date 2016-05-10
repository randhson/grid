<?
$nome=$_POST['nome'];
$email=$_POST['email'];
$titulo=$_POST['titulo'];
$texto=$_POST['comentario'];

$Destinatario=$email;
$Origem="randson.nunes@rnunes.net.br";
$Titulo="Contato de Cliente";

$mensagem1="
Uma mensagem vinda do site http://olympicstore.esy.es/grid/ !
Voce entrou em contato a poucos instantes.
Nome: $nome
Email: $email
Mensagem: $texto";

mail("$Destinatario","$Titulo", "$mensagem1","From:$Origem");

header("Location: http://olympicstore.esy.es/grid");

?>
