/**
 * Created by ahmed on 20/01/18.
 */

$(document).ready(function () {
    $('.addToBas').click(function(){
        var bookId = $(this).attr("data-id");


            $.post('/collection/add', {
                'datalist' : true,
                'bookId': bookId
            }, function(data) {
                alert(data);
             });

    });

    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };

    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        $("#form_rate").val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();
    $(document).ready(function() {

    });
})