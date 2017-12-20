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
                    border-bottom: 2px solid #346187;
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
                }
            }
            .clinic-info-ct{
                .item-title{
                    text-align: right;
                    padding: 12px;
                }
                .item-value{
                    text-align: left;
                    padding: 12px;
                }
                .clinic-txt{
                    width: 250px;
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