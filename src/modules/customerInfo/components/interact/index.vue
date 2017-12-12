<template src="./template.html"></template>
<script src="./index.js">

</script>
<style lang="scss">
@media only screen and (max-width:768px){
    .left-box  .counselor img{margin:10px 0 10px 10px ;}
    .left-box  .counselor span.name{
        font-size:12px;
        margin-right: 2%;
    }               
    .left-box .counselor span.time{
            margin-left:-2%;
            font-size:12px;
    }
}
.interact-content{
    height:100%;
    width:100%;
    /*步骤线索*/
    .interact-link{
        height:100%;
        width:100%;
        p{

            height:15px;
            margin-bottom:30px;
            i{
              width:16px;
              height:16px;
              border:1px solid #666;
              border-radius:50%;
              display:inline-block ;
              color:#999;
              text-align:center;
              line-height:18px;
              margin-right:5px;

            }
        }
        .stepNav{
            display:flex;
            width:100%;
            height:60px;
            line-height:60px;
            padding:20px 0;
            margin-bottom:20px;
            ul{
               display:flex;

               height:60px;
               text-align:center;
               justify-content:space-between ;

            }
            .state-one{
                li{
                    background-color:#9febc6;
                }
                li:hover{
                    background-color:#4c5cff;
                }
            }
            .state-two{
                li{
                    background-color:#4cb0ff;
                }
                li:hover{
                    background-color:#4c5cff;
                }
            }
            .state-three{
                li{
                    background-color:#e8e8e8;
                }
            }
            .step-first{
                flex:2;
                dispaly:flex;
                li{
                    display: inline-block;
                    margin:auto;
                    border-radius:50%;

                }
                li:nth-child(1){
                    width:60px;
                    height:60px;
                    color:#FFF;
                    font-size:14px;
                    cursor:pointer;
                }
                li:nth-child(2){
                    width:8px;
                    height:8px;
                }
                li:nth-child(3){
                    width:8px;
                    height:8px;
                }
                li:nth-child(4){
                    width:8px;
                    height:8px;
                }
               li:nth-child(5){
                    width:15px;
                    height:15px;
                }
            }
            .step-second{
                flex:3;
                display:flex;
                li{
                    display: inline-block;
                    margin:auto;

                    border-radius:50%;

                }
                li:nth-child(1){
                    width:8px;
                    height:8px;
                }
                li:nth-child(2){
                    width:8px;
                    height:8px;
                }
                li:nth-child(3){
                    width:8px;
                    height:8px;
                }

                li:nth-child(4){
                    width:60px;
                    height:60px;
                    font-size:14px;
                    color:#FFF;
                    cursor:pointer;
                }
                li:nth-child(5){
                    width:8px;
                    height:8px;
                }
                li:nth-child(6){
                    width:8px;
                    height:8px;
                }
               li:nth-child(7){
                    width:8px;
                    height:8px;
                }
               li:nth-child(8){
                    width:15px;
                    height:15px;
               }

            }
            .step-three{
                flex:3;
                display:flex;
                li{
                    display: inline-block;
                    margin:auto;

                    border-radius:50%;

                }
                li:nth-child(1){
                    width:8px;
                    height:8px;
                }
                li:nth-child(2){
                    width:8px;
                    height:8px;
                }
                li:nth-child(3){
                    width:8px;
                    height:8px;
                }

                li:nth-child(4){
                    width:60px;
                    height:60px;
                    font-size:14px;
                    color:#FFF;
                    cursor:pointer;
                }
                li:nth-child(5){
                    width:8px;
                    height:8px;
                }
                li:nth-child(6){
                    width:8px;
                    height:8px;
                }
               li:nth-child(7){
                    width:8px;
                    height:8px;
                }
               li:nth-child(8){
                    width:15px;
                    height:15px;
               }
            }
            .step-last{
                flex:2;
                dispaly:flex;
                li{
                    display: inline-block;
                    margin:auto;
                    border-radius:50%;

                }
                li:nth-child(1){
                    width:8px;
                    height:8px;
                }
                li:nth-child(2){
                    width:8px;
                    height:8px;
                }
                li:nth-child(3){
                    width:8px;
                    height:8px;
                }

                li:nth-child(4){
                    width:60px;
                    height:60px;
                    font-size:14px;
                    color:#FFF;
                    cursor:pointer;
                }
            }
        }

    }


    /*时间轴*/
    .timeLine{
        width:100%;
        position:relative;
        .left-box{
            border-radius: 4px;
            width:50%;
            height:100%;
            padding-right:20px;

            border-top:1px solid transparent;
            box-sizing:border-box;
            display:inline-block;
            .counselor::before{
                content: '';
                position: absolute;
                top: 16px;
                right: -14px;
                height: 0;
                width: 0;
                border: 7px solid transparent;
                border-left: 7px solid #83c8ff;
            }
            .counselor::after{
                display:inline-block;
                width:10px;
                height:10px;
                content: '';
                position: absolute;
                top: 16px;
                right: -27px;
                background:#d1dbe5;
                border-radius:50%;
            }
            .list2{
                margin-top:200px;
            }
            .counselor{
                width:100%;
                position:relative;
                margin-bottom: 20px;
                .counselor-top{
                    width:100%;
                    height:60px;

                    background:linear-gradient( 45deg, #6bbeff,#83c8ff );
                    img{
                        display:inline-block;
                        margin:10px ;
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        vertical-align:middle;
                    }
                    span.name{
                         font-size:14px;
                         display:inline-block;
                         margin-right: 20px;
                         margin-top:5px;
                    }
                    span.time{
                        margin-left: 36px;
                        font-size: 12px;
                    }
                }
                .counselor-content{
                    border:1px solid #eeeeee;
                    border-top:none;
                    border-radius:0 0 4px 4px;
                    padding-bottom:20px;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
                    p{
                        text-indent:10px;
                        padding:10px 0;
                        font-size:14px;
                        .product{
                            background-color: #c3bcf7;
                            color:#6F61D3;
                            border-radius: 10px;
                            padding: 4px;
                            font-size: 12px;
                        }
                        span{
                           color:#ccc;
                        }
                        span:nth-child(2){
                            color:#333;

                        }
                    }
                    p.second{
                        text-indent: 0px;
                    span:nth-child(n+1){
                        padding:4px 8px ;
                        margin-right:5px;
                        color:#9083ed;
                        border:1px solid transparent;
                        background: #d8dcfd;
                        border-radius:16px;
                    }
                    img{
                        width:31%;
                        margin:0px 0px  5px 5px;
                    }
                    }
                }
            }
        }

        .right-box{
            width:50%;
            height:100%;

            padding-top: 100px;
            border-top:1px solid transparent;
            border-radius: 4px;
            display:inline-block;
            .custome-item::before{
                content: '';
                position: absolute;
                top: 16px;
                left:16px;
                height: 0;
                width: 0;
                border: 7px solid transparent;
                border-right: 7px solid #9e95ff;
            }
            .custome-item::after{
                display:inline-block;
                width:10px;
                height:10px;
                content: '';
                position: absolute;
                top: 16px;
                left:-3px;
                background:#d1dbe5;
                border-radius:50%;
            }
            .custome-item{

                padding-left:30px;
                width:100%;
                margin-bottom:25px;
                box-sizing:border-box;
                position:relative;
                .custome-item-top{
                    width:100%;
                    height:60px;

                    background:linear-gradient( 45deg, #9e95ff,#c6affd );
                    img{
                        display:inline-block;
                        margin:10px;
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        vertical-align:middle;
                    }
                    span.name{
                         font-size:14px;
                         display:inline-block;
                         margin-left:10px;
                         margin-top:5px;
                    }
                    span.time{
                        margin-left: 36px;
                        font-size:12px;
                    }
                }
                .custome-item-content{
                    border:1px solid #eeeeee;
                    border-top: 1px solid transparent;
                    border-radius:0 0 4px 4px;
                    padding-bottom:20px;
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
                    p{
                        text-indent:10px;
                        margin:10px 0;
                        font-size:14px;
                        span{
                           color:#ccc;
                        }
                        span:nth-child(2){
                            color:#333;
                        }
                    }
                    p.second{
                        text-indent: 0px;
                        span:nth-child(n+1){
                            padding:4px 8px ;
                            margin-right:5px;
                            color:#9083ed;
                            border:1px solid transparent;
                            background: #d8dcfd;
                            border-radius:16px;
                        }
                        img{
                            width:31%;
                            margin:0px 0px  5px 5px;
                        }
                    }
                    .imgbox{
                        padding:0 10px;

                        .cover-img{

                            div{
                               width:80px;
                               height:80px;
                               margin:auto 0 ;
                               border-radius:6px;
                               position:relative;
                               float:left;
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
                    .file-box{
                         padding:0 10px;

                         file-item{
                            width:100%;
                            img{
                               margin-right:10px;
                            }
                         }
                    }
                }
            }
        }
    }
    .timeLine::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        width: 3px;
        background: #d1dbe5;
    }
}

</style>