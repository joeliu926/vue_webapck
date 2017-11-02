<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
    .interact-content {
         padding: 12px;
        .item-title {
            margin-bottom: 24px;
            img{
                vertical-align: middle;
                margin-right: 5px;
            }
        }
        .interact-link {
            .link-item {
                text-decoration: none;
                text-align: center;
                cursor: pointer;
                font-size: 14px !important;
                color: #5A5A5A;
                .icon-num{
                    position: absolute;
                    background-color: #FA3419;
                    border-radius: 50%;
                    color: #ffffff;
                    margin-left: -10px;
                    font-size: 12px;
                    line-height: 18px;
                    margin-top: -8px;
                    width: 18px;
                    height: 18px;
                }
                .link-title{
                    font-size: 14px;
                }
            }
        }
        .interact-contact {
            .interact-content{
                box-sizing: border-box;
                width: 100%;
                padding: 0;
                .contact-item {
                    box-sizing: border-box;
                    display: inline-block;
                    width: 49%;
                    border: 1px solid #eaeaea;
                    p{margin: 10px;}
                    .segment{height: 20px;}
                    .contact-item-name{
                        font-weight: bold;
                        font-size: 14px;
                        color: #888888;
                    }
                    .contact-item-value{
                        font-size: 14px;
                        color: #999999;
                    }
                    .contact-right-more{
                        color: #ffffff;
                        height: 0;
                        .contact-more{
                            float: right;
                            font-size: 30px;
                            color: #999999;
                        }
                    }
                }
                .contact-item:nth-child(2n){
                    margin: 0  1%  1%  0;
                }
                .contact-item:nth-child(2n+1){
                    margin: 0  0  1%  1%;
                }
            }
        }
        .interact-file {
           .file-row{
                text-align: center;
              margin: 24px;
           }
            .file-item{
                display: inline-block;
                width:140px;
                height: 140px;
                text-align: center;
                border: 1px solid #eeeeee;
                margin: 12px;
                border-radius: 4px;
            }
        }
        .item-border {
            border: 1px solid #eaeaea;
            padding: 24px;
            border-radius: 5px;
            margin: 24px 0;
        }
        .show-all{
            text-align: center;
            font-size: 14px;
            color: #888888;
            cursor: pointer;
        }
    }
</style>