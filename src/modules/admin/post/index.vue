<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .detail-clinic {
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
        .admin-lbox{ width:15%;}
        .admin-rbox{width: 85%;
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
            }
            .clinic-info-ct{
                padding: 20px 0;
                .clinic-name{display:inline-block;overflow: hidden;  text-overflow: ellipsis;white-space:nowrap;width:150px}
            }
            .out-box-border{
                .map-ct{
                    width: 100%;
                    height: 400px;
                }
            }
        }
    }
</style>