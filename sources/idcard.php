<?php
if ($br['loggedin'] == false) {
  header("Location: " . Br_SeoLink('index.php?link1=welcome'));
  exit();
}


$br['description'] = $br['config']['siteDesc'];
$br['keywords']    = $br['config']['siteKeywords'];
$br['page']        = 'idcard';
$br['title']       = "ID Card"." | ".$br['config']['siteTitle'];
$br['content']     = Br_LoadPage('user/idcard');