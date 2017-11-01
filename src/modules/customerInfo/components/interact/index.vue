<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
    .interact-content {
         padding: 12px;
        .item-title {
            margin-bottom: 30px;
            img{
                vertical-align: middle;
                margin-right: 5px;
            }
        }
        .interact-link {

            .link-item {
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
                    font-size: 7px;
                    line-height: 18px;
                    margin-top: -8px;
                    width: 18px;
                    height: 18px;

                }
            }

            .link-contact:before {


            }
            .link-diagnosis:before {

            }
            .link-develop:before {

            }
            .link-return:before {

            }
            .link-file:before {

            }
        }
        .interact-contact {
            margin: 24px 0;
            .contact-item {
                border: 1px solid #eaeaea;
                margin-bottom: 24px;
                padding:0 20px 20px 20px;
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
            .contact-all{text-align: center;}
        }
        .interact-file {
           .file-row{
                text-align: center;
            margin: 24px;
           }
            .file-all{text-align: center}
        }
        .item-border {
            border: 1px solid #eaeaea;
            padding: 24px;
            border-radius: 5px;
        }
    }
</style>