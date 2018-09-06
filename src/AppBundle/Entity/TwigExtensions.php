<?php
// Note that the namespace must match with
// your project !
namespace AppBundle\Entity;

use Symfony\Bridge\Doctrine\RegistryInterface;

class TwigExtensions extends \Twig_Extension
{
    public function getFunctions()
    {
        // Register the function in twig :
        // In your template you can use it as : {{find(123)}}
        return array(
            new \Twig_SimpleFunction('subCatByCatId', array($this, 'subCatByCatId')),
            new \Twig_SimpleFunction('skillBySubCatId', array($this, 'skillBySubCatId')),
        );
    }

    protected $doctrine;
    // Retrieve doctrine from the constructor
    public function __construct(RegistryInterface $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    public function subCatByCatId($id){
        $em = $this->doctrine->getManager();
        $myRepo = $em->getRepository('AppBundle:SkillSubCategory');
        ///
        ///
        return $myRepo->findBy(['categoryId'=>$id]);
    }

    public function skillBySubCatId($id){
        $em = $this->doctrine->getManager();
        $myRepo = $em->getRepository('AppBundle:Skill');
        ///

        return $myRepo->findBy(['subCategoryId'=>$id]);
    }

    public function getName()
    {
        return 'Twig myCustomName Extensions';
    }
}