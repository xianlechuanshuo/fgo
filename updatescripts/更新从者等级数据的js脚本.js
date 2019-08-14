    (function () { 
    	//打开这个网页：http://kazemai.github.io/fgo-vz/svtData.html?no=200，控制台运行代码，然后拷贝输出内容覆盖lvs.js
		let result=[];
        for (let i = 0; i < svtid.options.length; i++) {
        	let opt=svtid.options[i];
        	let d=opt.value;//302000
        	//获取no：119
        	//No.119 阿爾托莉亞・潘德拉剛
        	let servantName=opt.innerHTML;
        	let begin=servantName.indexOf(".")+1;
        	let end=servantName.indexOf(" ");
        	let no=servantName.substring(begin,end);
        	if(no==0)continue;

        	let h,m,n;
        	//1.得到h
        	for(h=0;h<master.mstSvt.length;h++){
        		if(master.mstSvt[h].id==d) {
        			//1.得到h
					break;
        		}
        	}

        	//2.得到m					
			for(m=master.mstSvtLimit.length-1;m>=0;m--){
				if (master.mstSvtLimit[m].svtId == d) {
					// console.log(`master.mstSvtLimit[${m}].svtId == ${d}`)
					break;
				}
			}

	        for (let a = 0; a <100; a++) {
				//3.得到n 
				for (n = 0; n < master.mstSvtExp.length; n++) {
					if (master.mstSvt[h].expType == master.mstSvtExp[n].type && master.mstSvtExp[n].lv == a + 1) {
						//4.计算每级的atk和hp
			        	let lvModel={
			        		n:no,
			        		// d:d,//302000
			        		l:a+1,
			        		a:Math.floor(master.mstSvtLimit[m].atkBase+(master.mstSvtLimit[m].atkMax - master.mstSvtLimit[m].atkBase) * master.mstSvtExp[n].curve / 1E3),
			        		h: Math.floor(master.mstSvtLimit[m].hpBase + (master.mstSvtLimit[m].hpMax - master.mstSvtLimit[m].hpBase) * master.mstSvtExp[n].curve / 1E3)
			        	}
			        	result.push(lvModel);
	            	 	break;
					}
				}

	        }	
	    }      
	    result=JSON.stringify(result).replace(/\"/gi,"");
        console.log("var lvs="+result);
    })();