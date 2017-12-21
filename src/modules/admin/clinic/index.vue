<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .admin-clinic {
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
        .fram-box{
            height: 100%; display: inline-block;box-sizing: border-box; padding:12px; vertical-align: top;
        }
        .admin-lbox{  width:17%;}
        .admin-rbox{width: 80%;
            .segment-title{
                border-bottom: 1px solid #eaeaea;
                padding: 5px 0;
            }
            .clinic-record{
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
                .clinic-edit-ct{
                    text-align: center;
                    padding: 24px;
                    .el-button:hover{
                        background-color: #9083ED;
                        color: #ffffff;
                        border: 1px solid #9083ED;
                    }
                }
            }
            .clinic-info-ct{
                padding: 20px 0;
                .row-ct{
                    padding: 10px;
                    .row-item{
                        display: inline-block;
                        width: 400px;
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
            .out-box-border{
                width: 100%;
                .map-ct{
                    width: 100%;
                    height: 400px;
                }
            }
        }
    }
</style>