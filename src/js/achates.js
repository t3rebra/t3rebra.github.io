(function (w,d){ 
    'use_strict';	  
    function fn_achates(){	  
		const achates = {		
			"version":{
				name:"T3rebra Achates",
				call:"t3rebra01",
				alias:"t310",
				id:"1.0",
				description : "Vanilla Js Mini Library",
				filename: "achates.js",
				url:"https://t3rebra.github.io/src/js/achates.js",
				date :  "September 29, 2019 02:57am",
				"author":"t3rebra@gmail.com"
			},
			"ready": (callback=null) => {
				w.onload = callback();
			},	
			"id" : (parent = null, str=null) => {
				if(parent && str) {
					str = String (str);
					let invalid_id = str.match(/[^#a-z0-9-_]/gmi); // a valid id #a-zA-Z0-9-_
					if(!invalid_id) {
						if(str.indexOf("#") == -1 || str.indexOf("#") == 0) {
							return parent.getElementById( str.replace(/#/gmi,'') );
						}
					}
					 else {
						return achates.query(parent, str);
					}
				}
				else if(parent) {
					parent = String (parent);
					let invalid_id = parent.match(/[^#a-z0-9-_]/gmi); // a valid id #a-zA-Z0-9-_
					if(!invalid_id){
						if(parent.indexOf("#") == -1 || parent.indexOf("#") == 0) {
							return d.getElementById( parent.replace(/#/gmi,'') );
						}
					}
					else {
						return achates.query(parent);
					}
				}
				return false;
			},
			"class" : (parent=null, str=null) => {
				if(parent && str) {
					str = String (str);
					let invalid_class = str.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
					if(!invalid_class) {
						if(str.indexOf(".") == -1 || str.indexOf(".") == 0) {
							return parent.getElementsByClassName( str.replace(/\./gmi,'') )[0];
						}
					}
					else {
						return achates.query(parent,str);
					}
				}
				else if(parent) {
					parent = String (parent);
					let invalid_class = parent.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
					if(!invalid_class) {
						if(parent.indexOf(".") == -1 || parent.indexOf(".") == 0) {
							return d.getElementsByClassName( parent.replace(/\./gmi,'') )[0];
						}
					}
					else {
						return achates.query(parent);
					}
				}	
				return false;
			},
			"classes" : (parent=null, str=null) => {
				if(parent && str) {
					str = String (str);
					let invalid_class = str.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
					if(!invalid_class){
						if(str.indexOf(".") == -1 || str.indexOf(".") == 0){
							return parent.getElementsByClassName( str.replace(/\./gmi,'') );
						}
					}
					else {
						return achates.queries(parent, str);
					}
				}
				else if(parent) {
					parent = String (parent);
					let invalid_class = parent.match(/[^.a-z0-9-_]/gmi); // a valid class .a-zA-Z0-9-_
					if(!invalid_class) {
						if(parent.indexOf(".") == -1 || parent.indexOf(".") == 0) {
							return d.getElementsByClassName( parent.replace(/\./gmi,'') );
						}
					}
					else{
						return achates.queries(parent);
					}
				}
				return false;
			},
			"query" : (parent=null, str=null) => { 					
				if(parent, str) {	
					str = String (str);
					return parent.querySelector(str);
				}
				else if(parent) {
					parent = String (parent);
					return d.querySelector(parent);
				}
				return false;		 
			},
			"queries" : (parent=null, str=null) =>  {					
				if(parent && str) { 
					str = String (str);
					return parent.querySelectorAll(str);
				}
				else if(parent){ 
					parent = String (parent);
					return d.querySelectorAll(parent);
				}
				return;	 
			},	
			"tag" : (parent=null, str=null) => { 
				if(parent && str) {
					str = String (str);
					let invalid_tag = str.match(/[^a-z]/gmi); // a valid tag a-zA-Z
					if(!invalid_tag) {
						return parent.getElementsByTagName(str)[0];
					}
					else {
						return achates.queries(parent, str)[0];
					}
				}
				else if(parent) {
					parent = String (parent);
					let invalid_tag = parent.match(/[^a-z]/gmi); // a valid tag a-zA-Z
					if(!invalid_tag) {
						return d.getElementsByTagName(parent)[0];
					}
					else {
						return achates.queries(parent)[0];
					}
				}	
				return false;
			},
			"tags" : (parent=null, str=null) =>
			{ 
				if(parent && str) {
					str = String (str);
					let invalid_tag = str.match(/[^a-z]/gmi); // a valid tag a-zA-Z
					if(!invalid_tag) {
						return parent.getElementsByTagName(str);
					}
					else {
						return achates.queries(parent, str);
					}
				}
				else if(parent) {
					parent = String (parent);
					let invalid_tag = parent.match(/[^a-z]/gmi); // a valid tag a-zA-Z
					if(!invalid_tag) {
						return d.getElementsByTagName(parent);
					}
					else {
						return achates.queries(parent);
					}
				}	
				return false;
			},
			"hash": () => {
				if(typeof w.location.hash !='undefined' && w.location.hash !='') {
					return w.location.hash;		
				}
				return false;
			}
		} 
		achates.queryall = achates.queries;
		return achates;
	}
	if(typeof (w.t3rebra01) === "undefined" || w.t3rebra01 == null || typeof (w.t301) === "undefined" || w.t301 == null) {
		w.t3rebra01 = fn_achates();
		w.t301 = fn_achates();	
		//console.log(w.t3rebra);
		//console.log(JSON.stringify(w.t3rebra));
	}
	else {
		console.info("T3rebra is Defined");
		//console.info(JSON.stringify(w.t3rebra));
	}
})(window, document);
