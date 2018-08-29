<?php
/**
 * Created by PhpStorm.
 * User: ahmed
 * Date: 23/06/2018
 * Time: 19:16
 */

namespace AppBundle\Entity;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\Table(name="apply")
 */
class Apply
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(type="integer")
     */
    private $placementId;
    /**
     * @ORM\Column(type="integer")
     */
    private $userId;
    /**
     * @ORM\Column(type="string")
     */
    private $coverLetter;

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
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @param mixed $userId
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;
    }

    /**
     * @return mixed
     */
    public function getCoverLetter()
    {
        return $this->coverLetter;
    }

    /**
     * @param mixed $coverLetter
     */
    public function setCoverLetter($coverLetter)
    {
        $this->coverLetter = $coverLetter;
    }
}