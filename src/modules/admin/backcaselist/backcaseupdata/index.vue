<template src="./template.html"></template>
<script src="./index.js">
</script>

<style lang="scss">
    .admin-caseupdata {
        .fl {
            float: left;
        }
        .fr {
            float: right;
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
            width: 82%;
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
                .row-ct{
                    padding: 10px;
                    .row-item{
                        margin:0 0 20px 20px;
                        width: 500px;
                        div{
                            vertical-align:middle;
                            display: inline-block;

                        }
                        div.msxx{
                            color:#999;
                            font-size: 14px;
                            padding-left:15px;
                            padding-top:16px;
                            p{
                                font-size:14px;
                            }
                        }
                        .row-item-title{
                            display: inline-block;
                            width: 80px;
                        }
                        .row-item-value{
                            width: 200px;
                        }
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
                padding:10px 20px;
                div{
                    margin-right:12px;
                    width:60px;
                    height:60px;
                    border-radius: 6px;
                    background:lightblue;
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
            width: 18%;
            /* display: inline-block;
             padding: 12px;
             box-sizing: border-box;
             float: left;*/

        }
    }
</style>