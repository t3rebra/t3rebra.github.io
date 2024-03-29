(function(w, d)
{
	'use_strict';
	function fn_aciculina() {		
		function dynamicallyLoadScript(url) {
			/*
			=================================================
			Dynamic Script Loading or File Inclusion
			=================================================
			*/
			return new Promise(function(resolve, reject) {
				var script = document.createElement("script");
				script.src = url;
				script.onload = resolve;
				script.onerror = () => reject(new Error(`Error when loading ${url}!`));

				var firstScript = d.getElementsByTagName('script')[0];
				if(firstScript){				
				firstScript.form_field_parentNode.insertBefore(script, firstScript);
				}
				else {
					document.body.appendform_field_child(script);
				}				
			});
		}
		function isElement(parent = null){
		/*
		=================================================
		Object Validator
		=================================================
		*/
			if(typeof parent !=='object' && typeof parent.nodeName !=="number" && typeof parent.nodeName !== "string"){
				parent = d.querySelector(parent);
				if(!parent){
					(aciculina.log_error) && console.warn(`Invalid element node (${parent})`);
				}	
				else{
					return parent;
				}
			}
			else {
				return parent;
			}
		}		
		let toId = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementById
		=================================================
		*/
			if(parent && child) {
				parent = isElement(parent);
				child = String (child);
				return (parent.getElementById( child.replace(/#/gmi,'') )) ? parent.getElementById( child.replace(/#/gmi,'') ) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementById( parent.replace(/#/gmi,'') )) ? d.getElementById( parent.replace(/#/gmi,'') ) : null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toId(parent = string, child = string) or toId(string)");
		}		
		let toClass = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByClassName Zero index
		=================================================
		*/
			if(parent && child) {
				parent = isElement(parent);
				child = String (child);
				return (parent.getElementsByClassName( str.replace(/\./gmi,'') )[0]) ? parent.getElementsByClassName( str.replace(/\./gmi,'') )[0] : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByClassName( parent.replace(/\./gmi,'') )[0]) ? d.getElementsByClassName( parent.replace(/\./gmi,'') )[0] : null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toClass(parent = string, child = string) or toClass(string)");
		}		
		let toClasses = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByClassName All indexes
		=================================================
		*/
			if(parent && child) {
				parent = isElement(parent);
				child = String (child);
				return (parent.getElementsByClassName( str.replace(/\./gmi,'') )) ? parent.getElementsByClassName( str.replace(/\./gmi,'') ) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByClassName( parent.replace(/\./gmi,'') )) ? d.getElementsByClassName( parent.replace(/\./gmi,'') ): null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toClasses(parent = string, child = string) or toClasses(string)");
		}		
		let toTag = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByTagName Zero index
		=================================================
		*/
			if(parent && child) {
				parent=isElement(parent);
				child = String (child);
				return (parent.getElementsByTagName(str)[0]) ? parent.getElementsByTagName(str)[0] : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByTagName(parent)[0]) ? d.getElementsByTagName(parent)[0] : null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toTag(parent = string, child = string) or toTag(string)");
		}		
		let toTags = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for getElementsByTagName All indexes
		=================================================
		*/
			if(parent && child) {
				parent = isElement(parent);
				child = String (child);
				return (parent.getElementsByTagName(str)) ? parent.getElementsByTagName(str) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.getElementsByTagName(parent)) ? d.getElementsByTagName(parent) : null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toTags(parent = string, child = string) or toTags(string)");
		}
		let toQuery = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for QuerySelector Zero index
		=================================================
		*/
			if(parent && child) {
				parent = isElement(parent);
				child = String (child);
				return (parent.querySelector(child)) ? parent.querySelector(child) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.querySelector(parent)) ? d.querySelector(parent) : null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toQuery(parent = string, child = string) or toQuery(string)");
		}
		let toQueryAll = (parent = null, child=null) => {
		/*
		=================================================
		Shorthand for QuerySelector All indexes
		=================================================
		*/
			if(parent && child) {
				parent = isElement(parent);
				child = String (child);
				return (parent.querySelectorAll(child)) ? parent.querySelectorAll(child) : null;
			}
			else if(parent) {
				parent = String (parent);
				return (d.querySelectorAll(parent)) ? d.querySelectorAll(parent) : null;
			}
			(aciculina.log_error) && console.warn("Invalid use of function arguments toQueries(parent = string, child = string) or toQueries(string)");
		}		
		let toQueries = toQueryAll;
		if (window.Element && !Element.prototype.closest) {
			Element.prototype.closest =
			function(s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i,
				el = this;
				do {
					i = matches.length;
					while (--i >= 0 && matches.item(i) !== el) {};
				} while ((i < 0) && (el = el.parentElement));
				return el;
			};
		}
		const aciculina = {			
            version : {				
				/*
				=================================================
				Plugin Destails 
				=================================================
				*/
				name:"Terebra Aciculina",
				id:"1.0",
				description : "Centralized form validation in a single ajax request template",
				filename: "aciculina.js",
				date :  "June 29, 2019 2:00pm",
				author:"t3rebra@gmail.com",
			},
			log_error : 0,
			isEmail : function isEmail(email) {
				/*
				=================================================
				Email validator
				=================================================
				*/
				const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(String(email).toLowerCase());
			},
			isUrl : function isUrl(url) {
				/*
				=================================================
				URL validator
				=================================================
				*/
				if(String (url).toLowerCase().replace(/http:\/\//, '') == 'localhost' ) {
					return true;
				}
				const res = new RegExp('^((ft|htt)ps?:\\/\\/)?'+ // protocol
					'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
					'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
					'(\\:\\d+)?(\\/[-a-z\\d%_@.~+]*)*'+ // port and path
					'((\\?|\\#)[:;&a-z\\d%_.~+=\\/-]*)?'+ // query string
					'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
					return res.test(String(url));
			},
			ajax_data : {
				/*
				=================================================
				Ajax Data Sent to Server
				=================================================
				*/
				rawdata:[],
				filedata:[],
				formdata: new FormData(),
				response:[],
				get sent(){return this.formdata;},				
				get received(){return this.response;}
			},
            ajax_settings: {
				/*
				=================================================
				Ajax Settings Sent to Server
				=================================================
				*/
				type:"POST",
				url: "/",
				async: true,
				responseType:"json",
				withCredentials: true,
				crossDomain:true,
				cache: false,
				user: null,
				password: null,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",//'multipart/form-data',
				processData: true,
				xrequestedWith:'XMLHttpRequest'
			},
			ajax_timeout : function ajax_timeout(ms, callback=null) {
				/*
				=================================================
				Timeout or delay function
				=================================================
				*/
				return new Promise(function(resolve, reject) {
					setTimeout(function() {
						(callback) ? callback() : '';
					}, ms);
				});
			},
			ajax_run:null,
			ajax_done:null,
			ajax_fail:null,
			ajax_complete:null,	
			ajax_request : function ajax_request(ajax_run=null, ajax_done =null, ajax_fail=null, ajax_complete=null) {
				/*
				=================================================
				Centralized ajax request
				=================================================
				*/
				ajax_run = (ajax_run!=null) ? ajax_run : this.ajax_run;
				ajax_done = (ajax_done!=null) ? ajax_done : this.ajax_done;
				ajax_fail= (ajax_fail!=null) ? ajax_fail : this.ajax_fail;
				ajax_complete =(ajax_complete!=null) ? ajax_complete : this.ajax_complete;
				
				// code for modern browsers and code for old IE browsers
				const xhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				
				xhttp.onreadystatechange = function() {
					if (this.readyState == 1) {
						console.info('The request to server connection established...');
					}
					if (this.readyState == 2) {
						console.info('The request received ...');
					}
					if (this.readyState == 3) {
						if(ajax_run) {
							return ajax_run();
						}
						else {
							console.info('The processing request...');
						}
					}
					if (this.readyState == 4 && this.status == 200) {
						if(aciculina.ajax_settings['responseType']=='json') {
						  	aciculina.ajax_data['response'] = this.response;
						}
						else {
						  	aciculina.ajax_data['response'] = this.responseText;
						}
						if(ajax_done) {
						  	return ajax_done(aciculina.ajax_data['response']);
						}
						else {
							console.group('Server Request - Result');
							console.info(aciculina.ajax_data['response']);
							console.info(`Success ${xhttp.status}: ${xhttp.statusText}`);
							console.table(xhttp.getAllResponseHeaders());
							console.groupEnd();
							//return aciculina.ajax_data['response'];
						}
					}
					else if(this.readyState == 4 && this.status != 200) {
						if(ajax_fail) {
							return ajax_fail();
						}
						else {
							console.error(`Error ${xhttp.status}: ${xhttp.statusText}`);
						}
					}
					if (this.readyState == 4) {
						if(ajax_complete) {
							return ajax_complete();
						}
						else {
							console.table(aciculina.ajax_data);
							console.info(`Server Complete Response ${xhttp.status}: ${xhttp.statusText}`);
						}
						let fd = [];
						for(let key of aciculina.ajax_data['formdata'].keys()) {
							fd.push(key);
						}
						for(let i =0; i < fd.length; i++) {
							aciculina.ajax_data['formdata'].delete(fd[i]);
						}
					}
				}
				xhttp.open(aciculina.ajax_settings['type'], 'https://cors-anywhere.herokuapp.com/'+aciculina.ajax_settings['url'], aciculina.ajax_settings['async'], aciculina.ajax_settings['user'], aciculina.ajax_settings['password']);
				xhttp.responseType = aciculina.ajax_settings['responseType'];
				xhttp.setRequestHeader("Accept", aciculina.ajax_settings['responseType']);

				xhttp.send(aciculina.ajax_data['formdata']);
			},					
			form_field_parent : "",
			form_field_child : "",
			form_button :"",
			form_field_ignore : 'ignore',				
			form_init : function form_init(form_field_parent="", form_field_child="", form_button="") {				
				/*
				=================================================
				Initialize Form 
				=================================================
				*/
				if(form_field_parent==="") {
					this.form_field_parent = "";
					this.form_field_child = (form_field_child) ? String (form_field_child) : "";
					this.form_button = (form_button) ? String (form_button) : "";
				}
				else if(Array.isArray(form_field_parent)) {
					this.form_field_parent = (form_field_parent[0]) ? String (form_field_parent[0]) :"";
					this.form_field_child = (form_field_parent[1]) ? String (form_field_parent[1]) : "";
					this.form_button = (form_field_parent[2]) ? String (form_field_parent[2]) : "";
				}
				else if(typeof form_field_parent == 'string') {
					this.form_field_parent = (form_field_parent) ? String (form_field_parent) : "";
					this.form_field_child = (form_field_child) ? String (form_field_child) : "";
					this.form_button = (form_button) ? String (form_button) : "";
				}
				else if(Object.keys(form_field_parent) && typeof form_field_parent === "object") {
					this.form_field_parent = (form_field_parent.form_field_parent) ? String (form_field_parent.form_field_parent) : "";
					this.form_field_child = (form_field_parent.form_field_child) ? String (form_field_parent.form_field_child) : "";
					this.form_button = (form_field_parent.form_button) ? String (form_field_parent.form_button) : "";
				}
				else if(Object.keys(form_field_parent[0]) && typeof form_field_parent === "object" ) {
					this.form_field_parent = (form_field_parent[0].form_field_parent) ? String (form_field_parent[0].form_field_parent) : "";
					this.form_field_child = (form_field_parent[0].form_field_child) ? String (form_field_parent[0].form_field_child) : "";
					this.form_button = (form_field_parent[0].form_button) ? String (form_field_parent[0].form_button) : "";
				}
				try{
					aciculina.form_oninput();
					aciculina.form_reset();
					aciculina.form_focus();
					let el = (this.form_field_parent) ? toQueries(this.form_field_parent+' '+this.form_field_child) : toQueries(this.form_field_child);	
					
					if(toQuery(this.form_field_parent).nodeName.toLowerCase() =="form") {
						toQuery(this.form_field_parent).addEventListener("keyup", function(e){ if (e.keyCode == 13 || e.which == 13 ){e.preventDefault();}});
						toQuery(this.form_field_parent).addEventListener("keypress",function(e){ if (e.keyCode == 13 || e.which == 13 ){e.preventDefault();}});
						toQuery(this.form_field_parent).addEventListener("keydown", function(e){ if (e.keyCode == 13 || e.which == 13 ){e.preventDefault();}});
					}
					for(let i = 0; i < el.length; i++) {
						el[i].addEventListener("keyup", function(e) {
							if (e.keyCode == 13 || e.which == 13 ) { //&& e.shiftKey
								if(i+1 < el.length) {
									e.preventDefault();
									if(String (this.value) !='') {
										el[i+1].focus();
									}
								}
								else{
									aciculina.form_submit();
								}
							}							
							else if(e.keyCode == 8 || e.which == 8)  {
								if(String (this.value).length == 0) {
									if(i-1 >= 0) {
										el[i-1].focus();
									}
								}
							}}, false);
					}
				}
				catch(e){
					console.error(e.message);
				}
			},								
			form_oninput : function form_oninput(el="") {
				/*
				=================================================
				On input event reset input field border and value
				=================================================
				*/
				if(el) {					
					el = String (el);
					let array_el = (this.form_field_parent) ? toQueries(this.form_field_parent+' '+el) : toQueries(el);
					if(!array_el) {
						(aciculina.log_error) && console.warn(`No valid element node found for ${array_el}`);
					}					
					for(let i=0; i < array_el.length; i++) {
						array_el[i].oninput = (e)=>{ array_el[i].style.border=''; };
					}
				}
				else {
					if(typeof this.form_field_child =='string' && this.form_field_child!=="") {
						this.form_oninput(this.form_field_child);
					}
					else {
						if(this.form_field_child==="") {
							(aciculina.log_error) && console.warn('No resource or valid value was set');
						}
						for(let i =0; i < this.form_field_child.length; i++) {
							this.form_oninput(this.form_field_child[i]);
						}
					}
				}
			},
			form_focus : function form_focus(el="") {
				/*
				=================================================
				On focus input field event
				=================================================
				*/
				if(el) {
					el = String (el);
					let array_el = (this.form_field_parent) ? toQueries(this.form_field_parent+' '+el) : toQueries(el);
					for(let i =0; i < array_el.length; i++) {
						if( (array_el[i].tagName).toLowerCase() != 'button' && (array_el[i].type).toLowerCase() !='submit') {
							if( String (array_el[i].value) === '' || Number (array_el[i].value) === 0  || String (array_el[i].value).length === 0) {
								array_el[i].focus();
								return;
							}
						}
					}
				}
				else {
					if(typeof this.form_field_child == 'string' && this.form_field_child!=="") {
						this.form_focus(this.form_field_child);
					}
					else {
						if(this.form_field_child==="") {
							(aciculina.log_error) && console.warn('No resource or valid value was set');
						}
						for(let i =0; i < (this.form_field_child).length; i++) {
							this.form_focus(this.form_field_child[i]);
						}
					}
				}
			},
			form_reset : function form_reset(el="") {
				/*
				=================================================
				On reset form inputs field border and values
				=================================================
				*/
				if(el) {
					el = String (el);
					let array_el = (this.form_field_parent) ? toQueries(this.form_field_parent+' '+el) : toQueries(el);
					for(let i =0; i < array_el.length; i++) {
						if( (array_el[i].tagName).toLowerCase() != 'button' && (array_el[i].type).toLowerCase() !='submit') {
							if(this.form_field_ignore) {
								if(array_el[i] !== toClass(this.form_field_ignore)) {
									if( array_el[i].tagName != 'select' || array_el[i].type != 'checkbox' || array_el[i].type != 'radio' ) {
										array_el[i].value='';
										array_el[i].style.border='';
									}								
								}
							}
						}
					}
				}
				else {
					if(typeof this.form_field_child =='string' && this.form_field_child!=="") {
						this.form_reset(this.form_field_child);
					}
					else {
						if(this.form_field_child==="") {
							(aciculina.log_error) && console.warn('No resource or valid value was set');
						}
						for(let i =0; i < this.form_field_child.length; i++) {
							this.form_reset(this.form_field_child[i]);
						}
					}
				}
			},
			form_click : function form_click(el="", callback) {
				/*
				=================================================
				Trigger on click event
				=================================================
				*/		
				function do_action(el, callback) {
					el.addEventListener("click", function(e) { 
						e.preventDefault();
						if(typeof callback =="function") {
							return callback();
						}
					});
				}
				if(typeof el == "function") {
					if(!this.form_field_parent) {
						if(this.form_button && toQuery(this.form_button)) {
							do_action(toQuery(this.form_button), el);
						}
						else {
							(aciculina.log_error) && console.warn(`No valid element node found for ${this.form_button}`);	
						}
					}
					else {						
						if(toQuery(this.form_field_parent, this.form_button)){
							do_action(toQuery(this.form_field_parent, this.form_button),el);
						}
						else if(toQuery(this.form_field_parent, 'input[type="submit"]')){
							do_action(toQuery(this.form_field_parent, 'input[type="submit"]'), el);
						}
						else if(toQuery(this.form_field_parent, 'button[type="submit"]')){
							do_action(toQuery(this.form_field_parent, 'button[type="submit"]'), el);
						}						
						else{
							(aciculina.log_error) && console.warn('No valid submit button element found');
						}					
					}	
				}					
				else if(typeof el == "string") {
					el = String (el);
					el = (this.form_field_parent) ? toQuery(this.form_field_parent+' '+el) : toQuery(el);
					do_action(el, callback);
				}
				else {
					(aciculina.log_error) && console.warn('Invalid arguments');
				}
			},
			form_submit : function form_submit() {
				/*
				=================================================
				Trigger submit form
				=================================================
				*/
				let el = (this.form_field_parent) ? toQuery(this.form_field_parent) : "";
				if(!el) {
					if(this.form_button && toQuery(this.form_button)) {
							toQuery(this.form_button).click();
						}
					else {
						(aciculina.log_error) && console.warn(`No valid element node found for ${el}`);	
					}
						
				}
				else {
					if(el.tagName == 'form') {
						el.submit();
					}
					else if(toQuery(el, 'input[type="submit"]')){
						toQuery(el, 'input[type="submit"]').click();
					}
					else if(toQuery(el, 'button[type="submit"]')){
						toQuery(el, 'button[type="submit"]').click();
					}
					else if(toQuery(el, this.form_button)){
						toQuery(el, this.form_button).click();
					}
					else{
						(aciculina.log_error) && console.warn('No valid submit button element found');
						return false;						
					}					
				}
			},						
			form_validate : function form_validate(callback=null) {
				/*
				=================================================
				Validate form input fields
				=================================================
				*/
				let first_empty=null;
				let partial=null;
				let count=0;

				let validEmail = this.isEmail;
				let validUrl = this.isUrl;
				
				function input_validator(el) {
					if(el.getAttribute("type").toLowerCase() =='number') {
						let int_value = Number ((el.value).trim());
						if( int_value !== 0  && String (int_value).length > 0) {
							is_valid(el);
						}
						else {
							is_invalid(el);
						}
					}
					else if(el.getAttribute("type").toLowerCase() =='email') {
						if( isEmail( el.value ) ) {
							is_valid(el);
						}
						else {
							is_invalid(el);
						}
					}
					else if(el.getAttribute("type").toLowerCase() =='url' ) {
						if(isUrl( el.value ) ) {
							is_valid(el);
						}
						else {
							is_invalid(el);
						}
					}
					else if( (el.value).trim() === '' || (el.value).trim().length === 0 ) {
						is_invalid(el);
					}
					else {
						is_valid(el);
					}
				}
				function push_data(el) {
					if( el.tagName =='select') {
						aciculina.ajax_data['rawdata'].push({'name':el.getAttribute('name'), 'value': el.value });
						aciculina.ajax_data['formdata'].append(el.getAttribute('name'), el.value );
					}
					else if( el.getAttribute('type') =='checkbox') {
						if( el.checked ) {
							aciculina.ajax_data['rawdata'].push({'name':el.getAttribute('name'), 'value': el.value });
							aciculina.ajax_data['formdata'].append(el.getAttribute('name'), el.value );
						}
					}
					else if( el.getAttribute('type') =='radio') {
						if( el.checked ) {
							aciculina.ajax_data['rawdata'].push({'name':el.getAttribute('name'), 'value': el.value });
							aciculina.ajax_data['formdata'].append(el.getAttribute('name'), el.value );
						}
					}
					else if( el.getAttribute('type') =='file') {
						if( toId(el.getAttribute('id')).files.length > 0 )
						{
							aciculina.ajax_data['filedata'].push({'name':el.getAttribute('name'), 'id':el.getAttribute('id')});
						}
					}
					else {
						aciculina.ajax_data['rawdata'].push({'name': el.getAttribute('name'), 'value': el.value });
						aciculina.ajax_data['formdata'].append(el.getAttribute('name'), el.value );
					}
				}
				function is_valid(el){
					el.style.border='';
				}
				function is_invalid(el){
					el.value='';
					el.style.border='solid 1px #ff0000';
					first_empty = (!first_empty) ? el : first_empty;
				}

				if(typeof this.form_field_child =='string') {
					let array = toQueries(this.form_field_parent+' '+this.form_field_child);
					for(let i =0; i < array.length; i++) {
						if( (array[i].tagName).toLowerCase() != 'button' && (array[i].type).toLowerCase() !='submit') {
							if("required" in array[i].attributes) {
								input_validator(array[i]);
							}
							else {
								input_validator(array[i]);
							}							
							push_data(array[i]);
							
						}
					}
				}
				else {
					for( let i =0; i < this['form_field_child'].length; i++) {
						let array = toQueries(this.form_field_parent+' '+this.form_field_child[i]);
						for(let j =0; j < array.length; j++) {
							if( (array[j].tagName).toLowerCase() != 'button' && (array[j].type).toLowerCase() !='submit') {
								if("required" in array[j].attributes) {
									input_validator(array[j]);									
								}
								else {
									input_validator(array[j]);
								}
								push_data(array[j]);
							}
						}
					}
				}
				
				if(first_empty){
					aciculina.ajax_data['rawdata'] = [];
					for(let pair of aciculina.ajax_data['formdata'].entries()) {
						aciculina.ajax_data['formdata'].delete(pair[0]);
					}
					aciculina.ajax_data['filedata'] = [];
					first_empty.focus();
					first_empty.value='';
					first_empty=null;
					return false;
				}
				else {					
					first_empty=null;
					(typeof callback =="function") && callback();	
					if(aciculina.ajax_data['filedata'].length > 0) {
						for(let i =0; i < aciculina.ajax_data['filedata'].length; i++) {
							let attachments = toId(aciculina.ajax_data['filedata'][i].id).files;
							let files = attachments;
							// Loop through each of the selected files.
							for (let x = 0; x < files.length; x++) {
								let file = files[x];
								// Add the file to the request.
								aciculina.ajax_data['formdata'].append(aciculina.ajax_data['filedata'][i].name, file, file.name);
							}
						}
						aciculina.ajax_settings['cache']=false;
						aciculina.ajax_settings['contentType']='multipart/form-data';
						aciculina.ajax_settings['processData']=false;
						aciculina.ajax_data['filedata'] =null;
						console.warn('There is a present file for upload!');
					}
					return aciculina.ajax_data['formdata'];
				}
			}
		}
		//return function
		return aciculina;
	};

	if(typeof (w.t3rebra) === "undefined" || w.t3rebra == null || typeof (w.t3) === "undefined" || w.t3 == null) {		
		//dynamicallyLoadScript("https://t3rebra.github.io/src/js/achates.js");
		w.t3rebra = fn_aciculina();
		w.t3 = fn_aciculina();		
	}
	else {
		var append_aciculina = fn_aciculina();	    
		function extend(obj, src) {
			for (var key in src) {
				if (src.hasOwnProperty(key)) obj[key] = src[key];
				else{
					if(src[key]=='version'){
						extend(append_aciculina['version'], w.t3rebra['version'])
					}
					else {
						obj[key] +=","+ src['key'];
					}
				}
			}
			return obj;
		}
		w.t3rebra = extend(append_aciculina, w.t3rebra);
		w.t3 = extend(append_aciculina, w.t3rebra);
	}

})(window, document);
