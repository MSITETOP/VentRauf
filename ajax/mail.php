<?
if($_REQUEST) {
    $mes = "";
    $mes .= "Имя: ".$_REQUEST["name"]."\n";
    $mes .= "Телефон: ".$_REQUEST["phone"]."\n";
    $mes .= "Эл. Почта: ".$_REQUEST["mail"]."\n";
    echo mail("crook@inbox.ru", $_REQUEST["title"], $mes);    
}
?>