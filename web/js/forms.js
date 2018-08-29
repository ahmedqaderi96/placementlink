$(document).ready(function () {
    var YNTBLI = "you need to be logged iN"
    // sending personal details to PHP using Ajax
    $('#updatePersonalDetails').click(function () {
        //var DOB = $("select[name=day]").val() +"/"+$("select[name=month]").val()+"/"+$("select[name=year]").val();
        var firstName = $("input[name=firstName]").val();
        var lastName = $("input[name=lastName]").val();
        var email = $("input[name=email]").val();
        var phoneNumber = $("input[name=phoneNumber]").val();
        var mobileNumber = $("input[name=mobileNumber]").val();
         var bio = $("#bioArea").val();
        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                firstName:firstName,
                lastName:lastName,
                email:email,
                phoneNumber: phoneNumber,
                mobileNumber: mobileNumber,
                bio: bio,
                personalDetails: true
            },
            success: function (data) {
                $('#personalDetailsMsg').html("<div class='bg-success'>Details saved</div>");
                alert("Details have been updated successfully");
                setTimeout(function () {
                    $("#personalDetailsMsg").html(" ");
                }, 2500);
            }
        });
    });

    //sending Address details using Ajax
    $('#updateAddress').click(function () {
        var houseNumber = $("input[name=houseNumber]").val();
        var streetName = $("input[name=streetName]").val();
        var postcode = $("input[name=postCode]").val();
        var country = $("select[name=country]").val();
        var county = $("input[name=county]").val();
        var city = $("input[name=city]").val();
        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                houseNumber:houseNumber,
                streetName:streetName,
                postcode:postcode,
                country: country,
                county: county,
                city: city,
                Address: true
            },
            success: function (data) {
                alert("address have been updated successfully");
                $('#addressMsg').html("<div class='bg-success'>Address saved</div>");
                setTimeout(function () {
                    $("#addressMsg").html(" ");
                }, 2500);

            }
        });
    });

    $('#updateCourseDetails').click(function () {
         var university = $("input[name=university]").val();
        var course = $("input[name=courseName]").val();
        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                university:university,
                courseName:course,
                courseDetails: true
            },
            success: function (data) {
               $('#courseDetailsMsg').html("<div class='bg-success'>Details saved</div>"+data);
               setTimeout(function () {
                    $("#courseDetailsMsg").html(" ");
               }, 2500);
            }
        });
    });

    $('#updateCompanyDetails').click(function () {
        var cName = $("input[name=companyName]").val();
        var cWebsite = $("input[name=companyWebsite]").val();
        var cPhoneNumber = $("input[name=companyPhoneNumber]").val();

        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                companyName:cName,
                companyWebsite:cWebsite,
                companyPhoneNumber: cPhoneNumber
            },
            success: function (data) {
                $('#companyDetailsMsg').html("<div class='bg-success'>"+data+"</div>"+data);
                alert("Company details saved successfully");
                setTimeout(function () {
                    $("#companyDetailsMsg").html(" ");
                }, 2500);
            }
        });
    });

    
    $('#updateSkills').click(function () {
        var pi = $(this).attr('data-pi');
        allSkills = [];
        $("input:checkbox[name=skills"+pi+"]:checked").each(function(){
            a = $(this).val();
             allSkills.push(a);
           // $('#selectCatBtn').html(a);
        });
        var myJSONText = JSON.stringify( allSkills );
         $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                skills:myJSONText,
                updateSkills: true
            },
            success: function (data) {
                $('#skillsMsg'+pi).html("<div class='bg-success'>Details saved</div>"+data);
                location.reload();
            }
        });
    });

    $('#newPlacement').click(function () {
        //var ei = $('#ei').val();
        var placemntTitle = $('#placementTitle').val();
        var placementDescription = $('#placementDescription').val();
         var placementSalary = $('#placementSalary').val();
        var placementType = $('#placementType').val();
        var placementLocation = $('#placementLocation').val();
        var placementDate = $('#placementDate').val();
        allSkills = [];
        $("input:checkbox[name=skills]:checked").each(function(){
            a = $(this).val();
            allSkills.push(a);
            $('#selectCatBtn').html(a);
        });
        var myJSONText = JSON.stringify( allSkills );
        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                title:placemntTitle,
                description:placementDescription,
                salary:placementSalary,
                type:placementType,
                location:placementLocation,
                date:placementDate,
                skills:myJSONText,
                newPlacement: true
            },
            success: function (data) {
                $('#newPlacementMsg').html("<div class='bg-success'>Created Successfully</div>"+data);
                //location.reload();
            }
        });
    });
    $('.plink').click(function () {
        var id = $(this).attr('data-id');
         $.ajax({
            type: "POST",
            url:"functions.php",
            data:{
                getPlacementCVs:id
            },
            success:function (data) {
                 $('#cvs_main_container').html(data);
            }
        });
    });
    $('.updatePlacement').click(function () {
        var pi = $(this).attr('data-pi');
        var placemntTitle = $('input:text[name=placementTitle'+pi+']').val();
        var placementDescription = $('textarea[name=placementDescription'+pi+']').val();
        var placementSalary = $('input:text[name=placementSalary'+pi+']').val();
        var placementType = $('input:text[name=placementType'+pi+']').val();
        var placementLocation = $('input:text[name=placementLocation'+pi+']').val();
        var placementDate = $('input:text[name=date'+pi+']').val();

        allSkills = [];
        $("input:checkbox[name=skills"+pi+"]:checked").each(function(){
            a = $(this).val();
            allSkills.push(a);
            //$('#selectCatBtn').html(a);
        });
        var myJSONText = JSON.stringify(allSkills);
        alert(myJSONText);
        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                pi:pi,
                title:placemntTitle,
                description:placementDescription,
                salary:placementSalary,
                type:placementType,
                location:placementLocation,
                date:placementDate,
                skills:myJSONText,
                updatePlacement: true
            },
            success: function (data) {
                $('#newPlacementMsg'+pi).html("<div class='bg-success'>updated Successfully"+data+"</div>");
                //location.reload();
            }
        });
    });

    $('.removePlacement').click(function () {
        var pi = $(this).attr('data-id');
        $.ajax({
            type: "POST",
            url: "functions.php",
            data: {
                removePlacement:pi
            },
            success: function (data) {
                 location.reload();
            }
        });
    });

    $("#searchTxtbox").keyup(function() {
        input = $('#searchTxtbox').val();
        $.post('searchResults.php', {
            'searchtxtBox': input
        }, function(data) {
              alert(data);
        });
    });
    $('.dropdown-submenu a.test').on("click", function(e){
        $('.dropdown-submenu a.test').next('ul').hide();
        $(this).next('ul').show();
        e.stopPropagation();
        e.preventDefault();
    });
    $('.dropdown-submenu a.test2').on("click", function(e){
        $('.dropdown-submenu a.test2').next('ul').hide();
        $(this).next('ul').show();
        e.stopPropagation();
        e.preventDefault();
    });
    var skills =[];
    var allSkills = [];
    $(".skillButton").click(function () {
        skills = [];
        var pi = $(this).children('input').attr('data-pi');
         $("#listofskills").html(' ');
        $("#skillsList").html(' ');
        $("input:checkbox[name=skills"+pi+"]:checked").each(function(){
            a = $(this).val();
            skills.push(a);
            //$('#selectCatBtn'+pi).html(a);
        });
         $("#listofskills").html('<li>' + skills + '</li>' + '<br/>');
        $( "#skillsList"+pi ).html('');
        $.each(skills, function( index, value ) {
            $( "#skillsList"+pi ).append('<div class="theSkill">' + value + '</div>');
         });
        allSkills = skills;
         skills = [];
    });

    $('#searchPlacement').click(function () {
        allSkills = [];
        $("input:checkbox[name=skills]:checked").each(function(){
            a = $(this).val();
            skills.push(a);
            $('#selectCatBtn'+pi).html(a);
        });
        //var placementSearchBox = $("input[name=searchtxtBox]").val();
        var myJSONText = JSON.stringify( allSkills );
        var placementType = $("select[name=type]").val();
        var placementLocation = $("select[name=location]").val();
        /*$.ajax({
            type: "POST",
            url: window.location.href,
            data: {
                s : myJSONText,
                type : placementType,
                location : placementLocation,
                searchPlacement : true
            },
            success: function(data) {
                $('body').html(data);
            }
        });*/
        $('#skillsInput').val(myJSONText);
        $('#filterForm').submit();
    });

    $('#viewCV').click(function () {
        var id = $(this).attr('data-user');
        window.open('cv.php?viewCV='+id, '_blank');
    });

    $('#search').click(function () {
        var myJSONText = JSON.stringify( allSkills );
        var placementType = $("select[name=type]").val();
        var placementLocation = $("select[name=location]").val();
        alert(skills);
       /* $.ajax({
            type: "POST",
            url: "findJob.php",
            data: { s : myJSONText,
                type : placementType,
                location : placementLocation,
                search : true
            },
            success: function(data) {
                $('#placements').html(data);
            }
        });*/
    });
    $(".toggler").on('click',function () {
        $(this).siblings('.toggled').toggle();
       // $(this).children('.toggled').toggle();
    });

    /*typeahead*/

         $('#university').keyup(function (){
                query = $("#university").val();
                $.ajax({
                    url:'functions.php',
                    type:'POST',
                    data:'universities='+query,
                    dataType:'text',
                     success:function (data) {
                        $("#AUR").addClass("open");
                        $("#ACU").html(data);
                    }
                });
          });
    $('body').on('mouseover', '.ACUR',function(){
        a = $(this).html();
         $("#university").val(a);
        $("#AUR").removeClass("open");
    });
    $('body').on('mouseover', '.cv_lock_container',function(){
        $(this).removeClass("btn-default");
        $(this).addClass('btn-warning');
    });
    $('body').on('mouseout', '.cv_lock_container',function(){
        $(this).removeClass("btn-warning");
        $(this).addClass('btn-default');
    });

    $('#applyButton').click(function () {
        var user = $(this).attr('data-user');
         var placement = $(this).attr('data-placement');
        var message = $('#coverLetterField').val();
        alert(message);
        if (user != "undefined"){
            $.ajax({
                type: "POST",
                url: "functions.php",
                data: {
                    placement : placement,
                    message:message,
                    applyPlacement : true},
                success: function(data) {
                    $('#applyMessage').html(data);
                }
            });
        }
        else
            alert(YNTBLI + " to apply");
    })
    /*typeahead end*/
});