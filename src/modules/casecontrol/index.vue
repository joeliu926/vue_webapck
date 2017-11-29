<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">

    .b-d{
        border: 1px solid red;
    }
    .b-s{
        box-sizing: border-box;
    }
    .i-block{
        display: inline-block;
    }
    .control-content {
        background: url("../../common/img/control-bgd.png") no-repeat;
        background-size:100% 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: absolute;
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
                background: #9083ED
            }
            .lay-right{
                margin: 30px 0;
                text-align: right;
                .end-btn{

                }
            }
        }
        .control-screan{

        }
        .control-foot{
            position: absolute;
            height: 300px;
            bottom: 0;
            width: 100%;
            color: #ffffff;
            .f-ct{
                height: 100px;
            }
            .f-item{
                background: rgba(255,255,255,0.3);
                background-color: #29295C;
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
                    margin:0 100px 0 100px;
         .img-i-ct{
             display: inline-block;
             width: 14.28%;
            .img-item{
                    width: 180px;
                    margin: 0 auto;
                width: 80%;
                    .img-l{
                        float: left;
                        width: 50%;
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


    }

</style>