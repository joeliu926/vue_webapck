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
            background-image:url(./../../common/img/tv/play.png);
            background-size: cover;
            height: 100%;
            background-position:center;
            display: flex;
            justify-content: center;
            align-items: center;
            .hold_place{
                width: 50%;
                .show-case-title{
                    display: none;
                    color:#f9f7f7;
                    height:21px;
                    text-align: center;
                    padding-bottom:5px;
                    .float-right{
                        float: right;
                    }
                    .float-left{
                        float: left;
                    }
                    .show-case-name{

                    }
                }
                .show-case{
                    width: 100%;
                    border-radius:10px;
                    div{
                        width: 50%;
                        border: 0;
                        display: inline-block;
                        position: relative;
                        img{ width: 100%;
                            -webkit-box-reflect: below 0 -webkit-linear-gradient(top,rgba(250,250,250,0),rgba(250,250,250,.0) 90%,rgba(250,250,250,0.6));
                            box-reflect: below 0 -webkit-linear-gradient(top,rgba(250,250,250,0),rgba(250,250,250,.0) 90%,rgba(250,250,250,0.6));

                        }
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
                .fade-in{
                    -webkit-animation:fadeInLeft 1s ease both;
                    animation:fadeInLeft 1s ease both;
                    float: right;
                }
                .fade-out{
                    -webkit-animation:fadeOutRight 1s ease both;
                    animation:fadeOutRight 1s ease both;
                    float: left;
                }
                .fade-none{
                    display: none;
                }
                @-webkit-keyframes fadeOutRight{
                    from{
                        opacity:1;
                        -webkit-transform:translate3d(0,0,0);
                        width:100%;
                        height: 100%;
                    }
                    to{
                        opacity:0;
                        -webkit-transform:translate3d(-100%,0,0);
                        width:0%;
                        height: 0px;
                    }
                }
                @-webkit-keyframes fadeInLeft{
                    from{
                        opacity:0;
                        -webkit-transform:translate3d(100%,0,0);
                        width:0%;
                        height: 0px;
                    }
                    to{
                        opacity:1;
                        -webkit-transform:translate3d(0,0,0);
                        width:100%;
                        height: 100%;
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
                .sky {
                    height: 220px;
                    position: absolute;
                    right:0px;
                    left:0px;
                    bottom:0px;
                    overflow: hidden;
                }
                .sky .clouds_one {
                    background: url("./../../common/img/tv/cloud_one.png");
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 300%;
                    -webkit-animation: cloud_one 55s linear infinite;
                    -moz-animation: cloud_one 55s linear infinite;
                    -o-animation: cloud_one 55s linear infinite;
                    animation: cloud_one 55s linear infinite;
                    -webkit-transform: translate3d(0, 0, 0);
                    -ms-transform: translate3d(0, 0, 0);
                    -o-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
                .sky .clouds_two {
                    background: url("./../../common/img/tv/cloud_two.png");
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 300%;
                    -webkit-animation: cloud_two 85s linear infinite;
                    -moz-animation: cloud_two 85s linear infinite;
                    -o-animation: cloud_two 85s linear infinite;
                    animation: cloud_two 85s linear infinite;
                    -webkit-transform: translate3d(0, 0, 0);
                    -ms-transform: translate3d(0, 0, 0);
                    -o-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
                .sky .clouds_three {
                    background: url("./../../common/img/tv/cloud_three.png");
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 300%;
                    -webkit-animation: cloud_three 110s linear infinite;
                    -moz-animation: cloud_three 110s linear infinite;
                    -o-animation: cloud_three 110s linear infinite;
                    animation: cloud_three 110s linear infinite;
                    -webkit-transform: translate3d(0, 0, 0);
                    -ms-transform: translate3d(0, 0, 0);
                    -o-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
                @-webkit-keyframes cloud_one {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }
                @-moz-keyframes cloud_one {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }
                @keyframes cloud_one {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }

                @-webkit-keyframes cloud_two {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }
                @-moz-keyframes cloud_two {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }
                @keyframes cloud_two {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }

                @-webkit-keyframes cloud_three {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }
                @-moz-keyframes cloud_three {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
                    }
                }
                @keyframes cloud_three {
                    0% {
                        left: 0
                    }
                    100% {
                        left: -200%
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