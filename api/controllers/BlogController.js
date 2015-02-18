/**
 * BlogController
 *
 * @description :: Server-side logic for managing Blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	home:function(req,res){
		return res.view('index');
	},
  test:function(req,res){
    if(req.param('id') == "hello"){
        res.send("hey you requested hello")
    }else if(req.param('id') == "dumbapi"){
        res.send( "this is a dumb api");
    }else{
        res.send("no id provided");
    }
  }
};

