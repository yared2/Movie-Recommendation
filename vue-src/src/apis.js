module.exports = class Api {
	getHostUrl(){
		return 'https://mighty-escarpment-32961.herokuapp.com';
	}
	getApiVersion(){
		return 'v0';
	}
	getApiUrl(){
		return this.getHostUrl()+'/api'+'/'+this.getApiVersion();
	}
	
	getRegisterApi(){
		return this.getApiUrl()+'/register';
	}
	getLoginApi(){
		return this.getApiUrl()+'/login';
	}
	getUserInfoApi(){
		return this.getApiUrl()+'/users';//+{id} with get request
	}
	getTopTrendingMovieApi(){
		return this.getApiUrl()+'/toptrending/us';
	}
	getTopSimilarMovieApi(){
		return this.getApiUrl()+'/topsimilar';//+{movieId}
	}
	getUserTopMoviesApi(){
		return this.getApiUrl()+'/toptrending/us';//+{movieId}
	}
	
}