/**
 * Created by JoeLiu on 2017-9-15.
 */
/*import AdInput from 'adminUI/components/admin-input.vue';*/
import tree from '../tree/index.vue';
export default {
	components: {
		tree
	},
	data() {
		return {
			pageNo: 1,
			pageSize: 5,
			count: 0,
			doctorlist: '医生列表',
			aDoctorlist: [],
			oDoctor: {
				"age": 0,
				"brief": "",
				"clinicId": 0,
				"duty": "",
				"gender": "",
				"id": 0,
				"image": "string",
				"jobCategory": "string",
				"jobExperience": 0,
				"jobTitle": "string",
				"loginName": "string",
				"name": "string",
				"picture": "string",
				"specialty": "",
				"tenantId": 0
			}
		};
	},
	created() {
		let _this = this;
		_this.fGetDoctorList();

	},
	filters: {
		dateFilter: function() {

		},
		genderFilter: function(input) {
			let result = "其他";
			if(input == "1") {
				result = "男";
			} else if(input == "2") {
				result = "女";
			}
			return result;
		}
	},
	mounted() {},
	destroyed() {

	},
	methods: {
		fCreateDoctor() {
			this.$router.push("/admin/doctor/edit/0");
		},
		fEidtDoctor(id) {
			this.$router.push("/admin/doctor/edit/" + id);
		},
		fDelData(item){
		    let _This=this;
            this.$confirm('确认删吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _This.fDeleteDoctor(item);
            });
        },
		fDeleteDoctor(item) {
			//console.log("doctor--delete---item-----", item);
			if(!item.id) {
				return false;
			}
			let _This = this;
			//return false;
			let postData = item;
			if(postData.hasOwnProperty("page")) {
				delete postData.page;
			}
			_.ajax({
				url: '/admin/doctor/delete',
				method: 'POST',
				data: postData,
				success: function(result) {
					//console.log("doctor--delete--------", result);
					if(result.code == 0) {
						_This.$message({
							message: '删除成功',
							type: 'success'
						});
						let deIndex = -1;
						_This.aDoctorlist.forEach((oitem, index) => {
							//console.log("--------", oitem == item);
							if(oitem.id == item.id) {
								deIndex = index;
							}
						});
						if(deIndex >= 0) {
							_This.aDoctorlist.splice(deIndex, 1);
						}
					} else {
						_This.$message.error("删除失败");
					}
				}
			}, 'withCredentials');
		},
		gohome() {
			this.$router.push("/");
		},
		handleCurrentChange(num) {
			let _This = this;
			_This.pageNo = num;
			_This.fGetDoctorList();
		},
		/**
		 * 获取医生列表
		 */
		fGetDoctorList() {
			let _This = this;
			let postData = {
				pageNo: _This.pageNo,
				pageSize: _This.pageSize
			};
			_.ajax({
				url: '/admin/doctor/list',
				method: 'POST',
				data: postData,
				success: function(result) {
					//console.log("doctor--list--------", result);
					if(result.code == 0 && result.data.list.length > 0) {
						_This.aDoctorlist = result.data.list;
						_This.count = result.data.count;
					}
				}
			}, 'withCredentials');
		}
	},
	watch: {
		$route() {}
	}
}