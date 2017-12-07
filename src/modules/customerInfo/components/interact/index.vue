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
            .step-first{
                flex:2;
                dispaly:flex;

                li{
                    display: inline-block;
                    margin:auto;
                    background-color:#9febc6;
                    border-radius:50%;

                }
                li:nth-child(1){
                    width:60px;
                    height:60px;
                    color:#FFF;
                    font-size:14px;
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
                    background-color:#4cb0ff;
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
                    background-color:#e8e8e8;
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
                    background-color:#e8e8e8;
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
                }
            }
        }

    }


    /*时间轴*/
    .timeLine{

        width:100%;
        height:800px;
        position:relative;
        .left-box{
            width:50%;
            height:100%;
            float:left;

        }
        .left-box{
            width:50%;
            height:100%;
            padding-right:20px;
            
            border-top:1px solid transparent;
            box-sizing:border-box;
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
                background:red;
                border-radius:50%;
            }
            .list2{
                margin-top:200px;
            }
            .counselor{
                margin-top:20px;
                width:100%;

                position:relative;
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
                    p{
                        text-indent:10px;
                        padding:10px 0;
                        font-size:14px;
                        span{
                           color:#ccc;
                        }
                        span:nth-child(2){
                            color:#333;

                        }
                    }
                }
            }


        }
       

        .right-box{
            width:50%;
            height:100%;

            float:right;
            border-top:1px solid transparent;
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
                background:red;
                border-radius:50%;
            }
            .custome-item{
                // padding-right:20px;
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
                        span:nth-child(n+1){
                            padding:4px 8px ;
                            margin-right:5px;                    
                            color:#9083ed;
                            border:1px solid transparent;
                            background: #d8dcfd;
                            border-radius:16px;
                        }
                    }


                }
            }


        }

    }

    .timeLine::before{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        height: 100%;
        width: 4px;
        background: #d7e4ed;

    }






}

</style>