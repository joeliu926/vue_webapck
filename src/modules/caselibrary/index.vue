<template src="./template.html"></template>


<script src="./index.js">

</script>


<style scope  lang="scss" >

.case-content{
     position:relative;
    .case-top{
        text-align:center;
        background-color: #7084f3;
        line-height: 60px;
        height: 136px;
        color: white;
        box-sizing: border-box;
        .case-top-demo{
            box-sizing:border-box;
            width:60px;
            margin-top:24px;
            margin-left: 33.3%;
            height:112px;
            font-size:14px;
            .top-img{
                width:60px;height:60px
            }

        }
    }
    .case-nav{
            background-color: #7084F3;
            border: none;
            height: 134px;
            .nav-row{
                width:100%;
                height: 134px;
                .nav-item{
                    padding-top:30px;
                    width:60px;
                    height:134px;
                    margin:0 auto;
                    height:100px;
                    div{
                        width:60px;
                        height:100px;
                        border-bottom:4px solid transparent;
                        img{
                            display:block;
                            width:60px;
                            height:60px;
                            border-radius:50px;
                            margin-bottom:10px;
                        }
                        p{
                            color:white;
                            font-size:14px;
                            text-align:center;
                        }
                    }
                    .icon-item.active{
                         border-bottom:4px solid #FFF;
                    }


                }

            }
    }
    .fl {
        float:left;
    }
    .fr{
        float:right;
    }
    .clearfix:before,
    .clearfix:after{
        content:"";
        height:0;
        line-height:0;
        visibility:hidden;
        border-radius: 15px;
        clear:both;
    }    
    .case-menu{
        padding:12px 12px 0 12px;
        .case-list{
            padding: 12px;
            border: 2px solid #eeeeee;
            border-radius: 4px;
            background: #FFF ;
            h6{

                font-size:16px;
                font-weight:700;
            }
            .case-items{
                margin-top:10px;
                display:flex;
                flex-wrap:wrap;
                .case-item:hover{ box-shadow: 0px 0px 10px #e8e8e8;
                }
                .case-item{
                    width:31.33%;
                    margin:0px 12px 0px 12px;
                    padding: 0 0 0px 0 !important;
                    border-radius:4px;
                    margin-bottom:12px;
                    height:280px;
                    border:1px solid #eeeeee;
                        // padding-bottom: 10px!important;
                    .item-info {
                       width:100%;
                      .item-top{
                         width:100%;
                         height:215px;
                         display:flex;
                            span{
                                flex:1;
                                display:block;
                                float:left;
                                position:relative;
                                vertical-align:top;
                                img {
                                  width:100%;
                                  display:block;
                                }
                                .before{
                                    display:block;
                                    width:50px;
                                    font-size:12px;
                                    text-align:center;
                                     height:20px;
                                    border-radius:0 10px 10px  0;
                                    position:absolute;
                                    color:#FFF;
                                    left:0px;
                                    bottom:0px;
                                    padding:0 10px;
                                    background:rgba(0,0,0,.4);
                                }
                                 .after{
                                    font-size:12px;
                                    display:block;
                                    width:50px;
                                    height:20px;
                                    border-radius:0 10px 10px  0;
                                    position:absolute;
                                    text-align:center;
                                    color:#FFF;
                                    left:0px;
                                    bottom:0px;
                                    padding:0 10px;
                                    background:rgba(0,0,0,.4);
                                }
                            }
                      }
                      .item-bottom{
                         box-sizing:border-box;
                         width:100%;
                        // 
                         padding:10px;
                         // height:148px;
                         margin-top: 20px;

                         p{
                            font-size:16px;
                            height:16px;
                            line-height:16px;
                            margin-bottom:20px;
                            span{

                               display:inline-block!important;
                               vertical-align:middle;
                            }
                             span.left{
                                font-size:16px;
                                font-weight:bold;
                             }
                            span.right{
                                margin-top:2px;
                                font-size:14px;
                                float:right;
                                color:#999;
                            }
                         }
                         .itemName{
                            height:24px;
                            color:#666;
                            font-size:14px;
                             float:left;
                            padding:0 4px;
                            line-height:24px;
                            text-align:center;
                            border:1px solid #e0e0e0;
                            border-radius:12px;
                                a{ display: inline-block;
                                    text-align: center;
                                    font-size: 14px;
                                    padding:0 4px;
                                    color: #333;
                                    text-decoration:none;
                            }
                         }
                         .userifo{
                             margin-top:30px;
                            img{
                                display:block;
                                width:40px;
                                height:40px;
                                border-radius:50%;
                                vertical-align:middle;
                                 margin-right:14px;
                            }
                            span{
                               display:block;
                               font-size:14px;
                               height:40px;
                               text-align:center;
                               line-height:40px;
                               color:#999;
                            }
                            span.right{
                                margin-top:2px;
                                font-size:14px;
                                float:right;
                                color:#999;
                                margin-right:14px;
                            }
                         }

                      }



                    }
                }
            }
        }
    }

}





</style>






















