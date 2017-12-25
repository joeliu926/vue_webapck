<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .admin-product {
        .cur{
            background: #9083ed;
            color: #fff;
            cursor:pointer;
        }
        .fram-box {
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
        }

        .admin-lbox {
            width: 17%;
        }
        .admin-rbox{width: 82%;

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
                        .productCount{float:right;margin-top: 10px;margin-right:10px ;}
                        display: inline-block;
                        line-height: 60px;
                        height:60px;
                        width:100%;
                        font-size: 14px;
                        text-align: center;
                        background: white;
                        color: #333;
                        text-decoration:none;
                        cursor:pointer;

                    }
                    .case-left .cur{
                        background: #9083ed;
                        color: #fff;
                        cursor:pointer;
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

                    }
                    .case-right-col a{
                        display: inline-block;
                        text-align: center;
                        float:left;
                        height:px;
                        font-size: 14px;
                        margin-bottom: 5px;
                        background: white;
                        color: #999999;
                        text-decoration:none;
                        padding:2px 10px;
                        margin-left: 0px;
                        margin-right: 40px;
                        cursor:pointer;
                    }
                    .case-right-col .changecol{
                        color: white;
                        margin-bottom: 5px;
                        font-size:14px;
                        border-radius: 4px;
                        background: #9083ed;
                        padding:2px 10px;
                        cursor:pointer;
                        height:px;
                    }
                    .case-content{

                    }
                    .case-title1
                    {
                        font-weight:bold;
                    }
                    .select{font-size: 14px !important;float:right;margin-right: 10px; cursor:pointer;}
                    .el-row {
                        margin-bottom: 20px;
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }}
    }
    </style>