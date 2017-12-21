<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .admin-clinic-edit {
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
        .i-must{
            color: #ff0000;
            padding: 5px;
        }
        .fram-box{
            height: 100%; display: inline-block;box-sizing: border-box; padding:12px; vertical-align: top;
        }
        .admin-lbox{  width:17%;  }
        .admin-rbox{width: 82%;
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
                        width: 300px;
                        .row-item-title{
                            display: inline-block;
                            width: 80px;

                        }
                        .row-item-value{
                            width: 200px;
                        }

                    }
                    .logo-ct{
                        width: 500px;
                        position: relative;
                      /*  background: url("../../../../common/img/i-add.png") no-repeat;*/

                        .up-logo{
                            width: 80px;
                            height: 80px;
                            margin-right: 8px;
                            cursor: pointer;
                        }
                        .format-ct{
                            display: inline-block;
                            vertical-align: bottom;
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