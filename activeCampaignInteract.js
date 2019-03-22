
//gen.min.js//


var disappeardelay=25
var enableanchorlink=1
var hidemenu_onclick=1
var ie5=document.all
var ns6=document.getElementById&&!document.all
function getposOffset(what,offsettype){var totaloffset=(offsettype=="left")?what.offsetLeft:what.offsetTop;var parentEl=what.offsetParent;while(parentEl!=null){totaloffset=(offsettype=="left")?totaloffset+parentEl.offsetLeft:totaloffset+parentEl.offsetTop;parentEl=parentEl.offsetParent;}
    return totaloffset;}
function showhide(obj,e,visible,hidden){if(ie5||ns6)
    dropmenuobj.style.left=dropmenuobj.style.top=-500
    if(e.type=="click"&&obj.visibility==hidden||e.type=="mouseover")
        obj.visibility=visible
    else if(e.type=="click")
        obj.visibility=hidden}
function iecompattest(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body}
function clearbrowseredge(obj,whichedge){var edgeoffset=0
    if(whichedge=="rightedge"){var windowedge=ie5&&!window.opera?iecompattest().scrollLeft+iecompattest().clientWidth-15:window.pageXOffset+window.innerWidth-15
        dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
        if(windowedge-dropmenuobj.x<dropmenuobj.contentmeasure)
            edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth}
    else{var topedge=ie5&&!window.opera?iecompattest().scrollTop:window.pageYOffset
        var windowedge=ie5&&!window.opera?iecompattest().scrollTop+iecompattest().clientHeight-15:window.pageYOffset+window.innerHeight-18
        dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
        if(windowedge-dropmenuobj.y<dropmenuobj.contentmeasure){edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
            if((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure)
                edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge}}
    return edgeoffset}
function dropdownmenu(obj,e,dropmenuID){if(window.event)event.cancelBubble=true
else if(e.stopPropagation)e.stopPropagation()
    if(typeof dropmenuobj!="undefined")
        dropmenuobj.style.visibility="hidden"
    clearhidemenu()
    if(ie5||ns6){obj.onmouseout=delayhidemenu
        dropmenuobj=document.getElementById(dropmenuID)
        if(hidemenu_onclick)dropmenuobj.onclick=function(){dropmenuobj.style.visibility='hidden'}
        dropmenuobj.onmouseover=clearhidemenu
        dropmenuobj.onmouseout=ie5?function(){dynamichide(event)}:function(event){dynamichide(event)}
        showhide(dropmenuobj.style,e,"visible","hidden")
        dropmenuobj.x=getposOffset(obj,"left")
        dropmenuobj.y=getposOffset(obj,"top")
        dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj,"rightedge")+"px"
        dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj,"bottomedge")+obj.offsetHeight+"px"}
    return clickreturnvalue()}
function clickreturnvalue(){if((ie5||ns6)&&!enableanchorlink)return false
else return true}
function contains_ns6(a,b){while(b.parentNode)
    if((b=b.parentNode)==a)
        return true;return false;}
function dynamichide(e){if(ie5&&!dropmenuobj.contains(e.toElement))
    delayhidemenu()
else if(ns6&&e.currentTarget!=e.relatedTarget&&!contains_ns6(e.currentTarget,e.relatedTarget))
    delayhidemenu()}
function delayhidemenu(){delayhide=setTimeout("dropmenuobj.style.visibility='hidden'",disappeardelay)}
function clearhidemenu(){if(typeof delayhide!="undefined")
    clearTimeout(delayhide)}
function showDiv(SHOWITEM){var x=document.getElementById(SHOWITEM);if(x.style.display=='none')
    x.style.display='block';else
    x.style.display='none';return false;}
