<template src="./template.html"></template>
<script src="./index.js">

</script>

<style scope  lang="sass" type="es6">
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
        clear:both;
    }    

    .case-menu{
        padding:12px 12px 0 12px;
        .case-list{
            padding: 12px;
            border: 2px solid #eeeeee;
            border-radius: 4px;
            background: #FFF
            h6{

                font-size:16px;
                font-weight:700;
            }
            .case-items{
                margin-top:10px;
                display:flex;
                flex-wrap:wrap;
                .case-item{
                    width:31.33%;
                    margin:0px 12px 0px 12px;
                    padding: 0 !important;
                    margin-bottom:12px;
                    height:300px;
                    border:1px solid #eeeeee;
                    border-radius:4px;
                    box-shadow: 0px 0px 1px 1px #e0e0e0;
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
                                border-radius:4px;
                                position:relative;
                                vertical-align:top;
                                img {
                                  width:100%;
                                  display:block;
                                }
                                .before{
                                    display:block;
                                    border-radius:0 8px 8px  0;
                                    position:absolute;
                                    color:#FFF;
                                    left:0px;
                                    bottom:0px;
                                    padding:0 10px;
                                    background:rgba(0,0,0,.4);
                                }
                                 .after{
                                    display:block;
                                    border-radius:0 8px 8px  0;
                                    position:absolute;
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
                         padding:10px;
                         height:148px;
                         margin-top: 13px;

                         p{
                            font-size:16px;
                            height:16px;
                            line-height:16px;
                            margin-bottom:16px;
                            span{

                               dispaly:block!important;
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
                            width:40%;
                            height:24px;
                            color:#666;
                            font-size:14px;
                            padding:0 4px;
                            line-height:24px;
                            text-align:center;
                            border:1px solid #e0e0e0;
                            border-radius:14px;
                                a{ display: inline-block;
                                    text-align: center;
                                    font-size: 14px;
                                    color: #333;
                                    text-decoration:none;
                            }
                         }
                         .userifo{
                             margin-top:25px;
                            img{
                                display:block;
                                width:40px;
                                height:40px;
                                background:red;
                                border-radius:50%;
                                vertical:middle;
                            }
                            span{
                               display:block;
                               font-size:14px;
                               height:40px;
                               text-align:center;
                               line-height:40px;
                               color:#999;
                               margin-left:14px;

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






















