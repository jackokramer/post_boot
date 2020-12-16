<?

/**User: Jackokramer */

namespace app\core;


/**
* @author Jack
*@package app\core
*/

class Response{
    public function setStatusCode(int $code){
        http_response_code($code);
    }
}

?>