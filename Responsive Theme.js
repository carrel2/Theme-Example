﻿$('#views_slideshow_singleframe_teaser_section_homepageimagerotator-block_1').cycle('stop');


    $('.views_slideshow_singleframe_slide').mousedown( function() {
        $('.views_slideshow_singleframe_slide').removeAttr('style');
    });


    $('.views_slideshow_singleframe_teaser_section').mousedown( function() {
        $('.views_slideshow_singleframe_teaser_section').removeAttr('style');
    });


    $('.holderfor_topnav .plantsivew_content .content_right').mousedown( function() {
        $('.holderfor_topnav .plantsivew_content .content_right').attr('style', 'float:none;');
    });


    $('#block-menu-menu-publicnavigation div.content').hover( function() {
        if($(window).width() <= 660) {
            $('#block-menu-menu-publicnavigation ul.menu').css('display', 'block');
        }
    }, function() {
        if($(window).width() <= 660) {
            $('#block-menu-menu-publicnavigation ul.menu').css('display', 'none');
        }
    });


    $('#block-menu-menu-publicnavigation div.content').click( function() {
        if($(window).width() <= 660) {
            if($('#block-menu-menu-publicnavigation ul.menu').css('display') == 'block') {
                $('#block-menu-menu-publicnavigation ul.menu').css('display', 'none');
            } else {
                $('#block-menu-menu-publicnavigation ul.menu').css('display', 'block');
            }
        }
    });


    $(window).resize( function() {
        if($(window).width() > 660) {
            $('#block-menu-menu-publicnavigation ul.menu').css('display', 'block');
        } else {
            $('#block-menu-menu-publicnavigation ul.menu').css('display', 'none');
        }
    });
