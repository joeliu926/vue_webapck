<template src="./template.html"></template>
<script src="./index.js">

</script>
<style  lang="scss">

 .customer-block-content {
        margin :2px;
        border: 1px solid transparent;
        background-color: #ffffff;
        .el-tabs--border-card>.el-tabs__content {
            padding-top: 10px;
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




         // 
         th div{
             font-size: 14px;
             color: #333333;
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
        // .customer-table{
        //     color: #999999;
        //     width:100%;
        //     border: 1px solid #eaeaea;
        //     th{
        //         background-color: #F7F7F7;
        //         padding: 10px 24px;
        //         font-size: 16px;
        //         color: #333333;
        //     }
        //     tr{
        //         width: 100%;
        //     }
        //     td{
        //         padding: 10px 24px;
        //         font-size: 14px;

        //         .start-cst-btn{
        //             background: #9083ED;
        //             color: #ffffff;
        //             border-color: #9083ED;
        //         }
        //         .start-cst-btn:hover{
        //             border-color: #9083ED;
        //         }
        // }
        .day-ct{
            border-top:1px solid #eaeaea;
            padding: 10px 24px;
            font-size: 14px;
            width: 100%;
            .idate{

            }
            .icount{
                margin-left: 24px;
                color:#666666;
            }
        }
     
}

        

</style>