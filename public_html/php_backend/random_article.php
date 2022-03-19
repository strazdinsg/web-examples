<?php
require("cors_handling.php");

// This script shows one of a few predefined articles randomly
$articles = [
  [
    "title" => "Tesla buys $1.5 billion in bitcoin, plans to accept it as payment",
    "url" => "https://www.cnbc.com/2021/02/08/tesla-buys-1point5-billion-in-bitcoin.html"
  ],
  [
    "title" => "Frederic Hauges ørkeneventyr: Henter paprika hjem til Norge",
    "url" => "https://e24.no/naeringsliv/i/x3ePpB/frederic-hauges-oerkeneventyr-henter-paprika-hjem-til-norge"
  ],
  [
    "title" => "Karbohydratene du bør spise for å gå ned i vekt",
    "url" => "https://www.vektklubb.no/artikkel/vektklubb/jBLO6o/karbohydratene-du-br-spise-for-a-ga-ned-i-vekt"
  ],
  [
    "title" => "Indian man killed by his own bird during cockfight",
    "url" => "https://news.yahoo.com/indian-man-killed-own-rooster-145502223.html"
  ],
  [
    "title" => "Republican predicts Trump won’t be party’s presidential nominee in 2024",
    "url" => "https://news.yahoo.com/republican-predicts-trump-won-t-163240436.html"
  ],
  [
    "title" => "Mum freaked out by 'tiny black balls' in playhouse - and no one knows what it is",
    "url" => "https://www.mirror.co.uk/news/weird-news/mum-freaked-out-tiny-black-23570671"
  ],
];

$article_id = rand(0, count($articles) - 1);
$article = $articles[$article_id];
?>

<div>
  <h1><?= $article['title'];?></h1>
  <a href="<?=$article['url'];?>">Read more...</a>
</div>
