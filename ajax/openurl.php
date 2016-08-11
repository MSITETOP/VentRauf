<?
if(file_exists(md5($_REQUEST["url"]))) {
    include(md5($_REQUEST["url"]));
} else {
    include_once("phpQuery.php");
    $document = phpQuery::newDocument(file_get_contents($_REQUEST["url"]));
            

    $content = $document->find('div.our-object-item');


    $file = "<h2>".$document->find('.breadcrumbs h2')->text()."</h2>";

    foreach ($content->find('p') as $text) {
        if(strlen(pq($text)->text())>10)
            $file .= "<p>".pq($text)->text()."</p>";
    }

    $cnt = count($content->find('img'));
    foreach ($content->find('img') as $img) {
        if(strlen(pq($img)->attr("src"))>5)
            $file .= "<img src='http://ventrauf.ru/".pq($img)->attr("src")."' width='".(100/$cnt-1)."%' style='margin: 0.5%'>";
    }
    echo $file;
    file_put_contents(md5($_REQUEST["url"]),$file);
}
?>