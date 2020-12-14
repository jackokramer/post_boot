<?

/**User: Jackokramer */

namespace app\core;


/**
* @author Jack
*@package app\core
*/

class Request
{
    public function getPath(){
        $path = $_SERVER['REQUEST_URI']?? "/";
        $position = strpos($path, '?');
        if(postion=== false){
            return $path;
        }
        return substr($path, 0, $position);
    }

    public function getMethod(){
        return strolower($_SERVER['REQUEST_METHOD']);
    }
}

?>