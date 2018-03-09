<template src="./template.html"></template>
<script src="./index.js">

</script>

<style  lang="scss">
    .admin-caselist {
        maigin-bottom:20px;
        .f-14{
            font-size: 14px;
            color: #999999;
        }
        .fl {
            float: left;
        }
        .fr {
            float: right;
        }
        .el-button{
            box-sizing: border-box;
            padding: 8px 15px;
        }
         .el-button:hover{
             background: #9083ED;
             border: 1px solid #9083ED;
         }
        .el-button:hover span{
            color: #ffffff !important;
        }
        .el-tabs__item.is-active{
            color: #9083ED;
        }
        .el-tabs__active-bar{
            background: #9083ED;
        }
        .clearfix:before,
        .clearfix:after {
            content: "";
            height: 0;
            display: block;
            line-height: 0;
            visibility: hidden;
            clear: both;
            overflow: hidden;
        }
        .admin-lbox{  width:15%;  }
        .admin-rbox {
            height: 100%;
            width: 85%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
            float: left;
            .innerbox{
                padding-left:12px;
                padding-right:12px;
                .rbox-top{
                    /*text-indent:20px;*/
                    box-sizing: border-box;
                    padding:24px;
                    p{
                        margin-bottom:10px;
                    }
                    span{
                       /*color:#999;*/
                    }
                    .tab-ct{
                        margin:0 0 12px 0;

                        .select-btn{
                            background: #9083ED;
                            border-bottom: 1px solid #9083ED;
                        }
                        .select-btn span{
                            color: #ffffff !important;
                        }
                    }
                    .tab-bottom{

                    }
                    .review-ct{
                        padding:12px 0;
                    }
                }
                .rbox-content{
                    /*box-sizing: border-box;*/
                    padding:0px 24px 12px;
                    
                    .el-table{
                        margin-bottom:20px;
                    }

                }
                .rbox-content .el-table .cell {
                    padding:0;
                    white-space: normal;
                    word-break: break-all;
                    line-height: 24px;
                }
                .input-box{
                        width:100%;
                        position: relative;
                        margin-bottom:12px;
                        .el-input__inner{
                            margin-left:12px;
                            padding-right:40px;
                            border-color: #e0e0e0 !important;
                        }
                        .el-input__inner:hover {
                            border-color: #e0e0e0 !important;
                        }

                        .el-icon-search{
                            position: absolute;
                            width: 35px;
                            height:36px;
                            left: 190px;
                            top: 0px;
                            text-align: center;
                            color: #bfcbd9;
                            transition: all .3s;
                            cursor: pointer;
                        }

                        .el-icon-search::before{
                            line-height: 36px;
                        }
                        .selectedbox{
                             /*margin-right:30px;*/
                            a{
                                display: inline-block;
                                /*height:34px;*/
                                /*line-height: 34px;*/
                                white-space: nowrap;
                                cursor: pointer;
                                background: #fff;
                                border: 1px solid #c4c4c4;
                                color: #1f2d3d;
                                text-align: center;
                                padding: 8px 12px;
                                border-radius: 4px;
                                -webkit-box-sizing: border-box;
                                -moz-box-sizing: border-box;
                                box-sizing: border-box;
                                margin-bottom:4px;
                                margin-left:45px;
                                margin-right:10px;
                            }
                            a:hover{
                                background-color: #9083ED;
                                color:#FFF!important;
                                border: 1px solid #9083ED;
                            }
                           
                        }    
                                            
                }

                .table-content{
                    font-size: 14px;
                    .el-table th>.cell {
                        font-size: 14px;
                    }
                    div.cell{
                        font-size:14px;
                    }
                    .c-name{
                        vertical-align:middle;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;
                    }
                    .b-a-img{
                        width:30px;height:30px;vertical-align:middle; margin-right:0px;float: right;
                    }
                }
                .rbox-pagination-align {
                    text-align: right;
                    border: none;
                    padding:20px 0;

                }
                /*********查看并审核内容*********/
                .lk-review-ct{
                    padding: 0 12px;
                    .segment-title {
                        border-bottom: 1px solid #eaeaea;
                        padding: 5px 0;
                        height: 20px;
                        .s-title-l {
                            float: left;
                        }
                        .s-title-r {
                            float: right;
                            color: red;
                        }
                    }

                    .material-info-ct {
                        padding: 20px 0;
                        .row-ct {

                            .row-item {
                                display: inline-block;
                                width: 360px;
                                .row-item-title {
                                    display: inline-block;
                                    width: 80px;
                                    text-align: right;
                                    padding-right: 12px;
                                }
                                .row-item-value {
                                   min-width: 400px;
                                }
                            }
                            .addimg{
                                width:100%;
                                padding:10px 0px;
                                .fl{float: left;}
                                .dynicPic{
                                    display: inline-block;
                                    position: relative;
                                    width:240px;
                                    height:300px;
                                    border-radius: 6px;
                                    cursor: pointer;
                                    border: 1px dashed #bfcbd9;
                                    background-position: center center;
                                    background-repeat: no-repeat;
                                    background-size: 100%;
                                    margin: 5px;
                                    margin-left: 0;
                                }
                            }
                            .ltip{
                                position: relative;
                                display: inline-block;
                                margin: 0 8px 8px 0;
                                background: #9287EB;
                                padding: 0px 10px;
                                height: 25px;
                                line-height: 25px;
                                border-radius: 4px;
                                color: #ffffff;
                            }
                        }
                    }
                    .customer-info-ct{
                        text-align: center;
                        .user-img {
                            display: inline-block;
                            width: 80px;
                            height: 80px;
                            border-radius: 50%;
                            border-radius: 6px;
                            cursor: pointer;
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: 100%;
                        },
                        .u-margin{
                         margin: 5px;
                        }
                    }

                }
                /************审核end**************/

            }

        }
        .admin-lbox {
            height: 100%;
            width: 15%;
            display: inline-block;
            padding: 12px;
            box-sizing: border-box;
            float: left;

        }
    }
</style>