function bookmark(page,site_title){if(document.all){window.external.AddFavorite(page,site_title);}else{alert('Please press CTRL+D to bookmark this page.');}}
var win=null;function NewWindowPopup(mypage,myname,w,h,scroll,pos){if(pos=="random"){LeftPosition=(screen.availWidth)?Math.floor(Math.random()*(screen.availWidth-w)):50;TopPosition=(screen.availHeight)?Math.floor(Math.random()*((screen.availHeight-h)-75)):50;}
    if(pos=="center"){LeftPosition=(screen.availWidth)?(screen.availWidth-w)/2:50;TopPosition=(screen.availHeight)?(screen.availHeight-h)/2:50;}
    if(pos=="default"){LeftPosition=50;TopPosition=50}
    else if((pos!="center"&&pos!="random"&&pos!="default")||pos==null){LeftPosition=0;TopPosition=20}
    settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,location=no,directories=no,status=yes,menubar=no,toolbar=no,resizable=no';win=window.open(mypage,myname,settings);if(win.focus){win.focus();}}
function CloseNewWin(){if(win!=null&&win.open)win.close()}
function pausescroller(content,divId,divClass,delay){this.content=content
    this.tickerid=divId
    this.delay=delay
    this.mouseoverBol=0
    this.hiddendivpointer=1
    document.write('<div id="'+divId+'" class="'+divClass+'" style="position: relative; overflow: hidden"><div class="innerDiv" style="position: absolute; width: 100%" id="'+divId+'1">'+content[0]+'</div><div class="innerDiv" style="position: absolute; width: 100%; visibility: hidden" id="'+divId+'2">'+content[1]+'</div></div>')
    var scrollerinstance=this
    if(window.addEventListener)
        window.addEventListener("load",function(){scrollerinstance.initialize()},false)
    else if(window.attachEvent)
        window.attachEvent("onload",function(){scrollerinstance.initialize()})
    else if(document.getElementById)
        setTimeout(function(){scrollerinstance.initialize()},500)}
pausescroller.prototype.initialize=function(){this.tickerdiv=document.getElementById(this.tickerid)
    this.visiblediv=document.getElementById(this.tickerid+"1")
    this.hiddendiv=document.getElementById(this.tickerid+"2")
    this.visibledivtop=parseInt(pausescroller.getCSSpadding(this.tickerdiv))
    this.visiblediv.style.width=this.hiddendiv.style.width=this.tickerdiv.offsetWidth-(this.visibledivtop*2)+"px"
    this.getinline(this.visiblediv,this.hiddendiv)
    this.hiddendiv.style.visibility="visible"
    var scrollerinstance=this
    document.getElementById(this.tickerid).onmouseover=function(){scrollerinstance.mouseoverBol=1}
    document.getElementById(this.tickerid).onmouseout=function(){scrollerinstance.mouseoverBol=0}
    if(window.attachEvent)
        window.attachEvent("onunload",function(){scrollerinstance.tickerdiv.onmouseover=scrollerinstance.tickerdiv.onmouseout=null})
    setTimeout(function(){scrollerinstance.animateup()},this.delay)}
pausescroller.prototype.animateup=function(){var scrollerinstance=this
    if(parseInt(this.hiddendiv.style.top)>(this.visibledivtop+5)){this.visiblediv.style.top=parseInt(this.visiblediv.style.top)-5+"px"
        this.hiddendiv.style.top=parseInt(this.hiddendiv.style.top)-5+"px"
        setTimeout(function(){scrollerinstance.animateup()},50)}
    else{this.getinline(this.hiddendiv,this.visiblediv)
        this.swapdivs()
        setTimeout(function(){scrollerinstance.setmessage()},this.delay)}}
pausescroller.prototype.swapdivs=function(){var tempcontainer=this.visiblediv
    this.visiblediv=this.hiddendiv
    this.hiddendiv=tempcontainer}
pausescroller.prototype.getinline=function(div1,div2){div1.style.top=this.visibledivtop+"px"
    div2.style.top=Math.max(div1.parentNode.offsetHeight,div1.offsetHeight)+"px"}
pausescroller.prototype.setmessage=function(){var scrollerinstance=this
    if(this.mouseoverBol==1)
        setTimeout(function(){scrollerinstance.setmessage()},100)
    else{var i=this.hiddendivpointer
        var ceiling=this.content.length
        this.hiddendivpointer=(i+1>ceiling-1)?0:i+1
        this.hiddendiv.innerHTML=this.content[this.hiddendivpointer]
        this.animateup()}}
pausescroller.getCSSpadding=function(tickerobj){if(tickerobj.currentStyle)
    return tickerobj.currentStyle["paddingTop"]
else if(window.getComputedStyle)
    return window.getComputedStyle(tickerobj,"").getPropertyValue("padding-top")
else
    return 0}
function switch_display(tagID){var x=document.getElementById(tagID);if(x.style.display=='block'){x.style.display='none';}else if(x.style.display=='none'){x.style.display='block';}}
var persistclose=1
var startX=300
var startY=250
var verticalpos="frombottom"
function iecompattest(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body}
function get_cookie(Name){var search=Name+"="
    var returnvalue="";if(document.cookie.length>0){offset=document.cookie.indexOf(search)
        if(offset!=-1){offset+=search.length
            end=document.cookie.indexOf(";",offset);if(end==-1)end=document.cookie.length;returnvalue=unescape(document.cookie.substring(offset,end))}}
    return returnvalue;}
function setCookie(c_name,value,expiredays)
{var exdate=new Date();exdate.setDate(exdate.getDate()+expiredays);document.cookie=c_name+"="+escape(value)+
    ((expiredays==null)?"":";expires="+exdate.toUTCString());}
function closebar(){if(persistclose)
    setCookie('remainclosed','1','5');document.getElementById("topbar").style.display="none"}
function staticbar(){barheight=document.getElementById("topbar").offsetHeight
    var ns=(navigator.appName.indexOf("Netscape")!=-1)||window.opera;var d=document;function ml(id){var el=d.getElementById(id);if(!persistclose||persistclose&&get_cookie("remainclosed")=="")
        el.style.display="block"
        if(d.layers)el.style=el;el.sP=function(x,y){this.style.left=x+"px";this.style.top=y+"px";};el.x=startX;if(verticalpos=="fromtop")
            el.y=startY;else{el.y=ns?pageYOffset+innerHeight:iecompattest().scrollTop+iecompattest().clientHeight;el.y-=startY;}
        return el;}
    window.stayTopLeft=function(){if(verticalpos=="fromtop"){var pY=ns?pageYOffset:iecompattest().scrollTop;ftlObj.y+=(pY+startY-ftlObj.y)/8;}
    else{var pY=ns?pageYOffset+innerHeight-barheight:iecompattest().scrollTop+iecompattest().clientHeight-barheight;ftlObj.y+=(pY-startY-ftlObj.y)/8;}
        ftlObj.sP(ftlObj.x,ftlObj.y);setTimeout("stayTopLeft()",10);}
    ftlObj=ml("topbar");stayTopLeft();}
function staticbar_show(){if(window.addEventListener)
    window.addEventListener("load",staticbar,false)
else if(window.attachEvent)
    window.attachEvent("onload",staticbar)
else if(document.getElementById)
    staticbar();}
function panel_tab_clear(){document.getElementById('panel_resellers').className='panel_c';document.getElementById('panel_owners').className='panel_c';document.getElementById('panel_designers').className='panel_c';document.getElementById('panel_compare').className='panel_c';document.getElementById('panel_tab_designer').className='none';document.getElementById('panel_tab_reseller').className='none';document.getElementById('panel_tab_owner').className='none';document.getElementById('panel_tab_compare').className='none';return(true);}
function showDivR(SHOWITEM){var x=document.getElementById(SHOWITEM);if(x.style.display!='block')
    x.style.display='block';else
    x.style.display='none';return false;}
function is_email(email){email+='';return email.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i);}
function is_url(url){url+='';return url.match(/((http|https|ftp):\/\/|www)[a-z0-9\-\._]+\/?[a-z0-9_\.\-\?\+\/~=&#%;:\|,\[\]]*[a-z0-9\/=?&;%\[\]]{1}/i);}
function number_format(a,b,c,d){var j,e,f,g,h,j;if(!b)b=0;if(typeof c=='undefined')c=typeof decimalDelim=='undefined'?'.':decimalDelim;if(typeof d=='undefined')d=typeof commaDelim=='undefined'?',':commaDelim;a=Math.round(a*Math.pow(10,b))/Math.pow(10,b);e=a+'';f=e.split('.');if(!f[0]){f[0]='0';}
    if(!f[1]){f[1]='';}
    if(f[1].length<b){g=f[1];for(i=f[1].length+1;i<=b;i++){g+='0';}
        f[1]=g;}
    if(d!=''&&f[0].length>3){h=f[0];f[0]='';for(j=3;j<h.length;j+=3){i=h.slice(h.length-j,h.length-j+3);f[0]=d+i+f[0]+'';}
        j=h.substr(0,(h.length%3==0)?3:(h.length%3));f[0]=j+f[0];}
    c=(b<=0)?'':c;return f[0]+c+f[1];}
function isScrolledIntoView(elem){if(!elem.length)return false;if(elem.is(":hidden"))return false;var docViewTop=jQuery(window).scrollTop();var docViewBottom=docViewTop+jQuery(window).height();var elemTop=jQuery(elem).offset().top;var elemBottom=elemTop+jQuery(elem).height();return((elemBottom>=docViewTop)&&(elemTop<=docViewBottom));}
function keypress_doif(e,ch,cb){var kcode;if(window.event)
    kcode=window.event.keyCode;else
    kcode=e.keyCode;if(kcode==ch)
    cb();}
function sprintf(){if(!arguments||arguments.length<1||!RegExp)
{return;}
    var str=arguments[0];var re=/([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)(.*)/;var a=b=[],numSubstitutions=0,numMatches=0;while(a=re.exec(str))
    {var leftpart=a[1],pPad=a[2],pJustify=a[3],pMinLength=a[4];var pPrecision=a[5],pType=a[6],rightPart=a[7];numMatches++;if(pType=='%')
    {subst='%';}
    else
    {numSubstitutions++;if(numSubstitutions>=arguments.length)
    {return;}
        var param=arguments[numSubstitutions];var pad='';if(pPad&&pPad.substr(0,1)=="'")pad=leftpart.substr(1,1);else if(pPad)pad=pPad;var justifyRight=true;if(pJustify&&pJustify==="-")justifyRight=false;var minLength=-1;if(pMinLength)minLength=parseInt(pMinLength);var precision=-1;if(pPrecision&&pType=='f')precision=parseInt(pPrecision.substring(1));var subst=param;if(pType=='b')subst=parseInt(param).toString(2);else if(pType=='c')subst=String.fromCharCode(parseInt(param));else if(pType=='d')subst=parseInt(param)?parseInt(param):0;else if(pType=='u')subst=Math.abs(param);else if(pType=='f')subst=(precision>-1)?Math.round(parseFloat(param)*Math.pow(10,precision))/Math.pow(10,precision):parseFloat(param);else if(pType=='o')subst=parseInt(param).toString(8);else if(pType=='s')subst=param;else if(pType=='x')subst=(''+parseInt(param).toString(16)).toLowerCase();else if(pType=='X')subst=(''+parseInt(param).toString(16)).toUpperCase();}
        str=leftpart+subst+rightPart;}
    return str;}
function post_object(sel){var rval={};var incs={};sel=jQuery(sel);if(!sel)return rval;if(sel.length==1&&sel[0].tagName!='FORM'){sel=jQuery("<form></form>").html(sel.html());}
    jQuery.each(sel.serializeArray(),function(k,v){if(v.name.match(/\[]$/)){if(!incs[v.name]){incs[v.name]=0;}
        rval[v.name.replace(/\[]$/,sprintf("[%d]",incs[v.name]))]=v.value;incs[v.name]++;}else{rval[v.name]=v.value;}});return rval;}
function escape_html(str){var out="";if(typeof(str)!='number')str=str||"";str=str.toString();for(var i=0;i<str.length;i++){if(str[i]=='<')
    out+='&lt;';else if(str[i]=='"')
    out+='&quot;';else
    out+=str[i];}
    return out;}
function nl2br(str){if(typeof(str)=="string")
    return str.replace(/(\r\n)|(\n\r)|\r|\n/g,'<br />');else
    return str;}
function login_form(frm){var actname=$('input[name=actname]',frm);var domain=$('input[name=domain], select[name=domain]',frm);var pass=$('input[name=pass]',frm);var user=$('input[name=user]',frm);var redir=$('input[name=idt]',frm);actname.removeClass("error");pass.removeClass("error");actname.val($.trim(actname.val().toLowerCase().replace(/[^a-z0-9\-\.]/g,'')));if(actname.val()==''){actname.addClass("error").focus();return false;}
    if(user.length&&user.val()==''){user.addClass("error").focus();return false;}
    if(pass.val()==''){pass.addClass("error").focus();return false;}
    var prot=domain.val()=='.activehosted.com'?'https':'http';redir.val(ac_b64_encode(prot+'://'+actname.val()+domain.val()+redir.val()));frm.action=prot+'://'+actname.val()+domain.val()+'/admin/login.php';return true;}
(function(jQuery){jQuery.fn.disableSelection=function(){return this.attr('unselectable','on').css('user-select','none').on('selectstart',false);};})(jQuery);jQuery(document).ready(function($){jQuery('.mainheader .mainnav li > span > a.navsignup').hover(function(){jQuery(this).css('padding','0 1.2em').stop().animate({'paddingLeft':'2em','paddingRight':'2em'},'fast');},function(){jQuery(this).css('padding','0 2em').stop().animate({'paddingLeft':'1.2em','paddingRight':'1.2em'},'fast');});});


//jquery.browser.min.js//
/*!
 * jQuery Browser Plugin 0.0.6
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2014 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 28-09-2014
 */!function(a,b){"use strict";var c,d;if(a.uaMatch=function(a){a=a.toLowerCase();var b=/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(iphone)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||[];return{browser:b[3]||b[1]||"",version:b[4]||b[2],versionNumber:b[2]||"0",platform:c[0]||""}},c=a.uaMatch(b.navigator.userAgent),d={},c.browser&&(d[c.browser]=!0,d.version=c.version,d.versionNumber=parseInt(c.versionNumber)),c.platform&&(d[c.platform]=!0),(d.android||d.ipad||d.iphone||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv){var e="msie";c.browser=e,d[e]=!0}if(d.opr){var f="opera";c.browser=f,d[f]=!0}if(d.safari&&d.android){var g="android";c.browser=g,d[g]=!0}d.name=c.browser,d.platform=c.platform,a.browser=d}(jQuery,window);


 //jquery.hashchange.min.js//
/*!
* jQuery hashchange event - v1.3 - 7/21/2010
* http://benalman.com/projects/jquery-hashchange-plugin/
*
* Copyright (c) 2010 "Cowboy" Ben Alman
* Dual licensed under the MIT and GPL licenses.
* http://benalman.com/about/license/
*/(function($,window,undefined){'$:nomunge';var str_hashchange='hashchange',doc=document,fake_onhashchange,special=$.event.special,doc_mode=doc.documentMode,supports_onhashchange='on'+str_hashchange in window&&(doc_mode===undefined||doc_mode>7);function get_fragment(url){url=url||location.href;return '#'+url.replace(/^[^#]*#?(.*)$/,'$1');};$.fn[str_hashchange]=function(fn){return fn?this.bind(str_hashchange,fn):this.trigger(str_hashchange);};$.fn[str_hashchange].delay=50;special[str_hashchange]=$.extend(special[str_hashchange],{setup:function(){if(supports_onhashchange){return false;}
        $(fake_onhashchange.start);},teardown:function(){if(supports_onhashchange){return false;}
        $(fake_onhashchange.stop);}});fake_onhashchange=(function(){var self={},timeout_id,last_hash=get_fragment(),fn_retval=function(val){return val;},history_set=fn_retval,history_get=fn_retval;self.start=function(){timeout_id||poll();};self.stop=function(){timeout_id&&clearTimeout(timeout_id);timeout_id=undefined;};function poll(){var hash=get_fragment(),history_hash=history_get(last_hash);if(hash!==last_hash){history_set(last_hash=hash,history_hash);$(window).trigger(str_hashchange);}else if(history_hash!==last_hash){location.href=location.href.replace(/#.*/,'')+history_hash;}
    timeout_id=setTimeout(poll,$.fn[str_hashchange].delay);};$.browser.msie&&!supports_onhashchange&&(function(){var iframe,iframe_src;self.start=function(){if(!iframe){iframe_src=$.fn[str_hashchange].src;iframe_src=iframe_src&&iframe_src+get_fragment();iframe=$('<iframe tabindex="-1" title="empty"/>').hide().one('load',function(){iframe_src||history_set(get_fragment());poll();}).attr('src',iframe_src||'javascript:0').insertAfter('body')[0].contentWindow;doc.onpropertychange=function(){try{if(event.propertyName==='title'){iframe.document.title=doc.title;}}catch(e){}};}};self.stop=fn_retval;history_get=function(){return get_fragment(iframe.location.href);};history_set=function(hash,history_hash){var iframe_doc=iframe.document,domain=$.fn[str_hashchange].domain;if(hash!==history_hash){iframe_doc.title=doc.title;iframe_doc.open();domain&&iframe_doc.write('<script>document.domain="'+domain+'"</script>');iframe_doc.close();iframe.location.hash=hash;}};})();return self;})();})(jQuery,this);