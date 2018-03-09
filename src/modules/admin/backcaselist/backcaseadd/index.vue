<template src="./template.html"></template>
<script src="./index.js">

</script>

<style  lang="scss">
    .admin-caseadd {
        .fl {
            float: left;
        }
        .fr {
            float: right;
        }
        .hide{
            display: none !important;
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
        .b-d{border: 1px solid red;}
        .i-must{
            color: #ff0000;
            padding: 5px;
        }
        .f-14{
            font-size: 14px;
            color: #999999;
        }
        .f-16{
            font-size: 16px;
            color: #333333;
        }
        .fram-box{
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            padding:12px;
            vertical-align: top;
        }
        .admin-rbox {
            /*height: 100%;*/
            width: 85%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
            /*float: left;*/
            .segment-title{
                border-bottom: 1px solid #eaeaea;
                padding: 5px 0;
                height: 20px;
                .s-title-l{
                    float: left;
                }
                .s-title-r{
                    float: right;
                    color: red;
                }
            }
            .case-record{
                .record-text-ct{
                    padding: 24px 0;
                    border-bottom: 1px solid #eaeaea;
                    .sel-title{
                        font-size: 14px;
                        color: #999999;
                    }
                    .org-name{
                        font-size: 16px;
                        color:#333333;
                        margin-top: 10px;
                    }
                }
                .case-edit-ct{
                    text-align: center;
                    padding: 24px;
                }
            }
            .case-info-ct{

                padding: 20px 0;
                .row-ct {
                    padding: 10px;
                    .row-item {
                       /* display: inline-block;*/
                        width: 300px;
                        .row-item-title {
                            display: inline-block;
                            width: 80px;
                        }
                        .row-item-value {
                            width: 200px;
                        }
                        .major-project {
                            word-break: keep-all;
                            width: 480px;
                            display: inline-block;
                            padding-left: 84px;
                            box-sizing: border-box;
                            .i-close-p {
                                position: absolute;
                                top: -5px;
                                right: -5px;
                                border-radius: 15px;
                                cursor: pointer;
                            }
                            .el-icon-pa-close:before {
                                color: #cc0000;
                            }
                            .goodat {
                                position: relative;
                                display: inline-block;
                                margin: 0 8px 8px 0;
                                background: #9287EB;
                                padding: 3px 10px;
                                border-radius: 4px;
                                color: #ffffff;
                            }
                        }
                    }
                    .logo-ct {
                        width: 500px;
                        position: relative;
                        /*  background: url("../../../../common/img/i-add.png") no-repeat;*/
                        .up-logo {
                            width: 100px;
                            height: 100px;
                            /*margin-right: 8px;*/
                            /* cursor: pointer;*/
                        }
                        .uploader-ct {
                            display: inline-block;
                            width: 100px;
                        }
                        .uploader-ct .el-upload {
                            border: 1px dashed #d9d9d9;
                            border-radius: 6px;
                            cursor: pointer;
                            position: relative;
                            overflow: hidden;
                        }
                        .uploader-ct .el-upload:hover {
                            border-color: #409EFF;
                        }
                        .avatar-uploader-icon {
                            font-size: 28px;
                            color: #8c939d;
                            width: 100px;
                            height: 100px;
                            line-height: 100px;
                            text-align: center;
                        }
                        .format-ct {
                            display: inline-block;
                            vertical-align: bottom;
                            width: 250px;
                        }
                        .doctor-img {
                            display: inline-block;
                            width: 60px;
                            height: 60px;
                            border: 1px dashed #bfcbd9;
                            border-radius: 6px;
                            cursor: pointer;
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: 100%;
                        }

                    }
                }
            }
            .picture-box{
                .before-box{
                    .doctor-img{
                        display: inline-block;
                        width:178px;
                        height:178px;
                        border: 1px dashed #bfcbd9;
                        border-radius: 6px;
                        cursor: pointer;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                 }
                .after-box{
                    .doctor-img{
                        display: inline-block;
                        width:178px;
                        height:178px;
                        border-radius: 6px;
                        cursor: pointer;
                        border: 1px dashed #bfcbd9;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                 }


            }

            .avatar-uploader .el-upload {
                /*margin:24px;*/
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }
            .avatar-uploader .el-upload:hover {
                border-color: #409EFF;
            }
            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
            }
            .avatar {
                width: 178px;
                height: 178px;
                display: block;
            }
            .headerpic {
                width: 60px;
                height: 60px;
                display: block;
            }
            .avatar-uploader-icon.header {
                font-size: 28px;
                color: #8c939d;
                width: 60px;
                height: 60px;
                line-height: 60px;
                text-align: center;
            }
            /*求美者*/
            .addimg{
                width:800px;
                padding:10px 20px;
                .imgfilebox{
                    margin-right:10px;
                    margin-bottom:10px;
                }
                .closeUpPic{position: absolute;width: 20px;height: 20px;right:-10px;top:-10px;z-index:10;}
                .video-ct{
                    position: relative;
                    margin: 20px;
                }
                .dynicPic{
                    display: inline-block;
                    position: relative;
                    width:100px;
                    height:100px;
                    border-radius: 6px;
                    cursor: pointer;
                    border: 1px dashed #bfcbd9;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    margin: 5px;
                }
                .add-img{
                    width:60px;
                    height:60px;
                    border-radius: 6px;
                    cursor: pointer;
                    border: 1px dashed #bfcbd9;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    .add-icon{

                    }
                }
                headerpic{
                    margin-right:12px;
                    width:60px;
                    height:60px;
                    border-radius: 6px;
                    /*background:lightblue;*/
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
            .picture-box{
                padding:20px;
                .before-box,
                .after-box{
                    margin-left:40px;
                    width:178px;
                    height:200px;
                }
                .description{
                    margin-top:110px;
                    margin-left:20px;
                    p{
                        margin-bottom:5px;
                        color:#999;
                        font-size:14px;
                    }
                }
            }
            .addDescription{
                /*margin-bottom:20px;*/
                padding:10px;
                p{
                    font-size:14px;
                    color:#333;
                    margin-bottom:20px;
                }
                .el-textarea__inner{
                    width:50%;
                }
            }
            .footer-b{
                /*margin-top:20px;*/
                margin-bottom:40px;
            }



        }
        .admin-lbox {
            /*height: 100%;*/
            width: 15%;
           /* display: inline-block;
            padding: 12px;
            box-sizing: border-box;
            float: left;*/

        }
        /********************弹出蒙层***start********************/
        .p-mask{
            position: fixed;top: 0;left:0;right:0;bottom:0;background: rgba(0,0,0,0.6);z-index: 11;
            .croper-ct{
                width:420px;height: 620px;margin: 100px auto;background: #ffffff;padding: 20px 60px;
                box-sizing: border-box;
                border-radius: 10px;
                position: relative;
                .el-button:hover{
                    background-color: #9083ED;
                    color: #ffffff;
                    border: 1px solid #9083ED;
                }
                .end-close{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    right: -25px;
                    top:-20px;
                    cursor: pointer;
                }
                .p-title{
                    font-size: 25px;
                    margin-bottom: 25px;
                }
                .p-des{
                    margin-top: 20px;
                }
            }
        }
        /********************弹出蒙层***end********************/

        /********************案例库弹出层***start********************/
        .p-case-mask{
            position: fixed;top: 0;left:0;right:0;bottom:0;background: rgba(0,0,0,0.6);z-index: 11;
            .croper-ct{
                width:948px;margin: 50px auto;background: #ffffff;padding: 0;
                box-sizing: border-box;
                border-radius: 5px;
                position: relative;
                .el-button:hover{
                    background-color: #9083ED;
                    color: #ffffff;
                    border: 1px solid #9083ED;
                }
                .end-close{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    right: -25px;
                    top:-20px;
                    cursor: pointer;
                }
                .p-title{
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .material-ct{

                    height: 800px;
                    box-sizing: border-box;
                    padding:0 0 0 24px;
                    .case-com-ct{
                        height: 100%;
                        box-sizing: border-box;
                        padding:0 12px 0 0;
                        vertical-align: top;
                        position: relative;
                    }
                    .case-r-ct{
                           padding: 10px 0;
                            box-sizing: border-box;
                           .c-title-ct{
                               margin: 10px 0;
                           }
                            .dynicPic{
                                display: inline-block;
                                position: relative;
                                width:160px;
                                height:200px;
                                border-radius: 6px;
                                cursor: pointer;
                                border: 1px dashed #bfcbd9;
                                background-position: center center;
                                background-repeat: no-repeat;
                                background-size: 100%;
                                margin: 5px 22px;
                                margin-left: 0;
                            }
                        .pic-ct{
                            display: inline-block;
                            position: relative;
                            .pic-select{
                                position: absolute;
                                top:0;
                                right: 10px;
                                .sel-pic{
                                    width: 20px;
                                    height: 20px;
                                }
                            }
                            .video-ct{
                                margin: 20px;
                                 width: 250px;
                                overflow: hidden;
                            }
                        }
                    }

                }
                .bt-btn-ct{
                    box-sizing: border-box;
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    text-align: right;
                    width: 100%;
                    .bt-btn-cm{
                        display: inline-block;
                        vertical-align: middle;
                        padding-right: 24px;
                    }
                    .el-pagination{
                        button{
                            height: 36px;
                            line-height: 36px;
                            padding: 0 10px;
                        }
                        .number{
                            height: 36px;
                            line-height: 36px;
                            padding: 0 15px;
                            font-size: 16px;
                        }
                        .more{
                            height: 36px;
                            line-height: 36px;
                            padding: 0 15px;
                            font-size: 16px;
                        }

                    }
                }

            }
        }
        /********************案例库弹出层***end********************/


    }
</style>