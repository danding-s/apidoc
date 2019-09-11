define({ "api": [
  {
    "type": "post",
    "url": "/User/add",
    "title": "添加用户",
    "version": "1.0.0",
    "name": "add",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户名密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码(101 成功).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id(非必须).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回:  ",
          "content": "HTTP/1.1 200 OK  \n{  \n  \"code\": 101,\n  \"id\": 1,\n  \"message\": \"添加成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "201",
            "description": "<p>缺少输入参数.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "202",
            "description": "<p>添加失败</p>"
          }
        ]
      }
    },
    "filename": "./test.php",
    "groupTitle": "用户操作"
  },
  {
    "type": "post",
    "url": "/User/update/id",
    "title": "修改用户",
    "version": "1.0.0",
    "name": "update",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用户名密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回状态码 (200成功).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>信息提示</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\" : 200,\n    \"id\":1\n    \"message\": \"修改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "201",
            "description": "<p>缺少输入参数.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "202",
            "description": "<p>添加失败.</p>"
          }
        ]
      }
    },
    "filename": "./test.php",
    "groupTitle": "用户操作"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_mnt_e_www_apidoc_doc_main_js",
    "groupTitle": "_mnt_e_www_apidoc_doc_main_js",
    "name": ""
  }
] });
