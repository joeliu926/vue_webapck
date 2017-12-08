<template src="./template.html"></template>
<script src="./index.js">

</script>
<style  lang="scss">
 .customer-block-content {
             margin: 24px;
             border: 1px solid transparent;
             background-color: #ffffff;
             th div{
                 font-size: 14px;
                 color: #333333;
              }
                table{
                    border-sizing:border-box;
                }
             table tr td:last-child {
                 text-align: right;
             }
             .customer-pa-icon {
                 font-size: 16px !important;
                 color: #909090;
                 line-height: 30px;
                 cursor: pointer;
                 text-align: right;
             }
             .customer-title {
                 border-radius: 30px;;
                 vertical-align: middle;
                 height: 40px;
                 width: 40px;
             }
             .customer-date {
                 /*float: right;*/
                 text-align: right;
             }
             .el-table__body .el-table__row td{
                 height: 60px;
                 p,div{font-size: 14px;color: #999999;}
             }
         }

         .customer-block-uinfo {
             margin: 24px;
             height: 32px;
             .customers-name {
                 color: #333333;
                 font-size: 16px;
             }
             .customer-record {
                 color: #666666;
                 font-size: 14px;
             }
             .customer-icon{
                 cursor: pointer;
             }
             .c-icon{text-align: center;}

         }

         .customer-user-name {
             font-size: 11px;
             color: #444;
         }

         .customer-user-title {
             vertical-align: middle;
             height: 40px;
             width: 40px;
         }

         .customer-pagination-align {
             text-align: right;
             border: none;
         }

         .customer-content-gradient {
             background: -moz-linear-gradient(360deg, #7084f3, #7a71fe);
             background: -webkit-gradient(linear,0 50%,100% 50%,from(#7084f3),to(#7a71fe));
             background: -webkit-linear-gradient(360deg, #7084f3, #7a71fe);
             background: -o-linear-gradient(360deg, #7084f3, #7a71fe);
         }
</style>