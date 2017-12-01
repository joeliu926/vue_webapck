<template src="./template.html"></template>
<script src="./index.js">

</script>

<style lang="scss">
    .showcase{
        position: absolute;
        right:0px;
        left:0px;
        top:0px;
        bottom:0px;
        overflow: hidden;
        .showcase-tite{}
        .showcase-content{
            background-image:url(./../../common/img/tv/play.jpg);
            background-size: cover;
            height: 100%;
            background-position:center;
            display: flex;
            justify-content: center;
            align-items: center;
            .hold_place{
                width: 50%;
                .show-case-title{
                    color:#efe8e8;
                    .float-right{
                        float: right;

                    }
                }
                .show-case{
                    width: 100%;
                    border-radius:10px;
                    -webkit-box-shadow: 4px 4px 2px #3a4052;
                    -moz-box-shadow: 4px 4px 2px #3a4052;
                    box-shadow: 4px 4px 2px #3a4052;
                    div{
                        width: 50%;
                        border: 0;
                        display: inline-block;
                        position: relative;
                        img{ width: 100%;}
                        span{
                            color:#efe8e8;
                            background-color: rgba(43, 48, 93, 0.48);
                            position: absolute;bottom: 0px;left: 0px;
                            padding: 0px 15px 0px 15px;
                            border-top-right-radius:30px;
                            border-bottom-right-radius:30px;
                        }
                    }


                }
            }
        }
        .showcase-wait {
            background-image: url(./../../common/img/tv/back_img.jpg);
            background-size: cover;
            height: 100%;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            .hold_OK {
                width: 19%;
                height: 19%;

                img {
                    height: 30px;
                    width: 30px;
                    border-radius: 10px;
                }
                span{
                    color:#fff;
                    line-height: 30px;
                    margin-left: 10px;;
                }
            }
            .hold_Code {
                width: 440px;
                height: 10%;
                .introd{
                    margin-bottom: 30px;
                    text-align: center;
                    color: #fff;
                }
                .code {
                    border-radius: 10px;
                    span{
                        font-size: 30px;
                        border: solid 1px #fff;
                        color:#fff;
                        padding: 10px 20px;
                        margin: 5px;
                        border-radius: 5px;
                    }
                }
            }
            .hold_circle {
                width: 50%;
                height: 50%;
                position: relative;
                background-image: url(./../../common/img/tv/con-circle.png);
                background-size: cover;
                background-position: center;
                display: flex;
                justify-content: center;
                align-items: center;
                -webkit-transition-property: -webkit-transform;
                -webkit-transition-duration: 1s;
                -moz-transition-property: -moz-transform;
                -moz-transition-duration: 1s;
                -webkit-animation: rotate 3s linear infinite;
                -moz-animation: rotate 3s linear infinite;
                -o-animation: rotate 3s linear infinite;
                animation: rotate 3s linear infinite;
            }
            @-webkit-keyframes rotate {
                from {
                    -webkit-transform: rotate(0deg)
                }
                to {
                    -webkit-transform: rotate(360deg)
                }
            }

            @-moz-keyframes rotate {
                from {
                    -moz-transform: rotate(0deg)
                }
                to {
                    -moz-transform: rotate(359deg)
                }
            }

            @-o-keyframes rotate {
                from {
                    -o-transform: rotate(0deg)
                }
                to {
                    -o-transform: rotate(359deg)
                }
            }

            @keyframes rotate {
                from {
                    transform: rotate(0deg)
                }
                to {
                    transform: rotate(359deg)
                }
            }

            .hold_play {
                width: 50%;
                height: 50%;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                .play {
                    width: 10%;
                    border-radius: 10px;
                }
            }

        }
        .showcase-foot{
        }
    }
</style>