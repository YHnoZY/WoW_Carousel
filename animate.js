function animate(obj,target,callback){
    clearInterval(obj.act);//be careful
    obj.act = setInterval(function(){
        step = (target - obj.offsetLeft)/10;
        step = step>0? Math.ceil(step):Math.floor(step);
        if(target == obj.offsetLeft){
            clearInterval(obj.act);
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15);
};