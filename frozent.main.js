     $(document).ready(function(){


        $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
                $(this).toggleClass('open');        
            },
            function() {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
                $(this).toggleClass('open');       
            });

        var regular = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        $(".sentmessages").click(function(){

            if($(".name").val()==""){
                $(".checkName").html(" không được bỏ trống.")
            }
            else{
                $(".checkName").html("")
            }




            // if($("#email").val()=="" || !regular.test($("#email").val()))
            // {
            //     $(".checkEmail").html(" không được bỏ trống.")
            // }
            // else{
            //     $(".checkEmail").html("")
            // }

            if(!regular.test($("#email").val())){
             $(".checkEmail").html("Email phải có dạng a@b.c")
            }else{
                $(".checkEmail").html("")
            }




             if($(".sdt").val()=="")
            {
                 $(".checkSDT").html(" không được bỏ trống.")
        }
        else{
            $(".checkSDT").html("")
        }
        if($('.sdt').val()>11000000000||$('.sdt').val()<1000000000){
            $(".checkSDT").html("Số điện thoại phải có 10 hoặc 11 sô.")
        }

        if($('.messages').val() == "")
        {
            $(".checkMessages").html(" không được bỏ trống.")
        }
        else{
            $(".checkMessages").html("")
        }

        if($(".name").val() != "" && $("#email").val() != "" 
                                && regular.test($("#email").val()) 
                                    && $(".sdt").val() != "" 
                                    && $(".messages").val() != ""){
            alert("sent  all information to server!")
        }
    });
        $(function() {
            $('nav#menu').mmenu({
                extensions  : [ 'fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-white' ],
                iconPanels  : true,
                counters    : true,
                keyboardNavigation : {
                    enable  : true,
                    enhance : true
                },
                searchfield : {
                    placeholder : 'Search menu items'
                },
                navbar : {
                    title : 'Advanced menu'
                },
                navbars : [
                {
                    position    : 'top',
                    content     : [ 'searchfield' ]
                }, {
                    position    : 'top',
                    content     : [ 'breadcrumbs', 'close' ]
                }, {
                    position    : 'bottom',
                    content     : [ '<a href="http://mmenu.frebsite.nl/wordpress-plugin" target="_blank">WordPress plugin</a>' ]
                }
                ]
            }, {
                searchfield : {
                    clear : true
                }
            });
        });
        
    });