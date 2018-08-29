<?php
/**
 * Created by PhpStorm.
 * User: ahmed
 * Date: 23/06/2018
 * Time: 19:47
 */

namespace AppBundle\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="student_skill")
 */
class StudentSkill
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */private $id;
    /**
     * @ORM\Column(type="integer")
     */
    private $studentId;
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
    public function getStudentId()
    {
        return $this->studentId;
    }

    /**
     * @param mixed $studentId
     */
    public function setStudentId($studentId)
    {
        $this->studentId = $studentId;
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