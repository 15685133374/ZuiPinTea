
    $(function () {
        $("#phone-Num").blur(function () {
            var val1=$("#phone-Num").val()
            var reg_phone=/^1[345678]\d{9}/g
            if(reg_phone.test(val1)){
                $(".ck1").html("输入正确")
                $(".ck1").css({
                    "color":"blue"
                })

            }else{
                $(".ck1").html("输入错误")
                $(".ck1").css({
                    "color":"red"
                })
            }

        })
        $("#regist-pwd").blur(function () {
            var val1=$("#regist-pwd").val()
            var reg_phone=/^[a-z]{1,}\d{5,}/g
            if(reg_phone.test(val1)){
                $(".ck2").html("输入正确")
                $(".ck2").css({
                    "color":"blue"
                })

            }else{
                $(".ck2").html("输入错误")
                $(".ck2").css({
                    "color":"red"
                })
            }

        })
        $("#regist-pwd-sure").blur(function () {
            var val1=$("#regist-pwd-sure").val()
            var val2=$("#regist-pwd").val()
            if(val1==val2){
                $(".ck3").html("密码正确")
                $(".ck3").css({
                    "color":"blue"
                })

            }else{
                $(".ck3").html("两次输入密码不一致，请重新输入")
                $(".ck3").css({
                    "color":"red"
                })
            }

        })

    })
