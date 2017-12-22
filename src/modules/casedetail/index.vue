<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">

    .casedetail-content {
        position: relative;
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

        .border-padding {
            padding-top: 20px;
        }

        .border-bottom {
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }

        /*案例详情*/
        .case-info {

            /*客户日记信息*/
            .caseinfo-top-content {
                margin-bottom: 60px;
                background: -webkit-linear-gradient(360deg, #7084f3, #7a71fe);
                width: 100%;
                border: none;
                height: 134px;
                z-index: 1;

                .caseinfo-outer {
                    margin: 0 auto;
                    padding: 24px;
                    background-color: transparent;
                    height: 156px;

                    .caseinfo-inner {
                        box-sizing: border-box;
                        border-radius: 4px;
                        background-color: #FFF;
                        padding-left: 24px;
                        padding-top: 12px;
                        padding-bottom: 12px;
                        margin-bottom: 10px;
                        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);

                        h6 {
                            font-size: 16px;
                            font-weight: 900;
                        }

                        p {

                            font-size: 14px;
                        }

                        p.gender {
                    /* margin-left: -30px;*/

                        }

                        p.age {
                          /*  margin-left: -60px;*/
                        }

                        .color {
                            color: #999;
                        }

                    }
                    .casetop-img {
                        padding: 12px 0;

                    }

                    .case-name {
                        font-weight: bold;
                    }

                    span {
                        color: #999;
                        font-size: 14px;
                    }

                }
            }
            .caseinfo-bottom-content {
                padding: 0 24px;
                background: #FFF;

                .info-before {
                    padding: 0 24px;

                    /*案例封面*/
                    .info-cover {
                        padding-bottom: 10px;
                        margin-bottom: 10px;

                        p {
                            padding: 10px 0px;
                            font-size: 14px !important;
                            color: #000;
                        }

                        .cover-img {
                            /*border-radius: 4 px;*/

                            div.left {
                                border-radius: 4px 0 0 4px;
                            }

                            div.right {
                                border-radius: 0 4px 4px 0;
                            }

                            div {
                                width: 140px;
                                height: 140px;
                                border-radius: 6px;
                                position: relative;

                                span {
                                    display: block;
                                    width: 65px;
                                    text-align: center;
                                    height: 20px;
                                    font-size: 12px;
                                    padding: 0;
                                    line-height: 20px;
                                    text-align: center;
                                    position: absolute;
                                    left: 0px;
                                    bottom: 0px;
                                    color: #FFF;
                                    background: rgba(0, 0, 0, 0.4);
                                    border-radius: 0 10px 10px 0;

                                }

                            }
                        }
                    }
                    /*术前信息*/
                    .caseinfo-before {

                        /*margin-right:24px;*/

                        h6 {
                            font-size: 14px;
                            margin-bottom: 10px;
                        }

                        ul {
                            width: 100%;

                            li {
                                float: left;
                                margin-bottom: 10px;
                                margin-right: 12px;
                                border-radius: 4px;
                                overflow: hidden;
                                list-style-type: none;
                            }

                        }
                        .description {
                            width: 100%;
                            height: 20px;

                            .fristcolor {
                                /*     font-size: 14px;
                                     color: #000;
                                     */
                            }

                            span {
                                display: inline-block;
                                height: 15px;
                                font-size: 14px;
                            }

                            span + span {
                                color: #5346ae;
                            }
                            span:nth-child(n) {
                                color: #5346ae;
                            }

                        }
                    }

                    /*术后120天*/
                    .info-after120 {
                        background: #FFF;

                        .after-img {
                            margin-bottom: 10px !important;
                        }

                        p {
                            font-size: 14px;
                            margin-bottom: 10px;
                        }

                        .title {
                            height: 20px;
                            margin-bottom: 10px;

                            span {
                                padding: 0;
                                font-size: 14px;
                                padding: 0 10px;
                                display: block;
                                width: 90px;
                                height: 20px;
                                line-height: 20px;
                                text-align: center;
                            }

                            span:nth-child(1) {
                                float: left;
                                border-radius: 10px;
                                background: #f76120;
                                color: #FFF;
                            }

                            span:nth-child(2),
                            span:nth-child(3) {
                                float: right;
                                margin-left: 1px;
                                border-color: transparent;
                                width: 112px;
                                color: #666;
                            }

                            span.active {
                                color: #5346ae;
                            }

                        }
                        ul {
                            width: 100%;

                            li {
                                float: left;
                                margin-bottom: 10px;
                                margin-right: 12px;
                                overflow: hidden;
                                border-radius: 4px;
                                list-style-type: none;
                            }

                        }
                        .description {
                            width: 100%;
                            height: 20px;

                            span {
                                display: inline-block;
                                width: 75px;
                                height: 15px;
                                font-size: 14px;
                            }

                            span:nth-child(n) {
                                color: #5346ae;
                            }

                        }
                        .timeNow {
                            font-size: 14px;
                            color: #ccc;
                        }

                    }

                    /*术后100天*/
                    .info-after100 {
                        margin-bottom: 50px;

                        .title {
                            width: 90px;
                            height: 20px;
                            font-size: 14px;
                            line-height: 20px;
                            text-align: center;
                            border-radius: 8px;
                            background: #f76120;
                            color: #FFF;
                            margin-bottom: 10px;
                        }

                        ul {
                            width: 100%;

                            li {
                                float: left;
                                margin-bottom: 10px;
                                margin-right: 12px;
                                list-style-type: none;
                            }

                        }
                        p {
                            font-size: 14px;
                            margin-bottom: 10px;
                        }

                        .timeNow {
                            font-size: 14px;
                            color: #ccc;
                        }

                    }
                    .li-img{
                        padding: 0;
                        width: 215px;
                        height: 215px;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: 100%;

                    }
                }
            }
        }
        /*遮罩层*/
        .case-layer {
            /*margin-top:60px;*/
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            position: fixed;
            top: 0px;
            left: 0;

            .content-box {
                height: 620px;
                width: 640px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -310px;
                margin-left: -375px;
                background: #ffffff;
                border-radius: 15px;
                vertical-align: top;
                .left-box {
                    width: 437px;
                    height: 100%;
                    background: #CCC;
                    display: inline-block;
                    border-radius: 4px 0 0 4px;

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }

                }

                /*图片轮播区样式*/
                .carousel-wrap {
                    position: relative;
                    width: 437px;
                    height: 100%;
                    overflow: hidden;
                    background-color: #CCC;
                    border-radius: 4px 0 0 4px;
                }

                .slide-ul {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px 0 0 4px;

                    li {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border-radius: 4px 0 0 4px;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 4px 0 0 4px;

                        }

                    }
                }

                .carousel-items {
                    position: absolute;
                    z-index: 10;
                    top: 500px;
                    width: 100%;
                    margin: 0 auto;
                    text-align: center;
                    font-size: 0;

                    span {
                        display: inline-block;
                        height: 6px;
                        width: 30px;
                        margin: 0 3px;
                        background-color: orange;
                        cursor: pointer;
                    }

                    /* .active {
                       background-color: rgba(0,0,0,.5);
                    }*/
                }

                /*轮播图焦点按钮样式*/

                .arrowbox {
                    display: block;
                    width: 100%;
                    height: 60px;
                    position: absolute;
                    top: 50%;
                    margin-top: -30px;

                    /*background:yellowgreen;*/
                    span {
                        display: block;
                        width: 60px;
                        height: 60px;
                        font-size: 60px;
                        color: orange;
                    }

                }

            }
            .close {
                position: absolute;
                right: 4px;
                top: 4px;
                text-indent: 2px;
                border: 1px solid #CCC;
                border-radius: 50%;
                display: inline-block;
                width: 15px;
                height: 15px;
                text-algin: center;
            }
            .right-box {
                width: 180px;
                height: 100%;
              /*  background: #f7f7f7;*/
                display: inline-block;
                border-radius: 0 4px 4px 0;
                vertical-align: top;

                button {
                    width: 105px;
                    height: 28px;
                    margin-top: 20px;
                    margin-left: 40px;
                    background: #f7f7f7;
                    color: #333;
                    outline: none;
                    lighting-color: none;
                    /*border:1px solid transparent;*/
                }



                .isclick {
                    background: #6f61d4;
                    border: 1px solid transparent;
                    color: #f7f7f7;
                }

            }
        }

    }

</style>