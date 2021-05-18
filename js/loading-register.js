// JavaScript Document
//<script type="text/javascript">
		window.onload = function (){
//			登录注册
			var btn1 = document.getElementById('btn1'),
				btn2 = document.getElementById('btn2');
			
			btn1.onclick = function (){
				loading.style.display = 'none';
				register.style.display = 'block';
			};
			btn2.onclick = function (){
				loading.style.display = 'block';
				register.style.display = 'none';
			};
		}
//	</script>