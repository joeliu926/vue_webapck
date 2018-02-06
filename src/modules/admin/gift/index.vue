<template src="./template.html"></template>
<script src="./index.js">
</script>

<style lang="scss">
	.gift-content {
        .fram-box {
            height: 100%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
        }
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
        .f-12 {
            font-size: 12px;
            color: #999999;
        }
        .f-14 {
            font-size: 14px;
            color: #999999;
        }
        .f-16 {
            font-size: 16px;
            color: #333333;
        }
        .admin-lbox {
            width: 15%;
        }
        .admin-rbox {
            width: 85%;
            .el-table .btn .cell{
                text-align: center  ;
            }
            .segment-title {
                border-bottom: 1px solid #eaeaea;
                padding: 5px 0;
            }
            .gift-record {
                .record-text-ct {
                    padding: 24px ;
                    border-bottom: 1px solid #eaeaea;
                    .sel-title {}
                    .org-name {
                        margin-top: 10px;
                    }
                }
            }
            /*礼品列表*/
            .gift-listContent{
                /*width:100%;*/
                /*marign-bottom:80px;*/
            }
            /*分页*/
            .gift-pagination{

            }

        }
	}
</style>