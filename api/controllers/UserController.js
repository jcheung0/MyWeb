/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    hi:function( req,res){
        return res.send("hi there");
    },
    test:function(req,res){
        return res.view('index');   
    },
    digital_analytics:function(req,res){
    	return res.view('bonnie');
    },
    index:function(req,res){
    	return res.send("test");
    }
};

