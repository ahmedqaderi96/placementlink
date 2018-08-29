<?php
/**
 * Created by PhpStorm.
 * User: ahmed
 * Date: 23/06/2018
 * Time: 19:33
 */

namespace AppBundle\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="placement_skill")
 */
class PlacementSkill
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */private $id;
    /**
     * @ORM\Column(type="integer")
     */
    private $placementId;
    /**
     * @ORM\Column(type="integer")
     */
    private $skillId;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * @return mixed
     */
    public function getPlacementId()
    {
        return $this->placementId;
    }

    /**
     * @param mixed $placementId
     */
    public function setPlacementId($placementId)
    {
        $this->placementId = $placementId;
    }

    /**
     * @return mixed
     */
    public function getSkillId()
    {
        return $this->skillId;
    }

    /**
     * @param mixed $skillId
     */
    public function setSkillId($skillId)
    {
        $this->skillId = $skillId;
    }


}