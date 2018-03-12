<template src="./template.html"></template>
<script src="./index.js">
</script>

<style lang="scss">
    .el-loading-mask{
        background-color: rgba(0,0,0,0.6) !important;
    }
	.admin-clinic-sync-data {

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
						width: 100%;
						.row-item-title {
							display: inline-block;
                            width: 80px;
                            text-align: right;
                            padding-right: 12px;
						}
						.row-item-value {
							width: 600px;
                            margin-right: 25px;
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

				}
			}
		}
	}
</style>