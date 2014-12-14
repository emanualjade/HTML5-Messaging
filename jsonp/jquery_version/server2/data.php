<?php
  $data = array(
    'name' => 'Emanual Jade',
    'designation' => 'UI Developer',
    'website' => 'cracklehat.com',
    'skills' => array('php', 'javascript', 'rails', 'node')
  );

  echo $_GET['jsoncallback'] . "(" . json_encode($data) . ")";
?>
