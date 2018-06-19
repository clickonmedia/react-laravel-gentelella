<?php

namespace App\Http\Controllers;

// use Admin;
// use AdminAuth;
use Illuminate\Http\Request;
use GuzzleHttp\Client; 
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\RequestException;

class OpenProjectController extends Controller
{
    //
    public function projectWorkPackages() //Retrieve
    { 
    	$openproject_url = env("OPENPROJECT_URL", "127.0.0.1");
    	$openproject_user = env("OPENPROJECT_USER", "apikey");
    	$openproject_pass = env("OPENPROJECT_PASS", "79990b2173a7289bf6e047d46ffcf8e4440c5cda67c99c530347b709e9b02a5a");
    	

    	$api_enpoint = $openproject_url . 'api/v3/projects/2/work_packages';

		$client = new Client(); 
		$response = $client->get($api_enpoint, [
		    'auth' => [
		        'apikey', 
		        '79990b2173a7289bf6e047d46ffcf8e4440c5cda67c99c530347b709e9b02a5a'
		    ]
		]);
		$body = json_decode($response->getBody(), TRUE);
	 //    $content = view('retrieve')->with('body',$body);
		return $body;
		//return $api_enpoint;
		// return View::make($content);
    }
}
