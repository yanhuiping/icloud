
var reminder=angular.module('reminder',[]);

reminder.controller('mainCtrl',['$scope',function($scope){
    $scope.color=['purple','green','yellow','red','brown','orange','blue'];
  /*  $scope.colors=[
        {
            id:1,
            item:'purple',
            itemzi:'新建列表1',
            lei:'il1',
            se1:'se1',
            zise:'zise1',
            yxs:'yxs1',
            ys:'ys1',
            todos:[
                {
                    id:1,
                    title:'maiche',
                    state:0
                },
                {
                    id:2,
                    title:'00',
                    state:1
                },
                {
                    id:3,
                    title:'22',
                    state:1
                },
                {
                    id:4,
                    title:'m58',
                    state:0
                }
            ]
        },
        {
            id:2,
            item:'purple',
            itemzi:'新建列表2',
            lei:'il2',
            se1:'se2',
            zise:'zise2',
            yxs:'yxs2',
            ys:'ys2',
            todos:[
                {
                    id:1,
                    title:'www',
                    state:0
                },
                {
                    id:2,
                    title:'ee',
                    state:1
                },
                {
                    id:3,
                    title:'lff',
                    state:1
                },
                {
                    id:4,
                    title:'6666',
                    state:0
                }
            ]
        },
        {
            id:3,
            item:'purple',
            itemzi:'新建列表3',
            lei:'il3',
            se1:'se3',
            zise:'zise3',
            yxs:'yxs3',
            ys:'ys3',
            todos:[
                {
                    id:1,
                    title:'www',
                    state:0
                },
                {
                    id:2,
                    title:'ee',
                    state:1
                },
                {
                    id:3,
                    title:'lff',
                    state:1
                },
                {
                    id:4,
                    title:'6666',
                    state:0
                }
            ]
        },
        {
            id:4,
            item:'purple',
            itemzi:'新建列表4',
            lei:'il4',
            se1:'se4',
            zise:'zise4',
            yxs:'yxs4',
            ys:'ys4',
            todos:[
                {
                    id:1,
                    title:'www',
                    state:0
                },
                {
                    id:2,
                    title:'ee',
                    state:1
                },
                {
                    id:3,
                    title:'lff',
                    state:1
                },
                {
                    id:4,
                    title:'6666',
                    state:0
                }
            ]
        },
        {
            id:5,
            item:'purple',
            itemzi:'新建列表5',
            lei:'il5',
            se1:'se5',
            zise:'zise5',
            yxs:'yxs5',
            ys:'ys5',
            todos:[
                {
                    id:1,
                    title:'www',
                    state:0
                },
                {
                    id:2,
                    title:'ee',
                    state:1
                },
                {
                    id:3,
                    title:'lff',
                    state:1
                },
                {
                    id:4,
                    title:'6666',
                    state:0
                }
            ]
        },
        {
            id:6,
            item:'purple',
            itemzi:'新建列表6',
            lei:'il6',
            se1:'se6',
            zise:'zise6',
            yxs:'yxs6',
            ys:'ys6',
            todos:[
                {
                    id:1,
                    title:'www',
                    state:0
                },
                {
                    id:2,
                    title:'ee',
                    state:1
                },
                {
                    id:3,
                    title:'lff',
                    state:1
                },
                {
                    id:4,
                    title:'6666',
                    state:0
                }
            ]
        },
        {
            id:7,
            item:'purple',
            itemzi:'新建列表7',
            lei:'il7',
            se1:'se7',
            zise:'zise7',
            yxs:'yxs7',
            ys:'ys7',
            todos:[
                {
                    id:1,
                    title:'www',
                    state:0
                },
                {
                    id:2,
                    title:'ee',
                    state:1
                },
                {
                    id:3,
                    title:'lff',
                    state:1
                },
                {
                    id:4,
                    title:'6666',
                    state:0
                }
            ]
        },


        
    ];*/
  /*  $scope.circle=[
        {id:1,
            lei:'cl1',
            leiid:'cll1',
            se:'se1'
        },
        {id:2,
            lei:'cl2',
            leiid:'cll2',
            se:'se2'

        },
        {id:3,
            lei:'cl3',
            leiid:'cll3',
            se:'se3'

        },
        {id:4,
            lei:'cl4',
            leiid:'cll4',
            se:'se4'

        },
        {id:5,
            lei:'cl5',
            leiid:'cll5',
            se:'se5'

        },
        {id:6,
            lei:'cl6',
            leiid:'cll6',
            se:'se6'

        },
        {id:7,
            lei:'cl7',
            leiid:'cll7',
            se:'se7'

        }
    ];*/
    $scope.colors=[{
        id:1,
        them:'purple',
        title:'新列表1',
        todos:[
            {id:1,title:'aa',state:0},
            {id:2,title:'bb',state:1},
            {id:3,title:'cc',state:0},
            {id:4,title:'dd',state:1},
        ]},
        {
            id:2,them:'green',title:'新列表2',todos:[{id:1,title:'ff',state:1}]
        }
    ]

    $scope.circle=[ {id: 1,theme:"orange"},
        {id: 2,theme:"red"},
        {id: 3,theme:"brown"},
        {id: 4,theme:"yellow"},
        {id: 5,theme:"blue"},
        {id: 6,theme:"green"},
        {id: 7,theme:"purple"}];

    $scope.change=function(t){
        $scope.current.them = t.theme;
    }
    //shanchu
    $scope.shanchu=function(dd){
        var newarr=[];
        for(var i=0;i<$scope.colors.length;i++){

            if(Number($scope.colors[i].id) !== dd){
                newarr.push($scope.colors[i]);
            }
        }
        $scope.colors=newarr;
        $scope.current=$scope.colors[0];
    }

    $scope.addstate=function(){
        var numst=0;

        angular.forEach($scope.current.todos,function(v,i){
            if(v.state==1){
                numst+=1;
            }
            // console.log(numst);
        })
        return numst;
      
    }
    $scope.current=$scope.colors[0];
    $scope.setcurrent=function(v){

        $scope.current=v;
    }
    //删除一条内容
    $scope.delete=function(id){
        $scope.current.todos=$scope.current.todos.filter(function(v,i){
            return v.id!==id;
        })
    }
    //添加到TODO中
    $scope.addtodo=function(e){
        if(e.keyCode==13){
            var max_id=0;
            angular.forEach($scope.current.todos,function(v,i){
                if(max_id<v.id){
                    max_id=v.id;
                }
            })
            var item={
                id:max_id+1,
                title:$scope.item,
                state:0,
            }
            console.log($scope.item);
            console.log($scope.current)
            $scope.current.todos.push(item);
            $scope.item='';
        }

    }
    //增加
    $scope.add=function(){
        var max_id=0;
        angular.forEach($scope.colors,function(v,i){
            if(max_id<v.id){
                max_id=v.id;
            }
        })
        var index=$scope.colors.length%7;
        var item={
            id:max_id+1,
            them:$scope.color[index],

            title:'新建列表'+($scope.colors.length+1),
            // lei:'il'+($scope.colors.length%7+1),
            todos:[]
        }
        // console.log(item)
        $scope.colors.push(item);
        

    }
    $scope.xianxian=function(){
        $('.donelist').toggle();
    }
   /* $scope.dianji=function(id){
        // $('.dlitem').addClass('active');
        console.log(id);
        angular.forEach($scope.current.todos,function(v,i){
            if(v.id==id){
                console.log(1)
                // console.log(v.them)
                $('.dlitem').eq(0).addClass('active').addClass($scope.circle[id-1].theme);
            }
        })

    }*/
}])

