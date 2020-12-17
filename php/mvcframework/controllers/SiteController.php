<?php
/**User: Jackokramer 
namespace app/controllers;
* 
@package app/controllers
*/

class SiteController extends Controller {
    public function home(){
        $params = [
            'name' => "jackokramer"
        ];
        return $this-> render('home', $params);
    }
    public function contact(){
        return $this->render('contact');
    }
        public function handleContact(){
        return 'handling submmited data';
    }
}