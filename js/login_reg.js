/**
 * Created by Administrator on 2018/10/22.
 */



        $(".username").blur(function () {
            var val1=$(".username").val()
            var reg_email = /^\w+@[0-9A-z]+\.[A-z]+$/g
            var reg_username=/^1[345678]\d{9}/g

            if(reg_username.test(val1)||reg_email.test(val1)){
                $(".result1").html("输入正确")
                $(".result1").css({
                    "color":"blue"
                })

            }else{
                $(".result1").html("输入错误")
                $(".result1").css({
                    "color":"red"
                })
            }

        })
        $(".password").blur(function () {
            var val2=$(".password").val()
            var reg_password=/^[a-z]{1,}\d{5,}/
            if(reg_password.test(val2)){
                $(".result2").html("输入正确")
                $(".result2").css({
                    "color":"blue"
                })

            }else{
                $(".result2").html("输入错误")
                $(".result2").css({
                    "color":"red"
                })
            }

        })




