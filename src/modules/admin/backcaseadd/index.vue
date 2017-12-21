<template src="./template.html"></template>
<script src="./index.js">

</script>

<style  lang="scss">
    .admin-clinic {
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
           /* display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
            float: left;*/
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