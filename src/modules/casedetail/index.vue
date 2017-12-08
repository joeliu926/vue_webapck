<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss" type="es6">

html, body{
 background-color:#FFF;
}
body{
   background:#FFF;
   position:relative;
}
.fl {
  float:left;
}
.fr{
  float:right;
}
.clearfix:before,
.clearfix:after{
  content:"";
  height:0;
  display: block;
  line-height:0;
  visibility:hidden;
  clear:both;
  overflow:hidden;
}
.border-padding{
  padding-top: 20px;
}
.border-bottom{
  border-bottom:1px solid #eee;
  padding-bottom:10px;
  margin-bottom:10px;
}
/*案例详情*/
.case-info{

     /*客户日记信息*/
  .caseinfo-top-content{
         margin-bottom: 60px;
         background-color:#534CE7;
         width: 100%;
         border: none;
         height: 134px;
         z-index:1;
        .caseinfo-outer{
            margin: 0 auto;
            padding:24px;
            background-color: transparent;
            height: 156px;
            .caseinfo-inner{
                box-sizing:border-box;
                border-radius: 4px;
                background-color:#FFF;
                padding-left:24px;
                padding-top:20px;
                margin-bottom:10px;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
                h6{
                   font-size:16px;
                   font-weight:900;
                }
                p{
                   font-size:14px;
                }
                .color{
                    color:#999;
                }
            }
            .casetop-img{
              padding:12px 0;

            }
            .case-name{
              font-weight: bold;
            }
            span{color:#8391a5; font-size: 14px;}
        }
  }
  .caseinfo-bottom-content{
       padding:0 24px;
       background:#FFF;
       .info-before{
            padding:0 24px;
            /*案例封面*/
            .info-cover{

                 padding-bottom:10px;
                 margin-bottom:10px;
                 p{
                    padding:10px 0px;
                    font-size:16px!important;
                    color:#8391a5;
                 }
                 .cover-img{
                    div{
                       width:140px;
                       height:140px;
                       border-radius:6px;
                       position:relative;

                       span{
                          display:block;
                          width:55px;
                          height:20px;
                          padding:0;
                          line-height:20px;
                          text-align:center;
                          position:absolute;
                          left:0px;
                          bottom:0px;
                          background:#FFF;
                          color:#333;
                          border-radius:0 6px 6px 0;

                       }
                    }
                 }
            }
            /*术前信息*/
            .caseinfo-before{
                /*margin-right:24px;*/

                h6{
                   font-size:16px;
                   margin-bottom:10px;
                }
                ul{
                    width:100%;
                    li{
                        float:left;
                        margin-bottom:10px;
                        margin-right:12px;
                        list-style-type: none;
                    }
                }
                .description{
                    width:100%;
                    height:20px;
                    span{

                      display:inline-block;
                      height:15px;
                      font-size:14px;
                    }
                    span:nth-child(n){
                      color:#5346ae;
                    }
                }
            }

            /*术后120天*/
            .info-after120{
                 background:#FFF;
                 .after-img{
                    margin-bottom:10px!important ;
                 }
                 p{
                    font-size:14px;
                    margin-bottom:10px;
                 }
                 .title{
                    height:20px;
                    margin-bottom:10px;
                    span{
                        padding:0;
                        display:block;
                        width:90px;
                        height:20px;
                        line-height:20px;
                        text-align:center;
                    }
                    span:nth-child(1){
                        float:left;
                        border-radius:8px;
                        background:#f76120 ;
                        color:#FFF   ;
                    }
                    span:nth-child(2),
                    span:nth-child(3){
                        float:right;
                        margin-left:1px;
                        border-color:transparent;


                        width:112px;
                        color:#666;
                    }
                    span.active{
                        color:#5346ae;
                    }
                 }
                 ul{
                     width:100%;
                     li{
                         float:left;
                         margin-bottom:10px;
                         margin-right:12px;
                         list-style-type: none;
                     }
                 }
                 .description{
                     width:100%;
                     height:20px;
                     span{

                       display:inline-block;
                       width:75px;
                       height:15px;
                       font-size:14px;
                     }
                     span:nth-child(n){
                       color:#5346ae;
                     }
                 }
                 .timeNow{
                     font-size:14px;
                     color:#ccc;
                  }
            }

            /*术后100天*/
            .info-after100{
                 margin-bottom:50px;
                 .title {
                    width:90px;
                    height:20px;
                    font-size:14px;
                    line-height:20px;
                    text-align:center;
                    border-radius:8px;
                    background:#f76120 ;
                    color:#FFF;
                    margin-bottom:10px;
                 }
                 ul{
                     width:100%;
                     li{
                         float:left;
                         margin-bottom:10px;
                         margin-right:12px;
                         list-style-type: none;
                     }
                  }
                 p{
                    font-size:14px;
                    margin-bottom:10px;
                 }
                 .timeNow{
                    font-size:14px;
                    color:#ccc;
                 }
            }
       }
  }
}


/*遮罩层*/
.case-layer{
    /*margin-top:60px;*/
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top:0px;
    left:0;
    .content-box{
        height:570px;
        width:750px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #FFF;
        border-radius: 15px ;
        z-index:1001;
        .left-box{
            width:570px;
            height:100%;
            background: #CCC;
            float: left;
            border-radius: 4px 0 0 4px;
            img{

                display: block;
                width:100%;
                height: 100%;
            }

            /*图片轮播区样式*/
            .carousel-wrap {
              position: relative;
              width: 570px;
              height: 100%;
              overflow: hidden;
              background-color: #CCC;
              border-radius: 4px 0 0 4px;
            }

            .slide-ul {
              width: 100%;
              height: 100%;
              border-radius: 4px 0 0 4px;
              li {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 4px 0 0 4px;
                img {
                  width: 100%;
                  height: 100%;
                   border-radius: 4px 0 0 4px;

                }
              }
            }

            .carousel-items {
              position: absolute;
              z-index: 10;
              top: 500px;
              width: 100%;
              margin: 0 auto;
              text-align: center;
              font-size: 0;
              span {
                display: inline-block;
                height: 6px;
                width: 30px;
                margin: 0 3px;
                background-color: orange;
                cursor: pointer;
              }
              // .active {
              //   background-color: rgba(0,0,0,.5);
              // }
            }

            /*轮播图焦点按钮样式*/
            .arrowbox{
                width:100%;
                height:60px;
                position:absolute;
                top:50%;
                margin-top:-30px;
                /*background:yellowgreen;*/
                span{
                    display:block;
                    width:60px;
                    height:60px;
                    font-size:60px;
                    color:orange;
                }
            }


        }
        .right-box{
            width:180px;
            height:100%;
            background: #f7f7f7 ;
            float: left;
            border-radius: 0 4px 4px 0 ;
            position:relative;
            button{
                width:80px;
                height:28px;
                margin-top:20px;
                margin-left:45px;
                background:#f7f7f7 ;
                color:#333;
                outline:none;
                lighting-color: none;
                /*border:1px solid transparent;*/
            }
            .close{
                position:absolute;
                right:4px;
                top:4px;
                text-indent:2px;
                border:1px solid #CCC;
                border-radius:50%;
                display:inline-block;
                width:15px;
                height:15px;
                text-algin:center;
            }
            .isclick{
                background:#6f61d4 ;
                border:1px solid transparent;
                color:#f7f7f7;
            }

        }

    }

}
</style>