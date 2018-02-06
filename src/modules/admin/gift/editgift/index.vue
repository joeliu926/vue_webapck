<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .editgift-content {
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
        .b-d {
            border: 1px solid red;
        }
        .i-must {
            color: #ff0000;
            padding: 5px;
        }
        .f-14 {
            font-size: 14px;
            color: #999999;
        }
        .f-16 {
            font-size: 16px;
            color: #333333;
        }
        .fram-box {
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
        }
        /*右侧*/
        .admin-rbox {
            /*height: 100%;*/
            width: 85%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
            /*float: left;*/
            .segment-title {
                /*border-bottom: 1px solid #eaeaea;*/
                background: #eaeaea;
                padding-left: 10px;
                height: 20px;
                .s-title-l {
                    float: left;
                }
                .s-title-r {
                    float: right;
                    color: red;
                }
            }
            .gift-record {
                .record-text-ct {
                    padding: 24px 0;
                    border-bottom: 4px solid #eaeaea;
                    .sel-title {
                        font-size: 14px;
                        color: #999999;
                    }
                    .org-name {
                        font-size: 16px;
                        color: #333333;
                        margin-top: 10px;
                    }
                }
                .gift-edit-ct {
                    text-align: center;
                    padding: 24px;
                }
            }
            .gift-info-ct {

                padding: 10px 20px;
                padding-left: 100px;
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

                    }

                }
            }

            /*添加礼品图片*/
            .giftImgbox {
                /*padding: 10px 20px;*/
                /*图片添加*/
                .updataImg {
                    /*礼品封面*/
                    padding: 10px 20px;
                    .cover-box {
                        margin-right: 10px;
                        .cover-img {
                            display: inline-block;
                            width: 178px;
                            height: 178px;
                            margin: 5px;

                            border: 1px dashed #bfcbd9;
                            border-radius: 6px;
                            cursor: pointer;
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: 100%;
                        }
                    }

                    /*礼品图片 item*/
                    .addimg {
                        /*width:100%;*/
                        /*padding:10px 20px;*/
                        .fl {
                            float: left;
                        }
                        .imgfilebox {
                            margin-right: 10px;
                            margin-bottom: 10px;
                        }
                        .closeUpPic {
                            position: absolute;
                            width: 20px;
                            height: 20px;
                            right: -10px;
                            top: -10px;
                            z-index: 10;
                        }
                        .dynicPic {
                            display: inline-block;
                            position: relative;
                            width: 178px;
                            height: 178px;
                            border-radius: 6px;
                            cursor: pointer;
                            border: 1px dashed #bfcbd9;
                            background-position: center center;
                            background-repeat: no-repeat;
                            /*background-size: 100% ;*/
                            background-size: cover;

                            margin: 5px;
                        }
                        .trueImg {
                            /*  border: none;*/
                        }
                        .add-img {
                            width: 60px;
                            height: 60px;
                            border-radius: 6px;
                            cursor: pointer;
                            border: 1px dashed #bfcbd9;
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: 100%;
                            .add-icon {

                            }
                        }
                        headerpic {
                            margin-right: 12px;
                            width: 60px;
                            height: 60px;
                            border-radius: 6px;
                            /*background:lightblue;*/
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    /*.dynicPic{*/
                    /*position: relative;*/
                    /*margin-right:24px;*/
                    /*!*删除图标*!*/
                    /*.closeUpPic{*/
                    /*width:30px;*/
                    /*height:30px;*/
                    /*position: absolute;*/
                    /*top:0;*/
                    /*right:0;*/
                    /*}*/
                    /*}*/

                }

                /*礼品图片限制大小 和图片格式描述*/
                .description {
                    border-bottom: 1px solid #eaeaea;
                    padding-bottom: 30px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                    margin-top: 20px;
                }
            }

        }
        /*左侧*/
        .admin-lbox {
            /*height: 100%;*/
            width: 15%;
            /* display: inline-block;
             padding: 12px;
             box-sizing: border-box;
             float: left;*/

        }
    }
</style>