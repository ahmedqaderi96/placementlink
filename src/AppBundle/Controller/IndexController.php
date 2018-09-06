<?php
/**
 * Created by PhpStorm.
 * User: ahmed
 * Date: 06/08/2018
 * Time: 14:55
 */

namespace AppBundle\Controller;

use AppBundle\Entity\Placement;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller
{
    /**
     * @Route("/")
     */
    public function showAction(){
        $templating = $this->container->get("templating");
        $html = $templating->render('index/show.html.twig', array(
            'name' => "ahmed"
        ));
        return new Response($html);

    }

    /**
     * @Route("/placements")
     */
    public function searchPlacements(Request $request){

        $em = $this->getDoctrine()->getManager();
        $queryBuilder = $em->getRepository('AppBundle:Placement')->createQueryBuilder('placement');
        $categoryQuery = $em->getRepository('AppBundle:SkillCategory')->findAll();

        //$queryBuilder = $em->getRepository('AppBundle:Book')->BookFilter($request);
        if ($request->query->getAlnum('search')) {
            $queryBuilder->where('placement.name LIKE :search')
                ->setParameter('search', '%' . $request->query->getAlnum('search') .
                    '%');
        }
        if ($request->query->getAlnum('type')) {
            $queryBuilder->andwhere('placement.type LIKE :type')
                ->setParameter('genre', '%' . $request->query->getAlnum('type') .
                    '%');
        }

        $templating = $this->container->get('templating');

        $query = $queryBuilder->getQuery();
        $paginator = $this->get('knp_paginator');
        $result = $paginator->paginate(
            $query,
            $request->query->getInt('page', 1),
            $request->query->getInt('limit', 10)
        );
         $html = $templating->render('placement/searchPlacement.html.twig',[
            'placements' => $result,
            'skillCategorys' => $categoryQuery,

        ]);
        return new Response($html);
    }

    /**
     * @Route("/placement/new")
     */
    public function addPlacement(Request $request){
        $placement = new Placement();
        $placement->setEmployerId(1);
        $placement->setType("defaultType");
        $form = $this->createFormBuilder($placement)
            ->add('name',TextType::class)
            ->add("description",TextareaType::class)
            ->add("salary",IntegerType::class)
            ->add("startDate", DateType::class)
            ->add("location", TextType::class)
            ->add("add placement",SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $review_data = $form->getData();


            $em->persist($review_data);
            $em->flush();
            $this->addFlash('success', 'Your Review has been added');
            return $this->redirect($request->getUri());

        }else{

//             $this->addFlash('success', 'Your Review has failed' . $form->isValid());

        }

        return $this->render('placement/addPlacement.html.twig',array(
            "addPlacementForm" => $form->createView(),
        ));
    }
    /**
     * @Route("/placement/{id}")
     */
    public function showPlacement($id){
        $templating = $this->container->get('templating');
        $placement = $this->getDoctrine()->getRepository('AppBundle:Placement')->find($id);

        $html = $templating->render('placement/showPlacement.html.twig',[
             'placement' => $placement,
         ]);
        return new Response($html);
    }

    /**
     * @Route("/placement/{id}/edit")
     */

    public function editPlacement(Request $request,$id){
        $placement = $this->getDoctrine()->getRepository('AppBundle:Placement')->find($id);
         $form = $this->createFormBuilder($placement)
            ->add('name',TextType::class)
            ->add("description",TextareaType::class)
            ->add("salary",IntegerType::class)
            ->add("startDate", DateType::class)
            ->add("location", TextType::class)
            ->add("add placement",SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $review_data = $form->getData();


            $em->persist($review_data);
            $em->flush();
            $this->addFlash('success', 'Your Review has been added');
            return $this->redirect($request->getUri());

        }else{

//             $this->addFlash('success', 'Your Review has failed' . $form->isValid());

        }

        return $this->render('placement/addPlacement.html.twig',array(
            "addPlacementForm" => $form->createView(),
        ));
    }
}