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
    "title" => "Gåtreningen som får deg ned i vekt",
    "url" => "https://www.vg.no/forbruker/helse/i/Qy0noJ/eksperter-slik-kan-gaatrening-faa-deg-ned-i-vekt"
  ],
  [
    "title" => "Dug, 'the world's largest potato,' revealed to not be a potato",
    "url" => "https://edition.cnn.com/2022/03/23/world/dug-largest-potato-tuber-scn/index.html"
  ],
  [
    "title" => "Nøkelen til perfekt pizzabunn",
    "url" => "https://www.godt.no/tipstriks/guider/i/vQ1xqw/slik-lager-du-italiensk-pizza-hjemme"
  ],
];

$article_id = rand(0, count($articles) - 1);
$article = $articles[$article_id];

$SECONDS_TO_SLEEP = rand(1, 3);
sleep($SECONDS_TO_SLEEP);

?>

<div>
  <h1><?= $article['title'];?></h1>
  <a href="<?=$article['url'];?>">Read more...</a>
</div>
