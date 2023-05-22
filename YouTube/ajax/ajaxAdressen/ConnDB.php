<?php

class ConnDB
{
  public static function connect():object
  {
    return new PDO(DB_DSN, DB_USER, DB_PASSWD);
  }
}