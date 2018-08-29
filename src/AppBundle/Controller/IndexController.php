<?php
/**
 * Created by PhpStorm.
 * User: ahmed
 * Date: 06/08/2018
 * Time: 14:55
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller
{
    /**
     * @Route("index")
     */
    public function showAction(){
        $templating = $this->container->get("templating");
        $html = $templating->render('index/show.html.twig', array(
            'name' => "ahmed"
        ));
        return new Response($html);

    }

}