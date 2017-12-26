<template src="./template.html"></template>
<script src="./index.js">
</script>

<style lang="scss">
	.admin-clinic-edit {
		.b-d {
			border: 1px solid red;
		}
		.f-14 {
			font-size: 14px;
			color: #999999;
		}
		.f-16 {
			font-size: 16px;
			color: #333333;
		}
		.i-block {
			display: inline-block;
		}
		.i-must {
			color: #ff0000;
			padding: 5px;
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
			width: 83%;
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
			.clinic-record {
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
				.clinic-edit-ct {
					text-align: center;
					padding: 24px;
					.el-button:hover {
						background-color: #9083ED;
						color: #ffffff;
						border: 1px solid #9083ED;
					}
				}
			}
			.clinic-info-ct {
				padding: 20px 0;
				.row-ct {
					padding: 10px;
					.row-item {
						display: inline-block;
						width: 300px;
						.row-item-title {
							display: inline-block;
							width: 80px;
						}
						.row-item-value {
							width: 200px;
						}
						.major-project {
							word-break: keep-all;
							width: 480px;
							display: inline-block;
							padding-left: 84px;
							box-sizing: border-box;
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
								position: relative;
								display: inline-block;
								margin: 0 8px 8px 0;
								background: #9287EB;
								padding: 3px 10px;
								border-radius: 4px;
								color: #ffffff;
							}
						}
					}
					.logo-ct {
						width: 500px;
						position: relative;
						/*  background: url("../../../../common/img/i-add.png") no-repeat;*/
						.up-logo {
							width: 100px;
							height: 100px;
							/*margin-right: 8px;*/
							/* cursor: pointer;*/
						}
						.uploader-ct {
							display: inline-block;
							width: 100px;
						}
						.uploader-ct .el-upload {
							border: 1px dashed #d9d9d9;
							border-radius: 6px;
							cursor: pointer;
							position: relative;
							overflow: hidden;
						}
						.uploader-ct .el-upload:hover {
							border-color: #409EFF;
						}
						.avatar-uploader-icon {
							font-size: 28px;
							color: #8c939d;
							width: 100px;
							height: 100px;
							line-height: 100px;
							text-align: center;
						}
						.format-ct {
							display: inline-block;
							vertical-align: bottom;
							width: 250px;
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
					}
				}
			}
			.out-box-border {
				width: 100%;
				margin-bottom: 24px;
				.map-ct {
					width: 100%;
					height: 400px;
				}
			}
		}
	}
</style>