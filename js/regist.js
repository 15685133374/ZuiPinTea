
	// https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123654

	$(function(){
		$("#regist").click(function(){
			var username = $("#phone-Num").val();
			var password = $("#regist-pwd").val();
			console.log(username,password)
			$.ajax({
				url:`https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${ username }&passwd=${ password }`,
				type:"get",
				// data:"{phone:sdfdfdf,passdfdfd}",
				success:function( res ){
					console.log(res)
					var val = res.code
					console.log(val)
					if( val ){
						console.log(val)
						switch( val ){
							case 200:
								$(".show").html(res.msg);
								window.location.href ="login.html";
								break;
							case 202:
								$(".show").html(res.msg);
								break;
							default:
								$(".show").html("其他情况");
						}
					}
				},
				error:function(err){

				}
			})
		})
	})

