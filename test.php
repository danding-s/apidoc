<?php  
/**  
 * @apiDefine User 用户操作
 *
 * @apiVersion 1.0.0
 */  
 
/**  
 * @api {post} /User/add 添加用户
 *
 * @apiVersion 1.0.0  
 * @apiName add
 * @apiGroup User
 *
 * @apiParam {String} name 用户名.
 * @apiParam {String} password 用户名密码.
 *  
 * @apiSuccess {Number} code 返回状态码(101 成功).
 * @apiSuccess {Number} id  用户id(非必须).
 * @apiSuccess {String} message 信息提示
 *
 * @apiError 201 缺少输入参数.
 * @apiError 202 添加失败  
 * 
 * @apiSuccessExample {json} 返回:  
 *     HTTP/1.1 200 OK  
 *     {  
 *       "code": 101,
 *       "id": 1,
 *       "message": "添加成功"
 *     }  
 */  
 function addUser(){return;}


/**
 * @api {post} /User/update/id 修改用户
 *
 * @apiVersion 1.0.0
 * @apiName update
 * @apiGroup User
 *
 * @apiParam {Number} id 用户id.
 * @apiParam {String} name 用户名.
 * @apiParam {String} password 用户名密码.
 *
 * @apiSuccess {Number} code 返回状态码 (200成功).
 * @apiSuccess {Number} id 用户id.
 * @apiSuccess {String} message 信息提示
 *
 * @apiError 201 缺少输入参数.
 * @apiError 202 添加失败.
 *
 * @apiSuccessExample {json} 返回:
 *    HTTP/1.1 200 OK
 *    {
 *        "code" : 200,
 *        "id":1
 *        "message": "修改成功"
 *    }
 */
 function updateUser(){return;}
 ?>  