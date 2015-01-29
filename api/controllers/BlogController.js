/**
 * BlogController
 *
 * @description :: Server-side logic for managing Blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	home:function(req,res){
		return res.view('index');
	}
};

