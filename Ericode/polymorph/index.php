<?php

spl_autoload_register(function ($class) {
  include sprintf('classes/%s.php', $class);
});


$violin = new Violins();
$wood = new Woodwind();
$trumpet = new Brass();
$timbal = new Drums();

$ensemble = [$violin, $wood, $trumpet, $timbal];

function playing($ensemble):void
{
  foreach ($ensemble as $member) {
    echo $member->play() . "<br>";
  }
}

playing($ensemble);