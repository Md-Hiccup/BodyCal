/**
 * Created by ubuntu on 16/6/16.
 */
module.exports=function(app)
{
    app.get('/' , function(req ,res){
        res.render('web.html');
    });
    app.get('/web' , function(req ,res ){
        res.render('web.html');
    });
};