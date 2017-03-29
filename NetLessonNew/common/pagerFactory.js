/**
 * Created by zhangbowen on 2016/10/11.
 */
define([], function() {
	return ['$httpApi', function($httpApi) {
		var Pager = function(config) {
			this.act = config.act;
			this.list = [];
			this.busy = false;
			this.currentPage = 1;
			this.rowCountPerPage = 10;
			this.params = config.params;
			this.totalPage = 0;
			this.isEnd = false;
			this.noData = false;
			this.itemLoad = config.itemLoad;
		};
		Pager.prototype.addToList = function(list) {
			for(var i in list) {
				var item = list[i];
				this.list.push(item);
				if(this.itemLoad) {
					this.itemLoad(item);
				}
			}
		}
		Pager.prototype.loadMore = function() {
			if(this.busy) return;
			this.busy = true;
			this.params["currentPage"] = this.currentPage;
			this.params["rowCountPerPage"] = this.rowCountPerPage;
			$httpApi.post(this.act, this.params).success(function(pagerData) {
				if(pagerData.dataList) {
					this.addToList(pagerData.dataList);
					if(pagerData.dataList.length == 0) {
						this.noData = true
					}
				}
				if(pagerData.dataInfo) {
					this.addToList(pagerData.dataInfo);
					if(pagerData.dataInfo.length == 0) {
						this.noData = true
					}
				}
				this.totalPage = pagerData.totalPage;
				if(this.currentPage >= this.totalPage) {
					this.isEnd = true;
				}
				this.currentPage++;

				this.busy = false;

			}.bind(this));
		};
		return Pager;
	}];

});