<template src="./template.html"></template>

<script src="./index.js">

</script>

<style lang="scss">
 .case_base{
    .case-top{

            background: -moz-linear-gradient(360deg, #7084f3, #7a71fe);
            background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#7084f3), to(#7a71fe));
            background: -webkit-linear-gradient(360deg, #7084f3, #7a71fe);
            background: -o-linear-gradient(360deg, #7084f3, #7a71fe);

        text-align:center;
        line-height: 60px;
        height: 134px;
        color: white;
        box-sizing: border-box;
        .case-top-demo{
           box-sizing:border-box;
           width:60px;
           margin-top:22px;
           margin-left: 33.3%;
           height:112px;
           font-size:14px;

            .top-img{
                 width:60px;height:60px
            }
        }
    }
    .content{
        width:100%;
        height:80%;
        background:#fff;
        .search{
                margin-left:1.67%;
                width:98%;
                overflow: hidden;
                background:#fff;
                .case-left{
                        float:left;
                        width:11.5%;
                        margin-left: 4px;
                        margin-top:20px;
                        border-radius: 4px;
                          }
                .case-left a{
                          display: inline-block;
                          line-height: 50px;
                          height:60px;
                          width:100%;
                          font-size: 14px;
                            text-align: center;
                            background: white;
                            color: #333;
                            text-decoration:none;

                            }
                .case-left .cur{
                        background: #9083ed;
                        color: #fff;
                            }
                .right{float:right;
                        width:87.6%;
                        padding:0;
                        height:1082px;
                        margin-top:14px;
                        overflow-y:scroll
                    }
                .case-right{

                        width:92%;
                         margin-bottom:20px;
                            margin-top:6px;
                             margin-left:1.67%;
                             margin-right:1.67%;
                          padding:20px 1.67%;
                            border-radius: 4px;
                            background:white
                          }

                         .case-right-row{}
                         .el-col el-col-4{
                             margin-top:20px;
                             }
                     .case-right-col{
                        margin-bottom: 4px;
                         }
                     .case-right-col a{
                    display: inline-block;
                    text-align: center;
                    float:left;
                    font-size: 14px;
                    background: white;
                    color: #333;
                    text-decoration:none;
                    padding:3px 16px 3px 16px;
                    margin-left: 40px;
                    margin-right: 40px;
                    }
        .changecol:hover{
            color: white;
            font-size:14px;
            border-radius: 25px;
            background: #9083ed;
            padding:3px 16px 3px 16px;
    }
    .case-content{
    font-family: " 微软雅黑";


    }
    .case-title1
    {
    font-weight:bold;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
    }
    }
}
}
}
</style>
