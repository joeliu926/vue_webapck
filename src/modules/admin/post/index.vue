<template src="./template.html"></template>
<script src="./index.js">
</script>

<style lang="scss">
	.post-content {
        .el-button:hover{
            background-color: #9083ED;
            color: #ffffff;
            border: 1px solid #9083ED;
        }
		.b-d {
			border: 1px solid red;
		}
        .f-12 {
            font-size: 12px;
            color: #999999;
        }
		.f-14 {
			font-size: 14px;
			color: #999999;
		}
		.f-16 {
			font-size: 16px;
			color: #333333;
		}
		.cur {
			cursor: pointer;
		}
		.i-block {
			display: inline-block;
			box-sizing: border-box;
		}
		.fram-box {
			height: 100%;
			display: inline-block;
			box-sizing: border-box;
			padding: 12px;
			vertical-align: top;
		}
		.admin-lbox {
			width: 15%;
		}
		.admin-rbox {
			width: 85%;
			.segment-title {
				border-bottom: 1px solid #eaeaea;
				padding: 5px 0;
			}
			.post-record {
				.record-text-ct {
					padding: 24px 0;
					border-bottom: 1px solid #eaeaea;
					.sel-title {}
					.org-name {
						margin-top: 10px;
					}
				}
			}
			.out-box-border {
				.map-ct {
					width: 100%;
					height: 400px;
				}
			}
			.segment-ct {
				.segment-item {
					padding: 20px 0;
					.s-name {
						vertical-align: top;
						padding: 0 24px 0 0;
						width: 80px;
						color: #333333;
					}
					.select-item {
						color: #9083ED;
					}
					.s-item-ct {
						/**********顶部选择版式***********/
						.post-classify {
							margin: 0 10px 0 0;
							cursor: pointer;
							.add-cate {
								vertical-align: middle;
								margin-bottom: 4px;
							}
							.sure-btn {
								width: 24px;
								padding: 0 4px;
							}
							.sure-btn:hover {
								color: #9083Ed;
							}
							.twidth {
								width: 100px;
							}
						}
						.classify-hover:hover {
							color: #9083Ed;
						}
						.edit-icon {
							visibility: hidden;
							width: 20px;
							padding-left: 4px;
						}
						.classify-hover:hover .edit-icon {
							visibility: visible;
						}
						.add-post-des {
							padding: 100px 0 0 0;
							height: 300px;
							box-sizing: border-box;
							border-bottom: 1px solid #dddddd;
						}
					}
					.f-choice {
						cursor: pointer;
					}
					.format-item {
						/************图片模板版式**************/
						width: 250px;
						height: 342px;
						vertical-align: top;
						position: relative;
						margin: 0 24px 24px 0;
						border: 1px solid #dddddd;
						box-sizing: border-box;
						.post-pic-ct {
							width: 250px;
							height: 283px;
                             box-sizing: border-box;
                            overflow: hidden;
                            .poster-size{
                                width: 100%;
                                height: 283px;
                                display: inline-block;
                                cursor: pointer;
                                background-position: center center;
                                background-repeat: no-repeat;
                                background-size: 100%;
                            }
						}
						.post-pic-ct:hover .close-icon {
							display: inline;
						}
						.post-pic {
							width: 100%;
						}
						.post-des-ct {
							width: 100%;
							bottom: 0;
							position: absolute;
							box-sizing: border-box;
							padding: 0 12px;
							height: 60px;
							.des-logo {
								height: 60px;
								line-height: 60px;
								vertical-align: middle;
								text-align: center;
								position: relative;
								.img-logo {
									height: 48px;
									width: 48px;
									vertical-align: middle;
									margin-right: 12px;
								}
								.clinic-logo {
									width: 20px;
									height: 20px;
									background-position: center center;
									background-repeat: no-repeat;
									background-size: 100%;
									position: absolute;
									box-sizing: border-box;
							        z-index: 100;
									left: 0;
									top: 50%;
									margin-top: -8px;
									margin-left: 14px;
									border-radius: 50%;
								}
							}
                            .clinic-name{
                                width: 150px;
                                word-break: keep-all;
                                word-wrap:break-word;
                                vertical-align: middle;
                            }
						}
						.close-icon {
							position: absolute;
							right: -10px;
							top: -10px;
							cursor: pointer;
							display: none;
							.img {
								height: 20px;
								width: 20px;
							}
						}
					}
				}
			}
		}
		.poster-width {
			width: 92%;
			
			.category-pagination-align {
				text-align: right;
				border: none;
				margin-top: 5px;
			}
		}
		.mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 1000;
			.mask-ct {
				width: 500px;
				height: 400px;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top: -200px;
				margin-left: -250px;
				background: #ffffff;
				border-radius: 4px;
				.end-close {
					width: 30px;
					height: 30px;
					position: absolute;
					right: -25px;
					top: -20px;
					cursor: pointer;
				}
				.select-ct {
					text-align: center;
					padding: 50px 0;
				}
				.select-img-ct {
					text-align: center;
					.post-img {
						display: inline-block;
						width: 140px;
						height: 140px;
						border: 1px dashed #bfcbd9;
						border-radius: 6px;
						cursor: pointer;
						background-position: center center;
						background-repeat: no-repeat;
						background-size: 100%;
					}
				}
				.submit-ct {
					text-align: center;
					padding: 24px;
				}
			}
		}
        /********************弹出蒙层***start********************/
        .p-mask{
            position: fixed;top: 0;left:0;right:0;bottom:0;background: rgba(0,0,0,0.6);z-index: 11;
            .croper-ct{
                width:420px;height: 620px;margin: 100px auto;background: #ffffff;padding: 20px 60px;
                box-sizing: border-box;
                border-radius: 10px;
                position: relative;
                .el-button:hover{
                    background-color: #9083ED;
                    color: #ffffff;
                    border: 1px solid #9083ED;
                }
                .end-close{
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    right: -25px;
                    top:-20px;
                    cursor: pointer;
                }
                .p-title{
                    font-size: 25px;
                    margin-bottom: 25px;
                }
                .p-des{
                    margin-top: 20px;
                }
            }
        }

        /********************弹出蒙层***end********************/
	}
</style>