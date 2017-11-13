<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
    .consult-content {
        width: 100%;
        box-sizing: border-box;
        padding: 24px;
        .data-content{
            margin: 0 auto;
            background: #ffffff;
            height: 88px;
            margin-bottom: 20px;
            padding: 14px;
            box-sizing: border-box;

            .today-count{
                text-align: left;
                color: #444444;
                font-size: 16px;
                .s-count{
                    color: #AAA0F1;
                    font-size: 24px;
                    margin-left: 14px;
                }
            }
            .today-cmp{
                color: #444444;
                font-size: 16px;
                text-align: right;
                .s-last{
                    color: #666666;
                    font-size: 24px;
                    margin-left: 14px;
                    .sup:before{
                        color: #13CE66;
                        font-size: 20px;
                    }
                    .sdown:before{
                        color: #f94b53;
                        font-size: 20px;
                    }
                }
            }
            .data-date{
                font-size: 16px;
                color: #777777;
                margin: 10px 0;
            }

        }
        .chart-content{
            box-sizing: border-box;
            padding: 20px;
            background-color: #ffffff;
            .choose-ct{
                height: 60px;
                vertical-align: middle;
                text-align: right;
                .i-select{
                    width: 120px;
                    color:#6B7FFA ;
                    .el-input__inner{
                        border-color: #6B7FFA;
                        color:#6B7FFA ;
                    }
                    .el-input__icon{
                        color:#6B7FFA ;
                    }
                }
                .i-sbtn{
                    margin-left: 40px;
                    width: 120px;
                    border: 1px solid #6B7FFA !important;
                    color:#6B7FFA;
                    .btn-dp{
                        color: #6B7FFA;
                        position: relative;
                        right: -20px;
                        font-size: 12px;
                    }

                }

            }
        }
        .box-shadow{
            -moz-box-shadow: 2px 2px 10px #909090;
            -webkit-box-shadow: 2px 2px 10px #909090;
            box-shadow:2px 2px 10px #909090;
        }
    }
    .el-popover{
        .day-input{
            width: 30px;
        }
        .el-radio-group .el-radio-button{
            margin: 0 15px 0 0;
        }
        .el-radio-button__inner{
            padding: 5px;
            border-radius: 5px;
        }
        .day-radio{

        }
        .neartext{
            color: #666666;
            font-size: 14px;
        }
    }


</style>