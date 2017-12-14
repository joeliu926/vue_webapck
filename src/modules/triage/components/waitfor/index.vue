<template src="./template.html"></template>
<script src="./index.js">

</script>
<style scope lang="scss">
    .triage-block-content {
        margin: 0px!important;
        border: none !important;
        background-color: #ffffff;


        .el-tabs--border-card>.el-tabs__content {
            padding-top: 10px;

        }   
        .triage-block-uinfo {
             margin: 20px 0;
             height: 32px;
             .triage-name {
                 color: #333333;
                 font-size: 16px;
             }
             .triage-record {
                 color: #666666;
                 font-size: 14px;
             }
             .triage-icon{
                 cursor: pointer;
             }
             .c-icon{text-align: center;}

        }

        .triage-user-name {
             font-size: 11px;
             color: #444;
        }

        .triage-user-title {
             vertical-align: middle;
             height: 40px;
             width: 40px;
        }

        .triage-pagination-align {
             text-align: right;
             border: none;
             margin:20px 0;
        }

        .triage-content-gradient {
             background: -moz-linear-gradient(360deg, #7084f3, #7a71fe);
             background: -webkit-gradient(linear,0 50%,100% 50%,from(#7084f3),to(#7a71fe));
             background: -webkit-linear-gradient(360deg, #7084f3, #7a71fe);
             background: -o-linear-gradient(360deg, #7084f3, #7a71fe);
        }





         th div{
             font-size: 14px;
             color: #333333;
          }

         table tr td:last-child {
             text-align: right;
         }
         .triage-pa-icon {
             font-size: 16px !important;
             color: #909090;
             line-height: 30px;
             cursor: pointer;
             text-align: right;
         }
         .triage-title {
             border-radius: 30px;;
             vertical-align: middle;
             height: 40px;
             width: 40px;
         }
         .triage-date {
             /*float: right;*/
             text-align: right;
         }
         .el-table__body .el-table__row td{
             height: 60px;
             p,div{font-size: 14px;color: #999999;}
         }

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