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
                    .s-item-ct{
                        .post-classify{
                            margin:0 24px 0 0;
                          cursor: pointer;
                        }

                    }
                    .f-choice{
                        cursor: pointer;
                    }
                    .format-item{
                        width: 300px;
                        height:400px;
                        vertical-align: top;
                        position: relative;
                        margin-right: 24px;
                        .post-pic{
                            width: 100%;
                        }
                        .post-des-ct{
                            width: 100%;
                            bottom: 0;
                            position: absolute;
                            box-sizing: border-box;
                            vertical-align: top;
                            padding: 12px;
                            .des-logo{
                                width: 48%;
                                vertical-align: top;
                                text-align: center;
                            }
                        }
                    }
                }
            }

        }
    }
</style>