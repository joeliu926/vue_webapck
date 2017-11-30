<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
.hide{
    display: none;
}
    .b-d{
        border: 1px solid red;
    }
    .b-s{
        box-sizing: border-box;
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
        background-color: rgba(0, 0,0,0.6);
        color: #ffffff;
        font-size: 14px;
    }
    .s-before{

    }
    .s-after{
        left: 50%;
    }
    .control-content {
        background: url("../../common/img/control-bgd.png") no-repeat;
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
                    }
                }
            }
        }


        .control-head{
            background-color: #17182B;
            padding: 24px;
            .scop-name{
                padding: 0 20px;
                border-left: 3px solid #9083ED;
                color: #9083ED;
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
                overflow: hidden;
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
        .control-foot{
            position: absolute;
            height: 296px;
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
            .up-icon{
                text-align: center;
                background-color: #29295C;
                .el-icon-pa-angle-double-up:before{
                    font-size: 25px;
                }
            }
            .foot-img{
                background-color: #29295C;
                height: 170px;
                .f-icon{
                    width: 60px;
                    height:170px;
                    line-height: 170px;
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
                    height: 170px;
                    margin:0 100px 0 100px;
         .img-i-ct{
             display: inline-block;
             width: 14.28%;
            .img-item{
                    width: 180px;
                    margin: 0 auto;
                    position: relative;
                    width: 80%;
                   .b-ba-img-ct{
                       position: absolute;
                       top: -15px;
                   }
                    .s-ba-cm{
                        font-size: 12px;
                        width: 50px;
                    }
                    .img-l{
                        float: left;
                        width: 50%;
                        height: 140px;
                    }
                }
            }
                    .img-item:hover{
                        transform:scale(1.2);
                        z-index: 1000000;
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
            width: 254px;
            height: 164px;
            position: relative ;
            .add-icon:hover{
                background: url("../../common/img/i-add.png") no-repeat;
                background-color:rgba(0,0,0,0.4);
                background-position: center;
            }
            .sel-img{
                width: 127px;
                height: 164px;
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
            }
            .sel-after{
                left: 50%;
            }
        }
            .select-content{
                color: #ffffff;
                padding: 0;
                margin-top: -10px;
                overflow-y: auto;
                overflow-x: hidden;
                position: absolute;
                bottom: 190px;
                top:195px;
                width: 102%;
                .sel-items-ct{
                    background-color: #17182B;
                    padding:12px 24px 12px 0;

                    overflow-y:scroll;
                    .sl-img-ct:hover{
                        transform: scale(1.1);
                    }
                    .sel-img-ct{
                        width: 254px;
                        height: 164px;
                        display: inline-block;
                        margin: 12px 26px;

                    }
                }
            }


        .btadd-ct{
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
                    transform: scale(1.2);
                    overflow: auto;
                }
                .des-img-ct{
                    display: inline-block;
                    margin:10px 20px 10px 0;
                    .des-img-item{

                        width: 170px;
                        height: 110px;
                        .des-icon:hover{
                            background: url("../../common/img/i-des.png") no-repeat;
                            background-color:rgba(0,0,0,0.4);
                            background-position: center;
                        }
                        .des-img{
                            width: 85px;
                            height: 110px;
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
    }

</style>