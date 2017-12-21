<template src="./template.html"></template>
<script src="./index.js">

</script>

<style  lang="scss">
    .admin-caselist {
        maigin-bottom:20px;

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
        .admin-rbox {
            height: 100%;
            width: 82%;
            display: inline-block;
            box-sizing: border-box;
            padding: 12px;
            vertical-align: top;
            float: left;
            .innerbox{
                padding-left:12px;
                padding-right:12px;
                .rbox-top{
                    /*text-indent:20px;*/
                    box-sizing: border-box;
                    padding:24px;
                    p{
                        margin-bottom:10px;
                    }
                    span{
                        color:#999;
                    }
                }
                .rbox-content{
                    /*box-sizing: border-box;*/
                    padding:0px 24px 12px;
                    
                    .el-table{
                        margin-bottom:20px;
                    }

                }
                .rbox-content .el-table .cell {
                    padding:0;
                    white-space: normal;
                    word-break: break-all;
                    line-height: 24px;
                }
                .input-box{
                        width:100%;
                        position: relative;
                        margin-bottom:12px;
                        .el-input__inner{
                            margin-left:12px;
                           border-color: #e0e0e0 !important;
                        }
                        .el-input__inner:hover {
                            border-color: #e0e0e0 !important;
                        }

                        .el-icon-search{
                            position: absolute;
                            width: 35px;
                            height: 100%;
                            left: 170px;
                            top: 10px;
                            text-align: center;
                            color: #bfcbd9;
                            transition: all .3s
                        }
                        .selectedbox{
                             /*margin-right:30px;*/
                            a{
                                display:inline-block;
                                width:90px;
                                height:36px;
                                margin-left:20px;
                                margin-right:10px;
                            }
                           
                        }    
                                            
                }

                .table-content{

                }    
                .rbox-pagination-align {
                    text-align: right;
                    border: none;
                    padding:20px 0;

                }
            }

        }
        .admin-lbox {
            height: 100%;
            width: 18%;
            display: inline-block;
            padding: 12px;
            box-sizing: border-box;
            float: left;

        }
    }
</style>