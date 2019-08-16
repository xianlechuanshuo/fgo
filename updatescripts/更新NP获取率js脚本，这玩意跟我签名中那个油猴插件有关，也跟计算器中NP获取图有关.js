  (function () { 
  		//打开这个网页：https://kazemai.github.io/fgo-vz/np_get.html，然后控制台运行代码，将输出的内容覆盖nps.json文件
		let result=[];
        for (let i = 0; i < svtid.options.length; i++) {
        	let opt=svtid.options[i];
        	let d=opt.value;//302000
        	let servantName=opt.innerHTML;
        	let begin=servantName.indexOf(".")+1;
        	let end=servantName.indexOf(" ");
        	let no=servantName.substring(begin,end);
        	if(no==0)continue;
        	let a=getBaseNP(d);

            // {"artHit":2,"busterHit":1,"quickHit":3,"exHit":4,"npbase":71,"npbaseA":71,"npbaseB":71,"npbaseQ":71,"npbaseEx":71,"npUp":0,"artUp":50,"busterUp":0,"quickUp":0,"npHit":5,"npType":1}            
            // if(no==132||no==142||no==133)console.log(JSON.stringify(a));//输出R小莫(npType1)、弓凛、杀师匠的np基础数据

            switch(a.npType){
                case 1:
                  a.npType="A";
                  break;
                case 2:
                  a.npType="B";
                  break;
                case 3:
                  a.npType="Q";
                  break;
            }
            if(no==46||no==47||no==48||no==52){
                console.log(`${no}：${JSON.stringify(a)}`);
                console.log(a.npType);
            }            
            //npType:1是蓝宝具、2是红宝具、3是绿宝具
        	var npObj={
        		n:no,//从者编号
        		h:a.npHit,//宝具Hit数
                         np:a.npbase/100,//宝具NP率
                         t:a.npType,

                         ah:a.artHit,//A卡Hit次数
                         anp:a.npbaseA/100,//A卡NP率

                         bh:a.busterHit,//B卡Hit次数
                         bnp:a.npbaseB/100,//B卡NP率

                         qh:a.quickHit,
                         qnp:a.npbaseQ/100,

                         exh:a.exHit,
                         exnp:a.npbaseEx/100,

                         a:a.artUp/10,//被动蓝卡BUFF
                         q:a.quickUp/10//被动绿卡BUFF
        	};
        	result.push(npObj);
        }
     
	    // result=JSON.stringify(result).replace(/\"/gi,"");
     	// console.log("var lvs="+result);
     	console.log(JSON.stringify(result));
    })();