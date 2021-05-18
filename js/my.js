// JavaScript Document
//<script type="text/javascript">
		window.onload = function (){
			var oBox1 = document.getElementById('box_r1'),
				oBox2 = document.getElementById('box_r2'),
				oBox3 = document.getElementById('box_r3'),
				oNav = document.getElementById('h_nav'),
				oA1 = oNav.getElementsByTagName('a')[0],
				oA2 = oNav.getElementsByTagName('a')[1],
				oA3 = oNav.getElementsByTagName('a')[2];
			
			oA1.onclick = function (){
				oA1.className = 'h_nav';
				oA2.className = '';
				oA3.className = '';
				oBox1.style.display = 'block';
				oBox2.style.display = 'none';
				oBox3.style.display = 'none';
			};
			oA2.onclick = function (){
				oA1.className = '';
				oA2.className = 'h_nav';
				oA3.className = '';
				oBox1.style.display = 'none';
				oBox2.style.display = 'block';
				oBox3.style.display = 'none';
			};
			oA3.onclick = function (){
				oA1.className = '';
				oA2.className = '';
				oA3.className = 'h_nav';
				oBox1.style.display = 'none';
				oBox2.style.display = 'none';
				oBox3.style.display = 'block';
			};
		}
//	</script>