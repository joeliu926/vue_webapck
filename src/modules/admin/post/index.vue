<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .post-content {
        .b-d{
            border: 1px solid red;
        }
        .f-14{
            font-size: 14px;
            color: #999999;
        }
        .f-16{
            font-size: 16px;
            color: #333333;
        }
        .cur{
            cursor:pointer;
        }
 .i-block{
     display: inline-block;
     box-sizing: border-box;
 }
        .fram-box{
            height: 100%; display: inline-block;box-sizing: border-box; padding:12px; vertical-align: top;
        }
        .admin-lbox{ width:15%;}
        .admin-rbox{width: 85%;
            .segment-title{
                border-bottom: 1px solid #eaeaea;
                padding: 5px 0;
            }
            .post-record{
                .record-text-ct{
                    padding: 24px 0;
                    border-bottom: 1px solid #eaeaea;
                    .sel-title{

                    }
                    .org-name{
                        margin-top: 10px;
                    }
                }
            }

            .out-box-border{
                .map-ct{
                    width: 100%;
                    height: 400px;
                }
            }
            .segment-ct{
                .segment-item{
                    padding: 20px 0;
                   .s-name{
                       vertical-align: top;
                       padding: 0 24px 0 0;
                       width: 80px;
                       color: #333333;
                   }
                    .select-item{
                        color: #9083ED;
                    }
                    .s-item-ct{ /**********顶部选择版式***********/
                        .post-classify{
                            margin:0 10px 0 0;
                            cursor:pointer;
                            .add-cate{
                                vertical-align: middle;
                                margin-bottom: 4px;
                            }
                            .sure-btn{
                                width: 24px;
                              padding: 0 4px;
                            }
                            .sure-btn:hover{
                                color: #9083Ed;
                            }
                            .twidth{
                                width: 100px;
                            }
                        }
                        .classify-hover:hover{
                            color: #9083Ed;
                        }
                        .edit-icon{
                            visibility: hidden;
                            width: 20px;
                            padding-left: 4px;
                        }
                        .classify-hover:hover .edit-icon{
                            visibility: visible;
                        }
                        .add-post-des{
                            padding: 100px 0 0 0;
                            height: 300px;
                            box-sizing: border-box;
                            border-bottom: 1px solid #dddddd;
                        }
                    }
                    .f-choice{
                        cursor: pointer;
                    }
                    .format-item{ /************图片模板版式**************/
                        width: 300px;
                        height:410px;
                        vertical-align: top;
                        position: relative;
                        margin:0 24px 24px 0;
                        border: 1px solid #9083ED;
                        box-sizing: border-box;
                        .post-pic-ct{
                            width: 300px;
                            height:340px;
                            overflow: hidden;
                        }
                        .post-pic-ct:hover .close-icon{
                            display:inline ;
                        }
                        .post-pic{
                            width: 100%;
                        }
                        .post-des-ct{
                            width: 100%;
                            bottom: 0;
                            position: absolute;
                            box-sizing: border-box;
                            padding: 0 12px;
                            height: 70px;
                            .des-logo{
                                height: 70px;
                                line-height: 70px;
                                vertical-align: middle;
                                text-align: center;
                                .img-logo{
                                    height: 48px;
                                    width: 48px;
                                    vertical-align: middle;
                                    margin-right: 12px;
                                }
                            }
                        }
                        .close-icon{
                            position: absolute;
                            right:-10px;
                            top:-10px;
                            cursor: pointer;
                            display: none;
                            .img{
                                height: 20px;
                                width: 20px;
                            }
                        }
                    }
                }
            }

        }
        .poster-width{
            width:1300px;
            .category-pagination-align{
                text-align: right;
                border: none;
                margin-top: 5px;
            }
        }
        .mask{
            position: fixed;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            .mask-ct{
                width: 500px;
                height: 400px;
                position: absolute;
                top:50%;
                left: 50%;
                margin-top: -200px;
                margin-left: -250px;
                background: #ffffff;
                border-radius: 4px;
                .end-close{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    right: -25px;
                    top:-20px;
                    cursor: pointer;
                }
                .select-ct{
                  text-align: center;
                    padding: 50px 0;
                }
                .select-img-ct{
                    text-align: center;
                    .post-img{
                        display: inline-block;
                        width: 140px;
                        height: 140px;
                        border: 1px dashed #bfcbd9;
                        border-radius: 6px;
                        cursor: pointer;
                        background-position: center center;
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                }
                .submit-ct{
                   text-align: center;
                    padding: 24px;
                }
            }
        }
    }
</style>