reminder.directive('ngColorUl',[function(){
    return {
        restrict:'AE',
        transclude:true,
        template:' <ul class="xinjianitem "><div ng-transclude></div></ul>',
        replace:true,
        link:function(scope,el){
            // console.log(1)
            // console.log(el);
            $(el).on('mousedown',false);
            $(el).find('li').eq(0).addClass('beijing');

            $(el).on('click','.item',function(){
                $('.item.beijing').removeClass('beijing bianji');
                $(this).addClass('beijing');
            })
            $(el).on('dblclick','.item',function(){
                $('.item').removeClass('bianji');
                $(this).addClass('bianji');
                $(this).find('input').focus();

            })
            $(el).on('keyup',false);
            $(document).on('keyup',function(e){
                if(e.keyCode==8){
                    var id=parseInt($(el).find('.beijing').attr('data-id'));
                    console.log(id);
                    scope.$apply(function(){
                        scope.colors=scope.colors.filter(function(v,i){
                            return v.id!=id;
                        })
                    })
                }
            })


           /* $(el).find('ul').on('click', 'li', function () {
                $(el).find('ul .active').removeClass('active');
                $(this).addClass('active')
            })*/

        }
    }
}])

reminder.directive('ngXuan',[function(){
    return{
        restrict:'AE',
        transclude:true,
        template:'<div class="xuan"><div ng-transclude></div></div>',
        replace:true,
        link:function(scope,el){

            $(el).find('.colorbox').on('click','.color1',function(){
                $('.color1').removeClass('active');
                $(this).addClass('active')
            })
            $(el).on('click',false);
            $(el).find('.xxquxiao').on('click',function(){
                $(el).hide();
            })
$(document).on('click',function(){
    $(el).hide();
})
            $(el).on('click','color1',function(){
                // $(this).addClass('')
            })
            $('.listyou').on('click',false)
            $('.listyou').on('click',function(){
                // alert(1)
                $(el).toggle();
            })
        }

    }
}])



//不用的方法
reminder.directive('colorItem',[function(){
    return{
        restrict:'AE',
        // templateUrl:'coloritem.html',
        template:'<li  class="item " data-id="{{col.id}}"> <div class="itemleft {{col.lei}} " ></div> <div class="itemright"> <span> {{col.itemzi}} </span> <input type="text" ng-model="col.itemzi" > <div class="wifi"></div> </div> </li>',
        replace:true,
        link:function(scope,el){
            $(el).on('mousedown',false);
            // console.log(el);
            $(el).parent().find('li').eq(0).addClass('beijing');
            $(el).on('dblclick','.itemright',function(){
                // console.log(1)
                $('.item').removeClass('bianji');
                $(this).closest('li').addClass('bianji');
                $(this).find('input').focus();
            })
            $(el).on('click','.itemright',function(){
                $('.item').removeClass('beijing bianji');
                $(this).closest('li').addClass('beijing');
            })
            $(el).find('input').on('blur',function(){
                $(this).closest('li').removeClass('bianji');
            })
            $(document).on('keyup',function(e){
                console.log(e.keyCode)
                if(e.keyCode==8){


                    var id=parseInt($(el).parent().find('.beijing').attr('data-id'));
                    console.log(id);
                    scope.$apply(function(){
                        scope.colors=scope.colors.filter(function(v,i){
                            return v.id!=id;
                        })
                    })
                }
            })
        }
    }
}])

$(function(){
   
    $('.brbottom').find('ul').on('click', 'li', function () {
        $('.brbottom').find('ul .active').removeClass('active');
        $(this).addClass('active')
    })
})



