<?php
/**User: Jackokramer 
namespace app/controllers;
* 
@package app/controllers
*/

class Controller{
    public function render($view, $params)
    {
        return Application:: $app->router->renderView($view, $params);
    }
}