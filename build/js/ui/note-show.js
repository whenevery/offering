WY.bind('note-show',function(options){
   var $content = $(options.content);
   var allTime = Date.now() + (options.allTime || 5000);
   var count = options.count || 2;
   var width = $content.width(),showWidth=1000;
   var height = $content.height();
   var minX = (width - showWidth)/2;
   var maxX = minX + showWidth;
   var notes = [];
   function down(){
       if(notes.length){
           notes.forEach(function(a , i){
               a.top = a.top + a.speed;
               if(a.top > height){
                   notes.splice(i,1);
                   a.img.remove();
               }
               else a.img.css({
                   top:a.top
               });
           });
           requestAnimFrame(down)
       }
   }
   var createTime;
   function create(){
       if(Date.now() < allTime){
           if(createTime)createTime--;
           else{
               createTime = 5;
               for(var i=0;i<count;i++)createOne();
           }
           requestAnimFrame(create)
       }else{
           options.done && options.done();
       }
   }
   function createOne(){
       var r = Math.random()*showWidth;
       var x = minX + Math.ceil(r);
       var speed = 5 || Math.random() * 100;
       var $img = $('<img src="/images/animate/note.jpg" class="width-60 position-absolute z-index-10 transform-rotate-90">');
       $content.append($img.css({
           left:x
       }));
       notes.push({
           top:-20,
           img:$img,
           speed:speed
       });
   }
    create();
    down();
});