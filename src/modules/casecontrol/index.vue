<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">

    .control-content {
        background: url("../../common/img/tv/play.png") no-repeat;
        background-size:100% 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
        overflow: hidden;
        .layout-ct{
             color: #ffffff;
            font-size: 16px;
            .lay-row{
                .lay-left{
                    width:100px;
                    float:left;
                    padding: 10px;
                }
                .lay-items{
                    margin:0 150px 0 100px;
                    .lay-item{
                        display: inline-block;
                        margin: 10px 20px;
                        cursor: pointer;
                        padding: 2px 20px;
                        border-radius: 14px;
                    }
                }
                .lay-right{
                    width:150px; float:right; padding: 10px;
                    .lay-btn{
                        color: #ffffff;
                        background-color: #9083ED;
                        font-size: 16px;
                        border-radius: 5px;
                        padding: 8px 20px;
                        cursor: pointer;
                    }
                }
            }
        }


        .control-head{
            background-color: #17182B;
            box-sizing: border-box;
            padding: 24px 24px 0 24px;
            max-height:20%;
            width: 102%;
            overflow-y: scroll;
            .scop-name{
                padding: 0 20px;
                border-left: 3px solid #9083ED;
                color: #9083ED;
                box-sizing: border-box;
            }
            .h-item:hover{
                background: #9083ED;
            }
            .current-item{
                background: #9083ED;
            }
            .lay-right{
                margin: 30px 0;
                text-align: right;
                .end-btn{

                }
            }
        }
        /*************中间显示部分start*************/
        .control-screan{
            .s-position{
                position: absolute;
                top:43%;
            }
            .s-icon{
                cursor: pointer;
            }
            .s-icon:hover{
                transform:scale(1.2);
            }
            .s-left-icon{
              left: 120px;
            }
            .s-right-icon{
                right: 120px;
            }
            .s-content{
                width: 588px;
                height:380px;
                top:50%;
                left: 50%;
                margin-left:-294px;
                margin-top:-225px;
                border-radius: 4px;
                .s-time-ct{
                    height:25px;
                    width: 100%;
                    position: absolute;
                    top:-25px;
                    text-align: center;
                    color: #ffffff;
                    font-size: 14px;
                }
                .s-img-ct{
                    width:100%;
                    height:100%;
                    position: relative;
                    .img-s{
                        width: 50%;
                        height: 100%;
                        float: left;
                    }
                }
            }

        }

        /*************中间显示部分结束*************/



        .control-screan-wating{
            width:100%;
            height:100%;
            position: relative;
            text-align:center;
            overflow:hidden;
            display:none;
            .hold_circle {
                left:25%;
                width: 50%;
                height: 50%;
                position: absolute;
                background-image: url(./../../common/img/tv/con-circle.png);
                background-size: cover;
                background-position: center;
                display: flex;
                justify-content: center;
                align-items: center;
                -webkit-transition-property: -webkit-transform;
                -webkit-transition-duration: 1s;
                -moz-transition-property: -moz-transform;
                -moz-transition-duration: 1s;
                -webkit-animation: rotate 3s linear infinite;
                -moz-animation: rotate 3s linear infinite;
                -o-animation: rotate 3s linear infinite;
                animation: rotate 3s linear infinite;
            }
            @-webkit-keyframes rotate {
                from {
                    -webkit-transform: rotate(0deg)
                }
                to {
                    -webkit-transform: rotate(360deg)
                }
            }

            @-moz-keyframes rotate {
                from {
                    -moz-transform: rotate(0deg)
                }
                to {
                    -moz-transform: rotate(359deg)
                }
            }

            @-o-keyframes rotate {
                from {
                    -o-transform: rotate(0deg)
                }
                to {
                    -o-transform: rotate(359deg)
                }
            }

            @keyframes rotate {
                from {
                    transform: rotate(0deg)
                }
                to {
                    transform: rotate(359deg)
                }
            }
            .hold_play {
                left:25%;
                width: 50%;
                height: 50%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
            .play {
                width: 10%;
                border-radius: 10px;
            }
            }
        }


        /*********连接大屏 start***********/
        .pop-connect{
            z-index: 1001;
            .cn-middle{
                height:100px;position: relative;top:50%;margin-top:-50px;box-sizing: border-box;padding: 0 20px;
                width:600px;
                .cn-close{
                    height: 30px;width: 30px;position: absolute;right: 0px;top:-25px;cursor: pointer;
                }
                .co-state{
                    text-align: center;
                    img {
                        height: 30px;
                        width: 30px;
                        border-radius: 10px;

                    }
                    span{
                        color:#fff;
                        line-height: 30px;
                        margin-left: 10px;;
                    }
                }

            .cn-item {
                margin: 0 6px;
                height: 80px;
                width: 80px;
                display: inline-block;
                box-sizing: border-box;
                    .cn-input {
                        height: 80px;
                        width: 80px;
                        text-align: center;
                        border: none;
                        font-size: 30px;
                        border-radius: 5px;
              /*          background: transparent;
                        border: 1px solid #fff;
                        color:#fff;*/
                    }
                }
            }
        }
        /*********连接大屏 end***********/

        .control-foot{
            position: absolute;
            height: 246px;
            bottom: 0;
            width: 100%;
            color: #ffffff;
            .f-ct{
                height: 100px;
                .bt-items{
                    margin: 0 150px 0 150px !important;
                }
                .bt-left{
                    width: 150px;
                    padding-left: 40px;
                }
                .bt-btn{
                    border-radius: 18px !important;
                    padding: 7px 18px !important;
                    font-size: 14px !important;
                    .bt-icon{
                        height: 25px;
                        width: 25px;
                    }
                }
                .bt-icon{
                    width: 26px;
                    height:26px;
                    vertical-align: middle;
                }
            }
            .f-item{
                background: #595985;
                 font-size: 14px;
            }
            .foot-img{
                background-color: #29295C;
                height: 150px;
                .f-icon{
                    width: 60px;
                    height:150px;
                    line-height: 150px;
                    box-sizing: border-box;
                    padding:0 40px;
                }
                .f-left-icon{
                     text-align: left;
                    }
                .f-right-icon{text-align:right;}
                .img-ct{
                    white-space:nowrap;
                    overflow: hidden;
                    padding-top: 10px;
                    height: 150px;
                    margin:0 100px 0 100px;
                     .img-i-ct{
                         display: inline-block;
                         width: 14.28%;
                        .img-item{
                                width: 160px;
                                margin: 0 auto;
                                position: relative;
                                width: 80%;
                               .b-ba-img-ct{
                                   position: absolute;
                                   top: -15px;
                                   cursor: pointer;
                                   .i-video-icon{
                                       background: url("../../common/img/i-video.png") no-repeat;
                                       background-color:rgba(0,0,0,0.4);
                                       background-position: center;
                                      /* transform:scale(1.1);*/
                                   }
                               }
                                .s-ba-cm{
                                    font-size: 12px;
                                    width: 50px;
                                }
                                .img-l{
                                    float: left;
                                    width: 50%;
                                    height: 120px;
                                }
                            }
                        }
                    .img-item:hover{
                        transform:scale(1.1);
                        z-index: 1000;
                        position: relative;
                        top: -10px;
                    }
                }
            }
        }

       /**********************選擇框 start**************************/
        .add-case{
            position: absolute;
            top:0;
            bottom: 0;
            left: 0;
            right:0;
            cursor:pointer;
        }

        .des-img-icon{
            margin-left:-15px;
            margin-top:-15px;
            height: 30px;
            width: 30px;
        }
        .sel-img-item{
            width: 240px;
            height: 154px;
            position: relative ;
            .add-icon:hover{
                background: url("../../common/img/i-add.png") no-repeat;
                background-color:rgba(0,0,0,0.4);
                background-position: center;
            }
            .sel-img{
                width: 120px;
                height: 154px;
                float: left;
            }
            .sel-ba-cm{
                position: absolute;
                bottom: 0;
                width: 65px;
                text-align: center;
                border-radius: 0 8px 8px 0;
                background-color: rgba(0, 0,0,0.6);
                color: #ffffff;
                font-size: 14px;
            }
            .sel-before{
                left: 0;
                background-color: rgba(43, 48, 93, 0.48);
            }
            .sel-after{
                left: 50%;
                background-color: rgba(43, 48, 93, 0.48);
            }
        }
            .select-content{
                z-index: 10;
                color: #ffffff;
                background-color: #17182B;
                padding: 0;
                margin-top: -10px;
                overflow-y: auto;
                overflow-x: hidden;
                position: absolute;
                bottom: 192px;
               /* top:165px;*/
                top:160px;
            /*    width: 102%;*/
                border-top: 2px solid transparent;
                .sel-items-ct{
                    background-color: #17182B;
                    padding:12px 24px 12px 0;

                    overflow-y:hidden;
                    .sl-img-ct:hover{
                        transform: scale(1.1);
                    }
                    .sel-img-ct{
                        width: 218px;
                        height: 143px;
                        display: inline-block;
                        margin: 14px 26px;

                    }
                }
            }


        .add-up-icon{
            z-index: 10;
            position: absolute;
            height: 35px;
            background: #17182B;
            width: 100%;
            text-align: center;
            bottom: 190px;
            .el-icon-pa-angle-up:before{
                font-size: 36px;
                color: #ffffff;
                position: relative;
                bottom: 5px;
                cursor: pointer;
            }
        }
        .btadd-ct{
            z-index: 10;
            position: absolute;
            padding:12px 24px;
            bottom: 0;
            width: 100%;
            background:#2A2C5E;
            white-space:nowrap;
            .des-items-ct{
                width: 100%;
                overflow: hidden;
                .des-img-ct:hover{
                    transform: scale(1.1);
                    overflow: auto;
                }
                .des-img-ct{
                    display: inline-block;
                    margin:10px 20px 10px 0;
                    .des-img-item{

                        width: 192px;
                        height: 124px;
                        .des-icon:hover{
                            background: url("../../common/img/i-des.png") no-repeat;
                            background-color:rgba(0,0,0,0.4);
                            background-position: center;
                        }
                        .des-img{
                            width: 96px;
                            height: 124px;
                        }
                        .des-ba-cm{

                        }
                        .des-before{

                        }
                        .des-after{

                        }
                    }
                }
            }
        }
        /**********************選擇框 end**************************/
        /**********************结束咨询对话框 start**************************/
        .end-dialog{
            background: rgba(0,0,0,0.5);
            position: fixed;
            top:0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            .dialog-ct{
                position: absolute;
                width: 600px;
                height: 350px;
                background: #ffffff;
                top:50%;
                left: 50%;
                margin-top:-200px;
                margin-left: -300px;
                border-radius: 4px;
                .end-close{
                   width: 30px;
                    height: 30px;
                    position: absolute;
                    right: -30px;
                    top:-22px;
                    cursor: pointer;
                }
                .tab-head{
                    width: 100%;
                    height: 50px;
                    box-sizing: border-box;
                    background:#9083ED;
                    border-radius: 4px 4px 0 0;
                    .tab-item{
                        cursor: pointer;
                        position: relative;
                        display: inline-block;
                        width: 32%;
                        font-size: 14px;
                        height: 400px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        color: #ffffff;
                        .tab-angle{
                            width: 0;
                            height: 0;
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-bottom: 8px solid #ffffff;
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            margin-left: -10px;
                        }
                    }
                }
                .tab-content{
                    padding: 24px 48px;
                    .tab-ct-item{
                        .is-checked{
                            .el-checkbox-button__inner{
                                background-color:#9083ED;
                                box-shadow: -1px 0 0 0 #9083ED;
                                border-color: #9083ED;
                            }
                        }
                      .el-checkbox-button{
                          margin: 10px;
                          .el-checkbox-button__inner{
                              padding: 5px 24px;
                              border-radius: 12px;
                          }
                      }
                        .search-ct{
                            width: 250px;
                           /* margin: 40px auto;*/
                            margin: 30px auto 6px;
                            position: relative;
                            .el-input__inner{padding-left: 30px;}
                            .el-icon-search{
                                left: 0;
                            }
                            .end-reason-input{
                                width: 350px;
                                text-align: center;
                                margin-left: -30px;
                                .el-input__inner{
                                    padding-left: 20px;
                                }
                            }
                        }
                        .set-date-ct,.set-date-remark{
                            padding: 3px 5px;
                            width: 360px;
                          /*  margin: 40px auto;*/
                            margin: 30px auto 5px;
                            border:1px solid #bfcbd9;
                            .lb-date{
                                font-size: 16px;
                                color: #999999;
                            }
                            .el-input__inner{border: none;}
                            .el-input{
                                width: 250px;
                                display: inline-block;
                            }
                        }
                        .set-date-remark{
                            .el-input__inner{width: 320px;}
                        }
                        .error-ct{
                            width: 100%;height: 40px;position: relative;
                            .err-tips{
                                width: 250px;margin: 0 auto;
                            }
                        }
                    }
                    .snext{

                    }
                }
              .tab-foot{
                  width: 100%;
                  position: absolute;
                  bottom: 24px;
                  text-align: center;
              }
            }
            .scan-ct{
                height: 600px;
                width: 338px;
                margin-top: -300px;
                margin-left: -169px;
                border-radius: 10px;
                background-color: transparent;
                .scan-arr{
                    position: absolute;
                    top:50%;
                    margin-top: -40px;
                    cursor: pointer;
                    .arr{
                        width: 20px;
                        height: 40px;
                    }
                    .el-icon-arrow-left:before, .el-icon-arrow-right:before{
                        font-size: 40px;
                        color: rgba(0,0,0,0.7);
                    }
                }
                .scan-right{
                    right: 0;
                }
                .scan-pic-ct{
                    height: 100%;
                    width:100%;
                    .scan-pic{
                      /*  height: 100%;*/
                        width: 100%;
                        border-radius: 8px;
                    }
                }
            }

        }
        /**********************结束咨询对话框 end**************************/

        /**********************客户信息 start**************************/
        .customer-open{
            position: absolute;
            background: #9083ED;
         /*   top: 220px;*/
            top:22%;
            width: 14px;
            padding:8px 10px;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
            margin:0 auto;
            line-height:14px;
            text-align: center;
        }
        .el-icon-pa-angle-double-right:before{
            font-size: 20px;
        }
        .mask{
            position: fixed;
            top:0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0.4);
            z-index: 1000;
        }

        .customer-ct{
            width:320px;
            position: absolute;
            background: #ffffff;
           /* top: 220px;*/
            top:22%;
            padding: 12px;
            bottom: 0;
            transition: left 1s;
            z-index: 1001;
            .customer-db-arr{
                text-align: right;
                .el-icon-pa-angle-double-left:before{
                    font-size: 30px;
                    color:#9083ED;
                    cursor: pointer;
                }
            }
            .c-ct{
                margin: 0 12px;
                .title{
                    font-size: 14px;
                    color: #666666;
                }
            }
            .info-content{
                padding: 14px;
                border: 1px solid #eaeaea;
                margin: 12px 0;
                .el-date-editor{width: 166px;}
                .info-item{
                    margin-bottom: 10px;
                    font-size: 14px;
                    .info-trend{
                        display: inline-block;
                        font-size: 14px;
                        color: #666666;
                        width: 160px;
                        word-break: keep-all;
                        .lit-img{
                            margin-right: 10px;
                            margin-bottom: 5px;
                            cursor: pointer;
                        }
                        .lit-project{
                            background-color: #EFEDFF;
                            color: #B6B0EA;
                            border-radius: 10px;
                            padding: 2px 10px;
                            display: inline-block;
                            margin-bottom: 5px;
                        }
                    }
                    .lb-name{
                        vertical-align: top;
                        color: #666666;
                        width: 65px;
                        display: inline-block;
                    }
                    .cust-input,.el-input{
                        display: inline-block;
                        width: 166px;
                        vertical-align: top;
                    }

                    .el-input__inner{
                        border-top: none;
                        border-left: none;
                        border-right: none;
                    }
                    .save-btn{
                        background:#9083ED;
                        color: #ffffff;
                        border-color:#9083ED;
                    }
                }

            }
        }


        /**********************客户信息 end**************************/


        /**********************浏览图片 start**************************/


        /**********************浏览图片 end***************************/


        /**********************common start*********************/
        .hide{
            display: none;
        }
        .b-d{
            border: 1px solid red;
        }
        .b-s{
            box-sizing: border-box;
        }
        .cur{
            cursor: pointer;
        }
        .i-block{
            display: inline-block;
        }
        .s-ba-cm{
            position: absolute;
            bottom: 0;
            width: 65px;
            text-align: center;
            border-radius: 0 8px 8px 0;
            background-color:rgba(43, 48, 93, 0.48);
            color: #ffffff;
            font-size: 14px;
        }
        .s-after{
            left: 50%;
        }
        .common-pos-middle{
            position: absolute;  height: 300px;  width: 700px;  top:50%;  left:50%;  margin-top: -150px;margin-left: -350px;box-sizing: border-box;
        }
        /**********************common end***********************/


    }
@media screen and (max-width: 1424px) and (min-width: 860px)    {
    .control-content .control-screan .s-content {
        width: 508px;
        height: 328px;
        top: 50%;
        left: 50%;
        margin-left: -254px;
        margin-top: -164px;
    }
}
@media screen and (max-width: 860px)   {
    .control-content .control-screan .s-content {
        width: 400px;
        height: 258px;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -129px;
    }
}
</style>