<? 

/** User: Jackokramer */

require_once __DIR__.'/vendor/autoload.php';
use app\core\Application;

$app= new Application();


$app->router -> get('/', function(){
    return "hola telemundo";
});

$app->router -> get('/contact', function(){
    return "Contacted";
});

$app->run();


?>