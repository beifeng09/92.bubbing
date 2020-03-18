(function(w, d){
			// 获取泡沫
			var bubbles = d.querySelector('.bubbles');
			// 获取泡沫宽度
			var bubblesWidth = bubbles.clientWidth;
			// 获取泡泡数
			var num = bubbles.getAttribute('num');
			// 获取持续时间
			var duration = bubbles.getAttribute('duration');

			// 起泡
			bubbleUP();
			// 设置间隔（冒泡，持续时间*1000）；
			setInterval(bubbleUP, duration * 1000);



			// 定义 起泡
			function bubbleUP(){
				// 泡泡添加到显示屏上
				bubbles.innerHTML= '';
				// 循环泡泡
				for(var i= 0;i<num;i++){
					// 创建div
					var bubbleDiv = d.createElement('div');
					// 类列表添加泡泡
				    bubbleDiv.classList.add('bubble');
				    // 创建的div样式
				    // 转换：旋转 起泡宽度随机  规模随机
				    // 动画 持续时间随机  轻松进出
				    bubbleDiv.style.cssText = `
				    
				    	transform: translate(${bubblesWidth * Math.random()}px,0) scale(${5 * Math.random()});
				    	
				    	animation: up ${duration * Math.random() + 1}s ease-in-out;
				    `
				    // 把bubbles 添加到 创建的div上
				    bubbles.appendChild(bubbleDiv);
				};
			};
			// 窗口文档
		})(window,document);
