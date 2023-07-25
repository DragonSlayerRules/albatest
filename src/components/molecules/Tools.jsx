import React from "react";
import angular from "../../assets/images/tools/angular.png";
import aws from "../../assets/images/tools/aws.png";
import cloud from "../../assets/images/tools/cloud.png";
import css from "../../assets/images/tools/css.png";
import html from "../../assets/images/tools/html.png";
import js from "../../assets/images/tools/js.png";
import mongo from "../../assets/images/tools/mongo.png";
import mysql from "../../assets/images/tools/mysql.png";
import php from "../../assets/images/tools/php.png";
import phyton from "../../assets/images/tools/phyton.png";
import postgres from "../../assets/images/tools/postgres.png";

function Tools() {
  const tools = [
    angular,
    aws,
    cloud,
    css,
    html,
    js,
    mongo,
    mysql,
    php,
    phyton,
    postgres,
  ];
  return (
    <div>
      {tools.map((unit) => (
        <img src={unit} alt="" />
      ))}
    </div>
  );
}

export default Tools;
