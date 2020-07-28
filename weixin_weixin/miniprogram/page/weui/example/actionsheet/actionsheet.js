import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'actionsheet',
            path:'page/weui/example/actionsheet/actionsheet'
        };
    },
    open:function(){
        wx.showActionSheet({
            itemList:[
                'A',
                'B',
                'C'
            ],
            success:function(res){
                if(!res.cancel){
                    console.log(res.tapIndex);
                }
            }
        });
    },
    data:{
        showDialog:false,
        groups:[
            {
                text:'示例菜单',
                value:1
            },
            {
                text:'示例菜单',
                value:2
            },
            {
                text:'负向菜单',
                type:'warn',
                value:3
            }
        ]
    },
    openDialog:function(){
        this.setData({
            showDialog:true
        });
    },
    closeDialog:function(){
        this.setData({
            showDialog:false
        });
    },
    btnClick:function(e){
        console.log(e);
        this.closeDialog();
    }
});
