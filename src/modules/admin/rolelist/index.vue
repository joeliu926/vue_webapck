<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .rolelist-content{
        .f-14{
            font-size: 14px;
            color: #999999;
        }
        .f-16{
            font-size: 16px;
            color: #333333;
        }
        .fram-box{
            height: 100%; display: inline-block;box-sizing: border-box; padding:12px;
        }
        .admin-lbox{width:15%;  }
        .admin-rbox{width: 85%;vertical-align: top;
            .rolelist-record{
                .record-text-ct{
                    padding: 24px 0;
                    .sel-title{

                    }
                    .org-name{
                        margin-top: 10px;
                    }
                }
                .rolelist-edit-ct{
                    text-align: right;
                    padding: 24px;
                    .el-button:hover{
                        background-color: #9083ED;
                        color: #ffffff;
                        border: 1px solid #9083ED;
                    }
                }
            }
            .rolelist-list-content{

            }
            .rolelist-pagination-align {
                text-align: right;
                border: none;
                margin-top: 5px;
            }
        }
    }

</style>