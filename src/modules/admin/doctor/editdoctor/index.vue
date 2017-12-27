<template src="./template.html"></template>
<script src="./index.js">
</script>

<style lang="scss">
	.doctor-edit-content {
		.b-d {
			border: 1px solid red;
		}
		.i-must {
			color: #ff0000;
			padding: 5px;
		}
		.f-14 {
			font-size: 14px;
			color: #999999;
		}
		.f-16 {
			font-size: 16px;
			color: #333333;
		}
        .v-a-top{
            vertical-align: top;
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
				height: 20px;
				.s-title-l {
					float: left;
				}
				.s-title-r {
					float: right;
					color: red;
				}
			}
			.doctor-record {
				.record-text-ct {
					padding: 24px 0;
					border-bottom: 1px solid #eaeaea;
					.sel-title {
						font-size: 14px;
						color: #999999;
					}
					.org-name {
						font-size: 16px;
						color: #333333;
						margin-top: 10px;
					}
				}
				.doctor-edit-ct {
					text-align: center;
					padding: 24px;
					.el-button:hover {
						background-color: #9083ED;
						color: #ffffff;
						border: 1px solid #9083ED;
					}
				}
			}
			.doctor-info-ct {
				padding: 20px 0;
				.row-ct {
					padding: 10px;
					.row-item {
						margin: 0 20%;
						width: 500px;
						.row-item-title {
							display: inline-block;
							width: 80px;
                            text-align: right;
                            padding-right: 12px;
						}
                        .year{
                            color: #999999;
                        }
						.row-item-value {
							width: 200px;
						}
						.doctor-img {
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
						.i-close-p {
							position: absolute;
							top: -5px;
							right: -5px;
							border-radius: 15px;
							cursor: pointer;
						}
						.el-icon-pa-close:before {
							color: #cc0000;
						}
						.goodat {
							display: inline-block;
							margin-right: 10px;
							background: #9287EB;
							padding: 3px 10px;
							border-radius: 4px;
							color: #ffffff;
							position: relative;
						}
					}
				}
			}
		}
	}
</style>