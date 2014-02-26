var IAcceptable=new function(){
this.dragAccept="type1 type2 type3";
this.accept=function(_1){
};
};
var IActionListener=new function(){
this.handleAction=function(_2){
};
};
var IActivatable=new function(){
this.isActivatable=true;
this.activate=function(){
};
this.deActivate=function(){
};
};
var IActivationAware=new function(){
this.isActivationAware=true;
this.isActivated=false;
this.onActivate=function(){
};
this.onDeactivate=function(){
};
};
var IBroadcastListener=new function(){
this.handleBroadcast=function(_3,_4){
};
};
var ICrawlerHandler=new function(){
this.handleCrawler=function(_5){
};
};
var IData=new function(){
this.isFocusable=true;
this.validate=function(){
};
this.manifest=function(){
};
this.dirty=function(){
};
this.clean=function(){
};
this.focus=function(){
};
this.blur=function(){
};
this.getName=function(){
};
this.getValue=function(){
};
this.setValue=function(_6){
};
this.getResult=function(){
};
this.setResult=function(_7){
};
};
var IDialogResponseHandler=new function(){
this.handleDialogResponse=function(){
response,result;
};
};
var IDOMHandler=new function(){
this.fireOnDOM=function(){
};
};
var IDraggable=new function(){
this.dragType="type";
this.getImage=function(){
};
};
var IDragHandler=new function(){
this.onDragStart=function(_8){
};
this.onDrag=function(_9){
};
this.onDragStop=function(_a){
};
};
var IEditorControlBinding=new function(){
this.isEditorControlBinding=true;
};
var IEventListener=new function(){
this.handleEvent=function(e){
};
};
var IFit=new function(){
this.isFit=true;
this.fit=function(){
return true;
};
};
var IFlexible=new function(){
this.flex=function(){
};
};
var IFocusable=new function(){
this.isFocusable=true;
this.isFocused=false;
this.focus=function(){
this.dispatchAction(Binding.ACTION_FOCUSED);
};
this.blur=function(){
this.dispatchAction(Binding.ACTION_BLURRED);
};
};
var IImageProfile=new function(){
this.getDefaultImage=function(){
};
this.getHoverImage=function(){
};
this.getActiveImage=function(){
};
this.getDisabledImage=function(){
};
};
var IKeyEventHandler=new function(){
this.handleKeyEvent=function(){
};
};
var ILabel=new function(){
this.getLabel=function(){
};
this.getImage=function(){
};
this.getToolTip=function(){
};
};
var ILoadHandler=new function(){
this.fireOnLoad=function(){
};
};
var IMenuContainer=new function(){
this.isOpen=function(){
};
this.setOpenElement=function(_c){
};
};
var IResizeHandler=new function(){
this.fireOnResize=function(){
};
};
var ISourceEditorComponent=new function(){
this.initializeSourceEditorComponent=function(_d,_e,_f){
};
};
var IUpdateHandler=new function(){
this.handleElement=function(_10,_11){
};
this.updateElement=function(_12,_13){
};
};
var IWysiwygEditorComponent=new function(){
this.initializeComponent=function(_14,_15,_16,_17){
};
};
var IWysiwygEditorContentChangeHandler=new function(){
this.handleContentChange=function(){
};
};
var IWysiwygEditorNodeChangeHandler=new function(){
this.handleNodeChange=function(_18){
};
};
function List(arg){
this._index=0;
this._array=[];
this.isDisposed=false;
if(arg){
this.init(arg);
}
return this;
}
List.prototype.init=function(_1a){
var _1b=(_1a!==undefined&&_1a.splice!==undefined);
if(_1b){
this._array=_1a;
}else{
var i=0,_1d;
while((_1d=_1a[i++])!=null){
this._array.push(_1d);
}
}
this.reset();
};
List.prototype.add=function(_1e){
this._array.push(_1e);
return _1e;
};
List.prototype.addFirst=function(_1f){
this._array.unshift(_1f);
return _1f;
};
List.prototype.get=function(_20){
var _21=null;
if(this._array[_20]){
_21=this._array[_20];
}
return _21;
};
List.prototype.set=function(_22,_23){
this._array[_22]=_23;
};
List.prototype.del=function(_24){
this._array.splice(_24,1);
};
List.prototype.has=function(_25){
var _26=false;
var i=0,e;
while((e=this._array[i++])!==undefined){
if(e==_25){
_26=true;
break;
}
}
return _26;
};
List.prototype.getLength=function(){
return this._array.length;
};
List.prototype.hasEntries=function(){
return this.getLength()>0;
};
List.prototype.hasNext=function(){
var _29=false;
if(this._array!=null){
_29=this._index<this._array.length;
}else{
SystemLogger.getLogger("List").error("Mysterious List#hasNext exception in IE");
}
return _29;
};
List.prototype.getNext=function(){
var _2a=null;
if(this.hasNext()){
_2a=this._array[this._index++];
}
return _2a;
};
List.prototype.getFollowing=function(_2b){
var _2c=null;
var i=0,e=null;
while((e=this._array[i])!=null&&!_2c){
if(e==_2b&&this._array[i+1]){
_2c=this._array[i+1];
}
i++;
}
return _2c;
};
List.prototype.getPreceding=function(_2f){
var _30=null;
var i=1,e=null;
while((e=this._array[i])!=null&&!_30){
if(e==_2f&&this._array[i-1]){
_30=this._array[i-1];
}
i++;
}
return _30;
};
List.prototype.getIndex=function(_33){
var _34=-1;
if(this._array.indexOf!=null){
_34=this._array.indexOf(_33);
}else{
var _35=0;
this.each(function(e){
var res=true;
if(e==_33){
_34=_35;
res=false;
}
_35++;
return res;
});
}
return _34;
};
List.prototype.reset=function(){
this._index=0;
return this;
};
List.prototype.clear=function(){
this._array=[];
return this.reset();
};
List.prototype.each=function(_38,_39){
this.reset();
var _3a,is=true;
while(is!=false&&this.hasNext()){
if(_39===undefined){
_39=null;
}
var _3c=this._index;
var _3d=this.getNext();
is=_38.call(_39,_3d,_3c);
}
this.reset();
};
List.prototype.copy=function(){
return new List(this._array);
};
List.prototype.reverse=function(){
this._array.reverse();
return this;
};
List.prototype.extractFirst=function(){
return this._array.shift();
};
List.prototype.extractLast=function(){
return this._array.pop();
};
List.prototype.getFirst=function(){
return this.get(0);
};
List.prototype.getLast=function(){
return this.get(this.getLength()-1);
};
List.prototype.toString=function(){
return this._array.toString();
};
List.prototype.toArray=function(){
return this._array.concat([]);
};
List.prototype.merge=function(_3e){
_3e.reset();
while(_3e.hasNext()){
this.add(_3e.getNext());
}
return this;
};
List.prototype.dispose=function(){
var i=this._array.length-1;
while(i>=0){
this._array[i--]=null;
}
this._array=null;
this._index=null;
this._isDisposed=true;
};
function Map(map){
this._map={};
if(map!=null){
for(var key in map){
this.set(key,map[key]);
}
}
}
Map.prototype._map={};
Map.prototype.get=function(key){
var _43=null;
if(this.has(key)){
_43=this._map[key];
}else{
var cry="Map: Invalid key: "+key;
SystemLogger.getLogger("Map").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
}
}
return _43;
};
Map.prototype.set=function(key,_46){
this._map[key]=_46;
};
Map.prototype.del=function(key){
delete this._map[key];
};
Map.prototype.has=function(key){
return typeof this._map[key]!="undefined";
};
Map.prototype.each=function(_49){
for(var key in this._map){
var _4b=_49(key,this._map[key]);
if(_4b==false){
break;
}
}
};
Map.prototype.hasEntries=function(){
var _4c=false;
for(var key in this._map){
_4c=true;
break;
}
return _4c;
};
Map.prototype.countEntries=function(){
var _4e=0;
for(var key in this._map){
_4e++;
}
return _4e;
};
Map.prototype.toList=function(_50){
var _51=new List();
for(var key in this._map){
_51.add(_50?key:this._map[key]);
}
return _51;
};
Map.prototype.copy=function(){
var map=new Map();
for(var key in this._map){
map.set(key,this._map[key]);
}
return map;
};
Map.prototype.inverse=function(){
var map=new Map();
for(var key in this._map){
map.set(this._map[key],key);
}
return map;
};
Map.prototype.empty=function(){
for(var key in this._map){
delete this._map[key];
}
};
Map.prototype.dispose=function(){
for(var key in this._map){
this._map[key]=null;
}
};
function SystemNodeList(){
this._entityTokens=new List([]);
return this;
}
SystemNodeList.prototype.clear=function(){
this._entityTokens.clear();
};
SystemNodeList.prototype.add=function(_59){
if(_59.getEntityToken){
var _5a=_59.getEntityToken();
this._entityTokens.add(_5a);
}
};
SystemNodeList.prototype.has=function(_5b){
if(_5b.getEntityToken){
var _5c=_5b.getEntityToken();
return this._entityTokens.has(_5c);
}
return false;
};
SystemNodeList.prototype.getEntityTokens=function(){
return this._entityTokens.copy();
};
function _BroadcastMessages(){
}
_BroadcastMessages.prototype={APPLICATION_STARTUP:"application startup",APPLICATION_LOGIN:"application login",APPLICATION_LOGOUT:"application logout",APPLICATION_OPERATIONAL:"application operational",APPLICATION_ONSHUTDOWN:"application onshutdown",APPLICATION_SHUTDOWN:"application shutdown",APPLICATION_ERROR:"application error",APPLICATION_BLURRED:"application blurred",APPLICATION_FOCUSED:"application focused",APPLICATION_KICKSTART:"application kickstart",CODEMIRROR_LOADED:"codemirror loaded",MOUSEEVENT_MOUSEDOWN:"mouseevent mousedown",MOUSEEVENT_MOUSEUP:"mouseevent mouseup",MOUSEEVENT_MOUSEMOVE:"mouseevent mousemove",$WINKEY_LOADED:"${windowkey} loaded",$WINKEY_UNLOADED:"${windowkey} unloaded",$WINKEY_EVALUATED:"${windowkey} evaluated",$WINKEY_RESIZED:"${windowkey} resized",$WINKEY_HRESIZED:"${windowkey} horizontally resized",$WINKEY_VRESIZED:"${windowkey} vertically resized",LOADED_NAVIGATOR:"navigator loaded",LOADED_MAINSTAGE:"mainstage loaded",LOCALSTORE_INITIALIZED:"localstore initialized",PERSISTANCE_INITIALIZED:"persistance initialized",STAGE_INITIALIZED:"stage initialized",KEY_SHIFT_DOWN:"shiftkeydown",KEY_SHIFT_UP:"shiftkeyup",KEY_CONTROL_DOWN:"controlkeydown",KEY_CONTROL_UP:"controlkeyup",KEY_ARROW:"arrowkey",KEY_ENTER:"enterkeydown",KEY_ESCAPE:"escapekeydown",KEY_SPACE:"spacekeydown",KEY_TAB:"tabkeydown",KEY_ALT:"altkeydown",KEY_CONTROLTAB:"controltabkeysdown",TYPEDRAG_START:"typedrag start",TYPEDRAG_STOP:"typedrag stop",TYPEDRAG_PAUSE:"typedrag pause",DOCK_MAXIMIZED:"dockmaximized",DOCK_MINIMIZED:"dockminimized",DOCK_NORMALIZED:"docknormalized",DOCKTABBINDING_SELECT:"docktab select",SYSTEMTREEBINDING_REFRESH:"systemtree refresh",SYSTEMTREEBINDING_REFRESHALL:"systemtree refresh all",SYSTEMTREEBINDING_REFRESHING:"systemtree refreshing",SYSTEMTREEBINDING_REFRESHED:"systemtree refreshed",SYSTEMTREEBINDING_FOCUS:"systemtree focus",SYSTEMTREEBINDING_CUT:"systemtree cut",SYSTEMTREEBINDING_COPY:"systemtree copy",SYSTEMTREEBINDING_PASTE:"systemtree paste",SYSTEMTREEBINDING_COLLAPSEALL:"systemtree collapse all",SYSTEMTREENODEBINDING_FOCUS:"systemtreenode focus",SYSTEMTREEBINDING_LOCKTOEDITOR:"systemtreenode lock to editor",SYSTEMTREENODEBINDING_FORCE_OPEN:"systemtreenode force open",SYSTEMTREENODEBINDING_FORCING_OPEN:"systemtreenode forcing open",SYSTEMTREENODEBINDING_FORCED_OPEN:"systemtreenode forced open",START_COMPOSITE:"startcomposite",STOP_COMPOSITE:"stopcomposite",COMPOSITE_START:"compositestart",COMPOSITE_STOP:"compositestop",VIEW_OPENING:"view opening",VIEW_OPENED:"view opened",VIEW_COMPLETED:"view completed",CLOSE_VIEW:"close view",CLOSE_VIEWS:"close views",VIEW_CLOSED:"view closed",TINYMCE_INITIALIZED:"tinymce initialized",CODEPRESS_INITIALIZED:"codepress initialized",VISUALEDITOR_FOCUSED:"visualeditor focused",VISUALEDITOR_BLURRED:"visualditor blurred",PERSPECTIVE_CHANGED:"perspective changed",PERSPECTIVES_NONE:"no perspectives",SYSTEMLOG_OPENED:"systemlog opened",SYSTEMLOG_CLOSED:"systemlog closed",SYSTEMACTION_INVOKE:"systemaction invoke",SYSTEMACTION_INVOKED:"systemaction invoked",SYSTEM_ACTIONPROFILE_PUBLISHED:"system actionprofile published",NAVIGATOR_TREENODE_SELECTED:"navigator treenode selected",MODAL_DIALOG_OPENED:"modal dialog invoked",MODAL_DIALOG_CLOSED:"modal dialog closed",COVERBINDING_MOUSEDOWN:"userinterfacecoverbinding mousedown",SERVER_OFFLINE:"server offline",SERVER_ONLINE:"server online",OFFLINE_FLASH_INITIALIZED:"offline flash initialized",CLOSE_CURRENT:"close current",CLOSE_ALL:"close all",CLOSE_ALL_DONE:"close all done",SAVE_CURRENT:"save current",CURRENT_SAVED:"current saved",SAVE_ALL:"save all",SAVE_ALL_DONE:"save all done",DOCKTAB_DIRTY:"docktab dirty",DOCKTAB_CLEAN:"docktab clean",BINDING_RELATE:"binding relate",LOCALIZATION_CHANGED:"localization changed",XHTML_MARKUP_ON:"xhtml markup on",XHTML_MARKUP_OFF:"xhtml markup off",XHTML_MARKUP_ACTIVATE:"xhtml markup activate",XHTML_MARKUP_DEACTIVATE:"xhtml markup deactivate",HIGHLIGHT_KEYWORDS:"highlight keywords",BIND_TOKEN_TO_VIEW:"bind entitytoken to view",STAGEDIALOG_OPENED:"stage dialog opened",INVOKE_DEFAULT_ACTION:"invoke default action",LANGUAGES_UPDATED:"LocalesUpdated",FROMLANGUAGE_UPDATED:"ForeignLocaleChanged",TOLANGUAGE_UPDATED:"ActiveLocaleChanged",MESSAGEQUEUE_REQUESTED:"messagequeue requested",MESSAGEQUEUE_EVALUATED:"messagequeue evaluated",UPDATE_LANGUAGES:"update languages"};
var BroadcastMessages=new _BroadcastMessages();
function _EventBroadcaster(){
}
_EventBroadcaster.prototype={_broadcasts:{},subscribe:function(_5d,_5e){
if(_5d!=null){
if(!Interfaces.isImplemented(IBroadcastListener,_5e,true)){
throw ("IBroadcastListener not implemented: "+_5d);
}else{
if(!this._broadcasts[_5d]){
this._broadcasts[_5d]=[_5e];
}else{
this._broadcasts[_5d].push(_5e);
}
}
}else{
SystemDebug.stack(arguments);
throw "Undefined broadcast: "+_5e;
}
},unsubscribe:function(_5f,_60){
if(_5f!=null){
if(Interfaces.isImplemented(IBroadcastListener,_60)){
var i=0,_62,_63=this._broadcasts[_5f];
if(_63){
while(i<_63.length){
_62=_63[i];
if(_62==_60){
_63.splice(i,1);
break;
}
i++;
}
}
}
}else{
throw "Undefined broadcast"+_60;
}
},hasSubscribers:function(_64){
var _65=this._broadcasts[_64];
return _65!=null&&_65.length>0;
},broadcast:function(_66,_67){
if(_66!=null){
var i=0,_69=this._broadcasts[_66];
var _6a=[];
if(_69!=null){
var _6b=new List();
while(i<_69.length){
_6a.push(_69[i++]);
}
i=0;
while(i<_6a.length){
var _6c=_6a[i];
if(Application.isDeveloperMode){
_6c.handleBroadcast(_66,_67);
}else{
try{
_6c.handleBroadcast(_66,_67);
}
catch(exception){
_6b.add(_6c);
var cry="Exception in "+new String(_6c)+" on broadcast '"+_66+"':"+new String(exception);
SystemLogger.getLogger("EventBroadcaster").error(cry);
SystemDebug.stack(arguments);
}
}
i++;
}
if(_6b.hasEntries()){
_6b.each(function(_6e){
EventBroadcaster.unsubscribe(_66,_6e);
});
}
}
}else{
SystemDebug.stack(arguments);
throw "Undefined broadcast";
}
}};
var EventBroadcaster=new _EventBroadcaster();
function _Constants(){
}
var temppath=document.location.pathname;
var temproot=temppath.substring(0,temppath.lastIndexOf("/"));
_Constants.prototype={COMPOSITE_HOME:"http://www.composite.net",DUMMY_LINK:"javascript:void(false);",APPROOT:temproot,WEBSITEROOT:temproot.substring(0,temproot.length-9),CONFIGROOT:temproot.substring(0,temproot.length-9)+"Frontend/Config/VisualEditor/",TEMPLATESROOT:temproot+"/templates",SKINROOT:temproot+"/skins/system",TINYROOT:temproot+"/content/misc/editors/visualeditor/tinymce",URL_WSDL_SETUPSERVICE:temproot+"/services/Setup/SetupService.asmx?WSDL",URL_WSDL_CONFIGURATION:temproot+"/services/Configuration/ConfigurationService.asmx?WSDL",URL_WSDL_LOGINSERVICE:temproot+"/services/Login/Login.asmx?WSDL",URL_WSDL_INSTALLSERVICE:temproot+"/services/Installation/InstallationService.asmx?WSDL",URL_WSDL_MESSAGEQUEUE:temproot+"/services/ConsoleMessageQueue/ConsoleMessageQueueServices.asmx?WSDL",URL_WSDL_EDITORCONFIG:temproot+"/services/WysiwygEditor/ConfigurationServices.asmx?WSDL",URL_WSDL_FLOWCONTROLLER:temproot+"/services/FlowController/FlowControllerServices.asmx?WSDL",URL_WSDL_STRINGSERVICE:temproot+"/services/StringResource/StringService.asmx?WSDL",URL_WSDL_TREESERVICE:temproot+"/services/Tree/TreeServices.asmx?WSDL",URL_WSDL_XHTMLTRANSFORM:temproot+"/services/WysiwygEditor/XhtmlTransformations.asmx?WSDL",URL_WSDL_PAGETEMPLATE:temproot+"/services/WysiwygEditor/PageTemplate.asmx?WSDL",URL_WSDL_FUNCTIONSERVICE:temproot+"/services/WysiwygEditor/FunctionService.asmx?WSDL",URL_WSDL_SECURITYSERVICE:temproot+"/services/Tree/SecurityServices.asmx?WSDL",URL_WSDL_READYSERVICE:temproot+"/services/Ready/ReadyService.asmx?WSDL",URL_WSDL_LOCALIZATION:temproot+"/services/Localization/LocalizationService.asmx?WSDL",URL_WSDL_SOURCEVALIDATION:temproot+"/services/SourceEditor/SourceValidationService.asmx?WSDL",URL_WSDL_MARKUPFORMAT:temproot+"/services/SourceEditor/MarkupFormatService.asmx?WSDL",URL_WSDL_SEOSERVICE:temproot+"/services/SearchEngineOptimizationKeyword/SearchEngineOptimizationKeyword.asmx?WSDL",URL_WSDL_PAGESERVICE:temproot+"/services/Page/PageService.asmx?WSDL",URL_WSDL_DIFFSERVICE:temproot+"/services/StringResource/DiffService.asmx?WSDL",NS_XHTML:"http://www.w3.org/1999/xhtml",NS_UI:"http://www.w3.org/1999/xhtml",NX_XUL:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",NS_XBL:"http://www.mozilla.org/xbl",NS_WSDL:"http://schemas.xmlsoap.org/wsdl/",NS_SOAP:"http://schemas.xmlsoap.org/wsdl/soap/",NS_ENVELOPE:"http://schemas.xmlsoap.org/soap/envelope/",NS_ENCODING:"http://schemas.xmlsoap.org/soap/encoding/",NS_SCHEMA:"http://www.w3.org/2001/XMLSchema",NS_SCHEMA_INSTANCE:"http://www.w3.org/1999/XMLSchema-instance",NS_DOMPARSEERROR:"http://www.mozilla.org/newlayout/xml/parsererror.xml",NS_NS:"http://www.w3.org/2000/xmlns/",NS_PERSISTANCE:"http://www.composite.net/ns/localstore/persistance",NS_FUNCTION:"http://www.composite.net/ns/function/1.0",SCROLLBAR_DIMENSION_HARDCODED_VALUE:19};
var Constants=new _Constants();
temppath=null;
temproot=null;
function _Client(){
var _6f=navigator.userAgent.toLowerCase();
var _70=navigator.platform.toLowerCase();
var _71=navigator.appName=="Microsoft Internet Explorer";
var _72=!_71&&typeof document.createTreeWalker!="undefined";
var _73=_72&&(_6f.indexOf("webrunner")>-1||_6f.indexOf("prism")>-1);
var _74=history.pushState!=null;
this.isMozilla=_72;
this.isFirefox=_6f.indexOf("firefox")>-1;
this.isWebKit=_6f.indexOf("webkit")>-1;
this.isExplorer=_71;
this.isExplorer6=this.isExplorer&&(_6f.indexOf("msie 6.0")>-1||_6f.indexOf("msie 6.1")>-1);
this.isExplorer8=this.isExplorer&&window.XDomainRequest!=null;
this.isExplorer11=!!navigator.userAgent.match(/Trident\/7\./);
this.isPrism=_73;
this.isWindows=_70.indexOf("win")>-1;
this.isVista=this.isWindows&&_6f.indexOf("windows nt 6")>-1;
this.isMac=_70.indexOf("mac")>-1;
this.isPad=navigator.userAgent.match(/iPad/i)!=null;
this.isOS7=navigator.userAgent.match(/CPU.*OS 7_\d/i)!=null;
var _75=this._getFlashVersion();
this.hasFlash=(_75&&_75>=9);
this.hasTransitions=_74;
this.canvas=!!document.createElement("canvas").getContext;
this.hasSpellcheck=this.isFirefox||this.isExplorer&&document.documentElement.spellcheck;
this.hasXSLTProcessor=this.isMozilla&&!this.isExplorer11;
return this;
}
_Client.prototype={isExplorer:false,isMozilla:false,isPrism:false,hasFlash:false,isWindows:false,isVista:false,hasTransitions:false,_getFlashVersion:function(){
var _76=null;
var _77=10;
try{
if(this.isMozilla==true){
if(typeof navigator.plugins["Shockwave Flash"]!="undefined"){
var _78=navigator.plugins["Shockwave Flash"];
if(_78){
var _79=_78.description;
if(_79!=null){
_76=_79.charAt(_79.indexOf(".")-1);
}
}
}
}else{
for(var i=2;i<=_77;i++){
try{
new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
_76=i;
}
catch(exception){
continue;
}
}
}
}
catch(exception){
}
return _76;
},qualifies:function(){
var _7b=true;
var _7c=false;
if(this.isMozilla&&!this.isWebKit&&!this.isExplorer11){
_7c=(document.documentElement.mozMatchesSelector===undefined);
}
if(window.opera!=null||_7c||this.isExplorer&&!this.canvas){
_7b=false;
}
return _7b;
},fixUI:function(_7d){
if(Client.isExplorer){
_7d=_7d.replace(/<ui:/g,"<").replace(/<\/ui:/g,"</");
_7d=_7d.replace(/(<(\w+)[^>]*)\/>/g,"$1></$2>");
}
return _7d;
}};
var Client=new _Client();
SystemLogger.TAB_SEQUENCE="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;";
SystemLogger.LEVEL_INFO="info";
SystemLogger.LEVEL_DEBUG="debug";
SystemLogger.LEVEL_ERROR="error";
SystemLogger.LEVEL_WARN="warn";
SystemLogger.LEVEL_FATAL="fatal";
SystemLogger.LEVEL_FINE="fine";
SystemLogger.isFlushing=false;
function SystemLogger(_7e){
this.identifier=_7e;
}
SystemLogger.prototype.info=function(_7f){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_INFO,_7f);
};
SystemLogger.prototype.debug=function(_80){
if(_80=="page"){
alert(arguments.caller.callee);
}
SystemLogger.log(this.identifier,SystemLogger.LEVEL_DEBUG,_80);
};
SystemLogger.prototype.error=function(_81){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_ERROR,_81);
};
SystemLogger.prototype.warn=function(_82){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_WARN,_82);
};
SystemLogger.prototype.fatal=function(_83){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_FATAL,_83);
};
SystemLogger.prototype.fine=function(_84){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_FINE,_84);
};
SystemLogger.loggers={};
SystemLogger.buffer=new List();
SystemLogger.suspend=function(){
SystemLogger.outputWindow=null;
SystemLogger.outputDocument=null;
SystemLogger.outputElement=null;
SystemLogger.log=SystemLogger.bufferLog;
};
SystemLogger.unsuspend=function(win){
SystemLogger.outputWindow=win;
SystemLogger.outputDocument=win.document;
SystemLogger.outputElement=win.document.body;
SystemLogger.log=SystemLogger.outputLog;
SystemLogger.flushBuffer();
};
SystemLogger.getLogger=function(_86){
var _87=SystemLogger.loggers[_86];
if(!_87){
_87=new SystemLogger(_86);
SystemLogger.loggers[_86]=_87;
}
return _87;
};
SystemLogger.flushBuffer=function(){
SystemLogger.buffer.reset();
SystemLogger.isFlushing=true;
if(SystemLogger.buffer.hasEntries()){
while(SystemLogger.buffer.hasNext()){
var _88=SystemLogger.buffer.getNext();
this.log(_88.identifier,_88.level,_88.message);
}
}
SystemLogger.isFlushing=false;
};
SystemLogger.bufferLog=function(_89,_8a,_8b){
if(Application.isDeveloperMode){
_8b=String(_8b);
SystemLogger.buffer.add({identifier:_89,level:_8a,message:_8b});
}
};
SystemLogger.outputLog=function(_8c,_8d,_8e){
_8e=String(_8e);
if(!SystemLogger.isFlushing){
SystemLogger.bufferLog(_8c,_8d,_8e);
}
var win=SystemLogger.outputWindow;
var doc=SystemLogger.outputDocument;
var elm=SystemLogger.outputElement;
var div=doc.createElement("div");
var _93=doc.createElement("span");
var pre=doc.createElement("pre");
if(Client.isExplorer){
_8e=_8e.replace(/</g,"&lt;");
_8e=_8e.replace(/>/g,"&gt;");
_8e=_8e.replace(/\n/g,"<br/>");
_8e=_8e.replace(/\t/g,SystemLogger.TAB_SEQUENCE);
pre.innerHTML=_8e;
}else{
pre.textContent=_8e;
}
div.className=_8d;
_93.innerHTML=_8c;
div.appendChild(_93);
div.appendChild(pre);
elm.insertBefore(div,elm.firstChild);
win.scrollTo(0,0);
};
SystemLogger.log=SystemLogger.bufferLog;
SystemLogger.clear=function(){
SystemLogger.buffer=new List();
var doc=SystemLogger.outputDocument;
if(doc){
doc.body.innerHTML="";
}
};
SystemTimer.getTimer=function(_96){
return new SystemTimer(_96.toString());
};
function SystemTimer(id){
this.logger=SystemLogger.getLogger("SystemTimer");
this._id=id;
this._time=new Date().getTime();
}
SystemTimer.prototype.reset=function(){
this._time=new Date().getTime();
};
SystemTimer.prototype.report=function(_98){
this.logger.debug(this._id+": "+this.getTime()+(_98?": "+_98:""));
};
SystemTimer.prototype.getTime=function(){
return new Date().getTime()-this._time;
};
function _SystemDebug(){
}
_SystemDebug.prototype={_logger:SystemLogger.getLogger("SystemDebug"),_stacklength:parseInt(5),stack:function(_99,_9a){
this._stackMozilla(_99,_9a);
},_stackMozilla:function(_9b,_9c){
_9c=_9c?_9c:this._stacklength;
if(Client.isMozilla&&_9b.callee||_9b.caller){
var _9d=Client.isMozilla?_9b.callee.caller:_9b.caller.callee;
var _9e="";
var i=0;
while(_9d!=null&&i++<_9c){
_9e+="\n#"+i+"\n";
_9e+=_9d.toString();
_9d=_9d.caller;
_9e+="\n";
}
this._logger.error(_9e);
}else{
this._logger.error("(Error stack unreachable!)");
}
}};
var SystemDebug=new _SystemDebug;
function _Interfaces(){
var _a0=SystemLogger.getLogger("Interfaces");
this.isImplemented=function(_a1,_a2,_a3){
var _a4=true;
for(var _a5 in _a1){
if(typeof _a2[_a5]==Types.UNDEFINED){
_a4=false;
}else{
if(typeof _a1[_a5]!=typeof _a2[_a5]){
_a4=false;
}
}
if(!_a4){
break;
}
}
if(!_a4){
if(_a3){
_a0.fine(_a2+" invalid. Interface check abandoned at: "+_a5);
}
}
return _a4;
};
}
var Interfaces=new _Interfaces;
function _Types(){
}
_Types.prototype={_logger:SystemLogger.getLogger("Types"),BOOLEAN:"boolean",STRING:"string",NUMBER:"number",FUNCTION:"function",UNDEFINED:"undefined",castFromString:function(_a6){
var _a7=_a6;
if(parseInt(_a7).toString()===_a7){
_a7=parseInt(_a7);
}else{
if(parseFloat(_a7).toString()===_a7){
_a7=parseFloat(_a7);
}else{
if(_a7==="true"||_a7==="false"){
_a7=(_a7==="true");
}
}
}
return _a7;
},isDefined:function(arg){
return typeof arg!=Types.UNDEFINED;
},isFunction:function(arg){
return typeof arg==Types.FUNCTION;
}};
var Types=new _Types();
var MimeTypes={JPG:"image/jpeg",GIF:"image/gif",PNG:"image/png",CSS:"text/css",JAVASCRIPT:"text/javascript",TEXT:"text/plain",HTML:"text/html",XHTML:"applcication/xhtml+xml",FLASH:"application/x-shockwave-flash",QUICKTIME:"video/quicktime",SHOCKWAVE:"application/x-director",WINMEDIA:"application/x-mplayer2",COMPOSITEPAGES:"application/x-composite-page",COMPOSITEFUNCTION:"application/x-composite-function"};
window.SearchTokens=new function(){
var _aa={"MediaFileElementProvider.WebImages":null,"MediaFileElementProvider.EmbeddableMedia":null,"MediaFileElementProvider.WritableFolders":null,"AllFunctionsElementProvider.VisualEditorFunctions":null,"AllFunctionsElementProvider.XsltFunctionCall":null};
this.getToken=function(key){
var _ac=null;
if(this.hasToken(key)){
_ac=_aa[key];
}else{
throw "Unknown search token key: "+key;
}
return _ac;
};
this.hasToken=function(key){
return typeof _aa[key]!=Types.UNDEFINED;
};
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,{handleBroadcast:function(){
new List(TreeService.GetSearchTokens(true)).each(function(_ae){
if(SearchTokens.hasToken(_ae.Key)){
_aa[_ae.Key]=_ae.Value;
}else{
alert("SearchTokens need updating!");
}
});
}});
};
window.StringBundle=new function(){
var _af=SystemLogger.getLogger("StringBundle");
this.UI="Composite.Management";
var _b0={};
function resolve(_b1,_b2){
var _b3=new List(StringService.GetLocalisation(_b1));
if(_b3.hasEntries()){
_b3.each(function(_b4){
_b2[_b4.Key]=_b4.Value;
});
}else{
throw "No strings from provider: "+_b1;
}
}
this.getString=function(_b5,_b6){
var _b7=null;
if(window.StringService!=null){
try{
if(_b5=="ui"){
_b5=StringBundle.UI;
}
if(!_b0[_b5]){
var _b8=_b0[_b5]={};
resolve(_b5,_b8);
}
if(_b0[_b5]){
_b7=_b0[_b5][_b6];
}
if(!_b7){
throw "No such string: "+_b6;
}
}
catch(exception){
var cry="StringBundle exception in string "+_b5+":"+_b6;
_af.error(cry);
if(Application.isDeveloperMode){
alert(cry);
}
}
}
return _b7;
};
};
function _KeyMaster(){
}
_KeyMaster.prototype={_uniqueKeys:{},getUniqueKey:function(){
var key=new String("key"+Math.random().toString().split(".")[1]);
if(this._uniqueKeys[key]!=null){
return this.getUniqueKey();
}
this._uniqueKeys[key]=true;
return key;
},hasKey:function(key){
var _bc=false;
if(this._uniqueKeys[key]){
_bc=true;
}
return _bc;
}};
var KeyMaster=new _KeyMaster();
function _ImageProvider(){
}
_ImageProvider.prototype={_logger:SystemLogger.getLogger("ImageProvider"),SERVICE_URL:"services/Icon/GetIcon.ashx",UI:"Composite.Icons",getImageURL:function(_bd,_be){
var _bf=null;
var url=Constants.APPROOT+"/"+this.SERVICE_URL+"?resourceName=${name}&resourceNamespace=${hash}&size=${size}";
var _c1=_bd.ResourceNamespace;
var _c2=_bd.ResourceName;
_be=_be?_be:"DEFAULT";
if(_c2!=null&&_c1!=null){
_bf=url.replace("${name}",_c2).replace("${hash}",_c1).replace("${size}",_be);
if(_be=="DEFAULT"){
_bf=_bf.split("&size=DEFAULT")[0];
}
}else{
throw "Could not compute image URL.";
}
return _bf;
},toGrayScaleURL:function(_c3){
var _c4=document.createElement("canvas");
var ctx=_c4.getContext("2d");
var _c3=new Image();
var _c6=_c3.width;
var _c7=_c3.height;
_c4.width=_c6;
_c4.height=_c7;
ctx.drawImage(_c3,0,0);
var _c8=ctx.getImageData(0,0,_c6,_c7);
for(j=0;j<_c8.height;i++){
for(i=0;i<_c8.width;j++){
var _c9=(i*4)*_c8.width+(j*4);
var red=_c8.data[_c9];
var _cb=_c8.data[_c9+1];
var _cc=_c8.data[_c9+2];
var _cd=_c8.data[_c9+3];
var _ce=(red+_cb+_cc)/3;
_c8.data[_c9]=_ce;
_c8.data[_c9+1]=_ce;
_c8.data[_c9+2]=_ce;
_c8.data[_c9+3]=_cd;
}
}
return _c4.toDataURL();
}};
var ImageProvider=new _ImageProvider();
function _Resolver(){
}
_Resolver.prototype={_logger:SystemLogger.getLogger("Resolver"),resolve:function(_cf){
if(typeof _cf!=Types.UNDEFINED){
_cf=String(_cf);
_cf=_cf.replace("${root}",Constants.APPROOT);
_cf=_cf.replace("${skin}",Constants.SKINROOT);
_cf=_cf.replace("${tiny}",Constants.TINYROOT);
if(_cf.indexOf("${icon:")>-1){
_cf=this._resolveImage(_cf);
}else{
if(_cf.indexOf("${string:")>-1){
_cf=this._resolveString(_cf);
}
}
}
return _cf;
},resolveVars:function(_d0,_d1){
var i=0;
while(i<_d1.length){
_d0=_d0.replace("{"+i+"}",_d1[i]);
i++;
}
return _d0;
},_resolveString:function(_d3){
var _d4=null;
var _d5=null;
var key=_d3.split("${string:")[1].split("}")[0];
if(key.indexOf(":")>-1){
_d5=key.split(":")[0];
key=key.split(":")[1];
}else{
_d5=StringBundle.UI;
}
_d4=StringBundle.getString(_d5,key);
if(!_d4){
_d4="(?)";
}
return _d4;
},_resolveImage:function(_d7){
var _d8=null;
var _d9=null;
var _da=null;
var _db=null;
_da=_d7.split("${icon:")[1].split("}")[0];
if(_da.indexOf(":")>-1){
_d9=_da.split(":")[0];
_da=_da.split(":")[1];
}else{
_d9=ImageProvider.UI;
}
if(_da.indexOf("(")>-1){
_db=_da.split("(")[1].split(")")[0];
_da=_da.split("(")[0];
}
_d8=ImageProvider.getImageURL({ResourceNamespace:_d9,ResourceName:_da},_db);
return _d8;
}};
var Resolver=new _Resolver();
function _Download(){
}
_Download.prototype.init=function(url){
var win=top.app.bindingMap.downloadwindow;
win.setURL(url);
};
var Download=new _Download();
function _Cookies(){
}
_Cookies.prototype={createCookie:function(_de,_df,_e0){
var _e1="";
if(_e0){
var _e2=new Date();
_e2.setTime(_e2.getTime()+(_e0*24*60*60*1000));
_e1="; expires="+_e2.toGMTString();
}
document.cookie=_de+"="+escape(_df)+_e1+"; path=/";
return this.readCookie(_de);
},readCookie:function(_e3){
var _e4=null;
var _e5=_e3+"=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_e5)==0){
_e4=unescape(c.substring(_e5.length,c.length));
}
}
return _e4;
},eraseCookie:function(_e9){
this.createCookie(_e9,"",-1);
}};
var Cookies=new _Cookies();
function _StatusBar(){
this.AUTOCLEAR_TIMEOUT=5*1000;
this.GROUP_LANGUAGETOOLS="languagetools";
this.document=null;
this.state=null;
this.ERROR="error";
this.WARN="warn";
this.BUSY="busy";
this.READY="ready";
this._groups=new Map();
var _ea=SystemLogger.getLogger("StatusBar");
var _eb=null;
var _ec="${icon:error}";
var _ed="${icon:warning}";
var _ee="${icon:loading}";
var _ef="${icon:message}";
var _f0=null;
var _f1=null;
var _f2=null;
var _f3=null;
this.initialize=function(_f4){
_f0=StringBundle.getString("ui","Website.App.StatusBar.Error");
_f1=StringBundle.getString("ui","Website.App.StatusBar.Warn");
_f2=StringBundle.getString("ui","Website.App.StatusBar.Busy");
_f3=StringBundle.getString("ui","Website.App.StatusBar.Ready");
_eb=_f4;
this.document=_f4.bindingDocument;
};
this.error=function(_f5,_f6){
this.state=StatusBar.ERROR;
_f5=_f5?_f5:_f0;
show(_f5,_ec,_f6,false);
};
this.warn=function(_f7,_f8){
this.state=StatusBar.WARN;
_f7=_f7?_f7:_f1;
show(_f7,_ed,_f8,false);
};
this.busy=function(_f9,_fa){
this.state=StatusBar.BUSY;
_f9=_f9?_f9:_f2;
show(_f9,_ee,_fa,false);
};
this.ready=function(_fb,_fc){
this.state=StatusBar.READY;
_fb=_fb?_fb:_f3;
show(_fb,_ef,_fc,true);
};
this.report=function(_fd,_fe,_ff,_100){
this.state=null;
show(_fd,_fe,_ff,_100);
};
this.clear=function(){
this.state=null;
if(_eb){
_eb.clear();
}
};
function show(_101,icon,vars,_104){
if(vars){
_101=Resolver.resolveVars(_101,vars);
}
if(_eb){
_eb.setLabel(_101);
_eb.setImage(icon);
if(_104){
_eb.startFadeOut(StatusBar.AUTOCLEAR_TIMEOUT);
}
}else{
_ea.error("Message not initialized for display: "+_101);
}
}
this.addToGroup=function(name,_106){
if(!this._groups.has(name)){
this._groups.set(name,_eb.addRight(ToolBarGroupBinding.newInstance(this.document)));
}
this._groups.get(name).add(_106);
};
}
var StatusBar=new _StatusBar();
function _Localization(){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,this);
EventBroadcaster.subscribe(BroadcastMessages.LANGUAGES_UPDATED,this);
EventBroadcaster.subscribe(BroadcastMessages.FROMLANGUAGE_UPDATED,this);
EventBroadcaster.subscribe(BroadcastMessages.TOLANGUAGE_UPDATED,this);
}
_Localization.prototype={languages:null,source:null,target:null,handleBroadcast:function(_107,arg){
switch(_107){
case BroadcastMessages.APPLICATION_LOGIN:
case BroadcastMessages.LANGUAGES_UPDATED:
case BroadcastMessages.TOLANGUAGE_UPDATED:
var _109=LocalizationService.GetActiveLocales(true);
if(_109.length>=1){
this.languages=new List(_109);
}else{
this.languages=null;
}
EventBroadcaster.broadcast(BroadcastMessages.UPDATE_LANGUAGES,this.languages);
break;
}
switch(_107){
case BroadcastMessages.APPLICATION_LOGIN:
case BroadcastMessages.FROMLANGUAGE_UPDATED:
var _10a=LocalizationService.GetLocales(true);
this.source=_10a.ForeignLocaleName;
this.target=_10a.ActiveLocaleName;
EventBroadcaster.broadcast(BroadcastMessages.LOCALIZATION_CHANGED,{source:_10a.ForeignLocaleName,target:_10a.ActiveLocaleName});
break;
}
},currentLang:function(){
if(this.languages!=null){
var _10b=this.languages.copy();
while(_10b.hasNext()){
var lang=_10b.getNext();
if(lang.IsCurrent){
return lang.IsoName;
}
}
}
return null;
}};
var Localization=new _Localization();
function _Validator(){
}
_Validator.prototype={validate:function(_10d,key,_10f){
var _110=true;
var _111=SourceValidationService.ValidateSource(_10d,key);
if(_111!="True"){
if(_10f==true){
this._dialog(_111);
}
_110=false;
}
return _110;
},validateInformed:function(_112,key){
return this.validate(_112,key,true);
},_dialog:function(_114){
setTimeout(function(){
Dialog.error("Source Invalid",_114);
},0);
}};
var Validator=new _Validator();
function _DOMEvents(){
}
_DOMEvents.prototype={_logger:SystemLogger.getLogger("DOMEvents"),MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",CLICK:"click",DOUBLECLICK:"dblclick",KEYPRESS:"keypress",KEYDOWN:"keydown",KEYUP:"keyup",CONTEXTMENU:"contextmenu",SCROLL:"scroll",LOAD:"load",BEFOREUNLOAD:"beforeunload",UNLOAD:"unload",RESIZE:"resize",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",CUT:"cut",COPY:"copy",PASTE:"paste",DOM:"DOMContentLoaded",DRAGOVER:"dragover",DROP:"drop",ACTIVATE:"activate",DEACTIVATE:"deactivate",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",SELECTSTART:"selectstart",FOCUSIN:"focusin",FOCUSOUT:"focusout",HELP:"help",BEFOREUPDATE:"beforeupdate",AFTERUPDATE:"afterupdate",ERRORUPDATE:"errorupdate",_count:0,addEventListener:function(_115,_116,_117,_118){
this._count++;
this._eventListener(true,_115,_116,_117,_118);
if(!Client.isExplorer&&!Client.isExplorer11){
if(_115&&typeof _115.nodeType!=Types.UNDEFINED){
if(_115.nodeType==Node.ELEMENT_NODE){
var win=DOMUtil.getParentWindow(_115);
if(win){
var _11a={handleEvent:function(){
DOMEvents.removeEventListener(_115,_116,_117,_118);
DOMEvents.removeEventListener(win,DOMEvents.UNLOAD,_11a);
}};
DOMEvents.addEventListener(win,DOMEvents.UNLOAD,_11a);
}
}
}
}
},removeEventListener:function(_11b,_11c,_11d,_11e){
this._count--;
this._eventListener(false,_11b,_11c,_11d,_11e);
},getTarget:function(e){
return e?(e.target?e.target:e.srcElement):null;
},stopPropagation:function(e){
try{
if(e.stopPropagation!=null){
e.stopPropagation();
}else{
e.cancelBubble=true;
}
}
catch(exception){
if(Application.isDeveloperMode==true){
this._logger.error(exception);
}
}
},preventDefault:function(e){
try{
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
}
catch(exception){
if(Application.isDeveloperMode==true){
this._logger.error(exception);
}
}
},isRightButton:function(e){
return e.button==2?true:false;
},isButtonPressed:function(e){
if((Client.isFirefox||Client.isExplorer11)&&e.buttons===0){
return false;
}else{
if(Client.isWebKit&&e.which===0){
return false;
}
}
return undefined;
},cleanupEventListeners:function(_124){
this._deleteWrappedHandler(_124);
},isCurrentTarget:function(e){
var _126=false;
if(Client.isMozilla==true){
_126=e.target==e.currentTarget;
}
return true;
},_isChildOf:function(_127,_128){
var _129=true;
if(_127==_128){
_129=false;
}
if(_129==true){
while(_128!=null&&_128.nodeType!=Node.DOCUMENT_NODE&&_128!=_127){
_128=_128.parentNode;
}
_129=(_128==_127);
}
return _129;
},_eventListener:function(_12a,_12b,_12c,_12d,_12e,_12f){
if(Interfaces.isImplemented(IEventListener,_12d,true)){
if(typeof _12c!=Types.UNDEFINED){
var _130=this._getAction(_12a);
if(_12b[_130]){
if(Client.isExplorer||Client.isExplorer11){
switch(_12c){
case DOMEvents.MOUSEDOWN:
case DOMEvents.MOUSEUP:
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
case DOMEvents.MOUSEMOVE:
_12d=this._getWrappedHandler(_12b,_12c,_12d,_12f);
_12b[_130](_12c,_12d,false);
break;
default:
_12b[_130](_12c,_12d,false);
break;
}
}else{
switch(_12c){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSELEAVE:
_12c=_12c==DOMEvents.MOUSEENTER?DOMEvents.MOUSEOVER:DOMEvents.MOUSEOUT;
_12b[_130](_12c,{handleEvent:function(e){
var rel=e.relatedTarget;
if(e.currentTarget==rel||DOMEvents._isChildOf(e.currentTarget,rel)){
}else{
_12d.handleEvent(e);
}
}},_12e?true:false);
break;
default:
_12b[_130](_12c,_12d,_12e?true:false);
break;
}
}
}
}else{
throw "No such event allowed!";
}
}
},_getAction:function(_133){
var _134=null;
switch(_133){
case true:
_134="addEventListener";
break;
case false:
_134="removeEventListener";
break;
}
return _134;
},_getWrappedHandler:function(_135,_136,_137,_138){
var _139=null;
try{
if(!_137._domEventHandlers){
_137._domEventHandlers={};
}
if(!_137._domEventHandlers[_135]){
_137._domEventHandlers[_135]={};
}
if(!_137._domEventHandlers[_135][_136]){
var win=_135.nodeType?DOMUtil.getParentWindow(_135):_135;
if(win){
_137._domEventHandlers[_135][_136]=function(e){
if(win.event!=null&&_137!=null){
_137.handleEvent(win.event);
}else{
if(_137!=null){
_137.handleEvent(e);
}
}
};
}
}
_139=_137._domEventHandlers[_135][_136];
}
catch(exception){
this._report(_135,_136,_137,_138);
}
return _139;
},_deleteWrappedHandler:function(_13c){
for(var _13d in _13c._domEventHandlers){
if(_13d){
for(var _13e in _13c._domEventHandlers[_13d]){
if(_13e){
delete _13c._domEventHandlers[_13d][_13e];
}
}
}
delete _13c._domEventHandlers[_13d];
}
},_report:function(_13f,_140,_141,_142){
alert("DOMEvents.getWrappedHandler malfunction.\n\n"+"\ttarget: "+(_13f?_13f.nodeName:_13f)+"\n"+"\tevent: "+_140+"\n"+"\thandler: "+_141+"\n\n"+"Offending invoker: "+(_142.callee?_142.callee.toString():_142.constructor));
}};
var DOMEvents=new _DOMEvents();
function _DOMSerializer(){
}
_DOMSerializer.prototype={_serializer:(window.XMLSerializer?new XMLSerializer():null),serialize:function(node,_144){
var _145=null;
var _146=node;
if(node.nodeType==Node.DOCUMENT_NODE){
_146=node.documentElement;
}
if(_146.xml!=null){
return _146.xml;
}else{
if(this._serializer!=null){
if(_144==true){
_146=_146.cloneNode(true);
_146=DOMFormatter.format(_146,DOMFormatter.INDENTED_TYPE_RESULT);
}
_145=this._serializer.serializeToString(_146);
}
}
return _145;
}};
var DOMSerializer=new _DOMSerializer();
window.DOMFormatter=new function(){
var TAB="\t";
var NEW="\n";
var _149=new RegExp(/[^\t\n\r ]/);
this.ignoreCDATASections=false;
function indent(_14a){
var doc=_14a.ownerDocument;
var _14c=function(node,_14e){
if(node.hasChildNodes()&&node.firstChild.nodeType!=Node.TEXT_NODE){
var _14f="",i=0;
while(i++<_14e){
_14f+=TAB;
}
var _151=node.firstChild;
while(_151){
switch(_151.nodeType){
case Node.ELEMENT_NODE:
if(_151==node.lastChild){
node.appendChild(doc.createTextNode(NEW+_14f));
}
node.insertBefore(doc.createTextNode(NEW+_14f+TAB),_151);
_14c(_151,_14e+1);
break;
case Node.COMMENT_NODE:
case Node.PROCESSING_INSTRUCTION_NODE:
case Node.CDATA_SECTION_NODE:
node.insertBefore(doc.createTextNode(NEW+_14f+TAB),_151);
break;
}
if(_151.nodeType==Node.CDATA_SECTION_NODE){
if(!this.ignoreCDATASections){
formatCDATASection(_151,_14f+TAB);
}
}
_151=_151.nextSibling;
}
}
};
_14c(_14a,0);
}
function strip(_152){
var _153=[];
var _154={acceptNode:function(_155){
return (!_149.test(_155.nodeValue))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
}};
var _156=_152.ownerDocument.createTreeWalker(_152,NodeFilter.SHOW_TEXT,_154,true);
while(_156.nextNode()){
_153.push(_156.currentNode);
}
var i=0,_158;
while((_158=_153[i++])!=null){
_158.parentNode.removeChild(_158);
}
}
function formatCDATASection(node,_15a){
if(node.textContent.indexOf(NEW)>-1){
var _15b=node.textContent.split(NEW);
var _15c="",line,_15e=0,_15f=true;
while((line=_15b.shift())!=null){
if(_15e==0&&line.charAt(0)==TAB){
while(line.charAt(_15e++)==TAB){
}
}
line=line.substring(_15e,line.length);
if(_15b.length>0){
_15c+=_15a+TAB+line;
_15c+=_15f?"":"\n";
}else{
_15c+=_15a+line;
_15a=_15a.slice(1,_15a.length);
node.parentNode.appendChild(doc.createTextNode(NEW+_15a));
}
_15f=false;
}
node.textContent=_15c;
}
}
this.format=function(_160,_161){
var _162=1;
if(document.createTreeWalker&&!Client.isExplorer&&!Client.isExplorer11){
try{
strip(_160);
if(_161!=_162){
indent(_160);
}
}
catch(exception){
throw new Error(exception);
}
}
return (_160);
};
};
DOMFormatter.INDENTED_TYPE_RESULT=0;
DOMFormatter.STRIPPED_TYPE_RESULT=1;
function _DOMUtil(){
}
_DOMUtil.prototype={_logger:SystemLogger.getLogger("DOMUtil"),MSXML_MAXVERSION:6,MSXML_MINVERSION:1,MSXML_HTTPREQUEST:"MSXML2.XMLHTTP.{$version}.0",MSXML_DOMDOCUMENT:"MSXML2.DOMDocument.{$version}.0",MSXML_FREETHREADED:"MSXML2.FreeThreadedDOMDocument.{$version}.0",MSXML_XSLTEMPLATE:"MSXML2.XSLTemplate.{$version}.0",getMSComponent:function(_163){
var sig,_165=null,_166=this.MSXML_MAXVERSION;
while(!_165&&_166>=this.MSXML_MINVERSION){
try{
sig=_163.replace("{$version}",_166);
_165=new ActiveXObject(sig);
}
catch(exception){
}
_166--;
}
return _165;
},getXMLHTTPRequest:function(){
var _167=null;
if(Client.isExplorer||Client.isExplorer11){
_167=this.getMSComponent(this.MSXML_HTTPREQUEST);
}else{
_167=new XMLHttpRequest();
}
return _167;
},getDOMDocument:function(_168){
var _169=null;
if(Client.isExplorer||Client.isExplorer11){
_169=this.getMSComponent(_168?this.MSXML_FREETHREADED:this.MSXML_DOMDOCUMENT);
}else{
var doc=XMLParser.parse("<?xml version=\"1.0\" encoding=\"UTF-8\"?><ROOT/>");
doc.removeChild(doc.documentElement);
_169=doc;
}
return _169;
},getMSXMLXSLTemplate:function(){
var _16b=null;
if(Client.isExplorer||Client.isExplorer11){
_16b=this.getMSComponent(this.MSXML_XSLTEMPLATE);
}
return _16b;
},getLocalName:function(_16c){
var _16d=null;
if(_16c.localName){
_16d=_16c.localName.replace("ui:","");
}else{
if(_16c.baseName){
_16d=_16c.baseName;
}else{
_16d=_16c.nodeName.toLowerCase();
}
}
return _16d;
},getComputedStyle:function(_16e,_16f){
var _170=null;
if(Client.isExplorer){
if(_16e.currentStyle!=null){
_170=_16e.currentStyle[_16f];
}else{
this._logger.error("Could not compute style for element "+_16e.nodeName);
SystemDebug.stack(arguments);
}
}else{
var _171=_16e.ownerDocument.defaultView.getComputedStyle(_16e,null);
if(_171!=null){
_170=_171.getPropertyValue(_16f);
}else{
this._logger.error("Could not compute style for element "+_16e.nodeName);
SystemDebug.stack(arguments);
}
}
return _170;
},getMaxIndex:function(doc){
var max=0,_174=new List(doc.getElementsByTagName("*"));
_174.each(function(_175){
var _176=CSSComputer.getZIndex(_175);
if(_176>max){
max=_176;
}
});
return max;
},getOrdinalPosition:function(_177,_178){
var _179=null;
var _17a=-1;
var _17b=this.getLocalName(_177);
var _17c=new List(_177.parentNode.childNodes);
while(_17c.hasNext()){
var _17d=_17c.getNext();
if(_17d.nodeType==Node.ELEMENT_NODE){
if(!_178||this.getLocalName(_17d)==_17b){
_17a++;
if(_17d==_177||(_17d.id!=""&&_17d.id==_177.id)){
_179=_17a;
break;
}
}
}
}
return _179;
},isFirstElement:function(_17e,_17f){
return (this.getOrdinalPosition(_17e,_17f)==0);
},isLastElement:function(_180,_181){
var _182=_180.parentNode.getElementsByTagName(_181?this.getLocalName(_180):"*");
return (this.getOrdinalPosition(_180)==_182.length);
},getParentWindow:function(node){
var doc=node.nodeType==Node.DOCUMENT_NODE?node:node.ownerDocument;
return doc.defaultView?doc.defaultView:doc.parentWindow;
},getTextContent:function(node){
var _186=null;
if(node.textContent){
_186=node.textContent;
}else{
if(node.text){
_186=node.text;
}else{
_186=node.innerText;
}
}
return _186;
},setTextContent:function(node,text){
text=String(text);
if(node.textContent){
node.textContent=text;
}else{
if(node.text){
node.text=text;
}else{
node.innerText=text;
}
}
},getAncestorByLocalName:function(_189,node,_18b){
var _18c=null;
while(_18c==null){
node=node.parentNode;
if(node.nodeType==Node.DOCUMENT_NODE){
if(_18b==true){
var win=this.getParentWindow(node);
node=win.frameElement;
}else{
break;
}
}
if(this.getLocalName(node)==_189){
_18c=node;
}
}
return _18c;
},contains:function(_18e,node){
return _18e.contains?_18e!=node&&_18e.contains(node):!!(_18e.compareDocumentPosition(node)&16);
},createElementNS:function(_190,_191,_192){
var _193=null;
if(_192==null){
alert("DOMUtil#createElementNS : Missing argument (DOMDocument)");
}else{
if(!Client.isExplorer&&!Client.isExplorer11){
_193=_192.createElementNS(_190,_191);
}else{
if(_192.xml!=null){
_193=_192.createNode(Node.ELEMENT_NODE,_191,_190);
}else{
_193=_192.createElement(_191.replace("ui:",""));
}
}
}
return _193;
},getElementsByTagName:function(node,_195){
var _196=null;
if(Client.isMozilla){
_196=node.getElementsByTagNameNS(Constants.NS_XHTML,_195);
}else{
_196=node.getElementsByTagName(_195);
}
return _196;
},getNextElementSibling:function(_197){
return Client.isExplorer?_197.nextSibling:_197.nextElementSibling;
},getPreviousElementSibling:function(_198){
return Client.isExplorer?_198.previousSibling:_198.previousElementSibling;
},cloneNode:function(node){
var _19a=null;
if(Client.isMozilla==true){
_19a=XMLParser.parse(DOMSerializer.serialize(node));
}else{
_19a=node.cloneNode(true);
}
return _19a;
},getLocalPosition:function(_19b){
var _19c=new Point(_19b.offsetLeft,_19b.offsetTop);
if(Client.isExplorer&&_19b.parentNode&&_19b.parentNode.currentStyle){
if(_19b.parentNode.currentStyle.position=="static"){
var _19d=this.getLocalPosition(_19b.parentNode);
_19c.x+=_19d.x;
_19c.y+=_19d.y;
}
}
return _19c;
},getGlobalPosition:function(_19e){
return this._getPosition(_19e,false);
},getUniversalPosition:function(_19f){
return this._getPosition(_19f,true);
},_getPosition:function(_1a0,_1a1){
var _1a2=null;
if(typeof _1a0.getBoundingClientRect!=Types.UNDEFINED){
var rect=_1a0.getBoundingClientRect();
_1a2={x:rect.left,y:rect.top};
if(Client.isMozilla){
_1a2.x-=_1a0.scrollLeft;
_1a2.y-=_1a0.scrollTop;
}
}else{
_1a2={x:_1a0.offsetLeft-_1a0.scrollLeft,y:_1a0.offsetTop-_1a0.scrollTop};
while(_1a0.offsetParent){
_1a0=_1a0.offsetParent;
_1a2.x+=(_1a0.offsetLeft-_1a0.scrollLeft);
_1a2.y+=(_1a0.offsetTop-_1a0.scrollTop);
}
}
if(_1a1){
var win=DOMUtil.getParentWindow(_1a0);
if(win){
var _1a5=win.frameElement;
if(_1a5){
var add=DOMUtil.getUniversalPosition(_1a5);
_1a2.x+=add.x;
_1a2.y+=add.y;
}
}
}
return new Point(_1a2.x,_1a2.y);
},getGlobalMousePosition:function(e){
return this._getMousePosition(e,false);
},getUniversalMousePosition:function(e){
return this._getMousePosition(e,true);
},_getMousePosition:function(e,_1aa){
var _1ab=DOMEvents.getTarget(e);
var _1ac={x:e.pageX?e.pageX:e.clientX,y:e.pageY?e.pageY:e.clientY};
if(Client.isMozilla){
var doc=_1ab.ownerDocument;
var win=this.getParentWindow(doc);
_1ac.x-=win.pageXOffset;
_1ac.y-=win.pageYOffset;
}
if(_1aa){
var _1af=this.getParentWindow(_1ab).frameElement;
if(_1af){
var add=this.getUniversalPosition(_1af);
_1ac.x+=add.x;
_1ac.y+=add.y;
}
}
return _1ac;
}};
var DOMUtil=new _DOMUtil();
function _XMLParser(){
}
_XMLParser.prototype={_logger:SystemLogger.getLogger("XMLParser"),_domParser:(window.DOMParser!=null&&window.XPathResult!=null?new DOMParser():null),parse:function(xml,_1b2){
var doc=null;
if(xml!=null){
if(this._domParser!=null){
try{
doc=this._domParser.parseFromString(xml,"text/xml");
}
catch(e){
alert(xml);
}
if(doc.documentElement.namespaceURI==Constants.NS_DOMPARSEERROR){
if(!_1b2){
this._logger.error(DOMSerializer.serialize(doc.documentElement,true));
if(Application.isDeveloperMode){
alert("XMLParser failed: \n\n"+DOMSerializer.serialize(doc.documentElement,true));
}
}
doc=null;
}
}else{
doc=DOMUtil.getDOMDocument();
doc.setProperty("ProhibitDTD",false);
doc.validateOnParse=false;
doc.async=false;
doc.loadXML(xml);
if(doc.parseError.errorCode!=0){
if(!_1b2){
this._logger.error("XMLParser failed!");
if(Application.isDeveloperMode){
alert("XMLParser failed!");
}
}
doc=null;
}
}
}else{
throw "XMLParser: No XML input to parse!";
}
return doc;
},isWellFormedDocument:function(xml,_1b5,_1b6){
var _1b7=true;
var dec="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
if(xml.indexOf("<?xml ")==-1){
xml=dec+xml;
}
var _1b9=SourceValidationService.IsWellFormedDocument(xml);
if(_1b9!="True"){
_1b7=false;
if(_1b5==true){
if(_1b6){
if(confirm("Not well-formed\n"+_1b9+"\nContinue?")){
_1b7=true;
}
}else{
this._illFormedDialog(_1b9);
}
}
}
return _1b7;
},isWellFormedFragment:function(xml,_1bb){
var _1bc=true;
var _1bd=SourceValidationService.IsWellFormedFragment(xml);
if(_1bd!="True"){
_1bc=false;
if(_1bb==true){
this._illFormedDialog(_1bd);
}
}
return _1bc;
},_illFormedDialog:function(_1be){
setTimeout(function(){
Dialog.error("Not well-formed",_1be);
},0);
}};
var XMLParser=new _XMLParser();
function XPathResolver(){
this.logger=SystemLogger.getLogger("XPathResolver");
this._evaluator=window.XPathEvaluator?new XPathEvaluator():null;
this._nsResolver=null;
}
XPathResolver.prototype.setNamespacePrefixResolver=function(_1bf){
if(this._evaluator){
this._nsResolver={lookupNamespaceURI:function(_1c0){
return _1bf[_1c0];
}};
}else{
this._nsResolver=_1bf;
}
};
XPathResolver.prototype.resolve=function(_1c1,node,_1c3){
var _1c4=null;
try{
if(this._evaluator){
_1c4=this._evaluateDOMXpath(_1c1,node,_1c3?true:false);
}else{
_1c4=this._evaluateMSXpath(_1c1,node,_1c3?true:false);
}
}
catch(exception){
alert("XPathResolver#resolve: "+exception);
if(exception.stack){
alert(exception.stack);
}else{
alert(arguments.caller.callee.toString());
}
throw exception;
}
return _1c4;
};
XPathResolver.prototype.resolveAll=function(_1c5,node){
return this.resolve(_1c5,node,true);
};
XPathResolver.prototype._evaluateDOMXpath=function(_1c7,node,_1c9){
var _1ca=null;
if(node){
var _1ca=this._evaluator.evaluate(_1c7,node,this._nsResolver,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);
if(_1c9){
var list=new List();
while((node=_1ca.iterateNext())!=null){
list.add(node);
}
_1ca=list;
}else{
_1ca=_1ca.iterateNext();
}
}else{
var cry="XPathResolver#_evaluateDOMXpath: No DOMNode to evaluate!";
if(Application.isDeveloperMode){
alert(cry);
}else{
this.logger.fatal(cry);
}
}
return _1ca;
};
XPathResolver.prototype._evaluateMSXpath=function(_1cd,node,_1cf){
var doc=(node.nodeType==Node.DOCUMENT_NODE?node:node.ownerDocument);
var _1d1="";
for(var _1d2 in this._nsResolver){
_1d1+="xmlns:"+_1d2+"=\""+this._nsResolver[_1d2]+"\" ";
}
doc.setProperty("SelectionNamespaces",_1d1);
if(_1cf){
var list=new List();
var i=0,_1d5=node.selectNodes(_1cd);
while(i<_1d5.length){
list.add(_1d5.item(i++));
}
result=list;
}else{
result=node.selectSingleNode(_1cd);
}
return result;
};
function XSLTransformer(){
this.logger=SystemLogger.getLogger("XSLTransformer");
this._processor=null;
this._cache=null;
}
XSLTransformer.prototype.importStylesheet=function(url){
var _1d7=this._import(Resolver.resolve(url));
if(Client.hasXSLTProcessor){
this._processor=new XSLTProcessor();
this._processor.importStylesheet(_1d7);
}else{
this._cache=DOMUtil.getMSXMLXSLTemplate();
this._cache.stylesheet=_1d7;
}
};
XSLTransformer.prototype._import=function(url){
var _1d9=null;
if(Client.hasXSLTProcessor){
var _1da=DOMUtil.getXMLHTTPRequest();
_1da.open("get",Resolver.resolve(url),false);
_1da.send(null);
_1d9=_1da.responseXML;
}else{
var _1d9=DOMUtil.getDOMDocument(true);
_1d9.async=false;
_1d9.load(url);
}
return _1d9;
};
XSLTransformer.prototype.transformToDocument=function(dom){
var _1dc=null;
if(Client.hasXSLTProcessor){
_1dc=this._processor.transformToDocument(dom);
}else{
alert("TODO!");
}
return _1dc;
};
XSLTransformer.prototype.transformToString=function(dom,_1de){
var _1df=null;
if(Client.hasXSLTProcessor){
var doc=this.transformToDocument(dom);
_1df=DOMSerializer.serialize(doc,_1de);
}else{
var proc=this._cache.createProcessor();
proc.input=dom;
proc.transform();
_1df=proc.output;
}
return _1df;
};
function _CSSUtil(){
}
_CSSUtil.prototype={_getCurrent:function(_1e2){
var _1e3=_1e2.style?_1e2.className:_1e2.getAttribute("class");
_1e3=_1e3?_1e3:"";
return _1e3;
},_contains:function(_1e4,sub){
return _1e4.indexOf(sub)>-1;
},_attach:function(_1e6,sub){
return _1e6+(_1e6==""?"":" ")+sub;
},_detach:function(_1e8,sub){
if(this._contains(_1e8," "+sub)){
sub=" "+sub;
}
return _1e8.replace(sub,"");
},attachClassName:function(_1ea,_1eb){
if(_1ea.classList!=null){
if(!_1ea.classList.contains(_1eb)){
_1ea.classList.add(_1eb);
}
}else{
var _1ec=this._getCurrent(_1ea);
if(!this._contains(_1ec,_1eb)){
_1ec=this._attach(_1ec,_1eb);
}
if(_1ea.style!=null){
_1ea.className=_1ec;
}else{
_1ea.setAttribute("class",_1ec);
}
}
},detachClassName:function(_1ed,_1ee){
if(_1ed.classList!=null){
if(_1ed.classList.contains(_1ee)){
_1ed.classList.remove(_1ee);
}
}else{
var _1ef=this._getCurrent(_1ed);
if(this._contains(_1ef,_1ee)){
_1ef=this._detach(_1ef,_1ee);
}
if(_1ed.style!=null){
_1ed.className=_1ef;
}else{
if(_1ef==""){
_1ed.removeAttribute("class");
}else{
_1ed.setAttribute("class",_1ef);
}
}
}
},hasClassName:function(_1f0,_1f1){
var _1f2=false;
if(_1f0.classList!=null){
_1f2=_1f0.classList.contains(_1f1);
}else{
_1f2=this._contains(this._getCurrent(_1f0),_1f1);
}
return _1f2;
}};
var CSSUtil=new _CSSUtil();
function _CSSComputer(){
}
_CSSComputer.prototype={_margins:{top:Client.isExplorer?"marginTop":"margin-top",right:Client.isExplorer?"marginRight":"margin-right",bottom:Client.isExplorer?"marginBottom":"margin-bottom",left:Client.isExplorer?"marginLeft":"margin-left"},_paddings:{top:Client.isExplorer?"paddingTop":"padding-top",right:Client.isExplorer?"paddingRight":"padding-right",bottom:Client.isExplorer?"paddingBottom":"padding-bottom",left:Client.isExplorer?"paddingLeft":"padding-left"},_borders:{top:Client.isExplorer?"borderTopWidth":"border-top-width",right:Client.isExplorer?"borderRightWidth":"border-right-width",bottom:Client.isExplorer?"borderBottomWidth":"border-bottom-width",left:Client.isExplorer?"borderLeftWidth":"border-left-width"},_getComplexResult:function(_1f3,_1f4){
var _1f5={};
for(var _1f6 in _1f3){
var ent=parseInt(DOMUtil.getComputedStyle(_1f4,_1f3[_1f6]));
_1f5[_1f6]=isNaN(ent)?0:ent;
}
return _1f5;
},_getMargin:function(_1f8){
return this._getComplexResult(this._margins,_1f8);
},getPadding:function(_1f9){
return this._getComplexResult(this._paddings,_1f9);
},getBorder:function(_1fa){
return this._getComplexResult(this._borders,_1fa);
},getPosition:function(_1fb){
return DOMUtil.getComputedStyle(_1fb,"position");
},getFloat:function(_1fc){
return DOMUtil.getComputedStyle(_1fc,Client.isExplorer?"styleFloat":"float");
},getZIndex:function(_1fd){
return parseInt(DOMUtil.getComputedStyle(_1fd,Client.isExplorer?"zIndex":"z-index"));
},getBackgroundColor:function(_1fe){
return DOMUtil.getComputedStyle(_1fe,Client.isExplorer?"backgroundColor":"background-color");
}};
var CSSComputer=new _CSSComputer();
var System=new function(){
var _1ff=SystemLogger.getLogger("System");
var root=null;
var _201=null;
this.hasActivePerspectives=false;
this.getDefaultEntityToken=function(_202){
if(_201==null){
_201={};
new List(TreeService.GetDefaultEntityTokens(true)).each(function(_203){
_201[_203.Key]=_203.Value;
});
}
return _201[_202];
};
this.getRootNode=function(){
if(root==null){
root=new SystemNode(TreeService.GetRootElements("")[0]);
}
return root;
};
this.getPerspectiveNodes=function(){
var _204=new List();
var _205=TreeService.GetActivePerspectiveElements("dummy");
var list=new List(_205);
if(list.hasEntries()){
this.hasActivePerspectives=true;
list.each(function(_207){
_204.add(new SystemNode(_207));
});
}else{
EventBroadcaster.broadcast(BroadcastMessages.PERSPECTIVES_NONE);
}
return _204;
};
this.getChildNodes=function(node,_209){
var _20a=new List();
var _20b=null;
if(_209){
if(SearchTokens.hasToken(_209)){
_209=SearchTokens.getToken(_209);
}
_20b=TreeService.GetElementsBySearchToken(node.getData(),_209);
}else{
_20b=TreeService.GetElements(node.getData());
}
new List(_20b).each(function(_20c){
var _20d=new SystemNode(_20c);
if(_209){
_20d.searchToken=_209;
}
_20a.add(_20d);
});
return _20a;
};
this.getDescendantBranch=function(_20e){
var map=new Map();
var arg=[];
_20e.each(function(node){
arg.push({ProviderName:node.getProviderName(),EntityToken:node.getEntityToken(),Piggybag:node.getPiggyBag(),SearchToken:node.searchToken,});
});
var _212=TreeService.GetMultipleChildren(arg);
var _213=new List(_212);
while(_213.hasNext()){
this._listNodesInMap(_213.getNext(),map);
}
return map;
};
this.getInvisibleBranch=function(_214,_215,_216){
var map=new Map();
var arg=[];
_216.each(function(node){
arg.push({ProviderName:node.getProviderName(),EntityToken:node.getEntityToken(),Piggybag:node.getPiggyBag()});
});
var _21a=TreeService.FindEntityToken(_214,_215,arg);
if(_21a instanceof SOAPFault){
_1ff.error(_21a.getFaultString());
if(Application.isDeveloperMode){
alert(_21a.getFaultString());
}
map=null;
}else{
var _21b=new List(_21a);
while(_21b.hasNext()){
this._listNodesInMap(_21b.getNext(),map);
}
}
return map;
};
this._listNodesInMap=function(_21c,map){
var list=new List();
var key=_21c.ElementKey;
var _220=new List(_21c.ClientElements);
map.set(key,list);
while(_220.hasNext()){
var _221=_220.getNext();
list.add(new SystemNode(_221));
}
};
this.getChildNodesBySearchToken=function(node,_223){
return this.getChildNodes(node,_223);
};
this.getNamedRoots=function(key,_225){
var _226=new List();
var _227=null;
if(_225){
if(SearchTokens.hasToken(_225)){
_225=SearchTokens.getToken(_225);
}
_227=TreeService.GetNamedRootsBySearchToken(key,_225);
}else{
_227=TreeService.GetNamedRoots(key);
}
new List(_227).each(function(_228){
var node=new SystemNode(_228);
if(_225){
node.searchToken=_225;
}
_226.add(node);
});
return _226;
};
this.getNamedRootsBySearchToken=function(key,_22b){
return this.getNamedRoots(key,_22b);
};
function compileActionList(node,_22d,_22e){
var _22f=_22d.ClientElementActionGroupId;
if(_22f!=null){
var _230=_22e.get(_22f).ClientElementActionGroupItems;
if(_230&&_230.length>0){
node.setActionList(new List(_230));
}
}
}
};
SystemNode.dispose=function(node){
for(var prop in node){
node[prop]=null;
}
};
SystemNode.taggedNodes=new Map();
function SystemNode(data){
this.logger=SystemLogger.getLogger("SystemNode");
this._data=data;
this._actionProfile=null;
this._propertyBag=null;
this._registerSystemActions();
this.searchToken=null;
if(this._data.TagValue!=null){
SystemNode.taggedNodes.set(this._data.TagValue,this);
}
}
SystemNode.prototype.toString=function(){
return "[SystemNode]";
};
SystemNode.prototype._registerSystemActions=function(){
var self=this;
new List(this._data.ActionKeys).each(function(key){
if(!SystemAction.actionMap.has(key)){
new List(self._data.Actions).each(function(_236){
var _237=_236.ActionCategory.Name;
if(SystemAction.hasCategory(_237)){
var _238=new SystemAction(_236);
SystemAction.actionMap.set(_236.ActionKey,_238);
}else{
throw "No such action category: "+_237;
}
});
}
});
};
SystemNode.prototype.getData=function(){
return this._data;
};
SystemNode.prototype.getChildren=function(){
var _239=null;
if(this.searchToken){
_239=System.getChildNodesBySearchToken(this,this.searchToken);
}else{
_239=System.getChildNodes(this);
}
return _239;
};
SystemNode.prototype.getDescendantBranch=function(list){
return System.getDescendantBranch(list);
};
SystemNode.prototype.getLabel=function(){
return this._data.Label;
};
SystemNode.prototype.getProviderName=function(){
return this._data.ProviderName;
};
SystemNode.prototype.getEntityToken=function(){
return this._data.EntityToken;
};
SystemNode.prototype.getPiggyBag=function(){
var _23b=this._data.Piggybag;
if(_23b==null){
_23b="";
}
return _23b;
};
SystemNode.prototype.getHandle=function(){
return this._data.ElementKey;
};
SystemNode.prototype.getTag=function(){
return this._data.TagValue;
};
SystemNode.prototype.getImageProfile=function(size){
return new ImageProfile({image:ImageProvider.getImageURL(this._data.Icon,size),imageActive:ImageProvider.getImageURL(this._data.OpenedIcon?this._data.OpenedIcon:this._data.Icon,size)});
};
SystemNode.prototype.getToolTip=function(){
var _23d=null;
if(typeof this._data.ToolTip!="undefined"){
_23d=this._data.ToolTip;
}
return _23d;
};
SystemNode.prototype.getPropertyBag=function(){
if(!this._propertyBag&&this._data.PropertyBag&&this._data.PropertyBag.length!=0){
var map={};
new List(this._data.PropertyBag).each(function(_23f){
map[_23f.Key]=_23f.Value;
});
this._propertyBag=map;
}
return this._propertyBag;
};
SystemNode.prototype.hasChildren=function(){
return this._data.HasChildren;
};
SystemNode.prototype.getActionProfile=function(){
if(this._actionProfile==null&&this._data.ActionKeys!=null&&this._data.ActionKeys.length>0){
var map=new Map();
var self=this;
new List(this._data.ActionKeys).each(function(key){
if(SystemAction.actionMap.has(key)){
var _243=SystemAction.actionMap.get(key);
var _244=true;
if(_243.getCategory()==SystemAction.categories.DeveloperMode){
if(!Application.isDeveloperMode){
_244=false;
}
}
if(_244){
var id=_243.getGroupID();
if(!map.has(id)){
map.set(id,new List());
}
var list=map.get(id);
list.add(_243);
}
}else{
throw "No details for action key: "+key;
}
});
this._actionProfile=map;
}
return this._actionProfile;
};
SystemNode.prototype.hasDragType=function(){
return this._data.DragType!=null;
};
SystemNode.prototype.getDragType=function(){
return this._data.DragType;
};
SystemNode.prototype.hasDragAccept=function(){
return this._data.DropTypeAccept!=null;
};
SystemNode.prototype.getDragAccept=function(){
return new List(this._data.DropTypeAccept);
};
SystemNode.prototype.hasDetailedDropSupport=function(){
return this._data.DetailedDropSupported==true;
};
SystemNode.prototype.isDisabled=function(){
return this._data.IsDisabled==true;
};
SystemNode.prototype.isTreeLockEnabled=function(){
return this._data.TreeLockEnabled==true;
};
SystemNode.prototype.dispose=function(){
SystemNode.dispose(this);
};
SystemAction.OPEN_DOCUMENT="OpenDocument";
SystemAction.OPEN_MODAL_DIALOG="OpenModalDialog";
SystemAction.TAG_CHANGEFROMLANGUAGE="ChangeFromLocale";
SystemAction.categories={Edit:"Edit",Add:"Add",Delete:"Delete",Other:"Other",DeveloperMode:"DeveloperMode"};
SystemAction.activePositions={NavigatorTree:1,SelectorTree:2};
SystemAction.taggedActions=new Map();
SystemAction.actionMap=new Map();
SystemAction.invoke=function(_247,arg){
var node=arg;
if(node instanceof SystemNode){
Application.lock(SystemAction);
_247.logger.debug("Execute \""+_247.getLabel()+"\" on \""+node.getLabel()+"\".");
setTimeout(function(){
TreeService.ExecuteSingleElementAction(node.getData(),_247.getHandle(),Application.CONSOLE_ID);
MessageQueue.update();
Application.unlock(SystemAction);
},0);
}else{
throw "Multiple actiontargets not supported.";
}
};
SystemAction.invokeTagged=function(_24a,_24b){
action=SystemAction.taggedActions.get(_24a);
node=SystemNode.taggedNodes.get(_24b);
SystemAction.invoke(action,node);
};
SystemAction.hasCategory=function(_24c){
return SystemAction.categories[_24c]?true:false;
};
function SystemAction(_24d){
this.logger=SystemLogger.getLogger("SystemAction");
this._data=_24d;
if(this._data.TagValue!=null){
SystemAction.taggedActions.set(this._data.TagValue,this);
}
}
SystemAction.prototype.toString=function(){
return "[SystemAction]";
};
SystemAction.prototype.getHandle=function(){
return this._data.ActionToken;
};
SystemAction.prototype.getKey=function(){
return this._data.ActionKey;
};
SystemAction.prototype.getLabel=function(){
return this._data.Label;
};
SystemAction.prototype.getImage=function(){
return ImageProvider.getImageURL(this._data.Icon);
};
SystemAction.prototype.getDisabledImage=function(){
return null;
};
SystemAction.prototype.getToolTip=function(){
return this._data.ToolTip;
};
SystemAction.prototype.getCategory=function(){
return this._data.ActionCategory.Name;
};
SystemAction.prototype.getGroupID=function(){
return this._data.ActionCategory.GroupId;
};
SystemAction.prototype.getGroupName=function(){
return this._data.ActionCategory.GroupName;
};
SystemAction.prototype.getActivePositions=function(){
return this._data.ActivePositions;
};
SystemAction.prototype.isInToolBar=function(){
return this._data.ActionCategory.IsInToolbar;
};
SystemAction.prototype.isInFolder=function(){
return this._data.ActionCategory.IsInFolder;
};
SystemAction.prototype.getFolderName=function(){
var _24e=null;
if(this.isInFolder()){
_24e=this._data.ActionCategory.FolderName;
}
return _24e;
};
SystemAction.prototype.isDisabled=function(){
return this._data.Disabled;
};
SystemAction.prototype.isCheckBox=function(){
return typeof this._data.CheckboxStatus!=Types.UNDEFINED;
};
SystemAction.prototype.getTag=function(){
var _24f=null;
if(typeof this._data.TagValue!="undefined"){
_24f=this._data.TagValue;
}
return _24f;
};
SystemAction.prototype.isChecked=function(){
var _250=null;
if(this.isCheckBox()){
_250=this._data.CheckboxStatus=="Checked";
}else{
throw "Not a checkbox!";
}
return _250;
};
function _UpdateManager(){
var _251=null;
if(!window.UpdateManager){
this._construct();
_251=this;
}
return _251;
}
_UpdateManager.prototype={version:"0.1",CLASSNAME_FORM:"updateform",CLASSNAME_ZONE:"updatezone",CLASSNAME_GONE:"updategone",EVENT_BEFOREUPDATE:"beforeupdate",EVENT_AFTERUPDATE:"afterupdate",EVENT_ERRORUPDATE:"errorupdate",xhtml:null,summary:null,isEnabled:true,isDebugging:false,isUpdating:false,hasSoftAttributes:false,hasSoftSiblings:false,pendingResponse:null,currentDOM:null,errormessage:null,_assistant:null,_updates:null,_replaced:null,_dotnetnames:["__VIEWSTATE","__EVENTVALIDATION","__EVENTTARGET","__EVENTARGUMENT","__LASTFOCUS"],plugins:[],toString:function(){
return "[object UpdateManager]";
},_construct:function(_252){
var root=document.documentElement;
var _254=root.namespaceURI;
if(_254==null){
_254=new String(root.getAttribute("xmlns"));
}
if(_254=="http://www.w3.org/1999/xhtml"){
this._addListener(window,"load");
this._addListener(window,"unload");
}else{
this.error("Not an XHTML document!");
}
},_setup:function(){
if(this.isEnabled){
this.isEnabled=this.setupForms();
if(this.isEnabled){
if(this.xhtml!=null){
if(typeof this.xhtml=="string"){
var _255=decodeURIComponent(this.xhtml);
this.currentDOM=UpdateAssistant.parse(_255);
}else{
throw new TypeError();
}
}else{
var _256=this;
UpdateAssistant.getXMLHttpRequest("get",window.location.toString(),{handleResponse:function(dom){
_256.currentDOM=dom;
}}).send(null);
}
}
}
},setupForms:function(){
var _258=false;
Array.forEach(document.forms,function(form){
if(form.className.indexOf(this.CLASSNAME_FORM)>-1){
if(!form.__isSetup){
this._setupForm(form);
form.__isSetup=true;
}
_258=true;
}
},this);
return _258;
},_setupForm:function(form){
var _25b=this;
this._addListener(form,"submit");
form.__submit=form.submit;
form.submit=function(){
if(_25b.isEnabled){
_25b._submit(form);
}else{
form.__submit();
}
return false;
};
},_addListener:function(_25c,type){
if(_25c.addEventListener!=null){
_25c.addEventListener(type,this,false);
}else{
var _25e=this;
_25c.attachEvent("on"+type,function(){
_25e.handleEvent(window.event);
});
}
},handleEvent:function(e){
switch(e.type){
case "load":
if(this.isEnabled){
this._setup();
}
break;
case "unload":
this.isEnabled=false;
break;
case "submit":
if(this.isEnabled){
if(document.all){
e.returnValue=false;
}else{
e.preventDefault();
}
var form=e.target?e.target:e.srcElement;
this._submit(form);
}
break;
}
},_submit:function(form){
if(!this.isUpdating){
this.isUpdating=true;
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_BEFOREUPDATE);
this._postRequest(form);
}
},handleResponse:function(dom){
if(this.isEnabled){
this.summary=new String("");
this.errors=new String("");
if(dom!=null){
var _263=UpdateAssistant.getUpdateZones(dom);
var _264=UpdateAssistant.getUpdateZones(this.currentDOM);
this._updates=[];
this._replaced={};
_263.forEach(function(_265,_266){
var _267=_264[_266];
this._crawl(_265,_267);
},this);
this._updates.forEach(function(_268,_269){
_268.update();
_268.dispose();
},this);
this._dotnetnames.forEach(function(name){
this._fixdotnet(dom,name);
},this);
this.currentDOM=dom;
}
}
this.isUpdating=false;
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_AFTERUPDATE);
},handleSimilarResponse:function(){
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_AFTERUPDATE);
},_crawl:function(_26b,_26c,_26d,id){
var _26f=true;
var _270=_26c.getAttribute("class");
if(_270==null||_270.indexOf(this.CLASSNAME_GONE)==-1){
if(_26c.nodeType==Node.ELEMENT_NODE){
var _271=_26c.getAttribute("id");
if(_271!=null){
_26d=_26b;
id=_271;
}
}
if(_26f=this._check(_26b,_26c,_26d,id)){
var _272=_26b.firstChild;
var _273=_26c.firstChild;
while(_272!=null&&_273!=null&&!this._replaced[id]){
switch(_272.nodeType){
case Node.TEXT_NODE:
_26f=this._check(_272,_273,_26d,id);
break;
case Node.DOCUMENT_NODE:
case Node.ELEMENT_NODE:
_26f=this._crawl(_272,_273,_26d,id);
break;
}
if(this._replaced[id]){
_26f=false;
}else{
_272=_272.nextSibling;
_273=_273.nextSibling;
}
}
}
}
return _26f;
},_check:function(_274,_275,_276,id){
var _278=true;
var _279=null;
var _27a=false;
var _27b=false;
if((_274!=null&&_275==null)||(_274==null&&_275!=null)){
_278=false;
}else{
if(_278=_274.nodeType==_275.nodeType){
switch(_275.nodeType){
case Node.ELEMENT_NODE:
if(_274.namespaceURI!=_275.namespaceURI||_274.nodeName!=_275.nodeName){
_278=false;
}else{
if(_278=(_274.nodeName==_275.nodeName)){
var _27c=_275.getAttribute("id");
var _27d=_274.getAttribute("id");
if(_27c!=null&&_27d!=null){
if(_27c!=_27d){
_278=false;
}else{
if((_279=this._getPlugin(_274,_275))!=null){
if(_279.updateElement(_274,_275)){
_27b=true;
_278=false;
}
}
}
}
if(_278){
if(_278=this._checkAttributes(_274,_275)){
if(this.hasSoftSiblings&&this._hasSoftChildren(_274)&&this._hasSoftChildren(_275)){
if(this._validateSoftChildren(_274,_275)){
this._updateSoftChildren(_274,_275);
_27a=true;
}
_278=false;
}else{
_278=_274.childNodes.length==_275.childNodes.length;
}
}
}
}
}
break;
case Node.TEXT_NODE:
if(_274.data.trim()!=_275.data.trim()){
_278=false;
}
break;
}
}
}
if(_278==false&&!_27a&&!_27b){
if(id!=null&&_276!=null){
this.addUpdate(new ReplaceUpdate(id,_276));
}
}
return _278;
},_checkAttributes:function(_27e,_27f){
var _280=true;
var _281=false;
var _282=_27e.attributes;
var _283=_27f.attributes;
if(_282.length!=_283.length){
_281=true;
}else{
_281=!Array.every(_282,function(att1,i){
var att2=_283.item(i);
return att1.nodeName==att2.nodeName&&att1.nodeValue==att2.nodeValue;
});
}
if(_281){
var _287=_27e.getAttribute("id");
var _288=_27f.getAttribute("id");
if(this.hasSoftAttributes&&_287!=null&&_287==_288){
this.addUpdate(new AttributesUpdate(_288,_27e,_27f));
}else{
_280=false;
}
}
return _280;
},_hasSoftChildren:function(_289){
var _28a=true;
if(_289.hasChildNodes()){
_28a=Array.every(_289.childNodes,function(node){
var res=true;
switch(node.nodeType){
case Node.TEXT_NODE:
res=!/[^\t\n\r ]/.test(node.nodeValue);
break;
case Node.ELEMENT_NODE:
res=node.getAttribute("id")!=null;
break;
}
return res;
});
}
return _28a;
},_validateSoftChildren:function(_28d,_28e){
var _28f=true;
var _290=-1;
var _291=-1;
var _292=-1;
var news=this._toMap(_28d.childNodes,true);
var olds=this._toMap(_28e.childNodes,true);
for(var id in olds){
if(_28f){
var _296=olds[id];
_28f=_296>=_290;
if(news[id]!=null){
_292=news[id];
_28f=_292>=_291;
}
}
_290=_296;
if(_292>-1){
_291=_292;
}
}
return _28f;
},_updateSoftChildren:function(_297,_298){
var news=this._toMap(_297.childNodes);
var olds=this._toMap(_298.childNodes);
for(var id in olds){
if(news[id]==null){
this.addUpdate(new SiblingUpdate(Update.TYPE_REMOVE,id,null,null));
}else{
this._crawl(news[id],olds[id]);
}
}
var _29c=null;
for(id in news){
if(olds[id]==null){
var _29d=news[id];
if(_29c==null){
var _29e=_298.getAttribute("id");
this.addUpdate(new SiblingUpdate(Update.TYPE_INSERT,_29e,_29d,true));
}else{
this.addUpdate(new SiblingUpdate(Update.TYPE_INSERT,_29c,_29d,false));
}
}
_29c=id;
}
},addUpdate:function(_29f){
this._updates.push(_29f);
if(_29f instanceof ReplaceUpdate){
this._replaced[_29f.id]=true;
}
},_getPlugin:function(_2a0,_2a1){
var _2a2=null;
this.plugins.every(function(_2a3){
if(_2a3.handleElement(_2a0,_2a1)){
_2a2=_2a3;
}
return _2a2==null;
});
return _2a2;
},_toMap:function(_2a4,_2a5){
var _2a6={};
Array.forEach(_2a4,function(node,_2a8){
if(node.nodeType==Node.ELEMENT_NODE){
_2a6[node.getAttribute("id")]=_2a5?_2a8:node;
}
});
return _2a6;
},_getPost:function(form){
var _2aa=new String("");
if(form!=null){
var last="";
Array.forEach(form.elements,function(_2ac){
if(_2ac.name==null||_2ac.name==""){
return;
}
var name=_2ac.name;
var _2ae=encodeURIComponent(_2ac.value);
switch(_2ac.type){
case "button":
case "submit":
var _2af=UpdateAssistant.getActiveElement();
if(_2ac==_2af&&name!=""){
_2aa+=name+"="+_2ae+"&";
}
break;
case "radio":
if(_2ac.checked){
_2aa+=name+"="+_2ae+"&";
}
break;
case "checkbox":
if(_2ac.checked){
if(_2ac.name==last){
if(_2aa.lastIndexOf("&")==_2aa.length-1){
_2aa=_2aa.substr(0,_2aa.length-1);
}
_2aa+=","+_2ae;
}else{
_2aa+=name+"="+_2ac.value;
}
last=name;
_2aa+="&";
}
break;
case "text":
case "hidden":
case "password":
case "textarea":
case "select-one":
_2aa+=name+"="+_2ae+"&";
break;
}
});
}
return _2aa.substr(0,_2aa.length-1);
},_postRequest:function(form){
var _2b1=form.method!=""?form.method:"get";
var _2b2=form.action!=""?form.action:window.location.toString();
var _2b3=this._getPost(form);
if(_2b1=="get"){
if(_2b2.indexOf("?")>-1){
_2b2=_2b2+"&"+_2b3;
}else{
_2b2+"?"+_2b3;
}
}
var _2b4=this;
var _2b5=UpdateAssistant.getXMLHttpRequest(_2b1,_2b2,this);
if(_2b1=="post"){
_2b5.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
_2b5.send(_2b1=="post"?_2b3:null);
},_fixdotnet:function(dom,id){
var _2b8=document.getElementById(id);
if(_2b8!=null){
var _2b9=UpdateAssistant.getElementById(dom,id);
if(_2b9!=null){
var _2ba=_2b9.getAttribute("value");
if(_2ba!==_2b8.value){
_2b8.value=_2ba;
}
}
}
},debug:function(out){
if(this.isDebugging){
alert("UpdateManager dysfunction. \n\n"+out);
}
},error:function(out){
this.errorsmessage=out;
UpdateAssistant.dispatchEvent(document.documentElement,UpdateManager.EVENT_ERRORUPDATE);
this.debug(out);
},report:function(_2bd){
this.summary+=_2bd+"\n";
}};
var UpdateManager=new _UpdateManager();
function _UpdateAssistant(){
var _2be=null;
if(!window.UpdateAssistant){
this._construct();
_2be=this;
}
return _2be;
}
_UpdateAssistant.prototype={_serializer:window.XMLSerializer!=null?new XMLSerializer():null,_parser:(window.DOMParser!=null&&window.XPathResult!=null)?new DOMParser():null,_activeElement:null,_construct:function(){
if(!window.Node){
window.Node={ELEMENT_NODE:1,TEXT_NODE:3,DOCUMENT_NODE:9};
}
if(!Array.every){
Array.every=function(_2bf,fun){
var _2c1=true;
var len=_2bf.length>>>0;
if(typeof fun!="function"){
throw new TypeError();
}else{
var _2c3=arguments[2];
for(var i=0;i<len;i++){
if(typeof _2bf[i]!="undefined"){
if(!fun.call(_2c3,_2bf[i],i,_2bf)){
_2c1=false;
break;
}
}
}
}
return _2c1;
};
}
if(!Array.prototype.every){
Array.prototype.every=function(fun){
var _2c6=arguments[1];
return Array.every(this,fun,_2c6);
};
}
if(!Array.forEach){
Array.forEach=function(_2c7,fun){
var len=_2c7.length>>>0;
if(typeof fun!="function"){
throw new TypeError();
}else{
var _2ca=arguments[2];
for(var i=0;i<len;i++){
if(typeof _2c7[i]!="undefined"){
fun.call(_2ca,_2c7[i],i,_2c7);
}
}
}
};
}
if(!Array.prototype.forEach){
Array.prototype.forEach=function(fun){
var _2cd=arguments[1];
Array.forEach(this,fun,_2cd);
};
}
if(!String.prototype.trim){
String.prototype.trim=function(){
return this.replace(/^\s*/,"").replace(/\s*$/,"");
};
}
if(document.addEventListener!=null){
document.addEventListener("focus",this,false);
document.addEventListener("blur",this,false);
document.addEventListener("mousedown",this,false);
}
},handleEvent:function(e){
switch(e.type){
case "focus":
case "mousedown":
this._activeElement=e.target;
break;
case "blur":
if(this._activeElement==e.target){
this._activeElement=null;
}
break;
}
},getXMLHttpRequest:function(_2cf,_2d0,_2d1){
var _2d2=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Msxml2.XMLHTTP.3.0");
if(_2d2!=null){
_2d2.open(_2cf,_2d0,(_2d1!=null?true:false));
if(_2d1!=null){
function action(){
if(_2d2.readyState==4){
var _2d3=_2d2.getResponseHeader("X-Error-Type");
if(_2d3){
var _2d4="";
for(var i=0;i<10;i++){
var _2d6=i?i:"";
var _2d3=_2d2.getResponseHeader("X-Error-Type"+_2d6);
if(!_2d3){
break;
}
var _2d7=_2d2.getResponseHeader("X-Error-Message"+_2d6);
_2d4+=_2d3+"\n"+_2d7+"\n";
}
Dialog.error("Error",_2d4);
}else{
var text=_2d2.responseText;
UpdateManager.pendingResponse=text;
var dom=UpdateAssistant.parse(text);
if(dom!=null){
_2d1.handleResponse(dom);
}
}
}
}
if(_2d2.addEventListener!=null){
_2d2.addEventListener("readystatechange",{handleEvent:function(){
action();
}},false);
}else{
_2d2.onreadystatechange=action;
}
}
}
return _2d2;
},dispatchEvent:function(_2da,name){
var _2dc=true;
var _2dd=document.createEvent("UIEvents");
_2dd.initEvent(name,true,true);
_2dc=_2da.dispatchEvent(_2dd);
return _2dc;
},getUpdateZones:function(dom){
var _2df="//*[@id and contains(@class,'updatezone')]";
var _2e0=[];
var _2e1=null;
var _2e2=null;
if(window.XPathResult!=null){
var type=XPathResult.ORDERED_NODE_ITERATOR_TYPE;
_2e1=dom.evaluate(_2df,dom,null,type,null);
while((_2e2=_2e1.iterateNext())!=null){
_2e0.push(_2e2);
}
}else{
_2e1=dom.documentElement.selectNodes(_2df);
Array.forEach(_2e1,function(_2e4){
_2e0.push(_2e4);
});
}
return _2e0;
},getElementById:function(dom,id){
var _2e7="//*[@id='"+id+"']";
var _2e8=null;
var _2e9=null;
if(window.XPathResult!=null){
var type=XPathResult.FIRST_ORDERED_NODE_TYPE;
_2e8=dom.evaluate(_2e7,dom,null,type,null);
_2e9=_2e8.singleNodeValue;
}else{
_2e9=dom.documentElement.selectNodes(_2e7)[0];
}
return _2e9;
},_getIds:function(dom){
var _2ec="//*[@id]";
var _2ed=null;
var _2ee=[];
if(window.XPathResult!=null){
var type=XPathResult.ORDERED_NODE_ITERATOR_TYPE;
_2ed=dom.evaluate(_2ec,dom,null,type,null);
while((element=_2ed.iterateNext())!=null){
_2ee.push(element.getAttribute("id"));
}
}else{
_2ed=dom.documentElement.selectNodes(_2ec);
Array.forEach(_2ed,function(_2f0){
_2ee.push(_2f0.getAttribute("id"));
});
}
return _2ee;
},toHTMLElement:function(_2f1){
var _2f2=this.serialize(_2f1);
var temp=document.createElement("temp");
temp.innerHTML=_2f2;
return temp.firstChild;
},getActiveElement:function(){
var _2f4=document.activeElement;
if(_2f4==null||_2f4==document.body){
_2f4=this._activeElement;
}
return _2f4;
},serialize:function(_2f5){
var _2f6=null;
if(_2f5.xml!=null){
_2f6=_2f5.xml;
}else{
if(this._serializer!=null){
_2f6=this._serializer.serializeToString(_2f5);
}
}
return _2f6;
},hasDifferences:function(_2f7,_2f8){
var s1=null;
var s2=null;
if(_2f7.xml!=null){
s1=_2f7.xml;
s2=_2f8.xml;
}else{
if(this._serializer!=null){
s1=this._serializer.serializeToString(_2f7);
s2=this._serializer.serializeToString(_2f8);
}
}
return s1!=s2;
},parse:function(_2fb){
var _2fc=null;
if(this._parser!=null&&window.XPathResult!=null){
_2fc=this._parser.parseFromString(_2fb,"text/xml");
}else{
_2fc=new ActiveXObject("Msxml2.DOMDocument.3.0");
_2fc.setProperty("SelectionLanguage","XPath");
_2fc.loadXML(_2fb);
}
return this._validate(_2fc);
},_validate:function(dom){
var out=null;
if(dom.parseError!=null&&dom.parseError.errorCode!=0){
out=dom.parseError.reason;
}else{
var _2ff=dom.getElementsByTagName("parsererror").item(0);
if(_2ff!=null){
out=_2ff.textContent.replace(/\^/g,"").replace(/\-/g,"");
}
}
if(out==null){
var has={},ids=this._getIds(dom);
ids.every(function(id){
var _303=!has[id];
has[id]=true;
if(!_303){
out="Element \""+id+"\" encountered twice.";
}
return _303;
});
}
if(out!=null){
UpdateManager.error(out);
dom=null;
}
return dom;
}};
var UpdateAssistant=new _UpdateAssistant();
function UpdatePlugin(){
this.handleElement=function(_304,_305){
var _306=false;
switch(_304.nodeName.toLowerCase()){
case "input":
case "textarea":
switch(_304.getAttribute("id")){
case "__EVENTTARGET":
case "__EVENTARGUMENT":
case "__VIEWSTATE":
case "__EVENTVALIDATION":
_306=false;
break;
}
break;
}
return _306;
};
this.updateElement=function(_307,_308){
var id=_307.getAttribute("id");
var _30a=document.getElementById(id);
if(_30a!=null){
var _30b=null;
switch(_30a.nodeName.toLowerCase()){
case "input":
_30b=_307.getAttribute("value");
break;
case "textarea":
_30b=_307.textContent?_307.textContent:_307.text;
break;
}
if(_30b==null){
_30b="";
}
if(_30b!=_30a.value){
_30a.value=_30b;
UpdateManager.report("Property [value] updated on field \""+id+"\"");
}
}
return true;
};
}
UpdateManager.plugins.push(new UpdatePlugin());
Update.TYPE_REPLACE="replace";
Update.TYPE_ATTRIBUTES="attributes";
Update.TYPE_REMOVE="remove";
Update.TYPE_INSERT="insert";
Update.EVENT_BEFOREUPDATE="beforeupdate";
Update.EVENT_AFTERUPDATE="afterupdate";
function Update(){
return this;
}
Update.prototype={type:null,key:null,id:null,element:null,update:function(){
},dispose:function(){
this.element=null;
},_beforeUpdate:function(_30c){
var _30d=true;
if(_30c!=null){
_30c.__updateType=this.type;
_30d=UpdateAssistant.dispatchEvent(_30c,Update.EVENT_BEFOREUPDATE);
}
return _30d;
},_afterUpdate:function(_30e){
var _30f=true;
if(_30e!=null){
_30e.__updateType=this.type;
_30f=UpdateAssistant.dispatchEvent(_30e,Update.EVENT_AFTERUPDATE);
}
return _30f;
}};
ReplaceUpdate.prototype=new Update();
ReplaceUpdate.superclass=Update.prototype;
function ReplaceUpdate(id,_311){
this.type=Update.TYPE_REPLACE;
this.id=id;
this.element=_311;
return this;
}
ReplaceUpdate.prototype.update=function(){
var _312,_313,_314=UpdateAssistant.toHTMLElement(this.element);
if((_312=document.getElementById(this.id))!=null){
if((_313=_312.parentNode)!=null){
var _315=UserInterface.getBinding(_312);
if(_315!=null){
_314.__isAttached=_315.isAttached;
}
if(this._beforeUpdate(_312)){
_313.replaceChild(_314,_312);
this._afterUpdate(_314);
}
}
}else{
UpdateManager.error("Element null point: "+this.id);
}
};
ReplaceUpdate.prototype._afterUpdate=function(_316){
var _317=ReplaceUpdate.superclass._afterUpdate.call(this,_316);
UpdateManager.report("Replaced element id=\""+this.id+"\"");
if(_316.nodeName=="form"||_316.getElementsByTagName("form").item(0)!=null){
UpdateManager.setupForms();
}
return _317;
};
SiblingUpdate.prototype=new Update();
SiblingUpdate.superclass=Update.prototype;
function SiblingUpdate(type,id,_31a,_31b){
this.type=type;
this.id=id;
this.element=_31a;
this.isFirst=_31b;
return this;
}
SiblingUpdate.prototype.update=function(){
var _31c=document.getElementById(this.id);
switch(this.type){
case Update.TYPE_REMOVE:
this._remove(_31c);
break;
case Update.TYPE_INSERT:
this._insert(this.element,_31c);
break;
}
};
SiblingUpdate.prototype._remove=function(_31d){
var _31e=_31d.parentNode;
if(_31e!=null){
if(this._beforeUpdate(_31d)){
_31e.removeChild(_31d);
this._afterUpdate(_31e);
}
}
};
SiblingUpdate.prototype._insert=function(_31f,_320){
var _321=UpdateAssistant.toHTMLElement(_31f);
if(this.isFirst){
var _322=_320;
if(_322!=null){
if(this._beforeUpdate(_322)){
_322.insertBefore(_321,_322.firstChild);
this._afterUpdate(_321);
}
}
}else{
var _322=_320.parentNode;
if(_322!=null){
if(this._beforeUpdate(_322)){
_322.insertBefore(_321,_320.nextSibling);
this._afterUpdate(_321);
}
}
}
};
SiblingUpdate.prototype._beforeUpdate=function(_323){
var _324=SiblingUpdate.superclass._beforeUpdate.call(this,_323);
if(this.type==Update.TYPE_REMOVE){
UpdateManager.report("Removed element id=\""+_323.id+"\"");
}
return _324;
};
SiblingUpdate.prototype._afterUpdate=function(_325){
var _326=true;
if(_325!=null){
_326=SiblingUpdate.superclass._afterUpdate.call(this,_325);
if(this.type==Update.TYPE_INSERT){
UpdateManager.report("Inserted element id=\""+_325.id+"\"");
if(_325.nodeName=="form"||_325.getElementsByTagName("form").item(0)!=null){
UpdateManager.setupForms();
}
}
}
return _326;
};
AttributesUpdate.prototype=new Update();
AttributesUpdate.superclass=Update.prototype;
AttributesUpdate.prototype.currentElement=null;
function AttributesUpdate(id,_328,_329){
this.type=type=Update.TYPE_ATTRIBUTES;
this.id=id;
this.element=_328;
this.currentElement=_329;
this._summary=[];
return this;
}
AttributesUpdate.prototype.update=function(){
var _32a=document.getElementById(this.id);
if(this._beforeUpdate(_32a)){
this._updateAttributes(_32a);
this._afterUpdate(_32a);
}
};
AttributesUpdate.prototype._updateAttributes=function(_32b){
Array.forEach(this.element.attributes,function(_32c){
var _32d=this.currentElement.getAttribute(_32c.nodeName);
if(_32d==null||_32d!=_32c.nodeValue){
this._setAttribute(_32b,_32c.nodeName,_32c.nodeValue);
this._summary.push("@"+_32c.nodeName);
}
},this);
Array.forEach(this.currentElement.attributes,function(_32e){
if(this.element.getAttribute(_32e.nodeName)==null){
this._setAttribute(_32b,_32e.nodeName,null);
this._summary.push("@"+_32e.nodeName);
}
},this);
};
AttributesUpdate.prototype._setAttribute=function(_32f,name,_331){
if(_32f==null){
alert(this.id+": "+document.getElementById(this.id)+"\n\n"+name+"="+_331);
SystemLogger.getLogger("AttributesUpdate").fine(document.body.innerHTML);
}
var _332=(_331==null);
if(_332){
_32f.removeAttribute(name);
}else{
_32f.setAttribute(name,_331);
}
if(document.all!=null){
if(_332){
_331="";
}
switch(name.toLowerCase()){
case "class":
_32f.className=_331;
break;
case "disabled":
_32f.disabled=!_332;
break;
case "checked":
_32f.checked=!_332;
break;
case "readonly":
_32f.readOnly=!_332;
break;
}
}
};
AttributesUpdate.prototype._afterUpdate=function(_333){
AttributesUpdate.superclass._afterUpdate.call(this,_333);
UpdateManager.report("Attributes updated on element id=\""+this.id+"\": "+this._summary.toString());
};
AttributesUpdate.prototype.dispose=function(){
Update.prototype.dispose.call(this);
this.currentElement=null;
};
if(!window.Node){
window.Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};
}
window.KeyEventCodes={VK_BACK:8,VK_TAB:9,VK_ENTER:13,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:null,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_COMMAND:91,VK_INSERT:null,VK_DELETE:127,VK_PLUS:187,VK_MINUS:189,VK_NUMPLUS:107,VK_NUMMINUS:109,VK_F1:112};
if(window==top){
window.app=this;
}else{
window.app=top.app;
}
window.bindingMap={};
window.standardEventHandler=null;
if(window!=window.top){
top.Application.declareTopLocal(window);
}
function _WindowManager(){
this._construct(KeyMaster.getUniqueKey());
}
_WindowManager.prototype={WINDOW_LOADED_BROADCAST:null,WINDOW_UNLOADED_BROADCAST:null,WINDOW_EVALUATED_BROADCAST:null,WINDOW_RESIZED_BROADCAST:null,isWindowLoaded:false,_logger:SystemLogger.getLogger("WindowManager ["+document.title+"]"),_ondomstatements:new List(),_onloadstatements:new List(),_onresizestatements:new List(),_currentDimensions:null,_newDimensions:null,_broadcastTimeout:null,_isHorizontalResize:false,_isVerticalResize:false,_broadcastTimeout:null,_compute:function(_334,key){
return _334.replace("${windowkey}",document.location+":"+key);
},_construct:function(key){
this.WINDOW_LOADED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_LOADED,key);
this.WINDOW_UNLOADED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_UNLOADED,key);
this.WINDOW_EVALUATED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_EVALUATED,key);
this.WINDOW_RESIZED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_RESIZED,key);
DOMEvents.addEventListener(window,DOMEvents.DOM,this);
DOMEvents.addEventListener(window,DOMEvents.LOAD,this);
DOMEvents.addEventListener(window,DOMEvents.UNLOAD,this);
},handleEvent:function(e){
switch(e.type){
case DOMEvents.DOM:
this.onDOMContentLoaded();
break;
case DOMEvents.LOAD:
if(!this.isWindowLoaded){
this.isWindowLoaded=true;
EventBroadcaster.broadcast(this.WINDOW_LOADED_BROADCAST,this);
while(this._onloadstatements.hasNext()){
this._onloadstatements.getNext().fireOnLoad();
}
this._currentDimensions=this.getWindowDimensions();
DOMEvents.addEventListener(window,DOMEvents.RESIZE,this);
EventBroadcaster.broadcast(this.WINDOW_EVALUATED_BROADCAST,this);
DOMEvents.removeEventListener(window,DOMEvents.LOAD,this);
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.RESIZE:
if(window==top){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,document.body);
}
this._onresizestatements.reset();
while(this._onresizestatements.hasNext()){
this._onresizestatements.getNext().fireOnResize();
}
this._newDimensions=WindowManager.getWindowDimensions();
var _338=this._newDimensions.w!=this._currentDimensions.w;
var _339=this._newDimensions.h!=this._currentDimensions.h;
if(_338||_339){
if(this._broadcastTimeout!=null){
clearTimeout(this._broadcastTimeout);
this._broadcastTimeout=null;
}
var self=this;
this._broadcastTimeout=setTimeout(function(){
self._broadcastResizeEvent();
},250);
}
break;
case DOMEvents.UNLOAD:
EventBroadcaster.broadcast(this.WINDOW_UNLOADED_BROADCAST);
break;
}
},_broadcastResizeEvent:function(){
clearTimeout(this._broadcastTimeout);
this._broadcastTimeout=null;
EventBroadcaster.broadcast(this.WINDOW_RESIZED_BROADCAST);
this._currentDimensions=this._newDimensions;
},fireOnDOM:function(_33b){
if(Interfaces.isImplemented(IDOMHandler,_33b,true)){
this._ondomstatements.add(_33b);
}
},fireOnLoad:function(_33c){
if(Interfaces.isImplemented(ILoadHandler,_33c,true)){
this._onloadstatements.add(_33c);
}
},fireOnResize:function(_33d){
if(Interfaces.isImplemented(IResizeHandler,_33d,true)){
this._onresizestatements.add(_33d);
}
},onDOMContentLoaded:function(){
while(this._ondomstatements.hasNext()){
this._ondomstatements.getNext().fireOnDOM();
}
},getWindowDimensions:function(){
return new Dimension(Client.isMozilla?window.innerWidth:document.body.clientWidth,Client.isMozilla?window.innerHeight:document.body.clientHeight);
},evaluate:function(_33e){
return eval(_33e);
}};
var WindowManager=new _WindowManager();
new function WindowAssistant(){
if(Client.isExplorer){
WindowManager.onDOMContentLoaded();
}
};
top.app=null;
function _Application(){
this._construct();
}
_Application.prototype={CONSOLE_ID:KeyMaster.getUniqueKey(),_TIMEOUT_LOSTFOCUS:250,logger:SystemLogger.getLogger("Application"),timer:SystemTimer.getTimer("Application"),isDeveloperMode:false,isLocalHost:false,hasExternalConnection:false,isLoggedIn:false,isLoggedOut:false,isLocked:false,hasStartPage:!Client.isPad,isMalFunctional:false,isOperational:false,isShuttingDown:false,isOffLine:false,isFocused:true,isBlurred:false,_isMousePositionTracking:false,_mousePosition:null,_cursorStartPoint:null,_isDragging:false,_isShutDownAllowed:true,_lockers:0,_lockthings:{},_isRegistered:null,_activeBinding:null,_activatedBindings:new List(),_dirtyTabs:new Map(),_topLevelClasses:typeof topLevelClassNames!="undefined"?new List(topLevelClassNames):null,_construct:function(){
EventBroadcaster.subscribe(WindowManager.WINDOW_EVALUATED_BROADCAST,{handleBroadcast:function(){
try{
Application.initialize();
}
catch(exception){
SystemDebug.stack(arguments);
throw (exception);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMLOG_OPENED,{handleBroadcast:function(_33f,_340){
SystemLogger.unsuspend(_340);
}});
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMLOG_CLOSED,{handleBroadcast:function(){
SystemLogger.suspend();
}});
EventBroadcaster.subscribe(BroadcastMessages.STAGE_INITIALIZED,{handleBroadcast:function(){
setTimeout(function(){
ProgressBarBinding.notch(4);
Application.isOperational=true;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_OPERATIONAL);
},PageBinding.TIMEOUT);
}});
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,{handleBroadcast:function(){
if(Application.isLocked){
Application.unlock(Application,true);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.SERVER_OFFLINE,{handleBroadcast:function(){
Application.isOffLine=true;
}});
EventBroadcaster.subscribe(BroadcastMessages.SERVER_ONLINE,{handleBroadcast:function(){
Application.isOffLine=false;
}});
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_DIRTY,{handleBroadcast:function(_341,arg){
var list=Application._dirtyTabs;
list.set(arg.key,arg);
if(list.countEntries()==1){
var _344=top.app.bindingMap.broadcasterHasDirtyTabs;
_344.enable();
}
}});
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_CLEAN,{handleBroadcast:function(_345,arg){
var list=Application._dirtyTabs;
list.del(arg.key);
if(list.countEntries()==0){
var _348=top.app.bindingMap.broadcasterHasDirtyTabs;
_348.disable();
}
}});
},toString:function(){
return "[Application]";
},login:function(){
this.isLoggedIn=true;
ConfigurationService=WebServiceProxy.createProxy(Constants.URL_WSDL_CONFIGURATION);
ConsoleMessageQueueService=WebServiceProxy.createProxy(Constants.URL_WSDL_MESSAGEQUEUE);
EditorConfigurationService=WebServiceProxy.createProxy(Constants.URL_WSDL_EDITORCONFIG);
FlowControllerService=WebServiceProxy.createProxy(Constants.URL_WSDL_FLOWCONTROLLER);
StringService=WebServiceProxy.createProxy(Constants.URL_WSDL_STRINGSERVICE);
TreeService=WebServiceProxy.createProxy(Constants.URL_WSDL_TREESERVICE);
SecurityService=WebServiceProxy.createProxy(Constants.URL_WSDL_SECURITYSERVICE);
XhtmlTransformationsService=WebServiceProxy.createProxy(Constants.URL_WSDL_XHTMLTRANSFORM);
PageTemplateService=WebServiceProxy.createProxy(Constants.URL_WSDL_PAGETEMPLATE);
FunctionService=WebServiceProxy.createProxy(Constants.URL_WSDL_FUNCTIONSERVICE);
LocalizationService=WebServiceProxy.createProxy(Constants.URL_WSDL_LOCALIZATION);
SourceValidationService=WebServiceProxy.createProxy(Constants.URL_WSDL_SOURCEVALIDATION);
MarkupFormatService=WebServiceProxy.createProxy(Constants.URL_WSDL_MARKUPFORMAT);
PageService=WebServiceProxy.createProxy(Constants.URL_WSDL_PAGESERVICE);
ProgressBarBinding.notch(4);
function next(){
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_LOGIN);
}
if(Client.isWebKit){
setTimeout(function(){
next();
},0);
}else{
next();
}
},logout:function(){
var _349=false;
if(this.isLoggedIn){
this.isLoggedIn=false;
this.isLoggedOut=true;
_349=LoginService.Logout(true);
if(!_349){
alert("Logout failed.");
}
}
return _349;
},lock:function(_34a){
if(_34a!=null){
this._lockthings[_34a]=true;
if(top.bindingMap.mastercover!=null){
if(this._lockers>=0){
this._lockers++;
if(this._lockers==1){
this.isLocked=true;
top.bindingMap.mastercover.show();
if(top.app!=null&&top.app.bindingMap.throbber!=null){
top.app.bindingMap.throbber.play();
}
}
}
}
}else{
throw "Application: No locker specified.";
}
},unlock:function(_34b,_34c){
if(_34b!=null){
delete this._lockthings[_34b];
if(top.bindingMap.mastercover!=null){
if(_34c||this._lockers>0){
if(_34c){
var out="Unlocked by "+new String(_34b)+"\n";
for(var _34e in this._lockthings){
out+="Locked by "+new String(_34e)+". ";
}
this.logger.debug(out);
this._lockers=0;
}else{
this._lockers--;
}
if(this._lockers==0){
this.isLocked=false;
top.bindingMap.mastercover.hide();
if(top.app!=null&&top.app.bindingMap.throbber!=null){
setTimeout(function(){
top.app.bindingMap.throbber.stop();
},250);
}
}
}
}
}else{
throw "Application: No unlocker specified.";
}
},hasLock:function(_34f){
return this._lockthings[_34f]==true;
},activate:function(_350){
var _351=this._activeBinding;
this._activeBinding=_350;
this._activatedBindings.add(_350);
if(_351&&_351.isActive){
_351.deActivate();
}
},deActivate:function(_352){
var _353=null;
var _354=null;
if(_352==this._activeBinding){
while(!_354&&this._activatedBindings.hasEntries()){
_353=this._activatedBindings.extractLast();
if(_353!=_352&&_353.isActivatable){
_354=_353;
}
}
if(!_354){
_354=app.bindingMap.explorerdock;
}
_354.activate();
}
},focused:function(_355){
this.isFocused=_355;
if(_355){
if(this.isBlurred){
this.isBlurred=false;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_FOCUSED);
}
}else{
setTimeout(function(){
if(!Application.isFocused){
Application.isBlurred=true;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_BLURRED);
}
},Application._TIMEOUT_LOSTFOCUS);
}
},initialize:function(){
DOMEvents.addEventListener(top,DOMEvents.UNLOAD,{handleEvent:function(e){
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_ONSHUTDOWN);
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_SHUTDOWN);
if(!Application.isShuttingDown){
Application.isShuttingDown=true;
if(FlowControllerService!=null){
FlowControllerService.ReleaseAllConsoleResources(Application.CONSOLE_ID);
}
}
if(this.isLoggedIn&&!Application.isDeveloperMode){
Application.logout();
}
}});
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_STARTUP);
},cancelShutDown:function(){
this._isShutDownAllowed=false;
},framework:function(doc){
var win=DOMUtil.getParentWindow(doc);
if(win!=null){
if(!win.standardEventHandler){
win.standardEventHandler=new StandardEventHandler(doc);
}else{
}
}
},normalize:function(doc){
},handleAction:function(_35a){
switch(_35a.type){
case Application.REFRESH:
this.refresh();
break;
}
},declareTopLocal:function(win){
var _35c=Resolver.resolve("/scripts/source/top/");
if(this._topLevelClasses==null){
this._topLevelClasses=new List();
var self=this;
new List(DOMUtil.getElementsByTagName(document,"script")).each(function(_35e){
var src=_35e.src;
if(src.indexOf(_35c)>-1){
var name=src.substring(src.lastIndexOf("/")+1,src.lastIndexOf(".js"));
self._topLevelClasses.add(name);
}
});
}
this._topLevelClasses.each(function(name){
if(window[name]!=null){
win[name]=window[name];
}
});
},trackMousePosition:function(e){
var _363=false;
if(this._isMousePositionTracking){
_363=true;
if(Client.isExplorer&&e.button!=1){
_363=false;
}
if(_363){
this._mousePosition=DOMUtil.getUniversalMousePosition(e);
}
}
return _363;
},enableMousePositionTracking:function(e){
if(e){
this._isMousePositionTracking=true;
this._mousePosition=DOMUtil.getUniversalMousePosition(e);
}else{
throw new Error("Application: MouseEvent undefined.");
}
},disableMousePositionTracking:function(){
this._isMousePositionTracking=false;
this._mouseposition=null;
},getMousePosition:function(){
return this._mousePosition;
},onDragStart:function(_365){
var _366=BindingDragger.draggedBinding;
if(Interfaces.isImplemented(IDraggable,_366,true)==true){
if(!this._isDragging){
app.bindingMap.dragdropcursor.setImage(_366.getImage());
this._cursorStartPoint=_365;
app.bindingMap.dragdropcursor.setPosition(this._cursorStartPoint);
CursorBinding.fadeIn(app.bindingMap.dragdropcursor);
if(_366.showDrag){
_366.showDrag();
}
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_START,_366.dragType);
this._isDragging=true;
}
}
},onDrag:function(diff){
if(this._isDragging){
var _368=new Point(this._cursorStartPoint.x+diff.x,this._cursorStartPoint.y+diff.y);
app.bindingMap.dragdropcursor.setPosition(_368);
}
},onDragStop:function(diff){
if(this._isDragging){
var _36a=BindingDragger.draggedBinding;
if(_36a.hideDrag){
_36a.hideDrag();
}
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_STOP,_36a.dragType);
this._isDragging=false;
_36a=BindingAcceptor.acceptingBinding;
if(_36a!=null){
if(Interfaces.isImplemented(IAcceptable,_36a,true)==true){
_36a.accept(BindingDragger.draggedBinding);
}else{
throw new Error("Application: IAcceptable not implemented "+_36a);
}
BindingAcceptor.acceptingBinding=null;
CursorBinding.fadeOut(app.bindingMap.dragdropcursor);
}else{
app.bindingMap.dragdropcursor.hide();
}
}
},reload:function(_36b){
if(this.isDeveloperMode||_36b){
if(this.isDeveloperMode&&Client.isPrism){
Prism.clearCache();
}
Application.lock(Application);
setTimeout(function(){
top.window.location.reload(true);
},0);
}else{
if(Application.isOperational){
Dialog.question(StringBundle.getString("ui","Website.Application.DialogReload.Title"),StringBundle.getString("ui","Website.Application.DialogReload.Text"),Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_36c){
if(_36c==Dialog.RESPONSE_ACCEPT){
Application.reload(true);
}
}});
}else{
Application.reload(true);
}
}
},quit:function(){
Application.isShuttingDown=true;
if(FlowControllerService!=null){
FlowControllerService.ReleaseAllConsoleResources(Application.CONSOLE_ID);
}
if(this.logout()){
top.close();
top.bindingMap.logoutcover.show();
}
},hasDirtyDockTabs:function(){
return this._dirtyTabs.countEntries()>0;
},getDirtyDockTabsTabs:function(){
return this._dirtyTabs;
}};
var Application=new _Application();
function _Installation(){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_KICKSTART,this);
}
_Installation.prototype={versionString:null,versionPrettyString:null,installationID:null,handleBroadcast:function(_36d){
switch(_36d){
case BroadcastMessages.APPLICATION_KICKSTART:
var list=new List(InstallationService.GetInstallationInfo(true));
list.each(function(_36f){
switch(_36f.Key){
case "ProductVersion":
this.versionString=_36f.Value;
break;
case "ProductTitle":
this.versionPrettyString=_36f.Value;
break;
case "InstallationId":
this.installationID=_36f.Value;
break;
}
},this);
break;
}
}};
var Installation=new _Installation();
function _Keyboard(){
}
_Keyboard.prototype={_logger:SystemLogger.getLogger("Keyboard"),isShiftPressed:false,isControlPressed:false,keyEnter:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ENTER);
},keyEscape:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ESCAPE);
},keySpace:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_SPACE);
},keyShift:function(){
this.isShiftPressed=true;
EventBroadcaster.broadcast(BroadcastMessages.KEY_SHIFT_DOWN);
},keyControl:function(){
this.isControlPressed=true;
EventBroadcaster.broadcast(BroadcastMessages.KEY_CONTROL_DOWN);
},keyArrow:function(key){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ARROW,key);
},keyAlt:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ALT);
},keyTab:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_TAB);
},keyUp:function(e){
if(this.isShiftPressed&&e.keyCode==window.KeyEventCodes.VK_SHIFT){
this.isShiftPressed=false;
EventBroadcaster.broadcast(BroadcastMessages.KEY_SHIFT_UP);
}else{
if(this.isControlPressed&&e.keyCode==window.KeyEventCodes.VK_CONTROL){
this.isControlPressed=false;
EventBroadcaster.broadcast(BroadcastMessages.KEY_CONTROL_UP);
}
}
}};
var Keyboard=new _Keyboard();
window.Preferences=new function(){
var _372=SystemLogger.getLogger("Preferences");
this.LOGIN="login";
var _373={"login":true};
EventBroadcaster.subscribe(BroadcastMessages.LOCALSTORE_INITIALIZED,{handleBroadcast:function(){
if(LocalStore.isEnabled){
var _374=LocalStore.getProperty(LocalStore.PREFERENCES);
if(_374){
for(var key in _374){
_373[key]=_374[key];
}
debug(true);
}else{
debug(false);
}
}else{
debug(false);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,{handleBroadcast:function(){
if(LocalStore.isEnabled){
LocalStore.setProperty(LocalStore.PREFERENCES,_373);
}
}});
this.getPref=function(key){
var _377=null;
if(key){
_377=_373[key];
}else{
throw "No such preference.";
}
return _377;
};
this.setPref=function(key,_379){
if(key){
_373[key]=_379;
}else{
throw "No such preference.";
}
};
function debug(_37a){
var _37b=_37a?"Persisted preferences":"No persisted preferences. Using defaults";
_37b+=":\n";
for(var key in _373){
var pref=_373[key];
_37b+="\n\t"+key+": "+pref+" ["+typeof pref+"]";
}
_372.fine(_37b);
}
};
function _Persistance(){
}
_Persistance.prototype={_logger:SystemLogger.getLogger("Persistance"),_persistance:null,_isEnabled:false,isInitialized:false,isEnabled:false,getPersistedProperty:function(id,prop){
var _380=null;
if(this.isInitialized==true){
if(this._persistance){
var _381=this._persistance[id];
if(_381){
_380=_381[prop];
}
}
}else{
throw "Persistance not initialized!";
}
return _380;
},setPersistedProperty:function(id,prop,_384){
if(this.isInitialized==true){
if(this._persistance){
if(_384!=null){
if(!this._persistance[id]){
this._persistance[id]={};
}
this._persistance[id][prop]=String(_384);
}else{
this._logger.error("Cannot persist "+prop+" with value: null");
}
}
}else{
throw "Persistance not initialized!";
}
},clearAllPersistedProperties:function(){
this._logger.debug("TODO: clearAllPersistedProperties");
},handleBroadcast:function(_385){
switch(_385){
case BroadcastMessages.APPLICATION_SHUTDOWN:
var _386=top.bindingMap.persistance;
_386.persist(this._persistance);
break;
}
},initialize:function(){
if(!this.isInitialized){
this.isInitialized=true;
if(this._isEnabled==true){
var _387=top.bindingMap.persistance;
var map=_387.getPersistanceMap();
if(map){
this.isEnabled=true;
this._persistance=map;
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,this);
}
}else{
this.isEnabled=false;
}
EventBroadcaster.broadcast(BroadcastMessages.PERSISTANCE_INITIALIZED);
}
}};
var Persistance=new _Persistance();
var LocalStore=new function(){
this.isInitialized=true;
this.isEnabled=false;
this.openedNodes=new SystemNodeList();
this.focuseNodes=new SystemNodeList();
};
StandardEventHandler.isBackAllowed=false;
function StandardEventHandler(doc,_38a){
this.logger=SystemLogger.getLogger("StandardEventHandler ["+doc.title+"]");
this._contextDocument=doc;
this._contextWindow=DOMUtil.getParentWindow(doc);
this.hasNativeKeys=false;
this._isAllowTabs=false;
this._isMouseHandlerOnly=_38a;
this._addListeners();
}
StandardEventHandler.prototype._addListeners=function(){
var doc=this._contextDocument;
DOMEvents.addEventListener(doc,DOMEvents.MOUSEDOWN,this);
DOMEvents.addEventListener(doc,DOMEvents.MOUSEUP,this);
DOMEvents.addEventListener(doc,DOMEvents.MOUSEMOVE,this);
if(Client.isExplorer||Client.isExplorer11){
DOMEvents.addEventListener(this._contextDocument,DOMEvents.HELP,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
DOMEvents.addEventListener(this._contextWindow,DOMEvents.HELP,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
}
if(!this._isMouseHandlerOnly){
DOMEvents.addEventListener(doc,DOMEvents.KEYDOWN,this);
DOMEvents.addEventListener(doc,DOMEvents.KEYUP,this);
if(this._contextWindow.WindowManager==null){
if(Client.isExplorer){
DOMEvents.addEventListener(doc,DOMEvents.FOCUSIN,this);
DOMEvents.addEventListener(doc,DOMEvents.FOCUSOUT,this);
}else{
if(this._contextDocument.designMode!="on"){
DOMEvents.addEventListener(doc,DOMEvents.FOCUS,this,true);
DOMEvents.addEventListener(doc,DOMEvents.BLUR,this,true);
}
}
}
var _38e={handleEvent:function(e){
switch(e.type){
case DOMEvents.BLUR:
Application.focused(false);
break;
case DOMEvents.FOCUS:
Application.focused(true);
break;
}
}};
DOMEvents.addEventListener(this._contextWindow,DOMEvents.BLUR,_38e);
DOMEvents.addEventListener(this._contextWindow,DOMEvents.FOCUS,_38e);
}
if(Client.isMozilla){
doc.addEventListener(DOMEvents.KEYDOWN,{handleEvent:function(e){
var s=83;
if(Client.isMac){
if(e.metaKey&&e.keyCode==s){
e.preventDefault();
}
}else{
if(e.ctrlKey&&e.keyCode==s){
e.preventDefault();
}
}
}},true);
}
};
StandardEventHandler.prototype.handleEvent=function(e){
switch(e.type){
case DOMEvents.MOUSEDOWN:
this._handleMouseDown(e);
break;
case DOMEvents.MOUSEUP:
this._handleMouseUp(e);
break;
case DOMEvents.MOUSEMOVE:
this._handleMouseMove(e);
break;
case DOMEvents.KEYDOWN:
this._handleKeyDown(e);
break;
case DOMEvents.KEYUP:
this._handleKeyUp(e);
break;
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
case DOMEvents.FOCUSIN:
case DOMEvents.FOCUSOUT:
this._handleFocus(e);
break;
}
};
StandardEventHandler.prototype._handleMouseDown=function(e){
Application.trackMousePosition(e);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
if(e.button!=ButtonStateManager.RIGHT_BUTTON){
var node=DOMEvents.getTarget(e);
while(node!=null){
switch(node.nodeType){
case Node.ELEMENT_NODE:
var _395=UserInterface.getBinding(node);
if(_395!=null){
_395.dispatchAction(Binding.ACTION_ACTIVATED);
}
node=_395!=null?null:node.parentNode;
break;
case Node.DOCUMENT_NODE:
node=DOMUtil.getParentWindow(node).frameElement;
break;
default:
node=null;
break;
}
}
}
};
StandardEventHandler.prototype._handleMouseUp=function(e){
Application.trackMousePosition(e);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,e);
};
StandardEventHandler.prototype._handleMouseMove=function(e){
try{
var _398=Application.trackMousePosition(e);
if(_398){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,e);
}
}
catch(exception){
DOMEvents.removeEventListener(this._contextDocument,DOMEvents.MOUSEMOVE,this);
throw (exception);
}
};
StandardEventHandler.prototype._handleKeyDown=function(e,_39a){
if(e.keyCode==KeyEventCodes.VK_TAB){
if(!this._isAllowTabs){
if(!_39a){
this._handleTab(e);
DOMEvents.preventDefault(e);
}
}else{
if(e.shiftKey||e.ctrlKey){
DOMEvents.preventDefault(e);
}
}
_39a=true;
}
if(!this.hasNativeKeys&&!e.shiftKey&&!e.ctrlKey){
switch(e.keyCode){
case KeyEventCodes.VK_UP:
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_LEFT:
case KeyEventCodes.VK_RIGHT:
case KeyEventCodes.VK_SPACE:
case KeyEventCodes.VK_PAGE_UP:
case KeyEventCodes.VK_PAGE_DOWN:
}
}
if(e.keyCode==KeyEventCodes.VK_BACK){
if(!StandardEventHandler.isBackAllowed||UserInterface.hasBinding(e.target)){
DOMEvents.preventDefault(e);
}
}
var _39b=KeySetBinding.handleKey(this._contextDocument,e);
if(!_39b){
switch(e.keyCode){
case KeyEventCodes.VK_PAGE_UP:
case KeyEventCodes.VK_PAGE_DOWN:
break;
default:
var _39c=this._contextWindow.frameElement;
if(_39c!=null){
var _39d=DOMUtil.getParentWindow(_39c);
if(_39d.standardEventHandler!=null){
_39d.standardEventHandler._handleKeyDown(e,_39a);
}
}
break;
}
}
};
StandardEventHandler.prototype._handleTab=function(e){
if(!this._isAllowTabs){
if(!e.ctrlKey){
if(e.shiftKey){
FocusBinding.navigatePrevious();
}else{
FocusBinding.navigateNext();
}
}
}
};
StandardEventHandler.prototype._handleFocus=function(e){
var _3a0=false;
var _3a1=DOMEvents.getTarget(e);
var name=_3a1.nodeName.toLowerCase();
switch(name){
case "input":
case "textarea":
case "select":
_3a0=(e.type==DOMEvents.FOCUS||e.type==DOMEvents.FOCUSIN);
if(name=="input"||name=="textarea"){
StandardEventHandler.isBackAllowed=_3a0;
}
if(_3a0){
if(!this.hasNativeKeys){
this.enableNativeKeys();
}
}else{
if(this.hasNativeKeys){
this.disableNativeKeys();
}
}
break;
}
};
StandardEventHandler.prototype._handleKeyUp=function(e){
Keyboard.keyUp(e);
};
StandardEventHandler.prototype.enableNativeKeys=function(_3a4){
this._isAllowTabs=(_3a4==true?true:false);
var self=this;
top.setTimeout(function(){
self.hasNativeKeys=true;
StandardEventHandler.isBackAllowed=true;
},0);
};
StandardEventHandler.prototype.disableNativeKeys=function(){
this._isAllowTabs=false;
this.hasNativeKeys=false;
StandardEventHandler.isBackAllowed=false;
};
Action.isValid=function(type){
return typeof type!=Types.UNDEFINED;
};
function Action(_3a7,type){
this.target=_3a7;
this.type=type;
this.listener=null;
this.isConsumed=false;
this.isCancelled=false;
}
Action.prototype.consume=function(){
this.isConsumed=true;
};
Action.prototype.cancel=function(){
this.isCancelled=true;
};
Animation.DEFAULT_TIME=parseInt(250);
function Animation(_3a9){
this.id=KeyMaster.getUniqueKey();
this.interval=25;
this.iterator=0;
this.modifier=1;
this.endcount=90;
for(var _3aa in _3a9){
this[_3aa]=_3a9[_3aa];
}
}
Animation.prototype.play=function(){
if(!this.isPlaying){
var self=this;
this._nextframe=function(){
window[this.id]=setTimeout(function(){
self.play();
},this.interval);
};
this.onstart(this.iterator);
this._nextframe();
this.isPlaying=true;
}else{
if(this.modifier>0?this.iterator>=this.endcount:this.iterator<=this.endcount){
this.stop();
}else{
var it1=this.iterator;
var it2=this.onstep(this.iterator);
if(it2&&it2!=it1){
this.iterator=it2;
}else{
this.iterator+=this.modifier;
}
this._nextframe();
}
}
};
Animation.prototype.stop=function(){
this.onstop(this.iterator);
this.isPlaying=false;
};
Animation.prototype.onstart=function(_3ae){
};
Animation.prototype.onstep=function(_3af){
};
Animation.prototype.onstop=function(_3b0){
};
Point.isEqual=function(p1,p2){
var _3b3=false;
if(p1&&p2){
_3b3=(p1.x==p2.x)&&(p1.y==p2.y);
}
return _3b3;
};
function Point(x,y){
this.x=x;
this.y=y;
}
Point.prototype={x:0,y:0};
Dimension.isEqual=function(dim1,dim2){
var _3b8=false;
if(dim1&&dim2){
_3b8=(dim1.w==dim2.w)&&(dim1.h==dim2.h);
}
return _3b8;
};
function Dimension(w,h){
this.w=w;
this.h=h;
}
Dimension.prototype={w:0,h:0};
function Geometry(x,y,w,h){
this.x=x;
this.y=y;
this.w=w;
this.h=h;
}
BindingAcceptor.acceptingBinding=null;
function BindingAcceptor(_3bf){
this.logger=SystemLogger.getLogger("BindingDragger");
this._binding=_3bf;
this._acceptedList={};
this._isAccepting=false;
this._corsor=null;
this._initialize();
return this;
}
BindingAcceptor.prototype._initialize=function(){
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_START,this);
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_STOP,this);
if(this._binding.dragAccept){
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_PAUSE,this);
var _3c0=new List(this._binding.dragAccept.split(" "));
while(_3c0.hasNext()){
var type=_3c0.getNext();
this._acceptedList[type]=true;
}
}
};
BindingAcceptor.prototype.handleBroadcast=function(_3c2,arg){
var type=arg;
try{
switch(_3c2){
case BroadcastMessages.TYPEDRAG_START:
if(this._cursor==null){
this._cursor=app.bindingMap.dragdropcursor;
}
this._binding.addEventListener(DOMEvents.MOUSEENTER,this);
this._binding.addEventListener(DOMEvents.MOUSELEAVE,this);
if(this.isAccepting(type)){
this._isAccepting=true;
this._startAccepting();
}
break;
case BroadcastMessages.TYPEDRAG_STOP:
this._binding.removeEventListener(DOMEvents.MOUSEENTER,this);
this._binding.removeEventListener(DOMEvents.MOUSELEAVE,this);
if(this.isAccepting(type)){
this._isAccepting=false;
this._stopAccepting();
}
break;
case BroadcastMessages.TYPEDRAG_PAUSE:
if(this.isAccepting(type)){
this._pauseAccepting();
}
break;
}
}
catch(exception){
this.logger.debug(exception);
}
};
BindingAcceptor.prototype.isAccepting=function(type){
return Types.isDefined(this._acceptedList[type]);
};
BindingAcceptor.prototype._startAccepting=function(){
if(Types.isFunction(this._binding.showGeneralAcceptance)){
this._binding.showGeneralAcceptance();
}
};
BindingAcceptor.prototype._pauseAccepting=function(){
if(this._binding.hideAcceptance){
this._binding.hideAcceptance();
}
this._cursor.hideAcceptance();
BindingAcceptor.acceptingBinding=null;
};
BindingAcceptor.prototype._stopAccepting=function(){
if(this._binding.hideGeneralAcceptance){
this._binding.hideGeneralAcceptance();
}
if(this._binding.hideAcceptance){
this._binding.hideAcceptance();
}
};
BindingAcceptor.prototype.handleEvent=function(e){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(this._isAccepting){
if(BindingAcceptor.acceptingBinding!=this._binding){
BindingAcceptor.acceptingBinding=this._binding;
this._cursor.showAcceptance();
if(Types.isFunction(this._binding.showAcceptance)){
this._binding.showAcceptance();
}
}
}else{
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_PAUSE);
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(this._isAccepting){
BindingAcceptor.acceptingBinding=null;
this._cursor.hideAcceptance();
if(Types.isFunction(this._binding.hideAcceptance)){
this._binding.hideAcceptance();
}
}else{
DOMEvents.stopPropagation(e);
}
break;
}
DOMEvents.stopPropagation(e);
};
BindingAcceptor.prototype.dispose=function(){
EventBroadcaster.unsubscribe(BroadcastMessages.TYPEDRAG_START,this);
EventBroadcaster.unsubscribe(BroadcastMessages.TYPEDRAG_STOP,this);
};
function BindingBoxObject(_3c7){
this._domElement=_3c7.getBindingElement();
}
BindingBoxObject.prototype.getUniversalPosition=function(){
return DOMUtil.getUniversalPosition(this._domElement);
};
BindingBoxObject.prototype.getGlobalPosition=function(){
return DOMUtil.getGlobalPosition(this._domElement);
};
BindingBoxObject.prototype.getLocalPosition=function(){
return DOMUtil.getLocalPosition(this._domElement);
};
BindingBoxObject.prototype.getDimension=function(){
var rect=this._domElement.getBoundingClientRect();
return new Dimension(rect.right-rect.left,rect.bottom-rect.top);
};
BindingBoxObject.prototype.dispose=function(){
this._domElement=null;
};
BindingDragger.isDragging=false;
BindingDragger.draggedBinding=null;
BindingDragger.bindingDragger=null;
function BindingDragger(_3c9){
this.logger=SystemLogger.getLogger("BindingDragger");
this.binding=_3c9;
this.isDragReady=false;
this.isDragging=false;
this.startPoint=null;
this.currentEvent=null;
}
BindingDragger.prototype.handleEvent=function(e){
if(e.type==DOMEvents.MOUSEUP){
this.isDragReady=false;
}else{
if(!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!DOMEvents.isRightButton(e)){
this.isDragReady=true;
DOMEvents.preventDefault(e);
}
break;
case DOMEvents.MOUSEMOVE:
if(this.isDragReady==true){
this.binding.dispatchAction(Binding.ACTION_DRAG);
if(this.handler){
this.onDragStart(e);
}
this.isDragReady=false;
}
break;
}
}
}
};
BindingDragger.prototype.registerHandler=function(_3cb){
if(Interfaces.isImplemented(IDragHandler,_3cb)==true){
this.handler=_3cb;
}else{
throw new Error("BindingDragger: Interface IDraghandler not implemented.");
}
};
BindingDragger.prototype.onDragStart=function(e){
if(!this.isDragging){
Application.enableMousePositionTracking(e);
this.startPoint=Application.getMousePosition();
this.isDragging=true;
BindingDragger.isDragging=true;
BindingDragger.draggedBinding=this.binding;
this.handler.onDragStart(this.startPoint);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,this);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
};
BindingDragger.prototype.onDrag=function(e){
if(this.isDragging==true){
var _3ce=e.button==(e.target?0:1);
if(_3ce){
this.handler.onDrag(this.getDiff());
}else{
this.onDragStop(e);
}
}
};
BindingDragger.prototype.onDragStop=function(e){
if(this.isDragging==true){
Application.disableMousePositionTracking();
this.handler.onDragStop(this.getDiff());
this.isDragging=false;
BindingDragger.isDragging=false;
BindingDragger.draggedBinding=null;
EventBroadcaster.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,this);
EventBroadcaster.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
};
BindingDragger.prototype.getDiff=function(){
var _3d0=Application.getMousePosition();
var dx=_3d0.x-this.startPoint.x;
var dy=_3d0.y-this.startPoint.y;
return new Point(dx,dy);
};
BindingDragger.prototype.handleBroadcast=function(_3d3,e){
switch(_3d3){
case BroadcastMessages.MOUSEEVENT_MOUSEMOVE:
this.onDrag(e);
break;
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
this.onDragStop(e);
break;
}
};
BindingDragger.prototype.dispose=function(){
this.binding=null;
};
BindingParser.XML="<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:ui=\"http://www.w3.org/1999/xhtml\">${markup}</div>";
function BindingParser(_3d5){
this.logger=SystemLogger.getLogger("BindingParser");
this._ownerDocument=_3d5;
this._rootElement=null;
}
BindingParser.prototype.parseFromString=function(_3d6){
var _3d7=new List();
var xml=BindingParser.XML.replace("${markup}",_3d6);
var doc=XMLParser.parse(_3d6);
if(doc){
var _3da=DOMUtil.createElementNS(Constants.NS_XHTML,"div",this._ownerDocument);
this._iterate(doc.documentElement,_3da);
var node=_3da.firstChild;
while(node){
if(node.nodeType==Node.ELEMENT_NODE){
_3d7.add(node);
}
node=node.nextSibling;
}
}
return _3d7;
};
BindingParser.prototype._iterate=function(_3dc,_3dd){
var _3de=null;
switch(_3dc.nodeType){
case Node.ELEMENT_NODE:
_3de=this._cloneElement(_3dc);
UserInterface.registerBinding(_3de);
break;
case Node.TEXT_NODE:
_3de=this._ownerDocument.createTextNode(_3dc.nodeValue);
break;
}
if(_3de){
_3dd.appendChild(_3de);
}
if(_3de&&_3dc.hasChildNodes()){
var _3df=_3dc.firstChild;
while(_3df){
this._iterate(_3df,_3de);
_3df=_3df.nextSibling;
}
}
};
BindingParser.prototype._cloneElement=function(_3e0){
var _3e1=DOMUtil.createElementNS(_3e0.namespaceURI?_3e0.namespaceURI:Constants.NS_XHTML,_3e0.nodeName,this._ownerDocument);
var i=0;
while(i<_3e0.attributes.length){
var attr=_3e0.attributes.item(i++);
_3e1.setAttribute(attr.nodeName,String(attr.nodeValue));
}
return _3e1;
};
BindingSerializer.activeInstance=null;
BindingSerializer.KEYPOINTER="bindingserializerkeypointer";
BindingSerializer.filter=function(_3e4){
var _3e5=null;
var _3e6=false;
var _3e7=_3e4.parentNode.getAttribute(BindingSerializer.KEYPOINTER);
if(UserInterface.hasBinding(_3e4)){
var _3e8=UserInterface.getBinding(_3e4);
_3e6=BindingSerializer.activeInstance.indexBinding(_3e8);
if(_3e6){
_3e5=_3e8.key;
_3e4.setAttribute(BindingSerializer.KEYPOINTER,_3e5);
}
}
_3e5=_3e5?_3e5:_3e7;
var _3e9=new List(_3e4.childNodes);
_3e9.each(function(_3ea){
if(_3ea.nodeType==Node.ELEMENT_NODE){
_3ea.setAttribute(BindingSerializer.KEYPOINTER,_3e5);
}
});
if(_3e6){
BindingSerializer.activeInstance.append(_3e5,_3e7);
}
};
function BindingSerializer(){
this.logger=SystemLogger.getLogger("BindingSerializer");
this._dom=DOMUtil.getDOMDocument();
alert("BindingSerializer: Convert to Crawler!");
this._pointers=[];
}
BindingSerializer.prototype.serializeBinding=function(_3eb){
BindingSerializer.activeInstance=this;
_3eb.bindingWindow.ElementIterator.iterate(_3eb.bindingElement,BindingSerializer.filter);
return DOMSerializer.serialize(this._dom,true);
};
BindingSerializer.prototype.indexBinding=function(_3ec){
var _3ed=false;
var _3ee=_3ec.serialize();
if(_3ee!=false){
_3ed=true;
var _3ef="ui:"+DOMUtil.getLocalName(_3ec.bindingElement);
var _3f0=DOMUtil.createElementNS(Constants.NS_UI,_3ef,this._dom);
this._pointers[_3ec.key]=_3f0;
for(var prop in _3ee){
if(_3ee[prop]!=null){
_3f0.setAttribute(prop,String(_3ee[prop]));
}
}
}
return _3ed;
};
BindingSerializer.prototype.append=function(_3f2,_3f3){
var _3f4=this._pointers[_3f2];
var _3f5=_3f3?this._pointers[_3f3]:this._dom;
_3f5.appendChild(_3f4);
};
function ImageProfile(_3f6){
this._default=_3f6.image;
this._hover=_3f6.imageHover;
this._active=_3f6.imageActive;
this._disabled=_3f6.imageDisabled;
}
ImageProfile.prototype.getDefaultImage=function(){
return this._default;
};
ImageProfile.prototype.setDefaultImage=function(_3f7){
this._default=_3f7;
};
ImageProfile.prototype.getHoverImage=function(){
return this._hover;
};
ImageProfile.prototype.setHoverImage=function(_3f8){
this._hover=_3f8;
};
ImageProfile.prototype.getActiveImage=function(){
return this._active;
};
ImageProfile.prototype.setActiveImage=function(_3f9){
this._active=_3f9;
};
ImageProfile.prototype.getDisabledImage=function(){
return this._disabled;
};
ImageProfile.prototype.setDisabledImage=function(_3fa){
this._disabled=_3fa;
};
function _BindingFinder(){
}
_BindingFinder.prototype={getDescendantBindingsByLocalName:function(_3fb,_3fc,_3fd){
var _3fe=null;
if(_3fb.isAttached){
_3fe=new List();
var _3ff=_3fd?_3fb.getChildElementsByLocalName(_3fc):_3fb.getDescendantElementsByLocalName(_3fc);
_3ff.each(function(_400){
var _401=UserInterface.getBinding(_400);
if(_401){
_3fe.add(_401);
}
});
}else{
var ouch="Could not resolve descendants of unattached binding "+_3fb.toString();
if(Application.isDeveloperMode){
throw ouch;
}
}
return _3fe;
},getAncestorBindingByType:function(_403,impl,_405){
var _406=null;
if(Binding.exists(_403)){
var node=_403.bindingElement;
while(_406==null&&node!=null){
node=node.parentNode;
if(node!=null){
if(UserInterface.hasBinding(node)){
var _408=UserInterface.getBinding(node);
if(_408 instanceof impl){
_406=_408;
}
}else{
if(_405&&node.nodeType==Node.DOCUMENT_NODE){
var win=DOMUtil.getParentWindow(node);
if(win!=null){
node=win.frameElement;
}else{
SystemDebug.stack(arguments);
break;
}
}
}
}
}
}
return _406;
},getAncestorBindingByLocalName:function(_40a,_40b,_40c){
var _40d=null;
if(_40b=="*"){
var node=_40a.bindingElement;
while(!_40d&&(node=node.parentNode)!=null){
if(UserInterface.hasBinding(node)){
_40d=UserInterface.getBinding(node);
}
}
}else{
_40d=UserInterface.getBinding(DOMUtil.getAncestorByLocalName(_40b,_40a.bindingElement,_40c));
}
return _40d;
},getChildElementsByLocalName:function(_40f,_410){
var _411=new List();
var _412=new List(_40f.bindingElement.childNodes);
_412.each(function(_413){
if(_413.nodeType==Node.ELEMENT_NODE){
if(_410=="*"||DOMUtil.getLocalName(_413)==_410){
_411.add(_413);
}
}
});
return _411;
},getChildBindingByType:function(_414,impl){
var _416=null;
_414.getChildElementsByLocalName("*").each(function(_417){
var _418=UserInterface.getBinding(_417);
if(_418!=null&&_418 instanceof impl){
_416=_418;
return false;
}else{
return true;
}
});
return _416;
},getDescendantBindingByType:function(_419,impl){
var _41b=null;
_419.getDescendantElementsByLocalName("*").each(function(_41c){
var _41d=UserInterface.getBinding(_41c);
if(_41d!=null&&_41d instanceof impl){
_41b=_41d;
return false;
}else{
return true;
}
});
return _41b;
},getDescendantBindingsByType:function(_41e,impl){
var _420=new List();
_41e.getDescendantElementsByLocalName("*").each(function(_421){
var _422=UserInterface.getBinding(_421);
if(_422!=null&&_422 instanceof impl){
_420.add(_422);
}
return true;
});
return _420;
},getNextBindingByLocalName:function(_423,name){
var _425=null;
var _426=_423.bindingElement;
while((_426=DOMUtil.getNextElementSibling(_426))!=null&&DOMUtil.getLocalName(_426)!=name){
}
if(_426!=null){
_425=UserInterface.getBinding(_426);
}
return _425;
},getPreviousBindingByLocalName:function(_427,name){
var _429=null;
var _42a=_427.bindingElement;
while((_42a=DOMUtil.getPreviousElementSibling(_42a))!=null&&DOMUtil.getLocalName(_42a)!=name){
}
if(_42a!=null){
_429=UserInterface.getBinding(_42a);
}
return _429;
}};
var BindingFinder=new _BindingFinder();
NodeCrawler.NORMAL=1;
NodeCrawler.SKIP_NODE=2;
NodeCrawler.SKIP_CHILDREN=4;
NodeCrawler.STOP_CRAWLING=8;
NodeCrawler.TYPE_DESCENDING="descending";
NodeCrawler.TYPE_ASCENDING="ascending";
function NodeCrawler(){
this._construct();
return this;
}
NodeCrawler.prototype={logger:SystemLogger.getLogger("NodeCrawler"),type:NodeCrawler.TYPE_DESCENDING,currentNode:null,previousNode:null,contextDocument:null,_filters:null,_construct:function(){
this.currentNode=null,this.previousNode=null;
this.nextNode=null;
this._filters=new List();
this.type=NodeCrawler.TYPE_DESCENDING;
},addFilter:function(_42b){
this._filters.add(_42b);
},removeFilter:function(_42c){
var _42d=-1;
this._filters.each(function(fil){
_42d++;
var _42f=true;
if(fil==_42c){
_42f=false;
}
return _42f;
});
if(_42d>-1){
this._filters.del(_42d);
}
},_applyFilters:function(node,arg){
var _432=null;
var stop=NodeCrawler.STOP_CRAWLING;
var skip=NodeCrawler.SKIP_NODE;
var _435=NodeCrawler.SKIP_CHILDREN;
this._filters.reset();
var _436=true;
while(this._filters.hasNext()&&_436==true){
var _437=this._filters.getNext();
var res=_437.call(this,node,arg);
if(res!=null){
_432=res;
switch(res){
case stop:
case skip:
case skip+_435:
_436=false;
break;
}
}
}
return _432;
},crawl:function(_439,arg){
this.contextDocument=_439.ownerDocument;
this.onCrawlStart();
var _43b=this.type==NodeCrawler.TYPE_ASCENDING;
var _43c=this._applyFilters(_439,arg);
if(_43c!=NodeCrawler.STOP_CRAWLING){
if(_43b&&_43c==NodeCrawler.SKIP_CHILDREN){
}else{
var next=null;
if(this.nextNode!=null){
next=this.nextNode;
this.nextNode=null;
}else{
next=_43b?_439.parentNode:_439;
}
this._crawl(next,arg);
}
}
this.onCrawlStop();
},onCrawlStart:function(){
},onCrawlStop:function(){
},_crawl:function(_43e,arg){
var _440=null;
switch(this.type){
case NodeCrawler.TYPE_DESCENDING:
_440=this._crawlDescending(_43e,arg);
break;
case NodeCrawler.TYPE_ASCENDING:
_440=this._crawlAscending(_43e,arg);
break;
}
return _440;
},_crawlDescending:function(_441,arg){
var skip=NodeCrawler.SKIP_NODE;
var _444=NodeCrawler.SKIP_CHILDREN;
var stop=NodeCrawler.STOP_CRAWLING;
var _446=null;
if(_441.hasChildNodes()){
var node=_441.firstChild;
while(node!=null&&_446!=stop){
this.currentNode=node;
_446=this._applyFilters(node,arg);
switch(_446){
case stop:
case _444:
case skip+_444:
break;
default:
if(node.nodeType==Node.ELEMENT_NODE){
if(this.nextNode==null){
var res=this._crawl(node,arg);
if(res==stop){
_446=stop;
break;
}
}
}
if(_446!=stop&&_446!=skip){
this.previousNode=node;
}
break;
}
if(_446!=stop){
node=this.nextNode?this.nextNode:node.nextSibling;
this.nextNode=null;
}
}
}
return _446;
},_crawlAscending:function(_449,arg){
var _44b=null;
var skip=NodeCrawler.SKIP_CHILDREN;
var stop=NodeCrawler.STOP_CRAWLING;
if(_449!=null){
this.currentNode=_449;
_44b=this._applyFilters(_449,arg);
if(_44b!=stop){
var next=this.nextNode?this.nextNode:_449.parentNode;
this.nextNode=null;
if(next&&next.nodeType!=Node.DOCUMENT_NODE){
this.previousNode=_449;
_44b=this._crawl(next,arg);
}
}
}else{
_44b=stop;
}
return _44b;
}};
NodeCrawler.prototype.dispose=function(){
this._filters.dispose();
for(var _44f in this){
this[_44f]=null;
}
};
ElementCrawler.prototype=new NodeCrawler;
ElementCrawler.prototype.constructor=ElementCrawler;
ElementCrawler.superclass=NodeCrawler.prototype;
function ElementCrawler(){
this._construct();
return this;
}
ElementCrawler.prototype._construct=function(){
ElementCrawler.superclass._construct.call(this);
this.addFilter(function(node,arg){
var _452=null;
if(node.nodeType!=Node.ELEMENT_NODE){
_452=NodeCrawler.SKIP_NODE;
}
return _452;
});
};
BindingCrawler.prototype=new ElementCrawler;
BindingCrawler.prototype.constructor=BindingCrawler;
BindingCrawler.superclass=ElementCrawler.prototype;
function BindingCrawler(){
this._construct();
return this;
}
BindingCrawler.prototype._construct=function(){
BindingCrawler.superclass._construct.call(this);
this.addFilter(function(_453,arg){
var _455=null;
if(!UserInterface.hasBinding(_453)){
_455=NodeCrawler.SKIP_NODE;
}
return _455;
});
};
Crawler.prototype=new BindingCrawler;
Crawler.prototype.constructor=Crawler;
Crawler.superclass=BindingCrawler.prototype;
function Crawler(){
this.id=null;
this.response=null;
this._construct();
return this;
}
Crawler.prototype._construct=function(){
Crawler.superclass._construct.call(this);
this.response=null;
var self=this;
this.addFilter(function(_457,arg){
var _459=null;
var _45a=UserInterface.getBinding(_457);
if(Interfaces.isImplemented(ICrawlerHandler,_45a)==true){
self.response=null;
_45a.handleCrawler(self);
_459=self.response;
}
return _459;
});
};
FlexBoxCrawler.prototype=new Crawler;
FlexBoxCrawler.prototype.constructor=FlexBoxCrawler;
FlexBoxCrawler.superclass=Crawler.prototype;
FlexBoxCrawler.ID="flexboxcrawler";
FlexBoxCrawler.MODE_FORCE="force";
FlexBoxCrawler.MODE_NORMAL="normal";
function FlexBoxCrawler(){
this.id=FlexBoxCrawler.ID;
this.mode=FlexBoxCrawler.MODE_NORMAL;
this.startBinding=null;
this._construct();
return this;
}
FlexBoxCrawler.prototype._construct=function(){
FlexBoxCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_45c,list){
var _45e=null;
var _45f=UserInterface.getBinding(_45c);
if(Interfaces.isImplemented(IFlexible,_45f)==true){
switch(self.mode){
case FlexBoxCrawler.MODE_FORCE:
list.add(_45f);
break;
case FlexBoxCrawler.MODE_NORMAL:
if(_45f.isFlexSuspended==true){
_45e=NodeCrawler.SKIP_CHILDREN;
}else{
list.add(_45f);
}
break;
}
}
return _45e;
});
};
FocusCrawler.prototype=new Crawler;
FocusCrawler.prototype.constructor=FocusCrawler;
FocusCrawler.superclass=Crawler.prototype;
FocusCrawler.ID="focuscrawler";
FocusCrawler.MODE_INDEX="index";
FocusCrawler.MODE_FOCUS="focus";
FocusCrawler.MODE_BLUR="blur";
function FocusCrawler(){
this.id=FocusCrawler.ID;
this._construct();
return this;
}
FocusCrawler.prototype._construct=function(){
FocusCrawler.superclass._construct.call(this);
this.addFilter(function(_460,list){
var _462=null;
var _463=UserInterface.getBinding(_460);
if(_463.isAttached==true){
if(Interfaces.isImplemented(IFocusable,_463)==true){
if(_463.isFocusable&&_463.isVisible){
switch(this.mode){
case FocusCrawler.MODE_INDEX:
list.add(_463);
break;
case FocusCrawler.MODE_FOCUS:
if(!_463.isFocused){
_463.focus();
}
_462=NodeCrawler.STOP_CRAWLING;
break;
case FocusCrawler.MODE_BLUR:
if(_463.isFocused==true){
_463.blur();
_462=NodeCrawler.STOP_CRAWLING;
}
break;
}
}
}
}
return _462;
});
};
FitnessCrawler.prototype=new Crawler;
FitnessCrawler.prototype.constructor=FitnessCrawler;
FitnessCrawler.superclass=Crawler.prototype;
FitnessCrawler.ID="fitnesscrawler";
FitnessCrawler.MODE_BRUTAL="brutal fitness";
FitnessCrawler.MODE_TRAINING="train fitness";
function FitnessCrawler(){
this.id=FitnessCrawler.ID;
this.mode=FitnessCrawler.MODE_TRAINING;
this._construct();
return this;
}
FitnessCrawler.prototype._construct=function(){
FitnessCrawler.superclass._construct.call(this);
this.addFilter(function(_464,list){
var _466=null;
var _467=UserInterface.getBinding(_464);
if(!_467.isVisible){
_466=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
}
return _466;
});
this.addFilter(function(_468,list){
var _46a=null;
var _46b=UserInterface.getBinding(_468);
if(_46b.isAttached){
if(Interfaces.isImplemented(IFit,_46b)){
if(!_46b.isFit||this.mode==FitnessCrawler.MODE_BRUTAL){
list.add(_46b);
}
}
}
return null;
});
};
function _DocumentUpdatePlugin(){
if(window.UpdateManager!=null){
UpdateManager.plugins.push(this);
this._setup();
}
}
_DocumentUpdatePlugin.prototype={toString:function(){
return "[DocumentUpdatePlugin]";
},_logger:SystemLogger.getLogger("DocumentUpdatePlugin ["+document.title+"]"),_isUpdating:false,_attributesbuffer:null,_elementsbuffer:null,isDebugging:Application.isDeveloperMode,_oldDOM:null,_focusID:null,_setup:function(){
UpdateManager.isDebugging=Application.isDeveloperMode;
UpdateManager.hasSoftAttributes=true;
UpdateManager.hasSoftSiblings=true;
DOMEvents.addEventListener(document,DOMEvents.BEFOREUPDATE,this);
DOMEvents.addEventListener(document,DOMEvents.AFTERUPDATE,this);
DOMEvents.addEventListener(document,DOMEvents.ERRORUPDATE,this);
DOMEvents.addEventListener(window,DOMEvents.UNLOAD,this);
if(Client.isFirefox){
UpdateAssistant.serialize=function(_46c){
_46c=_46c.cloneNode(true);
_46c.setAttributeNS(Constants.NS_NS,"xmlns",Constants.NS_XHTML);
_46c.setAttributeNS(Constants.NS_NS,"xmlns:ui",Constants.NS_UI);
return this._serializer.serializeToString(_46c);
};
}
},handleEvent:function(e){
var _46e=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.BEFOREUPDATE:
this._beforeUpdate(_46e);
break;
case DOMEvents.AFTERUPDATE:
this._afterUpdate(_46e);
break;
case DOMEvents.ERRORUPDATE:
this._errorUpdate();
break;
case DOMEvents.UNLOAD:
if(Application.hasLock(this)){
Application.unlock(this);
}
break;
}
},_beforeUpdate:function(_46f){
var _470=(_46f==document.documentElement);
if(_470){
this._elementsbuffer=new List();
this._isUpdating=true;
Application.lock(this);
var root=UserInterface.getBinding(document.body);
if(root!=null){
var page=root.getDescendantBindingByType(PageBinding);
if(page!=null){
page.onBeforeUpdates();
}
}
var _473=FocusBinding.focusedBinding;
if(_473!=null){
this._focusID=_473.getID();
}
if(this.isDebugging){
this._oldDOM=DOMSerializer.serialize(UpdateManager.currentDOM,true);
}
}else{
switch(_46f.__updateType){
case Update.TYPE_REPLACE:
case Update.TYPE_REMOVE:
DocumentManager.detachBindings(_46f);
break;
case Update.TYPE_ATTRIBUTES:
this._backupattributes(_46f,false);
break;
}
}
},_afterUpdate:function(_474){
var _475=(_474==document.documentElement);
if(_475){
var _476=this._elementsbuffer;
if(_476.hasEntries()){
_476.each(function(_477){
DocumentManager.attachBindings(_477);
});
}
this._isUpdating=false;
Application.unlock(this);
var root=UserInterface.getBinding(document.body);
if(root!=null){
var page=root.getDescendantBindingByType(PageBinding);
if(page!=null){
page.onAfterUpdates();
}
}
var _47a=FocusBinding.focusedBinding;
if(_47a==null){
var _47b=document.getElementById(this._focusID);
if(_47b!=null){
var _47a=UserInterface.getBinding(_47b);
if(_47a!=null){
_47a.focus();
}
}
}
this._focusID=null;
if(UpdateManager.summary!=""){
if(this.isDebugging){
var _47c=DOMSerializer.serialize(UpdateManager.currentDOM,true);
var _47d="NEW DOM: "+document.title+"\n\n"+_47c+"\n\n";
_47d+="OLD DOM: "+document.title+"\n\n"+this._oldDOM;
this._logger.debug(_47d);
this._oldDOM=null;
}
this._logger.fine(UpdateManager.summary);
}
}else{
switch(_474.__updateType){
case Update.TYPE_REPLACE:
case Update.TYPE_INSERT:
if(_474.__isAttached!==false){
this._elementsbuffer.add(_474);
}
break;
case Update.TYPE_ATTRIBUTES:
this._backupattributes(_474,true);
break;
}
switch(_474.id){
case "__VIEWSTATE":
case "__EVENTTARGET":
case "__EVENTARGUMENT":
case "__EVENTVALIDATION":
case "__LASTFOCUS":
case "__REQUEST":
case "__RESPONSE":
case "__CONSOLEID":
break;
default:
var _47a=UserInterface.getBinding(_474);
while(_47a==null&&_474!=null){
_47a=UserInterface.getBinding(_474);
_474=_474.parentNode;
}
if(_47a!=null){
_47a.dispatchAction(Binding.ACTION_UPDATED);
}
break;
}
}
},_errorUpdate:function(){
Application.unlock(this);
var cry="UpdateManager dysfunction:\n\n"+UpdateManager.errorsmessage;
this._logger.error(cry+"\n\n"+UpdateManager.pendingResponse);
if(Application.isDeveloperMode){
alert(cry);
}
},_backupattributes:function(_47f,_480){
var _481=UserInterface.getBinding(_47f);
if(_481!=null){
if(_480){
var _482=this._attributesbuffer;
var map=new Map();
_482.each(function(name,old){
var now=_47f.getAttribute(name);
if(now!=null){
if(now!=old){
map.set(name,Types.castFromString(now));
}
}else{
map.set(name,null);
}
});
new List(_47f.attributes).each(function(att){
if(att.specified){
if(!_482.has(att.nodeName)){
map.set(att.nodeName,Types.castFromString(att.nodeValue));
}
}
});
map.each(function(name,_489){
var _48a=_481.propertyMethodMap[name];
if(_48a!=null){
_48a.call(_481,_489);
}
});
}else{
var map=new Map();
new List(_47f.attributes).each(function(att){
if(att.specified){
map.set(att.nodeName,att.nodeValue);
}
});
this._attributesbuffer=map;
}
}
},handleElement:function(_48c,_48d){
var _48e=window.bindingMap[_48c.getAttribute("id")];
if(_48e!=null){
return _48e.handleElement(_48c,_48d);
}
},updateElement:function(_48f,_490){
var _491=window.bindingMap[_48f.getAttribute("id")];
if(_491!=null){
return _491.updateElement(_48f,_490);
}
}};
var DocumentUpdatePlugin=new _DocumentUpdatePlugin();
DocumentCrawler.prototype=new ElementCrawler;
DocumentCrawler.prototype.constructor=DocumentCrawler;
DocumentCrawler.superclass=ElementCrawler.prototype;
DocumentCrawler.ID="documentcrawler";
DocumentCrawler.MODE_REGISTER="register";
DocumentCrawler.MODE_ATTACH="attach";
DocumentCrawler.MODE_DETACH="detach";
function DocumentCrawler(){
this.mode=DocumentCrawler.MODE_REGISTER;
this.id=DocumentCrawler.ID;
this._construct();
return this;
}
DocumentCrawler.prototype._construct=function(){
DocumentCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_493,list){
var _495=UserInterface.getBinding(_493);
var _496=null;
switch(self.mode){
case DocumentCrawler.MODE_REGISTER:
if(_495==null){
UserInterface.registerBinding(_493);
}
break;
case DocumentCrawler.MODE_ATTACH:
if(_495!=null){
if(!_495.isAttached){
list.add(_495);
}
if(_495.isLazy==true){
_496=NodeCrawler.SKIP_CHILDREN;
}
}
break;
case DocumentCrawler.MODE_DETACH:
if(_495!=null){
list.add(_495);
}
break;
}
return _496;
});
};
function _DocumentManager(){
this._construct();
}
_DocumentManager.prototype={_logger:SystemLogger.getLogger("DocumentManager ["+document.title+"]"),_maxIndex:-1,customUserInterfaceMapping:null,isDocumentSelectable:false,hasNativeContextMenu:false,_construct:function(){
Application.framework(document);
EventBroadcaster.subscribe(WindowManager.WINDOW_LOADED_BROADCAST,this);
if(Client.isExplorer){
DOMEvents.addEventListener(document,DOMEvents.CLICK,this);
}
},handleBroadcast:function(_497,arg){
if(!this.isDocumentSelectable){
this._makeDocumentUnselectable();
}
if(!this.hasNativeContextMenu){
DOMEvents.addEventListener(document,DOMEvents.CONTEXTMENU,this);
}
if(!Application.isMalFunctional){
this._resolveCustomBindingMappings();
this.attachBindings(document.documentElement);
}
},handleEvent:function(e){
var _49a=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.SELECTSTART:
case DOMEvents.CONTEXTMENU:
if(!this._isTextInputElement(_49a)){
DOMEvents.preventDefault(e);
}
break;
case DOMEvents.CLICK:
if(Client.isExplorer){
if(_49a!=null){
if(_49a.href!=null&&_49a.href.indexOf(Constants.DUMMY_LINK)>-1){
DOMEvents.preventDefault(e);
}
}
}
break;
}
},_resolveCustomBindingMappings:function(){
var _49b=DOMUtil.getElementsByTagName(document.documentElement,"bindingmappingset").item(0);
if(_49b!=null){
var map={};
var _49d=DOMUtil.getElementsByTagName(_49b,"bindingmapping");
new List(_49d).each(function(_49e){
var _49f=_49e.getAttribute("element");
var _4a0=_49e.getAttribute("binding");
map[_49f]=eval(_4a0);
});
this.setCustomUserInterfaceMapping(new UserInterfaceMapping(map));
}
},setCustomUserInterfaceMapping:function(_4a1){
if(this.customUserInterfaceMapping==null){
this.customUserInterfaceMapping=_4a1;
}else{
this.customUserInterfaceMapping.merge(_4a1);
}
},_registerBindings:function(_4a2){
var _4a3=new DocumentCrawler();
_4a3.mode=DocumentCrawler.MODE_REGISTER;
_4a3.crawl(_4a2);
_4a3.dispose();
},_attachBindings:function(_4a4){
var _4a5=new DocumentCrawler();
_4a5.mode=DocumentCrawler.MODE_ATTACH;
var list=new List();
_4a5.crawl(_4a4,list);
var _4a7=false;
while(list.hasNext()){
var _4a8=list.getNext();
if(!_4a8.isAttached){
_4a8.onBindingAttach();
if(!_4a8.memberDependencies){
_4a8.onBindingInitialize();
}
if(Interfaces.isImplemented(IData,_4a8)){
_4a7=true;
}
}
}
if(_4a7){
var root=UserInterface.getBinding(document.body);
if(root!=null){
setTimeout(function(){
if(Binding.exists(root)){
root.dispatchAction(FocusBinding.ACTION_UPDATE);
}
},250);
}
}
_4a5.dispose();
list.dispose();
},attachBindings:function(_4aa){
this._registerBindings(_4aa);
this._attachBindings(_4aa);
},detachBindings:function(_4ab,_4ac){
var _4ad=new DocumentCrawler();
_4ad.mode=DocumentCrawler.MODE_DETACH;
var list=new List();
_4ad.crawl(_4ab,list);
if(_4ac==true){
list.extractFirst();
}
var _4af=false;
list.reverse().each(function(_4b0){
if(Interfaces.isImplemented(IData,_4b0)){
_4af=true;
}
_4b0.dispose(true);
});
if(_4af){
var root=UserInterface.getBinding(document.body);
if(root!=null){
setTimeout(function(){
if(Binding.exists(root)){
root.dispatchAction(FocusBinding.ACTION_UPDATE);
}
},250);
}
}
_4ad.dispose();
list.dispose();
},detachAllBindings:function(){
this.detachBindings(document.documentElement);
},computeMaxIndex:function(){
if(this._maxIndex==-1){
this._maxIndex=DOMUtil.getMaxIndex(document);
}
return this._maxIndex++;
},_isTextInputElement:function(_4b2){
return (/textarea|input/.test(DOMUtil.getLocalName(_4b2)));
},_makeDocumentUnselectable:function(){
if(Client.isExplorer){
DOMEvents.addEventListener(document,DOMEvents.SELECTSTART,this);
}else{
}
}};
var DocumentManager=new _DocumentManager();
function _DataManager(){
}
_DataManager.prototype={isPostBackFun:false,_logger:SystemLogger.getLogger("DataManager ["+document.title+"]"),_dataBindings:{},isDirty:false,dirty:function(_4b3){
this.isDirty=true;
var _4b4=false;
if(_4b3!=null&&!_4b3.isDirty){
_4b3.isDirty=true;
_4b3.dispatchAction(Binding.ACTION_DIRTY);
_4b4=true;
}
return _4b4;
},clean:function(_4b5){
if(_4b5.isDirty){
_4b5.isDirty=false;
}
},registerDataBinding:function(name,_4b7){
if(Interfaces.isImplemented(IData,_4b7,true)){
if(this._dataBindings[name]!=null){
throw "no proper support for checkbox multiple values! "+name;
}else{
this._dataBindings[name]=_4b7;
}
}else{
throw "Invalid DataBinding: "+_4b7;
}
},unRegisterDataBinding:function(name){
if(this._dataBindings[name]!=null){
delete this._dataBindings[name];
}
},getDataBinding:function(name){
var _4ba=null;
if(this._dataBindings[name]!=null){
_4ba=this._dataBindings[name];
}
return _4ba;
},getAllDataBindings:function(_4bb){
var list=new List();
for(var name in this._dataBindings){
var _4be=this._dataBindings[name];
list.add(_4be);
if(_4bb&&_4be instanceof WindowBinding){
var _4bf=_4be.getContentWindow().DataManager;
if(_4bf!=null){
list.merge(_4bf.getAllDataBindings());
}
}
}
return list;
},hasDataBindings:function(){
var _4c0=false;
for(var name in this._dataBindings){
_4c0=true;
break;
}
return _4c0;
},populateDataBindings:function(map){
if(map instanceof DataBindingMap){
map.each(function(name,_4c4){
var _4c5=this._dataBindings[name];
if(_4c5!=null){
switch(map.type){
case DataBindingMap.TYPE_RESULT:
try{
_4c5.setResult(_4c4);
}
catch(exception){
if(Application.isDeveloperMode){
alert(_4c5);
}
throw exception;
}
break;
case DataBindingMap.TYPE_VALUE:
throw "Not implemented!";
}
}
});
}
},getDataBindingValueMap:function(){
var _4c6=new DataBindingMap();
_4c6.type=DataBindingMap.TYPE_VALUE;
for(var name in this._dataBindings){
var _4c8=this._dataBindings[name];
if(_4c8 instanceof DataDialogBinding){
throw "DataDialogBinding valuemap not supported!";
}
_4c6[name]=_4c8.getValue();
}
return _4c6;
},getDataBindingResultMap:function(){
var _4c9=new DataBindingMap();
_4c9.type=DataBindingMap.TYPE_RESULT;
for(var name in this._dataBindings){
var _4cb=this._dataBindings[name];
var res=_4cb.getResult();
if(res instanceof DataBindingMap){
res.each(function(name,_4ce){
_4c9.set(name,_4ce);
});
}else{
_4c9.set(name,res);
}
}
return _4c9;
},getPostBackString:function(){
var _4cf="";
var form=document.forms[0];
if(form!=null){
var _4d1="";
new List(form.elements).each(function(_4d2){
var name=_4d2.name;
var _4d4=encodeURIComponent(_4d2.value);
switch(_4d2.type){
case "text":
case "hidden":
case "password":
case "textarea":
case "select-one":
_4cf+=name+"="+_4d4+"&";
break;
case "submit":
if(document.activeElement==_4d2){
_4cf+=name+"="+_4d4+"&";
}
break;
case "radio":
if(_4d2.checked){
_4cf+=name+"="+_4d4+"&";
}
break;
case "checkbox":
if(_4d2.checked){
if(_4d2.name==_4d1){
if(_4cf.lastIndexOf("&")==_4cf.length-1){
_4cf=_4cf.substr(0,_4cf.length-1);
}
_4cf+=","+_4d4;
}else{
_4cf+=name+"="+_4d2.value;
}
_4d1=name;
_4cf+="&";
}
break;
}
});
}
return _4cf.substr(0,_4cf.length-1);
}};
var DataManager=new _DataManager();
function _Templates(){
}
_Templates.prototype={_logger:SystemLogger.getLogger("Templates"),_cache:{},_mode:null,_modes:{MODE_PLAINTEXT:0,MODE_DOCUMENT:1,MODE_ELEMENT:2,MODE_DOCUMENTTEXT:3,MODE_ELEMENTTEXT:4},getTemplateDocument:function(name){
this._mode=this._modes.MODE_DOCUMENT;
return this._getIt(name);
},getTemplateElement:function(name){
this._mode=this._modes.MODE_ELEMENT;
return this._getIt(name);
},getTemplateDocumentText:function(name){
this._mode=this._modes.MODE_DOCUMENTTEXT;
return this._getIt(name);
},getTemplateElementText:function(name){
this._mode=this._modes.MODE_ELEMENTTEXT;
return this._getIt(name);
},getTemplateBodyText:function(name){
var tmp=this.getTemplateDocumentText(name);
tmp=tmp.split("<body>")[1].split("</body>")[0];
return tmp;
},getPlainText:function(name){
this._mode=this._modes.MODE_PLAINTEXT;
return this._getIt(name);
},_getIt:function(name){
var _4dd=null;
var _4de=null;
var _4df=false;
if(!this._cache[name]){
_4df=true;
var uri=Constants.TEMPLATESROOT+"/"+name;
var _4e1=DOMUtil.getXMLHTTPRequest();
_4e1.open("get",uri,false);
_4e1.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_4e1.send(null);
switch(this._mode){
case this._modes.MODE_PLAINTEXT:
_4de=_4e1.responseText;
break;
default:
_4de=_4e1.responseXML;
break;
}
if(_4de==null){
throw new Error("Templates: Could not read template. Malformed XML?");
}else{
this._cache[name]=_4de;
}
}
_4de=this._cache[name];
switch(this._mode){
case this._modes.MODE_PLAINTEXT:
_4dd=_4de;
break;
case this._modes.MODE_DOCUMENT:
_4dd=DOMUtil.cloneNode(_4de,true);
break;
case this._modes.MODE_ELEMENT:
_4dd=DOMUtil.cloneNode(_4de.documentElement,true);
break;
case this._modes.MODE_DOCUMENTTEXT:
_4dd=DOMSerializer.serialize(_4de,true);
break;
case this._modes.MODE_ELEMENTTEXT:
_4dd=DOMSerializer.serialize(_4de.documentElement,true);
break;
}
if(_4df&&Application.isDeveloperMode){
}
return _4dd;
}};
var Templates=new _Templates();
function DialogButton(obj){
this.label=null;
this.image=null;
this.response=null;
this.isFocusable=true;
this.isDefault=false;
this.isFocused=false;
if(obj){
for(var prop in obj){
if(typeof this[prop]!="undefined"){
this[prop]=obj[prop];
}
}
}
}
function _Dialog(){
}
_Dialog.prototype={_logger:SystemLogger.getLogger("Dialog"),_URL_STANDARDDIALOG:"${root}/content/dialogs/standard/standard.aspx",MODAL:"modal",NON_MODAL:"nonmodal",URL_TREESELECTOR:"${root}/content/dialogs/treeselector/treeselector.aspx",URL_TREESEARCH:"${root}/content/dialogs/treesearch/treeSearchForm.aspx",URL_IMAGESELECTOR:"${root}/content/dialogs/treeselector/special/imageselector.aspx",URL_TREEACTIONSELECTOR:"${root}/content/dialogs/treeselector/special/treeactionselector.aspx",URL_SERVICEFAULT:"${root}/content/dialogs/webservices/error.aspx",BUTTONS_YES_NO_CANCEL:["yes:default","no","cancel"],BUTTONS_ACCEPT_CANCEL:["accept:default","cancel"],BUTTONS_ACCEPT:["accept:default"],RESPONSE_YES:"yes",RESPONSE_NO:"no",RESPONSE_ACCEPT:"accept",RESPONSE_CANCEL:"cancel",RESPONSE_DEFAULT:"default",_TYPE_WARNING:"warning",_TYPE_MESSAGE:"message",_TYPE_ERROR:"error",_TYPE_QUESTION:"question",_dialogImages:{"warning":"${icon:warning}","message":"${icon:message}","error":"${icon:error}","question":"${icon:question}"},dialogButton:function(_4e4){
if(this._dialogButtons==undefined){
this._dialogButtons={"yes":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelYes"),response:this.RESPONSE_YES}),"no":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelNo"),response:this.RESPONSE_NO}),"accept":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelAccept"),response:this.RESPONSE_ACCEPT}),"cancel":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelCancel"),response:this.RESPONSE_CANCEL})};
}
return Dialog._dialogButtons[_4e4];
},invoke:function(url,_4e6,_4e7){
this._logger.error("Not implemented");
},invokeModal:function(url,_4e9,_4ea){
var _4eb=new DialogViewDefinition({handle:KeyMaster.getUniqueKey(),position:Dialog.MODAL,url:url,handler:_4e9,argument:_4ea});
StageBinding.presentViewDefinition(_4eb);
return _4eb;
},invokeDefinition:function(_4ec){
if(_4ec instanceof DialogViewDefinition){
StageBinding.presentViewDefinition(_4ec);
}
return _4ec;
},question:function(_4ed,text,_4ef,_4f0){
if(!_4ef){
_4ef=this.BUTTONS_ACCEPT_CANCEL;
}
this._standardDialog(this._TYPE_QUESTION,_4ed,text,_4ef,_4f0);
},message:function(_4f1,text,_4f3,_4f4){
if(!_4f3){
_4f3=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_MESSAGE,_4f1,text,_4f3,_4f4);
},error:function(_4f5,text,_4f7,_4f8){
if(!_4f7){
_4f7=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_ERROR,_4f5,text,_4f7,_4f8);
},warning:function(_4f9,text,_4fb,_4fc){
if(!_4fb){
_4fb=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_WARNING,_4f9,text,_4fb,_4fc);
},_standardDialog:function(type,_4fe,text,_500,_501){
var _502=null;
if(!_500){
_502=new List(Dialog.BUTTONS_ACCEPT);
}else{
_502=new List();
new List(_500).each(function(_503){
var _504=null;
switch(typeof _503){
case "object":
_504=_503;
break;
case "string":
var _505=false;
if(_503.indexOf(":")>-1){
_503=_503.split(":")[0];
_505=true;
}
_504=Dialog.dialogButton(_503);
if(_505){
_504.isDefault=true;
}
break;
}
_502.add(_504);
});
}
var _506={title:_4fe,text:text,type:type,image:this._dialogImages[type],buttons:_502};
var _507=new DialogViewDefinition({handle:"standarddialog:"+type,position:Dialog.MODAL,url:this._URL_STANDARDDIALOG,handler:_501,argument:_506});
StageBinding.presentViewDefinition(_507);
}};
var Dialog=new _Dialog();
function _Commands(){
this._construct();
}
_Commands.prototype={_URL_ABOUTDIALOG:"${root}/content/dialogs/about/about.aspx",_URL_PREFERENCES:"${root}/content/dialogs/preferences/preferences.aspx",_construct:function(){
var self=this;
EventBroadcaster.subscribe(BroadcastMessages.SAVE_ALL,{handleBroadcast:function(_509,arg){
self.saveAll(arg);
}});
},about:function(){
this._dialog(this._URL_ABOUTDIALOG);
},preferences:function(){
this._dialog(this._URL_PREFERENCES);
},_dialog:function(url){
if(Client.hasTransitions){
setTimeout(function(){
Dialog.invokeModal(url);
},Animation.DEFAULT_TIME);
}else{
Dialog.invokeModal(url);
}
},close:function(){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_CURRENT);
},closeAll:function(){
this.saveAll(true);
},save:function(){
EventBroadcaster.broadcast(BroadcastMessages.SAVE_CURRENT);
},saveAll:function(_50c){
var self=this;
var _50e=Application.getDirtyDockTabsTabs();
if(_50e.hasEntries()){
Dialog.invokeModal("${root}/content/dialogs/save/saveall.aspx",{handleDialogResponse:function(_50f,_510){
switch(_50f){
case Dialog.RESPONSE_ACCEPT:
self._handleSaveAllResult(_510,_50c);
break;
case Dialog.RESPONSE_CANCEL:
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
break;
}
}},_50e);
}else{
if(_50c){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_ALL);
}
}
},_handleSaveAllResult:function(_511,_512){
var _513=false;
var list=new List();
_511.each(function(name,tab){
if(tab!=false){
list.add(tab);
}
});
if(list.hasEntries()){
_513=true;
var _517=list.getLength();
var _518={handleBroadcast:function(_519,tab){
if(--_517==0){
EventBroadcaster.unsubscribe(BroadcastMessages.DOCKTAB_CLEAN,this);
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
if(_512){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_ALL);
}
}
}};
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_CLEAN,_518);
list.each(function(tab){
tab.saveContainedEditor();
});
}else{
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
}
return _513;
},systemLog:function(){
if(Application.isOperational){
StageBinding.handleViewPresentation("Composite.Management.SystemLog");
}else{
var win=window.open(Constants.APPROOT+"/content/views/dev/systemlog/systemlogoutput.html");
win.onload=function(){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMLOG_OPENED,this);
};
}
},help:function(){
var _51d="Composite.Management.Help";
if(!StageBinding.isViewOpen(_51d)){
StageBinding.handleViewPresentation(_51d);
}
}};
var Commands=new _Commands();
function _Prism(){
}
_Prism.prototype={_logger:SystemLogger.getLogger("Prism"),clearCache:function(){
this._logger.fine("Clearing the cache");
this._dispatchToPrism("contenttochrome-clearcache");
},disableCache:function(){
this._logger.fine("Disabling cache");
this._dispatchToPrism("contenttochrome-cache-disable");
},enableCache:function(){
this._logger.fine("Enabling cache");
this._dispatchToPrism("contenttochrome-cache-enable");
},_dispatchToPrism:function(type){
if(Client.isPrism){
var _51f=document.createEvent("Events");
_51f.initEvent(type,true,true);
window.dispatchEvent(_51f);
}else{
this._logger.warn("Prism methods should only be invoked in Prism! ("+type+")");
}
}};
var Prism=new _Prism();
function Uri(url){
var _521=/^(~?\/|(\.\.\/)+|https?:\/\/[\w\d-\.:]*\/)(media|page)(\(|%28)[\w\d-\:]+(\)|%29)/;
var _522=_521.exec(url?url:"");
if(_522){
if(_522[3]=="media"){
this.isMedia=true;
}else{
if(_522[3]=="page"){
this.isPage=true;
}
}
}
var _523={};
url.replace(/^[^\?]*/g,"").replace(/([^?=&]+)(=([^&]*))?/g,function($0,$1,$2,$3){
_523[$1]=$3;
});
this.queryString=_523;
this.path=url.replace(/\?.*/g,"");
return this;
}
Uri.isMedia=function(url){
return new Uri(url).isMedia;
};
Uri.prototype.getPath=function(){
return this.path;
};
Uri.prototype.getQueryString=function(){
return new Map(this.queryString);
};
Uri.prototype.hasParam=function(key){
return this.queryString[key]!=null;
};
Uri.prototype.getParam=function(key){
return this.queryString[key];
};
Uri.prototype.setParam=function(key,_52c){
if(_52c==undefined){
delete this.queryString[key];
}else{
this.queryString[key]=_52c;
}
};
Uri.prototype.toString=function(){
var url=this.path;
var _52e=[];
for(var key in this.queryString){
_52e.push(key+"="+this.queryString[key]);
}
if(_52e.length>0){
url+="?"+_52e.join("&");
}
return url;
};
ViewDefinition.DEFAULT_URL="${root}/blank.aspx";
ViewDefinition.clone=function(_530,_531){
var _532=null;
var _533=ViewDefinitions[_530];
if(_533.isMutable){
var impl=null;
if(_533 instanceof DialogViewDefinition){
impl=DialogViewDefinition;
}else{
impl=HostedViewDefinition;
}
if(_531!=null&&impl!=null){
var def=new impl();
for(var prop in _533){
def[prop]=ViewDefinition.cloneProperty(_533[prop]);
}
def.handle=_531;
_532=def;
}else{
throw "Cannot clone without newhandle";
}
}else{
throw "Cannot clone non-mutable definition";
}
return _532;
};
ViewDefinition.cloneProperty=function(_537){
if(null==_537){
return _537;
}
if(typeof _537==="object"){
var _538=(_537.constructor===Array)?[]:{};
for(var prop in _537){
_538[prop]=ViewDefinition.cloneProperty(_537[prop]);
}
return _538;
}
return _537;
};
function ViewDefinition(){
}
ViewDefinition.prototype={url:ViewDefinition.DEFAULT_URL,argument:null,handle:null,entityToken:null,flowHandle:null,label:null,image:null,toolTip:null};
SystemViewDefinition.prototype=new ViewDefinition;
SystemViewDefinition.prototype.constructor=SystemViewDefinition;
SystemViewDefinition.superclass=ViewDefinition.prototype;
SystemViewDefinition.DEFAULT_URL="${root}/content/views/systemview/systemview.aspx";
function SystemViewDefinition(node){
this.node=node;
this.argument=node;
this.url=SystemViewDefinition.DEFAULT_URL;
this.handle=node.getHandle();
this.label=node.getLabel();
this.image=node.getImageProfile().getDefaultImage();
this.toolTip=node.getToolTip();
}
HostedViewDefinition.prototype=new ViewDefinition;
HostedViewDefinition.prototype.constructor=HostedViewDefinition;
HostedViewDefinition.superclass=ViewDefinition.prototype;
HostedViewDefinition.POSTBACK_URL="${root}/postback.aspx";
function HostedViewDefinition(arg){
this.position=DockBinding.MAIN;
this.perspective=null;
this.entityToken=null;
this.label=null;
this.image=null;
if(arg){
for(var prop in arg){
if(this[prop]||this.prop==null){
this[prop]=arg[prop];
if(this.url){
this.url=Resolver.resolve(this.url);
}
}else{
throw "Property not recognized: "+prop;
}
}
}
}
DialogViewDefinition.prototype=new ViewDefinition;
DialogViewDefinition.prototype.constructor=HostedViewDefinition;
DialogViewDefinition.superclass=ViewDefinition.prototype;
function DialogViewDefinition(arg){
this.handler=null;
this.position=Dialog.MODAL;
this.label=null;
this.image=null;
this.width=null;
this.height=null;
if(arg){
for(var prop in arg){
if(this[prop]||this.prop==null){
this[prop]=arg[prop];
if(this.url){
this.url=Resolver.resolve(this.url);
}
if(this.handler){
if(!Interfaces.isImplemented(IDialogResponseHandler,this.handler)){
throw "IDialogResponseHandler not implemented";
}
}
}else{
throw "Property not recognized: "+prop;
}
}
}
}
Binding.prototype.constructor=Binding;
Binding.CALLBACKID="callbackid";
Binding.CALLBACKARG="callbackarg";
Binding.CLASSNAME_CLEARFLOAT="clearfloatelement";
Binding.CLASSNAME_FOCUSED="focused";
Binding.SNOOZE=Client.isMozilla==true?125:250;
Binding.ACTION_DRAG="bindingdrag";
Binding.ACTION_DROP="bindingdrop";
Binding.ACTION_DIRTY="bindingdirty";
Binding.ACTION_VALID="bindingvalid";
Binding.ACTION_UPDATED="bindingupdated";
Binding.ACTION_INVALID="bindinginvalid";
Binding.ACTION_RESIZED="bindingresized";
Binding.ACTION_FOCUSED="bindingfocused";
Binding.ACTION_BLURRED="bindingblurred";
Binding.ACTION_ATTACHED="bindingattached";
Binding.ACTION_DETACHED="bindingdetached";
Binding.ACTION_DISPOSED="bindingdisposed";
Binding.ACTION_MOVETOTOP="bindingmovetotop";
Binding.ACTION_ACTIVATED="bindingactivated";
Binding.ACTION_REGISTERED="bindingregistered";
Binding.ACTION_MOVEDONTOP="bindingmovedontop";
Binding.ACTION_INITIALIZED="bindinginitialized";
Binding.ACTION_FORCE_REFLEX="bindingforcereflex";
Binding.ACTION_DIMENSIONCHANGED="bindingdimensionchanged";
Binding.ACTION_VISIBILITYCHANGED="bindingvisibilitychanged";
Binding.ABSTRACT_METHOD=function(){
SystemDebug.stack(arguments);
throw (this.toString()+" abstract method not implemented");
};
Binding.evaluate=function(_53f,_540){
var _541=null;
var _542=_540.bindingWindow.WindowManager;
if(_542!=null){
var _543=Binding.parseScriptStatement(_53f,_540.key);
_541=_542.evaluate(_543);
}
return _541;
};
Binding.parseScriptStatement=function(_544,key){
if(_544!=null&&key!=null){
var _546="UserInterface.getBindingByKey ( \""+key+"\" )";
_544=_544.replace(/(\W|^)this(,| +|\)|;)/g,_546);
_544=_544.replace(/(\W|^)this(\.)/g,_546+".");
}
return _544;
};
Binding.exists=function(_547){
var _548=false;
try{
if(_547&&_547.bindingElement&&_547.bindingElement.nodeType&&_547.isDisposed==false){
_548=true;
}
}
catch(accessDeniedException){
_548=false;
}
finally{
return _548;
}
};
Binding.destroy=function(_549){
if(!_549.isDisposed){
if(_549.acceptor!=null){
_549.acceptor.dispose();
}
if(_549.dragger!=null){
_549.disableDragging();
}
if(_549.boxObject!=null){
_549.boxObject.dispose();
}
if(_549._domEventHandlers!=null){
DOMEvents.cleanupEventListeners(_549);
}
for(var _54a in _549.shadowTree){
var _54b=_549.shadowTree[_54a];
if(_54b instanceof Binding&&Binding.exists(_54b)){
_54b.dispose(true);
}
_549.shadowTree[_54a]=null;
}
_549.isDisposed=true;
_549=null;
}
};
Binding.dotnetify=function(_54c,_54d){
var _54e=_54c.getCallBackID();
if(_54e!=null){
var _54f=DOMUtil.createElementNS(Constants.NS_XHTML,"input",_54c.bindingDocument);
_54f.type="hidden";
_54f.id=_54e;
_54f.name=_54e;
_54f.value=_54d!=null?_54d:"";
_54c.bindingElement.appendChild(_54f);
_54c.shadowTree.dotnetinput=_54f;
}else{
throw _54c.toString()+": Missing callback ID";
}
};
Binding.imageProfile=function(_550){
var _551=_550.getProperty("image");
var _552=_550.getProperty("image-hover");
var _553=_550.getProperty("image-active");
var _554=_550.getProperty("image-disabled");
if(_550.imageProfile==null){
if(_550.image==null&&_551!=null){
_550.image=_551;
}
if(_550.imageHover==null&&_552!=null){
_550.imageHover=_552;
}
if(_550.imageActive==null&&_553!=null){
_550.imageActive=_553;
}
if(_550.imageDisabled==null&&_554!=null){
_550.imageDisabled=_554;
}
if(_550.image||_550.imageHover||_550.imageActive||_550.imageDisabled){
_550.imageProfile=new ImageProfile(_550);
}
}
};
function Binding(){
this.logger=SystemLogger.getLogger("binding");
this.key=null;
this.bindingElement=null;
this.bindingDocument=null;
this.bindingWindow=null;
this.shadowTree=null;
this.actionListeners=null;
this.contextMenuBinding=null;
this.isRegistered=false;
this.isAttached=false;
this.isInitialized=false;
this.isDisposed=false;
this.isDraggable=false;
this.dragger=null;
this.memberDependencies=null;
this.dependentBindings=null;
this.propertyMethodMap=null;
this.isBlockingActions=false;
this.isVisible=true;
this.boxObject=null;
this.dragType=null;
this.dragAccept=null;
this.dragReject=false;
this.acceptor=null;
this.isLazy=false;
this._persist=null;
this.isBindingBuild=false;
this._hasActivationAwareness=false;
this.isFlexSuspended=false;
this.crawlerFilters=null;
this._subscriptions=null;
}
Binding.prototype.toString=function(){
return "[Binding]";
};
Binding.prototype.onBindingRegister=function(){
if(!this.isRegistered){
this.bindingElement=UserInterface.getElement(this);
this.bindingDocument=this.bindingElement.ownerDocument;
this.bindingWindow=DOMUtil.getParentWindow(this.bindingDocument);
this.shadowTree={};
this.actionListeners={};
this.propertyMethodMap={};
this.isRegistered=true;
this._subscriptions=new Map();
this._updateBindingMap(true);
if(this.getProperty("lazy")){
this.isLazy=true;
}
}
};
Binding.prototype.onBindingAttach=function(){
if(!this.isAttached){
if(!this.bindingElement.parentNode){
alert(this+" onBindingAttach: Binding must be positioned in document structure before attachment can be invoked.");
}else{
this.boxObject=new BindingBoxObject(this);
this._initializeBindingPersistanceFeatures();
this._initializeBindingGeneralFeatures();
this._initializeBindingDragAndDropFeatures();
this._updateBindingMap(true);
this.isAttached=true;
}
}
};
Binding.prototype.onBindingInitialize=function(){
if(this.dependentBindings!=null){
for(var key in this.dependentBindings){
var _556=this.dependentBindings[key];
_556.onMemberInitialize(this);
}
}
this.isInitialized=true;
};
Binding.prototype.onMemberInitialize=function(_557){
if(_557){
this.memberDependencies[_557.key]=true;
var _558=true;
for(var key in this.memberDependencies){
if(this.memberDependencies[key]==false){
_558=false;
break;
}
}
if(_558){
this.onBindingInitialize();
}
}else{
throw new Error(this+" onMemberInitialize: Expected argument.");
}
};
Binding.prototype.attach=function(){
if(!this.isAttached){
this.onBindingAttach();
if(this.memberDependencies==null){
this.onBindingInitialize();
}
}
return this;
};
Binding.prototype.attachRecursive=function(){
this.bindingWindow.DocumentManager.attachBindings(this.bindingElement);
};
Binding.prototype.detachRecursive=function(_55a){
if(_55a==null){
_55a=false;
}
this.bindingWindow.DocumentManager.detachBindings(this.bindingElement,!_55a);
};
Binding.prototype.addMember=function(_55b){
if(!this.isAttached){
throw "Cannot add members to unattached binding";
}else{
if(!_55b.isInitialized){
if(!this.memberDependencies){
this.memberDependencies={};
}
this.memberDependencies[_55b.key]=false;
_55b.registerDependentBinding(this);
}
}
return _55b;
};
Binding.prototype.addMembers=function(_55c){
while(_55c.hasNext()){
var _55d=_55c.getNext();
if(!_55d.isInitialized){
this.addMember(_55d);
}
}
return _55c;
};
Binding.prototype.registerDependentBinding=function(_55e){
if(!this.dependentBindings){
this.dependentBindings={};
}
this.dependentBindings[_55e.key]=_55e;
};
Binding.prototype._initializeBindingPersistanceFeatures=function(){
var _55f=this.getProperty("persist");
if(_55f&&Persistance.isEnabled){
var id=this.bindingElement.id;
if(!KeyMaster.hasKey(id)){
this._persist={};
var _561=new List(_55f.split(" "));
while(_561.hasNext()){
var prop=_561.getNext();
var _563=Persistance.getPersistedProperty(id,prop);
if(_563!=null){
this._persist[prop]=_563;
this.setProperty(prop,_563);
}else{
_563=this.getProperty(prop);
if(_563!=null){
this._persist[prop]=_563;
}
}
}
}else{
throw "Persistable bindings must have a specified ID.";
}
}
};
Binding.prototype._initializeBindingGeneralFeatures=function(){
var _564=this.getProperty("disabled");
var _565=this.getProperty("contextmenu");
var _566=this.getProperty("observes");
var _567=this.getProperty("onattach");
var _568=this.getProperty("hidden");
var _569=this.getProperty("blockactionevents");
if(_568==true&&this.isVisible==true){
this.hide();
}
if(_564&&this.logger!=null){
this.logger.error("The 'disabled' property has been renamed 'isdisbaled'");
}
if(_565){
this.setContextMenu(_565);
}
if(_566){
this.observe(this.getBindingForArgument(_566));
}
if(_569==true){
this.isBlockingActions=true;
}
if(this.isActivationAware==true){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this);
this._hasActivationAwareness=true;
}
if(_567!=null){
Binding.evaluate(_567,this);
}
};
Binding.prototype._initializeBindingDragAndDropFeatures=function(){
var _56b=this.getProperty("draggable");
var _56c=this.getProperty("dragtype");
var _56d=this.getProperty("dragaccept");
var _56e=this.getProperty("dragreject");
if(_56b!=null){
this.isDraggable=_56b;
}
if(_56c!=null){
this.dragType=_56c;
if(_56b!=false){
this.isDraggable=true;
}
}
if(_56d!=null){
this.dragAccept=_56d;
}
if(_56e!=null){
this.dragReject=_56e;
}
if(this.isDraggable){
this.enableDragging();
}
if(this.dragger!=null&&this.dragType!=null){
this.dragger.registerHandler(Application);
}
if(this.dragAccept!=null&&this.dragReject==true){
throw new Error("Binding cannot both accept and reject "+this);
}else{
if(this.dragAccept!=null||this.dragReject!=null){
this.acceptor=new BindingAcceptor(this);
}
}
};
Binding.prototype._updateBindingMap=function(_56f){
try{
if(this.bindingWindow!=null){
var id=this.bindingElement.id;
var map=this.bindingWindow.bindingMap;
var _572=null;
if(_56f){
_572=map[id];
if(_572!=null&&_572!=this){
var cry=this.toString()+" duplicate binding ID: "+id;
this.logger.error(cry);
if(Application.isDeveloperMode){
throw (cry);
}
}else{
map[id]=this;
}
}else{
_572=map[id];
if(_572!=null&&_572==this){
delete map[id];
}
}
}else{
var _574=new String("Binding#_updateBindingMap odd dysfunction: "+this.toString()+": "+_56f);
if(Application.isDeveloperMode==true){
alert(_574);
}else{
this.logger.error(_574);
}
}
}
catch(exception){
this.logger.error(exception);
}
};
Binding.prototype.handleEvent=function(e){
};
Binding.prototype.handleAction=function(_576){
};
Binding.prototype.handleBroadcast=function(_577,arg){
};
Binding.prototype.handleElement=function(_579){
return false;
};
Binding.prototype.updateElement=function(_57a){
return false;
};
Binding.prototype.getBindingForArgument=function(arg){
var _57c=null;
switch(typeof arg){
case "object":
_57c=arg;
break;
case "string":
_57c=this.bindingDocument.getElementById(arg);
if(_57c==null){
_57c=Binding.evaluate(arg,this);
}
break;
}
if(_57c!=null&&_57c.nodeType!=null){
_57c=UserInterface.getBinding(_57c);
}
return _57c;
};
Binding.prototype.serialize=function(){
var _57d={};
var id=this.bindingElement.id;
if(id&&id!=this.key){
_57d.id=id;
}
var _57f=this.getProperty("binding");
if(_57f){
_57d.binding=_57f;
}
return _57d;
};
Binding.prototype.serializeToString=function(){
var _580=null;
if(this.isAttached){
_580=new BindingSerializer().serializeBinding(this);
}else{
throw "cannot serialize unattached binding";
}
return _580;
};
Binding.prototype.subTreeFromString=function(_581){
this.detachRecursive();
this.bindingElement.innerHTML=Client.fixUI(_581);
this.attachRecursive();
};
Binding.prototype.getProperty=function(_582){
var _583=this.bindingElement.getAttribute(_582);
if(_583){
_583=Types.castFromString(_583);
}
return _583;
};
Binding.prototype.setProperty=function(prop,_585){
if(_585!=null){
_585=_585.toString();
if(String(this.bindingElement.getAttribute(prop))!=_585){
this.bindingElement.setAttribute(prop,_585);
if(this.isAttached==true){
if(Persistance.isEnabled&&_585!=null){
if(this._persist!=null&&this._persist[prop]){
this._persist[prop]=_585;
Persistance.setPersistedProperty(this.bindingElement.id,prop,_585);
}
}
var _586=this.propertyMethodMap[prop];
if(_586){
_586.call(this,this.getProperty(prop));
}
}
}
}else{
this.deleteProperty(prop);
}
};
Binding.prototype.deleteProperty=function(prop){
this.bindingElement.removeAttribute(prop);
};
Binding.prototype.getID=function(){
var _588=null;
if(Binding.exists(this)){
_588=this.bindingElement.id;
}else{
SystemDebug.stack(arguments);
}
return _588;
};
Binding.prototype.attachClassName=function(_589){
CSSUtil.attachClassName(this.bindingElement,_589);
};
Binding.prototype.detachClassName=function(_58a){
CSSUtil.detachClassName(this.bindingElement,_58a);
};
Binding.prototype.hasClassName=function(_58b){
return CSSUtil.hasClassName(this.bindingElement,_58b);
};
Binding.prototype.addActionListener=function(type,_58d){
_58d=_58d!=null?_58d:this;
if(Action.isValid(type)){
if(Interfaces.isImplemented(IActionListener,_58d)){
if(!this.actionListeners[type]){
this.actionListeners[type]=[];
}
this.actionListeners[type].push(_58d);
}else{
throw new Error("Could not add action-event listener. Method handleAction not implemented.");
}
}else{
alert(this+"\nCould not add undefined Action ("+_58d+")");
}
};
Binding.prototype.removeActionListener=function(type,_58f){
_58f=_58f?_58f:this;
if(Action.isValid(type)){
var _590=this.actionListeners[type];
if(_590){
var i=0,_592;
while((_592=_590[i])!=null){
if(_592==_58f){
_590.splice(i,1);
break;
}
i++;
}
}
}
};
Binding.prototype.addEventListener=function(type,_594){
_594=_594?_594:this;
DOMEvents.addEventListener(this.bindingElement,type,_594);
};
Binding.prototype.removeEventListener=function(type,_596){
_596=_596?_596:this;
DOMEvents.removeEventListener(this.bindingElement,type,_596);
};
Binding.prototype.subscribe=function(_597){
if(!this.hasSubscription(_597)){
this._subscriptions.set(_597,true);
EventBroadcaster.subscribe(_597,this);
}else{
this.logger.error("Dubplicate subscription aborted:"+_597);
}
};
Binding.prototype.unsubscribe=function(_598){
if(this.hasSubscription(_598)){
this._subscriptions.del(_598);
EventBroadcaster.unsubscribe(_598,this);
}
};
Binding.prototype.hasSubscription=function(_599){
return this._subscriptions.has(_599);
};
Binding.prototype.observe=function(_59a,_59b){
_59a.addObserver(this,_59b);
};
Binding.prototype.unObserve=function(_59c,_59d){
_59c.removeObserver(this,_59d);
};
Binding.prototype.setContextMenu=function(arg){
this.contextMenuBinding=this.getBindingForArgument(arg);
if(this.contextMenuBinding){
var self=this;
var menu=this.contextMenuBinding;
this.addEventListener(DOMEvents.CONTEXTMENU,{handleEvent:function(e){
if(Interfaces.isImplemented(IActionListener,self)==true){
var _5a2={handleAction:function(){
menu.removeActionListener(MenuItemBinding.ACTION_COMMAND,self);
menu.removeActionListener(PopupBinding.ACTION_HIDE,_5a2);
}};
menu.addActionListener(MenuItemBinding.ACTION_COMMAND,self);
menu.addActionListener(PopupBinding.ACTION_HIDE,_5a2);
}
menu.snapToMouse(e);
}});
}else{
throw "No such contextmenu: "+arg;
}
};
Binding.prototype.getContextMenu=function(){
return this.contextMenuBinding;
};
Binding.prototype.dispatchAction=function(arg){
var _5a4=null;
var _5a5=null;
var _5a6=false;
if(arg instanceof Action){
_5a4=arg;
}else{
if(Action.isValid(arg)){
_5a4=new Action(this,arg);
_5a6=true;
}
}
if(_5a4!=null&&Action.isValid(_5a4.type)==true){
if(_5a4.isConsumed==true){
_5a5=_5a4;
}else{
var _5a7=this.actionListeners[_5a4.type];
if(_5a7!=null){
_5a4.listener=this;
var i=0,_5a9;
while((_5a9=_5a7[i++])!=null){
if(_5a9&&_5a9.handleAction){
_5a9.handleAction(_5a4);
}
}
}
var _5aa=true;
if(this.isBlockingActions==true){
switch(_5a4.type){
case Binding.ACTION_FOCUSED:
case Binding.ACTION_BLURRED:
case Binding.ACTION_ACTIVATED:
case Binding.ACTION_FORCE_REFLEX:
case DockTabBinding.ACTION_UPDATE_VISUAL:
case PageBinding.ACTION_DOPOSTBACK:
break;
default:
if(!_5a6){
_5aa=false;
}
break;
}
}
if(_5aa){
_5a5=this.migrateAction(_5a4);
}else{
_5a5=_5a4;
}
}
}
return _5a5;
};
Binding.prototype.migrateAction=function(_5ab){
var _5ac=null;
var _5ad=null;
var node=this.getMigrationParent();
if(node){
while(node&&!_5ac&&node.nodeType!=Node.DOCUMENT_NODE){
_5ac=UserInterface.getBinding(node);
node=node.parentNode;
}
if(_5ac){
_5ad=_5ac.dispatchAction(_5ab);
}else{
_5ad=_5ab;
}
}
return _5ad;
};
Binding.prototype.reflex=function(_5af){
if(Application.isOperational==true){
FlexBoxBinding.reflex(this,_5af);
}
};
Binding.prototype.getMigrationParent=function(){
var _5b0=null;
if(true){
try{
var _5b1=this.bindingElement.parentNode;
if(_5b1!=null){
_5b0=_5b1;
}
}
catch(wtfException){
this.logger.error("Binding#getMigrationParent exception");
SystemDebug.stack(arguments);
_5b0=null;
}
}
return _5b0;
};
Binding.prototype.add=function(_5b2){
if(_5b2.bindingDocument==this.bindingDocument){
this.bindingElement.appendChild(_5b2.bindingElement);
}else{
throw "Could not add "+_5b2.toString()+" of different document origin.";
}
return _5b2;
};
Binding.prototype.addFirst=function(_5b3){
if(_5b3.bindingDocument==this.bindingDocument){
this.bindingElement.insertBefore(_5b3.bindingElement,this.bindingElement.firstChild);
}else{
throw "Could not add "+_5b3.toString()+" of different document origin.";
}
return _5b3;
};
Binding.prototype.getAncestorBindingByLocalName=function(_5b4,_5b5){
return BindingFinder.getAncestorBindingByLocalName(this,_5b4,_5b5);
};
Binding.prototype.getAncestorBindingByType=function(impl,_5b7){
return BindingFinder.getAncestorBindingByType(this,impl,_5b7);
};
Binding.prototype.getChildBindingByType=function(impl){
return BindingFinder.getChildBindingByType(this,impl);
};
Binding.prototype.getChildElementsByLocalName=function(_5b9){
return BindingFinder.getChildElementsByLocalName(this,_5b9);
};
Binding.prototype.getChildElementByLocalName=function(_5ba){
return this.getChildElementsByLocalName(_5ba).getFirst();
};
Binding.prototype.getDescendantElementsByLocalName=function(_5bb){
return new List(DOMUtil.getElementsByTagName(this.bindingElement,_5bb));
};
Binding.prototype.getChildBindingsByLocalName=function(_5bc){
return this.getDescendantBindingsByLocalName(_5bc,true);
};
Binding.prototype.getChildBindingByLocalName=function(_5bd){
return this.getChildBindingsByLocalName(_5bd).getFirst();
};
Binding.prototype.getDescendantBindingsByLocalName=function(_5be,_5bf){
return BindingFinder.getDescendantBindingsByLocalName(this,_5be,_5bf);
};
Binding.prototype.getDescendantBindingByLocalName=function(_5c0){
return this.getDescendantBindingsByLocalName(_5c0,false).getFirst();
};
Binding.prototype.getDescendantBindingsByType=function(impl){
return BindingFinder.getDescendantBindingsByType(this,impl);
};
Binding.prototype.getDescendantBindingByType=function(impl){
return BindingFinder.getDescendantBindingByType(this,impl);
};
Binding.prototype.getNextBindingByLocalName=function(_5c3){
return BindingFinder.getNextBindingByLocalName(this,_5c3);
};
Binding.prototype.getPreviousBindingByLocalName=function(_5c4){
return BindingFinder.getPreviousBindingByLocalName(this,_5c4);
};
Binding.prototype.getBindingElement=function(){
return this.bindingDocument.getElementById(this.bindingElement.id);
};
Binding.prototype.getOrdinalPosition=function(_5c5){
return DOMUtil.getOrdinalPosition(this.bindingElement,_5c5);
};
Binding.prototype.isFirstBinding=function(_5c6){
return (this.getOrdinalPosition(_5c6)==0);
};
Binding.prototype.isLastBinding=function(_5c7){
return DOMUtil.isLastElement(this.bindingElement,_5c7);
};
Binding.prototype.hasCallBackID=function(){
return this.getProperty(Binding.CALLBACKID)!=null;
};
Binding.prototype.getCallBackID=function(){
return this.getProperty(Binding.CALLBACKID);
};
Binding.prototype.setCallBackID=function(id){
this.setProperty(Binding.CALLBACKID,id);
};
Binding.prototype.hasCallBackArg=function(){
return this.getCallBackArg()!=null;
};
Binding.prototype.getCallBackArg=function(){
return this.getProperty(Binding.CALLBACKARG);
};
Binding.prototype.setCallBackArg=function(_5c9){
this.setProperty(Binding.CALLBACKARG,_5c9);
};
Binding.prototype.dispose=function(_5ca){
if(!this.isDisposed){
if(!_5ca){
this.bindingWindow.DocumentManager.detachBindings(this.bindingElement);
var _5cb=this.bindingDocument.getElementById(this.bindingElement.id);
if(_5cb){
if(Client.isExplorer){
_5cb.outerHTML="";
}else{
_5cb.parentNode.removeChild(_5cb);
}
}
}else{
if(this._subscriptions.hasEntries()){
var self=this;
var list=new List();
this._subscriptions.each(function(_5ce){
list.add(_5ce);
});
list.each(function(_5cf){
self.unsubscribe(_5cf);
});
}
this.onBindingDispose();
UserInterface.unRegisterBinding(this);
}
}
};
Binding.prototype.onBindingDispose=function(){
if(this._hasActivationAwareness){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this,false);
this._hasActivationAwareness=false;
}
this._updateBindingMap(false);
};
Binding.prototype.enableDragging=function(){
if(this.dragger==null){
this.dragger=new BindingDragger(this);
this.addEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.addEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.addEventListener(DOMEvents.MOUSEUP,this.dragger);
}
this.isDraggable=true;
};
Binding.prototype.disableDragging=function(){
if(this.dragger!=null){
this.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.dragger.dispose();
this.dragger=null;
}
this.isDraggable=false;
};
Binding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.display="block";
this.setProperty("hidden",true);
this.isVisible=true;
}
};
Binding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.display="none";
this.deleteProperty("hidden");
this.isVisible=false;
}
};
Binding.prototype.wakeUp=function(_5d1,_5d2){
_5d2=_5d2?_5d2:Binding.SNOOZE;
if(this.isLazy==true){
this.deleteProperty("lazy");
this.isLazy=false;
Application.lock(this);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
var self=this;
setTimeout(function(){
self.attachRecursive();
setTimeout(function(){
if(_5d1!==undefined){
self[_5d1]();
}
LazyBindingBinding.wakeUp(self);
Application.unlock(self);
},_5d2);
},0);
}
};
Binding.prototype.handleCrawler=function(_5d4){
if(_5d4.response==null&&this.isLazy==true){
if(_5d4.id==DocumentCrawler.ID&&_5d4.mode==DocumentCrawler.MODE_REGISTER){
_5d4.response=NodeCrawler.NORMAL;
}else{
_5d4.response=NodeCrawler.SKIP_CHILDREN;
}
}
if(_5d4.response==null&&this.crawlerFilters!=null){
if(this.crawlerFilters.has(_5d4.id)){
_5d4.response=NodeCrawler.SKIP_CHILDREN;
}
}
if(_5d4.response==null){
switch(_5d4.id){
case FlexBoxCrawler.ID:
case FocusCrawler.ID:
if(!this.isVisible){
_5d4.response=NodeCrawler.SKIP_CHILDREN;
}
break;
}
}
};
Binding.newInstance=function(_5d5){
var _5d6=DOMUtil.createElementNS(Constants.NS_UI,"ui:binding",_5d5);
return UserInterface.registerBinding(_5d6,Binding);
};
DataBinding.prototype=new Binding;
DataBinding.prototype.constructor=DataBinding;
DataBinding.superclass=Binding.prototype;
DataBinding.AUTOGENERATED="autogenerateddatabindingname";
DataBinding.TYPE_NUMBER="number";
DataBinding.TYPE_INTEGER="integer";
DataBinding.TYPE_STRING="string";
DataBinding.CLASSNAME_INVALID="invalid";
DataBinding.CLASSNAME_INFOBOX="infobox";
DataBinding.CLASSNAME_WARNING="warning";
DataBinding.CLASSNAME_FOCUSED="focused";
DataBinding.CLASSNAME_DISABLED="disabled";
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,{handleBroadcast:function(){
var _5d7=new List(ConfigurationService.GetValidatingRegularExpressions("dummy"));
_5d7.each(function(_5d8){
DataBinding.expressions[_5d8.Key]=new RegExp(_5d8.Value);
});
}});
DataBinding.expressions={};
DataBinding.warnings={"required":"Required","number":"Numbers only","integer":"Integers only","programmingidentifier":"Invalid identifier","programmingnamespace":"Invalid namespace","url":"Invalid URL","minlength":"${count} characters minimum","maxlength":"${count} characters maximum","currency":"Invalid notation","email":"Invalid e-mail","guid":"Invalid GUID"};
DataBinding.errors={"programmingidentifier":"An identifier must not contain spaces or special characters. Only characters a-z, A-Z, 0-9 and '_' are allowed. An identifier must begin with a letter (not a number).","programmingnamespace":"A namespace must take the form Example.Name.Space where only characters a-z, A-Z, 0-9, '_' and dots (.) are allowed. Each part of the namespace must begin with a letter (not a number).","url":"A valid URL must begin with a forward slash, designating the site root, or an URL scheme name such as http://. Simpliefied addresses such as www.example.com cannot be resolved reliably by the browser. Relative URLs are not supported."};
DataBinding.getAssociatedLabel=function(_5d9){
var _5da=null;
var _5db=_5d9.getAncestorBindingByLocalName("field");
if(_5db&&_5db instanceof FieldBinding){
var desc=_5db.getDescendantBindingByLocalName("fielddesc");
if(desc&&desc instanceof FieldDescBinding){
_5da=desc.getLabel();
}
}
return _5da;
};
function DataBinding(){
this.logger=SystemLogger.getLogger("DataBinding");
this._name=null;
this.isDirty=false;
this.isFocusable=true;
this.isFocused=false;
this.error=null;
return this;
}
DataBinding.prototype.toString=function(){
return "[DataBinding]";
};
DataBinding.prototype.onBindingRegister=function(){
DataBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
var name=this._name?this._name:this.getProperty("name");
if(name==null){
name=DataBinding.AUTOGENERATED+KeyMaster.getUniqueKey();
}
this.setName(name);
};
DataBinding.prototype.onBindingAttach=function(){
DataBinding.superclass.onBindingAttach.call(this);
if(this.getProperty("error")){
this.error=this.getProperty("error");
}
};
DataBinding.prototype.onBindingDispose=function(){
DataBinding.superclass.onBindingDispose.call(this);
if(this.isFocused==true){
this.blur();
}
var _5de=this.bindingWindow.DataManager;
_5de.unRegisterDataBinding(this._name);
};
DataBinding.prototype.setName=function(name){
var _5e0=this.bindingWindow.DataManager;
if(_5e0.getDataBinding(name)){
_5e0.unRegisterDataBinding(name);
}
_5e0.registerDataBinding(name,this);
this.setProperty("name",name);
this._name=name;
};
DataBinding.prototype.getName=function(){
return this._name;
};
DataBinding.prototype.focus=function(){
if(this.isFocusable&&!this.isFocused){
this.isFocused=true;
this.dispatchAction(Binding.ACTION_FOCUSED);
this.attachClassName(DataBinding.CLASSNAME_FOCUSED);
}
};
DataBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.dispatchAction(Binding.ACTION_BLURRED);
this.detachClassName(DataBinding.CLASSNAME_FOCUSED);
}
};
DataBinding.prototype.dirty=function(){
this.bindingWindow.DataManager.dirty(this);
};
DataBinding.prototype.clean=function(){
this.bindingWindow.DataManager.clean(this);
};
DataBinding.prototype.validate=Binding.ABSTRACT_METHOD;
DataBinding.prototype.manifest=Binding.ABSTRACT_METHOD;
DataBinding.prototype.getValue=Binding.ABSTRACT_METHOD;
DataBinding.prototype.setValue=Binding.ABSTRACT_METHOD;
DataBinding.prototype.getResult=Binding.ABSTRACT_METHOD;
DataBinding.prototype.setResult=Binding.ABSTRACT_METHOD;
RootBinding.prototype=new Binding;
RootBinding.prototype.constructor=RootBinding;
RootBinding.superclass=Binding.prototype;
RootBinding.ACTION_PHASE_1="root init phase 1";
RootBinding.ACTION_PHASE_2="root init phase 2";
RootBinding.ACTION_PHASE_3="root init phase 3";
RootBinding.ACTION_ACTIVATED="root activated";
RootBinding.ACTION_DEACTIVATED="root deactivated";
function RootBinding(){
this.logger=SystemLogger.getLogger("RootBinding");
this.isActivationAware=false;
this.isActivated=false;
this._activationawares=null;
return this;
}
RootBinding.prototype.toString=function(){
return "[RootBinding]";
};
RootBinding.prototype.onBindingRegister=function(){
RootBinding.superclass.onBindingRegister.call(this);
this.logger=SystemLogger.getLogger(this.bindingDocument.title.toString());
if(this.bindingWindow.WindowManager){
this.subscribe(this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST);
}
this._activationawares=new List();
this.isActivated=false;
this._setupActivationAwareness(true);
};
RootBinding.prototype.onBindingDispose=function(){
RootBinding.superclass.onBindingDispose.call(this);
this._setupActivationAwareness(false);
EventBroadcaster.unsubscribe(this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST,this);
};
RootBinding.prototype.handleBroadcast=function(_5e1,arg){
RootBinding.superclass.handleBroadcast.call(this,_5e1,arg);
var _5e3=this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST;
switch(_5e1){
case _5e3:
this.dispatchAction(RootBinding.ACTION_PHASE_1);
this.dispatchAction(RootBinding.ACTION_PHASE_2);
this.dispatchAction(RootBinding.ACTION_PHASE_3);
this.unsubscribe(_5e3);
break;
}
};
RootBinding.prototype.onActivate=function(){
this._onActivationChanged(true);
};
RootBinding.prototype.onDeactivate=function(){
this._onActivationChanged(false);
};
RootBinding.prototype._onActivationChanged=function(_5e4){
var _5e5=_5e4?RootBinding.ACTION_ACTIVATED:RootBinding.ACTION_DEACTIVATED;
if(_5e4!=this.isActivated){
this.isActivated=_5e4;
this.dispatchAction(_5e5);
var _5e6=new List();
var self=this;
this._activationawares.each(function(_5e8){
if(_5e8.isActivationAware){
try{
if(_5e4){
if(!_5e8.isActivated){
_5e8.onActivate();
}
}else{
if(_5e8.isActivated){
_5e8.onDeactivate();
}
}
}
catch(exception){
self.logger.error(exception);
_5e6.add(_5e8);
}
}
});
_5e6.each(function(_5e9){
this._activationawares.del(_5e9);
});
_5e6.dispose();
}else{
var _5ea="Activation dysfunction: "+this.bindingDocument.title;
if(Application.isDeveloperMode==true){
this.logger.error(_5ea);
}else{
this.logger.error(_5ea);
}
}
};
RootBinding.prototype.makeActivationAware=function(_5eb,_5ec){
if(Interfaces.isImplemented(IActivationAware,_5eb,true)==true){
if(_5ec==false){
this._activationawares.del(_5eb);
}else{
this._activationawares.add(_5eb);
if(this.isActivated==true){
_5eb.onActivate();
}
}
}else{
if(Application.isDeveloperMode==true){
alert("RootBinding: IActivationAware not implemented ("+_5eb+")");
}
}
};
RootBinding.prototype._setupActivationAwareness=function(_5ed){
var _5ee=this.getMigrationParent();
if(_5ee!=null){
var root=_5ee.ownerDocument.body;
var _5f0=UserInterface.getBinding(root);
if(_5f0!=null){
_5f0.makeActivationAware(this,_5ed);
}
}
};
RootBinding.prototype.handleCrawler=function(_5f1){
RootBinding.superclass.handleCrawler.call(this,_5f1);
if(_5f1.type==NodeCrawler.TYPE_ASCENDING){
_5f1.nextNode=this.bindingWindow.frameElement;
}
};
RootBinding.prototype.getMigrationParent=function(){
var _5f2=null;
if(this.bindingWindow.parent){
_5f2=this.bindingWindow.frameElement;
}
return _5f2;
};
MatrixBinding.prototype=new Binding;
MatrixBinding.prototype.constructor=MatrixBinding;
MatrixBinding.superclass=Binding.prototype;
MatrixBinding.CLASSNAME_MANIFESTER="matrixbindingmanifester";
MatrixBinding.CENTER="c";
MatrixBinding.NORTH="n";
MatrixBinding.SOUTH="s";
MatrixBinding.EAST="e";
MatrixBinding.WEST="w";
MatrixBinding.NORTHEAST="ne";
MatrixBinding.NORTHWEST="nw";
MatrixBinding.SOUTHEAST="se";
MatrixBinding.SOUTHWEST="sw";
MatrixBinding.markup=null;
function MatrixBinding(){
this.logger=SystemLogger.getLogger("MatrixBinding");
this.hasMatrix=true;
this.template="matrixbindingelement.xml";
this._isTableIndexed=false;
return this;
}
MatrixBinding.prototype.toString=function(){
return "[MatrixBinding]";
};
MatrixBinding.prototype.onBindingAttach=function(){
MatrixBinding.superclass.onBindingAttach.call(this);
if(this.hasMatrix){
this.bindingElement.innerHTML=Templates.getTemplateElementText(this.template);
this.shadowTree.table=this.bindingElement.firstChild;
}
};
MatrixBinding.prototype._indexTable=function(){
var _5f3=new List(DOMUtil.getElementsByTagName(this.bindingElement,"td"));
while(_5f3.hasNext()){
var cell=_5f3.getNext();
this.shadowTree[cell.className]=cell;
}
};
MatrixBinding.prototype.add=function(_5f5){
var _5f6=null;
if(this.hasMatrix){
if(!this._isTableIndexed){
this._indexTable();
}
this.shadowTree[MatrixBinding.CENTER].appendChild(_5f5.bindingElement);
_5f6=_5f5;
}else{
_5f6=MatrixBinding.superclass.add.call(this,_5f5);
}
return _5f6;
};
MatrixBinding.prototype.addFirst=function(_5f7){
var _5f8=null;
if(this.hasMatrix){
if(!this._isTableIndexed){
this._indexTable();
}
var _5f9=this.shadowTree[MatrixBinding.CENTER];
_5f9.insertBefore(_5f7.bindingElement,_5f9.firstChild);
_5f8=_5f7;
}else{
_5f8=MatrixBinding.superclass.addFirst.call(this,_5f7);
}
return _5f7;
};
MatrixBinding.prototype.manifest=function(){
if(!this._isTableIndexed){
this._indexTable();
}
var div=this.bindingDocument.createElement("div");
div.appendChild(this.bindingDocument.createTextNode("!"));
div.className=MatrixBinding.CLASSNAME_MANIFESTER;
this.shadowTree[MatrixBinding.CENTER].appendChild(div);
};
MatrixBinding.newInstance=function(_5fb){
var _5fc=DOMUtil.createElementNS(Constants.NS_UI,"ui:matrix",_5fb);
return UserInterface.registerBinding(_5fc,MatrixBinding);
};
FlexBoxBinding.prototype=new Binding;
FlexBoxBinding.prototype.constructor=FlexBoxBinding;
FlexBoxBinding.superclass=Binding.prototype;
FlexBoxBinding.CLASSNAME="flexboxelement";
FlexBoxBinding.TIMEOUT=250;
FlexBoxBinding.reflex=function(_5fd,_5fe){
var list=new List();
var _600=new FlexBoxCrawler();
_600.mode=_5fe?FlexBoxCrawler.MODE_FORCE:FlexBoxCrawler.MODE_NORMAL;
_600.startBinding=_5fd;
_600.crawl(_5fd.bindingElement,list);
list.each(function(_601){
_601.flex();
});
if(Client.isExplorer){
setTimeout(function(){
list.each(function(_602){
if(Binding.exists(_602)){
_602.flex();
}
});
},0.5*FlexBoxBinding.TIMEOUT);
}
setTimeout(function(){
list.each(function(_603){
if(Binding.exists(_603)){
_603.isFlexSuspended=false;
}
});
list.dispose();
},FlexBoxBinding.TIMEOUT);
_600.dispose();
};
function FlexBoxBinding(){
this.logger=SystemLogger.getLogger("FlexBoxBinding");
this.isFlexSuspended=false;
this.isFlexible=true;
this.isFit=true;
return this;
}
FlexBoxBinding.prototype.toString=function(){
return "[FlexBoxBinding]";
};
FlexBoxBinding.prototype.onBindingRegister=function(){
FlexBoxBinding.superclass.onBindingRegister.call(this);
if(this.getProperty("flex")==false){
this.isFlexible=false;
}
if(this.isFlexible){
this.attachClassName(FlexBoxBinding.CLASSNAME);
}
};
FlexBoxBinding.prototype.onBindingAttach=function(){
FlexBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_UPDATED);
};
FlexBoxBinding.prototype.handleAction=function(_604){
FlexBoxBinding.superclass.handleAction.call(this,_604);
switch(_604.type){
case Binding.ACTION_UPDATED:
this.isFit=false;
break;
}
};
FlexBoxBinding.prototype._getSiblingsSpan=function(_605){
var _606=0;
var _607=new List(this.bindingElement.parentNode.childNodes);
while(_607.hasNext()){
var _608=_607.getNext();
if(_608.nodeType==Node.ELEMENT_NODE&&_608!=this.bindingElement){
if(!this._isOutOfFlow(_608)){
var rect=_608.getBoundingClientRect();
if(_605){
height+=(rect.right-rect.left);
}else{
_606+=(rect.bottom-rect.top);
}
}
}
}
return _606;
};
FlexBoxBinding.prototype._isOutOfFlow=function(_60a){
var _60b=CSSComputer.getPosition(_60a);
var _60c=CSSComputer.getFloat(_60a);
return (_60b=="absolute"||_60c!="none"?true:false);
};
FlexBoxBinding.prototype._getCalculatedHeight=function(){
var _60d=this.bindingElement.parentNode;
var rect=_60d.getBoundingClientRect();
var _60f=rect.bottom-rect.top;
var _610=CSSComputer.getPadding(_60d);
var _611=CSSComputer.getBorder(_60d);
_60f-=(_610.top+_610.bottom);
_60f-=(_611.top+_611.bottom);
return _60f;
};
FlexBoxBinding.prototype._getCalculatedWidth=function(){
var _612=this.bindingElement.parentNode;
var rect=_612.getBoundingClientRect();
var _614=rect.right-rect.left;
var _615=CSSComputer.getPadding(_612);
var _616=CSSComputer.getBorder(_612);
_614-=(_615.left+_615.right);
_614-=(_616.left+_616.right);
return _614;
};
FlexBoxBinding.prototype.setFlexibility=function(_617){
if(_617!=this.isFlexible){
if(_617){
this.attachClassName(FlexBoxBinding.CLASSNAME);
this.deleteProperty("flex");
}else{
this.detachClassName(FlexBoxBinding.CLASSNAME);
this.setProperty("flex",false);
}
this.isFlexible=_617;
}
};
FlexBoxBinding.prototype.flex=function(){
if(Binding.exists(this)){
if(this.isFlexible==true){
var _618=this._getSiblingsSpan();
_618=this._getCalculatedHeight()-_618;
if(!isNaN(_618)&&_618>=0){
if(_618!=this.bindingElement.offsetHeight){
this.bindingElement.style.height=String(_618)+"px";
}
}
}
}
};
FlexBoxBinding.prototype.fit=function(_619){
if(!this.isFit||_619){
var _61a=0;
new List(this.bindingElement.childNodes).each(function(_61b){
if(_61b.nodeType==Node.ELEMENT_NODE){
if(!this._isOutOfFlow(_61b)){
var rect=_61b.getBoundingClientRect();
_61a+=(rect.bottom-rect.top);
}
}
},this);
this._setFitnessHeight(_61a);
this.isFit=true;
}
};
FlexBoxBinding.prototype._setFitnessHeight=function(_61d){
var _61e=CSSComputer.getPadding(this.bindingElement);
var _61f=CSSComputer.getBorder(this.bindingElement);
_61d+=_61e.top+_61e.bottom;
_61d+=_61f.top+_61f.bottom;
this.bindingElement.style.height=_61d+"px";
};
ScrollBoxBinding.prototype=new FlexBoxBinding;
ScrollBoxBinding.prototype.constructor=ScrollBoxBinding;
ScrollBoxBinding.superclass=FlexBoxBinding.prototype;
function ScrollBoxBinding(){
this.logger=SystemLogger.getLogger("ScrollBoxBinding");
}
ScrollBoxBinding.prototype.toString=function(){
return "[ScrollBoxBinding]";
};
ScrollBoxBinding.prototype.onBindingRegister=function(){
ScrollBoxBinding.superclass.onBindingRegister.call(this);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
};
ScrollBoxBinding.prototype.handleAction=function(_620){
ScrollBoxBinding.superclass.handleAction.call(this,_620);
switch(_620.type){
case BalloonBinding.ACTION_INITIALIZE:
_620.consume();
break;
}
};
ScrollBoxBinding.prototype.setPosition=function(_621){
this.bindingElement.scrollLeft=_621.x;
this.bindingElement.scrollTop=_621.y;
};
ScrollBoxBinding.prototype.getPosition=function(){
return new Point(this.bindingElement.scrollLeft,this.bindingElement.scrollTop);
};
LabelBinding.prototype=new Binding;
LabelBinding.prototype.constructor=LabelBinding;
LabelBinding.superclass=Binding.prototype;
LabelBinding.DIALOG_INDECATOR_SUFFIX=String.fromCharCode(8230);
LabelBinding.DEFAULT_IMAGE="${root}/images/blank.png";
LabelBinding.EXPLORER_IMAGE_FILTER="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${url}',sizingMethod='crop');";
LabelBinding.CLASSNAME_GRAYTEXT="graytext";
LabelBinding.CLASSNAME_FLIPPED="flipped";
function LabelBinding(){
this.logger=SystemLogger.getLogger("LabelBinding");
this.hasImage=false;
this.hasLabel=false;
this.isFlipped=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
LabelBinding.prototype.toString=function(){
return "[LabelBinding]";
};
LabelBinding.prototype.onBindingRegister=function(){
LabelBinding.superclass.onBindingRegister.call(this);
if(this.isBindingBuild){
this.shadowTree.labelBody=this._getBuildElement("labelbody");
}else{
this.shadowTree.labelBody=DOMUtil.createElementNS(Constants.NS_UI,"ui:labelbody",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.labelBody);
}
};
LabelBinding.prototype.onBindingAttach=function(){
LabelBinding.superclass.onBindingAttach.call(this);
if(this.isBindingBuild){
var _622=this._getBuildElement("labeltext");
if(_622){
this.shadowTree.labelText=_622;
this.shadowTree.text=_622.firstChild;
this.hasLabel=true;
}
}else{
var _623=this.getProperty("label");
var _624=this.getProperty("image");
var _625=this.getProperty("tooltip");
if(_623){
this.setLabel(_623,false);
}
if(_624){
this.setImage(_624,false);
}
if(_625){
this.setToolTip(_625);
}
this.buildClassName();
}
};
LabelBinding.prototype.setLabel=function(_626,_627){
_626=_626!=null?_626:"";
if(!this.hasLabel){
this.buildLabel();
}
this.shadowTree.text.data=Resolver.resolve(_626);
this.setProperty("label",_626);
if(!_627){
this.buildClassName();
}
};
LabelBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
LabelBinding.prototype.setImage=function(url,_629){
if(url!=false){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setAlphaTransparentBackdrop(Resolver.resolve(url));
this.setProperty("image",url);
this.hasImage=true;
if(!_629){
this.buildClassName();
}
}else{
this.setAlphaTransparentBackdrop(false);
this.deleteProperty("image");
this.hasImage=false;
this.buildClassName();
}
};
LabelBinding.prototype.setDefaultImage=function(url){
this.setImage(LabelBinding.DEFAULT_IMAGE);
};
LabelBinding.prototype.setAlphaTransparentBackdrop=function(url){
if(this.shadowTree.labelBody){
if(url!=false){
url=Resolver.resolve(url);
if(Client.isExplorer6){
this.shadowTree.labelBody.style.filter=LabelBinding.EXPLORER_IMAGE_FILTER.replace("${url}",url);
}else{
this.shadowTree.labelBody.style.backgroundImage="url('"+url+"')";
}
}else{
if(Client.isExplorer6){
this.shadowTree.labelBody.style.filter="none";
}else{
this.shadowTree.labelBody.style.backgroundImage="none";
}
}
}
};
LabelBinding.prototype.getImage=function(){
return this.getProperty("image");
};
LabelBinding.prototype.setToolTip=function(_62c){
this.setProperty("tooltip",_62c);
if(_62c!=this.getLabel()){
this.setProperty("title",Resolver.resolve(_62c));
}
};
LabelBinding.prototype.getToolTip=function(_62d){
return this.getProperty("tooltip");
};
LabelBinding.prototype.flip=function(_62e){
_62e=_62e==null?true:_62e;
var _62f=LabelBinding.CLASSNAME_FLIPPED;
if(!Client.isExplorer6){
this.isFlipped=_62e;
if(_62e){
this.attachClassName(_62f);
}else{
this.detachClassName(_62f);
}
}
};
LabelBinding.prototype.buildLabel=function(){
if(!this.hasLabel){
this.shadowTree.labelText=DOMUtil.createElementNS(Constants.NS_UI,"ui:labeltext",this.bindingDocument);
this.shadowTree.text=this.bindingDocument.createTextNode("");
this.shadowTree.labelText.appendChild(this.shadowTree.text);
this.shadowTree.labelBody.appendChild(this.shadowTree.labelText);
this.hasLabel=true;
}
};
LabelBinding.prototype.buildClassName=function(){
var _630="textonly";
var _631="imageonly";
var _632="both";
if(this.hasLabel&&this.hasImage){
this.detachClassName(_630);
this.detachClassName(_631);
this.attachClassName(_632);
}else{
if(this.hasLabel){
this.detachClassName(_632);
this.detachClassName(_631);
this.attachClassName(_630);
}else{
if(this.hasImage){
this.detachClassName(_632);
this.detachClassName(_630);
this.attachClassName(_631);
}
}
}
};
LabelBinding.newInstance=function(_633){
var _634=DOMUtil.createElementNS(Constants.NS_UI,"ui:labelbox",_633);
return UserInterface.registerBinding(_634,LabelBinding);
};
TextBinding.prototype=new Binding;
TextBinding.prototype.constructor=TextBinding;
TextBinding.superclass=Binding.prototype;
function TextBinding(){
this.logger=SystemLogger.getLogger("TextBinding");
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TextBinding.prototype.toString=function(){
return "[TextBinding]";
};
TextBinding.prototype.onBindingAttach=function(){
TextBinding.superclass.onBindingAttach.call(this);
var _635=this.getProperty("label");
if(!_635){
_635=DOMUtil.getTextContent(this.bindingElement);
}
var text=this.bindingDocument.createTextNode(Resolver.resolve(_635));
this.bindingElement.parentNode.replaceChild(text,this.bindingElement);
this.dispose();
};
TextBinding.prototype.setLabel=function(_637){
this.setProperty("label",_637);
};
TextBinding.newInstance=function(_638){
var _639=DOMUtil.createElementNS(Constants.NS_UI,"ui:text",_638);
return UserInterface.registerBinding(_639,TextBinding);
};
BroadcasterSetBinding.prototype=new Binding;
BroadcasterSetBinding.prototype.constructor=BroadcasterSetBinding;
BroadcasterSetBinding.superclass=Binding.prototype;
function BroadcasterSetBinding(){
this.logger=SystemLogger.getLogger("BroadcasterSetBinding");
}
BroadcasterSetBinding.prototype.toString=function(){
return "[BroadcasterSetBinding]";
};
BroadcasterBinding.prototype=new Binding;
BroadcasterBinding.prototype.constructor=BroadcasterBinding;
BroadcasterBinding.superclass=Binding.prototype;
function BroadcasterBinding(){
this.logger=SystemLogger.getLogger("BroadcasterBinding");
this._observers=null;
}
BroadcasterBinding.prototype.toString=function(){
return "[BroadcasterBinding]";
};
BroadcasterBinding.prototype.onBindingRegister=function(){
BroadcasterBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
this._observers=new List();
};
BroadcasterBinding.prototype.setProperty=function(_63a,_63b){
BroadcasterBinding.superclass.setProperty.call(this,_63a,_63b);
function update(list){
if(list){
list.each(function(_63d){
_63d.setProperty(_63a,_63b);
});
}
}
if(this._observers["*"]!=null){
update(this._observers["*"]);
}
var _63e=this._observers[_63a];
if(_63e){
update(_63e);
}
};
BroadcasterBinding.prototype.deleteProperty=function(_63f){
BroadcasterBinding.superclass.deleteProperty.call(this,_63f);
function update(list){
if(list){
list.each(function(_641){
_641.deleteProperty(_63f);
});
}
}
if(this._observers["*"]!=null){
update(this._observers["*"]);
}
var _642=this._observers[_63f];
if(_642){
update(_642);
}
};
BroadcasterBinding.prototype.addObserver=function(_643,_644){
_644=_644?_644:"*";
_644=new List(_644.split(" "));
while(_644.hasNext()){
var _645=_644.getNext();
switch(_645){
case "*":
this._setAllProperties(_643);
break;
default:
var _646=this.getProperty(_645);
_643.setProperty(_645,_646);
break;
}
if(!this._observers[_645]){
this._observers[_645]=new List();
}
this._observers[_645].add(_643);
}
};
BroadcasterBinding.prototype._setAllProperties=function(_647){
var atts=new List(this.bindingElement.attributes);
while(atts.hasNext()){
var att=atts.getNext();
if(att.specified){
var _64a=att.nodeName;
switch(_64a){
case "id":
case "key":
break;
default:
var _64b=this.getProperty(_64a);
_647.setProperty(_64a,_64b);
break;
}
}
}
};
BroadcasterBinding.prototype.removeObserver=function(_64c,_64d){
_64d=_64d?_64d:"*";
_64d=new List(_64d.split(" "));
while(_64d.hasNext()){
var list=this._observers[_64d.getNext()];
if(list){
while(list.hasNext()){
var _64f=list.getNext();
if(_64f==_64c){
list.del(_64f);
}
}
}
}
};
BroadcasterBinding.prototype.disable=function(){
this.setDisabled(true);
};
BroadcasterBinding.prototype.enable=function(){
this.setDisabled(false);
};
BroadcasterBinding.prototype.setDisabled=function(_650){
this.setProperty("isdisabled",_650);
};
BroadcasterBinding.prototype.isDisabled=function(){
return this.getProperty("isdisabled")==true;
};
ButtonBinding.prototype=new Binding;
ButtonBinding.prototype.constructor=ButtonBinding;
ButtonBinding.superclass=Binding.prototype;
ButtonBinding.ACTION_COMMAND="buttoncommand";
ButtonBinding.ACTION_RADIOBUTTON_ATTACHED="radiobutton attached";
ButtonBinding.TYPE_CHECKBUTTON="checkbox";
ButtonBinding.TYPE_RADIOBUTTON="radio";
ButtonBinding.CLASSNAME_FOCUSABLE="focusable";
ButtonBinding.CLASSNAME_FOCUSED="focused";
ButtonBinding.CLASSNAME_DEFAULT="default";
function ButtonBinding(){
this.logger=SystemLogger.getLogger("ButtonBinding");
this.isCheckButton=false;
this.isRadioButton=false;
this.isComboButton=false;
this.isCheckBox=false;
this.isActive=false;
this.isChecked=false;
this.isDisabled=false;
this.isFocusable=false;
this._isFocusableButton=false;
this.isFocused=false;
this.isDefault=false;
this.popupBinding=null;
this.labelBinding=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.imageProfile=null;
this._stateManager=null;
this.response=null;
this.popupBindingTargetElement=null;
this.commandAction=ButtonBinding.ACTION_COMMAND;
this.isFlipped=false;
this.isDirty=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
}
ButtonBinding.prototype.toString=function(){
return "[ButtonBinding]";
};
ButtonBinding.prototype.onBindingRegister=function(){
ButtonBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
};
ButtonBinding.prototype.onBindingAttach=function(){
ButtonBinding.superclass.onBindingAttach.call(this);
this.parseDOMProperties();
this.buildDOMContent();
if(this.isRadioButton==true){
this.dispatchAction(ButtonBinding.ACTION_RADIOBUTTON_ATTACHED);
}
};
ButtonBinding.prototype.onBindingDispose=function(){
ButtonBinding.superclass.onBindingDispose.call(this);
if(this._stateManager!=null){
this._stateManager.dispose();
this._stateManager=null;
}
};
ButtonBinding.prototype.parseDOMProperties=function(){
Binding.imageProfile(this);
};
ButtonBinding.prototype.buildDOMContent=function(){
var tree=this.shadowTree;
var _652=this.getProperty("width");
var _653=this.getProperty("label");
var type=this.getProperty("type");
var _655=this.getProperty("popup");
var _656=this.getProperty("tooltip");
var _657=this.getProperty("isdisabled");
var _658=this.getProperty("response");
var _659=this.getProperty("oncommand");
var _65a=this.getProperty("value");
var _65b=this.getProperty("ischecked");
var _65c=this.getProperty("callbackid");
var _65d=this.getProperty("focusable");
var _65e=this.getProperty("focused");
var _65f=this.getProperty("default");
var url=this.getProperty("url");
var _661=this.getProperty("flip");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.add(this.labelBinding);
this.labelBinding.attach();
this.shadowTree.labelBinding=this.labelBinding;
if(_661){
this.flip(true);
}
if(!this._stateManager){
this._stateManager=new ButtonStateManager(this);
}
if(this.imageProfile!=null&&this.imageProfile.getDefaultImage()!=null){
this.setImage(this.imageProfile.getDefaultImage());
}
if(_653!=null){
this.setLabel(_653);
}
if(type!=null){
this.setType(type);
}
if(_656!=null){
this.setToolTip(_656);
}
if(_652!=null){
this.setWidth(_652);
}
if(_655!=null){
this.setPopup(_655);
}
if(_658!=null){
this.response=_658;
}
if(_65b==true){
if(this.isCheckButton||this.isRadioButton){
this.check(true);
}
}
if(_659!=null&&this.oncommand==null){
this.oncommand=function(){
Binding.evaluate(_659,this);
};
}
if(_65d||this.isFocusable){
this._makeFocusable();
if(_65f||this.isDefault){
this.isDefault=true;
}
if(_65e){
this.focus();
}
}
if(_657==true){
this.disable();
}
if(url!=null){
this.setURL(url);
}
if(_65c!=null){
this.bindingWindow.DataManager.registerDataBinding(_65c,this);
if(_65a!=null){
Binding.dotnetify(this,_65a);
}
if(this.oncommand==null){
this.oncommand=function(){
this.dirty();
if(this.getProperty("validate")==true){
this.dispatchAction(PageBinding.ACTION_DOVALIDATEDPOSTBACK);
}else{
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
};
}
}
};
ButtonBinding.prototype._makeFocusable=function(){
this.isFocusable=true;
this.attachClassName(ButtonBinding.CLASSNAME_FOCUSABLE);
this._isFocusableButton=true;
};
ButtonBinding.prototype.setImage=function(_662){
if(this.isAttached){
this.labelBinding.setImage(_662);
}
this.setProperty("image",_662);
};
ButtonBinding.prototype.getImage=function(){
return this.getProperty("image");
};
ButtonBinding.prototype.setLabel=function(_663){
if(this.isAttached){
this.labelBinding.setLabel(_663);
}
this.setProperty("label",_663);
};
ButtonBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
ButtonBinding.prototype.setType=function(type){
switch(type){
case ButtonBinding.TYPE_CHECKBUTTON:
this.isCheckButton=true;
break;
case ButtonBinding.TYPE_RADIOBUTTON:
this.isRadioButton=true;
break;
}
this.setProperty("type",type);
};
ButtonBinding.prototype.setToolTip=function(_665){
this.setProperty("tooltip",_665);
if(this.isAttached==true){
this.setProperty("title",Resolver.resolve(_665));
}
};
ButtonBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
ButtonBinding.prototype.setImageProfile=function(_666){
this.imageProfile=new _666(this);
};
ButtonBinding.prototype.setPopup=function(arg){
this.popupBinding=this.getBindingForArgument(arg);
if(this.popupBinding){
this.setType(ButtonBinding.TYPE_CHECKBUTTON);
if(!this.popupBindingTargetElement){
this.popupBindingTargetElement=this.bindingElement;
}
var self=this;
this.popupBinding.addActionListener(PopupBinding.ACTION_HIDE,{handleAction:function(){
if(self.isChecked==true){
self.uncheck(true);
}
}});
}
};
ButtonBinding.prototype.setURL=function(url){
if(this.isAttached==true){
if(!this.shadowTree.buttonurl){
var a=this.bindingDocument.createElement("a");
a.className="buttonurl";
a.target="_blank";
this.shadowTree.buttonurl=a;
this.bindingElement.appendChild(a);
}
this.shadowTree.buttonurl.href=url;
}
this.setProperty("url",url);
};
ButtonBinding.prototype.getURL=function(){
return this.getProperty("url");
};
ButtonBinding.prototype.flip=function(_66b){
_66b=_66b==null?true:_66b;
this.isFlipped=_66b;
this.setProperty("flip",_66b);
if(this.isAttached){
this.labelBinding.flip(_66b);
}
};
ButtonBinding.prototype.fireCommand=function(){
if(!this.isDisabled){
if(this.oncommand!=null){
this.oncommand();
}
this.dispatchAction(this.commandAction);
this.invokePopup();
}
};
ButtonBinding.prototype.invokePopup=function(){
if(!this.isDisabled){
if(this.popupBinding){
if(!this.isCheckButton||this.isChecked){
this.popupBinding.snapTo(this.popupBindingTargetElement);
this.popupBinding.show();
this.popupBinding.grabKeyboard();
}else{
this.popupBinding.hide();
this.popupBinding.releaseKeyboard();
}
}
}
};
ButtonBinding.prototype.oncommand=null;
ButtonBinding.prototype.invoke=function(){
if(!this.isCheckButton){
this.fireCommand();
}else{
if(this.isChecked){
this.uncheck();
}else{
this.check();
}
}
};
ButtonBinding.prototype.check=function(_66c){
if((this.isCheckButton||this.isRadioButton)&&!this.isChecked){
if(this.isAttached==true){
this._check();
if(!_66c==true){
this.fireCommand();
}
}
this.setProperty("ischecked",true);
}
};
ButtonBinding.prototype._check=function(_66d){
this.isActive=true;
this.isChecked=true;
if(!_66d){
this._stateManager.invokeActiveState();
}
};
ButtonBinding.prototype.uncheck=function(_66e){
if((this.isCheckButton||this.isRadioButton)&&this.isChecked){
if(this.isAttached==true){
this._uncheck();
if(!_66e==true){
this.fireCommand();
}
}
this.setProperty("ischecked",false);
}
};
ButtonBinding.prototype._uncheck=function(_66f){
this.isActive=false;
this.isChecked=false;
if(!_66f){
this._stateManager.invokeNormalState();
}
};
ButtonBinding.prototype.setChecked=function(_670,_671){
if(_670==null){
_670==false;
}
if(this.isCheckButton||this.isRadioButton){
switch(_670){
case true:
this.check(_671);
break;
case false:
this.uncheck(_671);
break;
}
}
};
ButtonBinding.prototype.setDisabled=function(bool){
if(bool==null){
bool=false;
}
this.isDisabled=bool;
switch(bool){
case true:
this.bindingElement.setAttribute("title","");
this.setProperty("isdisabled",true);
if(this._stateManager!=null){
this._stateManager.invokeDisabledState();
}
break;
case false:
this.deleteProperty("isdisabled");
var _673=this.getProperty("tooltip");
if(_673){
this.setToolTip(_673);
}
if(this._stateManager!=null){
this._stateManager.invokeNormalState();
}
break;
}
if(this._isFocusableButton==true){
this.isFocusable=!this.isDisabled;
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
};
ButtonBinding.prototype.disable=function(){
this.setDisabled(true);
};
ButtonBinding.prototype.enable=function(){
this.setDisabled(false);
};
ButtonBinding.prototype.focus=function(){
if(this.isFocusable&&!this.isFocused){
this.isFocused=true;
FocusBinding.focusElement(this.bindingElement);
this.dispatchAction(Binding.ACTION_FOCUSED);
}
};
ButtonBinding.prototype.blur=function(){
if(this.isFocusable&&this.isFocused){
this.isFocused=false;
this.dispatchAction(Binding.ACTION_BLURRED);
}
};
ButtonBinding.prototype.onMouseDown=function(){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
this.dispatchAction(Binding.ACTION_ACTIVATED);
};
ButtonBinding.prototype.onMouseUp=function(){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
};
ButtonBinding.prototype.getEqualSizeWidth=function(){
var _674=null;
if(this.isAttached==true){
this.labelBinding.shadowTree.labelBody.style.marginLeft="0";
this.labelBinding.shadowTree.labelBody.style.marginRight="0";
_674=this.labelBinding.bindingElement.offsetWidth;
}else{
throw "ButtonBinding: getEqualSizeWidth failed for non-attached button.";
}
return _674;
};
ButtonBinding.prototype.setEqualSizeWidth=function(goal){
if(this.isAttached==true){
var _676=this.getEqualSizeWidth();
if(goal>_676){
var diff=goal-_676;
var marg=Math.floor(diff*0.5);
this.labelBinding.shadowTree.labelBody.style.setProperty("margin-left",marg+"px","important");
this.labelBinding.shadowTree.labelBody.style.setProperty("margin-right",marg+"px","important");
}
}
};
ButtonBinding.prototype.getWidth=function(){
var _679=null;
return this.bindingElement.offsetWidth;
};
ButtonBinding.prototype.setWidth=function(_67a){
if(_67a>=0){
this.bindingElement.style.width=new String(_67a+"px");
}
this.setProperty("width",_67a);
};
ButtonBinding.prototype.validate=function(){
return true;
};
ButtonBinding.prototype.manifest=function(){
};
ButtonBinding.prototype.dirty=DataBinding.prototype.dirty;
ButtonBinding.prototype.clean=DataBinding.prototype.clean;
ButtonBinding.prototype.getName=function(){
};
ButtonBinding.prototype.getValue=function(){
return this.shadowTree.dotnetinput.value;
};
ButtonBinding.prototype.setValue=function(_67b){
this.shadowTree.dotnetinput.value=_67b;
};
ButtonBinding.prototype.getResult=function(){
return this.getValue();
};
ButtonBinding.prototype.setResult=function(_67c){
this.setValue(_67c);
};
ButtonStateManager.STATE_NORMAL=0;
ButtonStateManager.STATE_HOVER=1;
ButtonStateManager.STATE_ACTIVE=2;
ButtonStateManager.RIGHT_BUTTON=2;
function ButtonStateManager(_67d){
this.logger=SystemLogger.getLogger("ButtonStateManager");
this.binding=_67d;
this.imageProfile=_67d.imageProfile;
this.assignDOMEvents(true);
return this;
}
ButtonStateManager.prototype.assignDOMEvents=function(_67e){
var _67f=_67e?"addEventListener":"removeEventListener";
this.binding[_67f](DOMEvents.MOUSEENTER,this);
this.binding[_67f](DOMEvents.MOUSELEAVE,this);
this.binding[_67f](DOMEvents.MOUSEDOWN,this);
this.binding[_67f](DOMEvents.MOUSEUP,this);
};
ButtonStateManager.prototype.dispose=function(){
this.assignDOMEvents(false);
this.binding=null;
this.imageProfile=null;
};
ButtonStateManager.prototype.handleEvent=function(e){
if(Binding.exists(this.binding)&&!this.binding.isDisabled&&!BindingDragger.isDragging){
var _681=false,_682=false,_683=null;
if(e.button==ButtonStateManager.RIGHT_BUTTON){
}else{
if(this.binding.isCheckBox){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_683=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_683=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_683=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSEUP:
this.binding.isChecked=!this.binding.isChecked;
_683=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_683==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_681=true;
break;
}
}else{
if(this.binding.isComboButton){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_683=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_683=ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_683=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
_683=ButtonStateManager.STATE_NORMAL;
var _684=UserInterface.getBinding(e.target?e.target:e.srcElement);
if(_684 instanceof ComboBoxBinding){
this.binding.isChecked=!this.binding.isChecked;
_683=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_683==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_682=true;
}else{
if(this.binding.isChecked){
this.binding._uncheck(true);
}
_683=ButtonStateManager.STATE_NORMAL;
_681=true;
}
break;
}
}else{
if(this.binding.isCheckButton||this.binding.isRadioButton){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(!this.binding.isChecked){
_683=ButtonStateManager.STATE_HOVER;
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(!this.binding.isChecked){
_683=ButtonStateManager.STATE_NORMAL;
}
break;
case DOMEvents.MOUSEDOWN:
_683=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
if(this.binding.isCheckButton||!this.binding.isChecked){
this.binding.isChecked=!this.binding.isChecked;
_683=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_683==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_681=true;
}
break;
}
}else{
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_683=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_683=ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_683=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
_683=ButtonStateManager.STATE_NORMAL;
_681=true;
break;
}
}
}
}
}
switch(_683){
case ButtonStateManager.STATE_NORMAL:
this.invokeNormalState();
break;
case ButtonStateManager.STATE_HOVER:
this.invokeHoverState();
break;
case ButtonStateManager.STATE_ACTIVE:
this.invokeActiveState();
break;
}
if(_681){
this.binding.fireCommand();
}
if(_682){
this.binding.invokePopup();
}
if(Binding.exists(this.binding)==true){
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
this.binding.onMouseDown();
break;
case DOMEvents.MOUSEUP:
this.binding.onMouseUp();
break;
}
}
}
};
ButtonStateManager.prototype.invokeNormalState=function(){
this.binding.detachClassName("hover");
this.binding.detachClassName("active");
this.binding.detachClassName("isdisabled");
if(this.imageProfile){
var url=this.imageProfile.getDefaultImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeHoverState=function(){
this.binding.attachClassName("hover");
this.binding.detachClassName("active");
if(this.imageProfile){
var url=this.imageProfile.getHoverImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeActiveState=function(){
this.binding.attachClassName("active");
this.binding.detachClassName("hover");
if(this.imageProfile){
var url=this.imageProfile.getActiveImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeDisabledState=function(){
this.binding.detachClassName("hover");
this.binding.detachClassName("active");
this.binding.attachClassName("isdisabled");
if(this.imageProfile){
var _688=this.imageProfile.getDisabledImage();
if(_688){
this.binding.setImage(_688);
}
}
};
ClickButtonBinding.prototype=new ButtonBinding;
ClickButtonBinding.prototype.constructor=ClickButtonBinding;
ClickButtonBinding.superclass=ButtonBinding.prototype;
function ClickButtonBinding(){
this.logger=SystemLogger.getLogger("ClickButtonBinding");
}
ClickButtonBinding.prototype.toString=function(){
return "[ClickButtonBinding]";
};
ClickButtonBinding.newInstance=function(_689){
var _68a=DOMUtil.createElementNS(Constants.NS_UI,"ui:clickbutton",_689);
return UserInterface.registerBinding(_68a,ClickButtonBinding);
};
RadioButtonBinding.prototype=new ButtonBinding;
RadioButtonBinding.prototype.constructor=RadioButtonBinding;
RadioButtonBinding.superclass=ButtonBinding.prototype;
RadioButtonBinding.IMG_DEFAULT="${skin}/buttons/radiobutton-default.png";
RadioButtonBinding.IMG_HOVER="${skin}/buttons/radiobutton-hover.png";
RadioButtonBinding.IMG_ACTIVE="${skin}/buttons/radiobutton-active.png";
RadioButtonBinding.IMG_DISABLED="${skin}/buttons/radiobutton-disabled.png";
function RadioButtonBinding(){
this.logger=SystemLogger.getLogger("RadioButtonBinding");
this.isRadioButton=true;
this.hasMatrix=false;
this.imageProfile=new ImageProfile({image:RadioButtonBinding.IMG_DEFAULT,imageHover:RadioButtonBinding.IMG_HOVER,imageActive:RadioButtonBinding.IMG_ACTIVE,imageDisabled:RadioButtonBinding.IMG_DISABLED});
return this;
}
RadioButtonBinding.prototype.toString=function(){
return "[RadioButtonBinding]";
};
RadioButtonBinding.newInstance=function(_68b){
var _68c=DOMUtil.createElementNS(Constants.NS_UI,"ui:radiobutton",_68b);
return UserInterface.registerBinding(_68c,RadioButtonBinding);
};
CheckButtonBinding.prototype=new ButtonBinding;
CheckButtonBinding.prototype.constructor=CheckButtonBinding;
CheckButtonBinding.superclass=ButtonBinding.prototype;
function CheckButtonBinding(){
this.logger=SystemLogger.getLogger("CheckButtonBinding");
this.isCheckButton=true;
this.isCheckBox=true;
this.hasMatrix=false;
this.imageProfile=new CheckButtonImageProfile(this);
}
CheckButtonBinding.prototype.toString=function(){
return "[CheckButtonBinding]";
};
CheckButtonBinding.newInstance=function(_68d){
var _68e=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkbutton",_68d);
return UserInterface.registerBinding(_68e,CheckButtonBinding);
};
CheckButtonImageProfile.IMG_DEFAULT="${skin}/buttons/checkbutton-default.png";
CheckButtonImageProfile.IMG_HOVER="${skin}/buttons/checkbutton-hover.png";
CheckButtonImageProfile.IMG_ACTIVE="${skin}/buttons/checkbutton-active.png";
CheckButtonImageProfile.IMG_ACTIVE_HOVER="${skin}/buttons/checkbutton-active-hover.png";
CheckButtonImageProfile.IMG_DISABLED=null;
CheckButtonImageProfile.IMG_DISABLED_ON=null;
function CheckButtonImageProfile(_68f){
this._binding=_68f;
}
CheckButtonImageProfile.prototype.getDefaultImage=function(){
return CheckButtonImageProfile.IMG_DEFAULT;
};
CheckButtonImageProfile.prototype.getHoverImage=function(){
return this._binding.isChecked?CheckButtonImageProfile.IMG_ACTIVE_HOVER:CheckButtonImageProfile.IMG_HOVER;
};
CheckButtonImageProfile.prototype.getActiveImage=function(){
return CheckButtonImageProfile.IMG_ACTIVE;
};
CheckButtonImageProfile.prototype.getDisabledImage=function(){
return this._binding.isChecked?CheckButtonImageProfile.IMG_DISABLED:CheckButtonImageProfile.IMG_DISABLED_ON;
};
ViewButtonBinding.prototype=new ButtonBinding;
ViewButtonBinding.prototype.constructor=ViewButtonBinding;
ViewButtonBinding.superclass=ButtonBinding.prototype;
function ViewButtonBinding(){
return this;
}
ViewButtonBinding.prototype.toString=function(){
return "[ViewButtonBinding]";
};
ViewButtonBinding.prototype.oncommand=function(){
alert(this);
};
ControlGroupBinding.prototype=new Binding;
ControlGroupBinding.prototype.constructor=ControlGroupBinding;
ControlGroupBinding.superclass=Binding.prototype;
function ControlGroupBinding(){
this.logger=SystemLogger.getLogger("ControlGroupBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
ControlGroupBinding.prototype.toString=function(){
return "[ControlGroupBinding]";
};
ControlGroupBinding.prototype.onBindingAttach=function(){
ControlGroupBinding.superclass.onBindingAttach.call(this);
this.assignDOMEvents();
};
ControlGroupBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
};
ControlGroupBinding.prototype.onActivate=function(){
var _690=this.getDescendantBindingsByLocalName("control");
_690.each(function(_691){
_691.setControlType(_691.controlType);
});
};
ControlGroupBinding.prototype.onDeactivate=ControlGroupBinding.prototype.onActivate;
ControlGroupBinding.prototype.handleEvent=function(e){
ControlGroupBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
this.dispatchAction(Binding.ACTION_ACTIVATED);
break;
case DOMEvents.MOUSEUP:
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,e);
break;
}
};
ControlGroupBinding.newInstance=function(_693){
var _694=DOMUtil.createElementNS(Constants.NS_UI,"ui:controlgroup",_693);
return UserInterface.registerBinding(_694,ControlGroupBinding);
};
ControlBinding.prototype=new ButtonBinding;
ControlBinding.prototype.constructor=ControlBinding;
ControlBinding.superclass=ButtonBinding.prototype;
ControlBinding.ACTION_COMMAND="controlcommand";
ControlBinding.TYPE_MINIMIZE="minimize";
ControlBinding.TYPE_MAXIMIZE="maximize";
ControlBinding.TYPE_UNMAXIMIZE="unmaximize";
ControlBinding.TYPE_UNMINIMIZE="unminimize";
ControlBinding.TYPE_CLOSE="close";
ControlBinding.TOOLTIP={"minimize":"${string:Website.App.ToolTipMinimize}","maximize":"${string:Website.App.ToolTipMaximize}","unmaximize":"${string:Website.App.ToolTipUnMaximize}","unminimize":"${string:Website.App.ToolTipUnMinimize}","close":"${string:Website.App.ToolTipClose}"};
function ControlBinding(){
this.logger=SystemLogger.getLogger("ControlBinding");
this.controlType=null;
this.commandAction=ControlBinding.ACTION_COMMAND;
this.imageProfile=true;
this.containingControlBoxBinding=null;
this.isVisible=true;
this.isGhostable=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
}
ControlBinding.prototype.toString=function(){
return "[ControlBinding]";
};
ControlBinding.prototype.onBindingAttach=function(){
this.controlType=this.getProperty("controltype");
this.setProperty("tooltip",ControlBinding.TOOLTIP[this.controlType]);
if(!this.isAttached){
if(this.controlType){
this.containingControlBoxBinding=this.getAncestorBindingByType(ControlBoxBinding);
if(this.containingControlBoxBinding){
this.containingControlBoxBinding.addActionListener(ControlBoxBinding.ACTION_STATECHANGE,this);
}
ControlBinding.superclass.onBindingAttach.call(this);
this.addEventListener(DOMEvents.MOUSEDOWN);
this.setImage(this.imageProfile.getDefaultImage());
}else{
throw "ControlBinding: type not specified.";
}
}
};
ControlBinding.prototype.handleEvent=function(e){
ControlBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
DOMEvents.stopPropagation(e);
break;
}
};
ControlBinding.prototype.setControlType=function(type){
this.controlType=type;
this.setProperty("controltype",type);
this.setToolTip(ControlBinding.TOOLTIP[type]);
if(this.isAttached){
this.setImage(this.imageProfile.getDefaultImage());
}
};
ControlBinding.prototype.handleAction=function(_697){
ControlBinding.superclass.handleAction.call(this,_697);
switch(_697.type){
case ControlBoxBinding.ACTION_STATECHANGE:
this._handleStateChange();
break;
}
};
ControlBinding.prototype._handleStateChange=function(){
switch(this.containingControlBoxBinding.getState()){
case ControlBoxBinding.STATE_MAXIMIZED:
if(this.controlType==ControlBinding.TYPE_MAXIMIZE){
this.setControlType(ControlBinding.TYPE_UNMAXIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMINIMIZE){
this.setControlType(ControlBinding.TYPE_MINIMIZE);
}
break;
case ControlBoxBinding.STATE_MINIMIZED:
if(this.controlType==ControlBinding.TYPE_MINIMIZE){
this.setControlType(ControlBinding.TYPE_UNMINIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMAXIMIZE){
this.setControlType(ControlBinding.TYPE_MAXIMIZE);
}
break;
case ControlBoxBinding.STATE_NORMAL:
if(this.controlType==ControlBinding.TYPE_UNMAXIMIZE){
this.setControlType(ControlBinding.TYPE_MAXIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMINIMIZE){
this.setControlType(ControlBinding.TYPE_MINIMIZE);
}
break;
}
};
ControlBinding.prototype.onMouseDown=function(){
};
ControlBinding.prototype.onMouseUp=function(){
};
ControlImageProfile.IMAGE_MINIMIZE=null;
ControlImageProfile.IMAGE_MAXIMIZE=null;
ControlImageProfile.IMAGE_RESTORE=null;
ControlImageProfile.IMAGE_CLOSE=null;
function ControlImageProfile(_698){
this.binding=_698;
}
ControlImageProfile.prototype._getImage=function(_699){
var _69a=null;
switch(this.binding.controlType){
case ControlBinding.TYPE_MINIMIZE:
_69a=this.constructor.IMAGE_MINIMIZE;
break;
case ControlBinding.TYPE_MAXIMIZE:
_69a=this.constructor.IMAGE_MAXIMIZE;
break;
case ControlBinding.TYPE_UNMAXIMIZE:
case ControlBinding.TYPE_UNMINIMIZE:
_69a=this.constructor.IMAGE_RESTORE;
break;
case ControlBinding.TYPE_CLOSE:
_69a=this.constructor.IMAGE_CLOSE;
break;
}
return _69a.replace("${string}",_699);
};
ControlImageProfile.prototype.getDefaultImage=function(){
var _69b=true;
if(this.binding.isGhostable&&this.binding.containingControlBoxBinding){
_69b=this.binding.containingControlBoxBinding.isActive?true:false;
}
return _69b?this._getImage("default"):this._getImage("ghosted");
};
ControlImageProfile.prototype.getHoverImage=function(){
return this._getImage("hover");
};
ControlImageProfile.prototype.getActiveImage=function(){
return this._getImage("active");
};
ControlBoxBinding.prototype=new FlexBoxBinding;
ControlBoxBinding.prototype.constructor=ControlBoxBinding;
ControlBoxBinding.superclass=FlexBoxBinding.prototype;
ControlBoxBinding.STATE_NORMAL="normal";
ControlBoxBinding.STATE_MAXIMIZED="maximized";
ControlBoxBinding.STATE_MINIMIZED="minimized";
ControlBoxBinding.ACTION_NORMALIZE="controlbox normalizeaction";
ControlBoxBinding.ACTION_MAXIMIZE="controlbox maximizeaction";
ControlBoxBinding.ACTION_MINIMIZE="controlbox minimizeaction";
ControlBoxBinding.ACTION_STATECHANGE="controlbox statechangeacton";
function ControlBoxBinding(){
this.logger=SystemLogger.getLogger("ControlBoxBinding");
this.isNormalized=true;
this.isMaximized=false;
this.isMinimized=false;
}
ControlBoxBinding.prototype.toString=function(){
return "[ControlBoxBinding]";
};
ControlBoxBinding.prototype.onBindingAttach=function(){
ControlBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ControlBinding.ACTION_COMMAND,this);
this.attachClassName(ControlBoxBinding.STATE_NORMAL);
};
ControlBoxBinding.prototype.handleAction=function(_69c){
ControlBoxBinding.superclass.handleAction.call(this,_69c);
switch(_69c.type){
case ControlBinding.ACTION_COMMAND:
var _69d=_69c.target;
Application.lock(this);
var self=this;
setTimeout(function(){
self.handleInvokedControl(_69d);
Application.unlock(self);
},0);
_69c.consume();
break;
}
};
ControlBoxBinding.prototype.handleInvokedControl=function(_69f){
switch(_69f.controlType){
case ControlBinding.TYPE_MAXIMIZE:
this.maximize();
break;
case ControlBinding.TYPE_MINIMIZE:
this.minimize();
break;
case ControlBinding.TYPE_UNMAXIMIZE:
case ControlBinding.TYPE_UNMINIMIZE:
this.normalize();
break;
}
};
ControlBoxBinding.prototype.maximize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_MAXIMIZE);
this.setState(ControlBoxBinding.STATE_MAXIMIZED);
this.isNormalized=false;
this.isMaximized=true;
this.isMinimized=false;
};
ControlBoxBinding.prototype.minimize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_MINIMIZE);
this.setState(ControlBoxBinding.STATE_MINIMIZED);
this.isNormalized=false;
this.isMaximized=false;
this.isMinimized=true;
};
ControlBoxBinding.prototype.normalize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_NORMALIZE);
this.setState(ControlBoxBinding.STATE_NORMAL);
this.isNormalized=true;
this.isMaximized=false;
this.isMinimized=false;
};
ControlBoxBinding.prototype.setState=function(_6a0){
var _6a1=this.getState();
this.setProperty("state",_6a0);
this.detachClassName(_6a1);
this.attachClassName(_6a0);
this.dispatchAction(ControlBoxBinding.ACTION_STATECHANGE);
};
ControlBoxBinding.prototype.getState=function(){
var _6a2=this.getProperty("state");
if(!_6a2){
_6a2=ControlBoxBinding.STATE_NORMAL;
}
return _6a2;
};
MenuContainerBinding.prototype=new Binding;
MenuContainerBinding.prototype.constructor=MenuContainerBinding;
MenuContainerBinding.superclass=Binding.prototype;
function MenuContainerBinding(){
this.logger=SystemLogger.getLogger("MenuContainerBinding");
this._isOpen=false;
this._openElement=null;
this.menuContainerBinding=null;
this.menuPopupBinding=null;
}
MenuContainerBinding.prototype.toString=function(){
return "[MenuContainerBinding]";
};
MenuContainerBinding.prototype.isOpen=function(_6a3){
var _6a4=null;
if(!_6a3){
_6a4=this._isOpen;
}else{
_6a4=(_6a3==this._openElement);
}
return _6a4;
};
MenuContainerBinding.prototype.setOpenElement=function(_6a5){
if(_6a5){
if(this._openElement){
this._openElement.hide();
}
this._openElement=_6a5;
this._isOpen=true;
}else{
this._openElement=null;
this._isOpen=false;
}
};
MenuContainerBinding.prototype.getMenuContainerBinding=function(){
if(!this.menuContainerBinding){
this.menuContainerBinding=this.getAncestorBindingByType(MenuContainerBinding);
}
return this.menuContainerBinding;
};
MenuContainerBinding.prototype.getMenuPopupBinding=function(){
var _6a6=this.getChildBindingByLocalName("menupopup");
if(_6a6&&_6a6!=this.menuPopupBinding){
this.menuPopupBinding=_6a6;
this.menuPopupBinding.addActionListener(PopupBinding.ACTION_HIDE,this);
}
return this.menuPopupBinding;
};
MenuContainerBinding.prototype.show=function(){
var _6a7=this.getMenuContainerBinding();
_6a7.setOpenElement(this);
var _6a8=this.getMenuPopupBinding();
_6a8.snapTo(this.bindingElement);
_6a8.show();
};
MenuContainerBinding.prototype.hide=function(){
this.reset();
this.getMenuPopupBinding().hide();
if(this._isOpen){
this._openElement.hide();
}
};
MenuContainerBinding.prototype.reset=Binding.ABSTRACT_METHOD;
MenuContainerBinding.prototype.handleAction=function(_6a9){
MenuContainerBinding.superclass.handleAction.call(this,_6a9);
if(_6a9.type==PopupBinding.ACTION_HIDE){
var _6aa=this.getMenuContainerBinding();
_6aa.setOpenElement(false);
this.reset();
_6a9.consume();
}
};
MenuBarBinding.prototype=new MenuContainerBinding;
MenuBarBinding.prototype.constructor=MenuBarBinding;
MenuBarBinding.superclass=MenuContainerBinding.prototype;
function MenuBarBinding(){
this.logger=SystemLogger.getLogger("MenuBarBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
MenuBarBinding.prototype.toString=function(){
return "[MenuBarBinding]";
};
MenuBarBinding.prototype.onBindingRegister=function(){
MenuBarBinding.superclass.onBindingRegister.call(this);
this.addActionListener(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
MenuBarBinding.prototype.handleAction=function(_6ab){
MenuBarBinding.superclass.handleAction.call(this,_6ab);
switch(_6ab.type){
case MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY:
var _6ac=_6ab.target;
var _6ad=this.getChildBindingsByLocalName("menu");
while(_6ad.hasNext()){
var menu=_6ad.getNext();
}
switch(_6ac.arrowKey){
case KeyEventCodes.VK_LEFT:
this.logger.debug("LEFTG");
break;
case KeyEventCodes.VK_RIGHT:
this.logger.debug("RIGHT");
break;
}
break;
}
};
MenuBinding.prototype=new MenuContainerBinding;
MenuBinding.prototype.constructor=MenuBinding;
MenuBinding.superclass=MenuContainerBinding.prototype;
function MenuBinding(){
this.logger=SystemLogger.getLogger("MenuBinding");
this.labelBinding=null;
this.isFocused=false;
}
MenuBinding.prototype.toString=function(){
return "[MenuBinding]";
};
MenuBinding.prototype.onBindingAttach=function(){
MenuBinding.superclass.onBindingAttach.call(this);
this.buildDOMContent();
this.assignDOMEvents();
};
MenuBinding.prototype.buildDOMContent=function(){
var _6af=this.getProperty("image");
var _6b0=this.getProperty("label");
var _6b1=this.getProperty("tooltip");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.labelBinding.attachClassName("menulabel");
this.add(this.labelBinding);
if(_6b0){
this.setLabel(_6b0);
}
if(_6af){
this.setImage(_6af);
}
if(_6b1){
this.setToolTip(_6b1);
}
};
MenuBinding.prototype.reset=function(){
this.detachClassName("hover");
};
MenuBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(Resolver.resolve(url));
}
};
MenuBinding.prototype.setLabel=function(_6b3){
this.setProperty("label",_6b3);
if(this.isAttached){
this.labelBinding.setLabel(Resolver.resolve(_6b3));
}
};
MenuBinding.prototype.setToolTip=function(_6b4){
this.setProperty("tooltip",_6b4);
if(this.isAttached){
this.labelBinding.setToolTip(Resolver.resolve(_6b4));
}
};
MenuBinding.prototype.getImage=function(){
return this.getProperty("image");
};
MenuBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
MenuBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
MenuBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
this.addEventListener(DOMEvents.MOUSEUP);
};
MenuBinding.prototype.handleEvent=function(e){
MenuBinding.superclass.handleEvent.call(this,e);
var _6b6=this.getMenuContainerBinding();
if(!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(_6b6.isOpen(this)){
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.MOUSEOVER:
if(_6b6.isOpen()&&!_6b6.isOpen(this)){
this.show();
this.menuPopupBinding.grabKeyboard();
}
this.attachClassName("hover");
this.isFocused=true;
break;
case DOMEvents.MOUSEOUT:
if(!_6b6.isOpen()){
this.hide();
}
this.isFocused=false;
break;
case DOMEvents.MOUSEUP:
if(!_6b6.isOpen(this)){
this.show();
this.menuPopupBinding.grabKeyboard();
}
DOMEvents.stopPropagation(e);
break;
}
}
DOMEvents.stopPropagation(e);
};
MenuBodyBinding.prototype=new Binding;
MenuBodyBinding.prototype.constructor=MenuBodyBinding;
MenuBodyBinding.superclass=Binding.prototype;
MenuBodyBinding.CLASSNAME_CHECKBOXED="checkboxed";
MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY="menubody unhandled arrowkey";
MenuBodyBinding.activeInstance=null;
MenuBodyBinding.handleBroadcast=function(_6b7,arg){
var body=MenuBodyBinding.activeInstance;
var key=arg;
if(body){
switch(_6b7){
case BroadcastMessages.KEY_ARROW:
body.handleArrowKey(key);
break;
case BroadcastMessages.KEY_ENTER:
body.handleEnterKey();
break;
}
}
};
EventBroadcaster.subscribe(BroadcastMessages.KEY_ARROW,MenuBodyBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ENTER,MenuBodyBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,MenuBodyBinding);
function MenuBodyBinding(){
this.logger=SystemLogger.getLogger("MenuBodyBinding");
this._containingPopupBinding=null;
this._focused=null;
this._lastFocused=null;
this._showSubMenuTimeout=null;
this.arrowKey=null;
this.isDirty=true;
this._hasImageLayout=false;
this._hasCheckBoxLayout=false;
}
MenuBodyBinding.prototype.toString=function(){
return "[MenuBodyBinding]";
};
MenuBodyBinding.prototype.onBindingAttach=function(){
MenuBodyBinding.superclass.onBindingAttach.call(this);
this._focused={};
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
this.addEventListener(DOMEvents.MOUSEUP);
this.addEventListener(DOMEvents.KEYDOWN);
var self=this;
this.addActionListener(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY,{handleAction:function(_6bc){
switch(_6bc.target){
case self:
self.releaseKeyboard();
self._containingPopupBinding.hide();
break;
default:
var _6bd=null;
var _6be=true;
self._lastFocused.focus();
self.grabKeyboard();
_6bc.consume();
break;
}
}});
this._containingPopupBinding=UserInterface.getBinding(this.bindingElement.parentNode);
this._containingPopupBinding.addActionListener(PopupBinding.ACTION_HIDE,{handleAction:function(){
self.resetFocusedItems(true);
self.releaseKeyboard();
}});
};
MenuBodyBinding.prototype.onBindingDispose=function(){
MenuBodyBinding.superclass.onBindingDispose.call(this);
if(MenuBodyBinding.activeInstance==this){
MenuBodyBinding.activeInstance=null;
}
};
MenuBodyBinding.prototype.handleEvent=function(e){
MenuBodyBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.MOUSEOUT){
this.resetFocusedItems();
}
switch(e.type){
case DOMEvents.MOUSEDOWN:
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
case DOMEvents.MOUSEUP:
DOMEvents.stopPropagation(e);
break;
case DOMEvents.KEYDOWN:
switch(e.keyCode){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
case KeyEventCodes.VK_LEFT:
case KeyEventCodes.VK_RIGHT:
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
this.handleArrowKey(e.keyCode);
break;
}
break;
}
};
MenuBodyBinding.prototype.handleFocusedItem=function(_6c0){
for(var key in this._focused){
if(key!=_6c0.key){
var item=this._focused[key];
item.blur();
}
}
this._focused[_6c0.key]=_6c0;
this._lastFocused=_6c0;
if(MenuBodyBinding.activeInstance!=this){
this.grabKeyboard();
}
};
MenuBodyBinding.prototype.handleBlurredItem=function(_6c3){
delete this._focused[_6c3.key];
};
MenuBodyBinding.prototype.resetFocusedItems=function(_6c4){
for(var key in this._focused){
var item=this._focused[key];
item.blur(_6c4);
}
if(_6c4){
this._lastFocused=null;
}
};
MenuBodyBinding.prototype.refreshMenuGroups=function(){
if(!this.isAttached){
throw "refreshMenuGroups: MenuBodyBinding not attached!";
}else{
var _6c7=this.getChildBindingsByLocalName("menugroup");
var _6c8=null;
var _6c9=null;
while(_6c7.hasNext()){
var _6ca=_6c7.getNext();
if(!_6ca.isDefaultContent){
_6ca.setLayout(MenuGroupBinding.LAYOUT_DEFAULT);
if(!_6c8&&_6ca.isVisible){
_6c8=_6ca;
}
if(_6ca.isVisible){
_6c9=_6ca;
}
}
}
if(_6c8&&_6c9){
_6c8.setLayout(MenuGroupBinding.LAYOUT_FIRST);
_6c9.setLayout(MenuGroupBinding.LAYOUT_LAST);
}
}
};
MenuBodyBinding.prototype.grabKeyboard=function(_6cb){
MenuBodyBinding.activeInstance=this;
if(_6cb){
var _6cc=this._getMenuItems().getFirst();
if(_6cc){
_6cc.focus();
}
}
};
MenuBodyBinding.prototype.releaseKeyboard=function(){
if(MenuBodyBinding.activeInstance==this){
MenuBodyBinding.activeInstance=null;
}
};
MenuBodyBinding.prototype.handleEnterKey=function(){
var _6cd=this._lastFocused;
if((_6cd!=null)&&(!_6cd.isMenuContainer)){
_6cd.fireCommand();
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
};
MenuBodyBinding.prototype.handleArrowKey=function(key){
this.arrowKey=key;
var _6cf=this._getMenuItems();
var _6d0=null;
var next=null;
if(this._lastFocused){
_6d0=this._lastFocused;
switch(key){
case KeyEventCodes.VK_UP:
next=_6cf.getPreceding(_6d0);
break;
case KeyEventCodes.VK_DOWN:
next=_6cf.getFollowing(_6d0);
break;
case KeyEventCodes.VK_LEFT:
this.dispatchAction(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
break;
case KeyEventCodes.VK_RIGHT:
if(this._lastFocused.isMenuContainer){
this.releaseKeyboard();
this._lastFocused.show();
this._lastFocused.menuPopupBinding.grabKeyboard(true);
}else{
this.dispatchAction(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
}
break;
}
}else{
next=_6cf.getFirst();
}
if(next){
next.focus();
}
};
MenuBodyBinding.prototype._getMenuItems=function(){
if(!this._menuItemsList||this.isDirty){
var list=new List();
var _6d3=null;
this.getChildBindingsByLocalName("menugroup").each(function(_6d4){
_6d3=_6d4.getChildBindingsByLocalName("menuitem");
_6d3.each(function(item){
list.add(item);
});
});
_6d3=this.getChildBindingsByLocalName("menuitem");
_6d3.each(function(item){
list.add(item);
});
this._menuItemsList=list;
this.isDirty=false;
}
return this._menuItemsList;
};
MenuBodyBinding.prototype.invokeCheckBoxLayout=function(){
if(!this.hasClassName(MenuBodyBinding.CLASSNAME_CHECKBOXED)){
this.attachClassName(MenuBodyBinding.CLASSNAME_CHECKBOXED);
}
};
MenuBodyBinding.prototype.invokeImageLayout=function(){
if(!this._hasImageLayout){
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._hasImageLayout=true;
}
};
MenuBodyBinding.newInstance=function(_6d7){
var _6d8=DOMUtil.createElementNS(Constants.NS_UI,"ui:menubody",_6d7);
return UserInterface.registerBinding(_6d8,MenuBodyBinding);
};
MenuGroupBinding.prototype=new Binding;
MenuGroupBinding.prototype.constructor=MenuGroupBinding;
MenuGroupBinding.superclass=Binding.prototype;
MenuGroupBinding.LAYOUT_DEFAULT=0;
MenuGroupBinding.LAYOUT_FIRST=1;
MenuGroupBinding.LAYOUT_LAST=2;
function MenuGroupBinding(){
this.logger=SystemLogger.getLogger("MenuGroupBinding");
this.isVisible=true;
}
MenuGroupBinding.prototype.toString=function(){
return "[MenuGroupBinding]";
};
MenuGroupBinding.prototype.setLayout=function(_6d9){
switch(_6d9){
case MenuGroupBinding.LAYOUT_DEFAULT:
this.detachClassName("first");
this.detachClassName("last");
break;
case MenuGroupBinding.LAYOUT_FIRST:
this.attachClassName("first");
break;
case MenuGroupBinding.LAYOUT_LAST:
this.attachClassName("last");
break;
}
};
MenuGroupBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.display="block";
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
MenuGroupBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.display="none";
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
MenuGroupBinding.prototype.empty=function(){
this.detachRecursive();
this.bindingElement.innerHTML="";
};
MenuGroupBinding.newInstance=function(_6da){
var _6db=DOMUtil.createElementNS(Constants.NS_UI,"ui:menugroup",_6da);
return UserInterface.registerBinding(_6db,MenuGroupBinding);
};
MenuItemBinding.prototype=new MenuContainerBinding;
MenuItemBinding.prototype.constructor=MenuItemBinding;
MenuItemBinding.superclass=MenuContainerBinding.prototype;
MenuItemBinding.ACTION_COMMAND="menuitemcommand";
MenuItemBinding.TYPE_CHECKBOX="checkbox";
MenuItemBinding.TYPE_MENUCONTAINER="menucontainer";
MenuItemBinding.CLASSNAME_CHECKBOX="checkboxindicator";
MenuItemBinding.CLASSNAME_SUBMENU="submenuindicator";
MenuItemBinding.CLASSNAME_HOVER="hover";
MenuItemBinding.CHAR_CHECKBOX="V";
MenuItemBinding.CHAR_SUBMENU=String.fromCharCode(9658);
MenuItemBinding.TIMEOUT=150;
function MenuItemBinding(){
this.logger=SystemLogger.getLogger("MenuItemBinding");
this.type=null;
this.oncommand=null;
this.isDisabled=false;
this.labelBinding=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.imageProfile=null;
this.isMenuContainer=false;
this.isTypeSet=false;
this.isChecked=false;
this.isFocused=false;
this._containingMenuBodyBinding=null;
}
MenuItemBinding.prototype.toString=function(){
return "[MenuItemBinding]";
};
MenuItemBinding.prototype.onBindingRegister=function(){
MenuItemBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
if(this.type){
this.setProperty("type",this.type);
}
};
MenuItemBinding.prototype.onBindingAttach=function(){
MenuItemBinding.superclass.onBindingAttach.call(this);
this._containingMenuBodyBinding=this.getAncestorBindingByLocalName("menubody");
this._containingMenuBodyBinding.isDirty=true;
this.parseDOMProperties();
this.buildDOMContent();
this.assignDOMEvents();
this.dispatchAction(Binding.ACTION_ATTACHED);
};
MenuItemBinding.prototype.parseDOMProperties=function(){
var _6dc=this.getProperty("image");
var _6dd=this.getProperty("image-hover");
var _6de=this.getProperty("image-active");
var _6df=this.getProperty("image-disabled");
if(!this.image&&_6dc){
this.image=_6dc;
}
if(!this.imageHover&&_6dd){
this.imageHover=_6dc;
}
if(!this.imageActive&&_6de){
this.imageActive=_6de;
}
if(!this.imageDisabled&&_6df){
this.imageDisabled=_6df;
}
};
MenuItemBinding.prototype.buildDOMContent=function(){
var _6e0=this.getProperty("label");
var _6e1=this.getProperty("tooltip");
var type=this.getProperty("type");
var _6e3=this.getProperty("isdisabled");
var _6e4=this.getProperty("image");
var _6e5=this.getProperty("image-hover");
var _6e6=this.getProperty("image-active");
var _6e7=this.getProperty("image-disabled");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.labelBinding.attachClassName("menuitemlabel");
this.add(this.labelBinding);
var _6e8=this.getMenuPopupBinding();
if(_6e8){
this.isMenuContainer=true;
this.setType(MenuItemBinding.TYPE_MENUCONTAINER);
}
if(!this.imageProfile){
if(!this.image&&_6e4){
this.image=_6e4;
}
if(!this.imageHover&&_6e5){
this.imageHover=_6e4;
}
if(!this.imageActive&&_6e6){
this.imageActive=_6e6;
}
if(!this.imageDisabled&&_6e7){
this.imageDisabled=_6e7;
}
if(this.image||this.imageHover||this.imageActive||this.imageDisabled){
this.imageProfile=new ImageProfile(this);
}
}
if(this.imageProfile){
this.setImage(this.imageProfile.getDefaultImage());
}else{
this.setImage(null);
}
if(_6e0!=null){
this.setLabel(_6e0);
}
if(_6e1){
this.setToolTip(_6e1);
}
if(type){
this.setType(type);
}
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
if(this.getProperty("ischecked")==true){
this.check(true);
}
}
if(_6e3==true){
this.disable();
}
var _6e9=this.getProperty("oncommand");
if(_6e9){
if(this.isMenuContainer){
throw new Error("MenuItemBinding with contained menuitems cannot fire commands.");
}else{
this.oncommand=function(){
this.bindingWindow.eval(_6e9);
};
}
}
};
MenuItemBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEUP);
};
MenuItemBinding.prototype.handleEvent=function(e){
MenuItemBinding.superclass.handleEvent.call(this,e);
if(!this.isDisabled&&!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEOVER:
this.focus(e);
break;
case DOMEvents.MOUSEUP:
DOMEvents.stopPropagation(e);
if(!this.isMenuContainer){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.setChecked(!this.isChecked);
}else{
this.fireCommand();
}
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
break;
}
}
};
MenuItemBinding.prototype.fireCommand=function(){
if(!this.isMenuContainer){
if(this.oncommand){
this.oncommand();
}
this.dispatchAction(MenuItemBinding.ACTION_COMMAND);
}
};
MenuItemBinding.prototype.setImage=function(url){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(Resolver.resolve(url));
}
};
MenuItemBinding.prototype.setLabel=function(_6ec){
this.setProperty("label",_6ec);
if(this.isAttached){
this.labelBinding.setLabel(Resolver.resolve(_6ec));
}
};
MenuItemBinding.prototype.setToolTip=function(_6ed){
this.setProperty("tooltip",_6ed);
if(this.isAttached){
this.labelBinding.setToolTip(Resolver.resolve(_6ed));
}
};
MenuItemBinding.prototype.reset=function(){
if(this.labelBinding.hasClassName("hover")){
this.labelBinding.detachClassName("hover");
}
};
MenuItemBinding.prototype.setType=function(type){
if(this.isAttached){
if(!this.isTypeSet){
switch(type){
case MenuItemBinding.TYPE_CHECKBOX:
if(!this.isMenuContainer){
this._containingMenuBodyBinding.invokeCheckBoxLayout();
var _6ef=this.bindingDocument.createElement("div");
_6ef.className=MenuItemBinding.CLASSNAME_CHECKBOX;
_6ef.appendChild(this.bindingDocument.createTextNode(MenuItemBinding.CHAR_CHECKBOX));
var _6f0=this.labelBinding.bindingElement;
_6f0.insertBefore(_6ef,_6f0.firstChild);
_6ef.style.display="none";
this.shadowTree.checkBoxIndicator=_6ef;
}else{
throw new Error("MenuItemBinding: checkboxes cannot contain menus");
}
break;
case MenuItemBinding.TYPE_MENUCONTAINER:
var _6ef=this.bindingDocument.createElement("div");
_6ef.className=MenuItemBinding.CLASSNAME_SUBMENU;
_6ef.appendChild(this.bindingDocument.createTextNode(MenuItemBinding.CHAR_SUBMENU));
var _6f0=this.labelBinding.bindingElement;
_6f0.insertBefore(_6ef,_6f0.firstChild);
break;
}
this.type=type;
this.isTypeSet=true;
}else{
throw new Error("MenuItemBinding: Cannot set type twice.");
}
}
this.setProperty("type",type);
};
MenuItemBinding.prototype.getImage=function(){
return this.getProperty("image");
};
MenuItemBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
MenuItemBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
MenuItemBinding.prototype.disable=function(){
this.setDisabled(true);
};
MenuItemBinding.prototype.enable=function(){
this.setDisabled(false);
};
MenuItemBinding.prototype.setDisabled=function(bool){
this.isDisabled=bool;
if(this.isDisabled){
this.setProperty("isdisabled",true);
}else{
this.deleteProperty("isdisabled");
}
if(this.isAttached){
if(this.isDisabled){
this.labelBinding.detachClassName("hover");
this.attachClassName("isdisabled");
if(this.imageProfile){
var _6f2=this.imageProfile.getDisabledImage();
if(_6f2){
this.setImage(_6f2);
}
}
}else{
this.detachClassName("isdisabled");
if(this.imageProfile){
var _6f2=this.imageProfile.getDefaultImage();
if(_6f2){
this.setImage(_6f2);
}
}
}
}
};
MenuItemBinding.prototype.focus=function(e){
this.labelBinding.attachClassName(MenuItemBinding.CLASSNAME_HOVER);
var _6f4=this.getMenuContainerBinding();
if(_6f4.isOpen()&&!_6f4.isOpen(this)){
_6f4._openElement.hide();
_6f4.setOpenElement(false);
}
if(this.isMenuContainer&&e&&e.type==DOMEvents.MOUSEOVER){
var _6f4=this.getMenuContainerBinding();
if(!_6f4.isOpen(this)){
var self=this;
this._showSubMenuTimeout=window.setTimeout(function(){
self.show();
self._showSubMenuTimeout=null;
},MenuItemBinding.TIMEOUT);
}
}
if(!e||e.type!=DOMEvents.MOUSEOVER){
if(this.bindingElement.tabIndex!=-1){
if(Client.isMozilla){
FocusBinding.focusElement(this.bindingElement);
}else{
var self=this;
setTimeout(function(){
FocusBinding.focusElement(self.bindingElement);
},0);
}
}
}
this.isFocused=true;
this._containingMenuBodyBinding.handleFocusedItem(this);
};
MenuItemBinding.prototype.blur=function(_6f6){
if(this._showSubMenuTimeout){
window.clearTimeout(this._showSubMenuTimeout);
this._showSubMenuTimeout=null;
}
if(this.isFocused){
var _6f7=this.getMenuContainerBinding();
if(!_6f7||!_6f7.isOpen(this)||_6f6){
this.labelBinding.detachClassName(MenuItemBinding.CLASSNAME_HOVER);
this.isFocused=false;
this._containingMenuBodyBinding.handleBlurredItem(this);
}
}
};
MenuItemBinding.prototype.check=function(_6f8){
this.setChecked(true,_6f8);
};
MenuItemBinding.prototype.uncheck=function(_6f9){
this.setChecked(false,_6f9);
};
MenuItemBinding.prototype.show=function(){
this.menuPopupBinding.position=PopupBinding.POSITION_RIGHT;
MenuItemBinding.superclass.show.call(this);
};
MenuItemBinding.prototype.setChecked=function(_6fa,_6fb){
this.setProperty("ischecked",_6fa);
if(this.isAttached){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
if(this.isChecked!=_6fa){
this.isChecked=_6fa;
this.shadowTree.checkBoxIndicator.style.display=_6fa?"block":"none";
if(!_6fb){
this.fireCommand();
}
}
}
}
};
MenuItemBinding.newInstance=function(_6fc){
var _6fd=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_6fc);
UserInterface.registerBinding(_6fd,MenuItemBinding);
return UserInterface.getBinding(_6fd);
};
PopupSetBinding.prototype=new MenuContainerBinding;
PopupSetBinding.prototype.constructor=PopupSetBinding;
PopupSetBinding.superclass=MenuContainerBinding.prototype;
function PopupSetBinding(){
this.logger=SystemLogger.getLogger("PopupSetBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
PopupSetBinding.prototype.toString=function(){
return "[PopupSetBinding]";
};
PopupBinding.prototype=new Binding;
PopupBinding.prototype.constructor=PopupBinding;
PopupBinding.superclass=Binding.prototype;
PopupBinding.ACTION_SHOW="popupshow";
PopupBinding.ACTION_HIDE="popuphide";
PopupBinding.POSITION_TOP="top";
PopupBinding.POSITION_RIGHT="right";
PopupBinding.POSITION_BOTTOM="bottom";
PopupBinding.POSITION_LEFT="left";
PopupBinding.TYPE_NORMAL="normal";
PopupBinding.TYPE_FIXED="fixed";
PopupBinding.FIXED_MAX=12;
PopupBinding.CLASSNAME_OVERFLOW="overflow";
PopupBinding.activeInstances=new Map();
PopupBinding.hasActiveInstances=function(){
return PopupBinding.activeInstances.hasEntries();
};
PopupBinding.handleBroadcast=function(_6fe,arg){
switch(_6fe){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(PopupBinding.activeInstances.hasEntries()){
var list=new List();
PopupBinding.activeInstances.each(function(key){
var _702=PopupBinding.activeInstances.get(key);
var _703=(arg&&arg instanceof ButtonBinding&&arg.popupBinding==_702);
if(!_703){
list.add(_702);
}
});
list.each(function(_704){
_704.hide();
});
}
break;
case BroadcastMessages.KEY_ESCAPE:
if(PopupBinding.activeInstances.hasEntries()){
PopupBinding.activeInstances.each(function(key){
var _706=PopupBinding.activeInstances.get(key);
_706.hide();
});
}
break;
}
};
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,PopupBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,PopupBinding);
function PopupBinding(){
this.logger=SystemLogger.getLogger("PopupBinding");
this._bodyBinding=null;
this.position=null;
this.isVisible=false;
this.onshow=null;
this.onhide=null;
this.geometry=null;
this._menuItems=null;
this._menuGroups=null;
this._menuItemCount=0;
this.type=PopupBinding.TYPE_NORMAL;
this._isOverflow=false;
return this;
}
PopupBinding.prototype.toString=function(){
return "[PopupBinding]";
};
PopupBinding.prototype.onBindingAttach=function(){
PopupBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_ATTACHED);
this.geometry={x:0,y:0,w:0,h:0};
this.buildDOMContent();
this.parseDOMProperties();
this.assignDOMEvents();
};
PopupBinding.prototype.onBindingDispose=function(){
PopupBinding.superclass.onBindingDispose.call(this);
if(PopupBinding.activeInstances.has(this.key)){
PopupBinding.activeInstances.del(this.key);
}
};
PopupBinding.prototype.buildDOMContent=function(){
var _707=DOMUtil.getElementsByTagName(this.bindingElement,"menubody").item(0);
var _708=DOMUtil.getElementsByTagName(this.bindingElement,"popupbody").item(0);
if(_707){
this._bodyBinding=UserInterface.getBinding(_707);
}else{
if(_708){
this._bodyBinding=UserInterface.getBinding(_708);
}else{
if(this.bindingElement.childElementCount>0){
throw new Error(this+": DOM structure invalid.");
}else{
this._bodyBinding=this.add(MenuBodyBinding.newInstance(this.bindingDocument)).attach();
}
}
}
};
PopupBinding.prototype.parseDOMProperties=function(){
if(!this.position){
var _709=this.getProperty("position");
this.position=_709?_709:PopupBinding.POSITION_BOTTOM;
}
};
PopupBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
};
PopupBinding.prototype.add=function(_70a){
var _70b=null;
if(this._bodyBinding){
this._bodyBinding.add(_70a);
_70b=_70a;
}else{
_70b=PopupBinding.superclass.add.call(this,_70a);
}
return _70b;
};
PopupBinding.prototype.addFirst=function(_70c){
var _70d=null;
if(this._bodyBinding){
this._bodyBinding.addFirst(_70c);
_70d=_70c;
}else{
_70d=PopupBinding.superclass.addFirst.call(this,_70c);
}
return _70d;
};
PopupBinding.prototype.handleAction=function(_70e){
PopupBinding.superclass.handleAction.call(this,_70e);
var _70f=_70e.target;
switch(_70e.type){
case Binding.ACTION_ATTACHED:
if(_70f instanceof MenuItemBinding){
this._count(true);
_70e.consume();
}
break;
case Binding.ACTION_DETACHED:
if(_70f instanceof MenuItemBinding){
this._count(false);
_70e.consume();
}
break;
}
};
PopupBinding.prototype._count=function(_710){
if(this.type==PopupBinding.TYPE_FIXED){
this._menuItemCount=this._menuItemCount+(_710?1:-1);
if(!this._isOverflow){
if(this._menuItemCount>=PopupBinding.FIXED_MAX){
this.bindingElement.style.height="";
this.attachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=true;
}
}else{
if(this._menuItemCount<PopupBinding.FIXED_MAX){
this.bindingElement.style.height="auto";
this.detachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=false;
}
}
}
};
PopupBinding.prototype.snapTo=function(_711){
var _712=this._getElementPosition(_711);
switch(this.position){
case PopupBinding.POSITION_TOP:
_712.y-=this.bindingElement.offsetHeight;
break;
case PopupBinding.POSITION_RIGHT:
_712.x+=_711.offsetWidth;
break;
case PopupBinding.POSITION_BOTTOM:
_712.y+=_711.offsetHeight;
break;
case PopupBinding.POSITION_LEFT:
_712.x-=this.bindingElement.offsetWidth;
break;
}
this.targetElement=_711;
this.bindingElement.style.display="block";
this.setPosition(_712.x,_712.y);
};
PopupBinding.prototype.snapToMouse=function(e){
this.snapToPoint(this._getMousePosition(e));
};
PopupBinding.prototype.snapToPoint=function(_714){
this.bindingElement.style.display="block";
this.setPosition(_714.x,_714.y);
this.show();
};
PopupBinding.prototype.setPosition=function(x,y){
this.geometry.x=x;
this.geometry.y=y;
this.bindingElement.style.left=this.geometry.x+"px";
this.bindingElement.style.top=this.geometry.y+"px";
};
PopupBinding.prototype.getPosition=function(x,y){
return new Point(this.geometry.x,this.geometry.y);
};
PopupBinding.prototype.getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
PopupBinding.prototype._getElementPosition=function(_719){
return _719.ownerDocument==this.bindingDocument?DOMUtil.getGlobalPosition(_719):DOMUtil.getUniversalPosition(_719);
};
PopupBinding.prototype._getMousePosition=function(e){
var _71b=DOMEvents.getTarget(e);
return _71b.ownerDocument==this.bindingDocument?DOMUtil.getGlobalMousePosition(e):DOMUtil.getUniversalMousePosition(e);
};
PopupBinding.prototype.show=function(){
if(this.isVisible==true){
this.hide();
}
if(!this.isVisible){
PopupBinding.activeInstances.set(this.key,this);
this.bindingElement.style.display="block";
this.dispatchAction(PopupBinding.ACTION_SHOW);
this.fitOnScreen();
this._makeVisible(true);
if(this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.refreshMenuGroups();
}
this._enableTab(true);
}
};
PopupBinding.prototype._makeVisible=function(_71c){
var _71d=this.bindingElement;
if(_71c){
_71d.style.visibility="visible";
}else{
_71d.style.visibility="hidden";
_71d.style.display="none";
}
this.isVisible=_71c;
};
PopupBinding.prototype._enableTab=function(_71e){
var self=this;
var _720=this.getDescendantBindingsByLocalName("menuitem");
setTimeout(function(){
if(Binding.exists(self)==true){
_720.each(function(_721){
_721.bindingElement.tabIndex=_71e?0:-1;
});
}
},0);
};
PopupBinding.prototype.hide=function(){
this.releaseKeyboard();
if(this.isVisible){
this._makeVisible(false);
this.targetElement=null;
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
this.dispatchAction(PopupBinding.ACTION_HIDE);
this._enableTab(false);
var self=this;
setTimeout(function(){
if(!self.isVisible){
PopupBinding.activeInstances.del(self.key);
}
},0);
}
};
PopupBinding.prototype.fitOnScreen=function(){
var x=this.bindingElement.offsetLeft;
var y=this.bindingElement.offsetTop;
var w=this.bindingElement.offsetWidth;
var h=this.bindingElement.offsetHeight;
var dim=this.bindingWindow.WindowManager.getWindowDimensions();
var pos=this.boxObject.getGlobalPosition();
if(this.targetElement!=null){
if(pos.y+h>=dim.h){
switch(CSSComputer.getPosition(this.bindingElement.offsetParent)){
case "absolute":
y=y-h-this.targetElement.offsetHeight;
if(y<0){
y=0;
}
break;
case "relative":
y=y-h+this.targetElement.offsetHeight+9;
var _729=DOMUtil.getGlobalPosition(this.targetElement);
if(y+_729.y<0){
y=-_729.y;
}
break;
}
}
if(pos.x+w>=dim.w){
x-=w;
switch(this.position){
case PopupBinding.POSITION_RIGHT:
x-=this.targetElement.offsetWidth;
break;
case PopupBinding.POSITION_BOTTOM:
x+=this.targetElement.offsetWidth;
break;
}
}
}else{
if(pos.y+h>=dim.h){
y-=h;
if(y<0){
y=0;
}
}
if(pos.x+w>=dim.w){
x-=w;
if(x<0){
x=0;
}
}
}
this.setPosition(x,y);
};
PopupBinding.prototype.handleEvent=function(e){
PopupBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
};
PopupBinding.prototype.empty=function(){
this._bodyBinding.detachRecursive();
this._bodyBinding.bindingElement.innerHTML="";
};
PopupBinding.prototype.grabKeyboard=function(_72b){
};
PopupBinding.prototype.releaseKeyboard=function(){
if(this._bodyBinding!=null&&this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.releaseKeyboard();
}
};
PopupBinding.prototype._indexMenuContent=function(){
this._menuItems={};
this._menuGroups={};
var list=this.getDescendantBindingsByLocalName("menugroup");
while(list.hasNext()){
var item=list.getNext();
var rel=item.getProperty("rel");
if(rel){
if(!this._menuGroups[rel]){
this._menuGroups[rel]=new List();
}
this._menuGroups[rel].add(item);
}
}
list=this.getDescendantBindingsByLocalName("menuitem");
while(list.hasNext()){
var item=list.getNext();
var cmd=item.getProperty("cmd");
this._menuItems[cmd]=item;
}
};
PopupBinding.prototype.getMenuItemForCommand=function(cmd){
var _731=null;
if(this._menuItems){
if(this._menuItems[cmd]){
_731=this._menuItems[cmd];
}else{
throw "PopupBinding.getMenuItemForCommand: No binding for command "+cmd;
}
}else{
throw "Must invoke _indexMenuContent method first!";
}
return _731;
};
PopupBinding.prototype.clear=function(){
var _732=this._bodyBinding;
if(_732){
_732.detachRecursive();
_732.bindingElement.innerHTML="";
}
this.bindingElement.style.height="auto";
this.detachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=false;
this._menuItemCount=0;
};
PopupBinding.newInstance=function(_733){
var _734=DOMUtil.createElementNS(Constants.NS_UI,"ui:popup",_733);
return UserInterface.registerBinding(_734,PopupBinding);
};
PopupBodyBinding.prototype=new Binding;
PopupBodyBinding.prototype.constructor=PopupBodyBinding;
PopupBodyBinding.superclass=Binding.prototype;
function PopupBodyBinding(){
this.logger=SystemLogger.getLogger("PopupBodyBinding");
}
PopupBodyBinding.prototype.toString=function(){
return "[PopupBodyBinding]";
};
PopupBodyBinding.prototype.setDimension=function(dim){
this.getBindingElement().style.width=new String(dim.w)+"px";
};
PopupBodyBinding.newInstance=function(_736){
var _737=DOMUtil.createElementNS(Constants.NS_UI,"ui:popupbody",_736);
return UserInterface.registerBinding(_737,PopupBodyBinding);
};
MenuPopupBinding.prototype=new PopupBinding;
MenuPopupBinding.prototype.constructor=MenuPopupBinding;
MenuPopupBinding.superclass=PopupBinding.prototype;
function MenuPopupBinding(){
this.logger=SystemLogger.getLogger("MenuPopupBinding");
return this;
}
MenuPopupBinding.prototype.toString=function(){
return "[MenuPopupBinding]";
};
MenuPopupBinding.prototype._getElementPosition=function(_738){
return new Point(_738.offsetLeft,0);
};
MenuPopupBinding.newInstance=function(_739){
var _73a=DOMUtil.createElementNS(Constants.NS_UI,"ui:menupopup",_739);
return UserInterface.registerBinding(_73a,MenuPopupBinding);
};
DialogBinding.prototype=new ControlBoxBinding;
DialogBinding.prototype.constructor=DialogBinding;
DialogBinding.superclass=ControlBoxBinding.prototype;
DialogBinding.MODE_DRAGGING="dialogdragging";
DialogBinding.MODE_RESIZING="dialogresizing";
DialogBinding.ACTION_OPEN="dialogopen";
DialogBinding.ACTION_CLOSE="dialogclose";
DialogBinding.DEFAULT_WIDTH=540;
DialogBinding.DEFAULT_HEIGHT=100;
function DialogBinding(){
this.logger=SystemLogger.getLogger("DialogBinding");
this.isFlexible=false;
this._matrix=null;
this._head=null;
this._body=null;
this._cover=null;
this._titlebar=null;
this._border=null;
this.startPoint=null;
this.geometry=null;
this.isActive=false;
this.isActivatable=false;
this.isVisible=false;
this._isResizable=true;
this.isDialogResizable=true;
this.isModal=false;
this.mode=null;
this.controlBindings={};
this._index=null;
this._hasTransitions=false;
return this;
}
DialogBinding.prototype.toString=function(){
return "[DialogBinding]";
};
DialogBinding.prototype.onBindingRegister=function(){
DialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_DRAG,this);
this.addActionListener(FocusBinding.ACTION_ACTIVATED);
this.subscribe(this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST);
this.buildDescendantBindings();
};
DialogBinding.prototype.onBindingAttach=function(){
DialogBinding.superclass.onBindingAttach.call(this);
this.geometry=this.computeDefaultGeometry();
this.parseDOMProperties();
this.buildControlBindings();
this.buildBorderBindings();
this.attachRecursive();
if(this._isResizable){
this.attachClassName("resizable");
}
if(this._hasTransitions){
this.bindingElement.style.opacity="0";
}
this.setPosition(new Point(0,0));
this.setDimension(new Dimension(DialogBinding.DEFAULT_WIDTH,DialogBinding.DEFAULT_HEIGHT));
if(this.getProperty("open")){
this.open();
}
};
DialogBinding.prototype.buildDescendantBindings=function(){
this._matrix=DialogMatrixBinding.newInstance(this.bindingDocument);
this._head=DialogHeadBinding.newInstance(this.bindingDocument);
this._titlebar=DialogTitleBarBinding.newInstance(this.bindingDocument);
this.add(this._matrix);
this.addFirst(this._head);
this._head.add(this._titlebar);
var _73b=DOMUtil.getElementsByTagName(this.bindingElement,"dialogbody").item(0);
if(_73b){
this._body=UserInterface.getBinding(_73b);
}else{
this._body=DialogBodyBinding.newInstance(this.bindingDocument);
this.add(this._body);
}
};
DialogBinding.prototype.buildBorderBindings=function(){
var _73c=new List([DialogBorderBinding.TYPE_NORTH,DialogBorderBinding.TYPE_SOUTH,DialogBorderBinding.TYPE_EAST,DialogBorderBinding.TYPE_WEST]);
while(_73c.hasNext()){
var _73d=DialogBorderBinding.newInstance(this.bindingDocument);
_73d.setType(_73c.getNext());
this.add(_73d);
}
};
DialogBinding.prototype.buildControlBindings=function(){
var _73e=this.getProperty("controls");
if(_73e){
var _73f=new List(_73e.split(" "));
while(_73f.hasNext()){
var type=_73f.getNext();
switch(type){
case ControlBinding.TYPE_MAXIMIZE:
case ControlBinding.TYPE_MINIMIZE:
case ControlBinding.TYPE_CLOSE:
var _741=DialogControlBinding.newInstance(this.bindingDocument);
_741.setControlType(type);
this._titlebar.addControl(_741);
this.controlBindings[type]=_741;
break;
default:
throw new Error("DialogBinding: Control not added: "+type);
break;
}
}
}
};
DialogBinding.prototype.buildDialogCoverBinding=function(){
this._cover=DialogCoverBinding.newInstance(this.bindingDocument);
this.getAncestorBindingByLocalName("dialogset").add(this._cover);
this._cover.cover(this);
};
DialogBinding.prototype.parseDOMProperties=function(){
var _742=this.getProperty("image");
var _743=this.getProperty("label");
var _744=this.getProperty("draggable");
var _745=this.getProperty("resizable");
var _746=this.getProperty("modal");
if(_742){
this.setImage(_742);
}
if(_743){
this.setLabel(_743);
}
if(_744==false){
this.isDialogDraggable=false;
}
if(_745==false){
this.isPanelResizable=false;
}
if(_746==true){
this.setModal(true);
}
};
DialogBinding.prototype.setModal=function(_747){
this.isModal=_747;
};
DialogBinding.prototype.setLabel=function(_748){
this.setProperty("label",_748);
if(this.isAttached==true){
this._titlebar.setLabel(Resolver.resolve(_748));
}
};
DialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
DialogBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this._titlebar.setImage(Resolver.resolve(url));
}
};
DialogBinding.prototype.handleAction=function(_74a){
DialogBinding.superclass.handleAction.call(this,_74a);
switch(_74a.type){
case Binding.ACTION_DRAG:
var _74b=_74a.target;
if(this.getState()==ControlBoxBinding.STATE_NORMAL){
switch(_74b.constructor){
case DialogTitleBarBinding:
this.mode=DialogBinding.MODE_DRAGGING;
_74b.dragger.registerHandler(this);
break;
case DialogBorderBinding:
if(this._isResizable){
this.mode=DialogBinding.MODE_RESIZING;
this._border=_74b;
_74b.dragger.registerHandler(this);
}
break;
}
}
_74a.consume();
break;
case Binding.ACTION_ACTIVATED:
if(!this.isActive){
this.activate();
}
_74a.consume();
break;
}
};
DialogBinding.prototype.handleBroadcast=function(_74c,arg){
DialogBinding.superclass.handleBroadcast.call(this,_74c,arg);
switch(_74c){
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
this.startPoint=this.getPosition();
this._setComputedPosition(new Point(0,0));
break;
}
};
DialogBinding.prototype.handleInvokedControl=function(_74e){
DialogBinding.superclass.handleInvokedControl.call(this,_74e);
switch(_74e.controlType){
case ControlBinding.TYPE_CLOSE:
this.close();
break;
}
};
DialogBinding.prototype.open=function(_74f){
if(this.isModal&&this._cover==null){
this.buildDialogCoverBinding();
}
if(!this.isVisible){
this.setProperty("open","true");
this.isVisible=true;
this.isActivatable=true;
this.activate();
if(_74f){
}else{
this.centerOnScreen();
this.reflex(true);
}
this.bindingElement.style.marginTop="0";
this.dispatchAction(DialogBinding.ACTION_OPEN);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
if(this._hasTransitions){
this.bindingElement.style.opacity="1";
}
}
};
DialogBinding.prototype.close=function(){
if(this.isVisible){
this.isActivatable=false;
this.deActivate();
var self=this;
function doit(){
self.isVisible=false;
self.deleteProperty("open");
self.bindingElement.style.marginTop="-10000px";
self.dispatchAction(DialogBinding.ACTION_CLOSE);
}
if(!this._hasTransitions){
setTimeout(function(){
doit();
},0);
}else{
var _751=self.bindingElement;
setTimeout(function(){
_751.style.opacity="0";
setTimeout(function(){
doit();
},Animation.DEFAULT_TIME);
},Animation.DEFAULT_TIME);
}
}
};
DialogBinding.prototype.activate=function(){
if(!this.isActive){
this.isActive=true;
this.attachClassName("active");
this.moveToTop();
this._titlebar.onActivate();
Application.activate(this);
}
};
DialogBinding.prototype.deActivate=function(){
if(this.isActive==true){
this.isActive=false;
this.detachClassName("active");
this._titlebar.onDeactivate();
Application.deActivate(this);
}
};
DialogBinding.prototype.moveToTop=function(){
this.dispatchAction(Binding.ACTION_MOVETOTOP);
this.dispatchAction(Binding.ACTION_MOVEDONTOP);
};
DialogBinding.prototype.getZIndex=function(){
return CSSComputer.getZIndex(this.bindingElement);
};
DialogBinding.prototype.setZIndex=function(_752){
this.bindingElement.style.zIndex=new String(_752);
};
DialogBinding.prototype.onDragStart=function(_753){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
case DialogBinding.MODE_RESIZING:
this.startPoint=new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
this.startDimension=new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
break;
}
};
DialogBinding.prototype.onDrag=function(diff){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
this._setComputedPosition(diff);
break;
case DialogBinding.MODE_RESIZING:
switch(this._border.getType()){
case DialogBorderBinding.TYPE_NORTH:
this.resizeNorth(diff);
break;
case DialogBorderBinding.TYPE_SOUTH:
this.resizeSouth(diff);
break;
case DialogBorderBinding.TYPE_EAST:
this.resizeEast(diff);
break;
case DialogBorderBinding.TYPE_WEST:
this.resizeWest(diff);
break;
}
this.reflex(true);
break;
}
};
DialogBinding.prototype.onDragStop=function(diff){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
this._setComputedPosition(diff);
break;
case DialogBinding.MODE_RESIZING:
break;
}
this.mode=null;
};
DialogBinding.prototype.resizeNorth=function(diff){
this.setPosition(new Point(this.startPoint.x,this.startPoint.y+diff.y));
this.setDimension(new Dimension(this.startDimension.w,this.startDimension.h-diff.y));
};
DialogBinding.prototype.resizeSouth=function(diff){
this.setDimension(new Dimension(this.startDimension.w,this.startDimension.h+diff.y));
};
DialogBinding.prototype.resizeEast=function(diff){
this.setDimension(new Dimension(this.startDimension.w+diff.x,this.startDimension.h));
};
DialogBinding.prototype.resizeWest=function(diff){
this.setPosition(new Point(this.startPoint.x+diff.x,this.startPoint.y));
this.setDimension(new Dimension(this.startDimension.w-diff.x,this.startDimension.h));
};
DialogBinding.prototype._setComputedPosition=function(diff){
var win=this.bindingWindow.WindowManager.getWindowDimensions();
var dim=this.getDimension();
var x=this.startPoint.x+diff.x;
var y=this.startPoint.y+diff.y;
x=x<0?0:x+dim.w>win.w?win.w-dim.w:x;
y=y<0?0:y+dim.h>win.h?win.h-dim.h:y;
this.setPosition(new Point(x,y));
};
DialogBinding.prototype.setPosition=function(p){
var x=p.x;
var y=p.y;
x=Math.round(x);
this.bindingElement.style.left=x+"px";
this.geometry.x=x;
y=Math.round(y);
this.bindingElement.style.top=y+"px";
this.geometry.y=y;
};
DialogBinding.prototype.getPosition=function(){
return new Point(this.geometry.x,this.geometry.y);
};
DialogBinding.prototype.setDimension=function(dim){
if(!dim){
SystemDebug.stack(arguments);
}
var w=dim.w;
var h=dim.h;
w=Math.round(w);
this.bindingElement.style.width=w+"px";
this.geometry.w=w;
h=Math.round(h);
this.bindingElement.style.height=h+"px";
this.geometry.h=h;
};
DialogBinding.prototype.getDimension=function(){
return new Dimension(this.geometry.w,this.geometry.h);
};
DialogBinding.prototype.setResizable=function(_765){
if(this._isResizable!=_765){
if(_765){
this.attachClassName("resizable");
}else{
this.detachClassName("resizable");
}
this._isResizable=_765;
}
};
DialogBinding.prototype.computeDefaultGeometry=function(){
var _766=null;
var _767=this.bindingDocument.body.offsetWidth;
var _768=this.bindingDocument.body.offsetHeight;
_766={x:0.125*_767,y:0.125*_768,w:0.75*_767,h:0.5*_768};
return _766;
};
DialogBinding.prototype.centerOnScreen=function(){
var _769=this.bindingWindow.WindowManager.getWindowDimensions();
var dim=this.getDimension();
this.setPosition(new Point(0.5*(_769.w-dim.w),0.5*(_769.h-dim.h)));
};
DialogBinding.prototype.alert=function(){
var _76b=this;
var i=0;
function blink(){
if(i%2==0){
_76b.detachClassName("active");
}else{
_76b.attachClassName("active");
}
if(i++<7){
setTimeout(blink,50);
}
}
blink();
};
DialogBinding.prototype.setControls=function(list){
for(var type in this.controlBindings){
this.controlBindings[type].dispose();
}
var _76f="";
while(list.hasNext()){
var type=list.getNext();
_76f+=type+list.hasNext()?" ":"";
}
this.setProperty("controls",_76f);
if(this.isAttached){
this.buildControlBindings();
}
};
DialogBinding.newInstance=function(_770){
var _771=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialog",_770);
return UserInterface.registerBinding(_771,DialogBinding);
};
DialogHeadBinding.prototype=new Binding;
DialogHeadBinding.prototype.constructor=DialogHeadBinding;
DialogHeadBinding.superclass=Binding.prototype;
function DialogHeadBinding(){
this.logger=SystemLogger.getLogger("DialogHeadBinding");
}
DialogHeadBinding.prototype.toString=function(){
return "[DialogHeadBinding]";
};
DialogHeadBinding.newInstance=function(_772){
var _773=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialoghead",_772);
return UserInterface.registerBinding(_773,DialogHeadBinding);
};
DialogBodyBinding.prototype=new FlexBoxBinding;
DialogBodyBinding.prototype.constructor=DialogBodyBinding;
DialogBodyBinding.superclass=FlexBoxBinding.prototype;
function DialogBodyBinding(){
this.logger=SystemLogger.getLogger("DialogBodyBinding");
this.panelBinding=null;
this.isVisible=true;
this._dialogBinding=null;
}
DialogBodyBinding.prototype.toString=function(){
return "[DialogBodyBinding]";
};
DialogBodyBinding.prototype.onBindingAttach=function(){
DialogBodyBinding.superclass.onBindingAttach.call(this);
this._dialogBinding=UserInterface.getBinding(this.bindingElement.parentNode);
};
DialogBodyBinding.prototype.getPosition=function(){
var pos=this._dialogBinding.getPosition();
return new Position(pos.x+this.offsetLeft+DialogBorderBinding.DIMENSION,pos.y+this.offsetTop);
};
DialogBodyBinding.prototype.getDimension=function(){
var dim=this.boxObject.getDimension();
return new Dimension(dim.w-2*DialogBorderBinding.DIMENSION,dim.h-DialogBorderBinding.DIMENSION);
};
DialogBodyBinding.newInstance=function(_776){
var _777=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogbody",_776);
return UserInterface.registerBinding(_777,DialogBodyBinding);
};
DialogMatrixBinding.prototype=new MatrixBinding;
DialogMatrixBinding.prototype.constructor=DialogMatrixBinding;
DialogMatrixBinding.superclass=MatrixBinding.prototype;
function DialogMatrixBinding(){
this.logger=SystemLogger.getLogger("DialogMatrixBinding");
this.isDraggable=true;
this._type=null;
}
DialogMatrixBinding.prototype.toString=function(){
return "[DialogMatrixBinding]";
};
DialogMatrixBinding.prototype.onBindingAttach=function(){
DialogMatrixBinding.superclass.onBindingAttach.call(this);
this.shadowTree.table.className="matrix dialogmatrix";
this._indexTable();
this.shadowTree[MatrixBinding.CENTER].appendChild(this.bindingDocument.createTextNode("."));
};
DialogMatrixBinding.newInstance=function(_778){
var _779=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogmatrix",_778);
return UserInterface.registerBinding(_779,DialogMatrixBinding);
};
DialogSetBinding.prototype=new Binding;
DialogSetBinding.prototype.constructor=DialogSetBinding;
DialogSetBinding.superclass=Binding.prototype;
function DialogSetBinding(){
this.logger=SystemLogger.getLogger("DialogSetBinding");
}
DialogSetBinding.prototype.toString=function(){
return "[DialogSetBinding]";
};
DialogSetBinding.prototype.onBindingAttach=function(){
DialogSetBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_MOVETOTOP,this);
this.addActionListener(Binding.ACTION_MOVEDONTOP,this);
};
DialogSetBinding.prototype.handleAction=function(_77a){
DialogSetBinding.superclass.handleAction.call(this,_77a);
var _77b=_77a.target;
switch(_77a.type){
case Binding.ACTION_MOVETOTOP:
if(_77b instanceof DialogBinding){
this._moveToTop(_77b);
}
break;
case Binding.ACTION_MOVEDONTOP:
_77a.consume();
break;
}
};
DialogSetBinding.prototype._moveToTop=function(_77c){
var _77d=0;
var _77e=this.getChildBindingsByLocalName("dialog");
_77e.each(function(_77f){
var _780=_77f.getZIndex();
_77d=_780>_77d?_780:_77d;
});
_77c.setZIndex(_77d+2);
};
DialogBorderBinding.prototype=new Binding;
DialogBorderBinding.prototype.constructor=DialogBorderBinding;
DialogBorderBinding.superclass=Binding.prototype;
DialogBorderBinding.TYPE_NORTH="n";
DialogBorderBinding.TYPE_SOUTH="s";
DialogBorderBinding.TYPE_EAST="e";
DialogBorderBinding.TYPE_WEST="w";
DialogBorderBinding.DIMENSION=4;
function DialogBorderBinding(){
this.logger=SystemLogger.getLogger("DialogBorderBinding");
this.isDraggable=true;
this._type=null;
}
DialogBorderBinding.prototype.toString=function(){
return "[DialogBorderBinding]";
};
DialogBorderBinding.prototype.setType=function(type){
this.attachClassName(type);
this._type=type;
};
DialogBorderBinding.prototype.getType=function(){
return this._type;
};
DialogBorderBinding.newInstance=function(_782){
var _783=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogborder",_782);
return UserInterface.registerBinding(_783,DialogBorderBinding);
};
DialogCoverBinding.prototype=new Binding;
DialogCoverBinding.prototype.constructor=DialogCoverBinding;
DialogCoverBinding.superclass=Binding.prototype;
function DialogCoverBinding(){
this.logger=SystemLogger.getLogger("DialogCoverBinding");
this._dialogBinding=null;
}
DialogCoverBinding.prototype.toString=function(){
return "[DialogCoverBinding]";
};
DialogCoverBinding.prototype.cover=function(_784){
this._dialogBinding=_784;
this._dialogBinding.addActionListener(DialogBinding.ACTION_OPEN,this);
this._dialogBinding.addActionListener(DialogBinding.ACTION_CLOSE,this);
this._dialogBinding.addActionListener(Binding.ACTION_MOVEDONTOP,this);
this.addEventListener(DOMEvents.MOUSEDOWN);
};
DialogCoverBinding.prototype.handleEvent=function(e){
DialogCoverBinding.superclass.handleEvent.call(this,e);
this._dialogBinding.alert();
};
DialogCoverBinding.prototype.handleAction=function(_786){
DialogCoverBinding.superclass.handleAction.call(this,_786);
var _787=_786.target;
if(this._dialogBinding.isModal){
switch(_786.type){
case DialogBinding.ACTION_OPEN:
this.show();
break;
case DialogBinding.ACTION_CLOSE:
this.hide();
break;
case Binding.ACTION_MOVEDONTOP:
if(_787==this._dialogBinding){
this.bindingElement.style.zIndex=new String(_787.getZIndex()-1);
}
break;
}
}
};
DialogCoverBinding.prototype.handleBroadcast=function(_788,arg){
DialogCoverBinding.superclass.handleBroadcast.call(this,_788,arg);
switch(_788){
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
this._max();
break;
}
};
DialogCoverBinding.prototype._max=function(){
var dim=this.bindingWindow.WindowManager.getWindowDimensions();
this.bindingElement.style.width=dim.w+"px";
this.bindingElement.style.height=dim.h+"px";
};
DialogCoverBinding.prototype.show=function(){
this._max();
var _78b=this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST;
this.subscribe(_78b);
DialogCoverBinding.superclass.show.call(this);
};
DialogCoverBinding.prototype.hide=function(){
var _78c=this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST;
this.unsubscribe(_78c);
DialogCoverBinding.superclass.hide.call(this);
};
DialogCoverBinding.newInstance=function(_78d){
var _78e=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogcover",_78d);
return UserInterface.registerBinding(_78e,DialogCoverBinding);
};
DialogTitleBarBinding.prototype=new Binding;
DialogTitleBarBinding.prototype.constructor=DialogTitleBarBinding;
DialogTitleBarBinding.superclass=Binding.prototype;
function DialogTitleBarBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarBinding");
this.bodyBinding=null;
this.labelBinding=null;
this._controlGroupBinding=null;
this.isDraggable=true;
}
DialogTitleBarBinding.prototype.toString=function(){
return "[DialogTitleBarBinding]";
};
DialogTitleBarBinding.prototype.onBindingRegister=function(){
DialogTitleBarBinding.superclass.onBindingRegister.call(this);
this.bodyBinding=this.add(DialogTitleBarBodyBinding.newInstance(this.bindingDocument));
this.labelBinding=this.bodyBinding.add(LabelBinding.newInstance(this.bindingDocument));
this.labelBinding.attachClassName("dialogtitle");
};
DialogTitleBarBinding.prototype.onBindingAttach=function(){
DialogTitleBarBinding.superclass.onBindingAttach.call(this);
var _78f=this.getProperty("image");
if(_78f){
this.setImage(_78f);
}
var _790=this.getProperty("label");
if(_790){
this.setLabel(_790);
}
};
DialogTitleBarBinding.prototype.setLabel=function(_791){
if(this.isAttached){
this.labelBinding.setLabel(_791);
}
this.setProperty("label",_791);
};
DialogTitleBarBinding.prototype.setImage=function(url){
if(this.isAttached&&Client.isWindows){
this.labelBinding.setImage(url);
}
this.setProperty("image",url);
};
DialogTitleBarBinding.prototype.addControl=function(_793){
if(!this._controlGroupBinding){
this._controlGroupBinding=this.bodyBinding.addFirst(ControlGroupBinding.newInstance(this.bindingDocument));
}
this._controlGroupBinding.add(_793);
};
DialogTitleBarBinding.prototype.onActivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onActivate();
}
};
DialogTitleBarBinding.prototype.onDeactivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onDeactivate();
}
};
DialogTitleBarBinding.newInstance=function(_794){
var _795=DOMUtil.createElementNS(Constants.NS_UI,"ui:titlebar",_794);
return UserInterface.registerBinding(_795,DialogTitleBarBinding);
};
DialogTitleBarBodyBinding.prototype=new Binding;
DialogTitleBarBodyBinding.prototype.constructor=DialogTitleBarBodyBinding;
DialogTitleBarBodyBinding.superclass=Binding.prototype;
function DialogTitleBarBodyBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarBodyBinding");
}
DialogTitleBarBodyBinding.prototype.toString=function(){
return "[DialogTitleBarBodyBinding]";
};
DialogTitleBarBodyBinding.prototype.onBindingRegister=function(){
DialogTitleBarBodyBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
DialogTitleBarBodyBinding.newInstance=function(_796){
var _797=DOMUtil.createElementNS(Constants.NS_UI,"ui:titlebarbody",_796);
return UserInterface.registerBinding(_797,DialogTitleBarBodyBinding);
};
DialogControlBinding.prototype=new ControlBinding;
DialogControlBinding.prototype.constructor=DialogControlBinding;
DialogControlBinding.superclass=ControlBinding.prototype;
DialogControlBinding.CLASSNAME="dialogcontrol";
function DialogControlBinding(){
this.logger=SystemLogger.getLogger("DialogControlBinding");
this.hasMatrix=false;
this.isGhostable=true;
}
DialogControlBinding.prototype.toString=function(){
return "[DialogControlBinding]";
};
DialogControlBinding.prototype.onBindingRegister=function(){
DialogControlBinding.superclass.onBindingRegister.call(this);
this.setImageProfile(DialogControlImageProfile);
this.attachClassName(DialogControlBinding.CLASSNAME);
};
DialogControlBinding.newInstance=function(_798){
var _799=DOMUtil.createElementNS(Constants.NS_UI,"ui:control",_798);
return UserInterface.registerBinding(_799,DialogControlBinding);
};
DialogControlImageProfile.prototype=new ControlImageProfile;
DialogControlImageProfile.prototype.constructor=DialogControlImageProfile;
DialogControlImageProfile.superclass=ControlImageProfile.prototype;
var os=Client.isVista?"vista/":(!Client.isWindows?"osx/":"");
DialogControlImageProfile.IMAGE_MINIMIZE="${root}/skins/system/controls/"+os+"control-minimize-${string}.png";
DialogControlImageProfile.IMAGE_MAXIMIZE="${root}/skins/system/controls/"+os+"control-maximize-${string}.png";
DialogControlImageProfile.IMAGE_RESTORE="${root}/skins/system/controls/"+os+"control-restore-${string}.png";
DialogControlImageProfile.IMAGE_CLOSE="${root}/skins/system/controls/"+os+"control-close-${string}.png";
function DialogControlImageProfile(_79a){
this.binding=_79a;
}
DialogTitleBarPopupBinding.prototype=new PopupBinding;
DialogTitleBarPopupBinding.prototype.constructor=DialogTitleBarPopupBinding;
DialogTitleBarPopupBinding.superclass=PopupBinding.prototype;
DialogTitleBarPopupBinding.CMD_RESTORE="restore";
DialogTitleBarPopupBinding.CMD_MINIMIZE="minimize";
DialogTitleBarPopupBinding.CMD_MAXIMIZE="maximize";
DialogTitleBarPopupBinding.CMD_REFRESH="refreshview";
DialogTitleBarPopupBinding.CMD_CLOSE="closedialog";
DialogTitleBarPopupBinding.CMD_VIEWSOURCE="viewsource";
DialogTitleBarPopupBinding.CMD_VIEWGENERATED="viewgenerated";
DialogTitleBarPopupBinding.CMD_VIEWSERIALIZED="viewserialized";
function DialogTitleBarPopupBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarPopupBinding");
}
DialogTitleBarPopupBinding.prototype.toString=function(){
return "[DialogTitleBarPopupBinding]";
};
DialogTitleBarPopupBinding.prototype.onBindingAttach=function(){
DialogTitleBarPopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
WindowBindingHighlightNodeCrawler.prototype=new NodeCrawler;
WindowBindingHighlightNodeCrawler.prototype.constructor=WindowBindingHighlightNodeCrawler;
WindowBindingHighlightNodeCrawler.superclass=NodeCrawler.prototype;
WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT="compositec1generatedhighlight";
function WindowBindingHighlightNodeCrawler(){
this._keywords=null;
this._map=new Map();
this._textnodes=null;
this._construct();
return this;
}
WindowBindingHighlightNodeCrawler.prototype._construct=function(){
ElementCrawler.superclass._construct.call(this);
this.addFilter(function(node,arg){
var _79d=null;
if(node.nodeType==Node.ELEMENT_NODE){
var _79e=node.nodeName.toLowerCase();
switch(_79e){
case "script":
case "style":
case "textarea":
_79d=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
break;
}
}
return _79d;
});
var self=this;
this.addFilter(function(node,arg){
if(node.nodeType==Node.TEXT_NODE){
var text=node.nodeValue.toLowerCase();
self._map.each(function(key,exp){
var _7a5=true;
if(exp.test(text)){
self._textnodes.add(node);
_7a5=false;
}
return _7a5;
});
}
});
};
WindowBindingHighlightNodeCrawler.prototype.crawl=function(_7a6,arg){
this._textnodes=new List();
WindowBindingHighlightNodeCrawler.superclass.crawl.call(this,_7a6,arg);
};
WindowBindingHighlightNodeCrawler.prototype.setKeys=function(list){
list.reset();
this._map.empty();
while(list.hasNext()){
var key=list.getNext();
var _7aa=key.toLowerCase().replace(/ /g,"\\W");
var exp=new RegExp("("+_7aa+")");
this._map.set(key,exp);
}
};
WindowBindingHighlightNodeCrawler.prototype.onCrawlStop=function(){
var self=this;
if(this._textnodes.hasEntries()){
this._textnodes.each(function(node){
var div=self.contextDocument.createElement("div");
var frag=self.contextDocument.createDocumentFragment();
div.innerHTML=self._getMarkup(node.nodeValue);
while(div.hasChildNodes()){
frag.appendChild(div.firstChild);
}
node.parentNode.replaceChild(frag,node);
});
}
};
WindowBindingHighlightNodeCrawler.prototype._getMarkup=function(_7b0){
var _7b1="";
var _7b2="<span class=\""+WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT+"\" style=\"background-color:yellow;color:black;\">";
var _7b3="</span>";
var self=this;
function iterate(_7b5){
var _7b6=-1;
var _7b7=null;
self._map.each(function(key,exp){
var low=_7b5.toLowerCase();
var _7bb=low.search(exp);
if(_7bb>-1){
if(_7b6==-1){
_7b6=_7bb;
}
if(_7bb<=_7b6){
_7b6=_7bb;
_7b7=key;
}
}
});
if(_7b6>-1&&_7b7!=null){
var pre=_7b5.substring(0,_7b6);
var hit=_7b5.substring(_7b6,_7b6+_7b7.length);
var pst=_7b5.substring(_7b6+_7b7.length,_7b5.length);
_7b1+=pre+_7b2+hit+_7b3;
iterate(pst);
}else{
_7b1+=_7b5;
}
}
iterate(_7b0);
return _7b1;
};
WindowBindingHighlightNodeCrawler.prototype.reset=function(_7bf){
var _7c0=new List(_7bf.getElementsByTagName("span"));
_7c0.each(function(span){
if(span.className==WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT){
var node=_7bf.ownerDocument.createTextNode(DOMUtil.getTextContent(span));
span.parentNode.replaceChild(node,span);
}
});
};
WindowBinding.prototype=new FlexBoxBinding;
WindowBinding.prototype.constructor=WindowBinding;
WindowBinding.superclass=FlexBoxBinding.prototype;
WindowBinding.ACTION_LOADED="window loaded";
WindowBinding.ACTION_ONLOAD="alien window loaded";
WindowBinding.DEFAULT_URL="${root}/blank.aspx";
WindowBinding.DEFAULT_TITLE="Composite.Management.Blank";
WindowBinding.POSTBACK_URL="${root}/postback.aspx";
WindowBinding.POSTBACK_TITLE="Composite.Management.DefaultPostBack";
WindowBinding.getMarkup=function(_7c3){
var _7c4=null;
if(_7c3.isAttached){
var doc=_7c3.getContentDocument();
if(doc!=null){
var root=doc.getElementsByTagName("html").item(0);
var html="<html xmlns=\""+Constants.NS_XHTML+"\">"+root.innerHTML+"</html>";
WebServiceProxy.isFaultHandler=false;
_7c4=top.MarkupFormatService.HtmlToXhtml(html);
WebServiceProxy.isFaultHandler=true;
if(_7c4 instanceof SOAPFault){
_7c4=null;
}
}
}
return _7c4;
};
WindowBinding.highlightKeywords=function(_7c8,list){
if(WindowBinding._highlightcrawler==null){
WindowBinding._highlightcrawler=new WindowBindingHighlightNodeCrawler();
}
if(_7c8.isAttached){
var doc=_7c8.getContentDocument();
if(doc!=null){
var _7cb=WindowBinding._highlightcrawler;
_7cb.reset(doc.body);
if(list!=null){
_7cb.setKeys(list);
_7cb.crawl(doc.body);
}
}
}
};
WindowBinding._highlightcrawler=null;
function WindowBinding(){
this.logger=SystemLogger.getLogger("WindowBinding");
this._target=null;
this._parameterMap=null;
this._pageBinding=null;
this._isReloading=false;
this._onloadHandler=null;
this._unloadHandler=null;
this._hasLoadActionFired=false;
return this;
}
WindowBinding.prototype.toString=function(){
return "[WindowBinding]";
};
WindowBinding.prototype.serialize=function(){
var _7cc=WindowBinding.superclass.serialize.call(this);
if(_7cc){
_7cc.url=this.getURL();
}
return _7cc;
};
WindowBinding.prototype.onBindingRegister=function(){
WindowBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RootBinding.ACTION_PHASE_3);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(RootBinding.ACTION_ACTIVATED);
this.addActionListener(RootBinding.ACTION_DEACTIVATED);
};
WindowBinding.prototype.onBindingAttach=function(){
this.buildDOMContent();
WindowBinding.superclass.onBindingAttach.call(this);
this.setURL(this.getURL());
};
WindowBinding.prototype.onBindingDispose=function(){
WindowBinding.superclass.onBindingDispose.call(this);
this._disposeContentDocument();
};
WindowBinding.prototype._disposeContentDocument=function(){
if(this._pageBinding!=null){
var win=this.getContentWindow();
if(win!=null){
var _7ce=this.getContentWindow().DocumentManager;
if(_7ce!=null){
_7ce.detachAllBindings();
this._pageBinding=null;
}
}
}
};
WindowBinding.prototype.handleAction=function(_7cf){
WindowBinding.superclass.handleAction.call(this,_7cf);
var _7d0=_7cf.target;
switch(_7cf.type){
case RootBinding.ACTION_PHASE_3:
if(_7d0.bindingDocument==this.getContentDocument()){
if(this._isReloading==true){
this._isReloading=false;
if(Client.isPrism==true){
Prism.enableCache();
}
}
this.dispatchAction(WindowBinding.ACTION_LOADED);
}
break;
case PageBinding.ACTION_INITIALIZED:
this._onPageInitialize(_7d0);
break;
case RootBinding.ACTION_ACTIVATED:
case RootBinding.ACTION_DEACTIVATED:
_7cf.consume();
break;
}
};
WindowBinding.prototype.fit=function(_7d1){
if(!this.isFit||_7d1){
if(this._pageBinding!=null){
this.setHeight(this._pageBinding.getHeight());
this.isFit=true;
}
}
};
WindowBinding.prototype._onPageInitialize=function(_7d2){
if(this._pageBinding==null){
if(_7d2.bindingWindow==this.getContentWindow()){
this._pageBinding=_7d2;
}
}
};
WindowBinding.prototype.buildDOMContent=function(){
this.shadowTree.iframe=DOMUtil.createElementNS(Constants.NS_XHTML,"iframe",this.bindingDocument);
this.shadowTree.iframe.setAttribute("frameborder","0");
this.shadowTree.iframe.frameBorder=0;
this.shadowTree.iframe.id=KeyMaster.getUniqueKey();
this.shadowTree.iframe.name=this.shadowTree.iframe.id;
this.bindingElement.appendChild(this.shadowTree.iframe);
this._registerOnloadListener(true);
};
WindowBinding.prototype._registerOnloadListener=function(_7d3){
var _7d4=this.shadowTree.iframe;
var _7d5=_7d3?"addEventListener":"removeEventListener";
if(this._onloadHandler==null){
var self=this;
this._onloadHandler={handleEvent:function(e){
var _7d8=true;
if(Client.isExplorer){
_7d8=_7d4.readyState=="complete";
}
if(_7d8==true){
if(self.getURL()!=WindowBinding.DEFAULT_URL){
if(!self._hasLoadActionFired){
self.onWindowLoaded(self.getContentWindow());
}
}
}
}};
}
DOMEvents[_7d5](this.shadowTree.iframe,Client.isExplorer==true?"readystatechange":DOMEvents.LOAD,this._onloadHandler);
};
WindowBinding.prototype._registerUnloadListener=function(_7d9){
var _7da=_7d9?"addEventListener":"removeEventListener";
if(this._unloadHandler==null){
var self=this;
this._unloadHandler={handleEvent:function(){
self._disposeContentDocument();
self._hasLoadActionFired=false;
}};
}
DOMEvents[_7da](this.getContentWindow(),DOMEvents.UNLOAD,this._unloadHandler);
};
WindowBinding.prototype.onWindowLoaded=function(win){
if(win==null){
this.logger.error("WindowBinding#onWindowLoaded: Bad argument: "+this.getURL());
}else{
if(this.getURL()!=WindowBinding.DEFAULT_URL){
if(!this._hasLoadActionFired){
if(win!=null&&win.document!=null&&win.document.body!=null){
win.document.body.style.border="none";
if(win.WindowManager==undefined){
Application.framework(win.document);
}
if(this._isReloading==true){
this._isReloading=false;
if(Client.isPrism){
Prism.enableCache();
}
}
}
this._registerUnloadListener(true);
this.dispatchAction(WindowBinding.ACTION_ONLOAD);
this._hasLoadActionFired=true;
this.fitContentWindow();
}
}
}
};
WindowBinding.prototype.setURL=function(url,data){
this.setProperty("url",url);
this._hasLoadActionFired=false;
if(this.isAttached==true){
this._disposeContentDocument();
if(url.length>1900){
var _7df=new Uri(Resolver.resolve(url));
if(!data){
data=new Map();
}
_7df.getQueryString().each(function(name,_7e1){
if(_7e1.length>512){
data.set(name,_7e1);
_7df.setParam(name,null);
}
});
url=_7df.toString();
}
if(data){
var self=this;
var _7e3=this.getFrameElement();
if(typeof this.shadowTree.form=="undefined"){
this.shadowTree.form=DOMUtil.createElementNS(Constants.NS_XHTML,"form",this.bindingDocument);
this.shadowTree.form.style.display="none";
this.shadowTree.form.enctype="application/x-www-form-urlencoded";
this.shadowTree.form.method="POST";
this.bindingElement.appendChild(this.shadowTree.form);
}
var form=this.shadowTree.form;
form.action=url;
form.target=_7e3.id;
form.setAttribute("target",_7e3.id);
while(form.firstChild){
form.removeChild(form.firstChild);
}
data.each(function(name,_7e6){
var _7e7=self.bindingDocument.createElement("input");
_7e7.name=name;
_7e7.value=_7e6;
_7e7.type="hidden";
form.appendChild(_7e7);
});
form.submit();
}else{
this.getFrameElement().src=Resolver.resolve(url);
}
}
};
WindowBinding.prototype.getURL=function(){
var _7e8=WindowBinding.DEFAULT_URL;
var url=this.getProperty("url");
if(url){
_7e8=url;
}
return _7e8;
};
WindowBinding.prototype.reload=function(_7ea){
this._disposeContentDocument();
if(Client.isPrism){
Prism.disableCache();
}
this._isReloading=true;
this.getContentDocument().location.reload();
};
WindowBinding.prototype.getFrameElement=function(){
var _7eb=null;
if(this.shadowTree.iframe!=null){
_7eb=this.shadowTree.iframe;
}
return _7eb;
};
WindowBinding.prototype.getContentWindow=function(){
var _7ec=null,_7ed=this.getFrameElement();
if(_7ed!==null){
try{
_7ec=_7ed.contentWindow;
}
catch(e){
this.logger.error("WindowBinding#getContentWindow: strange IE9 error");
}
}
return _7ec;
};
WindowBinding.prototype.getContentDocument=function(){
var _7ee=null,win=this.getContentWindow();
if(win){
_7ee=win.document;
}
return _7ee;
};
WindowBinding.prototype.getRootBinding=function(){
var _7f0=null,doc=this.getContentDocument();
if(doc&&doc.body){
_7f0=UserInterface.getBinding(doc.body);
}
return _7f0;
};
WindowBinding.prototype.getPageBinding=function(){
return this._pageBinding;
};
WindowBinding.prototype.setHeight=function(_7f2){
this.bindingElement.style.height=_7f2+"px";
};
WindowBinding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
WindowBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
WindowBinding.prototype.handleCrawler=function(_7f3){
WindowBinding.superclass.handleCrawler.call(this,_7f3);
if(_7f3.type==NodeCrawler.TYPE_DESCENDING){
var root=this.getRootBinding();
if(root!=null){
_7f3.nextNode=root.bindingElement;
}else{
_7f3.response=NodeCrawler.SKIP_CHILDREN;
}
}
};
WindowBinding.prototype.post=function(list,url){
var win=this.getContentWindow();
if(win.isPostBackDocument){
win.submit(list,url);
}else{
throw "Post aborted";
}
};
WindowBinding.prototype.flex=function(){
this.fitContentWindow();
WindowBinding.superclass.flex.call(this);
};
WindowBinding.prototype.fitContentWindow=function(){
if(Client.isPad){
var _7f8=this.getContentWindow();
if(_7f8!=null&&_7f8.document!=null&&_7f8.document.body!=null){
_7f8.document.body.style.height=this.bindingElement.offsetHeight+"px";
}
}
};
WindowBinding.newInstance=function(_7f9){
var _7fa=DOMUtil.createElementNS(Constants.NS_UI,"ui:window",_7f9);
var _7fb=UserInterface.registerBinding(_7fa,WindowBinding);
return _7fb;
};
PreviewWindowBinding.prototype=new WindowBinding;
PreviewWindowBinding.prototype.constructor=PreviewWindowBinding;
PreviewWindowBinding.superclass=WindowBinding.prototype;
PreviewWindowBinding.URL_FULL_STOP="${root}/content/misc/preview/stop.aspx";
PreviewWindowBinding.URL_ERROR="${root}/content/misc/preview/error.aspx";
PreviewWindowBinding.ACTION_RETURN="return";
PreviewWindowBinding.TIMEOUT_RETURN=parseInt(2300);
function PreviewWindowBinding(){
this.logger=SystemLogger.getLogger("PreviewWindowBinding");
this._postBackList=null;
this._postBackURL=null;
this._coverBinding=null;
this._windowBinding=null;
this._errorBinding=null;
this._hasFullStop=false;
this._isReturning=false;
this._loadhandler=null;
this._timeout=null;
return this;
}
PreviewWindowBinding.prototype.toString=function(){
return "[PreviewWindowBinding]";
};
PreviewWindowBinding.prototype.onBindingAttach=function(){
PreviewWindowBinding.superclass.onBindingAttach.call(this);
this.bindingElement.style.backgroundColor="white";
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
this._coverBinding.attach();
};
PreviewWindowBinding.prototype.onWindowLoaded=function(win){
if(this.getURL()!=WindowBinding.DEFAULT_URL){
if(!this._hasFullStop){
if(win.isPostBackDocument){
if(this._isReturning){
win.submit(this._postBackList,this._postBackURL);
this._isReturning=false;
}
}else{
this._coverBinding.hide();
}
if(!win.isDefaultDocument){
var self=this;
this._loadhandler={handleEvent:function(e){
self._coverBinding.show();
if(win.isPostBackDocument){
self._postBackList=win.postBackList;
self._postBackURL=win.postBackURL;
}else{
if(!win.isDefaultDocument){
self._fullStop();
}
}
}};
DOMEvents.addEventListener(win,DOMEvents.BEFOREUNLOAD,this._loadhandler);
}
}
}
PreviewWindowBinding.superclass.onWindowLoaded.call(this,win);
};
PreviewWindowBinding.prototype._fullStop=function(){
this._coverBinding.show();
if(this._windowBinding==null){
this._windowBinding=this._getWindowBinding();
this._windowBinding.setURL(PreviewWindowBinding.URL_FULL_STOP);
this._windowBinding.hide();
this._windowBinding.attach();
this._windowBinding.addActionListener(WindowBinding.ACTION_LOADED,{handleAction:function(_7ff){
_7ff.target.show();
_7ff.consume();
}});
}else{
this._windowBinding.show();
}
this._hasFullStop=true;
this.addActionListener(PreviewWindowBinding.ACTION_RETURN);
this.setURL(WindowBinding.DEFAULT_URL);
var self=this;
this._timeout=setTimeout(function(){
self._return();
},PreviewWindowBinding.TIMEOUT_RETURN);
};
PreviewWindowBinding.prototype.error=function(){
this._coverBinding.show();
if(this._errorBinding==null){
this._errorBinding=this._getWindowBinding();
this._errorBinding.setURL(PreviewWindowBinding.URL_ERROR);
this._errorBinding.hide();
this._errorBinding.attach();
this._errorBinding.addActionListener(WindowBinding.ACTION_LOADED,{handleAction:function(_801){
_801.target.show();
_801.consume();
}});
}else{
this._errorBinding.show();
}
this._hasError=true;
this.setURL(WindowBinding.DEFAULT_URL);
};
PreviewWindowBinding.prototype._getWindowBinding=function(){
var win=this._coverBinding.add(WindowBinding.newInstance(this.bindingDocument));
win.isFlexible=false;
win.bindingElement.style.position="absolute";
win.bindingElement.style.width="100%";
win.bindingElement.style.height="100%";
return win;
};
PreviewWindowBinding.prototype.handleAction=function(_803){
PreviewWindowBinding.superclass.handleAction.call(this,_803);
switch(_803.type){
case PreviewWindowBinding.ACTION_RETURN:
this._return();
break;
}
};
PreviewWindowBinding.prototype._return=function(){
clearTimeout(this._timeout);
this._timeout=null;
this.removeActionListener(PreviewWindowBinding.ACTION_RETURN);
this._windowBinding.hide();
this._hasFullStop=false;
this._isReturning=true;
this.setURL(WindowBinding.POSTBACK_URL);
};
PreviewWindowBinding.prototype.reset=function(){
if(this._timeout!=null){
clearTimeout(this._timeout);
this._timeout=null;
}
if(this._errorBinding!=null){
if(this._errorBinding.isVisible){
this._errorBinding.hide();
}
}
if(this._windowBinding!=null){
if(this._windowBinding.isVisible){
this._windowBinding.hide();
}
}
if(this._loadhandler!=null){
if(this.getURL()!=WindowBinding.DEFAULT_URL){
DOMEvents.removeEventListener(this.getContentWindow(),DOMEvents.BEFOREUNLOAD,this._loadhandler);
this._loadhandler=null;
}
}
this._hasError=false;
this._hasFullStop=false;
this._isReturning=false;
this._coverBinding.show();
this.setURL(WindowBinding.DEFAULT_URL);
};
RadioGroupBinding.prototype=new Binding;
RadioGroupBinding.prototype.constructor=RadioGroupBinding;
RadioGroupBinding.superclass=Binding.prototype;
RadioGroupBinding.ACTION_SELECTIONCHANGED="radiogroupselectionchanged";
function RadioGroupBinding(){
this.logger=SystemLogger.getLogger("RadioGroupBinding");
this._checkedRadioBinding=null;
this._radioButtonBindings=null;
this._isUpToDate=false;
return this;
}
RadioGroupBinding.prototype.toString=function(){
return "[RadioGroupBinding]";
};
RadioGroupBinding.prototype.onBindingRegister=function(){
RadioGroupBinding.superclass.onBindingRegister.call(this);
this.addActionListener(ButtonBinding.ACTION_RADIOBUTTON_ATTACHED,this);
this.addActionListener(ButtonBinding.ACTION_COMMAND,this);
};
RadioGroupBinding.prototype.onBindingInitialize=function(){
var _804=null;
this._getRadioButtonBindings().each(function(_805){
if(_805.getProperty("ischecked")){
_804=_805;
return false;
}else{
return true;
}
});
if(_804){
this._checkedRadioBinding=_804;
}
RadioGroupBinding.superclass.onBindingInitialize.call(this);
};
RadioGroupBinding.prototype.handleAction=function(_806){
RadioGroupBinding.superclass.handleAction.call(this,_806);
var _807=_806.target;
switch(_806.type){
case ButtonBinding.ACTION_RADIOBUTTON_ATTACHED:
this._isUpToDate=false;
_806.consume();
break;
case ButtonBinding.ACTION_COMMAND:
if(_807.isRadioButton&&!_807.isDisabled){
if(this._checkedRadioBinding){
this._unCheckRadioBindingsExcept(_807);
}
this._checkedRadioBinding=_807;
this.dispatchAction(RadioGroupBinding.ACTION_SELECTIONCHANGED);
_806.consume();
}
break;
}
};
RadioGroupBinding.prototype.setCheckedButtonBinding=function(_808,_809){
if(_808 instanceof RadioDataBinding){
_808=_808.getButton();
}
if(_808.isRadioButton){
switch(_809){
case true:
this._unCheckRadioBindingsExcept(_808);
this._checkedRadioBinding=_808;
_808.check(true);
break;
default:
_808.check();
break;
}
}
};
RadioGroupBinding.prototype.getCheckedButtonBinding=function(){
return this._checkedRadioBinding;
};
RadioGroupBinding.prototype._unCheckRadioBindingsExcept=function(_80a){
var _80b=this._getRadioButtonBindings();
_80b.each(function(_80c){
if(_80c.isChecked&&_80c!=_80a){
_80c.uncheck(true);
}
});
};
RadioGroupBinding.prototype._getRadioButtonBindings=function(){
if(this._radioButtonBindings===null||!this._isUpToDate){
var _80d=new Crawler();
var list=new List();
_80d.addFilter(function(_80f){
var _810=true;
var _811=UserInterface.getBinding(_80f);
if(_811 instanceof RadioGroupBinding){
_810=NodeCrawler.SKIP_CHILDREN;
}else{
if(_811 instanceof ButtonBinding&&_811.isRadioButton){
list.add(_811);
}
}
return _810;
});
_80d.crawl(this.bindingElement);
this._radioButtonBindings=list;
}
return this._radioButtonBindings;
};
RadioGroupBinding.newInstance=function(_812){
var _813=DOMUtil.createElementNS(Constants.NS_UI,"ui:radiogroup",_812);
return UserInterface.registerBinding(_813,RadioGroupBinding);
};
DataBindingMap.prototype=new Map;
DataBindingMap.prototype.constructor=DataBindingMap;
DataBindingMap.superclass=Map.prototype;
DataBindingMap.TYPE_VALUE="databindingmap valuetype";
DataBindingMap.TYPE_RESULT="databindingmap resulttype";
function DataBindingMap(map){
this._map=map?map:{};
this.type=DataBindingMap.TYPE_RESULT;
}
DataInputBinding.prototype=new DataBinding;
DataInputBinding.prototype.constructor=DataInputBinding;
DataInputBinding.superclass=DataBinding.prototype;
function DataInputBinding(){
this.logger=SystemLogger.getLogger("DataInputBinding");
this.type=null;
this.isRequired=false;
this.expression=null;
this.isPassword=false;
this._value=null;
this._isValid=true;
this._isInvalidBecauseRequired=false;
this._isInvalidBecauseMinLength==true;
this._isInvalidBecauseMinLength==true;
this._isInvalidBecauseMaxLength==true;
this._sessionResult=null;
this.isDisabled=false;
this.isReadOnly=false;
this._dirtyinterval=null;
this._isAutoSelect=false;
this.minlength=null;
this.maxlength=null;
this._isAutoPost=false;
this._timeout=null;
this._time=1500;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
this.spellcheck=true;
return this;
}
DataInputBinding.prototype.toString=function(){
return "[DataInputBinding]";
};
DataInputBinding.prototype.onBindingRegister=function(){
DataInputBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["value"]=this.setValue;
};
DataInputBinding.prototype.onBindingAttach=function(){
DataInputBinding.superclass.onBindingAttach.call(this);
this._parseDOMProperties();
this._buildDOMContent();
this._attachDOMEvents();
};
DataInputBinding.prototype.onBindingDispose=function(){
DataInputBinding.superclass.onBindingDispose.call(this);
if(this._dirtyinterval){
window.clearInterval(this._dirtyinterval);
}
if(!this._isValid){
this.dispatchAction(Binding.ACTION_VALID);
}
};
DataInputBinding.prototype._parseDOMProperties=function(){
this.type=this.getProperty("type");
this.isRequired=this.getProperty("required");
this.isPassword=this.getProperty("password")==true;
this.minlength=this.getProperty("minlength");
this.maxlength=this.getProperty("maxlength");
this._isAutoPost=this.getProperty("autopost")==true;
this.spellcheck=this.getProperty("spellcheck")!==false;
if(this.type=="programmingidentifier"){
this.spellcheck=false;
}
if(this.type=="programmingnamespace"){
this.spellcheck=false;
}
var _815=this.getProperty("regexrule");
if(_815!=null){
this.expression=new RegExp(_815);
}
var _816=this.getProperty("onbindingblur");
if(_816!=null){
this.onblur=function(){
Binding.evaluate(_816,this);
};
}
var _817=this.getProperty("onvaluechange");
if(_817!=null){
this.onValueChange=function(){
Binding.evaluate(_817,this);
};
}
if(this.error==null&&this.type!=null){
var _818=DataBinding.errors[this.type];
if(_818!=null){
this.error=_818;
}
}
};
DataInputBinding.prototype._buildDOMContent=function(){
this.shadowTree.input=this._getInputElement();
this.shadowTree.box=DOMUtil.createElementNS(Constants.NS_UI,"ui:box",this.bindingDocument);
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
var _819=this.getProperty("value");
if(_819!=null){
this.setValue(String(_819));
}
var name=this.getProperty("name");
if(name!=null){
this.setName(name);
}
var _81b=this.getProperty("isdisabled");
if(_81b==true){
this.setDisabled(true);
}
var _81c=this.getProperty("readonly");
if(_81c==true){
this.setReadOnly(true);
}
var _81d=this.getProperty("autoselect");
if(_81d==true){
this._isAutoSelect=true;
}
this.shadowTree.box.appendChild(this.shadowTree.input);
this.bindingElement.appendChild(this.shadowTree.box);
if(this.spellcheck&&Client.hasSpellcheck){
var _81e=Localization.currentLang();
if(_81e!=null){
this.shadowTree.input.setAttribute("spellcheck","true");
this.shadowTree.input.setAttribute("lang",Localization.currentLang());
}else{
this.shadowTree.input.setAttribute("spellcheck","false");
}
}else{
this.shadowTree.input.setAttribute("spellcheck","false");
}
if(this.hasCallBackID()){
}else{
if(this._isAutoPost){
this.logger.warn("Autopost "+this.toString()+" without a callbackid?");
}
}
};
DataInputBinding.prototype._getInputElement=function(){
var _81f=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_81f.type=this.isPassword==true?"password":"text";
_81f.tabIndex=-1;
return _81f;
};
DataInputBinding.prototype._attachDOMEvents=function(){
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.FOCUS,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.BLUR,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.KEYDOWN,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.KEYPRESS,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.DRAGOVER,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.DROP,this);
};
DataInputBinding.prototype.handleEvent=function(e){
DataInputBinding.superclass.handleEvent.call(this,e);
if(this.isFocusable==true){
switch(e.type){
case DOMEvents.DRAGOVER:
DOMEvents.preventDefault(e);
break;
case DOMEvents.DROP:
if(e.dataTransfer){
this.setValue(e.dataTransfer.getData("Text"));
this.checkDirty();
this.validate(true);
}
DOMEvents.preventDefault(e);
break;
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
this._handleFocusAndBlur(e.type==DOMEvents.FOCUS);
break;
case DOMEvents.KEYPRESS:
switch(e.keyCode){
case KeyEventCodes.VK_BACK:
case KeyEventCodes.VK_INSERT:
case KeyEventCodes.VK_DELETE:
this._testDirty();
break;
}
break;
case DOMEvents.KEYDOWN:
this._testDirty();
switch(e.keyCode){
case KeyEventCodes.VK_ENTER:
this._handleEnterKey(e);
break;
case KeyEventCodes.VK_ESCAPE:
DOMEvents.preventDefault(e);
break;
}
if(this.isFocusable&&this._isAutoPost){
if(this._timeout!=null){
top.window.clearTimeout(this._timeout);
}
var self=this;
this._timeout=top.window.setTimeout(function(){
if(Binding.exists(self)){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
},this._time);
}
break;
}
}
};
DataInputBinding.prototype._handleFocusAndBlur=function(_822){
if(_822){
this.focus(true);
this.bindingWindow.standardEventHandler.enableNativeKeys();
}else{
this.blur(true);
this.bindingWindow.standardEventHandler.disableNativeKeys();
}
};
DataInputBinding.prototype._handleEnterKey=function(e){
DOMEvents.preventDefault(e);
DOMEvents.stopPropagation(e);
EventBroadcaster.broadcast(BroadcastMessages.KEY_ENTER);
};
DataInputBinding.prototype.focus=function(_824){
if(!this.isFocused&&!this.isReadOnly&&!this.isDisabled){
DataInputBinding.superclass.focus.call(this);
if(this.isFocused==true){
this._focus();
if(this._isAutoSelect==true){
if(_824){
var self=this,_826=this.bindingElement,_827={handleEvent:function(){
self.select();
DOMEvents.removeEventListener(_826,DOMEvents.MOUSEUP,this);
}};
DOMEvents.addEventListener(_826,DOMEvents.MOUSEUP,_827);
}else{
this.select();
}
}
this.onfocus();
if(!_824){
var _828=this.shadowTree.input;
setTimeout(function(){
FocusBinding.focusElement(_828);
},0);
}
}
}
};
DataInputBinding.prototype.select=function(){
var _829=this.shadowTree.input;
setTimeout(function(){
if(Client.isExplorer==true){
var _82a=_829.createTextRange();
_82a.moveStart("character",0);
_82a.moveEnd("character",_829.value.length);
_82a.select();
}else{
_829.setSelectionRange(0,_829.value.length);
}
},0);
};
DataInputBinding.prototype.blur=function(_82b){
if(this.isFocused==true){
DataInputBinding.superclass.blur.call(this);
if(!_82b){
this.shadowTree.input.blur();
}
this._blur();
}
};
DataInputBinding.prototype._focus=function(){
if(!this._isValid){
if(this.isPassword){
if(Client.isMozilla){
this.shadowTree.input.type="password";
this.setValue(this._value);
}
}else{
this.setValue(this._value);
}
this.shadowTree.input.className="";
}
this._sessionResult=this.getResult();
var self=this;
this._dirtyinterval=window.setInterval(function(){
if(Binding.exists(self)==true){
self.checkDirty();
if(!self._isValid){
self.validate(true);
}
}else{
window.clearInterval(self._dirtyinterval);
self._dirtyinterval=null;
}
},500);
};
DataInputBinding.prototype._blur=function(){
if(this._dirtyinterval){
window.clearInterval(this._dirtyinterval);
this._dirtyinterval=null;
}
this.checkDirty();
this._isValid=true;
this._normalizeToValid();
this.validate(true);
if(Types.isFunction(this.onblur)){
this.onblur();
}
if(this._isValid){
if(this.getResult()!=this._sessionResult){
this.onValueChange();
}
}
};
DataInputBinding.prototype.onfocus=function(){
};
DataInputBinding.prototype.onblur=function(){
};
DataInputBinding.prototype.checkDirty=function(){
if(!this.isDirty){
if(this.getResult()!=this._sessionResult){
this.dirty();
}
}
};
DataInputBinding.prototype._testDirty=function(){
var val=this.getValue();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
if(self.getValue()!=val){
self.dirty();
}
}
},0);
};
DataInputBinding.prototype.onValueChange=function(){
};
DataInputBinding.prototype.validate=function(_82f){
if(_82f==true||this._isValid){
var _830=this.isValid();
if(_830!=this._isValid){
this._isValid=_830;
if(!_830){
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._value=this.getValue();
this.dispatchAction(Binding.ACTION_INVALID);
if(!this.isFocused){
var _831=null;
if(this._isInvalidBecauseRequired==true){
_831=DataBinding.warnings["required"];
}else{
if(this._isInvalidBecauseMinLength==true){
_831=DataBinding.warnings["minlength"];
_831=_831.replace("${count}",String(this.minlength));
}else{
if(this._isInvalidBecauseMaxLength==true){
_831=DataBinding.warnings["maxlength"];
_831=_831.replace("${count}",String(this.maxlength));
}else{
_831=DataBinding.warnings[this.type];
}
}
}
this.shadowTree.input.className=DataBinding.CLASSNAME_WARNING;
if(_831!=null){
if(this.isPassword){
if(Client.isMozilla){
this.shadowTree.input.type="text";
this.setValue(_831);
}
}else{
this.setValue(_831);
}
}
}
}else{
this._normalizeToValid();
}
}
}
return this._isValid;
};
DataInputBinding.prototype._normalizeToValid=function(){
if(this._isValid){
if(this.hasClassName(DataBinding.CLASSNAME_INVALID)){
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}
this.shadowTree.input.className="";
this.dispatchAction(Binding.ACTION_VALID);
}
};
DataInputBinding.prototype.isValid=function(){
var _832=true;
this._isInvalidBecauseRequired=false;
this._isInvalidBecauseMinLength=false;
this._isInvalidaBecuaseMaxLength=false;
var _833=this.getValue();
if(_833==""){
if(this.isRequired==true){
_832=false;
this._isInvalidBecauseRequired=true;
}
}else{
if(this.type!=null){
var _834=DataBinding.expressions[this.type];
if(!_834.test(_833)){
_832=false;
}
}else{
if(this.expression!=null){
if(!this.expression.test(_833)){
_832=false;
}
}
}
}
if(_832&&this.minlength!=null){
if(_833.length<this.minlength){
this._isInvalidBecauseMinLength=true;
_832=false;
}
}
if(_832&&this.maxlength!=null){
if(_833.length>this.maxlength){
this._isInvalidBecauseMaxLength=true;
_832=false;
}
}
return _832;
};
DataInputBinding.prototype.setDisabled=function(_835){
if(_835!=this.isDisabled){
if(_835){
this.attachClassName("isdisabled");
}else{
this.detachClassName("isdisabled");
}
var _836=this.shadowTree.input;
if(_835){
this._disabledHandler={handleEvent:function(e){
DOMEvents.preventDefault(e);
DOMEvents.stopPropagation(e);
}};
DOMEvents.addEventListener(_836,DOMEvents.MOUSEDOWN,this._disabledHandler);
}else{
DOMEvents.removeEventListener(_836,DOMEvents.MOUSEDOWN,this._disabledHandler);
this._disabledHandler=null;
}
if(Client.isExplorer){
this.shadowTree.input.disabled=_835;
this.shadowTree.input.unselectable=_835?"on":"off";
}
this.isDisabled=_835;
this.isFocusable=!_835;
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
};
DataInputBinding.prototype.setReadOnly=function(_838){
if(_838!=this.isReadOnly){
if(_838){
this.attachClassName("readonly");
}else{
this.detachClassName("readonly");
}
this.shadowTree.input.readOnly=_838;
this.isReadOnly=_838;
}
};
DataInputBinding.prototype.disable=function(){
if(!this.isDisabled){
this.setDisabled(true);
}
};
DataInputBinding.prototype.enable=function(){
if(this.isDisabled){
this.setDisabled(false);
}
};
DataInputBinding.prototype.handleElement=function(_839){
return true;
};
DataInputBinding.prototype.updateElement=function(_83a){
var _83b=_83a.getAttribute("value");
var _83c=_83a.getAttribute("type");
var _83d=_83a.getAttribute("maxlength");
var _83e=_83a.getAttribute("minlength");
var _83f=_83a.getAttribute("required")==="true";
if(_83b==null){
_83b="";
}
var _840=this.bindingWindow.UpdateManager;
if(this.getValue()!=_83b){
_840.report("Property [value] updated on binding \""+this.getID()+"\"");
this.setValue(_83b);
}
if(this.type!=_83c){
_840.report("Property [type] updated on binding \""+this.getID()+"\"");
this.type=_83c;
}
if(this.maxlength!=_83d){
_840.report("Property [maxlength] updated on binding \""+this.getID()+"\"");
this.maxlength=_83d;
}
if(this.minlength!=_83e){
_840.report("Property [minlength] updated on binding \""+this.getID()+"\"");
this.minlength=_83e;
}
if(this.isRequired!=_83f){
_840.report("Property [required] updated on binding \""+this.getID()+"\"");
this.isRequired=_83f;
}
return true;
};
DataInputBinding.prototype.manifest=function(){
if(this._timeout!=null){
top.window.clearTimeout(this._timeout);
}
if(!this._isValid){
this.setValue("");
this._isValid=true;
this._normalizeToValid();
}
};
DataInputBinding.prototype.clean=function(){
DataInputBinding.superclass.clean.call(this);
this._sessionResult=this.getResult();
};
DataInputBinding.prototype.setValue=function(_841){
if(_841===null){
_841="";
}
if(_841!=this.getValue()){
this.setProperty("value",_841);
if(this.shadowTree.input!=null){
this.shadowTree.input.value=String(_841);
}
}
};
DataInputBinding.prototype.getValue=function(){
var _842=null;
if(this.shadowTree.input!=null){
_842=this.shadowTree.input.value;
}else{
_842=this.getProperty("value");
}
return _842;
};
DataInputBinding.prototype.setName=function(name){
DataInputBinding.superclass.setName.call(this,name);
if(this.isAttached==true){
this.shadowTree.input.name=name;
}
};
DataInputBinding.prototype.getResult=function(){
var _844=this.getValue();
switch(this.type){
case DataBinding.TYPE_NUMBER:
case DataBinding.TYPE_INTEGER:
_844=Number(_844);
break;
}
return _844;
};
DataInputBinding.prototype.setResult=DataInputBinding.prototype.setValue;
DataInputBinding.newInstance=function(_845){
var _846=DOMUtil.createElementNS(Constants.NS_UI,"ui:datainput",_845);
return UserInterface.registerBinding(_846,DataInputBinding);
};
TextBoxBinding.prototype=new DataInputBinding;
TextBoxBinding.prototype.constructor=TextBoxBinding;
TextBoxBinding.superclass=DataInputBinding.prototype;
function TextBoxBinding(){
this.logger=SystemLogger.getLogger("TextBoxBinding");
this._hasWordWrap=true;
return this;
}
TextBoxBinding.prototype.toString=function(){
return "[TextBoxBinding]";
};
TextBoxBinding.prototype._buildDOMContent=function(){
var _847=DOMUtil.getElementsByTagName(this.bindingElement,"textarea").item(0);
if(_847!=null){
this.setValue(_847.value);
_847.parentNode.removeChild(_847);
}
TextBoxBinding.superclass._buildDOMContent.call(this);
if(!this._hasWordWrap){
this.shadowTree.input.setAttribute("wrap","off");
}
};
TextBoxBinding.prototype._getInputElement=function(){
var _848=DOMUtil.createElementNS(Constants.NS_XHTML,"textarea",this.bindingDocument);
_848.tabIndex=-1;
return _848;
};
TextBoxBinding.prototype.handleElement=function(_849){
return true;
};
TextBoxBinding.prototype.updateElement=function(_84a){
var _84b,area=_84a.getElementsByTagName("textarea").item(0);
if(area!=null&&area.hasChildNodes()){
_84b=DOMUtil.getTextContent(area);
}
if(_84b==null){
_84b="";
}
var _84d=this.bindingWindow.UpdateManager;
if(this.getValue()!=_84b){
_84d.report("Property [value] updated on binding \""+this.getID()+"\"");
this.setValue(_84b);
}
var _84e=_84a.getAttribute("type");
if(this.type!=_84e){
_84d.report("Property [type] updated on binding \""+this.getID()+"\"");
this.type=_84e;
}
return true;
};
TextBoxBinding.prototype._handleEnterKey=function(e){
DOMEvents.stopPropagation(e);
};
EditorTextBoxBinding.prototype=new TextBoxBinding;
EditorTextBoxBinding.prototype.constructor=EditorTextBoxBinding;
EditorTextBoxBinding.superclass=TextBoxBinding.prototype;
function EditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("EditorTextBoxBinding");
this._hasWordWrap=false;
}
EditorTextBoxBinding.prototype.toString=function(){
return "[EditorTextBoxBinding]";
};
EditorTextBoxBinding.prototype.handleEvent=function(e){
if(this.isFocusable==true){
switch(e.type){
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
this._handleFocusAndBlur(e.type==DOMEvents.FOCUS);
break;
case DOMEvents.KEYDOWN:
this._handleKeyEvent(e);
break;
}
}
};
EditorTextBoxBinding.prototype._handleKeyEvent=function(e){
switch(e.keyCode){
case KeyEventCodes.VK_TAB:
this._handleTabKey(e.shiftKey);
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
break;
case KeyEventCodes.VK_ENTER:
this._handleEnterKey();
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
break;
case KeyEventCodes.VK_ESCAPE:
DOMEvents.preventDefault(e);
break;
}
};
EditorTextBoxBinding.prototype._handleTabKey=Binding.ABSTRACT_METHOD;
EditorTextBoxBinding.prototype._handleEnterKey=Binding.ABSTRACT_METHOD;
IEEditorTextBoxBinding.prototype=new EditorTextBoxBinding;
IEEditorTextBoxBinding.prototype.constructor=IEEditorTextBoxBinding;
IEEditorTextBoxBinding.superclass=EditorTextBoxBinding.prototype;
function IEEditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("IEEditorTextBoxBinding");
}
IEEditorTextBoxBinding.prototype.toString=function(){
return "[IEEditorTextBoxBinding]";
};
IEEditorTextBoxBinding.prototype._handleTabKey=function(_852){
var _853=this.bindingDocument.selection.createRange();
var _854=_853.text=="";
if(_854&&!_852){
_853.text="\t";
}else{
var text="";
var _856=_853.text.length;
while((_853.moveStart("word",-1)&&_853.text.charAt(1)!="\n")){
}
_853.moveStart("character",1);
var _857=0;
var i=0,line,_85a=_853.text.split("\n");
while((line=_85a[i++])!=null){
if(_852){
line=line.replace(/^(\s)/mg,"");
_857++;
}else{
line=line.replace(/^(.)/mg,"\t$1");
}
text+=line+(_85a[i+1]?"\n":"");
}
_853.text=text;
_853.moveStart("character",-_856);
if(_852){
_853.moveStart("character",2*_85a.length-2);
}
_853.select();
}
};
IEEditorTextBoxBinding.prototype._handleEnterKey=function(){
var _85b=this.bindingDocument.selection.createRange();
var _85c=_85b.duplicate();
while((_85c.moveStart("word",-1)&&_85c.text.indexOf("\n")==-1)){
}
_85c.moveStart("character",1);
_85b.text="\n"+_85c.text.match(/^(\s)*/)[0]+"!";
_85b.moveStart("character",-1);
_85b.select();
_85b.text="";
_85b.select();
};
MozEditorTextBoxBinding.prototype=new EditorTextBoxBinding;
MozEditorTextBoxBinding.prototype.constructor=MozEditorTextBoxBinding;
MozEditorTextBoxBinding.superclass=EditorTextBoxBinding.prototype;
function MozEditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("MozEditorTextBoxBinding");
return this;
}
MozEditorTextBoxBinding.prototype.toString=function(){
return "[MozEditorTextBoxBinding]";
};
MozEditorTextBoxBinding.prototype._handleTabKey=function(_85d){
var _85e;
var _85f;
var oss;
var osy;
var i;
var fnd;
var _864=this._getSelectedText();
var el=this.shadowTree.input;
_85e=el.scrollLeft;
_85f=el.scrollTop;
if(!_864.match(/\n/)){
oss=el.selectionStart;
el.value=el.value.substr(0,el.selectionStart)+"\t"+el.value.substr(el.selectionEnd);
el.selectionStart=oss+1;
el.selectionEnd=oss+1;
}else{
oss=el.selectionStart;
osy=el.selectionEnd;
fnd=0;
for(i=oss-1;i>=0;i--){
if(el.value.charAt(i)=="\n"){
oss=i+1;
fnd=1;
break;
}
}
if(fnd==0){
oss=0;
}
fnd=0;
for(i=osy;i<el.value.length;i++){
if(el.value.charAt(i)=="\n"){
osy=i;
fnd=1;
break;
}
}
if(fnd==0){
osy=el.value.length;
}
el.selectionStart=oss;
el.selectionEnd=osy;
_864=this._getSelectedText();
if(_85d){
ntext=_864.replace(/^(\s)/mg,"");
}else{
ntext=_864.replace(/^(.)/mg,"\t$1");
}
el.value=el.value.substr(0,el.selectionStart)+ntext+el.value.substr(el.selectionEnd);
el.selectionStart=oss;
el.selectionEnd=osy+(ntext.length-_864.length);
}
el.scrollLeft=_85e;
el.scrollTop=_85f;
};
MozEditorTextBoxBinding.prototype._handleEnterKey=function(){
var _866;
var _867;
var oss;
var osy;
var el=this.shadowTree.input;
_866=el.scrollLeft;
_867=el.scrollTop;
oss=el.selectionStart;
osy=el.selectionEnd;
var bfs=el.value.substr(0,el.selectionStart);
var bfsm=bfs.split(/\r|\n/g);
var spm=bfsm[bfsm.length-1].match(/^(\s)*/);
el.value=el.value.substr(0,el.selectionStart)+"\n"+spm[0]+el.value.substr(el.selectionEnd);
el.selectionStart=oss+1+spm[0].length;
el.selectionEnd=oss+1+spm[0].length;
el.scrollLeft=_866;
el.scrollTop=_867;
};
MozEditorTextBoxBinding.prototype._getSelectedText=function(){
var _86e=this.shadowTree.input.value;
var _86f=this.shadowTree.input.selectionStart;
var end=this.shadowTree.input.selectionEnd;
return _86e.substr(_86f,end-_86f);
};
SelectorBinding.prototype=new DataBinding;
SelectorBinding.prototype.constructor=SelectorBinding;
SelectorBinding.superclass=DataBinding.prototype;
SelectorBinding.INDICATOR_IMAGE=Resolver.resolve("${skin}/fields/selectorindicator.png");
SelectorBinding.ACTION_SELECTIONCHANGED="selectorselectionchanged";
SelectorBinding.ACTION_COMMAND="selectorcommand";
SelectorBinding.CLASSNAME_POPUP="selectorpopup";
function SelectorBinding(){
this.logger=SystemLogger.getLogger("SelectorBinding");
this.type=null;
this._buttonBinding=null;
this._popupBinding=null;
this._menuBodyBinding=null;
this._selectionValue=null;
this._selectionLabel=null;
this._searchString="";
this.isSearchSelectionEnabled=true;
this.selections=null;
this.isDisabled=false;
this.label=null;
this.value=null;
this.width=null;
this.defaultSelection=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.isDirty=false;
this._isUpToDate=false;
this._hasKeyboard=false;
this.BUTTON_IMPLEMENTATION=ClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=MenuItemBinding;
this._isImageLayout=true;
this.isRequired=false;
this._isValid=true;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
SelectorBinding.prototype.toString=function(){
return "[SelectorBinding]";
};
SelectorBinding.prototype.onBindingAttach=function(){
SelectorBinding.superclass.onBindingAttach.call(this);
this.selections=new List();
this.parseDOMProperties();
this.buildDOMContent();
this.addEventListener(DOMEvents.FOCUS);
this.addEventListener(DOMEvents.KEYPRESS);
this.addEventListener(DOMEvents.KEYDOWN);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
var _871=this.getProperty("isdisabled");
if(this.isDisabled||_871){
this.disable();
}
};
SelectorBinding.prototype.onBindingDispose=function(){
SelectorBinding.superclass.onBindingDispose.call(this);
if(this._popupBinding&&Binding.exists(this._popupBinding)){
this._popupBinding.dispose();
}
if(this._hasKeyboard==true){
this._releaseKeyboard();
}
};
SelectorBinding.prototype.parseDOMProperties=function(){
var type=this.getProperty("type");
var _873=this.getProperty("label");
var _874=this.getProperty("value");
var _875=this.getProperty("width");
var _876=this.getProperty("onchange");
var _877=this.getProperty("required")==true;
if(!this.type&&type){
this.type=type;
}
if(!this.label&&_873!=null){
this.label=_873;
}
if(!this.value&&_874!=null){
this.value=_874;
}
if(!this.width&&_875){
this.width=_875;
}
if(_877){
this.isRequired=true;
}
if(_876){
this.onValueChange=function(){
Binding.evaluate(_876,this);
};
}
this._computeImageProfile();
};
SelectorBinding.prototype._computeImageProfile=function(){
Binding.imageProfile(this);
};
SelectorBinding.prototype.buildDOMContent=function(){
this.buildButton();
this.buildIndicator();
this.buildPopup();
this.buildSelections();
this.bindingElement.tabIndex=0;
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
};
SelectorBinding.prototype.buildFormField=function(){
var _878=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_878.name=this.getName();
_878.value=this.getValue();
_878.type="hidden";
if(this.hasCallBackID()){
_878.id=this.getCallBackID();
}
this.shadowTree.input=_878;
this.bindingElement.appendChild(_878);
};
SelectorBinding.prototype.buildButton=function(){
var _879=this.BUTTON_IMPLEMENTATION;
var _87a=this.add(_879.newInstance(this.bindingDocument));
if(this.imageProfile!=null){
_87a.imageProfile=this.imageProfile;
}
if(this.width!=null){
_87a.setWidth(this.width);
}
this._buttonBinding=_87a;
this.shadowTree.button=_87a;
_87a.attach();
};
SelectorBinding.prototype.buildIndicator=function(){
var img=this.bindingDocument.createElement("img");
img.src=SelectorBinding.INDICATOR_IMAGE;
img.className="selectorindicatorimage";
this._buttonBinding.labelBinding.bindingElement.appendChild(img);
this.shadowTree.selectorindicatorimage=img;
};
SelectorBinding.prototype.buildPopup=function(){
var _87c=top.app.bindingMap.selectorpopupset;
var doc=_87c.bindingDocument;
var _87e=_87c.add(PopupBinding.newInstance(doc));
var _87f=_87e.add(MenuBodyBinding.newInstance(doc));
this._popupBinding=_87e;
this._menuBodyBinding=_87f;
this._popupBinding.attachClassName(SelectorBinding.CLASSNAME_POPUP);
this._popupBinding.attachRecursive();
this._popupBinding.type=PopupBinding.TYPE_FIXED;
_87e.attachClassName("selectorpopup");
_87e.addActionListener(PopupBinding.ACTION_SHOW,this);
_87e.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
_87e.addActionListener(PopupBinding.ACTION_HIDE,this);
this._buttonBinding.setPopup(_87e);
};
SelectorBinding.prototype.buildSelections=function(){
if(this.defaultSelection==null&&(this.label||this.value)){
this.defaultSelection=new SelectorBindingSelection(this.label,this.value,true,null);
}
var list=this._getSelectionsList();
this.populateFromList(list);
};
SelectorBinding.prototype._getSelectionsList=function(){
var list=new List();
var _882=DOMUtil.getElementsByTagName(this.bindingElement,"selection");
new List(_882).each(function(_883){
var _884=_883.getAttribute("label");
var _885=_883.getAttribute("value");
var _886=_883.getAttribute("selected");
var _887=_883.getAttribute("image");
var _888=_883.getAttribute("image-hover");
var _889=_883.getAttribute("image-active");
var _88a=_883.getAttribute("image-disabled");
var _88b=null;
if(_887||_888||_889||_88a){
_88b=new ImageProfile({image:_887,imageHover:_888,imageActive:_889,imageDisabled:_88a});
}
list.add(new SelectorBindingSelection(_884?_884:null,_885?_885:null,_886&&_886=="true",_88b));
});
return list;
};
SelectorBinding.prototype.populateFromList=function(list){
if(this.isAttached){
this.clear();
if(list.hasEntries()){
var _88d=null;
while(list.hasNext()){
var _88e=list.getNext();
var item=this.addSelection(_88e);
if(_88e.isSelected){
this.select(item,true);
}
if(!_88d){
_88d=item;
}
}
if(!this._selectedItemBinding){
this.select(_88d,true);
}
this.shadowTree.selectorindicatorimage.style.display="block";
}else{
this.shadowTree.selectorindicatorimage.style.display="none";
}
}else{
throw "Could not populate unattached selector";
}
};
SelectorBinding.prototype.addSelection=function(_890,_891){
var _892=this.MENUITEM_IMPLEMENTATION;
var _893=this._menuBodyBinding;
var _894=_893.bindingDocument;
var _895=_892.newInstance(_894);
_895.imageProfile=_890.imageProfile;
_895.setLabel(_890.label);
if(_890.tooltip!=null){
_895.setToolTip(_890.tooltip);
}
_895.selectionValue=_890.value;
_890.menuItemBinding=_895;
if(_891){
_893.addFirst(_895);
this.selections.addFirst(_890);
}else{
_893.add(_895);
this.selections.add(_890);
}
this._isUpToDate=false;
return _895;
};
SelectorBinding.prototype.addSelectionFirst=function(_896){
return this.addSelection(_896,true);
};
SelectorBinding.prototype.clear=function(_897){
this._selectedItemBinding=null;
if(this._popupBinding){
this._popupBinding.clear();
this.selections.clear();
if(!_897&&this.defaultSelection!=null){
var _898=this.addSelection(this.defaultSelection);
this.select(_898,true);
}
}
};
SelectorBinding.prototype.clearAll=function(){
this.clear(true);
};
SelectorBinding.prototype.disable=function(){
this.setDisabled(true);
};
SelectorBinding.prototype.enable=function(){
this.setDisabled(false);
};
SelectorBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused==true){
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
}
}
};
SelectorBinding.prototype.blur=function(){
if(this.isFocused==true){
DataBinding.prototype.blur.call(this);
this._releaseKeyboard();
if(this._popupBinding.isVisible){
this._popupBinding.hide();
}
}
};
SelectorBinding.prototype._grabKeyboard=function(){
if(!this._hasKeyboard){
this.subscribe(BroadcastMessages.KEY_ARROW);
this._hasKeyboard=true;
}
};
SelectorBinding.prototype._releaseKeyboard=function(){
if(this._hasKeyboard==true){
this.unsubscribe(BroadcastMessages.KEY_ARROW);
this._hasKeyboard=false;
}
};
SelectorBinding.prototype.setDisabled=function(_899){
if(this.isAttached==true){
var _89a=this._buttonBinding;
this.shadowTree.selectorindicatorimage.style.display=_899?"none":"block";
_89a.setDisabled(_899);
}
if(_899){
this.setProperty("isdisabled",true);
}else{
this.deleteProperty("isdisabled");
}
};
SelectorBinding.prototype.reset=function(_89b){
if(this.defaultSelection!=null){
this.selectByValue(this.defaultSelection.value,_89b);
}
};
SelectorBinding.prototype.handleAction=function(_89c){
SelectorBinding.superclass.handleAction.call(this,_89c);
switch(_89c.type){
case ButtonBinding.ACTION_COMMAND:
this._onButtonCommand();
_89c.consume();
break;
case PopupBinding.ACTION_SHOW:
this._onPopupShowing();
_89c.consume();
break;
case MenuItemBinding.ACTION_COMMAND:
this._onMenuItemCommand(_89c.target);
_89c.consume();
break;
case PopupBinding.ACTION_HIDE:
var self=this;
setTimeout(function(){
if(self.isFocused){
self._grabKeyboard();
}
},0);
if(this._clearSearchSelection){
this._clearSearchSelection();
}
_89c.consume();
break;
}
};
SelectorBinding.prototype._onButtonCommand=function(){
this.focus();
this._attachSelections();
this._restoreSelection();
this.dispatchAction(SelectorBinding.ACTION_COMMAND);
};
SelectorBinding.prototype._onPopupShowing=function(){
this._fitMenuToSelector();
this._releaseKeyboard();
};
SelectorBinding.prototype._onMenuItemCommand=function(_89e){
this.select(_89e);
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
};
SelectorBinding.prototype._restoreSelection=function(){
if(this._selectedItemBinding){
this._selectedItemBinding.focus();
}
};
SelectorBinding.prototype._fitMenuToSelector=function(){
var _89f=this._buttonBinding.bindingElement.offsetWidth+"px";
var _8a0=this._popupBinding.bindingElement;
_8a0.style.minWidth=_89f;
};
SelectorBinding.prototype.handleEvent=function(e){
SelectorBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.FOCUS:
this.focus();
break;
case DOMEvents.KEYDOWN:
var _8a2=Client.isExplorer?e.keyCode:e.which;
if(_8a2==8){
this._popSearchSelection();
}
break;
case DOMEvents.KEYPRESS:
var _8a2=Client.isExplorer?e.keyCode:e.which;
if(_8a2>=32){
this._buttonBinding.check();
var _8a3=String.fromCharCode(_8a2);
this._pushSearchSelection(_8a3);
}
break;
}
};
SelectorBinding.prototype._pushSearchSelection=function(_8a4){
this._searchString+=_8a4.toLowerCase();
this._applySearchSelection();
};
SelectorBinding.prototype._popSearchSelection=function(_8a5){
this._searchString=this._searchString.substring(0,this._searchString.length-1);
this._applySearchSelection();
};
SelectorBinding.prototype._clearSearchSelection=function(){
if(this._searchString!=null&&this._searchString!=""){
this._searchString="";
this._applySearchSelection();
}
};
SelectorBinding.prototype._applySearchSelection=function(){
if(this.isSearchSelectionEnabled){
var _8a6=this._menuBodyBinding;
if(_8a6!=null){
var _8a7=this.MENUITEM_IMPLEMENTATION;
var _8a8=_8a6.bindingDocument;
var list=this._getSelectionsList();
if(this._searchString!=null&&this._searchString!=""){
this._popupBinding.clear();
this._buttonBinding.setLabel(this._searchString);
if(list.hasEntries()){
while(list.hasNext()){
var _8aa=list.getNext();
if(_8aa.label.toLowerCase().indexOf(this._searchString)>-1){
this.addSelection(_8aa);
}
}
}
this._attachSelections();
var _8ab=new RegExp(this._searchString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"gi");
var _8ac=_8a6.getDescendantBindingsByType(_8a7);
if(_8ac.hasEntries()){
while(_8ac.hasNext()){
var _8ad=_8ac.getNext();
var _8ae=_8ad.labelBinding;
if(_8ae!=null&&_8ae.shadowTree!=null&&_8ae.shadowTree.labelText!=null){
_8ae.shadowTree.labelText.innerHTML=_8ae.shadowTree.labelText.innerHTML.replace(_8ab,"<b>$&</b>");
}
}
_8ac.getFirst().focus();
this.attachClassName(DataBinding.CLASSNAME_INFOBOX);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
_8ae=LabelBinding.newInstance(_8a8);
_8ae.setLabel(StringBundle.getString("ui","AspNetUiControl.Selector.NoMatchesFor").replace("{0}",this._searchString));
_8a6.add(_8ae);
this._attachSelections();
this.detachClassName(DataBinding.CLASSNAME_INFOBOX);
this.attachClassName(DataBinding.CLASSNAME_INVALID);
}
}else{
this._popupBinding.clear();
this._buttonBinding.setLabel(this._selectionLabel);
if(list.hasEntries()){
while(list.hasNext()){
var _8aa=list.getNext();
var item=this.addSelection(_8aa);
if(this._selectionValue==_8aa.value){
this._selectedItemBinding=item;
}
}
}
this._attachSelections();
this._restoreSelection();
this.detachClassName(DataBinding.CLASSNAME_INFOBOX);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}
if(this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.refreshMenuGroups();
}
this._popupBinding._enableTab(true);
}
}
};
SelectorBinding.prototype.handleBroadcast=function(_8b0,arg){
SelectorBinding.superclass.handleBroadcast.call(this,_8b0,arg);
switch(_8b0){
case BroadcastMessages.KEY_ARROW:
this.logger.debug(this._buttonBinding.getLabel());
this._handleArrowKey(arg);
break;
}
};
SelectorBinding.prototype._handleArrowKey=function(key){
if(!this._popupBinding.isVisible){
switch(key){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
this._buttonBinding.check();
break;
}
}
};
SelectorBinding.prototype.select=function(_8b3,_8b4){
var _8b5=false;
if(_8b3!=this._selectedItemBinding){
this._selectedItemBinding=_8b3;
_8b5=true;
var _8b6=this._buttonBinding;
this._selectionValue=_8b3.selectionValue;
this._selectionLabel=_8b3.getLabel();
_8b6.setLabel(_8b3.getLabel());
if(_8b3.imageProfile!=null){
_8b6.imageProfile=_8b3.imageProfile;
}
if(_8b6.imageProfile!=null){
_8b6.setImage(this.isDisabled==true?_8b6.imageProfile.getDisabledImage():_8b6.imageProfile.getDefaultImage());
}
this._updateImageLayout();
if(!_8b4){
this.onValueChange();
this.dispatchAction(SelectorBinding.ACTION_SELECTIONCHANGED);
this.dirty();
}
if(!this._isValid||(this.isRequired&&!_8b4)){
this.validate();
}
}
return _8b5;
};
SelectorBinding.prototype._relate=function(){
var _8b7=this.getProperty("relate");
if(_8b7){
var _8b8=this.bindingDocument.getElementById(_8b7);
if(_8b8){
var _8b9=UserInterface.getBinding(_8b8);
if(_8b9){
if(this.isChecked){
_8b9.show();
}else{
_8b9.hide();
}
}
}
}
};
SelectorBinding.prototype._updateImageLayout=function(){
if(this._buttonBinding.getImage()==null){
if(this._isImageLayout==true){
this._buttonBinding.attachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._isImageLayout=false;
}
}else{
if(!this._isImageLayout){
this._buttonBinding.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._isImageLayout=true;
}
}
};
SelectorBinding.prototype.onValueChange=function(){
};
SelectorBinding.prototype.selectByValue=function(_8ba,_8bb){
var _8bc=false;
var _8bd=this._menuBodyBinding;
var _8be=_8bd.getDescendantElementsByLocalName("menuitem");
while(_8be.hasNext()){
var _8bf=UserInterface.getBinding(_8be.getNext());
if(_8bf.selectionValue==_8ba){
_8bc=this.select(_8bf,_8bb);
break;
}
}
return _8bc;
};
SelectorBinding.prototype.getValue=function(){
var _8c0=this._selectionValue;
if(_8c0!=null){
_8c0=String(_8c0);
}
return _8c0;
};
SelectorBinding.prototype.setValue=function(_8c1){
this.selectByValue(String(_8c1),true);
};
SelectorBinding.prototype.getResult=function(){
var _8c2=this._selectionValue;
if(_8c2=="null"){
_8c2=null;
}
if(_8c2){
switch(this.type){
case DataBinding.TYPE_NUMBER:
case DataBinding.TYPE_INTEGER:
_8c2=Number(_8c2);
break;
}
}
return _8c2;
};
SelectorBinding.prototype.setResult=function(_8c3){
this.selectByValue(_8c3,true);
};
SelectorBinding.prototype.validate=function(){
var _8c4=true;
if(this.isRequired==true&&this.defaultSelection!=null){
var _8c5=this.getValue();
if(_8c5==this.defaultSelection.value){
_8c4=false;
}
if(_8c4!=this._isValid){
if(_8c4){
this.dispatchAction(Binding.ACTION_VALID);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.dispatchAction(Binding.ACTION_INVALID);
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._buttonBinding.setLabel(DataBinding.warnings["required"]);
}
}
this._isValid=_8c4;
}
return _8c4;
};
SelectorBinding.prototype.manifest=function(){
if(this.isAttached==true){
if(this.getResult()){
if(!this.shadowTree.input){
this.buildFormField();
}
this.shadowTree.input.value=this.getValue();
}else{
if(this.shadowTree.input){
this.shadowTree.input.parentNode.removeChild(this.shadowTree.input);
this.shadowTree.input=null;
}
}
}
};
SelectorBinding.prototype._attachSelections=function(){
var _8c6=this._popupBinding;
if(!this._isUpToDate){
_8c6.attachRecursive();
this._isUpToDate=true;
}
};
SelectorBinding.prototype.handleElement=function(){
return true;
};
SelectorBinding.prototype.updateElement=function(_8c7,_8c8){
this.bindingWindow.UpdateManager.addUpdate(new this.bindingWindow.ReplaceUpdate(this.getID(),_8c7));
return true;
};
SelectorBinding.newInstance=function(_8c9){
var _8ca=DOMUtil.createElementNS(Constants.NS_UI,"ui:selector",_8c9);
return UserInterface.registerBinding(_8ca,SelectorBinding);
};
SimpleSelectorBinding.prototype=new DataBinding;
SimpleSelectorBinding.prototype.constructor=SimpleSelectorBinding;
SimpleSelectorBinding.superclass=DataBinding.prototype;
function SimpleSelectorBinding(){
this.logger=SystemLogger.getLogger("SimpleSelectorBinding");
this._select=null;
this.isRequired=false;
this._isValid=true;
this._cachewidth=0;
return this;
}
SimpleSelectorBinding.prototype.toString=function(){
return "[SimpleSelectorBinding]";
};
SimpleSelectorBinding.prototype.onBindingRegister=function(){
SimpleSelectorBinding.superclass.onBindingRegister.call(this);
var name=this.getProperty("name");
if(name!=null){
this.setName(name);
}
};
SimpleSelectorBinding.prototype.onBindingAttach=function(){
SimpleSelectorBinding.superclass.onBindingAttach.call(this);
this._select=this.getChildElementByLocalName("select");
var name=this.getName();
if(name!=null){
this._select.name=name;
}
this._parseDOMProperties();
this._buildDOMContent();
};
SimpleSelectorBinding.prototype._parseDOMProperties=function(){
var _8cd=this.getProperty("onchange");
this.isRequired=this.getProperty("required")==true;
if(this.hasCallBackID()){
this._select.id=this.getCallBackID();
}
if(_8cd){
this.onValueChange=function(){
Binding.evaluate(_8cd,this);
};
}
};
SimpleSelectorBinding.prototype._buildDOMContent=function(){
this.bindingElement.tabIndex=0;
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
var self=this;
this._select.onchange=function(){
self.onValueChange();
self.dirty();
if(!self._isValid){
self.validate();
}
};
this._select.onfocus=function(){
self.focus(true);
};
if(Client.isExplorer){
this._buildDOMContentIE();
}
};
SimpleSelectorBinding.prototype._buildDOMContentIE=function(){
if(Client.isExplorer){
this.bindingElement.style.height=this.bindingElement.offsetHeight+"px";
this._cachewidth=this._select.offsetWidth;
this._select.style.position="absolute";
var self=this;
this._select.onmouseover=function(){
if(!self.isFocused){
self._hack(true);
}
};
this._select.onmouseout=function(){
if(!self.isFocused){
self._hack(false);
}
};
}
};
SimpleSelectorBinding.prototype.onValueChange=function(){
};
SimpleSelectorBinding.prototype.focus=function(_8d0){
SimpleSelectorBinding.superclass.focus.call(this);
if(this.isFocused){
if(!_8d0){
FocusBinding.focusElement(this._select);
if(Client.isExplorer){
this._hack(true);
}
}
this.bindingWindow.standardEventHandler.enableNativeKeys(false);
}
};
SimpleSelectorBinding.prototype.blur=function(){
SimpleSelectorBinding.superclass.blur.call(this);
if(!this.isFocused){
this._select.blur();
this.bindingWindow.standardEventHandler.disableNativeKeys();
if(Client.isExplorer){
this._hack(false);
}
if(this.isRequired){
this.validate();
}
}
};
SimpleSelectorBinding.prototype._hack=function(_8d1){
if(Client.isExplorer){
this._select.style.width=_8d1?"auto":this._cachewidth+"px";
if(_8d1){
if(this._select.offsetWidth<=this._cachewidth){
this._hack(false);
}
}
}
};
SimpleSelectorBinding.prototype.validate=function(){
var _8d2=true;
if(this.isRequired){
if(this.getValue()==null){
_8d2=false;
}
}
if(_8d2!=this._isValid){
if(_8d2){
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.attachClassName(DataBinding.CLASSNAME_INVALID);
var _8d3=this._select;
var _8d4=_8d3.options[_8d3.selectedIndex];
var text=DOMUtil.getTextContent(_8d4);
_8d3.blur();
_8d3.style.color="#A40000";
_8d3.style.fontWeight="bold";
if(!Client.isExplorer6){
DOMUtil.setTextContent(_8d4,DataBinding.warnings["required"]);
}
_8d3.onfocus=function(){
this.style.color="black";
this.style.fontWeight="normal";
this.onfocus=null;
if(!Client.isExplorer6){
DOMUtil.setTextContent(_8d4,text);
}
};
}
this._isValid=_8d2;
}
return _8d2;
};
SimpleSelectorBinding.prototype.manifest=function(){
};
SimpleSelectorBinding.prototype.getValue=function(){
var _8d6=null;
var _8d7=this._select;
var _8d8=_8d7.options[_8d7.selectedIndex];
var _8d9=true;
if(Client.isExplorer){
var html=_8d8.outerHTML.toLowerCase();
if(html.indexOf("value=")==-1){
_8d9=false;
}
}
if(_8d9){
_8d6=_8d8.getAttribute("value");
}
return _8d6;
};
SimpleSelectorBinding.prototype.setValue=function(_8db){
};
SimpleSelectorBinding.prototype.getResult=function(){
return this.getValue();
};
SimpleSelectorBinding.prototype.setResult=function(_8dc){
this.setValue(_8dc);
};
SimpleSelectorBinding.newInstance=function(_8dd){
var _8de=DOMUtil.createElementNS(Constants.NS_XHTML,"select",_8dd);
return UserInterface.registerBinding(_8de,SimpleSelectorBinding);
};
function SelectorBindingSelection(_8df,_8e0,_8e1,_8e2,_8e3){
this._init(_8df,_8e0,_8e1,_8e2,_8e3);
}
SelectorBindingSelection.prototype={label:null,value:null,tooltip:null,isSelected:null,imageProfile:null,menuItemBinding:null,_init:function(_8e4,_8e5,_8e6,_8e7,_8e8){
if(_8e4!=null){
this.label=String(_8e4);
}
if(_8e5!=null){
this.value=String(_8e5);
}
if(_8e7!=null){
this.imageProfile=_8e7;
}
if(_8e8!=null){
this.tooltip=_8e8;
}
this.isSelected=_8e6?true:false;
}};
DataInputSelectorBinding.prototype=new DataInputBinding;
DataInputSelectorBinding.prototype.constructor=DataInputSelectorBinding;
DataInputSelectorBinding.superclass=DataInputBinding.prototype;
DataInputSelectorBinding.INDICATOR_IMAGE=Resolver.resolve("${skin}/fields/selectorindicator.png");
DataInputSelectorBinding.ACTION_SELECTIONCHANGED="datainputselectorselectionchanged";
function DataInputSelectorBinding(){
this.logger=SystemLogger.getLogger("DataInputSelectorBinding");
this._buttonBinding=null;
this._popupBinding=null;
this._menuBodyBinding=null;
this._selectionValue=null;
this.isDirty=false;
this._hasKeyboard=false;
this._isUpToDate=false;
this._selectedItemBinding=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
this.value=null;
}
DataInputSelectorBinding.prototype.toString=function(){
return "[DataInputSelectorBinding]";
};
DataInputSelectorBinding.prototype.onBindingDispose=SelectorBinding.prototype.onBindingDispose;
DataInputSelectorBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
this.buildPopup();
this.buildSelections();
};
DataInputSelectorBinding.prototype.onBindingAttach=function(){
DataInputSelectorBinding.superclass.onBindingAttach.call(this);
var _8e9=this.getProperty("image");
if(_8e9){
this.setImage(_8e9);
}
var self=this;
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.DOUBLECLICK,{handleEvent:function(e){
if(self.isReadOnly){
self.shadowTree.input.value=self.value;
self.setReadOnly(false);
self.focus();
}
}});
};
DataInputSelectorBinding.prototype.buildButton=function(){
var _8ec=this.addFirst(ToolBarButtonBinding.newInstance(this.bindingDocument));
_8ec.popupBindingTargetElement=this.shadowTree.input;
_8ec.setImage(DataInputSelectorBinding.INDICATOR_IMAGE);
_8ec.attach();
var self=this;
_8ec.oncommand=function(){
self._attachSelections();
};
this._buttonBinding=_8ec;
};
DataInputSelectorBinding.prototype.buildPopup=SelectorBinding.prototype.buildPopup;
DataInputSelectorBinding.prototype.buildSelections=function(){
var list=new List();
var _8ef=DOMUtil.getElementsByTagName(this.bindingElement,"selection");
new List(_8ef).each(function(_8f0){
if(_8f0.getAttribute("label")){
throw "label not supported - use value property!";
}else{
var _8f1=_8f0.getAttribute("value");
var _8f2=_8f0.getAttribute("selected");
var _8f3=_8f0.getAttribute("tooltip");
list.add({value:_8f1?_8f1:null,toolTip:_8f3?_8f3:null,isSelected:(_8f2&&_8f2=="true")?true:false});
}
});
if(list.hasEntries()){
this.populateFromList(list);
}
};
DataInputSelectorBinding.prototype.populateFromList=function(list){
var _8f5=this._menuBodyBinding;
var _8f6=_8f5.bindingDocument;
while(_8f5.bindingElement.hasChildNodes()){
var node=_8f5.bindingElement.lastChild;
if(node.nodeType==Node.ELEMENT_NODE&&UserInterface.hasBinding(node)){
UserInterface.getBinding(node).dispose();
}else{
_8f5.removeChild(node);
}
}
if(list.hasEntries()){
this._isUpToDate=false;
if(!this._buttonBinding.isVisible){
this._buttonBinding.show();
}
var _8f8=this.getProperty("emptyentrylabel");
if(_8f8){
var _8f9=MenuItemBinding.newInstance(_8f6);
_8f9.setLabel(_8f8);
_8f9.selectionValue="";
_8f5.add(_8f9);
}
while(list.hasNext()){
var _8fa=list.getNext();
var _8f9=MenuItemBinding.newInstance(_8f6);
_8f9.setLabel(_8fa.label?_8fa.label:_8fa.value);
_8f9.selectionValue=_8fa.value;
if(_8fa.image){
_8f9.setImage(_8fa.image);
}
if(_8fa.toolTip){
_8f9.setToolTip(_8fa.toolTip);
}
if(_8fa.isSelected){
this.select(_8f9,true);
}
_8f5.add(_8f9);
}
}else{
this._buttonBinding.hide();
}
};
DataInputSelectorBinding.prototype.handleAction=SelectorBinding.prototype.handleAction;
DataInputSelectorBinding.prototype._onButtonCommand=function(){
this.focus();
this._restoreSelection();
this.dispatchAction(SelectorBinding.ACTION_COMMAND);
};
DataInputSelectorBinding.prototype._onPopupShowing=function(){
this._fitMenuToSelector();
this._restoreSelection();
this._releaseKeyboard();
};
DataInputSelectorBinding.prototype._onMenuItemCommand=function(_8fb){
this.select(_8fb);
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
};
DataInputSelectorBinding.prototype.handleBroadcast=function(_8fc,arg){
SelectorBinding.prototype.handleBroadcast.call(this,_8fc,arg);
switch(_8fc){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(arg!=this._buttonBinding){
DataInputSelectorBinding.superclass.handleBroadcast.call(this,_8fc,arg);
}
break;
}
};
DataInputSelectorBinding.prototype._grabKeyboard=SelectorBinding.prototype._grabKeyboard;
DataInputSelectorBinding.prototype._releaseKeyboard=SelectorBinding.prototype._releaseKeyboard;
DataInputSelectorBinding.prototype._handleArrowKey=SelectorBinding.prototype._handleArrowKey;
DataInputSelectorBinding.prototype.focus=function(_8fe){
if(!this.isFocused){
DataInputSelectorBinding.superclass.focus.call(this,_8fe);
if(this.isFocused==true){
this._grabKeyboard();
}
}
};
DataInputSelectorBinding.prototype.blur=function(_8ff){
if(this.isFocused==true){
DataInputSelectorBinding.superclass.blur.call(this,_8ff);
this._releaseKeyboard();
if(this._popupBinding.isVisible){
this._popupBinding.hide();
}
}
};
DataInputSelectorBinding.prototype._fitMenuToSelector=function(){
var _900=this.bindingElement.offsetWidth+"px";
var _901=this._popupBinding.bindingElement;
_901.style.minWidth=_900;
};
DataInputSelectorBinding.prototype._restoreSelection=function(){
if(!this._isUpToDate){
this._attachSelections();
}
var _902=this._menuBodyBinding.getDescendantBindingsByLocalName("menuitem");
var _903=this.getValue();
var _904=null;
_902.each(function(item){
if(item.getLabel()==_903){
_904=item;
}
});
if(_904){
_904.focus();
}
};
DataInputSelectorBinding.prototype.select=function(item,_907){
if(item!=this._selectedItemBinding){
this._selectedItemBinding=item;
this.setValue(item.selectionValue);
if(!_907){
this.dirty();
this.dispatchAction(DataInputSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
this.shadowTree.input.focus();
};
DataInputSelectorBinding.prototype._attachSelections=SelectorBinding.prototype._attachSelections;
DataInputSelectorBinding.prototype.setResult=DataInputSelectorBinding.prototype.setValue;
DataInputSelectorBinding.prototype.onblur=function(){
DataInputSelectorBinding.superclass.onblur.call(this);
if(!self.isReadOnly){
this.setValue(this.getValue());
}
};
DataInputSelectorBinding.prototype.setValue=function(_908){
var _909=this.isReadOnly;
var _90a=null;
if(_908!=null&&_908!=""){
var _90b=this._menuBodyBinding.getDescendantBindingsByLocalName("menuitem");
while(_90b.hasNext()){
var item=_90b.getNext();
if(item.selectionValue==_908){
_90a=item.getLabel();
break;
}
}
}
if(_90a!=null){
this.value=_908;
this.shadowTree.input.value=_90a;
if(!this.isReadOnly){
this.setReadOnly(true);
}
}else{
DataInputSelectorBinding.superclass.setValue.call(this,_908);
if(this.isReadOnly){
this.setReadOnly(false);
}
}
};
DataInputSelectorBinding.prototype.getValue=function(){
if(this.isReadOnly){
result=this.value;
}else{
result=DataInputSelectorBinding.superclass.getValue.call(this);
}
return result;
};
DataInputSelectorBinding.prototype.setImage=function(url){
var _90e="imagesizenormal";
if(url!=false){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setAlphaTransparentBackdrop(Resolver.resolve(url));
this.setProperty("image",url);
this.hasImage=true;
this.attachClassName(_90e);
}else{
this.setAlphaTransparentBackdrop(false);
this.deleteProperty("image");
this.hasImage=false;
this.detachClassName(_90e);
}
};
DataInputSelectorBinding.prototype.setAlphaTransparentBackdrop=function(url){
if(this.shadowTree.input){
if(url!=false){
url=Resolver.resolve(url);
if(Client.isExplorer6){
this.shadowTree.inputy.style.filter=LabelBinding.EXPLORER_IMAGE_FILTER.replace("${url}",url);
}else{
this.shadowTree.input.style.backgroundImage="url('"+url+"')";
}
}else{
if(Client.isExplorer6){
this.shadowTree.input.style.filter="none";
}else{
this.shadowTree.input.style.backgroundImage="none";
}
}
}
};
DataInputDialogBinding.prototype=new DataInputBinding;
DataInputDialogBinding.prototype.constructor=DataInputDialogBinding;
DataInputDialogBinding.superclass=DataInputBinding.prototype;
function DataInputDialogBinding(){
this.logger=SystemLogger.getLogger("DataInputDialogBinding");
this._handle=null;
this._dialogButtonBinding=null;
this._isButtonClicked=false;
}
DataInputDialogBinding.prototype.toString=function(){
return "[DataInputDialogBinding]";
};
DataInputDialogBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
};
DataInputDialogBinding.prototype.buildButton=function(){
var _910=ToolBarButtonBinding.newInstance(this.bindingDocument);
_910.setImage("${icon:popup}");
this.addFirst(_910);
_910.attach();
var self=this;
_910.oncommand=function(){
self._isButtonClicked=true;
setTimeout(function(){
self._isButtonClicked=false;
},1000);
var _912=self.getProperty("handle");
var _913=ViewDefinition.clone(_912,"Generated.ViewDefinition.Handle."+KeyMaster.getUniqueKey());
if(_913 instanceof DialogViewDefinition){
_913.handler={handleDialogResponse:function(_914,_915){
self._isButtonClicked=false;
if(_914==Dialog.RESPONSE_ACCEPT){
self.logger.debug("Usecase scenario was hardcoded into DataInputDialogBinding#buildButton");
var _916=_915.getFirst();
self.setValue(_916);
self.validate(true);
self.checkDirty();
}
self.focus();
}};
_913.argument.selectedResult=self.getValue();
StageBinding.presentViewDefinition(_913);
}else{
throw "Definition was either undefine or of a non-dialog type.";
}
};
DOMEvents.addEventListener(_910.getBindingElement(),DOMEvents.MOUSEDOWN,{handleEvent:function(e){
self._isButtonClicked=true;
}});
this._dialogButtonBinding=_910;
};
DataInputDialogBinding.prototype.oncommand=function(){
var _918=this._dialogButtonBinding;
if(_918!=null){
_918.oncommand();
}
};
DataInputDialogBinding.prototype.validate=function(arg){
var _91a=true;
if(this._isButtonClicked==true){
this._isButtonClicked=false;
}else{
_91a=DataInputDialogBinding.superclass.validate.call(this,arg);
}
return _91a;
};
UrlInputDialogBinding.prototype=new DataInputDialogBinding;
UrlInputDialogBinding.prototype.constructor=UrlInputDialogBinding;
UrlInputDialogBinding.superclass=DataInputDialogBinding.prototype;
UrlInputDialogBinding.URL_SELECTED="input link selected";
function UrlInputDialogBinding(){
this.logger=SystemLogger.getLogger("UrlInputDialogBinding");
this.editButtonBinding=null;
this.labelBinding=null;
}
UrlInputDialogBinding.prototype.toString=function(){
return "[UrlInputDialogBinding]";
};
UrlInputDialogBinding.prototype.onBindingRegister=function(){
UrlInputDialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
};
UrlInputDialogBinding.prototype._buildDOMContent=function(){
UrlInputDialogBinding.superclass._buildDOMContent.call(this);
this.buildButtonAndLabel();
};
UrlInputDialogBinding.prototype.buildButtonAndLabel=function(){
if(this.shadowTree.labelInput==null){
this.shadowTree.labelInput=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
this.shadowTree.box.appendChild(this.shadowTree.labelInput);
this.shadowTree.labelInput.style.display="none";
this.shadowTree.labelInput.readOnly=true;
var self=this;
DOMEvents.addEventListener(this.shadowTree.labelInput,DOMEvents.DOUBLECLICK,{handleEvent:function(e){
self.clearLabel();
self.focus();
}});
}
if(this.editButtonBinding==null){
var _91d=ToolBarButtonBinding.newInstance(this.bindingDocument);
_91d.setImage("${icon:editor-sourceview}");
_91d.bindingElement.style.left="-24px";
_91d.bindingElement.style.width="24px";
this.addFirst(_91d);
_91d.attach();
_91d.hide();
var self=this;
_91d.oncommand=function(){
self.clearLabel();
self.focus();
};
this.editButtonBinding=_91d;
}
};
UrlInputDialogBinding.prototype.onblur=function(){
UrlInputDialogBinding.superclass.onblur.call(this);
this.setValue(this.getValue());
};
UrlInputDialogBinding.prototype.setValue=function(_91e){
UrlInputDialogBinding.superclass.setValue.call(this,_91e);
if(this.isAttached){
this.compositeUrl=new Uri(_91e);
if(this.compositeUrl.isMedia||this.compositeUrl.isPage){
var _91f=TreeService.GetCompositeUrlLabel(_91e);
if(_91f!=_91e){
this.setLabel(_91f);
}
}else{
this.clearLabel();
}
this.dispatchAction(UrlInputDialogBinding.URL_SELECTED);
}
};
UrlInputDialogBinding.prototype.setLabel=function(_920){
if(this.shadowTree.labelInput){
if(_920){
this.setReadOnly(true);
this.editButtonBinding.show();
this.shadowTree.input.style.display="none";
this.shadowTree.labelInput.style.display="block";
this.shadowTree.labelInput.value=_920;
}else{
this.setReadOnly(false);
this.editButtonBinding.hide();
this.shadowTree.input.style.display="block";
this.shadowTree.labelInput.style.display="none";
}
}
};
UrlInputDialogBinding.prototype.clearLabel=function(){
this.setLabel();
};
DataInputButtonBinding.prototype=new DataInputBinding;
DataInputButtonBinding.prototype.constructor=DataInputButtonBinding;
DataInputButtonBinding.superclass=DataInputBinding.prototype;
function DataInputButtonBinding(){
this.logger=SystemLogger.getLogger("DataInputButtonBinding");
this._dialogButtonBinding=null;
}
DataInputButtonBinding.prototype.toString=function(){
return "[DataInputButtonBinding]";
};
DataInputButtonBinding.prototype.onBindingAttach=function(){
DataInputButtonBinding.superclass.onBindingAttach.call(this);
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
};
DataInputButtonBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
};
DataInputButtonBinding.prototype.buildButton=function(){
var _921=ToolBarButtonBinding.newInstance(this.bindingDocument);
var _922=this.getProperty("image");
if(_922!=null){
_921.setImage(_922);
}else{
_921.setImage("${icon:popup}");
}
this.addFirst(_921);
_921.attach();
var self=this;
_921.oncommand=function(){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
this._dialogButtonBinding=_921;
};
DataInputButtonBinding.prototype.oncommand=function(){
var _924=this._dialogButtonBinding;
if(_924!=null){
_924.oncommand();
}
};
DataDialogBinding.prototype=new DataBinding;
DataDialogBinding.prototype.constructor=DataDialogBinding;
DataDialogBinding.superclass=DataBinding.prototype;
DataDialogBinding.ACTION_COMMAND="datadialog command";
function DataDialogBinding(){
this.logger=SystemLogger.getLogger("DataDialogBinding");
this._buttonBinding=null;
this._handler=null;
this._map=null;
this._dialogViewHandle=null;
this._hasKeyboard=false;
this._hasFocus=false;
this.isRequired=false;
this._isValid=true;
}
DataDialogBinding.prototype.toString=function(){
return "[DataDialogBinding]";
};
DataDialogBinding.prototype.onBindingRegister=function(){
DataDialogBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["image"]=this.setImage;
this.propertyMethodMap["label"]=this.setLabel;
this.propertyMethodMap["tooltip"]=this.setToolTip;
this.propertyMethodMap["handle"]=this.setHandle;
this.propertyMethodMap["url"]=this.setURL;
this.propertyMethodMap["value"]=this.setValue;
};
DataDialogBinding.prototype.parseDOMProperties=function(){
var _925=this.getProperty("required")==true;
if(_925){
this.isRequired=true;
}
};
DataDialogBinding.prototype.onBindingAttach=function(){
DataDialogBinding.superclass.onBindingAttach.call(this);
Binding.imageProfile(this);
this._buildButton();
this.parseDOMProperties();
if(this.getProperty("handle")!=null||this.getProperty("url")){
this._buildIndicator();
}
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
};
DataDialogBinding.prototype._buildButton=function(){
var _926=this.getProperty("label");
var _927=this.getProperty("tooltip");
this._buttonBinding=this.add(ClickButtonBinding.newInstance(this.bindingDocument));
if(_926!=null){
if(this.getProperty("handle")!=null||this.getProperty("url")!=null){
this._buttonBinding.setLabel(_926+LabelBinding.DIALOG_INDECATOR_SUFFIX);
}else{
this._buttonBinding.setLabel(_926);
}
}
if(this.imageProfile){
this._buttonBinding.imageProfile=this.imageProfile;
}
if(_927!=null){
this._buttonBinding.setToolTip(_927);
}
this._buttonBinding.addActionListener(ButtonBinding.ACTION_COMMAND,this);
this._buttonBinding.attach();
};
DataDialogBinding.prototype._buildIndicator=function(){
var img=this.bindingDocument.createElement("img");
img.src=Resolver.resolve("${icon:popup}");
img.className="dialogindicatorimage";
this._buttonBinding.bindingElement.appendChild(img);
this.shadowTree.indicatorimage=img;
};
DataDialogBinding.prototype.handleAction=function(_929){
DataDialogBinding.superclass.handleAction.call(this,_929);
var _92a=_929.target;
var self=this;
switch(_929.type){
case ButtonBinding.ACTION_COMMAND:
if(this._handler==null){
this._handler={handleDialogResponse:function(_92c,_92d){
if(_92c==Dialog.RESPONSE_ACCEPT){
if(_92d instanceof DataBindingMap){
self._map=_92d;
}else{
throw "Invalid dialog result";
}
}
}};
}
if(_92a==this._buttonBinding){
_929.consume();
this.focus();
this.fireCommand();
}
break;
}
};
DataDialogBinding.prototype.handleBroadcast=function(_92e,arg){
DataDialogBinding.superclass.handleBroadcast.call(this,_92e,arg);
switch(_92e){
case BroadcastMessages.KEY_SPACE:
this.fireCommand();
break;
}
};
DataDialogBinding.prototype.fireCommand=function(def){
this.dispatchAction(this.constructor.ACTION_COMMAND);
var _931=this.getProperty("handle");
var url=this.getURL();
var _933=null;
if(_931!=null||def!=null){
if(def!=null){
_933=def;
}else{
_933=ViewDefinitions[_931];
}
if(_933 instanceof DialogViewDefinition){
_933.handler=this._handler;
if(this._map!=null){
_933.argument=this._map;
}
StageBinding.presentViewDefinition(_933);
}
}else{
if(url!=null){
_933=Dialog.invokeModal(url,this._handler,this._map);
}
}
if(_933!=null){
this._dialogViewHandle=_933.handle;
this._releaseKeyboard();
}
};
DataDialogBinding.prototype.setLabel=function(_934){
this.setProperty("label",_934);
if(this.isAttached){
this._buttonBinding.setLabel(_934+LabelBinding.DIALOG_INDECATOR_SUFFIX);
}
};
DataDialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
DataDialogBinding.prototype.setImage=function(_935){
this.setProperty("image",_935);
if(this.imageProfile!=null){
this.imageProfile.setDefaultImage(_935);
if(this._buttonBinding!=null){
this._buttonBinding.imageProfile=this.imageProfile;
this._buttonBinding.setImage(this._buttonBinding.imageProfile.getDefaultImage());
}
}
};
DataDialogBinding.prototype.setToolTip=function(_936){
this.setProperty("tooltip",_936);
if(this.isAttached){
this._buttonBinding.setToolTip(_936);
}
};
DataDialogBinding.prototype.setHandle=function(_937){
this.setProperty("handle",_937);
};
DataDialogBinding.prototype.setURL=function(url){
this.setProperty("url",url);
};
DataDialogBinding.prototype.getURL=function(){
return this.getProperty("url");
};
DataDialogBinding.prototype.setHandler=function(_939){
this._handler=_939;
};
DataDialogBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
FocusBinding.focusElement(this.bindingElement);
if(this.isFocused){
this._grabKeyboard();
}
}
};
DataDialogBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
if(this._hasKeyboard){
this._releaseKeyboard();
}
}
};
DataDialogBinding.prototype._grabKeyboard=function(){
if(!this._hasKeyboard){
this.subscribe(BroadcastMessages.KEY_SPACE);
this._hasKeyboard=true;
}
};
DataDialogBinding.prototype._releaseKeyboard=function(){
if(this._hasKeyboard){
this.unsubscribe(BroadcastMessages.KEY_SPACE);
this._hasKeyboard=false;
}
};
DataDialogBinding.prototype.validate=function(){
var _93a=true;
if(this.isRequired==true){
var _93b=this.getValue();
if(_93b==null||_93b==""){
_93a=false;
}
if(_93a!=this._isValid){
if(_93a){
this.dispatchAction(Binding.ACTION_VALID);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.dispatchAction(Binding.ACTION_INVALID);
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._buttonBinding.setLabel(DataBinding.warnings["required"]);
}
}
this._isValid=_93a;
}
return _93a;
};
DataDialogBinding.prototype.manifest=function(){
};
DataDialogBinding.prototype.getValue=function(){
return null;
};
DataDialogBinding.prototype.getResult=function(){
return this._map;
};
DataDialogBinding.prototype.setResult=function(map){
if(map instanceof DataBindingMap){
this._map=map;
}else{
throw "Invalid argument";
}
};
DataDialogBinding.newInstance=function(_93d){
var _93e=DOMUtil.createElementNS(Constants.NS_UI,"ui:datadialog",_93d);
return UserInterface.registerBinding(_93e,DataDialogBinding);
};
PostBackDataDialogBinding.prototype=new DataDialogBinding;
PostBackDataDialogBinding.prototype.constructor=PostBackDataDialogBinding;
PostBackDataDialogBinding.superclass=DataDialogBinding.prototype;
PostBackDataDialogBinding.ACTION_COMMAND="postbackdialog command";
function PostBackDataDialogBinding(){
this.input=null;
return this;
}
PostBackDataDialogBinding.prototype.onBindingAttach=function(){
PostBackDataDialogBinding.superclass.onBindingAttach.call(this);
Binding.dotnetify(this);
var self=this;
this._handler={handleDialogResponse:function(_940,_941){
if(_940==Dialog.RESPONSE_ACCEPT){
self._onDialogAccept(_941);
}else{
self._onDialogCancel();
}
}};
};
PostBackDataDialogBinding.prototype._onDialogAccept=function(_942){
_942=new String(_942);
this.dirty();
this.setValue(encodeURIComponent(_942));
var self=this;
setTimeout(function(){
if(self.ondialogaccept!=null){
self.ondialogaccept();
}
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
},0);
};
PostBackDataDialogBinding.prototype._onDialogCancel=function(){
if(this.ondialogcancel!=null){
this.ondialogcancel();
}
};
PostBackDataDialogBinding.prototype.getURL=function(){
var url=this.getProperty("url");
var suf=this.getValue();
if(suf==null){
suf=this.getProperty("defaultValue");
}
return new String(url+suf);
};
PostBackDataDialogBinding.prototype.manifest=function(){
var _946=this.getValue();
if(_946==null){
_946="";
}
this.shadowTree.dotnetinput.value=_946;
};
PostBackDataDialogBinding.prototype.setValue=function(_947){
this.setProperty("value",_947);
};
PostBackDataDialogBinding.prototype.getValue=function(){
return this.getProperty("value");
};
PostBackDataDialogBinding.prototype.getResult=function(){
return null;
};
PostBackDataDialogBinding.prototype.setResult=function(_948){
};
PostBackDataDialogBinding.newInstance=function(_949){
var _94a=DOMUtil.createElementNS(Constants.NS_UI,"ui:postbackdialog",_949);
return UserInterface.registerBinding(_94a,PostBackDataDialogBinding);
};
ViewDefinitionPostBackDataDialogBinding.prototype=new PostBackDataDialogBinding;
ViewDefinitionPostBackDataDialogBinding.prototype.constructor=ViewDefinitionPostBackDataDialogBinding;
ViewDefinitionPostBackDataDialogBinding.superclass=PostBackDataDialogBinding.prototype;
function ViewDefinitionPostBackDataDialogBinding(){
this.logger=SystemLogger.getLogger("ViewDefinitionPostBackDataDialogBinding");
return this;
}
ViewDefinitionPostBackDataDialogBinding.prototype.toString=function(){
return "[ViewDefinitionPostBackDataDialogBinding]";
};
ViewDefinitionPostBackDataDialogBinding.prototype.fireCommand=function(){
var _94b=this.getProperty("dialoglabel");
var _94c=this.getProperty("providersearch");
var key=this.getProperty("providerkey");
var _94e=this.getProperty("handle");
var _94f=this.getProperty("selectedtoken");
if(_94e!=null){
var def=ViewDefinition.clone(_94e,"Generated.ViewDefinition.Handle."+KeyMaster.getUniqueKey());
if(_94b!=null){
if(def.argument==null){
def.argument={};
}
def.argument.label=_94b;
}
if(_94c!=null){
if(def.argument==null){
def.argument={};
}
if(def.argument.nodes==null){
def.argument.nodes=[];
}
def.argument.nodes[0].search=_94c;
}
if(key!=null){
if(def.argument==null){
def.argument={};
}
if(def.argument.nodes==null){
def.argument.nodes=[];
}
def.argument.nodes[0].key=key;
}
if(_94f!=null){
if(def.argument==null){
def.argument={};
}
def.argument.selectedToken=_94f;
}
ViewDefinitionPostBackDataDialogBinding.superclass.fireCommand.call(this,def);
}else{
throw "Attribute \"handle\" required.";
}
};
ViewDefinitionPostBackDataDialogBinding.newInstance=function(_951){
var _952=DOMUtil.createElementNS(Constants.NS_UI,"ui:postbackdialog",_951);
return UserInterface.registerBinding(_952,ViewDefinitionPostBackDataDialogBinding);
};
NullPostBackDataDialogBinding.prototype=new DataBinding;
NullPostBackDataDialogBinding.prototype.constructor=NullPostBackDataDialogBinding;
NullPostBackDataDialogBinding.superclass=DataBinding.prototype;
NullPostBackDataDialogBinding.LABEL_NULL="(No selection)";
NullPostBackDataDialogBinding.LABEL_DEFAULT="Select";
NullPostBackDataDialogBinding.VALUE_NULL="null";
NullPostBackDataDialogBinding.VALUE_SELECTED="selected";
NullPostBackDataDialogBinding.ACTION_COMMAND="nullpostbackdatadialog command";
function NullPostBackDataDialogBinding(){
this.logger=SystemLogger.getLogger("NullPostBackDataDialogBinding");
this._datathing=null;
this._selector=null;
return this;
}
NullPostBackDataDialogBinding.prototype.toString=function(){
return "[NullPostBackDataDialogBinding]";
};
NullPostBackDataDialogBinding.prototype.onBindingAttach=function(){
NullPostBackDataDialogBinding.superclass.onBindingAttach.call(this);
this.propertyMethodMap["label"]=this.setLabel;
var self=this;
this.propertyMethodMap["value"]=function(_954){
self._datathing.setValue(_954);
};
this.propertyMethodMap["selectorlabel"]=function(){
if(Application.isDeveloperMode){
alert("Selectorlabel property not supported yet!");
}
};
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
this._buildDataDialog();
this._buildSelector();
};
NullPostBackDataDialogBinding.prototype._buildDataDialog=function(){
this._datathing=this.add(ViewDefinitionPostBackDataDialogBinding.newInstance(this.bindingDocument));
new List(["callbackid","handle","name","providersearch","providerkey","value"]).each(function(prop){
this._datathing.setProperty(prop,this.getProperty(prop));
this.setProperty(prop,null);
},this);
var self=this;
this._datathing.ondialogcancel=function(){
var _957=self.getValue();
if(_957==""||_957==null){
self._selector.setLabel(NullPostBackDataDialogBinding.LABEL_NULL);
}else{
self._selector.setLabel(self.getLabel());
}
};
this._datathing.hide();
this._datathing.attach();
};
NullPostBackDataDialogBinding.prototype._buildSelector=function(){
this._selector=this.add(NullPostBackDataDialogSelectorBinding.newInstance(this.bindingDocument));
var _958=this.getProperty("value");
var _959=this.getProperty("selectorlabel");
if(_959==null){
_959=NullPostBackDataDialogBinding.LABEL_DEFAULT;
}
var list=new List();
list.add(new SelectorBindingSelection(NullPostBackDataDialogBinding.LABEL_NULL,NullPostBackDataDialogBinding.VALUE_NULL,_958==null));
list.add(new SelectorBindingSelection(_959+LabelBinding.DIALOG_INDECATOR_SUFFIX,NullPostBackDataDialogBinding.VALUE_SELECTED,_958!=null,new ImageProfile({image:"${icon:popup}"})));
this._selector.master=this;
this._selector.attach();
this._selector.populateFromList(list);
var _958=this.getValue();
if(_958==""||_958==null){
this._selector.setLabel(NullPostBackDataDialogBinding.LABEL_NULL);
}else{
this._selector.setLabel(this.getLabel());
}
};
NullPostBackDataDialogBinding.prototype.handleAction=function(_95b){
NullPostBackDataDialogBinding.superclass.handleAction.call(this,_95b);
switch(_95b.type){
case PageBinding.ACTION_DOPOSTBACK:
if(_95b.target==this._datathing){
var _95c=this.getProperty("label");
this._selector.setLabel("");
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
var self=this;
setTimeout(function(){
if(self.getProperty("label")==_95c){
self._selector.setLabel(_95c);
}
},500);
_95b.consume();
}
break;
}
};
NullPostBackDataDialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
NullPostBackDataDialogBinding.prototype.setLabel=function(_95e){
this.setProperty("label",_95e);
if(this._selector!=null){
this._selector.setLabel(_95e);
}
};
NullPostBackDataDialogBinding.prototype.getValue=function(){
return this._datathing.getValue();
};
NullPostBackDataDialogBinding.prototype.setValue=function(_95f){
this._datathing.setValue(_95f);
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
NullPostBackDataDialogBinding.prototype.action=function(){
new List(["selectedtoken"]).each(function(prop){
this._datathing.setProperty(prop,this.getProperty(prop));
},this);
this._datathing.fireCommand();
};
NullPostBackDataDialogBinding.prototype.validate=function(){
return true;
};
NullPostBackDataDialogBinding.prototype.manifest=function(){
};
NullPostBackDataDialogBinding.prototype.getResult=function(){
};
NullPostBackDataDialogBinding.prototype.setResult=function(){
};
NullPostBackDataDialogSelectorBinding.prototype=new SelectorBinding;
NullPostBackDataDialogSelectorBinding.prototype.constructor=NullPostBackDataDialogSelectorBinding;
NullPostBackDataDialogSelectorBinding.superclass=SelectorBinding.prototype;
function NullPostBackDataDialogSelectorBinding(){
this.logger=SystemLogger.getLogger("NullPostBackDataDialogSelectorBinding");
this.master=null;
return this;
}
NullPostBackDataDialogSelectorBinding.prototype.toString=function(){
return "[NullPostBackDataDialogSelectorBinding]";
};
NullPostBackDataDialogSelectorBinding.prototype.select=function(_961,_962){
if(NullPostBackDataDialogSelectorBinding.superclass.select.call(this,_961,true)){
this._buttonBinding.setImage(null);
this._updateImageLayout();
if(this._selectionValue==NullPostBackDataDialogBinding.VALUE_SELECTED){
if(this.master.getValue()!=null){
}
}
}
};
NullPostBackDataDialogSelectorBinding.prototype.setLabel=function(_963){
this._buttonBinding.setLabel(_963);
};
NullPostBackDataDialogSelectorBinding.prototype.setToolTip=function(_964){
this._buttonBinding.setToolTip(_964);
};
NullPostBackDataDialogSelectorBinding.prototype.handleAction=function(_965){
NullPostBackDataDialogSelectorBinding.superclass.handleAction.call(this,_965);
switch(_965.type){
case MenuItemBinding.ACTION_COMMAND:
var _966=_965.target;
var _967=this.master;
if(_966.selectionValue==NullPostBackDataDialogBinding.VALUE_SELECTED){
this.setLabel(_966.getLabel());
setTimeout(function(){
_967.action();
},0);
}else{
if(_967.getValue()){
_967.dirty();
}
_967.setValue("");
}
break;
}
};
NullPostBackDataDialogSelectorBinding.prototype.manifest=function(){
};
NullPostBackDataDialogSelectorBinding.newInstance=function(_968){
var _969=DOMUtil.createElementNS(Constants.NS_UI,"ui:selector",_968);
return UserInterface.registerBinding(_969,NullPostBackDataDialogSelectorBinding);
};
MultiSelectorBinding.prototype=new DataBinding;
MultiSelectorBinding.prototype.constructor=MultiSelectorBinding;
MultiSelectorBinding.superclass=DataBinding.prototype;
MultiSelectorBinding.DISPLAY_SELECTED="selected";
MultiSelectorBinding.DISPLAY_UNSELECTED="unselected";
MultiSelectorBinding.ACTION_COMMAND="multiselector command";
MultiSelectorBinding.ACTION_SELECTIONCHANGED="multiselector selection changed";
function MultiSelectorBinding(){
this.logger=SystemLogger.getLogger("MultiSelectorBinding");
this.isEditable=true;
this.isSelectable=false;
this._dataDialogBinding=null;
this.selections=null;
this._selectionMap=null;
this._display=MultiSelectorBinding.DISPLAY_SELECTED;
this._lastSelectedElement=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
MultiSelectorBinding.prototype.toString=function(){
return "[MultiSelectorBinding]";
};
MultiSelectorBinding.prototype.onBindingAttach=function(){
MultiSelectorBinding.superclass.onBindingAttach.call(this);
this.selections=this._getSelectionsList();
this.addActionListener(DataDialogBinding.ACTION_COMMAND);
this.addActionListener(MultiSelectorDataDialogBinding.ACTION_RESULT);
this.addEventListener(DOMEvents.MOUSEDOWN);
this._buildDOMContent();
this._parseDOMProperties();
this.populateFromList(this.selections);
var _96a=this._dataDialogBinding;
if(_96a!=null){
DOMEvents.addEventListener(this.shadowTree.box,DOMEvents.DOUBLECLICK,{handleEvent:function(){
_96a.fireCommand();
}});
}
};
MultiSelectorBinding.prototype._buildDOMContent=function(){
this.shadowTree.box=DOMUtil.createElementNS(Constants.NS_UI,"ui:box",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.box);
};
MultiSelectorBinding.prototype._parseDOMProperties=function(){
var _96b=this.getProperty("editable");
var _96c=this.getProperty("selectable");
var _96d=this.getProperty("display");
if(_96b!=false){
this._buildEditorButton();
}else{
this.isEditable=false;
}
if(_96c){
this.isSelectable=true;
this._selectionMap=new Map();
}
if(_96d){
this._display=_96d;
}
};
MultiSelectorBinding.prototype._buildEditorButton=function(){
if(this.isEditable){
var _96e=MultiSelectorDataDialogBinding.newInstance(this.bindingDocument);
_96e.selections=this.selections;
this.add(_96e);
_96e.attach();
this._dataDialogBinding=_96e;
this.shadowTree.datadialog=_96e;
}
};
MultiSelectorBinding.prototype.populateFromList=function(list){
list.reset();
var _970=false;
this.shadowTree.box.innerHTML="";
while(list.hasNext()){
var _971=list.getNext();
switch(this._display){
case MultiSelectorBinding.DISPLAY_SELECTED:
_970=_971.isSelected;
break;
case MultiSelectorBinding.DISPLAY_UNSELECTED:
_970=_971.isSelected!=true;
break;
}
if(_970){
this.shadowTree.box.appendChild(this._getElementForSelection(_971));
}
}
this.selections=list;
if(this._dataDialogBinding){
this._dataDialogBinding.selections=this.selections;
}
};
MultiSelectorBinding.prototype.cumulateFromList=function(list,_973){
var box=this.shadowTree.box;
var _975=false;
if(list.hasEntries()){
list.reverse().reset();
while(list.hasNext()){
var _976=list.getNext();
if(_973){
_976.isSelected=this._display==MultiSelectorBinding.DISPLAY_SELECTED;
_975=true;
}else{
switch(this._display){
case MultiSelectorBinding.DISPLAY_SELECTED:
_975=_976.isSelected;
break;
case MultiSelectorBinding.DISPLAY_UNSELECTED:
_975=_976.isSelected!=true;
break;
}
}
if(_975){
var _977=this._getElementForSelection(_976);
box.insertBefore(_977,box.firstChild);
CSSUtil.attachClassName(_977,"selected");
this._selectionMap.set(_976.value,_977);
}
}
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
};
MultiSelectorBinding.prototype._getElementForSelection=function(_978){
var _979=DOMUtil.createElementNS(Constants.NS_XHTML,"div",this.bindingDocument);
_979.appendChild(this.bindingDocument.createTextNode(_978.label));
_979.setAttribute("label",_978.label);
_979.setAttribute("value",_978.value);
return _979;
};
MultiSelectorBinding.prototype.hasHighlight=function(){
return this._selectionMap&&this._selectionMap.hasEntries();
};
MultiSelectorBinding.prototype.handleEvent=function(e){
MultiSelectorBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!this.isFocused){
this.focus();
}
if(this.isSelectable){
var _97b=DOMEvents.getTarget(e);
var _97c=DOMUtil.getLocalName(_97b);
if(_97c=="div"){
this._handleMouseDown(_97b);
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
break;
}
};
MultiSelectorBinding.prototype._handleMouseDown=function(_97d){
if(Keyboard.isShiftPressed&&this._lastSelectedElement){
var _97e=this._getElements();
var _97f=_97d.getAttribute("value");
var _980=this._lastSelectedElement.getAttribute("value");
var _981=false;
while(_97e.hasNext()){
var el=_97e.getNext();
switch(el.getAttribute("value")){
case _97f:
case _980:
_981=!_981;
break;
}
if(_981){
this._hilite(el);
}else{
this._unhilite(el);
}
this._hilite(this._lastSelectedElement);
this._hilite(_97d);
}
}else{
if(Keyboard.isControlPressed&&this._isHilited(_97d)){
this._unhilite(_97d);
}else{
this._hilite(_97d);
}
if(!Keyboard.isControlPressed){
var self=this;
this._getElements().each(function(el){
if(el!=_97d){
self._unhilite(el);
}
});
}
}
this._lastSelectedElement=_97d;
};
MultiSelectorBinding.prototype._hilite=function(_985){
var _986=_985.getAttribute("value");
if(!this._selectionMap.has(_986)){
CSSUtil.attachClassName(_985,"selected");
this._selectionMap.set(_986,_985);
}
};
MultiSelectorBinding.prototype._unhilite=function(_987){
var _988=_987.getAttribute("value");
if(this._selectionMap.has(_988)){
CSSUtil.detachClassName(_987,"selected");
this._selectionMap.del(_988);
}
};
MultiSelectorBinding.prototype._isHilited=function(_989){
return CSSUtil.hasClassName(_989,"selected");
};
MultiSelectorBinding.prototype.handleAction=function(_98a){
MultiSelectorBinding.superclass.handleAction.call(this,_98a);
var _98b=_98a.target;
switch(_98a.type){
case DataDialogBinding.ACTION_COMMAND:
if(_98b==this._dataDialogBinding){
if(!this.isFocused){
this.focus();
}
this.dispatchAction(MultiSelectorBinding.ACTION_COMMAND);
_98a.consume();
}
break;
case MultiSelectorDataDialogBinding.ACTION_RESULT:
this.populateFromList(_98b.result);
this.dirty();
_98b.result=null;
_98a.consume();
break;
}
};
MultiSelectorBinding.prototype.extractSelected=function(){
var _98c=null;
if(this.isSelectable){
_98c=new List();
if(this._selectionMap&&this._selectionMap.hasEntries()){
var self=this;
this._getElements().each(function(_98e){
if(self._isHilited(_98e)){
_98e.parentNode.removeChild(_98e);
_98c.add(new SelectorBindingSelection(_98e.getAttribute("label"),_98e.getAttribute("value"),true));
}
});
this._selectionMap=new Map();
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
return _98c;
};
MultiSelectorBinding.prototype.reposition=function(isUp){
var _990=this._getElements();
if(!isUp){
_990.reverse();
}
var _991=true;
while(_991&&_990.hasNext()){
var _992=_990.getNext();
if(this._isHilited(_992)){
switch(isUp){
case true:
if(_992.previousSibling){
_992.parentNode.insertBefore(_992,_992.previousSibling);
}else{
_991=false;
}
break;
case false:
if(_992.nextSibling){
_992.parentNode.insertBefore(_992,_992.nextSibling.nextSibling);
}else{
_991=false;
}
break;
}
}
}
};
MultiSelectorBinding.prototype.toSelectionList=function(){
var _993=new List();
var _994=this._display==MultiSelectorBinding.DISPLAY_SELECTED;
var self=this;
this._getElements().each(function(_996){
var _997=new SelectorBindingSelection(_996.getAttribute("label"),_996.getAttribute("value"),_994);
_997.isHighlighted=self._isHilited(_996);
_993.add(_997);
});
return _993;
};
MultiSelectorBinding.prototype._getElements=function(){
if(!this.shadowTree.box){
return new List();
}
return new List(DOMUtil.getElementsByTagName(this.shadowTree.box,"div"));
};
MultiSelectorBinding.prototype._getSelectionsList=SelectorBinding.prototype._getSelectionsList;
MultiSelectorBinding.prototype.validate=function(){
return true;
};
MultiSelectorBinding.prototype.manifest=function(){
var _998=new List(DOMUtil.getElementsByTagName(this.bindingElement,"input"));
if(_998.hasEntries()){
_998.each(function(_999){
_999.parentNode.removeChild(_999);
});
}
this.selections.reset();
while(this.selections.hasNext()){
var _99a=this.selections.getNext();
if(_99a.isSelected){
var _99b=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_99b.name=this._name;
_99b.value=_99a.value;
this.bindingElement.appendChild(_99b);
}
}
};
MultiSelectorBinding.prototype.getValue=function(){
return "HEJ!";
};
MultiSelectorBinding.prototype.setValue=function(_99c){
alert(_99c);
};
MultiSelectorBinding.prototype.getResult=function(){
alert("TODO: MultiSelectorBinding#getResult");
return new Array();
};
MultiSelectorBinding.prototype.setResult=function(_99d){
alert("TODO: MultiSelectorBinding#setResult");
};
HTMLDataDialogBinding.prototype=new PostBackDataDialogBinding;
HTMLDataDialogBinding.prototype.constructor=HTMLDataDialogBinding;
HTMLDataDialogBinding.superclass=PostBackDataDialogBinding.prototype;
function HTMLDataDialogBinding(){
this.logger=SystemLogger.getLogger("HTMLDataDialogBinding");
}
HTMLDataDialogBinding.prototype.toString=function(){
return "[HTMLDataDialogBinding]";
};
HTMLDataDialogBinding.prototype.onBindingAttach=function(){
if(this.getProperty("label")==null){
this.setProperty("label","Edit HTML");
}
HTMLDataDialogBinding.superclass.onBindingAttach.call(this);
};
HTMLDataDialogBinding.prototype.fireCommand=function(){
this.dispatchAction(DataDialogBinding.ACTION_COMMAND);
var _99e={label:DataBinding.getAssociatedLabel(this),value:decodeURIComponent(this.getValue()),configuration:{"formattingconfiguration":this.getProperty("formattingconfiguration"),"elementclassconfiguration":this.getProperty("elementclassconfiguration"),"configurationstylesheet":this.getProperty("configurationstylesheet"),"presentationstylesheet":this.getProperty("presentationstylesheet"),"embedablefieldstypenames":this.getProperty("embedablefieldstypenames"),"previewtemplateid":this.getProperty("previewtemplateid"),"previewplaceholder":this.getProperty("previewplaceholder"),"previewpageid":this.getProperty("previewpageid")}};
var _99f=ViewDefinitions["Composite.Management.VisualEditorDialog"];
_99f.handler=this._handler;
_99f.argument=_99e;
StageBinding.presentViewDefinition(_99f);
this._releaseKeyboard();
};
MultiSelectorDataDialogBinding.prototype=new DataDialogBinding;
MultiSelectorDataDialogBinding.prototype.constructor=MultiSelectorDataDialogBinding;
MultiSelectorDataDialogBinding.superclass=DataDialogBinding.prototype;
MultiSelectorDataDialogBinding.ACTION_RESULT="multiselectordatadialog result";
function MultiSelectorDataDialogBinding(){
this.logger=SystemLogger.getLogger("MultiSelectorDataDialogBinding");
this._dialogViewHandle="Composite.Management.MultiSelectorDialog";
this.isFocusable=false;
this.selections=null;
return this;
}
MultiSelectorDataDialogBinding.prototype.toString=function(){
return "[MultiSelectorDataDialogBinding]";
};
MultiSelectorDataDialogBinding.prototype.onBindingAttach=function(){
this.setProperty("label",StringBundle.getString("ui","Website.Misc.MultiSelector.LabelEditSelections"));
MultiSelectorDataDialogBinding.superclass.onBindingAttach.call(this);
};
MultiSelectorDataDialogBinding.prototype.fireCommand=function(){
this.dispatchAction(DataDialogBinding.ACTION_COMMAND);
var _9a0={label:DataBinding.getAssociatedLabel(this),selections:this.selections};
var self=this;
var _9a2={handleDialogResponse:function(_9a3,_9a4){
if(_9a3==Dialog.RESPONSE_ACCEPT){
self.result=_9a4;
self.dispatchAction(MultiSelectorDataDialogBinding.ACTION_RESULT);
}
}};
var _9a5=ViewDefinitions[this._dialogViewHandle];
_9a5.handler=_9a2;
_9a5.argument=_9a0;
StageBinding.presentViewDefinition(_9a5);
};
MultiSelectorDataDialogBinding.newInstance=function(_9a6){
var _9a7=DOMUtil.createElementNS(Constants.NS_UI,"ui:datadialog",_9a6);
return UserInterface.registerBinding(_9a7,MultiSelectorDataDialogBinding);
};
LazyBindingSetBinding.prototype=new Binding;
LazyBindingSetBinding.prototype.constructor=LazyBindingSetBinding;
LazyBindingSetBinding.superclass=Binding.prototype;
function LazyBindingSetBinding(){
this.logger=SystemLogger.getLogger("LazyBindingSetBinding");
}
LazyBindingSetBinding.prototype.toString=function(){
return "[LazyBindingSetBinding]";
};
LazyBindingBinding.prototype=new DataBinding;
LazyBindingBinding.prototype.constructor=LazyBindingBinding;
LazyBindingBinding.superclass=DataBinding.prototype;
LazyBindingBinding.ID_APPENDIX="lazybinding";
LazyBindingBinding.wakeUp=function(_9a8){
var id=_9a8.bindingElement.id+LazyBindingBinding.ID_APPENDIX;
var _9aa=_9a8.bindingDocument.getElementById(id);
if(_9aa!=null){
var _9ab=UserInterface.getBinding(_9aa);
_9ab.setResult(true);
}
};
function LazyBindingBinding(){
this.logger=SystemLogger.getLogger("LazyBindingBinding");
this.isFocusable=false;
this._isLazy=false;
}
LazyBindingBinding.prototype.toString=function(){
return "[LazyBindingBinding]";
};
LazyBindingBinding.prototype.onBindingRegister=function(){
LazyBindingBinding.superclass.onBindingRegister.call(this);
var id=this.getProperty("bindingid");
if(id!=null){
var _9ad=this.bindingDocument.getElementById(id);
if(_9ad!=null){
var _9ae=UserInterface.getBinding(_9ad);
if(_9ae&&!_9ae.isAttached){
_9ae.isLazy=true;
}else{
_9ad.setAttribute("lazy",true);
}
}
}
};
LazyBindingBinding.prototype.validate=function(){
return true;
};
LazyBindingBinding.prototype.manifest=function(){
if(this.isAttached){
if(this.shadowTree.input==null){
this.shadowTree.input=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
this.shadowTree.input.type="hidden";
this.shadowTree.input.name=this.getName();
this.bindingElement.appendChild(this.shadowTree.input);
}
this.shadowTree.input.value=this.getValue();
}
};
LazyBindingBinding.prototype.getValue=function(){
return String(this._isLazy);
};
LazyBindingBinding.prototype.setValue=function(){
throw "Not implemented";
};
LazyBindingBinding.prototype.getResult=function(){
return this._isLazy;
};
LazyBindingBinding.prototype.setResult=function(_9af){
this._isLazy=_9af;
};
EditorDataBinding.prototype=new WindowBinding;
EditorDataBinding.prototype.constructor=EditorDataBinding;
EditorDataBinding.superclass=WindowBinding.prototype;
function EditorDataBinding(){
this.logger=SystemLogger.getLogger("EditorDataBinding");
this.isFocusable=false;
this._url=WindowBinding.DEFAULT_URL;
this.isDirty=false;
return this;
}
EditorDataBinding.prototype.toString=function(){
return "[EditorDataBinding]";
};
EditorDataBinding.prototype.onBindingRegister=function(){
EditorDataBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument)).attach();
var url=this._url;
var _9b1=this.getProperty("stateprovider");
var _9b2=this.getProperty("handle");
if(_9b1!=null&&_9b2!=null){
url=url.replace("${stateprovider}",_9b1).replace("${handle}",_9b2);
}else{
url=url.split("?")[0];
}
this.logger.debug("Loading URL: "+url);
this.setURL(url);
};
EditorDataBinding.prototype.onBindingAttach=function(){
EditorDataBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_DIRTY);
Application.lock(this);
};
EditorDataBinding.prototype._onPageInitialize=function(_9b3){
EditorDataBinding.superclass._onPageInitialize.call(this,_9b3);
if(this._pageBinding!=null){
Application.unlock(this);
this._coverBinding.hide();
}
};
EditorDataBinding.prototype.setName=DataBinding.prototype.setName;
EditorDataBinding.prototype.validate=function(){
return this._pageBinding.validateAllDataBindings();
};
EditorDataBinding.prototype.handleAction=function(_9b4){
EditorDataBinding.superclass.handleAction.call(this,_9b4);
switch(_9b4.type){
case Binding.ACTION_DIRTY:
if(_9b4.target!=this){
if(!this.isDirty){
this.dirty();
}
_9b4.consume();
}
break;
}
};
EditorDataBinding.prototype.manifest=function(){
};
EditorDataBinding.prototype.dirty=function(){
if(!this.isDirty){
this.isDirty=true;
this.dispatchAction(Binding.ACTION_DIRTY);
}
};
EditorDataBinding.prototype.clean=function(){
this._pageBinding.cleanAllDataBindings();
DataBinding.prototype.clean.call(this);
};
EditorDataBinding.prototype.focus=function(){
};
EditorDataBinding.prototype.blur=function(){
};
EditorDataBinding.prototype.getName=function(){
};
EditorDataBinding.prototype.getValue=function(){
};
EditorDataBinding.prototype.setValue=function(_9b5){
};
EditorDataBinding.prototype.getResult=function(){
return null;
};
EditorDataBinding.prototype.setResult=function(_9b6){
};
FunctionEditorDataBinding.prototype=new EditorDataBinding;
FunctionEditorDataBinding.prototype.constructor=FunctionEditorDataBinding;
FunctionEditorDataBinding.superclass=EditorDataBinding.prototype;
function FunctionEditorDataBinding(){
this.logger=SystemLogger.getLogger("FunctionEditorDataBinding");
this._url="${root}/content/misc/editors/functioncalleditor/functioncalleditor.aspx?StateProvider=${stateprovider}&Handle=${handle}";
this.hasBasic=false;
return this;
}
FunctionEditorDataBinding.prototype.toString=function(){
return "[FunctionEditorDataBinding]";
};
FunctionEditorDataBinding.prototype.onBindingAttach=function(){
FunctionEditorDataBinding.superclass.onBindingAttach.call(this);
if(this.getProperty("hasbasic")){
this.hasBasic=this.getProperty("hasbasic");
}
};
FunctionEditorDataBinding.prototype._onPageInitialize=function(_9b7){
FunctionEditorDataBinding.superclass._onPageInitialize.call(this,_9b7);
if(this.hasBasic===false){
var _9b8=this.getContentWindow().bindingMap.basicgroup;
if(_9b8){
_9b8.hide();
}
}
};
ParameterEditorDataBinding.prototype=new EditorDataBinding;
ParameterEditorDataBinding.prototype.constructor=ParameterEditorDataBinding;
ParameterEditorDataBinding.superclass=EditorDataBinding.prototype;
function ParameterEditorDataBinding(){
this.logger=SystemLogger.getLogger("ParameterEditorDataBinding");
this._url="${root}/controls/FormsControls/FormUiControlTemplates/DeveloperTools/FunctionParameterEditor.aspx?StateProvider=${stateprovider}&handle=${handle}";
return this;
}
ParameterEditorDataBinding.prototype.toString=function(){
return "[ParameterEditorDataBinding]";
};
ParameterEditorDataBinding.prototype.getValue=function(){
return Math.random();
};
FilePickerBinding.prototype=new DataBinding;
FilePickerBinding.prototype.constructor=FilePickerBinding;
FilePickerBinding.superclass=DataBinding.prototype;
function FilePickerBinding(){
this.logger=SystemLogger.getLogger("FilePickerBinding");
this.isReadOnly=true;
this._isValid=true;
return this;
}
FilePickerBinding.prototype.toString=function(){
return "[FilePickerBinding]";
};
FilePickerBinding.prototype.onBindingAttach=function(){
FilePickerBinding.superclass.onBindingAttach.call(this);
var real=this.getDescendantElementsByLocalName("input").getLast();
var fake=this.getDescendantBindingByLocalName("datainput");
fake.isFocusable=false;
var self=this;
real.onchange=function(){
var val=this.value;
if(val.indexOf("/")>-1){
val=val.substring(val.lastIndexOf("/")+1);
}else{
if(val.indexOf("\\")>-1){
val=val.substring(val.lastIndexOf("\\")+1);
}
}
fake.setValue(val);
self.dirty();
if(!self._isValid){
self.validate();
}
};
};
FilePickerBinding.prototype.validate=function(){
var _9bd=true;
if(this.getProperty("required")){
var fake=this.getDescendantBindingByLocalName("datainput");
_9bd=fake.getValue()!="";
}
if(!_9bd&&this._isValid){
this._isValid=false;
this.dispatchAction(Binding.ACTION_INVALID);
}else{
if(_9bd&&!this._isValid){
this.dispatchAction(Binding.ACTION_VALID);
}
}
return _9bd;
};
FilePickerBinding.prototype.focus=function(){
FilePickerBinding.superclass.focus.call(this);
if(this.isFocused){
var fake=this.getDescendantBindingByLocalName("datainput");
if(fake!=null){
fake.attachClassName(DataBinding.CLASSNAME_FOCUSED);
}
}
};
FilePickerBinding.prototype.blur=function(){
FilePickerBinding.superclass.blur.call(this);
if(!this.isFocused){
var fake=this.getDescendantBindingByLocalName("datainput");
if(fake!=null){
fake.detachClassName(DataBinding.CLASSNAME_FOCUSED);
}
}
};
FilePickerBinding.prototype.manifest=function(){
};
FilePickerBinding.prototype.getValue=function(){
};
FilePickerBinding.prototype.setValue=function(){
};
FilePickerBinding.prototype.getResult=function(){
};
FilePickerBinding.prototype.setResult=function(){
};
RequestBinding.prototype=new Binding;
RequestBinding.prototype.constructor=RequestBinding;
RequestBinding.superclass=Binding.prototype;
RequestBinding.CALLBACK_ID="__REQUEST";
RequestBinding.INPUT_ID="__CONSOLEID";
function RequestBinding(){
this.logger=SystemLogger.getLogger("RequestBinding");
return this;
}
RequestBinding.prototype.toString=function(){
return "[RequestBinding]";
};
RequestBinding.prototype.onBindingAttach=function(){
RequestBinding.superclass.onBindingAttach.call(this);
this.setCallBackID(RequestBinding.CALLBACK_ID);
Binding.dotnetify(this);
var _9c1=this.bindingDocument.getElementById(RequestBinding.INPUT_ID);
if(_9c1!=null){
_9c1.value=Application.CONSOLE_ID;
}
};
RequestBinding.prototype.postback=function(_9c2){
_9c2=_9c2!=null?_9c2:EditorPageBinding.message;
this.shadowTree.dotnetinput.value=_9c2;
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
FieldGroupBinding.prototype=new Binding;
FieldGroupBinding.prototype.constructor=FieldGroupBinding;
FieldGroupBinding.superclass=Binding.prototype;
FieldGroupBinding.ACTION_HIDE="fieldgrouphide";
FieldGroupBinding.CLASSNAME_NOLABEL="nolabel";
FieldGroupBinding.CLASSNAME_FIRST="first";
function FieldGroupBinding(){
this.logger=SystemLogger.getLogger("FieldGroupBinding");
}
FieldGroupBinding.prototype.toString=function(){
return "[FieldGroupBinding]";
};
FieldGroupBinding.prototype.onBindingRegister=function(){
FieldGroupBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["label"]=this.setLabel;
this._buildDOMContent();
};
FieldGroupBinding.prototype._buildDOMContent=function(){
var _9c3=this.getProperty("label");
if(_9c3){
this.setLabel(_9c3);
}else{
this.attachClassName(FieldGroupBinding.CLASSNAME_NOLABEL);
}
};
FieldGroupBinding.prototype.setLabel=function(_9c4){
this.setProperty("label",_9c4);
if(this.shadowTree.labelBinding==null){
var _9c5=LabelBinding.newInstance(this.bindingDocument);
var cell=this.shadowTree[FieldGroupBinding.NORTH];
_9c5.attachClassName("fieldgrouplabel");
this.bindingElement.insertBefore(_9c5.bindingElement,this.bindingElement.firstChild);
_9c5.attach();
this.shadowTree.labelBinding=_9c5;
this.shadowTree.labelBinding.bindingElement.appendChild(DOMUtil.createElementNS(Constants.NS_XHTML,"div",this.bindingDocument));
}
this.shadowTree.labelBinding.setLabel(Resolver.resolve(_9c4));
};
FieldGroupBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
FieldGroupBinding.prototype.add=function(_9c7){
this.shadowTree[FieldGroupBinding.CENTER].appendChild(_9c7.bindingElement);
return _9c7;
};
FieldGroupBinding.prototype.addFirst=function(_9c8){
var _9c9=this.shadowTree[FieldGroupBinding.CENTER];
_9c9.insertBefore(_9c8.bindingElement,_9c9.firstChild);
return _9c8;
};
FieldBinding.prototype=new Binding;
FieldBinding.prototype.constructor=FieldBinding;
FieldBinding.superclass=Binding.prototype;
function FieldBinding(){
this.logger=SystemLogger.getLogger("FieldBinding");
this.bindingRelation=null;
return this;
}
FieldBinding.prototype.toString=function(){
return "[FieldBinding]";
};
FieldBinding.prototype.onBindingRegister=function(){
FieldBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
var _9ca=this.getProperty("relation");
if(_9ca!=null){
this.bindingRelation=_9ca;
this.subscribe(BroadcastMessages.BINDING_RELATE);
this.hide();
}
};
FieldBinding.prototype.handleBroadcast=function(_9cb,arg){
FieldBinding.superclass.handleBroadcast.call(this,_9cb,arg);
switch(_9cb){
case BroadcastMessages.BINDING_RELATE:
if(arg.relate==this.bindingRelation&&arg.origin==this.bindingDocument){
if(arg.result==true){
if(!this.isVisible){
this.show();
this.dispatchAction(Binding.ACTION_UPDATED);
}
}else{
if(this.isVisible){
this.hide();
this.dispatchAction(Binding.ACTION_UPDATED);
}
}
}
break;
}
};
FieldBinding.newInstance=function(_9cd){
var _9ce=DOMUtil.createElementNS(Constants.NS_UI,"ui:field",_9cd);
return UserInterface.registerBinding(_9ce,FieldBinding);
};
FieldsBinding.prototype=new Binding;
FieldsBinding.prototype.constructor=FieldsBinding;
FieldsBinding.superclass=Binding.prototype;
FieldsBinding.ACTION_LAYOUT_UPDATED="fieldslayoutupdated";
function FieldsBinding(){
this.logger=SystemLogger.getLogger("FieldsBinding");
this._invalidCount=0;
this._invalidFieldLabels=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FitnessCrawler.ID]);
return this;
}
FieldsBinding.prototype.toString=function(){
return "[FieldsBinding]";
};
FieldsBinding.prototype.onBindingRegister=function(){
FieldsBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(FieldGroupBinding.ACTION_HIDE);
this._invalidFieldLabels=new Map();
};
FieldsBinding.prototype.onBindingInitialize=function(){
FieldsBinding.superclass.onBindingInitialize.call(this);
this.bindingElement.style.display="block";
var _9cf=this.getDescendantBindingByLocalName("fieldgroup");
if(_9cf!=null){
_9cf.attachClassName(FieldGroupBinding.CLASSNAME_FIRST);
}
};
FieldsBinding.prototype.onBindingDispose=function(){
FieldsBinding.superclass.onBindingDispose.call(this);
if(this._invalidCount>0){
this.dispatchAction(Binding.ACTION_VALID);
}
};
FieldsBinding.prototype.validate=function(){
var _9d0=true;
var _9d1=this.getDescendantBindingsByLocalName("*");
while(_9d1.hasNext()){
var _9d2=_9d1.getNext();
if(Interfaces.isImplemented(IData,_9d2)){
var _9d3=_9d2.validate();
if(_9d0&&!_9d3){
_9d0=false;
}
}
}
return _9d0;
};
FieldsBinding.prototype.handleAction=function(_9d4){
FieldsBinding.superclass.handleAction.call(this,_9d4);
var _9d5=_9d4.target;
if(_9d5!=this){
switch(_9d4.type){
case Binding.ACTION_INVALID:
var _9d6=DataBinding.getAssociatedLabel(_9d5);
if(_9d6){
this._invalidFieldLabels.set(_9d5.key,_9d6);
}
if(_9d5.error){
if(!_9d5.isInvalidBecauseRequired){
ErrorBinding.presentError({text:_9d5.error},_9d5);
}
}
if(this._invalidCount==0){
this.dispatchAction(Binding.ACTION_INVALID);
}
this._invalidCount++;
_9d4.consume();
break;
case Binding.ACTION_VALID:
if(this._invalidFieldLabels.has(_9d5.key)){
this._invalidFieldLabels.del(_9d5.key);
}
this._invalidCount--;
if(this._invalidCount==0){
this.dispatchAction(Binding.ACTION_VALID);
}
_9d4.consume();
break;
}
}
};
FieldsBinding.prototype.getInvalidLabels=function(){
var _9d7=null;
if(this._invalidFieldLabels.hasEntries()){
_9d7=this._invalidFieldLabels.toList();
}
return _9d7;
};
FieldsBinding.newInstance=function(_9d8){
var _9d9=DOMUtil.createElementNS(Constants.NS_UI,"ui:fields",_9d8);
return UserInterface.registerBinding(_9d9,FieldsBinding);
};
FieldDescBinding.prototype=new Binding;
FieldDescBinding.prototype.constructor=FieldDescBinding;
FieldDescBinding.superclass=Binding.prototype;
function FieldDescBinding(){
this.logger=SystemLogger.getLogger("FieldDescBinding");
return this;
}
FieldDescBinding.prototype.toString=function(){
return "[FieldDescBinding]";
};
FieldDescBinding.prototype.onBindingAttach=function(){
Binding.prototype.onBindingAttach.call(this);
this.buildDOMContent();
this.attachDOMEvents();
};
FieldDescBinding.prototype.buildDOMContent=function(){
var _9da=this.getProperty("image");
if(_9da){
this.setImage(_9da);
}
var _9db=this.getProperty("tooltip");
if(_9db){
this.setToolTip(_9db);
}
var _9dc=this.getProperty("label");
if(_9dc){
this.setLabel(_9dc);
}
};
FieldDescBinding.prototype.attachDOMEvents=function(){
this.addEventListener(DOMEvents.CLICK);
};
FieldDescBinding.prototype.handleEvent=function(e){
FieldDescBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.CLICK:
var _9de=this.getAncestorBindingByLocalName("field");
if(_9de){
var _9df=true;
_9de.getDescendantBindingsByLocalName("*").each(function(_9e0){
if(Interfaces.isImplemented(IData,_9e0)){
_9e0.focus();
_9df=false;
}
return _9df;
});
}
break;
}
};
FieldDescBinding.prototype.setLabel=function(_9e1){
this.setProperty("label",_9e1);
if(this.isAttached){
this.bindingElement.innerHTML=Resolver.resolve(_9e1);
}
};
FieldDescBinding.prototype.getLabel=function(){
var _9e2=this.getProperty("label");
if(!_9e2){
var node=this.bindingElement.firstChild;
if(node&&node.nodeType==Node.TEXT_NODE){
_9e2=node.data;
}
}
return _9e2;
};
FieldDescBinding.prototype.setImage=function(_9e4){
this.setProperty("image",_9e4);
if(this.isAttached){
throw "FieldDescBinding: Images not suppoerted!";
}
};
FieldDescBinding.prototype.setToolTip=function(_9e5){
this.setProperty("tooltip",_9e5);
if(this.isAttached){
this.bindingElement.title=_9e5;
}
};
FieldDescBinding.newInstance=function(_9e6){
var _9e7=DOMUtil.createElementNS(Constants.NS_UI,"ui:fielddesc",_9e6);
return UserInterface.registerBinding(_9e7,FieldDescBinding);
};
FieldDataBinding.prototype=new Binding;
FieldDataBinding.prototype.constructor=FieldDataBinding;
FieldDataBinding.superclass=Binding.prototype;
function FieldDataBinding(){
this.logger=SystemLogger.getLogger("FieldDataBinding");
return this;
}
FieldDataBinding.prototype.toString=function(){
return "[FieldDataBinding]";
};
FieldDataBinding.newInstance=function(_9e8){
var _9e9=DOMUtil.createElementNS(Constants.NS_UI,"ui:fielddata",_9e8);
return UserInterface.registerBinding(_9e9,FieldDataBinding);
};
FieldHelpBinding.prototype=new Binding;
FieldHelpBinding.prototype.constructor=FieldHelpBinding;
FieldHelpBinding.superclass=Binding.prototype;
FieldHelpBinding.INDICATOR_IMAGE="${skin}/fields/fieldhelpindicator.png";
function FieldHelpBinding(){
this.logger=SystemLogger.getLogger("FieldHelpBinding");
return this;
}
FieldHelpBinding.prototype.toString=function(){
return "[FieldHelpBinding]";
};
FieldHelpBinding.prototype.onBindingAttach=function(){
FieldHelpBinding.superclass.onBindingAttach.call(this);
this.buildPopupBinding();
this.buildPopupButton();
};
FieldHelpBinding.prototype.onBindingDispose=function(){
FieldHelpBinding.superclass.onBindingDispose.call(this);
var _9ea=this._fieldHelpPopupBinding;
if(_9ea){
_9ea.dispose();
}
};
FieldHelpBinding.prototype.buildPopupBinding=function(){
var _9eb=app.bindingMap.fieldhelpopupset;
var doc=_9eb.bindingDocument;
var _9ed=_9eb.add(PopupBinding.newInstance(doc));
var _9ee=_9ed.add(PopupBodyBinding.newInstance(doc));
_9ed.position=PopupBinding.POSITION_RIGHT;
_9ed.attachClassName("fieldhelppopup");
if(this.bindingElement.hasChildNodes()){
_9ee.bindingElement.innerHTML=this.bindingElement.innerHTML;
}else{
var _9ef=this.getProperty("label");
if(_9ef){
_9ee.bindingElement.innerHTML=Resolver.resolve(_9ef);
}
}
this.bindingElement.innerHTML="";
this._fieldHelpPopupBinding=_9ed;
};
FieldHelpBinding.prototype.buildPopupButton=function(){
var _9f0=this.getAncestorBindingByLocalName("field");
if(_9f0){
_9f0.attachClassName("fieldhelp");
var _9f1=ClickButtonBinding.newInstance(this.bindingDocument);
_9f1.attachClassName("fieldhelp");
_9f1.setImage(FieldHelpBinding.INDICATOR_IMAGE);
this.add(_9f1);
_9f1.attach();
var self=this;
_9f1.oncommand=function(){
self.attachPopupBinding();
};
_9f1.setPopup(this._fieldHelpPopupBinding);
this._fieldHelpButton=_9f1;
}
};
FieldHelpBinding.prototype.attachPopupBinding=function(){
var _9f3=this._fieldHelpPopupBinding;
if(_9f3&&!_9f3.isAttached){
_9f3.attachRecursive();
}
};
RadioDataGroupBinding.prototype=new RadioGroupBinding;
RadioDataGroupBinding.prototype.constructor=RadioDataGroupBinding;
RadioDataGroupBinding.superclass=RadioGroupBinding.prototype;
function RadioDataGroupBinding(){
this.logger=SystemLogger.getLogger("RadioDataGroupBinding");
this._name=null;
this.isDirty=false;
this._hasFocus=false;
this.isFocusable=true;
this.isFocused=false;
}
RadioDataGroupBinding.prototype.toString=function(){
return "[RadioDataGroupBinding]";
};
RadioDataGroupBinding.prototype.onBindingRegister=function(){
RadioDataGroupBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this.addActionListener(RadioGroupBinding.ACTION_SELECTIONCHANGED,this);
};
RadioDataGroupBinding.prototype.onBindingAttach=function(){
RadioDataGroupBinding.superclass.onBindingAttach.call(this);
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
var self=this;
DOMEvents.addEventListener(this.bindingElement,DOMEvents.FOCUS,{handleEvent:function(){
self.focus(true);
}});
};
RadioDataGroupBinding.prototype.onBindingDispose=function(){
RadioDataGroupBinding.superclass.onBindingDispose.call(this);
DataBinding.prototype.onBindingDispose.call(this);
};
RadioDataGroupBinding.prototype.handleAction=function(_9f5){
RadioDataGroupBinding.superclass.handleAction.call(this,_9f5);
switch(_9f5.type){
case RadioGroupBinding.ACTION_SELECTIONCHANGED:
this.dirty();
break;
}
};
RadioDataGroupBinding.prototype.handleEvent=function(e){
RadioDataGroupBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.KEYDOWN){
switch(e.keyCode){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
Keyboard.keyArrow(e.keyCode);
break;
}
}
};
RadioDataGroupBinding.prototype.handleBroadcast=function(_9f7,arg){
RadioDataGroupBinding.superclass.handleBroadcast.call(this,_9f7,arg);
switch(_9f7){
case BroadcastMessages.KEY_ARROW:
var _9f9=null;
var next=null;
var _9fb=null;
switch(arg){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
_9fb=this.getChildBindingsByLocalName("radio");
while(!_9f9&&_9fb.hasNext()){
var _9fc=_9fb.getNext();
if(_9fc.getProperty("ischecked")){
_9f9=_9fc;
}
}
break;
}
if(_9f9){
switch(arg){
case KeyEventCodes.VK_DOWN:
next=_9fb.getFollowing(_9f9);
while(next!=null&&next.isDisabled){
next=_9fb.getFollowing(next);
}
break;
case KeyEventCodes.VK_UP:
next=_9fb.getPreceding(_9f9);
while(next!=null&&next.isDisabled){
next=_9fb.getPreceding(next);
}
break;
}
}
if(next!=null){
this.setCheckedButtonBinding(next);
}
break;
}
};
RadioDataGroupBinding.prototype.setName=DataBinding.prototype.setName;
RadioDataGroupBinding.prototype.getName=DataBinding.prototype.getName;
RadioDataGroupBinding.prototype.dirty=DataBinding.prototype.dirty;
RadioDataGroupBinding.prototype.clean=DataBinding.prototype.clean;
RadioDataGroupBinding.prototype.focus=function(_9fd){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused){
if(!_9fd){
FocusBinding.focusElement(this.bindingElement);
}
this.addEventListener(DOMEvents.KEYDOWN);
this.subscribe(BroadcastMessages.KEY_ARROW);
}
}
};
RadioDataGroupBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
this.removeEventListener(DOMEvents.KEYDOWN);
this.unsubscribe(BroadcastMessages.KEY_ARROW);
}
};
RadioDataGroupBinding.prototype.validate=function(){
return true;
};
RadioDataGroupBinding.prototype.manifest=function(){
if(this.isAttached){
if(!this.shadowTree.input){
var _9fe=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_9fe.type="hidden";
_9fe.name=this._name;
this.bindingElement.appendChild(_9fe);
this.shadowTree.input=_9fe;
}
this.shadowTree.input.value=this.getValue();
}
};
RadioDataGroupBinding.prototype.getValue=function(){
var _9ff=null;
var _a00=this.getChildBindingsByLocalName("radio");
while(!_9ff&&_a00.hasNext()){
var _a01=_a00.getNext();
if(_a01.isChecked){
_9ff=_a01.getProperty("value");
}
}
return _9ff;
};
RadioDataGroupBinding.prototype.getResult=RadioDataGroupBinding.prototype.getValue;
RadioDataGroupBinding.prototype.setValue=function(_a02){
};
RadioDataGroupBinding.prototype.setResult=function(_a03){
};
RadioDataBinding.prototype=new Binding;
RadioDataBinding.prototype.constructor=RadioDataBinding;
RadioDataBinding.superclass=Binding.prototype;
function RadioDataBinding(){
this.logger=SystemLogger.getLogger("RadioDataBinding");
this.isRadioButton=false;
this.isChecked=false;
this._result=null;
this.bindingRelate=null;
return this;
}
RadioDataBinding.prototype.toString=function(){
return "[RadioDataBinding]";
};
RadioDataBinding.prototype.onBindingRegister=function(){
RadioDataBinding.superclass.onBindingRegister.call(this);
this._buttonBinding=this.add(RadioButtonBinding.newInstance(this.bindingDocument));
this._hack();
if(this.getProperty("ischecked")==true){
this.check(true);
}
};
RadioDataBinding.prototype.onBindingAttach=function(){
RadioDataBinding.superclass.onBindingAttach.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
this._buttonBinding.attach();
this._buildDOMContent();
};
RadioDataBinding.prototype._buildDOMContent=function(){
var _a04=this.getProperty("relate");
var _a05=this.getProperty("oncommand");
var _a06=this.getProperty("isdisabled");
if(_a04){
this.bindingRelate=_a04;
this.relate();
}
if(_a05){
this.oncommand=function(){
Binding.evaluate(_a05,this);
};
}
if(_a06==true){
this.disable();
}
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
this._buildLabelText();
};
RadioDataBinding.prototype.relate=function(){
if(this.bindingRelate!=null){
this.logger.warn("Relations not properly implemented!");
EventBroadcaster.broadcast(BroadcastMessages.BINDING_RELATE,{relate:this.bindingRelate,origin:this.bindingDocument,result:this.isChecked});
}
};
RadioDataBinding.prototype.getButton=function(){
return this._buttonBinding;
};
RadioDataBinding.prototype._hack=function(){
var self=this;
var _a08=this.getCallBackID();
this._buttonBinding.check=function(_a09){
RadioButtonBinding.prototype.check.call(this,_a09);
self.setProperty("ischecked",true);
self.isChecked=true;
self.relate();
};
this._buttonBinding.uncheck=function(_a0a){
RadioButtonBinding.prototype.uncheck.call(this,_a0a);
self.deleteProperty("ischecked");
self.isChecked=false;
self.relate();
};
this._buttonBinding.oncommand=function(){
self.isChecked=this.isChecked;
self.relate();
if(Types.isFunction(self.oncommand)){
self.oncommand();
}
};
};
RadioDataBinding.prototype.setChecked=function(_a0b,_a0c){
this._buttonBinding.setChecked(_a0b,_a0c);
if(this.bindingRelate!=null){
this.relate();
}
this.setProperty("ischecked",_a0b);
};
RadioDataBinding.prototype.check=function(_a0d){
this.setChecked(true,_a0d);
};
RadioDataBinding.prototype.uncheck=function(_a0e){
this.setChecked(false,_a0e);
};
RadioDataBinding.prototype.setDisabled=function(_a0f){
if(_a0f!=this.isDisabled){
this.isDisabled=_a0f;
this._buttonBinding.setDisabled(_a0f);
if(_a0f){
this.attachClassName(DataBinding.CLASSNAME_DISABLED);
}else{
this.detachClassName(DataBinding.CLASSNAME_DISABLED);
}
}
};
RadioDataBinding.prototype.disable=function(){
if(!this.isDisabled){
this.setDisabled(true);
}
};
RadioDataBinding.prototype.enable=function(){
if(this.isDisabled){
this.setDisabled(false);
}
};
RadioDataBinding.prototype.handleEvent=function(e){
RadioDataBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.CLICK){
var _a11=DOMEvents.getTarget(e);
switch(_a11){
case this.shadowTree.labelText:
if(!this.isChecked&&!this.isDisabled){
this.check();
}
break;
}
}
};
RadioDataBinding.prototype._buildLabelText=function(){
var _a12=this.getProperty("label");
if(_a12){
this.shadowTree.labelText=DOMUtil.createElementNS(Constants.NS_UI,"ui:datalabeltext",this.bindingDocument);
this.shadowTree.labelText.appendChild(this.bindingDocument.createTextNode(Resolver.resolve(_a12)));
DOMEvents.addEventListener(this.shadowTree.labelText,DOMEvents.CLICK,this);
this.bindingElement.appendChild(this.shadowTree.labelText);
}
};
RadioDataBinding.prototype.setLabel=function(_a13){
if(this.shadowTree.labelText!=null){
this.shadowTree.labelText.firstChild.data=_a13;
}
this.setProperty("label",_a13);
};
RadioDataBinding.prototype.handleElement=function(_a14){
return true;
};
RadioDataBinding.prototype.updateElement=function(_a15){
var _a16=_a15.getAttribute("ischecked")==="true";
if(this.isChecked!=_a16){
this.setChecked(_a16,true);
}
return true;
};
CheckBoxBinding.prototype=new Binding;
CheckBoxBinding.prototype.constructor=CheckBoxBinding;
CheckBoxBinding.superclass=Binding.prototype;
CheckBoxBinding.ACTION_COMMAND="checkbox command";
function CheckBoxBinding(){
this.logger=SystemLogger.getLogger("CheckBoxBinding");
this._buttonBinding=null;
this._name=null;
this.isDirty=false;
this.isChecked=false;
this._result=null;
this.isFocusable=true;
this.isFocused=false;
}
CheckBoxBinding.prototype.toString=function(){
return "[CheckBoxBinding]";
};
CheckBoxBinding.prototype.onBindingRegister=function(){
CheckBoxBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this._buildButtonBinding();
};
CheckBoxBinding.prototype.onBindingAttach=function(){
CheckBoxBinding.superclass.onBindingAttach.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
this._buildDOMContent();
};
CheckBoxBinding.prototype.onBindingDispose=function(){
CheckBoxBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingDispose.call(this);
};
CheckBoxBinding.prototype._buildDOMContent=RadioDataBinding.prototype._buildDOMContent;
CheckBoxBinding.prototype.handleEvent=function(e){
CheckBoxBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.CLICK){
var _a18=DOMEvents.getTarget(e);
switch(_a18){
case this.shadowTree.labelText:
this.setChecked(!this.isChecked);
break;
}
}
};
CheckBoxBinding.prototype.relate=RadioDataBinding.prototype.relate;
CheckBoxBinding.prototype.handleBroadcast=function(_a19,arg){
CheckBoxBinding.superclass.handleBroadcast.call(this,_a19,arg);
switch(_a19){
case BroadcastMessages.KEY_SPACE:
this.setChecked(!this.isChecked);
break;
}
};
CheckBoxBinding.prototype._buildButtonBinding=function(){
this._buttonBinding=this.add(CheckButtonBinding.newInstance(this.bindingDocument));
var self=this;
this._buttonBinding.addActionListener(ButtonBinding.ACTION_COMMAND,{handleAction:function(_a1c){
_a1c.consume();
self.dispatchAction(CheckBoxBinding.ACTION_COMMAND);
}});
this._hack();
this._buttonBinding.attach();
if(this.getProperty("ischecked")){
this.check(true);
}
};
CheckBoxBinding.prototype._hack=function(){
var self=this;
var _a1e=this.getCallBackID();
this._buttonBinding.check=function(_a1f){
ButtonBinding.prototype.check.call(this,_a1f);
self.setProperty("ischecked",true);
self.isChecked=true;
self.relate();
if(!_a1f){
self.focus();
}
};
this._buttonBinding.uncheck=function(_a20){
ButtonBinding.prototype.uncheck.call(this,_a20);
self.setProperty("ischecked",false);
self.isChecked=false;
self.relate();
};
this._buttonBinding.oncommand=function(){
self.isChecked=this.isChecked;
self.focus();
self.relate();
if(self.oncommand){
self.oncommand();
}
self.dirty();
if(_a1e!=null){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
};
};
CheckBoxBinding.prototype.setChecked=RadioDataBinding.prototype.setChecked;
CheckBoxBinding.prototype.check=RadioDataBinding.prototype.check;
CheckBoxBinding.prototype.uncheck=RadioDataBinding.prototype.uncheck;
CheckBoxBinding.prototype._buildLabelText=RadioDataBinding.prototype._buildLabelText;
CheckBoxBinding.prototype.setLabel=RadioDataBinding.prototype.setLabel;
CheckBoxBinding.prototype.setName=DataBinding.prototype.setName;
CheckBoxBinding.prototype.getName=DataBinding.prototype.getName;
CheckBoxBinding.prototype.dirty=DataBinding.prototype.dirty;
CheckBoxBinding.prototype.clean=DataBinding.prototype.clean;
CheckBoxBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused){
FocusBinding.focusElement(this.bindingElement);
this.subscribe(BroadcastMessages.KEY_SPACE);
}
}
};
CheckBoxBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
this.unsubscribe(BroadcastMessages.KEY_SPACE);
}
};
CheckBoxBinding.prototype.validate=function(){
var _a21=true;
var _a22=this.bindingElement.parentNode;
if(_a22){
var _a23=UserInterface.getBinding(_a22);
if(_a23&&_a23 instanceof CheckBoxGroupBinding){
if(_a23.isRequired){
if(_a23.isValid){
_a21=_a23.validate();
}else{
_a21=false;
}
}
}
}
return _a21;
};
CheckBoxBinding.prototype.handleElement=RadioDataBinding.prototype.handleElement;
CheckBoxBinding.prototype.updateElement=RadioDataBinding.prototype.updateElement;
CheckBoxBinding.prototype.manifest=function(){
if(this.isAttached){
switch(this.isChecked){
case true:
if(!this.shadowTree.input){
var _a24=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_a24.type="hidden";
_a24.name=this._name;
_a24.style.display="none";
this.bindingElement.appendChild(_a24);
this.shadowTree.input=_a24;
}
this.shadowTree.input.value=this.getValue();
break;
case false:
if(this.shadowTree.input){
this.bindingElement.removeChild(this.shadowTree.input);
this.shadowTree.input=null;
}
break;
}
}
};
CheckBoxBinding.prototype.getValue=function(){
var _a25=null;
var _a26=this.getProperty("value");
if(this.isChecked){
_a25=_a26?_a26:"on";
}
return _a25;
};
CheckBoxBinding.prototype.setValue=function(_a27){
if(_a27==this.getValue()||_a27=="on"){
this.check(true);
}else{
if(_a27!="on"){
this.setPropety("value",_a27);
}
}
};
CheckBoxBinding.prototype.getResult=function(){
var _a28=false;
if(this.isChecked){
_a28=this._result!=null?this._result:true;
}
return _a28;
};
CheckBoxBinding.prototype.setResult=function(_a29){
if(typeof _a29=="boolean"){
this.setChecked(_a29,true);
}else{
this._result=_a29;
}
};
CheckBoxBinding.newInstance=function(_a2a){
var _a2b=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkbox",_a2a);
return UserInterface.registerBinding(_a2b,CheckBoxBinding);
};
CheckBoxGroupBinding.prototype=new Binding;
CheckBoxGroupBinding.prototype.constructor=CheckBoxGroupBinding;
CheckBoxGroupBinding.superclass=Binding.prototype;
function CheckBoxGroupBinding(){
this.logger=SystemLogger.getLogger("CheckBoxGroupBinding");
this.isRequired=false;
this.isValid=true;
}
CheckBoxGroupBinding.prototype.toString=function(){
return "[CheckBoxGroupBinding]";
};
CheckBoxGroupBinding.prototype.onBindingAttach=function(){
CheckBoxGroupBinding.superclass.onBindingAttach.call(this);
this.isRequired=this.getProperty("required")==true;
};
CheckBoxGroupBinding.prototype.validate=function(){
var _a2c=true;
if(this.isRequired){
var _a2d=this.getDescendantBindingsByLocalName("checkbox");
if(_a2d.hasEntries()){
_a2c=false;
while(_a2d.hasNext()&&!_a2c){
if(_a2d.getNext().isChecked){
_a2c=true;
}
}
}
if(_a2c==false){
this._showWarning(true);
this.dispatchAction(Binding.ACTION_INVALID);
this.addActionListener(CheckBoxBinding.ACTION_COMMAND);
}
}
return _a2c;
};
CheckBoxGroupBinding.prototype._showWarning=function(_a2e){
if(_a2e){
if(!this._labelBinding){
var _a2f=LabelBinding.newInstance(this.bindingDocument);
_a2f.attachClassName("invalid");
_a2f.setImage("${icon:error}");
_a2f.setLabel("Selection required");
this._labelBinding=this.addFirst(_a2f);
this._labelBinding.attach();
}
}else{
if(this._labelBinding){
this._labelBinding.dispose();
this._labelBinding=null;
}
}
};
CheckBoxGroupBinding.prototype.handleAction=function(_a30){
CheckBoxGroupBinding.superclass.handleAction.call(this,_a30);
switch(_a30.type){
case CheckBoxBinding.ACTION_COMMAND:
this._showWarning(false);
this.dispatchAction(Binding.ACTION_VALID);
this.removeActionListener(CheckBoxBinding.ACTION_COMMAND);
break;
}
};
CheckBoxGroupBinding.newInstance=function(_a31){
var _a32=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkboxgroup",_a31);
return UserInterface.registerBinding(_a32,CheckBoxGroupBinding);
};
BalloonSetBinding.prototype=new Binding;
BalloonSetBinding.prototype.constructor=BalloonSetBinding;
BalloonSetBinding.superclass=Binding.prototype;
function BalloonSetBinding(){
this.logger=SystemLogger.getLogger("BalloonSetBinding");
}
BalloonSetBinding.prototype.toString=function(){
return "[BalloonSetBinding]";
};
BalloonBinding.prototype=new MatrixBinding;
BalloonBinding.prototype.constructor=BalloonBinding;
BalloonBinding.superclass=MatrixBinding.prototype;
BalloonBinding.TIMEOUT=parseInt(200);
BalloonBinding.OFFSET_X=parseInt(14);
BalloonBinding.OFFSET_Y=parseInt(6);
BalloonBinding.ACTION_SNAP="balloon snap";
BalloonBinding.CLASSNAME_LEFT="left";
BalloonBinding.ACTION_INITIALIZE="ballon initialize";
function BalloonBinding(){
this.logger=SystemLogger.getLogger("BalloonBinding");
this._snapTargetBinding=null;
this._environmentBinding=null;
return this;
}
BalloonBinding.prototype.toString=function(){
return "[BalloonBinding]";
};
BalloonBinding.prototype.onBindingAttach=function(){
BalloonBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(ControlBinding.ACTION_COMMAND);
this._controlGroupBinding=this.add(ControlGroupBinding.newInstance(this.bindingDocument));
var _a33=DialogControlBinding.newInstance(this.bindingDocument);
_a33.setControlType(ControlBinding.TYPE_CLOSE);
this._controlGroupBinding.add(_a33);
this._controlGroupBinding.attachRecursive();
var _a34=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloonspeak",this.bindingDocument);
this.bindingElement.appendChild(_a34);
var _a35=this.getLabel();
if(_a35!=null){
this.setLabel(_a35);
}
};
BalloonBinding.prototype.onBindingDispose=function(){
BalloonBinding.superclass.onBindingDispose.call(this);
if(this._updateInterval){
window.clearInterval(this._updateInterval);
this._updateInterval=null;
}
var _a36=this._snapTargetBinding;
if(Binding.exists(_a36)==true){
_a36.removeActionListener(Binding.ACTION_BLURRED,this);
_a36.removeActionListener(Binding.ACTION_VALID,this);
}
};
BalloonBinding.prototype.snapTo=function(_a37){
if(Interfaces.isImplemented(IData,_a37)){
this._snapTargetBinding=_a37;
var _a38=_a37.dispatchAction(BalloonBinding.ACTION_INITIALIZE);
if(_a38&&_a38.isConsumed){
this._environmentBinding=_a38.listener;
}
if(this._environmentBinding){
_a37.addActionListener(Binding.ACTION_BLURRED,this);
_a37.addActionListener(Binding.ACTION_VALID,this);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
var self=this;
this._updateInterval=window.setInterval(function(){
if(Binding.exists(_a37)==true){
self._updatePosition();
}else{
self.dispose();
}
},BalloonBinding.TIMEOUT);
_a37.dispatchAction(BalloonBinding.ACTION_SNAP);
}else{
throw "No environment fit for balloons!";
}
}
};
BalloonBinding.prototype._updatePosition=function(){
var _a3a=this._snapTargetBinding;
var _a3b=this._environmentBinding;
var root=UserInterface.getBinding(_a3a.bindingDocument.body);
if(Binding.exists(_a3a)&&Binding.exists(_a3b)){
if(!root.isActivated){
if(this.isVisible==true){
this.hide();
}
}else{
if(_a3a.isAttached&&_a3b.isAttached){
var _a3d=_a3a.boxObject.getUniversalPosition();
var _a3e=_a3b.boxObject.getUniversalPosition();
_a3e.y+=_a3b.bindingElement.scrollTop;
_a3e.x+=_a3b.bindingElement.scrollLeft;
var tDim=_a3a.boxObject.getDimension();
var eDim=_a3b.boxObject.getDimension();
var _a41=false;
if(_a3d.y+tDim.h<_a3e.y){
_a41=true;
}else{
if(_a3d.x+tDim.w<_a3e.x){
_a41=true;
}else{
if(_a3d.y>_a3e.y+eDim.h){
_a41=true;
}else{
if(_a3d.x>_a3e.x+eDim.w){
_a41=true;
}
}
}
}
if(!_a41){
this._setComputedPosition(_a3d,_a3e,tDim,eDim);
if(!this.isVisible){
this.show();
}
}else{
if(this.isVisible==true){
this.hide();
}
}
}
}
}else{
this.dispose();
}
};
BalloonBinding.prototype._setComputedPosition=function(_a42,_a43,tDim,eDim){
var wDim=WindowManager.getWindowDimensions();
var bDim=this._getDimension();
var _a48=_a42;
var _a49=false;
if(_a42.x+tDim.w+bDim.w+BalloonBinding.OFFSET_X>=wDim.w){
_a49=true;
}else{
if(_a42.x+tDim.w>=_a43.x+eDim.w){
_a49=true;
}
}
if(_a49){
_a48.x-=(bDim.w+BalloonBinding.OFFSET_X);
this.attachClassName(BalloonBinding.CLASSNAME_LEFT);
}else{
_a48.x+=tDim.w+BalloonBinding.OFFSET_X;
this.detachClassName(BalloonBinding.CLASSNAME_LEFT);
}
_a48.y-=(bDim.h);
_a48.y+=BalloonBinding.OFFSET_Y;
this._setPosition(_a48);
};
BalloonBinding.prototype.handleBroadcast=function(_a4a,arg){
BalloonBinding.superclass.handleBroadcast.call(this,_a4a,arg);
switch(_a4a){
case BroadcastMessages.VIEW_CLOSED:
if(this._isAssociatedView(arg)==true){
this.dispose();
}
break;
}
};
BalloonBinding.prototype._isAssociatedView=function(_a4c){
var _a4d=false;
if(this._snapTargetBinding){
var view=this._snapTargetBinding.getAncestorBindingByType(ViewBinding,true);
if(view&&view.getHandle()==_a4c){
_a4d=true;
}
}
return _a4d;
};
BalloonBinding.prototype._setPosition=function(_a4f){
var _a50=false;
var pos=this.boxObject.getLocalPosition();
if(this._point!=null){
if(pos.x!=this._point.x||pos.y!=this._point.y){
_a50=true;
}
}
if(!_a50){
this.bindingElement.style.left=_a4f.x+"px";
this.bindingElement.style.top=_a4f.y+"px";
this._point=_a4f;
}
};
BalloonBinding.prototype._getPosition=function(){
return new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
};
BalloonBinding.prototype._getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
BalloonBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
BalloonBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
BalloonBinding.prototype.handleAction=function(_a52){
BalloonBinding.superclass.handleAction.call(this,_a52);
var _a53=_a52.target;
switch(_a52.type){
case Binding.ACTION_ACTIVATED:
if(this._snapTargetBinding){
this._snapTargetBinding.dispatchAction(Binding.ACTION_ACTIVATED);
_a52.consume();
}
case Binding.ACTION_BLURRED:
case Binding.ACTION_VALID:
if(_a53==this._snapTargetBinding){
var self=this;
setTimeout(function(){
if(!Binding.exists(_a53)){
self.dispose();
}else{
if(_a53.validate()){
var _a55=true;
if(_a52.type==Binding.ACTION_BLURRED){
var root=_a53.bindingDocument.body;
var bind=UserInterface.getBinding(root);
if(!root.isActivated){
_a55=false;
}
}
if(_a55){
self.dispose();
}
}
}
},0);
}
break;
case ControlBinding.ACTION_COMMAND:
this.dispose();
break;
}
};
BalloonBinding.prototype.setLabel=function(_a58){
if(this.isAttached==true){
if(!this._isTableIndexed){
this._indexTable();
}
var _a59=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloontext",this.bindingDocument);
var text=this.bindingDocument.createTextNode(_a58);
_a59.appendChild(text);
this.shadowTree[MatrixBinding.CENTER].appendChild(_a59);
}
this.setProperty("label",_a58);
};
BalloonBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
BalloonBinding.newInstance=function(_a5b){
var _a5c=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloon",_a5b);
var _a5d=UserInterface.registerBinding(_a5c,BalloonBinding);
_a5d.hide();
return _a5d;
};
ErrorBinding.prototype=new Binding;
ErrorBinding.prototype.constructor=ErrorBinding;
ErrorBinding.superclass=Binding.prototype;
ErrorBinding.ACTION_INITIALIZE="error initialize";
ErrorBinding.presentError=function(_a5e,_a5f){
if(Interfaces.isImplemented(IData,_a5f)==true){
var _a60,_a61=_a5f.dispatchAction(ErrorBinding.ACTION_INITIALIZE);
if(_a61&&_a61.isConsumed){
switch(_a61.listener.constructor){
case StageBinding:
_a60=false;
break;
case StageDialogBinding:
_a60=true;
break;
}
}
var _a62=_a60?top.app.bindingMap.dialogballoonset:top.app.bindingMap.balloonset;
var _a63=_a62.add(BalloonBinding.newInstance(top.app.document));
_a63.setLabel(_a5e.text);
_a63.snapTo(_a5f);
_a63.attach();
}
};
function ErrorBinding(){
this.logger=SystemLogger.getLogger("ErrorBinding");
return this;
}
ErrorBinding.prototype.toString=function(){
return "[ErrorBinding]";
};
ErrorBinding.prototype.onBindingAttach=function(){
ErrorBinding.superclass.onBindingAttach.call(this);
var _a64=this.bindingWindow.DataManager;
var text=this.getProperty("text");
var name=this.getProperty("targetname");
var _a67=_a64.getDataBinding(name);
if(_a67){
ErrorBinding.presentError({text:text},_a67);
}else{
alert("ErrorBinding dysfunction: No such DataBinding!\n"+name);
if(name.indexOf("_")>-1){
alert("Name contaings '_' - replace with '$' ?");
}
}
this.dispose();
};
FocusBinding.prototype=new FlexBoxBinding;
FocusBinding.prototype.constructor=FocusBinding;
FocusBinding.superclass=FlexBoxBinding.prototype;
FocusBinding.MARKER="focusbindingcurrentfocus";
FocusBinding.ACTION_ACTIVATED="focusmanager activated";
FocusBinding.ACTION_ATTACHED="focusmanager attached";
FocusBinding.ACTION_UPDATE="focusmanager update required";
FocusBinding.ACTION_FOCUS="focusmanager focus";
FocusBinding.ACTION_BLUR="focusmanager blur";
FocusBinding.focusElement=function(_a68){
var _a69=true;
try{
_a68.focus();
Application.focused(true);
}
catch(exception){
var _a6a=UserInterface.getBinding(_a68);
var _a6b=SystemLogger.getLogger("FocusBinding.focusElement");
_a6b.warn("Could not focus "+(_a6a?_a6a.toString():String(_a68)));
_a69=false;
}
return _a69;
};
FocusBinding.focusedBinding=null;
FocusBinding.activeInstance=null;
FocusBinding.getCachedFocus=function(_a6c){
var win=_a6c.bindingWindow;
var id=_a6c.bindingElement.id;
return {getBinding:function(){
var _a6f=null;
try{
if(Binding.exists(_a6c)){
_a6f=win.bindingMap[id];
}
}
catch(exception){
}
return _a6f;
}};
};
FocusBinding.navigateNext=function(_a70){
if(Binding.exists(FocusBinding.activeInstance)){
FocusBinding.activeInstance.focusNext(_a70);
}
};
FocusBinding.navigatePrevious=function(){
FocusBinding.navigateNext(true);
};
function FocusBinding(){
this.logger=SystemLogger.getLogger("FocusManangerBinding");
this._focusableList=null;
this._isUpToDate=false;
this._isFocusManager=true;
this.isStrongFocusManager=true;
this._cachedFocus=null;
this.isFlexible=false;
return this;
}
FocusBinding.prototype.toString=function(){
return "[FocusManangerBinding]";
};
FocusBinding.prototype.onBindingAttach=function(){
if(this.getProperty("focusmanager")==false){
this._isFocusManager=false;
}else{
if(this.getProperty("strongfocusmanager")==false){
this.isStrongFocusManager=false;
}
if(this._isFocusManager){
var _a71=this.dispatchAction(FocusBinding.ACTION_ATTACHED);
if(_a71&&_a71.isConsumed){
if(_a71.listener.isStrongFocusManager){
this._isFocusManager=false;
}
}
if(this._isFocusManager){
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(Binding.ACTION_BLURRED);
this.addActionListener(FocusBinding.ACTION_UPDATE);
this.addActionListener(FocusBinding.ACTION_FOCUS);
this.addActionListener(FocusBinding.ACTION_BLUR);
this.addActionListener(FocusBinding.ACTION_ATTACHED);
}
}
}
FocusBinding.superclass.onBindingAttach.call(this);
};
FocusBinding.prototype.onBindingDispose=function(){
FocusBinding.superclass.onBindingDispose.call(this);
if(FocusBinding.activeInstance==this){
FocusBinding.activeInstance=null;
}
};
FocusBinding.prototype.handleAction=function(_a72){
FocusBinding.superclass.handleAction.call(this,_a72);
var _a73=_a72.target;
var _a74=null;
if(this._isFocusManager){
switch(_a72.type){
case FocusBinding.ACTION_ATTACHED:
if(_a73!=this){
this._isUpToDate=false;
}
_a72.consume();
break;
case FocusBinding.ACTION_UPDATE:
if(_a73!=this){
this._isUpToDate=false;
_a72.consume();
}
break;
case FocusBinding.ACTION_BLUR:
if(Application.isOperational){
_a74=new FocusCrawler();
_a74.mode=FocusCrawler.MODE_BLUR;
_a74.crawl(_a73.bindingElement);
if(this._cachedFocus!=null){
this._cachedFocus=null;
}
}
_a72.consume();
break;
case FocusBinding.ACTION_FOCUS:
if(Application.isOperational&&_a73!=this){
_a74=new FocusCrawler();
_a74.mode=FocusCrawler.MODE_FOCUS;
_a74.crawl(_a73.bindingElement);
}
_a72.consume();
break;
case Binding.ACTION_FOCUSED:
if(Interfaces.isImplemented(IFocusable,_a73)){
this.claimFocus();
this._onFocusableFocused(_a73);
}
_a72.consume();
break;
case Binding.ACTION_BLURRED:
if(Interfaces.isImplemented(IFocusable,_a73)){
this._onFocusableBlurred(_a73);
}
_a72.consume();
break;
}
}
};
FocusBinding.prototype.focusNext=function(_a75){
var _a76=null;
var list=this._getFocusableList();
if(list.reset().hasEntries()){
while(_a76==null&&list.hasNext()){
var _a78=list.getNext();
if(this._cachedFocus&&_a78==this._cachedFocus.getBinding()){
_a76=_a78;
}
}
if(_a76!=null){
if(_a78.isFocused){
var next=_a75?list.getPreceding(_a76):list.getFollowing(_a76);
if(!next){
next=_a75?list.getLast():list.getFirst();
}
next.focus();
}else{
_a76.focus();
}
}else{
list.getFirst().focus();
}
}
};
FocusBinding.prototype.claimFocus=function(){
FocusBinding.activeInstance=this;
};
FocusBinding.prototype._getFocusableList=function(){
if(!this._isUpToDate){
var _a7a=new FocusCrawler();
var list=new List();
_a7a.mode=FocusCrawler.MODE_INDEX;
_a7a.crawl(this.bindingElement,list);
this._focusableList=list;
this._isUpToDate=true;
}
return this._focusableList;
};
FocusBinding.prototype._focusFirstFocusable=function(){
if(this._isFocusManager&&this.isActivated){
var list=this._getFocusableList();
if(list!=null){
if(list.hasEntries()){
list.getFirst().focus();
}
}else{
this.logger.warn("Could not compute focusable list.");
}
}
};
FocusBinding.prototype._focusPreviouslyFocused=function(){
if(this._cachedFocus){
var _a7d=this._cachedFocus.getBinding();
if(_a7d&&!_a7d.isFocused){
_a7d.focus();
}
}
};
FocusBinding.prototype._onFocusableFocused=function(_a7e){
if(_a7e!=FocusBinding.focusedBinding){
if(FocusBinding.focusedBinding!=null){
if(Binding.exists(FocusBinding.focusedBinding)){
FocusBinding.focusedBinding.blur();
}
}
FocusBinding.focusedBinding=_a7e;
_a7e.setProperty(FocusBinding.MARKER,true);
this._cachedFocus=FocusBinding.getCachedFocus(_a7e);
}
};
FocusBinding.prototype._onFocusableBlurred=function(_a7f){
_a7f.deleteProperty(FocusBinding.MARKER);
if(_a7f==FocusBinding.focusedBinding){
FocusBinding.focusedBinding=null;
}
};
TabsButtonBinding.prototype=new ButtonBinding;
TabsButtonBinding.prototype.constructor=TabsButtonBinding;
TabsButtonBinding.superclass=ButtonBinding.prototype;
TabsButtonBinding.RESERVED_SPACE=36;
TabsButtonBinding.NODENAME_TABBOX="tabbox";
TabsButtonBinding.CHAR_INDICATOR=String.fromCharCode(187);
function TabsButtonBinding(){
this.logger=SystemLogger.getLogger("TabsButtonBinding");
this.hiddenTabBindings=null;
this.menuItemBindings=null;
this.containingTabBoxBinding=null;
this.selectedTabBinding=null;
this.isVisible=false;
this.snapshotWindowWidth=null;
}
TabsButtonBinding.prototype.toString=function(){
return "[TabsButtonBinding]";
};
TabsButtonBinding.prototype.onBindingRegister=function(){
TabsButtonBinding.superclass.onBindingRegister.call(this);
this.hiddenTabBindings=new List();
this.menuItemBindings=new List();
};
TabsButtonBinding.prototype.buildDOMContent=function(){
TabsButtonBinding.superclass.buildDOMContent.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByLocalName(this.constructor.NODENAME_TABBOX);
var span=this.bindingDocument.createElement("span");
span.appendChild(this.bindingDocument.createTextNode(TabsButtonBinding.CHAR_INDICATOR));
span.className="arrow";
this.labelBinding.bindingElement.appendChild(span);
};
TabsButtonBinding.prototype.show=function(_a81){
this.bindingElement.style.left=_a81+"px";
this.setLabel(this.hiddenTabBindings.getLength().toString());
TabsButtonBinding.superclass.show.call(this);
};
TabsButtonBinding.prototype.reset=function(){
if(this.menuItemBindings.hasEntries()){
while(this.menuItemBindings.hasNext()){
this.menuItemBindings.getNext().dispose();
}
}
this.hiddenTabBindings.clear();
this.menuItemBindings.clear();
this.selectedTabBinding=null;
this.isPopulated=false;
};
TabsButtonBinding.prototype.registerHiddenTabBinding=function(_a82){
this.hiddenTabBindings.add(_a82);
};
TabsButtonBinding.prototype.fireCommand=function(){
if(this.isChecked&&!this.isPopulated){
this.hiddenTabBindings.reset();
while(this.hiddenTabBindings.hasNext()){
var _a83=this.hiddenTabBindings.getNext();
var item=MenuItemBinding.newInstance(this.popupBinding.bindingDocument);
item.setLabel(_a83.getLabel());
item.setImage(_a83.getImage());
item.associatedTabBinding=_a83;
var self=this;
item.oncommand=function(){
self.selectedTabBinding=this.associatedTabBinding;
};
this.popupBinding.add(item);
this.menuItemBindings.add(item);
this.popupBinding.attachRecursive();
}
this.isPopulated=true;
}
this.popupBinding.addActionListener(PopupBinding.ACTION_HIDE,this);
TabsButtonBinding.superclass.fireCommand.call(this);
};
TabsButtonBinding.prototype.handleAction=function(_a86){
TabsButtonBinding.superclass.handleAction.call(this,_a86);
switch(_a86.type){
case PopupBinding.ACTION_HIDE:
this.popupBinding.removeActionListener(PopupBinding.ACTION_HIDE,this);
var _a87=this.selectedTabBinding;
if(_a87){
this.containingTabBoxBinding.moveToOrdinalPosition(_a87,0);
this.containingTabBoxBinding.select(_a87);
}
_a86.consume();
break;
}
};
TabsButtonBinding.newInstance=function(_a88){
var _a89=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_a88);
_a89.setAttribute("type","checkbox");
_a89.setAttribute("popup","app.bindingMap.tabsbuttonpopup");
_a89.className="tabbutton";
return UserInterface.registerBinding(_a89,TabsButtonBinding);
};
TabBoxBinding.prototype=new FlexBoxBinding;
TabBoxBinding.prototype.constructor=TabBoxBinding;
TabBoxBinding.superclass=FlexBoxBinding.prototype;
TabBoxBinding.ASSOCIATION_KEY="tabboxkey";
TabBoxBinding.ACTION_ATTACHED="tabbox attached";
TabBoxBinding.ACTION_SELECTED="tabbox selected";
TabBoxBinding.ACTION_UNSELECTED="tabbox unselected";
TabBoxBinding.ACTION_UPDATED="tabbox updated";
TabBoxBinding.UPDATE_ORDINAL="tabbox ordinalupdate";
TabBoxBinding.UPDATE_ATTACH="tabbox attachupdate";
TabBoxBinding.UPDATE_DETACH="tabbox detachupdate";
TabBoxBinding.INVALID_TAB_IMAGE="${icon:error}";
TabBoxBinding.BALLOON_TAB_IMAGE="${icon:balloon}";
EventBroadcaster.subscribe(BroadcastMessages.KEY_TAB,{handleBroadcast:function(){
if(Keyboard.isControlPressed){
var _a8a=TabBoxBinding.currentActiveInstance;
if(_a8a!=null&&Binding.exists(_a8a)){
}
}
}});
TabBoxBinding.currentActiveInstance=null;
function TabBoxBinding(){
this.logger=SystemLogger.getLogger("TabBoxBinding");
this._tabBoxPairs={};
this._selectedTabElement=null;
this._selectedTabBinding=null;
this._tabsElement=null;
this._tabPanelsElement=null;
this._attachedMemberCount=0;
this._isMembersAttached=false;
this.isEqualSize=false;
this._nodename_tab="tab";
this._nodename_tabs="tabs";
this._nodename_tabpanel="tabpanel";
this._nodename_tabpanels="tabpanels";
this._impl_tab=TabBinding;
this._impl_tabs=TabsBinding;
this._impl_tabpanel=TabPanelBinding;
this._impl_tabpanels=TabPanelsBinding;
this.updateType=null;
this._hasBastardUpdates=false;
return this;
}
TabBoxBinding.prototype.toString=function(){
return "[TabBoxBinding]";
};
TabBoxBinding.prototype.onBindingRegister=function(){
TabBoxBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_ATTACHED);
this.addActionListener(Binding.ACTION_DETACHED);
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
DOMEvents.addEventListener(this.bindingDocument.documentElement,DOMEvents.AFTERUPDATE,this);
DOMEvents.addEventListener(this.bindingElement,DOMEvents.AFTERUPDATE,this);
};
TabBoxBinding.prototype.onBindingAttach=function(){
TabBoxBinding.superclass.onBindingAttach.call(this);
TabBoxBinding.currentActiveInstance=this;
this._tabsElement=this.getTabsElement();
this._tabPanelsElement=this.getTabPanelsElement();
var _a8b=this.getTabElements().getLength();
var _a8c=this.getTabPanelElements().getLength();
if(!this._tabsElement||!this._tabPanelsElement){
throw new Error(this.toString()+" DOM subtree invalid.");
}else{
if(_a8b!=_a8c){
throw new Error(this.toString()+" DOM subtree invalid.");
}else{
if(this.getProperty("type")=="boxed"){
this.setFlexibility(false);
this.attachClassName("boxed");
}
this.buildDOMContent();
this._TEMPNAME();
if(this.getProperty("equalsize")==true){
this.dispatchAction(PageBinding.ACTION_BLOCK_INIT);
this.setFlexibility(false);
this.attachClassName("equalsize");
this.isEqualSize=true;
this.addMembers(this.getDescendantBindingsByLocalName("*"));
}else{
this.addMember(this.getTabsBinding());
this.addMember(this.getTabPanelsBinding());
this.addMembers(this.getTabBindings());
this.addMembers(this.getTabPanelBindings());
}
}
}
};
TabBoxBinding.prototype.onBindingInitialize=function(){
var _a8d=this.getTabPanelElements();
while(_a8d.hasNext()){
this._setupWarningSystem(UserInterface.getBinding(_a8d.getNext()));
}
if(this.isEqualSize){
this.enforceEqualSize();
this.dispatchAction(PageBinding.ACTION_UNBLOCK_INIT);
}
this.dispatchAction(TabBoxBinding.ACTION_ATTACHED);
TabBoxBinding.superclass.onBindingInitialize.call(this);
};
TabBoxBinding.prototype.buildDOMContent=function(){
var _a8e=DOMUtil.getOrdinalPosition(this._tabsElement);
var _a8f=DOMUtil.getOrdinalPosition(this._tabPanelsElement);
var _a90=_a8e>_a8f?"tabsbelow":"tabsontop";
this.attachClassName(_a90);
};
TabBoxBinding.prototype._TEMPNAME=function(){
var tabs=this.getTabElements();
var _a92=this.getTabPanelElements();
var _a93=null;
var _a94=this.getProperty("selectedindex");
if(_a94!=null){
if(_a94>tabs.getLength()-1){
throw "Selectedindex out of range";
}
}
if(tabs.hasEntries()){
var _a95=0;
while(tabs.hasNext()){
var tab=tabs.getNext();
var _a97=_a92.getNext();
this.registerTabBoxPair(tab,_a97);
if(_a94&&_a95==_a94){
tab.setAttribute("selected","true");
}else{
if(tab.getAttribute("selected")=="true"){
_a93=tab;
}
}
_a95++;
}
if(!_a93){
_a93=tabs.getFirst();
_a93.setAttribute("selected","true");
}
}
};
TabBoxBinding.prototype.enforceEqualSize=function(_a98){
var _a99=null;
var _a9a=null;
if(this.isEqualSize){
var _a9b=CSSComputer.getPadding(this._tabPanelsElement);
var max=0,_a9d=this.getTabPanelElements();
_a9d.each(function(_a9e){
max=_a9e.offsetHeight>max?_a9e.offsetHeight:max;
});
_a9a=max+_a9b.top+_a9b.bottom;
if(_a98&&this._tabPanelsElement.style.height!=null){
_a99=this._tabPanelsElement.offsetHeight;
}
if(_a99!=null||_a9a>_a99){
this._tabPanelsElement.style.height=_a9a+"px";
}
}
};
TabBoxBinding.prototype._setupWarningSystem=function(_a9f){
_a9f._invalidCount=0;
_a9f.addActionListener(Binding.ACTION_INVALID,this);
_a9f.addActionListener(Binding.ACTION_VALID,this);
_a9f.addActionListener(BalloonBinding.ACTION_SNAP,this);
};
TabBoxBinding.prototype.handleAction=function(_aa0){
TabBoxBinding.superclass.handleAction.call(this,_aa0);
var _aa1=_aa0.target;
var _aa2=_aa0.listener;
switch(_aa0.type){
case Binding.ACTION_ATTACHED:
break;
case Binding.ACTION_DETACHED:
if(_aa1.constructor==this._impl_tab){
this.updateType=TabBoxBinding.UPDATE_DETACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
_aa0.consume();
}
break;
case PageBinding.ACTION_INITIALIZED:
if(_aa1.isDialogSubPage&&this.isEqualSize){
this.enforceEqualSize();
}
break;
case Binding.ACTION_INVALID:
_aa2._invalidCount++;
if(_aa2._invalidCount==1){
var self=this;
setTimeout(function(){
if(!_aa2.isSelected){
self._showWarning(_aa2,true);
}
},0);
}
break;
case Binding.ACTION_VALID:
if(_aa2._invalidCount>0){
_aa2._invalidCount--;
if(_aa2._invalidCount==0){
if(_aa2.isSelected){
this._showWarning(_aa2,false);
}
}
}
break;
case BalloonBinding.ACTION_SNAP:
this._showBalloon(_aa2,true);
break;
case Binding.ACTION_ACTIVATED:
case Binding.ACTION_FOCUSED:
if(_aa0._tabboxstamp==null){
TabBoxBinding.currentActiveInstance=this;
_aa0._tabboxstamp="stamped";
}
break;
}
};
TabBoxBinding.prototype.handleEvent=function(e){
TabBoxBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.AFTERUPDATE:
var _aa5=DOMEvents.getTarget(e);
if(_aa5==this.bindingDocument.documentElement){
if(this._hasBastardUpdates){
this._hasBastardUpdates=false;
var tabs=this.getTabElements();
var _aa7=this.getTabPanelElements();
tabs.each(function(tab,_aa9){
if(tab.getAttribute(TabBoxBinding.ASSOCIATION_KEY)==null){
var _aaa=_aa7.get(_aa9);
this.registerTabBoxPair(tab,_aaa);
}
},this);
var _aab=this._tabBoxPairs;
for(var key in _aab){
var tab=_aab[key].tab;
if(tab.parentNode==null){
this.unRegisterTabBoxPair(tab);
}
}
}
}else{
if(!this._hasBastardUpdates){
var name=DOMUtil.getLocalName(_aa5);
switch(_aa5.__updateType){
case Update.TYPE_INSERT:
switch(name){
case this._nodename_tab:
case this._nodename_tabpanel:
var _aaf=_aa5.parentNode;
if(_aaf==this._tabsElement||_aaf==this._tabPanelsElement){
this._hasBastardUpdates=true;
}
break;
}
break;
case Update.TYPE_REMOVE:
switch(name){
case this._nodename_tabs:
case this._nodename_tabpanels:
if(_aa5==this._tabsElement||_aa5==this._tabPanelsElement){
this._hasBastardUpdates=true;
}
break;
}
break;
}
}
}
break;
}
};
TabBoxBinding.prototype.select=function(arg,_ab1){
var _ab2=this.getBindingForArgument(arg);
if(_ab2!=null&&!_ab2.isSelected){
if(this._selectedTabBinding!=null){
this._selectedTabBinding.unselect();
this.getTabPanelBinding(this._selectedTabBinding).unselect();
}
this.dispatchAction(TabBoxBinding.ACTION_UNSELECTED);
_ab2.select(_ab1);
this.getTabPanelBinding(_ab2).select(_ab1);
var _ab3=this.getProperty("selectedindex");
if(_ab3!=null){
this.setProperty("selectedindex",DOMUtil.getOrdinalPosition(_ab2.bindingElement,true));
}
this._selectedTabBinding=_ab2;
this.dispatchAction(TabBoxBinding.ACTION_SELECTED);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
if(_ab2.getImage()==TabBoxBinding.BALLOON_TAB_IMAGE){
var _ab4=this.getTabPanelBinding(_ab2);
this._showBalloon(_ab4,false);
}
}
};
TabBoxBinding.prototype.registerTabBoxPair=function(tab,_ab6){
var key=KeyMaster.getUniqueKey();
tab.setAttribute(TabBoxBinding.ASSOCIATION_KEY,key);
_ab6.setAttribute(TabBoxBinding.ASSOCIATION_KEY,key);
this._tabBoxPairs[key]={tab:tab,tabPanel:_ab6};
};
TabBoxBinding.prototype.unRegisterTabBoxPair=function(tab){
var key=tab.getAttribute(TabBoxBinding.ASSOCIATION_KEY);
delete this._tabBoxPairs[key];
};
TabBoxBinding.prototype.getTabPanelBinding=function(_aba){
var _abb=null;
try{
var key=_aba.getProperty(TabBoxBinding.ASSOCIATION_KEY);
var _abd=this._tabBoxPairs[key].tabPanel;
_abb=UserInterface.getBinding(_abd);
}
catch(exception){
this.logger.error(exception);
SystemDebug.stack(arguments);
}
return _abb;
};
TabBoxBinding.prototype.getTabBinding=function(_abe){
var key=_abe.getProperty(TabBoxBinding.ASSOCIATION_KEY);
var _ac0=this._tabBoxPairs[key].tab;
return UserInterface.getBinding(_ac0);
};
TabBoxBinding.prototype.summonTabBinding=function(){
return TabBinding.newInstance(this.bindingDocument);
};
TabBoxBinding.prototype.summonTabPanelBinding=function(){
var _ac1=this._impl_tabpanel.newInstance(this.bindingDocument);
this._setupWarningSystem(_ac1);
return _ac1;
};
TabBoxBinding.prototype.appendTabByBindings=function(_ac2,_ac3){
var _ac4=_ac2.bindingElement;
_ac2.setProperty("selected",true);
var _ac5=this.summonTabPanelBinding();
var _ac6=_ac5.bindingElement;
if(_ac3){
_ac6.appendChild(_ac3 instanceof Binding?_ac3.bindingElement:_ac3);
}
this.registerTabBoxPair(_ac4,_ac6);
UserInterface.getBinding(this._tabsElement).add(_ac2);
this._tabPanelsElement.appendChild(_ac6);
_ac2.attach();
UserInterface.getBinding(_ac6).attachRecursive();
this.updateType=TabBoxBinding.UPDATE_ATTACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
return _ac2;
};
TabBoxBinding.prototype.importTabBinding=function(_ac7){
var that=_ac7.containingTabBoxBinding;
var _ac9=that.getTabPanelBinding(_ac7);
var _aca=_ac9.getBindingElement();
var _acb=_ac7.getBindingElement();
that.dismissTabBinding(_ac7);
this._tabsElement.appendChild(_acb);
this._tabPanelsElement.appendChild(_aca);
this.registerTabBoxPair(_acb,_aca);
_ac7.containingTabBoxBinding=this;
this.select(_ac7);
this.dispatchAction(Binding.ACTION_ACTIVATED);
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.removeTab=function(_acc){
var _acd=null;
if(_acc.isSelected){
_acd=this.getBestTab(_acc);
this._selectedTabBinding=null;
}
var _ace=this.getTabPanelBinding(_acc);
this.unRegisterTabBoxPair(_acc.bindingElement);
_acc.dispose();
_ace.dispose();
if(_acd!=null){
this.select(_acd,true);
}
this.updateType=TabBoxBinding.UPDATE_DETACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
this.deActivate();
};
TabBoxBinding.prototype.dismissTabBinding=function(_acf){
if(_acf.isSelected){
this.selectBestTab(_acf);
}
};
TabBoxBinding.prototype.selectBestTab=function(_ad0){
var _ad1=this.getBestTab(_ad0);
if(_ad1){
this.select(_ad1);
}else{
this._selectedTabBinding=null;
}
};
TabBoxBinding.prototype.getBestTab=function(_ad2){
var _ad3=null;
var _ad4=_ad2.getOrdinalPosition(true);
var _ad5=this.getTabBindings();
var _ad6=_ad5.getLength();
var _ad7=_ad6-1;
if(_ad6==1){
_ad3=null;
}else{
if(_ad4==_ad7){
_ad3=_ad5.get(_ad4-1);
}else{
_ad3=_ad5.get(_ad4+1);
}
}
return _ad3;
};
TabBoxBinding.prototype.moveToOrdinalPosition=function(_ad8,_ad9){
var _ada=this.bindingDocument.getElementById(_ad8.bindingElement.id);
var tab=this.getTabElements().get(_ad9);
this._tabsElement.insertBefore(_ada,tab);
this.updateType=TabBoxBinding.UPDATE_ORDINAL;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.getTabsElement=function(){
return DOMUtil.getElementsByTagName(this.bindingElement,this._nodename_tabs).item(0);
};
TabBoxBinding.prototype.getTabPanelsElement=function(){
return DOMUtil.getElementsByTagName(this.bindingElement,this._nodename_tabpanels).item(0);
};
TabBoxBinding.prototype.getTabElements=function(){
var _adc=this._nodename_tab;
var _add=new List(this._tabsElement.childNodes);
var _ade=new List();
while(_add.hasNext()){
var _adf=_add.getNext();
if(_adf.nodeType==Node.ELEMENT_NODE&&DOMUtil.getLocalName(_adf)==_adc){
_ade.add(_adf);
}
}
return _ade;
};
TabBoxBinding.prototype.getTabPanelElements=function(){
var _ae0=this._nodename_tabpanel;
var _ae1=new List(this._tabPanelsElement.childNodes);
var _ae2=new List();
_ae1.each(function(_ae3){
if(_ae3.nodeType==Node.ELEMENT_NODE&&DOMUtil.getLocalName(_ae3)==_ae0){
_ae2.add(_ae3);
}
});
return _ae2;
};
TabBoxBinding.prototype.getTabsBinding=function(){
return this.getChildBindingByLocalName(this._nodename_tabs);
};
TabBoxBinding.prototype.getTabPanelsBinding=function(){
return this.getChildBindingByLocalName(this._nodename_tabpanels);
};
TabBoxBinding.prototype.getTabBindings=function(){
var _ae4=new List();
var _ae5=this.getTabElements();
_ae5.each(function(_ae6){
_ae4.add(UserInterface.getBinding(_ae6));
});
return _ae4;
};
TabBoxBinding.prototype.getTabPanelBindings=function(){
var _ae7=new List();
this.getTabPanelElements().each(function(_ae8){
_ae7.add(UserInterface.getBinding(_ae8));
});
return _ae7;
};
TabBoxBinding.prototype.getSelectedTabBinding=function(){
return this._selectedTabBinding;
};
TabBoxBinding.prototype.getSelectedTabPanelBinding=function(){
var _ae9=null;
if(this._selectedTabBinding){
_ae9=this.getTabPanelBinding(this._selectedTabBinding);
}
return _ae9;
};
TabBoxBinding.prototype._showWarning=function(_aea,_aeb){
var _aec=this.getTabBinding(_aea);
if(_aeb){
if(_aec.labelBinding.hasImage){
_aec._backupImage=_aec.getImage();
}
_aec.setImage(TabBoxBinding.INVALID_TAB_IMAGE);
}else{
if(_aec._backupImage){
_aec.setImage(_aec._backupImage);
}else{
_aec.setImage(false);
}
}
};
TabBoxBinding.prototype._showBalloon=function(_aed,_aee){
var _aef=this.getTabBinding(_aed);
if((_aee&&!_aef.isSelected)||!_aee){
if(_aef.getImage()!=TabBoxBinding.INVALID_TAB_IMAGE){
if(_aee){
if(_aef.labelBinding.hasImage){
_aef._backupImage=_aef.getImage();
}
_aef.setImage(TabBoxBinding.BALLOON_TAB_IMAGE);
}else{
if(_aef._backupImage!=null){
_aef.setImage(_aef._backupImage);
}else{
_aef.setImage(false);
}
}
}
}
};
TabBoxBinding.prototype.advanceSelection=function(_af0){
var tab=this.getSelectedTabBinding();
var tabs=this.getTabBindings();
var _af3=tab.getOrdinalPosition(true);
var next=null;
var _af5=new List();
tabs.each(function(t){
if(t.isVisible){
_af5.add(t);
}
});
if(_af5.getLength()>1){
if(_af3==0&&!_af0){
next=_af5.getLast();
}else{
if(_af3==_af5.getLength()-1&&_af0){
next=_af5.getFirst();
}else{
if(_af0){
next=tab.getNextBindingByLocalName(this._nodename_tab);
}else{
next=tab.getPreviousBindingByLocalName(this._nodename_tab);
}
}
}
if(next!=null){
this.select(next);
}
}
};
TabsBinding.prototype=new Binding;
TabsBinding.prototype.constructor=TabsBinding;
TabsBinding.superclass=Binding.prototype;
TabsBinding.NODENAME_TABBOX="tabbox";
TabsBinding.TABBUTTON_IMPLEMENTATION=TabsButtonBinding;
function TabsBinding(){
this.logger=SystemLogger.getLogger("TabsBinding");
this.containingTabBoxBinding=null;
this.tabsButtonBinding=null;
this._cachedOffsetWidth=parseInt(0);
this.isManaging=false;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TabsBinding.prototype.toString=function(){
return "[TabsBinding]";
};
TabsBinding.prototype.onBindingRegister=function(){
TabsBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
TabsBinding.prototype.onBindingAttach=function(){
TabsBinding.superclass.onBindingAttach.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.containingTabBoxBinding.addActionListener(TabBoxBinding.ACTION_UPDATED,this);
this.buildDOMContent();
this.dispatchAction(Binding.ACTION_ATTACHED);
};
TabsBinding.prototype.buildDOMContent=function(){
var div=this.bindingDocument.createElement("div");
div.className="tabliner";
this.bindingElement.insertBefore(div,this.bindingElement.firstChild);
this.shadowTree.tabManager=this.bindingDocument.createElement("div");
this.shadowTree.tabManager.className="tabmanager";
var _af8=this.constructor.TABBUTTON_IMPLEMENTATION;
this.tabsButtonBinding=_af8.newInstance(this.bindingDocument);
this.shadowTree.tabsButton=this.tabsButtonBinding;
this.add(this.tabsButtonBinding);
this.tabsButtonBinding.attach();
};
TabsBinding.prototype.handleAction=function(_af9){
TabsBinding.superclass.handleAction.call(this,_af9);
switch(_af9.type){
case TabBoxBinding.ACTION_UPDATED:
if(!this.isManaging){
var self=this;
function manage(){
self.manage();
}
setTimeout(manage,0);
}
break;
}
};
TabsBinding.prototype.flex=function(){
if(this.isAttached==true){
var self=this;
function manage(){
if(Binding.exists(self)==true){
var _afc=self.bindingElement.offsetWidth;
if(_afc!=self._cachedOffsetWidth){
self.manage();
}
self._cachedOffsetWidth=_afc;
}
}
setTimeout(manage,0);
}
};
TabsBinding.prototype.add=function(_afd){
if(_afd instanceof TabBinding){
if(this.tabsButtonBinding&&this.tabsButtonBinding.isVisible){
this.tabsButtonBinding.hide();
}
}
return TabsBinding.superclass.add.call(this,_afd);
};
TabsBinding.prototype.manage=function(){
if(Binding.exists(this)==true&&this.isVisible){
this.isManaging=true;
var _afe=false;
var _aff,tab,tabs=this.containingTabBoxBinding.getTabElements();
var _b02=this.constructor.TABBUTTON_IMPLEMENTATION;
var _b03=this.bindingElement.offsetWidth-_b02.RESERVED_SPACE;
var _b04=null;
var sum=0,_b06=0;
var _b07=true;
if(tabs.hasEntries()){
this.tabsButtonBinding.reset();
while(tabs.hasNext()&&_b07){
tab=tabs.getNext();
_aff=UserInterface.getBinding(tab);
if(!_b04){
_b04=_aff;
}
sum+=tab.offsetWidth;
if(sum>=_b03){
_afe=true;
if(_aff.isSelected){
if(!DOMUtil.isFirstElement(_aff.bindingElement,true)){
this.isManaging=false;
if(_b04){
_b04.hide();
if(this.tabsButtonBinding.isVisible){
this.tabsButtonBinding.hide();
}
}
this.containingTabBoxBinding.moveToOrdinalPosition(_aff,_b06-1);
_b07=false;
}
}else{
_aff.hide();
this.tabsButtonBinding.registerHiddenTabBinding(_aff);
}
}else{
_aff.show();
_b04=_aff;
_b06++;
}
}
if(_b07){
if(_afe&&this.tabsButtonBinding.hiddenTabBindings.hasEntries()){
var _b08=_b04.getBindingElement();
var _b09=_b08.offsetLeft+_b08.offsetWidth;
var _b0a=this.tabsButtonBinding;
setTimeout(function(){
_b0a.show(_b09+4);
},50);
}else{
this.tabsButtonBinding.hide();
}
}
}
this.isManaging=false;
}
};
TabBinding.prototype=new MatrixBinding;
TabBinding.prototype.constructor=TabBinding;
TabBinding.superclass=MatrixBinding.prototype;
TabBinding.ACTION_SELECTED="tabselected";
TabBinding.ACTION_UNSELECTED="tabunselected";
TabBinding.NODENAME_TABBOX="tabbox";
function TabBinding(){
this.logger=SystemLogger.getLogger("TabBinding");
this.tabboxkey=null;
this.isSelected=false;
this.labelBinding=null;
this.containingTabBoxBinding=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TabBinding.prototype.toString=function(){
return "[TabBinding]";
};
TabBinding.prototype.serialize=function(){
var _b0b=TabBinding.superclass.serialize.call(this);
if(_b0b){
_b0b.label=this.getLabel();
_b0b.image=this.getImage();
_b0b.tooltip=this.getToolTip();
}
return _b0b;
};
TabBinding.prototype.onBindingAttach=function(){
TabBinding.superclass.onBindingAttach.call(this);
this.defaultElementPosition=DOMUtil.getComputedStyle(this.bindingElement,"position");
this.defaultElementLeft=DOMUtil.getComputedStyle(this.bindingElement,"left");
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.buildDOMContent();
this.assignDOMEvents();
this.dispatchAction(Binding.ACTION_ATTACHED);
if(this.getProperty("selected")==true){
this.containingTabBoxBinding.select(this,true);
}
};
TabBinding.prototype.buildDOMContent=function(){
var _b0c=this.bindingElement.getAttribute("image");
var _b0d=this.bindingElement.getAttribute("label");
var _b0e=this.bindingElement.getAttribute("tooltip");
this.bindingElement.className="default";
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.shadowTree.labelBinding=this.labelBinding;
this.labelBinding.attachClassName("tablabel");
this.add(this.labelBinding);
if(_b0d){
this.setLabel(_b0d);
}
if(_b0c){
this.setImage(_b0c);
}
if(_b0e){
this.setToolTip(_b0e);
}
};
TabBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(url);
}
};
TabBinding.prototype.getImage=function(){
return this.getProperty("image");
};
TabBinding.prototype.setLabel=function(_b10){
if(_b10!=null){
this.setProperty("label",_b10);
if(this.isAttached){
this.labelBinding.setLabel(_b10);
}
}
};
TabBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
TabBinding.prototype.setToolTip=function(_b11){
if(_b11){
this.setProperty("tooltip",_b11);
if(this.isAttached){
this.labelBinding.setToolTip(_b11);
}
}
};
TabBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
TabBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEENTER);
this.addEventListener(DOMEvents.MOUSELEAVE);
};
TabBinding.prototype.handleEvent=function(e){
TabBinding.superclass.handleEvent.call(this,e);
if(!this.isSelected){
var _b13=false;
if(Client.isMozilla==true){
}
if(!_b13){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(!this.isSelected){
this.bindingElement.className="hover";
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(!this.isSelected){
this.bindingElement.className="default";
}
break;
case DOMEvents.MOUSEDOWN:
if(!DOMEvents.isRightButton(e)){
this.containingTabBoxBinding.select(this);
}
break;
}
}
}
};
TabBinding.prototype.select=function(_b14){
this.show();
this.isSelected=true;
this.setProperty("selected",true);
this.bindingElement.className="selected";
};
TabBinding.prototype.unselect=function(){
this.isSelected=false;
this.deleteProperty("selected");
this.bindingElement.className="default";
};
TabBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.position="absolute";
this.bindingElement.style.left="-1000px";
this.isVisible=false;
}
};
TabBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.position=this.defaultElementPosition;
this.bindingElement.style.left=this.defaultElementLeft;
this.isVisible=true;
}
};
TabBinding.newInstance=function(_b15){
var _b16=DOMUtil.createElementNS(Constants.NS_UI,"ui:tab",_b15);
return UserInterface.registerBinding(_b16,TabBinding);
};
TabPanelsBinding.prototype=new FlexBoxBinding;
TabPanelsBinding.prototype.constructor=TabPanelsBinding;
TabPanelsBinding.superclass=FlexBoxBinding.prototype;
function TabPanelsBinding(){
this.logger=SystemLogger.getLogger("TabPanelsBinding");
this.containingTabBoxBinding=null;
this._lastKnownDimension=null;
}
TabPanelsBinding.prototype.toString=function(){
return "[TabPanelsBinding]";
};
TabPanelsBinding.prototype.onBindingRegister=function(){
TabPanelsBinding.superclass.onBindingRegister.call(this);
this._lastKnownDimension=new Dimension(0,0);
};
TabPanelsBinding.prototype.hasDimensionsChanged=function(){
var _b17=false;
var dim1=this.boxObject.getDimension();
var dim2=this._lastKnownDimension;
if(dim2==null||!Dimension.isEqual(dim1,dim2)){
_b17=true;
this._lastKnownDimension=dim1;
}
return _b17;
};
TabPanelsBinding.prototype.onBindingAttach=function(){
TabPanelsBinding.superclass.onBindingAttach.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.setFlexibility(this.containingTabBoxBinding.isFlexible);
this.dispatchAction(Binding.ACTION_ATTACHED);
};
TabPanelBinding.prototype=new Binding;
TabPanelBinding.prototype.constructor=TabPanelBinding;
TabPanelBinding.superclass=Binding.prototype;
function TabPanelBinding(){
this.logger=SystemLogger.getLogger("TabPanelBinding");
this.tabboxkey=null;
this.isVisible=false;
this._focusedBinding=null;
return this;
}
TabPanelBinding.prototype.toString=function(){
return "[TabPanelBinding]";
};
TabPanelBinding.prototype.onBindingAttach=function(){
TabPanelBinding.superclass.onBindingAttach.call(this);
this.dispatchAction(Binding.ACTION_ATTACHED);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
};
TabPanelBinding.prototype.select=function(_b1a){
if(!this.isSelected){
if(this.isLazy){
this.wakeUp("select");
}else{
this.isSelected=true;
this.isVisible=true;
this.bindingElement.style.position="static";
this._invokeManagedRecursiveFlex();
if(_b1a!=true){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
}
}
};
TabPanelBinding.prototype.unselect=function(){
if(this.isSelected){
this.dispatchAction(FocusBinding.ACTION_BLUR);
this.isSelected=false;
this.isVisible=false;
this.bindingElement.style.position="absolute";
}
};
TabPanelBinding.prototype._invokeManagedRecursiveFlex=function(){
this.reflex(true);
};
TabPanelBinding.prototype.handleAction=function(_b1b){
TabPanelBinding.superclass.handleAction.call(this,_b1b);
var _b1c=_b1b.target;
switch(_b1b.type){
case BalloonBinding.ACTION_INITIALIZE:
_b1b.consume();
break;
}
};
TabPanelBinding.newInstance=function(_b1d){
var _b1e=DOMUtil.createElementNS(Constants.NS_UI,"ui:tabpanel",_b1d);
UserInterface.registerBinding(_b1e,TabPanelBinding);
return UserInterface.getBinding(_b1e);
};
SplitBoxBinding.prototype=new FlexBoxBinding;
SplitBoxBinding.prototype.constructor=SplitBoxBinding;
SplitBoxBinding.superclass=FlexBoxBinding.prototype;
SplitBoxBinding.ORIENT_HORIZONTAL="horizontal";
SplitBoxBinding.ORIENT_VERTICAL="vertical";
function SplitBoxBinding(){
this.logger=SystemLogger.getLogger("SplitBoxBinding");
this._orient=SplitBoxBinding.ORIENT_HORIZONTAL;
this.isLayoutInitialized=false;
this._isFirstLayout=true;
return this;
}
SplitBoxBinding.prototype.toString=function(){
return "[SplitBoxBinding]";
};
SplitBoxBinding.prototype.serialize=function(){
var _b1f=SplitBoxBinding.superclass.serialize.call(this);
if(_b1f){
_b1f.orient=this.getOrient();
_b1f.layout=this.getLayout();
}
return _b1f;
};
SplitBoxBinding.prototype.onBindingAttach=function(){
SplitBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(SplitterBinding.ACTION_DRAGGED,this);
this.addActionListener(SplitterBinding.ACTION_COLLAPSE,this);
this.addActionListener(SplitterBinding.ACTION_UNCOLLAPSE,this);
this._initializeLayout();
this._initializeOrient();
this._initializeSplitters();
};
SplitBoxBinding.prototype._initializeLayout=function(){
this.isLayoutInitialized=false;
var _b20=this.getSplitPanelElements();
if(_b20.hasEntries()){
var _b21=new List(this.getLayout().split(":"));
if(_b21.getLength()!=_b20.getLength()){
throw new Error(this+" DOM subree invalid");
}else{
_b20.each(function(_b22){
_b22.setAttribute("ratio",_b21.getNext());
});
}
}
this.isLayoutInitialized=true;
};
SplitBoxBinding.prototype._initializeOrient=function(){
var _b23=this.getProperty("orient");
if(_b23){
this._orient=_b23;
}
this.attachClassName(this._orient);
};
SplitBoxBinding.prototype._initializeSplitters=function(){
var _b24=this.getSplitterBindings();
while(_b24.hasNext()){
var _b25=_b24.getNext();
if(_b25&&_b25.getProperty("collapsed")==true){
_b25.collapse();
}
}
};
SplitBoxBinding.prototype.handleAction=function(_b26){
SplitBoxBinding.superclass.handleAction.call(this,_b26);
switch(_b26.type){
case SplitterBinding.ACTION_DRAGGED:
this.refreshLayout();
_b26.consume();
break;
case SplitterBinding.ACTION_COLLAPSE:
this.collapse(_b26.target);
_b26.consume();
break;
case SplitterBinding.ACTION_UNCOLLAPSE:
this.unCollapse(_b26.target);
_b26.consume();
break;
}
};
SplitBoxBinding.prototype.flex=function(){
SplitBoxBinding.superclass.flex.call(this);
if(this.isAttached==true){
this.invokeLayout(true);
}
};
SplitBoxBinding.prototype.collapse=function(_b27){
this._getSplitPanelBindingForSplitter(_b27).collapse();
this.invokeLayout();
};
SplitBoxBinding.prototype.unCollapse=function(_b28){
this._getSplitPanelBindingForSplitter(_b28).unCollapse();
this.invokeLayout();
};
SplitBoxBinding.prototype._getSplitPanelBindingForSplitter=function(_b29){
var _b2a=DOMUtil.getOrdinalPosition(_b29.bindingElement,true);
var _b2b,_b2c=this.getSplitPanelElements();
switch(_b29.getCollapseDirection()){
case SplitterBinding.COLLAPSE_BEFORE:
_b2b=_b2c.get(_b2a);
break;
case SplitterBinding.COLLAPSE_AFTER:
_b2b=_b2c.get(_b2a+1);
break;
}
return UserInterface.getBinding(_b2b);
};
SplitBoxBinding.prototype.invokeLayout=function(_b2d){
var _b2e=this.isHorizontalOrient();
var _b2f=this.getSplitPanelBindings();
var _b30=this.getSplitterBindings();
var _b31=new List();
var _b32,sum=0;
var _b34=0;
_b2f.each(function(_b35){
if(_b35.isFixed==true){
if(!_b2f.hasNext()){
_b34+=_b35.getFix();
}
_b31.add(0);
sum+=0;
}else{
_b32=_b35.getRatio();
_b31.add(_b32);
sum+=_b32;
}
});
if(sum==0){
this.logger.warn("Division by zero was hacked");
sum=1;
}
if(_b31.getLength()!=_b2f.getLength()){
throw new Error(this+" Invalid property (ratio)");
}else{
var _b36=_b2e?this.getInnerWidth():this.getInnerHeight();
_b36-=_b34;
_b30.each(function(_b37){
if(_b37.isVisible){
_b36-=SplitterBinding.DIMENSION;
}
});
var unit=_b36/sum;
var _b39=0;
var self=this;
_b2f.each(function(_b3b){
var span=0;
var _b3d=_b31.getNext();
if(_b3b.isFixed){
span=_b3b.getFix();
}else{
span=Math.floor(unit*_b3d);
if(isNaN(span)){
alert("isNaN ( span ) ["+this.getProperty("layout")+"]");
}
}
_b39+=span;
while(_b39>_b36){
_b39--;
span--;
}
if(!_b3b.isFixed){
if(_b2e){
_b3b.setWidth(span);
}else{
_b3b.setHeight(span);
}
}
});
}
if(_b2d!=true){
this.reflex();
}
if(this._persist&&this._persist.layout){
var _b3e=this.getLayout();
if(_b3e){
this.setProperty("layout",_b3e);
}
}
};
SplitBoxBinding.prototype.computeLayout=function(){
var _b3f=this.isHorizontalOrient();
var _b40=this.getSplitPanelBindings();
var _b41=this.getSplitterBindings();
var _b42=null;
var _b43=null;
var unit=null;
var _b45=null;
var span=null;
_b40.each(function(_b47){
if(!unit){
unit=_b3f?_b47.getWidth():_b47.getHeight();
}
span=_b3f?_b47.getWidth():_b47.getHeight();
if(_b45){
span-=_b45;
_b45=null;
}
_b42=_b41.getNext();
if(_b42&&_b42.offset){
_b45=_b42.offset;
span+=_b45;
}
_b47.setRatio(span/unit);
});
};
SplitBoxBinding.prototype.refreshLayout=function(){
this.computeLayout();
this.invokeLayout();
};
SplitBoxBinding.prototype.setLayout=function(_b48){
this.logger.debug(_b48);
this.setProperty("layout",_b48);
this._initializeLayout();
this.invokeLayout();
};
SplitBoxBinding.prototype.getLayout=function(){
if(!this.isLayoutInitialized){
if(!this.getProperty("layout")){
this.setProperty("layout",this.getDefaultLayout());
}
}else{
var _b49="",_b4a=this.getSplitPanelBindings();
_b4a.each(function(_b4b){
_b49+=_b4b.getRatio().toString();
_b49+=_b4a.hasNext()?":":"";
});
this.setProperty("layout",_b49);
}
return new String(this.getProperty("layout"));
};
SplitBoxBinding.prototype.getDefaultLayout=function(){
var _b4c=this.getSplitPanelElements();
_b4c.each(function(_b4d){
layout+="1"+(_b4c.hasNext()?":":"");
});
this.setProperty("layout",layout);
};
SplitBoxBinding.prototype.setWidth=function(_b4e){
this.bindingElement.style.width=_b4e+"px";
};
SplitBoxBinding.prototype.getInnerWidth=function(){
if(Client.isFirefox){
return Math.floor(this.bindingElement.getBoundingClientRect().width);
}
return this.bindingElement.offsetWidth;
};
SplitBoxBinding.prototype.setHeight=function(_b4f){
this.bindingElement.style.height=_b4f+"px";
};
SplitBoxBinding.prototype.getInnerHeight=function(){
if(Client.isFirefox){
return Math.floor(this.bindingElement.getBoundingClientRect().height);
}
return this.bindingElement.offsetHeight;
};
SplitBoxBinding.prototype.getOrient=function(){
return this.getProperty("orient");
};
SplitBoxBinding.prototype.isHorizontalOrient=function(){
return this._orient==SplitBoxBinding.ORIENT_HORIZONTAL;
};
SplitBoxBinding.prototype.getSplitPanelElements=function(){
return this.getChildElementsByLocalName("splitpanel");
};
SplitBoxBinding.prototype.getSplitPanelBindings=function(){
return this.getChildBindingsByLocalName("splitpanel");
};
SplitBoxBinding.prototype.getSplitterElements=function(){
return this.getChildElementsByLocalName("splitter");
};
SplitBoxBinding.prototype.getSplitterBindings=function(){
return this.getChildBindingsByLocalName("splitter");
};
SplitBoxBinding.prototype.fit=function(_b50){
if(!this.isFit||_b50){
if(this.isHorizontalOrient()){
var max=0;
var _b52=this.getSplitPanelBindings();
_b52.each(function(_b53){
var _b54=_b53.bindingElement.offsetHeight;
max=_b54>max?_b54:max;
});
this._setFitnessHeight(max);
}else{
throw "SplitBoxBinding enforceFitness not supported vertically!";
}
this.isFit=true;
}
};
SplitBoxBinding.newInstance=function(_b55){
var _b56=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitbox",_b55);
return UserInterface.registerBinding(_b56,SplitBoxBinding);
};
SplitPanelBinding.prototype=new ControlBoxBinding;
SplitPanelBinding.prototype.constructor=SplitPanelBinding;
SplitPanelBinding.superclass=ControlBoxBinding.prototype;
function SplitPanelBinding(){
this.logger=SystemLogger.getLogger("SplitPanelBinding");
this._containingSplitBoxBinding=null;
this.isCollapsed=false;
this.isFixed=false;
this.isVisible=true;
this._fixedSpan=null;
this.isFlexible=true;
return this;
}
SplitPanelBinding.prototype.toString=function(){
return "[SplitPanelBinding]";
};
SplitPanelBinding.prototype.onBindingAttach=function(){
SplitPanelBinding.superclass.onBindingAttach.call(this);
this._containingSplitBoxBinding=this.getAncestorBindingByLocalName("splitbox");
this.attachClassName(this._containingSplitBoxBinding.getOrient());
this.parseDOMProperties();
};
SplitPanelBinding.prototype.parseDOMProperties=function(){
var type=this.getProperty("type");
if(type){
this.attachClassName(type);
}
var fix=this.getProperty("fix");
if(fix){
this.setFix(fix);
}
var _b59=this.getProperty("hidden");
if(_b59){
this.hide();
}
};
SplitPanelBinding.prototype.collapse=function(){
this.hide();
this.isCollapsed=true;
this.setProperty("collapsed","true");
};
SplitPanelBinding.prototype.unCollapse=function(){
this.show();
this.isCollapsed=false;
this.deleteProperty("collapsed");
};
SplitPanelBinding.prototype.hide=function(){
if(this.isVisible==true){
this.setProperty("ratiocache",this.getRatio());
this.setRatio(0);
this.bindingElement.style.display="none";
this.setProperty("hidden",true);
this.isVisible=false;
}
};
SplitPanelBinding.prototype.show=function(){
if(!this.isVisible){
var _b5a=this.getProperty("ratiocache");
if(_b5a){
this.setRatio(_b5a);
this.deleteProperty("ratiocache");
}else{
this._containingSplitBoxBinding.computeLayout();
}
this.bindingElement.style.display="block";
this.deleteProperty("hidden");
this.isVisible=true;
}
};
SplitPanelBinding.prototype.setWidth=function(_b5b){
if(!this.isFixed){
if(_b5b!=this.getWidth()){
if(_b5b<0){
_b5b=this.getWidth();
this.logger.warn("SplitPanelBinding#setWidth bug in Internet Explorer!");
}
try{
this.bindingElement.style.width=_b5b+"px";
}
catch(exception){
alert("SplitPanelBinding#setWidth: Occult width: "+_b5b);
alert(arguments.caller.callee);
}
}
}
};
SplitPanelBinding.prototype.getWidth=function(){
var _b5c=null;
if(this.isFixed){
_b5c=this.getFix();
}else{
_b5c=this.bindingElement.offsetWidth;
}
return _b5c;
};
SplitPanelBinding.prototype.setHeight=function(_b5d){
if(!this.isFixed){
if(_b5d!=this.getHeight()){
try{
this.bindingElement.style.height=_b5d+"px";
}
catch(exception){
alert("SplitPanelBinding.prototype.setHeight"+arguments.caller.callee);
}
}
}
};
SplitPanelBinding.prototype.getHeight=function(){
var _b5e=null;
if(this.isFixed){
_b5e=this.getFix();
}else{
_b5e=this.bindingElement.offsetHeight;
}
return _b5e;
};
SplitPanelBinding.prototype.setRatio=function(_b5f){
this.setProperty("ratio",_b5f);
};
SplitPanelBinding.prototype.getRatio=function(){
return this.getProperty("ratio");
};
SplitPanelBinding.prototype.setFix=function(_b60){
if(_b60){
this._fixedSpan=_b60;
switch(this._containingSplitBoxBinding.getOrient()){
case SplitBoxBinding.ORIENT_HORIZONTAL:
this.logger.warn("Fix not properly supported on horizontal splitboxes!");
this.setWidth(_b60);
break;
case SplitBoxBinding.ORIENT_VERTICAL:
this.setHeight(_b60);
break;
}
this.isFixed=true;
}else{
this._fixedSpan=null;
this.isFixed=false;
}
};
SplitPanelBinding.prototype.getFix=function(){
return this._fixedSpan;
};
SplitPanelBinding.newInstance=function(_b61){
var _b62=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitpanel",_b61);
return UserInterface.registerBinding(_b62,SplitPanelBinding);
};
SplitterBinding.prototype=new Binding;
SplitterBinding.prototype.constructor=SplitterBinding;
SplitterBinding.superclass=Binding.prototype;
SplitterBinding.DIMENSION=8;
SplitterBinding.BUFFER=30;
SplitterBinding.COLLAPSE_AFTER="after";
SplitterBinding.COLLAPSE_BEFORE="before";
SplitterBinding.ACTION_DRAGSTART="splitter dragstart";
SplitterBinding.ACTION_DRAGGED="splitter dragged";
SplitterBinding.ACTION_COLLAPSE="splitter collapse";
SplitterBinding.ACTION_UNCOLLAPSE="splitter uncollapse";
SplitterBinding.CLASSNAME_ACTIVE="active";
SplitterBinding.CLASSNAME_HOVER="hover";
function SplitterBinding(){
this.logger=SystemLogger.getLogger("SplitterBinding");
this.isDraggable=true;
this.isDragging=false;
this.isCollapsed=false;
this.isDisabled=true;
this._containingSplitBoxBinding=null;
this._collapseDirection=SplitterBinding.COLLAPSE_AFTER;
this.offset=null;
return this;
}
SplitterBinding.prototype.toString=function(){
return "[SplitterBinding]";
};
SplitterBinding.prototype.serialize=function(){
var _b63=SplitBoxBinding.superclass.serialize.call(this);
if(_b63){
_b63.collapse=this.getProperty("collapse");
_b63.collapsed=this.getProperty("collapsed");
_b63.disabled=this.getProperty("isdisabled");
}
return _b63;
};
SplitterBinding.prototype.onBindingAttach=function(){
SplitterBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_DRAG);
this._containingSplitBoxBinding=this.getAncestorBindingByLocalName("splitbox");
this.attachClassName(this._containingSplitBoxBinding.getOrient());
this._collapseDirection=this.getProperty("collapse");
this.buildDOMContent();
this.attachDOMEvents();
var _b64=this.getProperty("hidden");
if(_b64){
this.hide();
}
};
SplitterBinding.prototype.buildDOMContent=function(){
this.shadowTree.splitterBody=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitterbody",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.splitterBody);
if(Client.isMozilla==true){
var text=this.bindingDocument.createTextNode("!");
this.bindingElement.appendChild(text);
}
};
SplitterBinding.prototype.attachDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
};
SplitterBinding.prototype.collapse=function(){
if(!this.isCollapsed){
this.hide();
this.setProperty("collapsed","true");
this.isCollapsed=true;
this.dispatchAction(SplitterBinding.ACTION_COLLAPSE);
}
};
SplitterBinding.prototype.unCollapse=function(){
if(this.isCollapsed==true){
this.show();
this.deleteProperty("collapsed");
this.isCollapsed=false;
this.dispatchAction(SplitterBinding.ACTION_UNCOLLAPSE);
}
};
SplitterBinding.prototype.getCollapseDirection=function(){
return this._collapseDirection;
};
SplitterBinding.prototype.setCollapseDirection=function(_b66){
this.setProperty("collapse",_b66);
this._collapseDirection=_b66;
};
SplitterBinding.prototype.handleAction=function(_b67){
SplitterBinding.superclass.handleAction.call(this,_b67);
switch(_b67.type){
case Binding.ACTION_DRAG:
this.dragger.registerHandler(this);
_b67.consume();
break;
}
};
SplitterBinding.prototype.handleEvent=function(e){
SplitterBinding.superclass.handleEvent.call(this,e);
var _b69=this;
if(!this.isDragging&&!this.isDisabled){
switch(e.type){
case DOMEvents.MOUSEOVER:
window.splitterTimeout=window.setTimeout(function(){
_b69.shadowTree.splitterBody.className=SplitterBinding.CLASSNAME_HOVER;
},250);
break;
case DOMEvents.MOUSEOUT:
if(window.splitterTimeout){
window.clearTimeout(window.splitterTimeout);
}
if(_b69.shadowTree.splitterBody.className==SplitterBinding.CLASSNAME_HOVER){
this.shadowTree.splitterBody.className="";
}
break;
}
}
};
SplitterBinding.prototype.onDragStart=function(_b6a){
this.attachClassName(SplitterBinding.CLASSNAME_ACTIVE);
this.shadowTree.splitterBody.className=SplitterBinding.CLASSNAME_ACTIVE;
this.isDragging=true;
};
SplitterBinding.prototype.onDrag=function(diff){
diff=this.getEvaluatedDiff(diff);
if(this._containingSplitBoxBinding.isHorizontalOrient()){
this.shadowTree.splitterBody.style.left=diff.x+"px";
}else{
this.shadowTree.splitterBody.style.top=diff.y+"px";
}
};
SplitterBinding.prototype.onDragStop=function(diff){
diff=this.getEvaluatedDiff(diff);
this.offset=this._containingSplitBoxBinding.isHorizontalOrient()?diff.x:diff.y;
this.dispatchAction(SplitterBinding.ACTION_DRAGGED);
this.offset=null;
this.detachClassName(SplitterBinding.CLASSNAME_ACTIVE);
this.shadowTree.splitterBody.className="";
this.isDragging=false;
if(this._containingSplitBoxBinding.isHorizontalOrient()){
this.shadowTree.splitterBody.style.left="0";
}else{
this.shadowTree.splitterBody.style.top="0";
}
};
SplitterBinding.prototype.getEvaluatedDiff=function(diff){
switch(this._containingSplitBoxBinding.getOrient()){
case SplitBoxBinding.ORIENT_HORIZONTAL:
var x=this.bindingElement.offsetLeft;
var w=this.bindingElement.offsetWidth;
var t=this.bindingElement.parentNode.offsetWidth;
var min=-x+SplitterBinding.BUFFER;
var max=t-x-w-SplitterBinding.BUFFER;
diff.x=diff.x<=min?min:diff.x;
diff.x=diff.x>=max?max:diff.x;
break;
case SplitBoxBinding.ORIENT_VERTICAL:
var y=this.bindingElement.offsetTop;
var h=this.bindingElement.offsetHeight;
var t=this.bindingElement.parentNode.offsetHeight;
var min=-y+SplitterBinding.BUFFER;
var max=t-y-h-SplitterBinding.BUFFER;
diff.y=diff.y<=min?min:diff.y;
diff.y=diff.y>=max?max:diff.y;
break;
}
return diff;
};
SplitterBinding.prototype.disable=function(){
if(!this.isDisabled){
alert("disable");
this.isDisabled=true;
this.disableDragging();
this.setProperty("isdisabled",true);
}
};
SplitterBinding.prototype.enable=function(){
if(this.isDisabled==true){
this.isDisabled=false;
this.enableDragging();
this.deleteProperty("isdisabled");
}
};
SplitterBinding.newInstance=function(_b75){
var _b76=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitter",_b75);
return UserInterface.registerBinding(_b76,SplitterBinding);
};
DecksBinding.prototype=new FlexBoxBinding;
DecksBinding.prototype.constructor=DecksBinding;
DecksBinding.superclass=FlexBoxBinding.prototype;
DecksBinding.ACTION_SELECTED="decks deck selected";
DecksBinding.NODENAME_DECK="deck";
function DecksBinding(){
this.logger=SystemLogger.getLogger("DecksBinding");
this._selectedDeckBinding=null;
this._lastKnownDimension=null;
}
DecksBinding.prototype.toString=function(){
return "[DecksBinding]";
};
DecksBinding.prototype.onBindingRegister=function(){
DecksBinding.superclass.onBindingRegister.call(this);
this._lastKnownDimension=new Dimension(0,0);
this.attachClassName("deckselement");
};
DecksBinding.prototype.onBindingAttach=function(){
DecksBinding.superclass.onBindingAttach.call(this);
var _b77=this.getProperty("selectedindex");
var _b78=this.getDeckElements();
if(_b78.hasEntries()){
var _b79=false;
var _b7a=0;
while(_b78.hasNext()){
var deck=_b78.getNext();
if(_b77&&_b7a==_b77){
deck.setAttribute("selected","true");
_b79=true;
}else{
if(deck.getAttribute("selected")=="true"){
_b79=true;
}
}
_b7a++;
}
if(!_b79){
_b78.getFirst().setAttribute("selected","true");
}
}
};
DecksBinding.prototype.getDeckElements=function(){
return this.getChildElementsByLocalName(this.constructor.NODENAME_DECK);
};
DecksBinding.prototype.select=function(arg){
var _b7d=this.getBindingForArgument(arg);
if(_b7d!=null){
if(_b7d!=this._selectedDeckBinding){
if(this._selectedDeckBinding){
this._selectedDeckBinding.unselect();
}
_b7d.select();
this._selectedDeckBinding=_b7d;
var _b7e=this.getProperty("selectedindex");
if(_b7e!=null){
this.setProperty("selectedindex",DOMUtil.getOrdinalPosition(_b7d.bindingElement,true));
}
this.dispatchAction(DecksBinding.ACTION_SELECTED);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
}else{
throw "No deck for argument "+arg;
}
};
DecksBinding.prototype.hasDimensionsChanged=function(){
var _b7f=false;
var dim1=this.boxObject.getDimension();
var dim2=this._lastKnownDimension;
if(!Dimension.isEqual(dim1,dim2)){
_b7f=true;
this._lastKnownDimension=dim1;
}
return _b7f;
};
DecksBinding.prototype.getSelectedDeckBinding=function(){
return this._selectedDeckBinding;
};
DecksBinding.newInstance=function(_b82){
var _b83=DOMUtil.createElementNS(Constants.NS_UI,"ui:decks",_b82);
return UserInterface.registerBinding(_b83,DecksBinding);
};
DeckBinding.prototype=new FlexBoxBinding;
DeckBinding.prototype.constructor=DeckBinding;
DeckBinding.superclass=FlexBoxBinding.prototype;
DeckBinding.ACTION_SELECTED="deck selected";
DeckBinding.ACTION_UNSELECTED="deck unselected";
DeckBinding.NODENAME_DECKS="decks";
DeckBinding.CLASSNAME="deckelement";
function DeckBinding(){
this.logger=SystemLogger.getLogger("DeckBinding");
this.isSelected=false;
this.isVisible=false;
this.containingDecksBinding=null;
return this;
}
DeckBinding.prototype.toString=function(){
return "[DeckBinding]";
};
DeckBinding.prototype.onBindingRegister=function(){
DeckBinding.superclass.onBindingRegister.call(this);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
this.attachClassName(DeckBinding.CLASSNAME);
};
DeckBinding.prototype.onBindingAttach=function(){
DeckBinding.superclass.onBindingAttach.call(this);
this.containingDecksBinding=this.getAncestorBindingByLocalName(this.constructor.NODENAME_DECKS);
if(this.getProperty("selected")==true){
this.containingDecksBinding.select(this);
}
};
DeckBinding.prototype.handleAction=function(_b84){
DeckBinding.superclass.handleAction.call(this,_b84);
var _b85=_b84.target;
switch(_b84.type){
case BalloonBinding.ACTION_INITIALIZE:
_b84.consume();
break;
}
};
DeckBinding.prototype.select=function(){
if(!this.isSelected){
if(this.isLazy==true){
this.wakeUp("select");
}else{
this.isSelected=true;
this.isVisible=true;
this.setProperty("selected","true");
this.bindingElement.style.position="static";
this._invokeManagedRecursiveFlex();
this.dispatchAction(DeckBinding.ACTION_SELECTED);
var root=UserInterface.getBinding(this.bindingDocument.body);
if(root.isActivated){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
}
}
};
DeckBinding.prototype.unselect=function(){
if(this.isSelected){
this.dispatchAction(FocusBinding.ACTION_BLUR);
this.deleteProperty("selected");
this.isSelected=false;
this.isVisible=false;
this.bindingElement.style.position="absolute";
this.dispatchAction(DeckBinding.ACTION_UNSELECTED);
}
};
DeckBinding.prototype._invokeManagedRecursiveFlex=function(){
this.reflex(true);
};
DeckBinding.newInstance=function(_b87){
var _b88=DOMUtil.createElementNS(Constants.NS_UI,"ui:deck",_b87);
return UserInterface.registerBinding(_b88,DeckBinding);
};
ToolBarBinding.prototype=new Binding;
ToolBarBinding.prototype.constructor=ToolBarBinding;
ToolBarBinding.superclass=Binding.prototype;
ToolBarBinding.TYPE_TEXTONLY="textonly";
ToolBarBinding.TYPE_IMAGESONLY="imagesonly";
ToolBarBinding.TYPE_DEFAULT="imagesandtext";
ToolBarBinding.CLASSNAME_TEXTONLY="textonly";
ToolBarBinding.CLASSNAME_IMAGESONLY="imagesonly";
ToolBarBinding.CLASSNAME_IMAGESIZELARGE="imagesizelarge";
ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE="imagesizexlarge";
ToolBarBinding.IMAGESIZE_NORMAL="normal";
ToolBarBinding.IMAGESIZE_LARGE="large";
ToolBarBinding.IMAGESIZE_XLARGE="xlarge";
function ToolBarBinding(){
this.logger=SystemLogger.getLogger("ToolBarBinding");
this.hasImages=true;
this.hasText=true;
this._imageSize=ToolBarBinding.IMAGESIZE_NORMAL;
this.type=ToolBarBinding.TYPE_DEFAULT;
this._hasDefaultContent=true;
this._toolBarBodyRight=null;
this._toolBarBodyLeft=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
this._hasDOMContent=false;
return this;
}
ToolBarBinding.prototype.toString=function(){
return "[ToolBarBinding]";
};
ToolBarBinding.prototype.onBindingRegister=function(){
ToolBarBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
ToolBarBinding.prototype.onBindingAttach=function(){
ToolBarBinding.superclass.onBindingAttach.call(this);
this.parseDOMProperties();
this.buildDOMContent();
this.addMembers(this.getChildBindingsByLocalName("toolbarbody"));
};
ToolBarBinding.prototype.onMemberInitialize=function(_b89){
if(_b89 instanceof ToolBarBodyBinding){
if(_b89.isRightAligned){
if(!this._toolBarBodyRight){
this._toolBarBodyRight=_b89;
}
}else{
if(!this._toolBarBodyLeft){
this._toolBarBodyLeft=_b89;
}
}
}
ToolBarBinding.superclass.onMemberInitialize.call(this,_b89);
};
ToolBarBinding.prototype.parseDOMProperties=function(){
var _b8a=this.getProperty("imagesize");
var type=this.getProperty("type");
if(_b8a){
this.setImageSize(_b8a);
}
if(type){
this.setType(type);
}else{
this.setType(this.type);
}
};
ToolBarBinding.prototype.buildDOMContent=function(){
if(this._hasDefaultContent==true&&!this._hasDOMContent){
var _b8c=ToolBarGroupBinding.newInstance(this.bindingDocument);
_b8c.add(ToolBarButtonBinding.newInstance(this.bindingDocument));
_b8c.isDefaultContent=true;
this.add(_b8c);
_b8c.attachRecursive();
this._hasDOMContent=true;
}
};
ToolBarBinding.prototype.flex=function(){
var left=this._toolBarBodyLeft;
var _b8e=this._toolBarBodyRight;
if(left!=null&&left.hasClassName("max")){
this._maxToolBarGroup(left,_b8e);
}
if(_b8e!=null&&_b8e.hasClassName("max")){
this._maxToolBarGroup(_b8e,left);
}
};
ToolBarBinding.prototype._maxToolBarGroup=function(max,_b90){
var _b91=this.boxObject.getDimension().w;
var _b92=CSSComputer.getPadding(this.bindingElement);
_b91-=(_b92.left+_b92.right);
if(_b90!=null){
_b91-=_b90.boxObject.getDimension().w;
if(!Client.isWindows){
_b91-=1;
}
if(Client.isExplorer){
_b91-=15;
}
}
max.bindingElement.style.width=_b91+"px";
};
ToolBarBinding.prototype.getToolBarGroupByIndex=function(_b93){
return this.getDescendantBindingsByLocalName("toolbargroup").get(_b93);
};
ToolBarBinding.prototype.addLeft=function(_b94,_b95){
var _b96=null;
if(this._toolBarBodyLeft!=null){
_b96=this._toolBarBodyLeft.add(_b94,_b95);
}else{
throw new Error("No left toolbarbody");
}
return _b96;
};
ToolBarBinding.prototype.addLeftFirst=function(_b97,_b98){
var _b99=null;
if(this._toolBarBodyLeft){
_b99=this._toolBarBodyLeft.addFirst(_b97,_b98);
}else{
throw new Error("No left toolbarbody");
}
return _b99;
};
ToolBarBinding.prototype.addRight=function(_b9a){
var _b9b=null;
if(this._toolBarBodyRight){
_b9b=this._toolBarBodyRight.add(_b9a);
}else{
throw new Error("No left toolbarbody");
}
return _b9b;
};
ToolBarBinding.prototype.empty=function(){
this.emptyLeft();
this.emptyRight();
};
ToolBarBinding.prototype.emptyLeft=function(){
if(this._toolBarBodyLeft){
this._toolBarBodyLeft.empty();
}
};
ToolBarBinding.prototype.emptyRight=function(){
if(this._toolBarBodyRight){
this._toolBarBodyRight.empty();
}
};
ToolBarBinding.prototype.setImageSize=function(size){
switch(size){
case ToolBarBinding.IMAGESIZE_LARGE:
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
break;
case ToolBarBinding.IMAGESIZE_XLARGE:
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
break;
default:
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
break;
}
this._imageSize=size;
this.setProperty("imagesize",size);
};
ToolBarBinding.prototype.getImageSize=function(){
return this._imageSize;
};
ToolBarBinding.prototype.showImagesOnly=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.hasImages=true;
this.hasText=false;
};
ToolBarBinding.prototype.showTextOnly=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.attachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.hasImages=false;
this.hasText=true;
};
ToolBarBinding.prototype.showBoth=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.hasImages=true;
this.hasText=true;
};
ToolBarBinding.prototype.setType=function(type){
switch(type){
case ToolBarBinding.TYPE_TEXTONLY:
this.showTextOnly();
break;
case ToolBarBinding.TYPE_IMAGESONLY:
this.showImagesOnly();
break;
default:
this.showBoth();
break;
}
this.setProperty("type",type);
};
ToolBarBinding.newInstance=function(_b9e){
var _b9f=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbar",_b9e);
return UserInterface.registerBinding(_b9f,ToolBarBinding);
};
ToolBarBodyBinding.prototype=new Binding;
ToolBarBodyBinding.prototype.constructor=ToolBarBodyBinding;
ToolBarBodyBinding.superclass=Binding.prototype;
function ToolBarBodyBinding(){
this.logger=SystemLogger.getLogger("ToolBarBodyBinding");
this.isRightAligned=false;
return this;
}
ToolBarBodyBinding.prototype.toString=function(){
return "[ToolBarBodyBinding]";
};
ToolBarBodyBinding.prototype.onBindingAttach=function(){
ToolBarBodyBinding.superclass.onBindingAttach.call(this);
this.addMembers(this.getChildBindingsByLocalName("toolbargroup"));
if(this.getProperty("align")=="right"||this.isRightAligned){
this.alignRight();
}
};
ToolBarBodyBinding.prototype.onBindingInitialize=function(){
this.refreshToolBarGroups();
ToolBarBodyBinding.superclass.onBindingInitialize.call(this);
};
ToolBarBodyBinding.prototype.alignRight=function(){
this.attachClassName("alignright");
this.setProperty("align","right");
this.isRightAligned=true;
};
ToolBarBodyBinding.prototype.refreshToolBarGroups=function(){
var _ba0=this.getDescendantBindingsByLocalName("toolbargroup");
var _ba1=new List();
var _ba2=true;
_ba0.each(function(_ba3){
if(_ba3.isVisible&&!_ba3.isDefaultContent){
_ba1.add(_ba3);
}
});
while(_ba1.hasNext()){
var _ba4=_ba1.getNext();
_ba4.setLayout(ToolBarGroupBinding.LAYOUT_DEFAULT);
if(_ba2){
_ba4.setLayout(ToolBarGroupBinding.LAYOUT_FIRST);
_ba2=false;
}
if(!_ba1.hasNext()){
_ba4.setLayout(ToolBarGroupBinding.LAYOUT_LAST);
}
}
if(this.getProperty("equalsize")){
this.enforceEqualSize();
}
};
ToolBarBodyBinding.prototype.enforceEqualSize=function(){
var max=0,list=this.getDescendantBindingsByLocalName("clickbutton");
while(list.hasNext()){
var _ba7=list.getNext();
var _ba8=_ba7.getEqualSizeWidth();
if(_ba8>max){
max=_ba8;
}
}
if(max!=0){
list.reset();
while(list.hasNext()){
var _ba7=list.getNext();
_ba7.setEqualSizeWidth(max);
}
}
};
ToolBarBodyBinding.prototype.empty=function(){
this.detachRecursive();
this.bindingElement.innerHTML="";
};
ToolBarBodyBinding.prototype.add=function(_ba9,_baa){
var _bab=ToolBarBinding.superclass.add.call(this,_ba9);
if(!_baa){
if(_ba9 instanceof ToolBarGroupBinding&&this.isAttached){
this.refreshToolBarGroups();
}
}
return _bab;
};
ToolBarBodyBinding.prototype.addFirst=function(_bac,_bad){
var _bae=ToolBarBinding.superclass.addFirst.call(this,_bac);
if(!_bad){
if(_bac instanceof ToolBarGroupBinding&&this.isAttached){
this.refreshToolBarGroups();
}
}
return _bae;
};
ToolBarBodyBinding.newInstance=function(_baf){
var _bb0=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbody",_baf);
return UserInterface.registerBinding(_bb0,ToolBarBodyBinding);
};
ToolBarGroupBinding.prototype=new RadioGroupBinding;
ToolBarGroupBinding.prototype.constructor=ToolBarGroupBinding;
ToolBarGroupBinding.superclass=RadioGroupBinding.prototype;
ToolBarGroupBinding.LAYOUT_DEFAULT=0;
ToolBarGroupBinding.LAYOUT_FIRST=1;
ToolBarGroupBinding.LAYOUT_LAST=2;
ToolBarGroupBinding.CLASSNAME_DEFAULTCONTENT="defaultcontent";
function ToolBarGroupBinding(){
this.logger=SystemLogger.getLogger("ToolBarGroupBinding");
this.isDefaultContent=false;
}
ToolBarGroupBinding.prototype.toString=function(){
return "[ToolBarGroupBinding]";
};
ToolBarGroupBinding.prototype.onBindingAttach=function(){
ToolBarGroupBinding.superclass.onBindingAttach.call(this);
this.addMembers(this.getDescendantBindingsByLocalName("toolbarbutton"));
this.addMembers(this.getDescendantBindingsByLocalName("toolbarlabel"));
this.addMembers(this.getDescendantBindingsByLocalName("clickbutton"));
if(this.isDefaultContent==true){
this.attachClassName(ToolBarGroupBinding.CLASSNAME_DEFAULTCONTENT);
}
};
ToolBarGroupBinding.prototype.setLayout=function(_bb1){
switch(_bb1){
case ToolBarGroupBinding.LAYOUT_DEFAULT:
this.detachClassName("first");
this.detachClassName("last");
break;
case ToolBarGroupBinding.LAYOUT_FIRST:
this.attachClassName("first");
break;
case ToolBarGroupBinding.LAYOUT_LAST:
this.attachClassName("last");
break;
}
};
ToolBarGroupBinding.prototype.show=function(){
ToolBarGroupBinding.superclass.show.call(this);
var _bb2=this.bindingElement.parentNode;
if(DOMUtil.getLocalName(_bb2)=="toolbarbody"){
UserInterface.getBinding(_bb2).refreshToolBarGroups();
}
};
ToolBarGroupBinding.prototype.hide=function(){
ToolBarGroupBinding.superclass.hide.call(this);
var _bb3=this.bindingElement.parentNode;
if(DOMUtil.getLocalName(_bb3)=="toolbarbody"){
UserInterface.getBinding(_bb3).refreshToolBarGroups();
}
};
ToolBarGroupBinding.newInstance=function(_bb4){
var _bb5=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbargroup",_bb4);
return UserInterface.registerBinding(_bb5,ToolBarGroupBinding);
};
ToolBarButtonBinding.prototype=new ButtonBinding;
ToolBarButtonBinding.prototype.constructor=ToolBarButtonBinding;
ToolBarButtonBinding.superclass=ButtonBinding.prototype;
function ToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBarButtonBinding");
}
ToolBarButtonBinding.prototype.toString=function(){
return "[ToolBarButtonBinding]";
};
ToolBarButtonBinding.newInstance=function(_bb6){
var _bb7=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_bb6);
return UserInterface.registerBinding(_bb7,ToolBarButtonBinding);
};
ToolBarLabelBinding.prototype=new Binding;
ToolBarLabelBinding.prototype.constructor=ToolBarLabelBinding;
ToolBarLabelBinding.superclass=Binding.prototype;
function ToolBarLabelBinding(){
this.logger=SystemLogger.getLogger("ToolBarLabelBinding");
}
ToolBarLabelBinding.prototype.toString=function(){
return "[ToolBarLabelBinding]";
};
ToolBarLabelBinding.prototype.onBindingAttach=function(){
ToolBarLabelBinding.superclass.onBindingAttach.call(this);
this._labelBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
this.shadowTree.label=this._labelBinding;
var _bb8=this.getProperty("label");
var _bb9=this.getProperty("image");
if(_bb8){
this.setLabel(_bb8);
}
if(_bb9){
this.setImage(_bb9);
}
};
ToolBarLabelBinding.prototype.setLabel=function(_bba,_bbb){
if(this.isAttached){
this._labelBinding.setLabel(_bba,_bbb);
}
this.setProperty("label",_bba);
};
ToolBarLabelBinding.prototype.setImage=function(_bbc,_bbd){
if(this.isAttached){
this._labelBinding.setImage(_bbc,_bbd);
}
this.setProperty("image",_bbc);
};
ToolBarLabelBinding.newInstance=function(_bbe){
var _bbf=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarlabel",_bbe);
return UserInterface.registerBinding(_bbf,ToolBarLabelBinding);
};
DialogToolBarBinding.prototype=new ToolBarBinding;
DialogToolBarBinding.prototype.constructor=DialogToolBarBinding;
DialogToolBarBinding.superclass=ToolBarBinding.prototype;
function DialogToolBarBinding(){
this.logger=SystemLogger.getLogger("DialogToolBarBinding");
this._buttons=null;
this._defaultButton=null;
this._focusedButton=null;
this._isListening=false;
this.crawlerFilters=new List([FlexBoxCrawler.ID]);
return this;
}
DialogToolBarBinding.prototype.toString=function(){
return "[DialogToolBarBinding]";
};
DialogToolBarBinding.prototype.onBindingRegister=function(){
DialogToolBarBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(Binding.ACTION_BLURRED);
};
DialogToolBarBinding.prototype.onBindingDispose=function(){
DialogToolBarBinding.superclass.onBindingDispose.call(this);
if(this._isListening==true){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
}
};
DialogToolBarBinding.prototype.onBindingInitialize=function(){
this.indexDialogButtons();
DialogToolBarBinding.superclass.onBindingInitialize.call(this);
};
DialogToolBarBinding.prototype.indexDialogButtons=function(){
var _bc0=this.getDescendantBindingsByLocalName("clickbutton");
if(_bc0.hasEntries()){
while(_bc0.hasNext()){
var _bc1=_bc0.getNext();
if(_bc1.isDefault){
this._defaultButton=_bc1;
_bc1.attachClassName(ButtonBinding.CLASSNAME_DEFAULT);
}
if(!this._isListening&&_bc1.isFocusable){
this.subscribe(BroadcastMessages.KEY_ENTER);
this._isListening=true;
}
}
this._buttons=_bc0;
}
};
DialogToolBarBinding.prototype.handleBroadcast=function(_bc2,arg){
DialogToolBarBinding.superclass.handleBroadcast.call(this,_bc2,arg);
switch(_bc2){
case BroadcastMessages.KEY_ENTER:
if(!PopupBinding.hasActiveInstances()&&!EditorBinding.isActive){
if(Binding.exists(this)){
var _bc4=this.getAncestorBindingByType(DialogBinding,true);
if(_bc4!=null&&_bc4.isActive){
if(this._focusedButton!=null){
if(!this._focusedButton.isDisabled){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._focusedButton.fireCommand();
}
}else{
if(!this._defaultButton.isDisabled){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._defaultButton.fireCommand();
}
}
}
}else{
this.logger.error("Ouch: DialogToolBarBinding#handleBroadcast");
}
}
break;
}
};
DialogToolBarBinding.prototype.handleAction=function(_bc5){
DialogToolBarBinding.superclass.handleAction.call(this,_bc5);
var _bc6=_bc5.target;
var _bc7=false;
var _bc8=this._buttons.reset();
if(_bc6 instanceof ClickButtonBinding){
switch(_bc5.type){
case Binding.ACTION_FOCUSED:
_bc6.attachClassName(ButtonBinding.CLASSNAME_FOCUSED);
this._focusedButton=_bc6;
if(this._defaultButton){
this._defaultButton.detachClassName(ButtonBinding.CLASSNAME_DEFAULT);
}
break;
case Binding.ACTION_BLURRED:
_bc6.detachClassName(ButtonBinding.CLASSNAME_FOCUSED);
break;
}
}
if(this._defaultButton){
while(!_bc7&&_bc8.hasNext()){
var _bc9=_bc8.getNext();
_bc7=_bc9.isFocused;
}
if(!_bc7){
this._defaultButton.attachClassName(ButtonBinding.CLASSNAME_DEFAULT);
this._focusedButton=null;
}
}
};
ComboBoxBinding.prototype=new Binding;
ComboBoxBinding.prototype.constructor=ComboBoxBinding;
ComboBoxBinding.superclass=Binding.prototype;
function ComboBoxBinding(){
this.logger=SystemLogger.getLogger("ComboBoxBinding");
return this;
}
ComboBoxBinding.prototype.toString=function(){
return "[ComboBoxBinding]";
};
ComboBoxBinding.prototype.onBindingAttach=function(){
ComboBoxBinding.superclass.onBindingAttach.call(this);
var text=this.bindingDocument.createTextNode(Resolver.resolve("\u25bc"));
this.bindingElement.appendChild(text);
};
ComboBoxBinding.newInstance=function(_bcb){
var _bcc=DOMUtil.createElementNS(Constants.NS_UI,"ui:combobox",_bcb);
return UserInterface.registerBinding(_bcc,ComboBoxBinding);
};
ToolBarComboButtonBinding.prototype=new ToolBarButtonBinding;
ToolBarComboButtonBinding.prototype.constructor=ToolBarComboButtonBinding;
ToolBarComboButtonBinding.superclass=ToolBarButtonBinding.prototype;
ToolBarComboButtonBinding.CLASSNAME_COMBOBUTTON="combobutton";
function ToolBarComboButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBarComboButtonBinding");
this.isComboButton=true;
this.isCheckButton=true;
return this;
}
ToolBarComboButtonBinding.prototype.toString=function(){
return "[ToolBarComboButtonBinding]";
};
ToolBarComboButtonBinding.prototype.onBindingAttach=function(){
ToolBarComboButtonBinding.superclass.onBindingAttach.call(this);
this.comboBoxBinding=ComboBoxBinding.newInstance(this.bindingDocument);
this.add(this.comboBoxBinding);
this.comboBoxBinding.attach();
this.attachClassName(ToolBarComboButtonBinding.CLASSNAME_COMBOBUTTON);
};
ToolBarComboButtonBinding.prototype.handleBroadcast=function(_bcd,arg){
ToolBarComboButtonBinding.superclass.handleBroadcast.call(this,_bcd,arg);
};
ToolBarComboButtonBinding.prototype.setPopup=function(arg){
ToolBarComboButtonBinding.superclass.setPopup.call(this,arg);
var self=this;
var _bd1=this.popupBinding.getDescendantBindingsByType(MenuItemBinding);
_bd1.each(function(_bd2){
var _bd3=_bd2.getProperty("oncommand");
_bd2.setProperty("hiddencommand",_bd3);
_bd2.deleteProperty("oncommand");
_bd2.oncommand=function(){
self.setAndFireButton(this);
};
});
var _bd4=null;
var _bd5=this.getActiveMenuItemId();
_bd1.reset();
while(_bd1.hasNext()){
var _bd6=_bd1.getNext();
if(_bd6.getProperty("id")==_bd5){
_bd4=_bd6;
break;
}
}
if(_bd4==null&&_bd1.hasEntries()){
_bd4=_bd1.getFirst();
}
if(_bd4!=null){
this.setButton(_bd4);
}
};
ToolBarComboButtonBinding.prototype.setButton=function(_bd7){
if(_bd7 instanceof MenuItemBinding){
var _bd8=_bd7.getProperty("label");
var _bd9=_bd7.getProperty("image");
var _bda=_bd7.getProperty("image-hover");
var _bdb=_bd7.getProperty("image-active");
var _bdc=_bd7.getProperty("image-disabled");
var _bdd=_bd7.getProperty("hiddencommand");
this.setLabel(_bd8?_bd8:"");
this.image=_bd9;
this.imageHover=_bd9;
this.imageActive=_bdb;
this.imageDisabled=_bdc;
this.imageProfile=new ImageProfile(this);
this._stateManager.imageProfile=this.imageProfile;
this.setImage(this.imageProfile.getDefaultImage());
this.oncommand=function(){
Binding.evaluate(_bdd,this);
};
this.hideActiveItem(_bd7);
}
};
ToolBarComboButtonBinding.prototype.setAndFireButton=function(_bde){
if(_bde instanceof MenuItemBinding){
this.setButton(_bde);
this.setActiveMenuItemId(_bde.getProperty("id"));
this.fireCommand();
}
};
ToolBarComboButtonBinding.prototype.hideActiveItem=function(_bdf){
this.popupBinding.getDescendantBindingsByType(MenuItemBinding).each(function(_be0){
if(_be0==_bdf){
Binding.prototype.hide.call(_be0);
}else{
Binding.prototype.show.call(_be0);
}
});
};
ToolBarComboButtonBinding.prototype.setActiveMenuItemId=function(id){
Cookies.createCookie(this.getProperty("id"),id,365);
};
ToolBarComboButtonBinding.prototype.getActiveMenuItemId=function(){
return Cookies.readCookie(this.getProperty("id"));
};
ToolBoxToolBarButtonBinding.prototype=new ToolBarButtonBinding;
ToolBoxToolBarButtonBinding.prototype.constructor=ToolBoxToolBarButtonBinding;
ToolBoxToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
function ToolBoxToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBoxToolBarButtonBinding");
this._views=new Map();
this._lastGeneratedPerspective=null;
return this;
}
ToolBoxToolBarButtonBinding.prototype.toString=function(){
return "[ToolBoxToolBarButtonBinding]";
};
ToolBoxToolBarButtonBinding.prototype.onBindingAttach=function(){
ToolBoxToolBarButtonBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.subscribe(BroadcastMessages.PERSPECTIVE_CHANGED);
var _be2=this._views;
for(var _be3 in ViewDefinitions){
var def=ViewDefinitions[_be3];
var key=def.perspective;
if(key!=null){
if(!_be2.has(key)){
_be2.set(key,new List());
}
var list=_be2.get(key);
list.add(def);
}
}
}else{
this.hide();
}
};
ToolBoxToolBarButtonBinding.prototype.handleBroadcast=function(_be7,arg){
ToolBoxToolBarButtonBinding.superclass.handleBroadcast.call(this,_be7,arg);
switch(_be7){
case BroadcastMessages.PERSPECTIVE_CHANGED:
var tag=arg;
if(tag!=this._lastGeneratedPerspective){
this._lastGeneratedPerspective=tag;
var _bea=this.bindingWindow.bindingMap.toolboxpopupgroup;
_bea.empty();
if(this._views.has(tag)){
var list=this._views.get(tag);
list.each(function(def){
var item=_bea.add(StageViewMenuItemBinding.newInstance(_bea.bindingDocument));
item.setType(MenuItemBinding.TYPE_CHECKBOX);
item.setHandle(def.handle);
item.setLabel(def.label);
item.setImage(def.image);
item.setToolTip(def.toolTip);
item.attach();
});
_bea.show();
}else{
_bea.hide();
}
}
break;
}
};
TreeBinding.prototype=new FlexBoxBinding;
TreeBinding.prototype.constructor=TreeBinding;
TreeBinding.superclass=FlexBoxBinding.prototype;
TreeBinding.ACTION_SELECTIONCHANGED="tree selection changed";
TreeBinding.ACTION_NOSELECTION="tree selection none";
TreeBinding.SELECTIONTYPE_SINGLE="single";
TreeBinding.SELECTIONTYPE_MULTIPLE="multiple";
TreeBinding.grid=function(_bee){
var _bef=TreeNodeBinding.HEIGHT;
var ceil=Math.ceil(_bee);
var _bf1=_bee%_bef;
if(_bf1>0){
_bee=_bee-_bf1+_bef;
}
return _bee+TreeBodyBinding.PADDING_TOP;
};
function TreeBinding(){
this.logger=SystemLogger.getLogger("TreeBinding");
this.isFocusable=true;
this.isFocused=false;
this._treeBodyBinding=null;
this._positionIndicatorBinding=null;
this._treeNodeBuffer=null;
this._treeNodeBindings=null;
this._focusedTreeNodeBindings=null;
this._isFocusable=true;
this._isSelectable=false;
this._selectionProperty=null;
this._selectonValue=null;
this._selectedTreeNodeBindings=null;
this._selectionType=TreeBinding.SELECTIONTYPE_SINGLE;
this._actionFilter=null;
this._acceptingPosition=null;
this._acceptingDimension=null;
this._acceptingTreeNodeBinding=null;
this._acceptingPositions=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
this._hasKeyboard=false;
this._yposition=0;
this._openTreeNodesBackupMap=null;
return this;
}
TreeBinding.prototype.toString=function(){
return "[TreeBinding]";
};
TreeBinding.prototype.onBindingRegister=function(){
TreeBinding.superclass.onBindingRegister.call(this);
this._treeNodeBindings=new Map();
this._treeNodeBuffer=new List();
this._focusedTreeNodeBindings=new List();
};
TreeBinding.prototype.onBindingAttach=function(){
TreeBinding.superclass.onBindingAttach.call(this);
var _bf2=this.getProperty("focusable");
if(_bf2!=null){
this._isFocusable=_bf2;
}
if(!this._treeBodyBinding){
this._treeBodyBinding=this.addMember(this.getChildBindingByLocalName("treebody"));
}
if(!this._treeBodyBinding){
var cry="TreeBinding structure invalid. Missing TreeBodyBinding.";
this.logger.error(cry);
if(Application.isDeveloperMode){
alert(cry);
}
}else{
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(TreeNodeBinding.ACTION_OPEN);
this.addActionListener(TreeNodeBinding.ACTION_CLOSE);
this.addActionListener(TreeNodeBinding.ACTION_DISPOSE);
if(this._isFocusable){
this.addActionListener(TreeNodeBinding.ACTION_ONFOCUS);
this.addActionListener(TreeNodeBinding.ACTION_ONMULTIFOCUS);
this.addActionListener(TreeNodeBinding.ACTION_BLUR);
}
this.subscribe(BroadcastMessages.TYPEDRAG_START);
this.subscribe(BroadcastMessages.TYPEDRAG_STOP);
this.addEventListener(DOMEvents.BEFOREUPDATE);
this.addEventListener(DOMEvents.AFTERUPDATE);
}
};
TreeBinding.prototype.onBindingInitialize=function(){
TreeBinding.superclass.onBindingInitialize.call(this);
this._setupTreeSelection();
var _bf4=this.getProperty("builder");
if(_bf4){
this._buildFromTextArea(_bf4);
}else{
if(this._treeNodeBuffer.hasEntries()){
while(this._treeNodeBuffer.hasNext()){
this.add(this._treeNodeBuffer.getNext());
}
}
}
};
TreeBinding.prototype._setupTreeSelection=function(){
var _bf5=this.getProperty("selectable");
var _bf6=this.getProperty("selectionproperty");
var _bf7=this.getProperty("selectionvalue");
if(_bf5){
this.setSelectable(true);
if(_bf6){
this.setSelectionProperty(_bf6);
}
if(_bf7){
this.setSelectionValue(_bf7);
}
}
this._positionIndicatorBinding=this.add(TreePositionIndicatorBinding.newInstance(this.bindingDocument));
this.shadowTree.positionIndicator=this._positionIndicatorBinding;
this._positionIndicatorBinding.attach();
};
TreeBinding.prototype._buildFromTextArea=function(id){
var area=this.bindingDocument.getElementById(id);
if(area!=null){
var _bfa=UserInterface.getBinding(area);
var _bfb=this._treeBodyBinding;
function build(){
_bfb.subTreeFromString(area.value);
}
_bfa.addActionListener(Binding.ACTION_UPDATED,{handleAction:function(){
build();
}});
setTimeout(build,0);
}
};
TreeBinding.prototype.registerTreeNodeBinding=function(_bfc){
var _bfd=_bfc.getHandle();
if(this._treeNodeBindings.has(_bfd)){
throw "Duplicate treenodehandles registered: "+_bfc.getLabel();
}else{
this._treeNodeBindings.set(_bfd,_bfc);
var map=this._openTreeNodesBackupMap;
if(map!=null&&map.has(_bfd)){
_bfc.open();
}
}
};
TreeBinding.prototype.unRegisterTreeNodeBinding=function(_bff){
this._treeNodeBindings.del(_bff.getHandle());
};
TreeBinding.prototype.getTreeNodeBindingByHandle=function(_c00){
var _c01=null;
if(this._treeNodeBindings.has(_c00)){
_c01=this._treeNodeBindings.get(_c00);
}else{
throw "No such treenode: "+_c00;
}
return _c01;
};
TreeBinding.prototype.handleAction=function(_c02){
TreeBinding.superclass.handleAction.call(this,_c02);
var _c03=_c02.target;
switch(_c02.type){
case TreeNodeBinding.ACTION_OPEN:
_c02.consume();
break;
case TreeNodeBinding.ACTION_CLOSE:
this._blurDescendantBindings(_c03);
_c02.consume();
break;
case TreeNodeBinding.ACTION_ONFOCUS:
this._nodePrimary=_c03;
this.focusSingleTreeNodeBinding(_c03);
if(!this.isFocused){
this.focus();
}
_c02.consume();
break;
case TreeNodeBinding.ACTION_ONMULTIFOCUS:
switch(this._selectionType){
case TreeBinding.SELECTIONTYPE_SINGLE:
this._nodePrimary=_c03;
this.focusSingleTreeNodeBinding(_c03);
break;
case TreeBinding.SELECTIONTYPE_SINGLE:
this._nodeSecondary=_c03;
if(!this._nodePrimary||this._nodeSecondary==this._nodePrimary){
this._nodePrimary=_c03;
this.focusSingleTreeNodeBinding(_c03);
}else{
this.focusMultipeTreeNodeBindings(this._getVisibleTreeNodeBindingsInRange(this._nodePrimary,this._nodeSecondary));
}
break;
}
if(!this.isFocused){
this.focus();
}
_c02.consume();
break;
case TreeNodeBinding.ACTION_DISPOSE:
if(_c03.isFocused){
this.blurSelectedTreeNodes();
}
_c02.consume();
break;
case TreeNodeBinding.ACTION_BLUR:
break;
case Binding.ACTION_ACTIVATED:
if(!this.isFocused){
this.focus();
}
break;
}
};
TreeBinding.prototype._getVisibleTreeNodeBindingsInRange=function(_c04,_c05){
alert("TreeBinding#_getVisibleTreeNodeBindingsInRange");
};
TreeBinding.prototype.focusSingleTreeNodeBinding=function(_c06){
if(_c06!=null&&!_c06.isFocused){
this.blurSelectedTreeNodes();
this._focusedTreeNodeBindings.add(_c06);
_c06.invokeManagedFocus();
if(this._isSelectable){
this._manageSelections();
}
}
};
TreeBinding.prototype.focusMultipeTreeNodeBindings=function(_c07){
this.blurSelectedTreeNodes();
while(_c07.hasNext()){
var _c08=_c07.getNext();
this._focusedTreeNodeBindings.add(_c08);
_c08.invokeManagedFocus();
}
if(this._isSelectable){
this._manageSelections();
}
};
TreeBinding.prototype._manageSelections=function(){
var _c09=this._selectedTreeNodeBindings;
this._selectedTreeNodeBindings={};
var _c0a=false;
var _c0b=null;
this._focusedTreeNodeBindings.reset();
while(this._focusedTreeNodeBindings.hasNext()){
var _c0c=this._focusedTreeNodeBindings.getNext();
var _c0d=_c0c.getProperty(this._selectionProperty);
if(_c0d!=null){
if(!this._selectionValue||this._selectionValue[_c0d]){
_c0b=(this._selectedTreeNodeBindings[_c0c.key]=_c0c);
var _c0e=_c09[_c0c.key];
if(!_c0e||_c0e!=_c0b){
_c0a=true;
}
}
}
}
if(_c0b){
if(_c0a){
this.dispatchAction(TreeBinding.ACTION_SELECTIONCHANGED);
}
}else{
if(_c09){
for(var key in _c09){
this.dispatchAction(TreeBinding.ACTION_NOSELECTION);
break;
}
}
}
};
TreeBinding.prototype.getSelectedTreeNodeBindings=function(){
var _c10=new List();
for(var key in this._selectedTreeNodeBindings){
_c10.add(this._selectedTreeNodeBindings[key]);
}
return _c10;
};
TreeBinding.prototype.blurSelectedTreeNodes=function(){
this._focusedTreeNodeBindings.reset().each(function(_c12){
_c12.blur();
});
this._focusedTreeNodeBindings.clear();
};
TreeBinding.prototype._blurDescendantBindings=function(_c13){
var _c14=_c13.getDescendantBindingsByLocalName("treenode");
var _c15=true;
var self=this;
_c14.each(function(desc){
if(desc.isFocused){
desc.blur();
self._focusedTreeNodeBindings.del(self._focusedTreeNodeBindings.getIndex(desc));
}
return _c15;
});
};
TreeBinding.prototype.getFocusedTreeNodeBindings=function(){
return this._focusedTreeNodeBindings.reset();
};
TreeBinding.prototype.focus=function(){
if(!this.isFocused){
this.isFocused=true;
FocusBinding.focusElement(this.bindingElement);
this.attachClassName(Binding.CLASSNAME_FOCUSED);
this.dispatchAction(Binding.ACTION_FOCUSED);
if(!this.getFocusedTreeNodeBindings().hasEntries()){
if(this.isFocusable){
this._focusDefault();
}
}
this._grabKeyboard();
}
};
TreeBinding.prototype._focusDefault=function(){
var _c18=this._treeBodyBinding.getChildBindingByLocalName("treenode");
if(_c18!=null){
this.focusSingleTreeNodeBinding(_c18);
_c18.callback();
}
};
TreeBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.detachClassName(Binding.CLASSNAME_FOCUSED);
this.dispatchAction(Binding.ACTION_BLURRED);
this._releaseKeyboard();
}
};
TreeBinding.prototype._grabKeyboard=function(){
this.subscribe(BroadcastMessages.KEY_ARROW);
this.subscribe(BroadcastMessages.KEY_ENTER);
this._hasKeyboard=true;
};
TreeBinding.prototype._releaseKeyboard=function(){
this.unsubscribe(BroadcastMessages.KEY_ARROW);
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._hasKeyboard=false;
};
TreeBinding.prototype.add=function(_c19){
var _c1a=null;
if(this._treeBodyBinding){
_c1a=this._treeBodyBinding.add(_c19);
}else{
this._treeNodeBuffer.add(_c19);
_c1a=_c19;
}
return _c1a;
};
TreeBinding.prototype.addFirst=function(_c1b){
throw new Error("Not implemented");
};
TreeBinding.prototype.empty=function(){
this._treeBodyBinding.detachRecursive();
var _c1c=this._treeBodyBinding.bindingElement;
_c1c.innerHTML="";
};
TreeBinding.prototype.isEmpty=function(){
return this._treeNodeBindings.hasEntries()==false;
};
TreeBinding.prototype.collapse=function(){
this.blurSelectedTreeNodes();
this._treeNodeBindings.each(function(_c1d,_c1e){
if(_c1e.isContainer&&_c1e.isOpen){
_c1e.close();
}
});
};
TreeBinding.prototype.setSelectable=function(_c1f){
this._isSelectable=_c1f;
if(_c1f){
this._selectedTreeNodeBindings={};
}else{
this._selectedTreeNodeBindings=null;
this._selectionProperty=null;
this._selectionValue=null;
}
};
TreeBinding.prototype.setSelectionProperty=function(_c20){
this._selectionProperty=_c20;
};
TreeBinding.prototype.setSelectionValue=function(_c21){
if(_c21){
var list=new List(_c21.split(" "));
this._selectionValue={};
while(list.hasNext()){
this._selectionValue[list.getNext()]=true;
}
}
};
TreeBinding.prototype.handleBroadcast=function(_c23,arg){
TreeBinding.superclass.handleBroadcast.call(this,_c23,arg);
switch(_c23){
case BroadcastMessages.TYPEDRAG_START:
this.addEventListener(DOMEvents.MOUSEMOVE);
this._yposition=this.boxObject.getGlobalPosition().y;
break;
case BroadcastMessages.TYPEDRAG_STOP:
this.removeEventListener(DOMEvents.MOUSEMOVE);
this._positionIndicatorBinding.hide();
this._yposition=-1;
break;
case BroadcastMessages.KEY_ARROW:
this._navigateByKey(arg);
break;
case BroadcastMessages.KEY_ENTER:
var _c25=this.getFocusedTreeNodeBindings();
if(_c25.hasEntries()){
var node=_c25.getFirst();
if(node.isContainer){
if(node.isOpen){
node.close();
}else{
node.open();
}
}else{
node.fireCommand();
}
}
break;
}
};
TreeBinding.prototype._navigateByKey=function(key){
var _c28=this.getFocusedTreeNodeBindings();
if(_c28.hasEntries()){
var node=_c28.getFirst();
var next=null;
switch(key){
case KeyEventCodes.VK_UP:
next=node.getPreviousBindingByLocalName("treenode");
if(next!=null){
while(next.isContainer&&next.hasChildren()&&next.isOpen){
next=next.getChildBindingsByLocalName("treenode").getLast();
}
}
if(next==null){
next=node.getAncestorBindingByLocalName("treenode");
}
break;
case KeyEventCodes.VK_DOWN:
if(node.isContainer&&node.hasChildren()&&node.isOpen){
next=node.getChildBindingByLocalName("treenode");
}else{
next=node.getNextBindingByLocalName("treenode");
if(next==null){
var _c2b=null;
while(next==null&&(_c2b=node.getAncestorBindingByLocalName("treenode"))!=null){
if(_c2b!=null){
next=_c2b.getNextBindingByLocalName("treenode");
}
node=_c2b;
}
}
}
break;
case KeyEventCodes.VK_RIGHT:
if(node.isContainer){
if(!node.isOpen){
node.open();
}else{
if(node.hasChildren()){
next=node.getChildBindingByLocalName("treenode");
}
}
}
break;
case KeyEventCodes.VK_LEFT:
if(node.isContainer&&node.isOpen){
node.close();
}
break;
}
if(next!=null){
this.focusSingleTreeNodeBinding(next);
}
}
};
TreeBinding.prototype.handleEvent=function(e){
TreeBinding.superclass.handleEvent.call(this,e);
var _c2d=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.MOUSEMOVE:
try{
this._updatePositionIndicator(e);
}
catch(exception){
this.removeEventListener(DOMEvents.MOUSEMOVE);
throw (exception);
}
break;
case DOMEvents.BEFOREUPDATE:
var _c2e=new TreeCrawler();
var list=new List();
_c2e.mode=TreeCrawler.MODE_GETOPEN;
_c2e.crawl(this.bindingElement,list);
var map=new Map();
if(list.hasEntries()){
while(list.hasNext()){
var _c31=list.getNext();
map.set(_c31.getHandle(),true);
}
this._openTreeNodesBackupMap=map;
}
break;
case DOMEvents.AFTERUPDATE:
this._openTreeNodesBackupMap=null;
break;
}
};
TreeBinding.prototype._updatePositionIndicator=function(e){
var y=e.clientY-this._yposition;
var pos=this._acceptingPosition;
var dim=this._acceptingDimension;
var _c36=this._positionIndicatorBinding;
if(this._acceptingTreeNodeBinding){
var miny=pos.y;
var maxy=pos.y+dim.h;
if(y>=miny&&y<=maxy){
y=y<miny+TreeNodeBinding.HEIGHT?miny+TreeNodeBinding.HEIGHT:y;
y=y-TreeNodeBinding.HEIGHT;
y=TreeBinding.grid(y);
while(!this._acceptingPositions[y]){
y+=TreeNodeBinding.HEIGHT;
}
if(y!=_c36.getPosition().y){
_c36.setPosition(new Point(this._acceptingPosition.x+TreeNodeBinding.INDENT,y));
}
if(!_c36.isVisible){
_c36.show();
}
}else{
if(_c36.isVisible){
_c36.hide();
}
}
}else{
if(_c36.isVisible){
_c36.hide();
}
}
};
TreeBinding.prototype.enablePositionIndicator=function(_c39){
this._acceptingTreeNodeBinding=_c39;
this._acceptingPosition=_c39.boxObject.getLocalPosition();
this._acceptingDimension=_c39.boxObject.getDimension();
this._acceptingPositions=this._getChildPositions(_c39);
};
TreeBinding.prototype.disablePositionIndicator=function(){
this._acceptingTreeNodeBinding=null;
this._acceptingPosition=null;
this._acceptingDimension=null;
};
TreeBinding.prototype._getChildPositions=function(_c3a){
var map={};
var _c3c=_c3a.getChildBindingsByLocalName("treenode");
var _c3d,pos,dim,y;
y=TreeBinding.grid(_c3a.boxObject.getLocalPosition().y);
map[y]=true;
while(_c3c.hasNext()){
_c3d=_c3c.getNext();
pos=_c3d.boxObject.getLocalPosition();
dim=_c3d.boxObject.getDimension();
y=TreeBinding.grid(pos.y+dim.h)-TreeNodeBinding.HEIGHT;
map[y]=true;
}
return map;
};
TreeBinding.prototype.getDropIndex=function(){
var y=this._positionIndicatorBinding.getPosition().y;
var drop=0;
for(var _c43 in this._acceptingPositions){
if(_c43==y){
break;
}else{
drop++;
}
}
return Number(drop);
};
TreeBinding.prototype.getRootTreeNodeBindings=function(){
return this._treeBodyBinding.getChildBindingsByLocalName("treenode");
};
TreeBinding.newInstance=function(_c44){
var _c45=DOMUtil.createElementNS(Constants.NS_UI,"ui:tree",_c44);
var _c46=UserInterface.registerBinding(_c45,TreeBinding);
_c46.treeBodyBinding=TreeBodyBinding.newInstance(_c44);
return _c46;
};
TreeBodyBinding.prototype=new FlexBoxBinding;
TreeBodyBinding.prototype.constructor=TreeBodyBinding;
TreeBodyBinding.superclass=FlexBoxBinding.prototype;
TreeBodyBinding.PADDING_TOP=8;
function TreeBodyBinding(){
this.logger=SystemLogger.getLogger("TreeBodyBinding");
this.containingTreeBinding=null;
return this;
}
TreeBodyBinding.prototype.toString=function(){
return "[TreeBodyBinding]";
};
TreeBodyBinding.prototype.onBindingAttach=function(){
TreeBodyBinding.superclass.onBindingAttach.call(this);
this.addActionListener(TreeNodeBinding.ACTION_FOCUSED);
this.containingTreeBinding=UserInterface.getBinding(this.bindingElement.parentNode);
};
TreeBodyBinding.prototype.accept=function(_c47){
if(_c47 instanceof TreeNodeBinding){
this.logger.debug(_c47);
}
};
TreeBodyBinding.prototype.handleAction=function(_c48){
TreeBodyBinding.superclass.handleAction.call(this,_c48);
switch(_c48.type){
case TreeNodeBinding.ACTION_FOCUSED:
this._scrollIntoView(_c48.target);
_c48.consume();
break;
}
};
TreeBodyBinding.prototype._scrollIntoView=function(_c49){
var _c4a=_c49.labelBinding.bindingElement;
var a=this.bindingElement.clientHeight;
var y=_c4a.offsetTop;
var h=_c4a.offsetHeight;
var t=this.bindingElement.scrollTop;
var l=this.bindingElement.scrollLeft;
if(y-t<0){
_c4a.scrollIntoView(true);
}else{
if(y-t+h>a){
_c4a.scrollIntoView(false);
}
}
try{
top.document.documentElement.scrollTop=0;
top.document.body.scrollTop=0;
top.app.document.documentElement.scrollTop=0;
top.app.document.body.scrollTop=0;
}
catch(exception){
}
if(Client.isExplorer){
this.bindingElement.scrollLeft=l;
}
};
TreeBodyBinding.newInstance=function(_c50){
var _c51=DOMUtil.createElementNS(Constants.NS_UI,"ui:treebody",_c50);
return UserInterface.registerBinding(_c51,TreeBodyBinding);
};
TreeNodeBinding.prototype=new Binding;
TreeNodeBinding.prototype.constructor=TreeNodeBinding;
TreeNodeBinding.superclass=Binding.prototype;
TreeNodeBinding.DEFAULT_FOLDER_CLOSED="${icon:folder}";
TreeNodeBinding.DEFAULT_FOLDER_OPEN="${icon:folder_active}";
TreeNodeBinding.DEFAULT_FOLDER_DISABLED="${icon:default}";
TreeNodeBinding.DEFAULT_ITEM="${root}/images/icons/harmony/composite/default_16.png";
TreeNodeBinding.DEFAULT_ITEM_DISABLED="${icon:default}";
TreeNodeBinding.ACTION_OPEN="treenodeopen";
TreeNodeBinding.ACTION_CLOSE="treenodeclose";
TreeNodeBinding.ACTION_ONFOCUS="treenodeonfocus";
TreeNodeBinding.ACTION_ONMULTIFOCUS="treenodeonmultifocus";
TreeNodeBinding.ACTION_FOCUSED="treenodefocused";
TreeNodeBinding.ACTION_BLUR="treenodeblur";
TreeNodeBinding.ACTION_COMMAND="treenodecommand";
TreeNodeBinding.ACTION_DISPOSE="treenodedisposed";
TreeNodeBinding.CLASSNAME_DRAGGED="dragged";
TreeNodeBinding.HEIGHT=19;
TreeNodeBinding.INDENT=16+18;
function TreeNodeBinding(){
this.logger=SystemLogger.getLogger("TreeNodeBinding");
this.hasBeenOpened=false;
this.isDisabled=false;
this.isFocused=false;
this.isOpen=false;
this.isContainer=false;
this.imageProfile=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.containingTreeBinding=null;
return this;
}
TreeNodeBinding.prototype.toString=function(){
return "[TreeNodeBinding]";
};
TreeNodeBinding.prototype.serialize=function(){
var _c52=TreeNodeBinding.superclass.serialize.call(this);
if(_c52){
_c52.label=this.getLabel();
_c52.image=this.getImage();
var _c53=this.getHandle();
if(_c53&&_c53!=this.key){
_c52.handle=_c53;
}
if(this.isOpen){
_c52.open=true;
}
if(this.isDisabled){
_c52.disabled=true;
}
if(this.dragType){
_c52.dragtype=this.dragType;
}
if(this.dragAccept){
_c52.dragaccept=this.dragAccept;
}
}
return _c52;
};
TreeNodeBinding.prototype.onBindingRegister=function(){
TreeNodeBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["label"]=this.setLabel;
this.propertyMethodMap["image"]=this.setImage;
this.propertyMethodMap["tooltip"]=this.setToolTip;
};
TreeNodeBinding.prototype.onBindingAttach=function(){
TreeBinding.superclass.onBindingAttach.call(this);
this.isOpen=this.isOpen?true:this.getProperty("open");
if(!this.isContainer){
this.isContainer=this.hasChildren();
}
this.buildDOMContent();
this.assignDOMEvents();
if(this.isDisabled){
this.labelBinding.attachClassName(LabelBinding.CLASSNAME_GRAYTEXT);
}
this.addActionListener(TreeNodeBinding.ACTION_FOCUSED);
this.addEventListener(UpdateManager.EVENT_AFTERUPDATE);
this._registerWithAncestorTreeBinding();
};
TreeNodeBinding.prototype.onBindingDispose=function(){
if(this.isAttached){
if(this.dragger!=null){
this.labelBinding.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.labelBinding.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.labelBinding.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.disableDragging();
this.dragger.dispose();
}
this.dispatchAction(TreeNodeBinding.ACTION_DISPOSE);
this.containingTreeBinding.unRegisterTreeNodeBinding(this);
this.labelBinding.dispose();
}
TreeNodeBinding.superclass.onBindingDispose.call(this);
};
TreeNodeBinding.prototype._registerWithAncestorTreeBinding=function(){
var node=this.bindingElement;
while((node=node.parentNode)!=null&&!this.containingTreeBinding){
var _c55=UserInterface.getBinding(node);
if(_c55&&_c55.containingTreeBinding){
this.containingTreeBinding=_c55.containingTreeBinding;
}
}
if(this.containingTreeBinding){
this.containingTreeBinding.registerTreeNodeBinding(this);
}else{
alert(this.bindingElement.parentNode.nodeName);
throw "TreeNodeBinding attached outside TreeBodyBinding";
}
};
TreeNodeBinding.prototype.getHandle=function(){
var _c56=this.key;
var _c57=this.getProperty("handle");
if(_c57){
_c56=_c57;
}
return _c56;
};
TreeNodeBinding.prototype.setHandle=function(_c58){
this.setProperty("handle",_c58);
};
TreeNodeBinding.prototype.buildDOMContent=function(){
var url=this.getProperty("url");
var _c5a=this.getProperty("label");
var _c5b=this.getProperty("tooltip");
var _c5c=this.getProperty("oncommand");
var _c5d=this.getProperty("onbindingfocus");
var _c5e=this.getProperty("onbindingblur");
var _c5f=this.getProperty("focused");
var _c60=this.getProperty("callbackid");
if(url){
var link=DOMUtil.createElementNS(Constants.NS_XHTML,"a",this.bindingDocument);
link.href=url;
this.bindingElement.appendChild(link);
this.shadowTree.link=link;
}
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
if(url){
this.shadowTree.link.appendChild(this.labelBinding.bindingElement);
}else{
this.addFirst(this.labelBinding);
}
this.shadowTree.label=this.labelBinding;
if(this.dragger!=null){
this.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEUP,this.dragger);
}
if(this.isContainer&&!this.dragAccept){
this.acceptor=new BindingAcceptor(this);
}
if(_c5a!=null){
this.setLabel(_c5a);
}
if(_c5b!=null){
this.setToolTip(_c5b);
}
if(!this.imageProfile){
this._computeImageProfile();
}
this.setImage(this.computeImage());
if(this.isContainer){
this.updateClassNames();
}
var _c62=this.bindingWindow.WindowManager;
if(_c5c!=null){
this.oncommand=function(){
Binding.evaluate(_c5c,this);
};
}
if(_c5d!=null){
this.onfocus=function(){
Binding.evaluate(_c5d,this);
};
}
if(_c5e!=null){
this.onblur=function(){
Binding.evaluate(_c5e,this);
};
}
if(_c5f==true){
this.focus();
}
if(_c60!=null){
Binding.dotnetify(this,_c60);
}
};
TreeNodeBinding.prototype.handleAction=function(_c63){
TreeNodeBinding.superclass.handleAction.call(this,_c63);
switch(_c63.type){
case TreeNodeBinding.ACTION_FOCUSED:
if(_c63.target!=this){
if(this.isContainer&&!this.isOpen){
this.open(true);
}
}
break;
}
};
TreeNodeBinding.prototype.enableDragging=function(){
};
TreeNodeBinding.prototype.disableDragging=function(){
this.isDraggable=false;
};
TreeNodeBinding.prototype.accept=function(_c64,_c65){
var _c66=true;
if(_c64 instanceof TreeNodeBinding){
var _c67=false;
var _c68=this.bindingElement;
var _c69=this.containingTreeBinding.bindingElement;
while(!_c67&&_c68!=_c69){
if(_c68==_c64.getBindingElement()){
_c67=true;
}else{
_c68=_c68.parentNode;
}
}
if(_c67){
Dialog.error("Not Allowed","You cannot move a folder into itself.");
_c66=false;
}else{
this.acceptTreeNodeBinding(_c64,_c65);
}
}else{
_c66=false;
}
return _c66;
};
TreeNodeBinding.prototype.acceptTreeNodeBinding=function(_c6a,_c6b){
var _c6c=_c6a.serializeToString();
var _c6d=new BindingParser(this.bindingDocument);
var _c6e=_c6d.parseFromString(_c6c).getFirst();
_c6b=_c6b?_c6b:this.containingTreeBinding.getDropIndex();
var _c6f=this.getChildElementsByLocalName("treenode");
this.bindingElement.insertBefore(_c6e,_c6f.get(_c6b));
this.bindingWindow.DocumentManager.attachBindings(this.bindingElement);
_c6a.dispose();
};
TreeNodeBinding.prototype.showAcceptance=function(){
this.containingTreeBinding.enablePositionIndicator(this);
};
TreeNodeBinding.prototype.hideAcceptance=function(){
this.containingTreeBinding.disablePositionIndicator();
};
TreeNodeBinding.prototype._computeImageProfile=function(){
var _c70=this.getProperty("image");
var _c71=this.getProperty("image-active");
var _c72=this.getProperty("image-disabled");
_c71=_c71?_c71:this.isContainer?_c70?_c70:TreeNodeBinding.DEFAULT_FOLDER_OPEN:_c70?_c70:TreeNodeBinding.DEFAULT_ITEM;
_c72=_c72?_c72:this.isContainer?_c70?_c70:TreeNodeBinding.DEFAULT_FOLDER_DISABLED:_c70?_c70:TreeNodeBinding.DEFAULT_ITEM_DISABLED;
_c70=_c70?_c70:this.isContainer?TreeNodeBinding.DEFAULT_FOLDER_CLOSED:TreeNodeBinding.DEFAULT_ITEM;
this.imageProfile=new ImageProfile({image:_c70,imageHover:null,imageActive:_c71,imageDisabled:_c72});
};
TreeNodeBinding.prototype.assignDOMEvents=function(){
this.labelBinding.addEventListener(DOMEvents.DOUBLECLICK,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEDOWN,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEOVER,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEOUT,this);
};
TreeNodeBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(url);
}
};
TreeNodeBinding.prototype.setLabel=function(_c74){
this.setProperty("label",String(_c74));
if(this.isAttached){
this.labelBinding.setLabel(String(_c74));
}
};
TreeNodeBinding.prototype.setToolTip=function(_c75){
this.setProperty("tooltip",String(_c75));
if(this.isAttached){
this.labelBinding.setToolTip(String(_c75));
}
};
TreeNodeBinding.prototype.getImage=function(){
return this.getProperty("image");
};
TreeNodeBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
TreeNodeBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
TreeNodeBinding.prototype.computeImage=function(){
var _c76=this.imageProfile.getDefaultImage();
var _c77=this.imageProfile.getActiveImage();
_c77=_c77?_c77:_c76;
return this.isOpen?_c77:_c76;
};
TreeNodeBinding.prototype.handleEvent=function(e){
TreeNodeBinding.superclass.handleEvent.call(this,e);
var _c79=DOMEvents.getTarget(e);
var _c7a=this.labelBinding.bindingElement;
var _c7b=this.labelBinding.shadowTree.labelBody;
var _c7c=this.labelBinding.shadowTree.labelText;
switch(e.type){
case DOMEvents.MOUSEDOWN:
switch(_c79){
case _c7a:
this._onAction(e);
break;
case _c7b:
case _c7c:
if(!this.isDisabled){
this._onFocus(e);
}
break;
}
break;
case DOMEvents.DOUBLECLICK:
this._onAction(e);
break;
case UpdateManager.EVENT_AFTERUPDATE:
if(_c79.parentNode==this.bindingElement&&_c79.__updateType==Update.TYPE_INSERT){
var _c7a=this.labelBinding.bindingElement;
if(DOMUtil.getLocalName(_c79)=="treenode"){
if(_c79==this.bindingElement.firstChild){
this.bindingElement.insertBefore(_c79,_c7a.nextSibling);
}
}
break;
}
break;
}
if(BindingDragger.isDragging&&this.isContainer&&!this.isOpen){
switch(e.type){
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
switch(_c79){
case _c7a:
case _c7b:
case _c7c:
this._folderDragOverTimeout(e);
break;
}
break;
}
}
};
TreeNodeBinding.prototype._folderDragOverTimeout=function(e){
var self=this;
switch(e.type){
case DOMEvents.MOUSEOVER:
this._dragTimeout=this.bindingWindow.setTimeout(function(){
self.open();
},500);
break;
case DOMEvents.MOUSEOUT:
this.bindingWindow.clearTimeout(this._dragTimeout);
break;
}
};
TreeNodeBinding.prototype._onAction=function(e){
var _c80=true;
if(e.type=="mousedown"){
var _c81=e.button==(e.target?0:1);
if(!_c81){
_c80=false;
}
}
if(_c80){
if(this.isContainer){
if(!this.isOpen){
this.open();
}else{
this.close();
}
}else{
this.fireCommand();
}
}
};
TreeNodeBinding.prototype.fireCommand=function(){
if(this.oncommand){
this.oncommand();
}
this.dispatchAction(TreeNodeBinding.ACTION_COMMAND);
};
TreeNodeBinding.prototype._onFocus=function(e){
var _c83=false;
if(e!=null){
_c83=e.shiftKey;
}
this.dispatchAction(_c83?TreeNodeBinding.ACTION_ONMULTIFOCUS:TreeNodeBinding.ACTION_ONFOCUS);
if(e!=null){
this.stopPropagation(e);
}
if(this.onfocus!=null){
this.onfocus();
}
if(e!=null){
if(this.hasCallBackID()){
this.callback();
}
}
};
TreeNodeBinding.prototype.callback=function(){
if(this.hasCallBackID()){
var self=this;
setTimeout(function(){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
},0);
}
};
TreeNodeBinding.prototype.invokeManagedFocus=function(){
if(!this.isFocused){
this.isFocused=true;
this.setProperty("focused",true);
this.labelBinding.attachClassName("focused");
this.dispatchAction(TreeNodeBinding.ACTION_FOCUSED);
}
};
TreeNodeBinding.prototype.focus=function(){
this.setProperty("focused",true);
if(this.isAttached){
this._onFocus();
}
};
TreeNodeBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.deleteProperty("focused");
this.labelBinding.detachClassName("focused");
if(this.onblur){
this.onblur();
}
this.dispatchAction(TreeNodeBinding.ACTION_BLUR);
}
};
TreeNodeBinding.prototype.stopPropagation=function(e){
if(e.type=="mousedown"){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
this.dispatchAction(Binding.ACTION_ACTIVATED);
}
DOMEvents.stopPropagation(e);
};
TreeNodeBinding.prototype.open=function(){
if(this.isContainer&&!this.isOpen){
this.isOpen=true;
this.setProperty("open",true);
this.dispatchAction(TreeNodeBinding.ACTION_OPEN);
this.setImage(this.computeImage());
this.updateClassNames();
this.hasBeenOpened=true;
}
};
TreeNodeBinding.prototype.close=function(){
if(this.isContainer&&this.isOpen){
this.isOpen=false;
this.setProperty("open",false);
this.dispatchAction(TreeNodeBinding.ACTION_CLOSE);
this.setImage(this.computeImage());
this.updateClassNames();
}
};
TreeNodeBinding.prototype.updateClassNames=function(){
if(this.isContainer){
if(!this.hasClassName("container")){
this.attachClassName("container");
}
if(this.isOpen){
this.detachClassName("closed");
this.attachClassName("open");
this.labelBinding.detachClassName("closed");
this.labelBinding.attachClassName("open");
}else{
this.detachClassName("open");
this.attachClassName("closed");
this.labelBinding.detachClassName("open");
this.labelBinding.attachClassName("closed");
}
}else{
if(this.hasClassName("container")){
this.detachClassName("container");
this.labelBinding.detachClassName("closed");
this.labelBinding.detachClassName("open");
}
}
};
TreeNodeBinding.prototype.empty=function(){
var _c86=this.getDescendantBindingsByLocalName("treenode");
_c86.each(function(_c87){
_c87.dispose();
});
};
TreeNodeBinding.prototype.showDrag=function(){
this.attachClassName(TreeNodeBinding.CLASSNAME_DRAGGED);
};
TreeNodeBinding.prototype.hideDrag=function(){
this.detachClassName(TreeNodeBinding.CLASSNAME_DRAGGED);
};
TreeNodeBinding.prototype.hasChildren=function(){
return this.bindingElement.hasChildNodes();
};
TreeNodeBinding.prototype.handleElement=function(_c88){
var _c89=_c88.getAttribute("focused");
if(_c89=="true"){
if(!this.isFocused){
this.focus();
}
}
return false;
};
TreeNodeBinding.newInstance=function(_c8a){
var _c8b=DOMUtil.createElementNS(Constants.NS_UI,"ui:treenode",_c8a);
return UserInterface.registerBinding(_c8b,TreeNodeBinding);
};
TreeContentBinding.prototype=new Binding;
TreeContentBinding.prototype.constructor=TreeContentBinding;
TreeContentBinding.superclass=Binding.prototype;
function TreeContentBinding(){
this.logger=SystemLogger.getLogger("TreeContentBinding");
return this;
}
TreeContentBinding.prototype.toString=function(){
return "[TreeContentBinding]";
};
TreeContentBinding.newInstance=function(_c8c){
var _c8d=DOMUtil.createElementNS(Constants.NS_UI,"ui:treecontent",_c8c);
return UserInterface.registerBinding(_c8d,TreeContentBinding);
};
TreePositionIndicatorBinding.prototype=new Binding;
TreePositionIndicatorBinding.prototype.constructor=TreePositionIndicatorBinding;
TreePositionIndicatorBinding.superclass=Binding.prototype;
function TreePositionIndicatorBinding(){
this.logger=SystemLogger.getLogger("TreePositionIndicatorBinding");
this._geometry={x:0,y:0};
}
TreePositionIndicatorBinding.prototype.toString=function(){
return "[TreePositionIndicatorBinding]";
};
TreePositionIndicatorBinding.prototype.onBindingAttach=function(){
TreePositionIndicatorBinding.superclass.onBindingAttach.call(this);
this.hide();
};
TreePositionIndicatorBinding.prototype.setPosition=function(_c8e){
this.bindingElement.style.left=_c8e.x+"px";
this.bindingElement.style.top=_c8e.y+"px";
this._geometry.x=_c8e.x;
this._geometry.y=_c8e.y;
};
TreePositionIndicatorBinding.prototype.getPosition=function(){
return new Point(this._geometry.x,this._geometry.y);
};
TreePositionIndicatorBinding.newInstance=function(_c8f){
var _c90=DOMUtil.createElementNS(Constants.NS_UI,"ui:treepositionindicator",_c8f);
return UserInterface.registerBinding(_c90,TreePositionIndicatorBinding);
};
TreeCrawler.prototype=new BindingCrawler;
TreeCrawler.prototype.constructor=TreeCrawler;
TreeCrawler.superclass=BindingCrawler.prototype;
TreeCrawler.ID="treecrawler";
TreeCrawler.MODE_GETOPEN="get open treenodes";
function TreeCrawler(){
this.mode=TreeCrawler.MODE_GETOPEN;
this.id=TreeCrawler.ID;
this._construct();
return this;
}
TreeCrawler.prototype._construct=function(){
TreeCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_c92){
var _c93=UserInterface.getBinding(_c92);
var _c94=null;
var _c94=null;
if(!_c93 instanceof TreeNodeBinding){
_c94=NodeCrawler.SKIP_NODE;
}
return _c94;
});
this.addFilter(function(_c95,list){
var _c97=UserInterface.getBinding(_c95);
var _c98=null;
switch(self.mode){
case TreeCrawler.MODE_GETOPEN:
if(_c97.isOpen){
list.add(_c97);
}
break;
}
return _c98;
});
};
DockControlImageProfile.prototype=new ControlImageProfile;
DockControlImageProfile.prototype.constructor=DockControlImageProfile;
DockControlImageProfile.superclass=ControlImageProfile.prototype;
DockControlImageProfile.IMAGE_MINIMIZE=Resolver.resolve("${skin}/docks/control-minimize-${string}.png");
DockControlImageProfile.IMAGE_MAXIMIZE=Resolver.resolve("${skin}/docks/control-maximize-${string}.png");
DockControlImageProfile.IMAGE_RESTORE=Resolver.resolve("${skin}/docks/control-restore-${string}.png");
DockControlImageProfile.IMAGE_CLOSE=null;
function DockControlImageProfile(_c99){
this.binding=_c99;
}
DockControlImageProfile.prototype.getHoverImage=function(){
return null;
};
DockControlImageProfile.prototype.getActiveImage=function(){
return null;
};
DockTabsButtonBinding.prototype=new TabsButtonBinding;
DockTabsButtonBinding.prototype.constructor=DockTabsButtonBinding;
DockTabsButtonBinding.superclass=TabsButtonBinding.prototype;
DockTabsButtonBinding.RESERVED_SPACE=50;
DockTabsButtonBinding.NODENAME_TABBOX="dock";
function DockTabsButtonBinding(){
this.logger=SystemLogger.getLogger("DockTabsButtonBinding");
}
DockTabsButtonBinding.prototype.toString=function(){
return "[DockTabsButtonBinding]";
};
DockTabsButtonBinding.newInstance=function(_c9a){
var _c9b=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_c9a);
_c9b.setAttribute("type","checkbox");
_c9b.setAttribute("popup","app.bindingMap.tabsbuttonpopup");
_c9b.className="tabbutton";
return UserInterface.registerBinding(_c9b,DockTabsButtonBinding);
};
DockBinding.prototype=new TabBoxBinding;
DockBinding.prototype.constructor=DockBinding;
DockBinding.superclass=TabBoxBinding.prototype;
DockBinding.START="start";
DockBinding.EXTERNAL="external";
DockBinding.EXPLORER="explorer";
DockBinding.MAIN="main";
DockBinding.BOTTOMLEFT="bottomleft";
DockBinding.BOTTOMRIGHT="bottomright";
DockBinding.RIGHTTOP="righttop";
DockBinding.RIGHTBOTTOM="rightbottom";
DockBinding.ABSBOTTOMLEFT="absbottomleft";
DockBinding.ABSBOTTOMRIGHT="absbottomright";
DockBinding.ABSRIGHTTOP="absrighttop";
DockBinding.ABSRIGHTBOTTOM="absrightbottom";
DockBinding.TYPE_START="start";
DockBinding.TYPE_EXPLORER="explorer";
DockBinding.TYPE_EDITORS="editors";
DockBinding.TYPE_TOOLS="tools";
DockBinding.ACTION_OPENED="dockopened";
DockBinding.ACTION_EMPTIED="dockemptied";
DockBinding.CLASSNAME_ACTIVE="active";
function DockBinding(){
this.logger=SystemLogger.getLogger("DockBinding");
this.isActive=false;
this.isActivatable=true;
this.type=null;
this.reference=null;
this.isCollapsed=false;
this.isEmpty=true;
this._containingSplitPanelBinding=null;
this._viewBindingList=null;
this.perspectiveNode=null;
this._nodename_tab="docktab";
this._nodename_tabs="docktabs";
this._nodename_tabpanel="dockpanel";
this._nodename_tabpanels="dockpanels";
this._impl_tab=DockTabBinding;
this._impl_tabs=DockTabsBinding;
this._impl_tabpanel=DockPanelBinding;
this._impl_tabpanels=DockPanelsBinding;
}
DockBinding.prototype.toString=function(){
return "[DockBinding]";
};
DockBinding.prototype.serialize=function(){
var _c9c=DockBinding.superclass.serialize.call(this);
if(_c9c){
_c9c.active=this.isActive?true:null;
_c9c.collapsed=this.isCollapsed?true:null;
}
return _c9c;
};
DockBinding.prototype.onBindingRegister=function(){
DockBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_ACTIVATED,this);
this.addActionListener(TabBoxBinding.ACTION_UPDATED,this);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(ViewBinding.ACTION_CLOSED);
this.subscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS);
this._viewBindingList=new List();
this.reference=this.getProperty("reference");
};
DockBinding.prototype.onBindingAttach=function(){
DockBinding.superclass.onBindingAttach.call(this);
this._containingSplitPanelBinding=this.getAncestorBindingByLocalName("splitpanel");
if(this.getTabBindings().hasEntries()){
this.isEmpty=false;
this.isActivatable=true;
}else{
this.dispatchAction(DockBinding.ACTION_EMPTIED);
}
};
DockBinding.prototype.onBindingInitialize=function(){
if(this.type==DockBinding.TYPE_EDITORS){
this.showControls(false);
}
DockBinding.superclass.onBindingInitialize.call(this);
};
DockBinding.prototype.buildDOMContent=function(){
var _c9d=UserInterface.getBinding(this.bindingElement.parentNode);
var _c9e=MatrixBinding.newInstance(this.bindingDocument);
_c9e.attachClassName("dockliner");
this.shadowTree.dockLiner=_c9e;
_c9d.add(_c9e);
_c9e.attach();
_c9e.manifest();
var type=this.getProperty("type");
this.type=type?type:DockBinding.TYPE_TOOLS;
this.attachClassName(this.type);
if(this.getProperty("active")==true){
this.activate();
}
};
DockBinding.prototype.interceptDisplayChange=function(_ca0){
var _ca1=this.getSelectedTabPanelBinding();
if(_ca1){
_ca1.isVisible=_ca0;
_ca1.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
}
};
DockBinding.prototype.prepareNewView=function(_ca2){
var _ca3=this._getBindingForDefinition(_ca2);
var _ca4=DockTabBinding.newInstance(this.bindingDocument);
_ca4.setHandle(_ca2.handle);
_ca4.setLabel(_ca2.flowHandle?null:_ca2.label);
_ca4.setImage(_ca2.image);
_ca4.setToolTip(_ca2.toolTip);
_ca4.setEntityToken(_ca2.entityToken);
_ca4.setAssociatedView(_ca3);
this.appendTabByBindings(_ca4,null);
this._setupPageBindingListeners(_ca4);
var _ca5=this.getTabPanelBinding(_ca4);
_ca3.snapToBinding(_ca5);
var _ca6=this.bindingWindow.bindingMap.views;
_ca6.add(_ca3);
if(!this.isActive){
this.activate();
}
_ca3.attach();
};
DockBinding.prototype.prepareOpenView=function(_ca7,_ca8){
this.logger.debug("DockBinding.prototype.prepareOpenView: _setupDirtyStuff required?");
_ca8.setLabel(_ca7.label);
_ca8.setImage(_ca7.image);
_ca8.setToolTip(_ca7.toolTip);
this._setupPageBindingListeners(_ca8);
var _ca9=this.getTabPanelBinding(_ca8);
var _caa=this._getBindingForDefinition(_ca7);
_ca8.setAssociatedView(_caa);
_caa.snapToBinding(_ca9);
UserInterface.getBinding(this.bindingDocument.body).add(_caa);
_caa.attach();
};
DockBinding.prototype._getBindingForDefinition=function(_cab){
var _cac=this.bindingWindow.bindingMap.views;
var view=ViewBinding.newInstance(_cac.bindingDocument);
view.setDefinition(_cab);
return view;
};
DockBinding.prototype._setupPageBindingListeners=function(_cae){
var _caf=this.getTabPanelBinding(_cae);
var self=this;
var _cb1={handleAction:function(_cb2){
var _cb3=_cb2.target;
switch(_cb2.type){
case PageBinding.ACTION_ATTACHED:
TabBoxBinding.currentActiveInstance=self;
break;
case PageBinding.ACTION_INITIALIZED:
_cb3.reflex(true);
var view=_cae.getAssociatedView();
if(_cb3.bindingWindow==view.getContentWindow()){
_cae.updateDisplay(_cb3);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_COMPLETED,view.getHandle());
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
}
_cae.onPageInitialize(_cb3);
_cb2.consume();
break;
case PageBinding.ACTION_UPDATED:
var view=_cae.getAssociatedView();
if(_cb3.bindingWindow==view.getContentWindow()){
_cae.updateDisplay(_cb3);
}
break;
case DockTabBinding.ACTION_UPDATE_VISUAL:
_cae.updateDisplay(_cb3);
_cb2.consume();
break;
case DockTabBinding.ACTION_UPDATE_TOKEN:
_cae.updateEntityToken(_cb3);
_cb2.consume();
break;
case EditorPageBinding.ACTION_DIRTY:
_cae.setDirty(true);
break;
case EditorPageBinding.ACTION_SAVE:
case EditorPageBinding.ACTION_SAVE_AND_PUBLISH:
_cae.onSaveStart();
break;
case ViewBinding.ACTION_ONCLOSE:
self.closeTab(_cae);
_cb2.consume();
break;
case ViewBinding.ACTION_ONCLOSE_FORCE:
self.closeTab(_cae,true);
_cb2.consume();
break;
case DockPanelBinding.ACTION_FORCE_SELECT:
self.select(_cae);
break;
case Binding.ACTION_FORCE_REFLEX:
_caf.reflex(true);
_cb2.consume();
break;
case DockTabBinding.ACTION_FORCE_CLEAN:
case EditorPageBinding.ACTION_CLEAN:
if(_cae.isDirty){
_cae.setDirty(false);
}
break;
case WindowBinding.ACTION_ONLOAD:
alert("HWEJ");
break;
}
}};
new List([DockTabBinding.ACTION_UPDATE_VISUAL,DockTabBinding.ACTION_UPDATE_TOKEN,PageBinding.ACTION_ATTACHED,PageBinding.ACTION_INITIALIZED,PageBinding.ACTION_UPDATED,EditorPageBinding.ACTION_DIRTY,EditorPageBinding.ACTION_CLEAN,EditorPageBinding.ACTION_SAVE,EditorPageBinding.ACTION_SAVE_AND_PUBLISH,ViewBinding.ACTION_ONCLOSE,ViewBinding.ACTION_ONCLOSE_FORCE,DockPanelBinding.ACTION_FORCE_SELECT,Binding.ACTION_FORCE_REFLEX,DockTabBinding.ACTION_FORCE_CLEAN,WindowBinding.ACTION_ONLOAD]).each(function(_cb5){
_caf.addActionListener(_cb5,_cb1);
});
};
DockBinding.prototype.summonTabPanelBinding=function(){
return DockPanelBinding.newInstance(this.bindingDocument);
};
DockBinding.prototype.handleAction=function(_cb6){
DockBinding.superclass.handleAction.call(this,_cb6);
var _cb7=_cb6.target;
switch(_cb6.type){
case Binding.ACTION_ACTIVATED:
if(!this.isActive){
this.activate();
}
_cb6.consume();
break;
case TabBoxBinding.ACTION_UPDATED:
if(_cb7 instanceof DockBinding){
if(_cb7.updateType==TabBoxBinding.UPDATE_DETACH){
if(!this.getTabElements().hasEntries()){
this.isEmpty=true;
this.isActivatable=false;
if(this.isActive==true){
this.deActivate();
}
this.dispatchAction(DockBinding.ACTION_EMPTIED);
}
}
}
break;
case ViewBinding.ACTION_LOADED:
this._viewBindingList.add(_cb7);
if(this.isActive){
_cb7.onActivate();
}
break;
case ViewBinding.ACTION_CLOSED:
this._viewBindingList.del(_cb7);
break;
}
};
DockBinding.prototype.handleBroadcast=function(_cb8,arg){
DockBinding.superclass.handleBroadcast.call(this,_cb8,arg);
switch(_cb8){
case BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS:
var _cba=arg;
if(_cba.perspectiveNode==this.perspectiveNode){
this._selectTabByEntityToken(_cba.node.getEntityToken());
}
break;
}
};
DockBinding.prototype._selectTabByEntityToken=function(_cbb){
var tabs=this.getTabBindings();
var _cbd=false;
while(tabs.hasNext()&&!_cbd){
var tab=tabs.getNext();
var _cbf=tab.getEntityToken();
if(_cbf!=null&&_cbf==_cbb){
if(!tab.isSelected){
this.select(tab,true);
_cbd=true;
}
}
}
};
DockBinding.prototype.collapse=function(_cc0){
this._handleCollapse(true,_cc0);
};
DockBinding.prototype.unCollapse=function(_cc1){
this._handleCollapse(false,_cc1);
};
DockBinding.prototype._handleCollapse=function(_cc2,_cc3){
var _cc4=this.getChildBindingByLocalName("dockpanels");
var _cc5=this.getAncestorBindingByLocalName("splitbox");
if(_cc2){
_cc4.hide();
this.bindingElement.style.height="auto";
this.isFlexible=false;
this.isActivatable=false;
this.setProperty("collapsed",true);
if(_cc3&&_cc5.hasBothPanelsVisible()){
this.setWidth(200);
}
}else{
_cc4.show();
this.isFlexible=true;
this.isActivatable=true;
this.deleteProperty("collapsed");
if(_cc3){
this.setWidth(false);
}
}
this.interceptDisplayChange(!_cc2);
this.isCollapsed=_cc2;
};
DockBinding.prototype.activate=function(){
if(!this.isActive){
this.isActive=true;
this.attachClassName(DockBinding.CLASSNAME_ACTIVE);
this.setProperty("active",true);
if(this._containingSplitPanelBinding){
this._containingSplitPanelBinding.isActive=true;
}
this.getTabBindings().each(function(tab){
tab.onActivate();
});
this._viewBindingList.each(function(view){
view.onActivate();
});
Application.activate(this);
}
};
DockBinding.prototype.deActivate=function(){
if(this.isActive==true){
this.isActive=false;
this.detachClassName(DockBinding.CLASSNAME_ACTIVE);
this.deleteProperty("active");
if(this._containingSplitPanelBinding){
this._containingSplitPanelBinding.isActive=false;
}
this.getTabBindings().each(function(tab){
tab.onDeactivate();
});
this._viewBindingList.each(function(view){
view.onDeactivate();
});
Application.deActivate(this);
}
};
DockBinding.prototype.closeTab=function(_cca,_ccb){
if(_cca.isDirty&&!_ccb){
var _ccc=Resolver.resolve(_cca.getLabel());
var self=this;
Dialog.question(StringBundle.getString("ui","WebSite.Application.DialogSaveResource.Title"),StringBundle.getString("ui","WebSite.Application.DialogSaveResource.Text").replace("${resourcename}",_ccc),Dialog.BUTTONS_YES_NO_CANCEL,{handleDialogResponse:function(_cce){
switch(_cce){
case Dialog.RESPONSE_YES:
setTimeout(function(){
self.saveContainedEditor(_cca);
},0);
break;
case Dialog.RESPONSE_NO:
self.removeTab(_cca);
break;
}
}});
}else{
this.removeTab(_cca);
}
};
DockBinding.prototype.closeTabsExcept=function(_ccf){
var tabs=this.getTabBindings();
while(tabs.hasNext()){
var tab=tabs.getNext();
if(tab!=_ccf){
this.closeTab(tab);
}
}
};
DockBinding.prototype.saveContainedEditor=function(_cd2){
var _cd3=_cd2.getAssociatedView();
_cd3.saveContainedEditor();
var self=this;
var _cd5={handleBroadcast:function(_cd6,arg){
switch(_cd6){
case BroadcastMessages.CURRENT_SAVED:
if(arg.handle==_cd3.getHandle()){
EventBroadcaster.unsubscribe(BroadcastMessages.CURRENT_SAVED,_cd5);
if(arg.isSuccess){
self.removeTab(_cd2);
}
}
break;
}
}};
EventBroadcaster.subscribe(BroadcastMessages.CURRENT_SAVED,_cd5);
};
DockBinding.prototype.appendTabByBindings=function(_cd8,_cd9){
if(this.isEmpty){
this.isEmpty=false;
this.isActivatable=true;
this.setWidth(false);
this.dispatchAction(DockBinding.ACTION_OPENED);
}
DockBinding.superclass.appendTabByBindings.call(this,_cd8,_cd9);
};
DockBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
DockBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
DockBinding.prototype.setWidth=function(_cda){
_cda=_cda?_cda+"px":"100%";
this.bindingElement.style.width=_cda;
};
DockBinding.prototype.show=function(){
if(this.isVisible){
DockBinding.superclass.show.call(this);
this.isFlexible=true;
this.shadowTree.dockLiner.style.display="block";
}
};
DockBinding.prototype.hide=function(){
if(!this.isVisible){
DockBinding.superclass.hide.call(this);
this.shadowTree.dockLiner.style.display="none";
this.isFlexible=false;
if(this.isActive){
this.deActivate();
}
}
};
DockBinding.prototype.showControls=function(_cdb){
var tabs=this.getChildBindingByLocalName(this._nodename_tabs);
if(_cdb){
tabs.controlGroupBinding.show();
}else{
tabs.controlGroupBinding.hide();
}
};
DockTabsBinding.prototype=new TabsBinding;
DockTabsBinding.prototype.constructor=DockTabsBinding;
DockTabsBinding.superclass=TabsBinding.prototype;
DockTabsBinding.NODENAME_TABBOX="dock";
DockTabsBinding.TABBUTTON_IMPLEMENTATION=DockTabsButtonBinding;
function DockTabsBinding(){
this.logger=SystemLogger.getLogger("DockTabsBinding");
}
DockTabsBinding.prototype.toString=function(){
return "[DockTabsBinding]";
};
DockTabsBinding.prototype.buildDOMContent=function(){
DockTabsBinding.superclass.buildDOMContent.call(this);
if(this.containingTabBoxBinding.type!=DockBinding.TYPE_EXPLORER){
this.controlGroupBinding=this.add(ControlGroupBinding.newInstance(this.bindingDocument));
this.controlGroupBinding.attachClassName("docktabscontrolgroup");
this.controlGroupBinding.add(this.getControlBinding(ControlBinding.TYPE_MAXIMIZE));
this.controlGroupBinding.attachRecursive();
}
};
DockTabsBinding.prototype.getControlBinding=function(type){
var _cde=DockControlBinding.newInstance(this.bindingDocument);
_cde.setControlType(type);
return _cde;
};
DockTabsBinding.prototype.flex=function(){
if(Client.isExplorer&&this.containingTabBoxBinding!=null){
var self=this;
function fix(){
var _ce0=self.containingTabBoxBinding.getWidth();
if(!isNaN(_ce0)){
_ce0=_ce0>0?_ce0-1:0;
self.bindingElement.style.width=new String(_ce0)+"px";
}
}
setTimeout(fix,250);
fix();
}
DockTabsBinding.superclass.flex.call(this);
};
DockTabsBinding.prototype.handleCrawler=function(_ce1){
DockTabsBinding.superclass.handleCrawler.call(this,_ce1);
switch(_ce1.id){
case FlexBoxCrawler.ID:
this._explorerFlexHack();
break;
}
};
DockTabsBinding.prototype._explorerFlexHack=function(){
if(Client.isExplorer&&this.containingTabBoxBinding!=null){
var self=this;
function fix(){
var _ce3=self.containingTabBoxBinding.getWidth();
if(!isNaN(_ce3)){
_ce3=_ce3>0?_ce3-1:0;
self.bindingElement.style.width=new String(_ce3)+"px";
}
}
setTimeout(fix,250);
fix();
}
};
DockTabsBinding.newInstance=function(_ce4){
var _ce5=DOMUtil.createElementNS(Constants.NS_UI,"ui:docktabs",_ce4);
return UserInterface.registerBinding(_ce5,DockTabsBinding);
};
DockTabBinding.prototype=new TabBinding;
DockTabBinding.prototype.constructor=DockTabBinding;
DockTabBinding.superclass=TabBinding.prototype;
DockTabBinding.ACTION_FORCE_CLEAN="docktab force clean";
DockTabBinding.ACTION_UPDATE_VISUAL="docktab update visual";
DockTabBinding.ACTION_UPDATE_TOKEN="docktab update token";
DockTabBinding.NODENAME_TABBOX="dock";
DockTabBinding.LABEL_TABLOADING="${string:Website.App.LabelLoading}";
DockTabBinding.LABEL_TABDEFAULT="${string:Website.App.LabelLoaded}";
DockTabBinding.LABEL_TABSAVED="${string:Website.App.LabelSaved}";
DockTabBinding.IMG_TABLOADING="${icon:loading}";
DockTabBinding.IMG_TABDEFAULT="${icon:default}";
function DockTabBinding(){
this.logger=SystemLogger.getLogger("DockTabBinding");
this.perspectiveNode=null;
this._controlGroupBinding=null;
this._viewBinding=null;
this.isDirty=false;
this.isInitiallyHidden=true;
this._entityToken=null;
this._canUpdateTree=true;
return this;
}
DockTabBinding.prototype.toString=function(){
return "[DockTabBinding]";
};
DockTabBinding.prototype.onBindingAttach=function(){
DockTabBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.BIND_TOKEN_TO_VIEW);
this.perspectiveNode=this.containingTabBoxBinding.perspectiveNode;
this.addActionListener(ControlBinding.ACTION_COMMAND,this);
if(this.containingTabBoxBinding.type!=DockBinding.EXPLORER){
this.setContextMenu(top.app.bindingMap.docktabpopup);
}
};
DockTabBinding.prototype.setAssociatedView=function(_ce6){
this._viewBinding=_ce6;
};
DockTabBinding.prototype.getAssociatedView=function(){
return this._viewBinding;
};
DockTabBinding.prototype.serialize=function(){
var _ce7=DockTabBinding.superclass.serialize.call(this);
if(_ce7){
_ce7.label=null;
_ce7.image=null;
_ce7.handle=this.getHandle();
}
return _ce7;
};
DockTabBinding.prototype.setHandle=function(_ce8){
this.setProperty("handle",_ce8);
};
DockTabBinding.prototype.getHandle=function(){
return this.getProperty("handle");
};
DockTabBinding.prototype.setEntityToken=function(_ce9){
if(this._entityToken==null){
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR);
}
this._entityToken=_ce9;
if(this.isAttached){
if(this.isSelected){
this._updateTree(true);
}
}
};
DockTabBinding.prototype.getEntityToken=function(){
return this._entityToken;
};
DockTabBinding.prototype.buildDOMContent=function(){
DockTabBinding.superclass.buildDOMContent.call(this);
this._controlGroupBinding=this.labelBinding.add(ControlGroupBinding.newInstance(this.bindingDocument));
var _cea=DialogControlBinding.newInstance(this.bindingDocument);
_cea.setControlType(ControlBinding.TYPE_CLOSE);
this._controlGroupBinding.add(_cea);
this._controlGroupBinding.attachRecursive();
};
DockTabBinding.prototype.setDirty=function(_ceb){
if(this.containingTabBoxBinding.type==DockBinding.TYPE_EDITORS){
if(this.isDirty!=_ceb){
this.isDirty=_ceb;
if(Binding.exists(this.labelBinding)){
var _cec=this.labelBinding.getLabel();
if(_cec!=null){
this.labelBinding.setLabel(_ceb?"*"+_cec:_cec.slice(1,_cec.length));
}else{
this.labelBinding.setLabel(_ceb?"*":"");
}
}
}
var _ced=top.app.bindingMap.broadcasterCurrentTabDirty;
if(this.isDirty==true){
this.subscribe(BroadcastMessages.SAVE_CURRENT);
EventBroadcaster.broadcast(BroadcastMessages.DOCKTAB_DIRTY,this);
_ced.enable();
}else{
this.unsubscribe(BroadcastMessages.SAVE_CURRENT);
EventBroadcaster.broadcast(BroadcastMessages.DOCKTAB_CLEAN,this);
_ced.disable();
}
}else{
Dialog.warning("Dirty denied","Only editor docks should invoke the dirty state!");
}
};
DockTabBinding.prototype.updateDisplay=function(_cee){
this.setLabel(_cee.getLabel());
this.setImage(_cee.getImage());
this.setToolTip(_cee.getToolTip());
};
DockTabBinding.prototype.updateEntityToken=function(_cef){
this.setEntityToken(_cef.getEntityToken());
};
DockTabBinding.prototype.handleAction=function(_cf0){
DockTabBinding.superclass.handleAction.call(this,_cf0);
var _cf1=_cf0.target;
switch(_cf0.type){
case ControlBinding.ACTION_COMMAND:
if(_cf1.controlType==ControlBinding.TYPE_CLOSE){
this.close();
}
break;
case MenuItemBinding.ACTION_COMMAND:
if(_cf0.listener==this.contextMenuBinding){
this._handleContextMenuItemBinding(_cf1);
}
break;
}
};
DockTabBinding.prototype._handleContextMenuItemBinding=function(_cf2){
var cmd=_cf2.getProperty("cmd");
switch(cmd){
case DockTabPopupBinding.CMD_REFRESH:
if(this.containingTabBoxBinding.type!=DockBinding.TYPE_TOOLS){
this.setLabel(DockTabBinding.LABEL_TABLOADING);
}
this.setImage(DockTabBinding.IMG_TABLOADING);
this._viewBinding.reload(Application.isDeveloperMode);
this.isDirty=false;
break;
case DockTabPopupBinding.CMD_MAKEDIRTY:
this.setDirty(true);
break;
case DockTabPopupBinding.CMD_VIEWSOURCE:
case DockTabPopupBinding.CMD_VIEWGENERATED:
case DockTabPopupBinding.CMD_VIEWSERIALIZED:
this._viewSource(cmd);
break;
case DockTabPopupBinding.CMD_CLOSETAB:
this.close();
break;
case DockTabPopupBinding.CMD_CLOSEOTHERS:
this.containingTabBoxBinding.closeTabsExcept(this);
break;
default:
alert("TODO!");
break;
}
};
DockTabBinding.prototype.setLabel=function(_cf4){
if(!_cf4){
if(!this.getLabel()){
_cf4=DockTabBinding.LABEL_TABLOADING;
}else{
if(this.getLabel()==DockTabBinding.LABEL_TABLOADING){
_cf4=DockTabBinding.LABEL_TABDEFAULT;
}
}
}
_cf4=this.isDirty?"*"+_cf4:_cf4;
DockTabBinding.superclass.setLabel.call(this,_cf4);
};
DockTabBinding.prototype.setImage=function(_cf5){
if(!_cf5){
if(!this.getImage()){
_cf5=DockTabBinding.IMG_TABLOADING;
}else{
if(this.getImage()==DockTabBinding.IMG_TABLOADING){
_cf5=DockTabBinding.IMG_TABDEFAULT;
}
}
}
DockTabBinding.superclass.setImage.call(this,_cf5);
};
DockTabBinding.prototype._viewSource=function(cmd){
var def=ViewDefinitions["Composite.Management.SourceCodeViewer"];
def.argument={action:cmd,doc:this._viewBinding.windowBinding.getContentDocument()};
var _cf8=Resolver.resolve(this.getLabel());
switch(cmd){
case DockTabPopupBinding.CMD_VIEWSOURCE:
def.label="Source: "+_cf8;
break;
case DockTabPopupBinding.CMD_VIEWGENERATED:
def.label="Generated: "+_cf8;
break;
case DockTabPopupBinding.CMD_VIEWSERIALIZED:
def.label="Serialized: "+_cf8;
break;
}
StageBinding.presentViewDefinition(def);
};
DockTabBinding.prototype.onActivate=function(){
this._updateBroadcasters();
if(this.isSelected){
this._updateTree();
}
if(this._controlGroupBinding){
this._controlGroupBinding.onActivate();
}
if(this.isSelected){
this._updateGlobalEntityToken();
}
};
DockTabBinding.prototype.onDeactivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onDeactivate();
}
};
DockTabBinding.prototype.onPageInitialize=function(page){
this._updateBroadcasters();
if(this._isEditorDockTab()){
if(!this.hasSubscription(BroadcastMessages.CLOSE_ALL)){
this.subscribe(BroadcastMessages.CLOSE_CURRENT);
this.subscribe(BroadcastMessages.CLOSE_ALL);
}
}
};
DockTabBinding.prototype.saveContainedEditor=function(){
if(this._isEditorDockTab()&&this.isDirty==true){
this._viewBinding.saveContainedEditor();
}
};
DockTabBinding.prototype.show=function(){
DockTabBinding.superclass.show.call(this);
if(this.isVisible&&this.isInitiallyHidden&&Binding.exists(this)){
this.isInitiallyHidden=false;
var _cfa=this.bindingElement;
setTimeout(function(){
_cfa.style.bottom="auto";
},25);
}
};
DockTabBinding.prototype.handleBroadcast=function(_cfb,arg){
DockTabBinding.superclass.handleBroadcast.call(this,_cfb,arg);
var body=this._viewBinding.getContentDocument().body;
var root=UserInterface.getBinding(body);
switch(_cfb){
case BroadcastMessages.SAVE_CURRENT:
if(this.isDirty&&this.isSelected&&root.isActivated){
this.saveContainedEditor();
}
break;
case BroadcastMessages.CURRENT_SAVED:
if(arg.handle==this.getAssociatedView().getHandle()){
this.unsubscribe(BroadcastMessages.CURRENT_SAVED);
if(arg.isSuccess){
this._onSaveSuccess();
}else{
this._onSaveFailure();
}
}
break;
case BroadcastMessages.CLOSE_CURRENT:
if(this._isEditorDockTab()){
if(this.isSelected&&root.isActivated){
this.close();
}
}
break;
case BroadcastMessages.CLOSE_ALL:
if(this._isEditorDockTab()){
this.close();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR:
if(this.isSelected){
if(UserInterface.isBindingVisible(this)){
this._updateTree();
}
}
break;
case BroadcastMessages.BIND_TOKEN_TO_VIEW:
if(arg.handle==this._viewBinding.getDefinition().handle){
this.setEntityToken(arg.entityToken);
if(this.isSelected){
this._updateTree();
}
}
break;
}
};
DockTabBinding.prototype.onSaveStart=function(){
this.subscribe(BroadcastMessages.CURRENT_SAVED);
};
DockTabBinding.prototype._onSaveSuccess=function(){
var page=this._viewBinding.getPageBinding();
if(page!=null&&page instanceof EditorPageBinding){
page.onSaveSuccess();
}
};
DockTabBinding.prototype._onSaveFailure=function(){
};
DockTabBinding.prototype.select=function(_d00){
DockTabBinding.superclass.select.call(this,_d00);
this._updateBroadcasters();
if(_d00!=true){
this._updateTree();
}
this._updateGlobalEntityToken();
};
DockTabBinding.prototype.close=function(){
this.containingTabBoxBinding.closeTab(this);
};
DockTabBinding.prototype._updateBroadcasters=function(){
if(this.isSelected){
var _d01=top.app.bindingMap.broadcasterCurrentTabDirty;
var _d02=top.app.bindingMap.broadcasterCurrentIsEditor;
if(this._isEditorDockTab()){
_d02.enable();
if(this.isDirty){
_d01.enable();
}else{
_d01.disable();
}
}else{
_d02.disable();
_d01.disable();
}
}
};
DockTabBinding.prototype._updateTree=function(_d03){
if(this._canUpdateTree||_d03){
EventBroadcaster.broadcast(BroadcastMessages.DOCKTABBINDING_SELECT,this);
}
};
DockTabBinding.prototype._isEditorDockTab=function(){
var _d04=false;
if(this._viewBinding!=null){
var win=this._viewBinding.getContentWindow();
if(win!=null&&win.bindingMap!=null){
var _d06=win.bindingMap.savebutton;
if(_d06!=null){
_d04=true;
}
}
}
return _d04;
};
DockTabBinding.prototype._updateGlobalEntityToken=function(){
StageBinding.entityToken=this._entityToken;
};
DockTabBinding.newInstance=function(_d07){
var _d08=DOMUtil.createElementNS(Constants.NS_UI,"ui:docktab",_d07);
return UserInterface.registerBinding(_d08,DockTabBinding);
};
DockPanelsBinding.prototype=new TabPanelsBinding;
DockPanelsBinding.prototype.constructor=DockPanelsBinding;
DockPanelsBinding.superclass=TabPanelsBinding.prototype;
function DockPanelsBinding(){
this.logger=SystemLogger.getLogger("DockPanelsBinding");
this.isVisible=true;
return this;
}
DockPanelsBinding.prototype.toString=function(){
return "[DockPanelsBinding]";
};
DockPanelsBinding.newInstance=function(_d09){
var _d0a=DOMUtil.createElementNS(Constants.NS_UI,"ui:dockpanels",_d09);
return UserInterface.registerBinding(_d0a,DockPanelsBinding);
};
DockPanelBinding.prototype=new TabPanelBinding;
DockPanelBinding.prototype.constructor=DockPanelBinding;
DockPanelBinding.superclass=TabPanelBinding.prototype;
DockPanelBinding.ACTION_FORCE_SELECT="dockpanel force select";
function DockPanelBinding(){
this.logger=SystemLogger.getLogger("DockPanelBinding");
this.viewBinding=null;
return this;
}
DockPanelBinding.prototype.toString=function(){
return "[DockPanelBinding]";
};
DockPanelBinding.prototype.onBindingDispose=function(){
DockPanelBinding.superclass.onBindingDispose.call(this);
this.dispatchAction(Binding.ACTION_DISPOSED);
};
DockPanelBinding.prototype.select=function(_d0b){
DockPanelBinding.superclass.select.call(this,_d0b);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
};
DockPanelBinding.prototype.unselect=function(){
DockPanelBinding.superclass.unselect.call(this);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
};
DockPanelBinding.prototype.flex=function(){
this.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
};
DockPanelBinding.prototype.handleCrawler=function(_d0c){
DockPanelBinding.superclass.handleCrawler.call(this,_d0c);
if(_d0c.response==null){
if(_d0c.type==NodeCrawler.TYPE_DESCENDING){
if(this.viewBinding!=null){
if(_d0c.id==FocusCrawler.ID){
_d0c.nextNode=this.viewBinding.bindingElement;
}
}
}
}
};
DockPanelBinding.newInstance=function(_d0d){
var _d0e=DOMUtil.createElementNS(Constants.NS_UI,"ui:dockpanel",_d0d);
return UserInterface.registerBinding(_d0e,DockPanelBinding);
};
DockControlBinding.prototype=new ControlBinding;
DockControlBinding.prototype.constructor=DockControlBinding;
DockControlBinding.superclass=ControlBinding.prototype;
function DockControlBinding(){
this.logger=SystemLogger.getLogger("DockControlBinding");
}
DockControlBinding.prototype.toString=function(){
return "[DockControlBinding]";
};
DockControlBinding.prototype.onBindingRegister=function(){
DockControlBinding.superclass.onBindingRegister.call(this);
this.setImageProfile(DockControlImageProfile);
};
DockControlBinding.newInstance=function(_d0f){
var _d10=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_d0f);
return UserInterface.registerBinding(_d10,DockControlBinding);
};
DockTabPopupBinding.prototype=new PopupBinding;
DockTabPopupBinding.prototype.constructor=DockTabPopupBinding;
DockTabPopupBinding.superclass=PopupBinding.prototype;
DockTabPopupBinding.CMD_RESTORE="restore";
DockTabPopupBinding.CMD_MINIMIZE="minimize";
DockTabPopupBinding.CMD_MAXIMIZE="maximize";
DockTabPopupBinding.CMD_REFRESH="refreshview";
DockTabPopupBinding.CMD_MAKEDIRTY="makedirty";
DockTabPopupBinding.CMD_CLOSETAB="closetab";
DockTabPopupBinding.CMD_CLOSEOTHERS="closeothers";
DockTabPopupBinding.CMD_CLOSEALL="closeall";
DockTabPopupBinding.CMD_VIEWSOURCE="viewsource";
DockTabPopupBinding.CMD_VIEWGENERATED="viewgenerated";
DockTabPopupBinding.CMD_VIEWSERIALIZED="viewserialized";
function DockTabPopupBinding(){
this.logger=SystemLogger.getLogger("DockTabPopupBinding");
}
DockTabPopupBinding.prototype.toString=function(){
return "[DockTabPopupBinding]";
};
DockTabPopupBinding.prototype.onBindingAttach=function(){
DockTabPopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
ViewSetBinding.prototype=new Binding;
ViewSetBinding.prototype.constructor=ViewSetBinding;
ViewSetBinding.superclass=Binding.prototype;
function ViewSetBinding(){
this.logger=SystemLogger.getLogger("ViewSetBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
ViewSetBinding.prototype.toString=function(){
return "[ViewSetBinding]";
};
ViewBinding.prototype=new FlexBoxBinding;
ViewBinding.prototype.constructor=ViewBinding;
ViewBinding.superclass=FlexBoxBinding.prototype;
ViewBinding.ACTION_LOADED="view loaded";
ViewBinding.ACTION_ONCLOSE="view onclose";
ViewBinding.ACTION_ONCLOSE_FORCE="view onclose force";
ViewBinding.ACTION_CLOSED="view closed";
ViewBinding.ACTION_DETACH="view detach";
ViewBinding.HORIZONTAL_ADJUST=1;
ViewBinding.VERTICAL_ADJUST=1;
ViewBinding.TYPE_EXPLORERVIEW="explorerview";
ViewBinding.TYPE_DOCKVIEW="dockview";
ViewBinding.TYPE_DIALOGVIEW="dialogview";
ViewBinding.CLASSNAME_ACTIVE="active";
ViewBinding.TIMEOUT=15;
ViewBinding._instances=new Map();
ViewBinding.getInstance=function(_d11){
var _d12=ViewBinding._instances.get(_d11);
if(!_d12){
var cry="ViewBinding.getInstance: No such instance: "+_d11;
SystemLogger.getLogger("ViewBinding [static]").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
}
}
return _d12;
};
function ViewBinding(){
this.logger=SystemLogger.getLogger("ViewBinding");
this._viewDefinition=null;
this.isVisible=false;
this._isViewBindingInitialized=false;
this._snapBinding=null;
this.isFreeFloating=false;
this.windowBinding=null;
this._coverBinding=null;
this._isLoaded=false;
this._isFirstShow=true;
this._type=ViewBinding.TYPE_DOCKVIEW;
this._pageBinding=null;
this._lastknownposition=null;
this._lastknowndimension=null;
this.isActivated=false;
return this;
}
ViewBinding.prototype.toString=function(){
return "[ViewBinding]";
};
ViewBinding.prototype.onBindingRegister=function(){
ViewBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RootBinding.ACTION_PHASE_1);
this.addActionListener(RootBinding.ACTION_PHASE_2);
this.addActionListener(RootBinding.ACTION_PHASE_3);
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(WindowBinding.ACTION_ONLOAD);
this.addActionListener(PageBinding.ACTION_ATTACHED);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(ViewBinding.ACTION_DETACH);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_NEXT);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_PREVIOUS);
this.addActionListener(WizardPageBinding.ACTION_FINISH);
this.subscribe(BroadcastMessages.CLOSE_VIEW);
this.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN);
};
ViewBinding.prototype.onBindingAttach=function(){
ViewBinding.superclass.onBindingAttach.call(this);
this.attachClassName(this._type);
if(Client.isExplorer==true){
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
this._coverBinding.attach();
}
this.windowBinding.attach();
};
ViewBinding.prototype.updatePositionDimension=function(){
var snap=this._snapBinding;
var _d15=!System.hasActivePerspectives&&Client.isExplorer;
if(this.isFreeFloating==true&&!_d15){
if(snap.isVisible==true){
if(snap.isAttached==true){
var _d16=snap.boxObject.getGlobalPosition();
var _d17=snap.boxObject.getDimension();
if(!Point.isEqual(_d16,this._lastknownposition)){
this.setPosition(_d16);
this._lastknownposition=_d16;
}
if(!Dimension.isEqual(_d17,this._lastknowndimension)){
this.setDimension(_d17);
this._lastknowndimension=_d17;
var _d18=_d17.h-ViewBinding.VERTICAL_ADJUST;
_d18=_d18<0?0:_d18;
this.windowBinding.getBindingElement().style.height=new String(_d18)+"px";
this.windowBinding.reflex();
}else{
throw "Could not snap to unattached binding!";
}
}
}
}
};
ViewBinding.prototype.onBindingDispose=function(){
ViewBinding.superclass.onBindingDispose.call(this);
if(this._viewDefinition!=null){
var _d19=this._viewDefinition.flowHandle;
if(_d19!=null){
FlowControllerService.CancelFlow(_d19);
}
}
if(this._viewDefinition!=null){
var _d1a=this._viewDefinition.handle;
EventBroadcaster.broadcast(BroadcastMessages.VIEW_CLOSED,_d1a);
this.logger.fine("ViewBinding closed: \""+_d1a+"\"");
}
this.dispatchAction(ViewBinding.ACTION_CLOSED);
};
ViewBinding.prototype.setType=function(type){
this._type=type;
};
ViewBinding.prototype.getType=function(){
return this._type;
};
ViewBinding.prototype.getHandle=function(){
var _d1c=null;
if(this._viewDefinition!=null){
_d1c=this._viewDefinition.handle;
}
return _d1c;
};
ViewBinding.prototype.initialize=function(){
if(!this._isViewBindingInitialized){
this._isViewBindingInitialized=true;
this.windowBinding.setURL(this._viewDefinition.url);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
}else{
throw ("Somehow ViewBinding got initialized twice: "+this.getHandle());
}
};
ViewBinding.prototype.setDefinition=function(_d1d){
this._viewDefinition=_d1d;
if(_d1d.position==DockBinding.MAIN){
this.subscribe(BroadcastMessages.CLOSE_VIEWS);
}
};
ViewBinding.prototype.getDefinition=function(){
return this._viewDefinition;
};
ViewBinding.prototype.handleAction=function(_d1e){
ViewBinding.superclass.handleAction.call(this,_d1e);
var _d1f=_d1e.target;
switch(_d1e.type){
case RootBinding.ACTION_PHASE_1:
case RootBinding.ACTION_PHASE_2:
case RootBinding.ACTION_PHASE_3:
if(_d1e.type==RootBinding.ACTION_PHASE_1){
if(this.isActivated&&!_d1f.isActivated){
_d1f.onActivate();
}
}
_d1e.consume();
break;
case Binding.ACTION_DIMENSIONCHANGED:
if(this.isFreeFloating==true){
if(_d1f==this._snapBinding){
if(this.isVisible==true){
this.updatePositionDimension();
_d1e.consume();
}
}
}
break;
case Binding.ACTION_VISIBILITYCHANGED:
if(this.isFreeFloating==true){
if(_d1f==this._snapBinding){
if(_d1f.isVisible==true){
this.show();
}else{
this.hide();
}
}
}
break;
case WindowBinding.ACTION_LOADED:
case WindowBinding.ACTION_ONLOAD:
if(_d1f.getContentWindow().isPostBackDocument){
if(_d1e.type==WindowBinding.ACTION_ONLOAD){
var arg=this._viewDefinition.argument;
if(arg!=null&&arg.list!=null&&arg.url!=null){
_d1f.post(arg.list,arg.url);
arg.list=null;
arg.url=null;
}
}
}else{
if(Client.isExplorer==true){
if(_d1f==this.windowBinding){
var self=this;
DOMEvents.addEventListener(_d1f.getContentWindow(),DOMEvents.UNLOAD,{handleEvent:function(e){
if(Binding.exists(self._coverBinding)==true){
self._coverBinding.show();
}
}});
}
if(_d1e.type==WindowBinding.ACTION_ONLOAD){
if(this._coverBinding){
this._coverBinding.hide();
}
}
}
}
if(_d1e.type==WindowBinding.ACTION_ONLOAD){
var win=_d1f.getContentWindow();
if(win.WindowManager==null){
if(!this._isLoaded){
this._onLoadingCompleted(_d1f);
}
}
}
_d1e.consume();
break;
case PageBinding.ACTION_ATTACHED:
if(!_d1f.label&&this._viewDefinition.label){
_d1f.label=this._viewDefinition.label;
}
if(!_d1f.image&&this._viewDefinition.image){
_d1f.image=this._viewDefinition.image;
}
if(_d1f.bindingWindow==this.getContentWindow()){
this._pageBinding=_d1f;
this._injectPageArgument();
}
case PageBinding.ACTION_INITIALIZED:
if(_d1f.bindingWindow==this.getContentWindow()){
if(Client.isExplorer&&this._coverBinding){
this._coverBinding.hide();
}
if(!this._isLoaded){
this._onLoadingCompleted();
}
}
break;
case Binding.ACTION_DISPOSED:
if(this.isFreeFloating&&_d1f==this._snapBinding){
this.removeActionListener(Binding.ACTION_DISPOSED);
this.dispose();
_d1e.consume();
}
break;
case WizardPageBinding.ACTION_NAVIGATE_NEXT:
case WizardPageBinding.ACTION_NAVIGATE_PREVIOUS:
case WizardPageBinding.ACTION_FINISH:
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
_d1e.consume();
break;
case ViewBinding.ACTION_DETACH:
this.setDefinition(ViewDefinitions["Composite.Management.Null"]);
ViewBinding._instances.set(this._viewDefinition.handle,this);
break;
}
};
ViewBinding.prototype.handleBroadcast=function(_d24,arg){
ViewBinding.superclass.handleBroadcast.call(this,_d24,arg);
switch(_d24){
case BroadcastMessages.CLOSE_VIEW:
if(arg==this._viewDefinition.handle){
this.dispatchAction(ViewBinding.ACTION_ONCLOSE);
}
break;
case BroadcastMessages.CLOSE_VIEWS:
if(this._viewDefinition.position==DockBinding.MAIN){
this.dispatchAction(ViewBinding.ACTION_ONCLOSE_FORCE);
}
break;
case BroadcastMessages.APPLICATION_SHUTDOWN:
this.dispose();
break;
}
};
ViewBinding.prototype._onLoadingCompleted=function(){
if(!this._isLoaded){
this._open();
this._isLoaded=true;
}
};
ViewBinding.prototype._open=function(){
ViewBinding._instances.set(this._viewDefinition.handle,this);
this.dispatchAction(ViewBinding.ACTION_LOADED);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENED,this._viewDefinition.handle);
this.show();
this.logger.fine("ViewBinding opened: \""+this._viewDefinition.handle+"\"");
};
ViewBinding.prototype.update=function(){
this.dispatchAction(Binding.ACTION_ACTIVATED);
this._injectPageArgument();
};
ViewBinding.prototype._injectPageArgument=function(){
var page=this._pageBinding;
var def=this._viewDefinition;
if(page!=null){
var _d28=def.argument;
if(_d28!=null){
page.setPageArgument(_d28);
}
var _d29=def.width;
if(_d29!=null){
page.width=_d29;
}
var _d2a=def.height;
if(_d2a!=null){
page.height=_d2a;
}
}
};
ViewBinding.prototype.handleCrawler=function(_d2b){
ViewBinding.superclass.handleCrawler.call(this,_d2b);
switch(_d2b.type){
case NodeCrawler.TYPE_DESCENDING:
if(this.isFreeFloating==true){
if(_d2b.id==FocusCrawler.ID){
if(_d2b.previousNode!=this._snapBinding.bindingElement){
_d2b.response=NodeCrawler.SKIP_NODE;
}
}
}
break;
case NodeCrawler.TYPE_ASCENDING:
if(this.isFreeFloating==true){
_d2b.nextNode=this._snapBinding.bindingElement;
}
break;
}
};
ViewBinding.prototype.show=function(){
if(!this.isVisible){
if(this.isFreeFloating==true){
if(Client.isWebKit){
this.bindingElement.style.display="";
}
if(this._type==ViewBinding.TYPE_DOCKVIEW&&this.windowBinding!=null){
this.windowBinding.getBindingElement().style.position="static";
}
this.updatePositionDimension();
this.isVisible=true;
}else{
ViewBinding.superclass.show.call(this);
}
}
};
ViewBinding.prototype.hide=function(){
if(this.isVisible==true){
if(this.isFreeFloating==true){
if(this.windowBinding){
this.windowBinding.getBindingElement().style.position="absolute";
}
this.bindingElement.style.top="-10000px";
if(Client.isWebKit){
this.bindingElement.style.display="none";
}
this.isVisible=false;
}else{
ViewBinding.superclass.hide.call(this);
}
}
};
ViewBinding.prototype.setPosition=function(_d2c){
_d2c.x+=ViewBinding.HORIZONTAL_ADJUST;
this.bindingElement.style.left=_d2c.x+"px";
this.bindingElement.style.top=_d2c.y+"px";
};
ViewBinding.prototype.setDimension=function(_d2d){
_d2d.h-=ViewBinding.VERTICAL_ADJUST;
_d2d.w-=ViewBinding.HORIZONTAL_ADJUST;
_d2d.w-=1;
if(_d2d.h<0){
_d2d.h=0;
}
if(_d2d.w<0){
_d2d.w=0;
}
this.bindingElement.style.width=String(_d2d.w)+"px";
this.bindingElement.style.height=String(_d2d.h)+"px";
};
ViewBinding.prototype.snapToBinding=function(_d2e){
this.isFlexBoxBehavior=false;
_d2e.addActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
_d2e.addActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
_d2e.addActionListener(Binding.ACTION_DISPOSED,this);
if(this._snapBinding){
this._snapBinding.removeActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_DISPOSED,this);
this._snapBinding.viewBinding=null;
}
this._snapBinding=_d2e;
this._snapBinding.viewBinding=this;
this.isFreeFloating=true;
if(!this._isViewBindingInitialized){
this.initialize();
}
};
ViewBinding.prototype.getMigrationParent=function(){
var _d2f=null;
if(this.isFreeFloating==true){
_d2f=this._snapBinding.getBindingElement();
}else{
_d2f=ViewBinding.superclass.getMigrationParent.call(this);
}
return _d2f;
};
ViewBinding.prototype.getContentWindow=function(){
return this.windowBinding.getContentWindow();
};
ViewBinding.prototype.getContentDocument=function(){
return this.windowBinding.getContentDocument();
};
ViewBinding.prototype.getRootBinding=function(){
return this.windowBinding.getRootBinding();
};
ViewBinding.prototype.getPageBinding=function(){
return this._pageBinding;
};
ViewBinding.prototype.reload=function(_d30){
this._isLoaded=false;
this.windowBinding.reload(_d30);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
};
ViewBinding.prototype.saveContainedEditor=function(){
var _d31=false;
var page=this._pageBinding;
if(page!=null&&page instanceof EditorPageBinding){
if(page.canSave()){
page.doSave();
_d31=true;
}
}
if(!_d31){
this.logger.error("saveContainedEditor failed");
}
};
ViewBinding.prototype.onActivate=function(){
if(!this.isActivated){
this.isActivated=true;
var root=this.getRootBinding();
if(root!=null){
root.onActivate();
}
}
};
ViewBinding.prototype.onDeactivate=function(){
if(this.isActivated==true){
this.isActivated=false;
var root=this.getRootBinding();
if(root!=null){
this.getRootBinding().onDeactivate();
}
}
};
ViewBinding.newInstance=function(_d35){
var _d36=DOMUtil.createElementNS(Constants.NS_UI,"ui:view",_d35);
var _d37=UserInterface.registerBinding(_d36,ViewBinding);
_d37.windowBinding=_d37.add(WindowBinding.newInstance(_d35));
return _d37;
};
PageBinding.prototype=new FocusBinding;
PageBinding.prototype.constructor=Binding;
PageBinding.superclass=FocusBinding.prototype;
PageBinding.ACTION_ATTACHED="page attached";
PageBinding.ACTION_DETACHED="page detached";
PageBinding.ACTION_INITIALIZED="page initialized";
PageBinding.ACTION_DOPOSTBACK="page do postback";
PageBinding.ACTION_VALIDATE="page validate";
PageBinding.ACTION_DOVALIDATEDPOSTBACK="page do validated postback";
PageBinding.ACTION_BLOCK_INIT="page block init";
PageBinding.ACTION_UNBLOCK_INIT="page unblock init";
PageBinding.ACTION_UPDATING="page updating";
PageBinding.ACTION_UPDATED="page updated";
PageBinding.ACTION_GETMESSAGES="page poll messagequeue";
PageBinding.CLASSNAME_SUBPAGE="dialogsubpage";
PageBinding.TIMEOUT=250;
function PageBinding(){
this.logger=SystemLogger.getLogger("PageBinding");
this.label=null;
this.image=null;
this.toolTip=null;
this._isPageBindingInitialized=false;
this.pageArgument=null;
this.isDialogSubPage=false;
this.isFitAsDialogSubPage=true;
this._initBlockers=null;
this._isReadyForInitialize=false;
this.isActivationAware=false;
this.isActivated=false;
this._canPostBack=true;
this._responseResolver=null;
this._isUpdating=false;
}
PageBinding.prototype.toString=function(){
return "[PageBinding]";
};
PageBinding.prototype.onBindingRegister=function(){
PageBinding.superclass.onBindingRegister.call(this);
var root=UserInterface.getBinding(this.bindingDocument.body);
root.addActionListener(RootBinding.ACTION_PHASE_3,this);
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
this.addActionListener(PageBinding.ACTION_DOVALIDATEDPOSTBACK);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
this.addActionListener(PageBinding.ACTION_BLOCK_INIT);
this.addActionListener(PageBinding.ACTION_UNBLOCK_INIT);
this.addActionListener(PageBinding.ACTION_GETMESSAGES);
this.subscribe(BroadcastMessages.MESSAGEQUEUE_REQUESTED);
};
PageBinding.prototype.onBindingAttach=function(){
PageBinding.superclass.onBindingAttach.call(this);
Application.lock(this);
this.parseDOMProperties();
this.dispatchAction(PageBinding.ACTION_ATTACHED);
};
PageBinding.prototype.onBindingDispose=function(){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.removeActionListener(RootBinding.ACTION_PHASE_3,this);
this.dispatchAction(PageBinding.ACTION_DETACHED);
};
PageBinding.prototype.parseDOMProperties=function(){
if(this.getProperty("label")){
this.label=this.getProperty("label");
}
if(this.getProperty("labelfield")){
this.labelfield=this.getProperty("labelfield");
}
if(this.getProperty("image")){
this.image=this.getProperty("image");
}
this.toolTip=this.getProperty("tooltip");
if(this.getProperty("fitasdialogsubpage")==false){
this.isFitAsDialogSubPage=false;
}
};
PageBinding.prototype.setPageArgument=function(arg){
if(Application.isOperational){
this.dispatchAction(DockPanelBinding.ACTION_FORCE_SELECT);
}
this.pageArgument=arg;
};
PageBinding.prototype.onBeforePageInitialize=function(){
this._isReadyForInitialize=true;
if(this._initBlockers==null){
this.onPageInitialize();
}
};
PageBinding.prototype.onPageInitialize=function(){
if(!this._isPageBindingInitialized){
this._isPageBindingInitialized=true;
if(this._isDotNet()){
this._setupDotNet();
}
if(this.pageArgument&&this.pageArgument instanceof DataBindingMap){
this.bindingWindow.DataManager.populateDataBindings(this.pageArgument);
}
var self=this;
setTimeout(function(){
try{
if(Binding.exists(self)==true){
self.bindingElement.style.visibility="visible";
self.dispatchAction(PageBinding.ACTION_INITIALIZED);
self.onAfterPageInitialize();
}else{
Application.unlock(Application,true);
SystemLogger.getLogger("PageBinding").warn("Premature PageBinding dispose? Please consult your developer.");
}
}
catch(exception){
self.logger.error(exception);
SystemDebug.stack(arguments);
throw exception;
}
},PageBinding.TIMEOUT);
}else{
if(Client.isExplorer==true){
this.logger.error("PageBinding: Somehow initialized twice");
this.logger.error(arguments.caller.callee.toString());
}else{
throw "PageBinding: Somehow initialized twice";
}
}
};
PageBinding.prototype.onAfterPageInitialize=function(){
this.removeActionListener(PageBinding.ACTION_BLOCK_INIT);
this.removeActionListener(PageBinding.ACTION_UNBLOCK_INIT);
Application.unlock(this);
this.isActivationAware=true;
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this);
if(UserInterface.isBindingVisible(this)){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
};
PageBinding.prototype.onBeforeUpdates=function(){
this._isUpdating=true;
this.dispatchAction(PageBinding.ACTION_UPDATING);
};
PageBinding.prototype.onAfterUpdates=function(){
this.parseDOMProperties();
this._isUpdating=false;
this.dispatchAction(PageBinding.ACTION_UPDATED);
};
PageBinding.prototype.makeDialogSubPage=function(){
if(this.isFitAsDialogSubPage){
if(Client.isExplorer){
this.setFlexibility(true);
}
this.attachClassName(PageBinding.CLASSNAME_SUBPAGE);
this.isDialogSubPage=true;
}
};
PageBinding.prototype._setupDotNet=function(){
var self=this;
var form=this.bindingDocument.forms[0];
var _d3f=this.bindingWindow.__doPostBack;
var _d40=false;
if(!form.__isSetup){
DOMEvents.addEventListener(this.bindingWindow,DOMEvents.UNLOAD,{handleEvent:function(){
if(_d40){
Application.unlock(self);
}
}});
}
this.bindingWindow.__doPostBack=function(_d41,_d42){
if(!form.__isSetup){
Application.lock(self);
_d40=true;
}
self.manifestAllDataBindings();
_d3f(_d41,_d42);
if(Application.isDeveloperMode){
self._debugDotNetPostback();
}
};
};
PageBinding.prototype.postMessage=function(_d43,list){
var _d45=this.bindingWindow.bindingMap.__REQUEST;
if(_d45!=null&&this._isDotNet()){
switch(_d43){
case EditorPageBinding.MESSAGE_SAVE:
case EditorPageBinding.MESSAGE_PERSIST:
if(this.bindingWindow.DataManager.isDirty){
if(this.validateAllDataBindings()){
if(list!=null){
list.add(this);
}
_d45.postback(_d43);
}
}
break;
default:
_d45.postback(_d43);
break;
}
}
if(list!=null){
this._postMessageToDescendants(_d43,list);
}
};
PageBinding.prototype._postMessageToDescendants=function(_d46,list){
var _d48=this.getDescendantBindingsByType(WindowBinding);
_d48.each(function(win){
var page=win.getPageBinding();
if(page!=null){
page.postMessage(_d46,list);
}
});
};
PageBinding.prototype._debugDotNetPostback=function(){
var list=new List();
new List(this.bindingDocument.forms[0].elements).each(function(_d4c){
if(_d4c.name==null||_d4c.name==""){
return;
}
list.add({name:_d4c.name,value:_d4c.value});
});
var out="";
list.each(function(_d4e){
out+=_d4e.name+": "+_d4e.value+"\n";
});
this.logger.debug(out);
};
PageBinding.prototype.handleAction=function(_d4f){
PageBinding.superclass.handleAction.call(this,_d4f);
var _d50=_d4f.target;
switch(_d4f.type){
case RootBinding.ACTION_PHASE_3:
if(_d50==UserInterface.getBinding(this.bindingDocument.body)){
_d50.removeActionListener(RootBinding.ACTION_PHASE_3,this);
if(!this._isPageBindingInitialized){
try{
this.onBeforePageInitialize();
}
catch(exception){
alert(exception);
SystemDebug.stack(arguments);
throw exception;
}
}
}
break;
case PageBinding.ACTION_DOPOSTBACK:
if(this._isDotNet()){
this.doPostBack(_d50);
}
_d4f.consume();
break;
case PageBinding.ACTION_DOVALIDATEDPOSTBACK:
if(this._isDotNet()){
var _d51=this.validateAllDataBindings();
if(_d51){
this.doPostBack(_d50);
}
}
_d4f.consume();
break;
case BalloonBinding.ACTION_INITIALIZE:
_d4f.consume();
break;
case PageBinding.ACTION_BLOCK_INIT:
if(this._initBlockers==null){
this._initBlockers=new Map();
}
this._initBlockers.set(_d50.key,true);
break;
case PageBinding.ACTION_UNBLOCK_INIT:
if(this._initBlockers!=null){
if(this._initBlockers.has(_d50.key)){
this._initBlockers.del(_d50.key);
if(!this._initBlockers.hasEntries()){
this._initBlockers=null;
if(this._isReadyForInitialize==true){
var self=this;
setTimeout(function(){
self.onBeforePageInitialize();
},0);
}
}
}
}
break;
case PageBinding.ACTION_GETMESSAGES:
if(UpdateMananger.isUpdating){
var self=this;
var _d53={handleAction:function(_d54){
if(_d54.target==self){
self.removeActionListener(PageBinding.ACTION_UPDATED,_d53);
MessageQueue.udpdate();
}
}};
this.addActionListener(PageBinding.ACTION_UPDATED,_d53);
}else{
MessageQueue.udpdate();
}
_d4f.consume();
break;
}
};
PageBinding.prototype.handleBroadcast=function(_d55,arg){
PageBinding.superclass.handleBroadcast.call(this,_d55,arg);
switch(_d55){
case BroadcastMessages.MESSAGEQUEUE_REQUESTED:
var _d57=arg;
if(!this._canPostBack&&!_d57){
this._canPostBack=true;
Application.unlock(this);
}
break;
}
};
PageBinding.prototype._isDotNet=function(){
var form=this.bindingDocument.forms[0];
return (form!=null&&typeof this.bindingWindow.__doPostBack!="undefined");
};
PageBinding.prototype.doPostBack=function(_d59){
if(this._canPostBack){
if(_d59!=null&&this._isDotNet()){
var _d5a=_d59.getCallBackID();
var _d5b=_d59.getCallBackArg();
if(_d5a!=null){
_d5a=_d5a.replace(/_/g,"$");
}else{
_d5a="";
}
if(_d5b==null){
_d5b="";
}
this.bindingWindow.__doPostBack(_d5a,_d5b);
}
}
};
PageBinding.prototype.validateAllDataBindings=function(_d5c){
var _d5d=true;
var _d5e=this.bindingWindow.DataManager.getAllDataBindings();
while(_d5e.hasNext()&&_d5d){
var _d5f=_d5e.getNext();
if(_d5f.isAttached){
var _d60=_d5f.validate();
if(_d5d&&!_d60){
_d5d=false;
this.logger.debug("Invalid DataBinding: "+_d5f.toString()+" ("+_d5f.getName()+")");
if(_d5c){
var _d61=_d5f.getAncestorBindingByType(TabPanelBinding);
if(_d61!=null&&!_d61.isVisible){
var _d62=_d61.getAncestorBindingByType(TabBoxBinding);
var _d63=_d62.getTabBinding(_d61);
_d62.select(_d63);
}
}
break;
}
}
}
return _d5d;
};
PageBinding.prototype.manifestAllDataBindings=function(){
var list=new List();
var _d65=this.bindingWindow.DataManager.getAllDataBindings();
while(_d65.hasNext()){
var _d66=_d65.getNext();
if(_d66.isAttached){
var _d67=_d66.manifest();
if(_d67!=null){
list.add(_d67);
}
}
}
return list;
};
PageBinding.prototype.cleanAllDataBindings=function(){
var _d68=this.bindingWindow.DataManager.getAllDataBindings();
while(_d68.hasNext()){
var _d69=_d68.getNext();
if(_d69.isAttached){
_d69.clean();
}
}
};
PageBinding.prototype.getLabel=function(){
var _d6a="";
if(!_d6a&&this.labelfield){
var _d6b=this.bindingWindow.DataManager.getDataBinding(this.labelfield);
if(_d6b!=null&&_d6b.getLabel){
_d6a=_d6b.getLabel();
}else{
if(_d6b!=null&&_d6b.getValue){
_d6a=_d6b.getValue();
}
}
}
if(!_d6a&&this.label){
_d6a=this.label;
}
return _d6a;
};
PageBinding.prototype.getImage=function(){
return this.image;
};
PageBinding.prototype.getToolTip=function(){
return this.toolTip;
};
PageBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
PageBinding.prototype.onActivate=function(){
if(Binding.exists(this)){
if(!this.isActivated){
this.isActivated=true;
if(this._isFocusManager){
if(UserInterface.isBindingVisible(this)){
try{
var win=this.bindingWindow;
win.focus();
}
catch(exception){
}
if(this._cachedFocus!=null){
var self=this;
setTimeout(function(){
if(FocusBinding.focusedBinding==null){
self._focusPreviouslyFocused();
}
},0);
}else{
this._focusFirstFocusable();
}
}
}
}
}
};
PageBinding.prototype.onDeactivate=function(){
if(this.isActivated==true){
this.isActivated=false;
if(this._cachedFocus!=null){
var _d6e=this._cachedFocus.getBinding();
if(_d6e){
_d6e.blur();
}
}
if(FocusBinding.activeInstance==this){
FocusBinding.activeInstance=null;
}
}
};
DialogPageBinding.prototype=new PageBinding;
DialogPageBinding.prototype.constructor=DialogPageBinding;
DialogPageBinding.superclass=PageBinding.prototype;
DialogPageBinding.DEFAULT_WIDTH=443;
DialogPageBinding.DEFAULT_TABBOXED_WIDTH=476;
DialogPageBinding.DEFAULT_HEIGHT="auto";
DialogPageBinding.DEFAULT_CONTROLS="close";
DialogPageBinding.DEFAULT_RESIZABLE=false;
DialogPageBinding.ACTION_RESPONSE="dialogpageresponse";
DialogPageBinding.ACTION_LAYOUT_D="dialoglayoutd";
DialogPageBinding.CLASSNAME_TABBOXED="tabboxed";
function DialogPageBinding(){
this.logger=SystemLogger.getLogger("DialogPageBinding");
this.response=null;
this.result=null;
this.width=null;
this.height=null;
this.minheight=null;
this.controls=null;
this.isResizable=null;
this.isAutoHeightLayoutMode=false;
}
DialogPageBinding.prototype.toString=function(){
return "[DialogPageBinding]";
};
DialogPageBinding.prototype.onBindingRegister=function(){
DialogPageBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_ATTACHED);
this.addActionListener(Binding.ACTION_DIRTY);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
};
DialogPageBinding.prototype.parseDOMProperties=function(){
DialogPageBinding.superclass.parseDOMProperties.call(this);
if(this.width==null){
var _d6f=this.getProperty("width");
if(!_d6f){
_d6f=this.hasClassName(DialogPageBinding.CLASSNAME_TABBOXED)?DialogPageBinding.DEFAULT_TABBOXED_WIDTH:DialogPageBinding.DEFAULT_WIDTH;
}
this.width=_d6f;
}
if(this.height==null){
var _d70=this.getProperty("height");
this.height=_d70?_d70:DialogPageBinding.DEFAULT_HEIGHT;
}
if(this.minheight==null){
var _d71=this.getProperty("minheight");
if(_d71!=null){
this.minheight=_d71;
}
}
if(this.controls==null){
var _d72=this.getProperty("controls");
this.controls=_d72?_d72:DialogPageBinding.DEFAULT_CONTROLS;
}
if(!this.isResizable){
var _d73=this.getProperty("resizable");
this.isResizable=_d73?_d73:DialogPageBinding.DEFAULT_RESIZABLE;
}
if(this.height=="auto"){
this.enableAutoHeightLayoutMode(true);
}
};
DialogPageBinding.prototype.enableAutoHeightLayoutMode=function(_d74){
if(_d74!=this.isAutoHeightLayoutMode){
if(_d74){
this.attachClassName("auto");
}else{
this.detachClassName("auto");
}
this.isAutoHeightLayoutMode=_d74;
}
};
DialogPageBinding.prototype.handleAction=function(_d75){
DialogPageBinding.superclass.handleAction.call(this,_d75);
var _d76=_d75.target;
switch(_d75.type){
case PageBinding.ACTION_ATTACHED:
if(_d76!=this&&_d76.isFitAsDialogSubPage){
_d76.makeDialogSubPage();
}
break;
case ButtonBinding.ACTION_COMMAND:
_d75.consume();
if(_d76.response!=null){
this.response=_d76.response;
switch(_d76.response){
case Dialog.RESPONSE_ACCEPT:
if(this.validateAllDataBindings()==true){
this.onDialogAccept();
}else{
this.onDialogInvalid();
}
break;
case Dialog.RESPONSE_CANCEL:
this.onDialogCancel();
break;
default:
this.onDialogResponse();
break;
}
}
break;
case Binding.ACTION_INVALID:
this._disableAcceptButton(true);
break;
case Binding.ACTION_VALID:
this._disableAcceptButton(false);
break;
}
};
DialogPageBinding.prototype._disableAcceptButton=function(_d77){
var _d78=this.bindingWindow.bindingMap.buttonAccept;
if(_d78!=null){
_d78.setDisabled(_d77);
}
};
DialogPageBinding.prototype.onDialogAccept=function(){
if(this.result===null){
try{
this.result=this.bindingWindow.DataManager.getDataBindingResultMap();
}
catch(exception){
alert(exception);
throw exception;
}
}
this.onDialogResponse();
};
DialogPageBinding.prototype.onDialogInvalid=function(){
};
DialogPageBinding.prototype.onDialogCancel=function(){
this.onDialogResponse();
};
DialogPageBinding.prototype.onDialogResponse=function(){
this.dispatchAction(DialogPageBinding.ACTION_RESPONSE);
};
DialogPageBodyBinding.prototype=new FlexBoxBinding;
DialogPageBodyBinding.prototype.constructor=DialogPageBodyBinding;
DialogPageBodyBinding.superclass=FlexBoxBinding.prototype;
function DialogPageBodyBinding(){
this.logger=SystemLogger.getLogger("DialogPageBodyBinding");
}
DialogPageBodyBinding.prototype.toString=function(){
return "[DialogPageBodyBinding]";
};
DialogPageBodyBinding.prototype._setFitnessHeight=function(_d79){
var _d7a=CSSComputer.getPadding(this.bindingElement);
var _d7b=CSSComputer.getBorder(this.bindingElement);
_d79+=_d7a.top+_d7a.bottom;
_d79+=_d7b.top+_d7b.bottom;
if(_d79>this.bindingElement.offsetHeight){
this.bindingElement.style.height=_d79+"px";
}
};
EditorPageBinding.prototype=new PageBinding;
EditorPageBinding.prototype.constructor=EditorPageBinding;
EditorPageBinding.superclass=PageBinding.prototype;
EditorPageBinding.ACTION_ATTACHED="editorpage attached";
EditorPageBinding.ACTION_DIRTY="editorpage dirty";
EditorPageBinding.ACTION_CLEAN="editorpage clean";
EditorPageBinding.ACTION_SAVE="editorpage save";
EditorPageBinding.ACTION_SAVE_AND_PUBLISH="editorpage save and publish";
EditorPageBinding.ID_SAVEASBUTTON="saveasbutton";
EditorPageBinding.ID_PREVIEWTAB="previewtab";
EditorPageBinding.ID_MAINTABBOX="maintabbox";
EditorPageBinding.ID_PREVIEWWINDOW="previewwindow";
EditorPageBinding.MESSAGE_SAVE="save";
EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH="saveandpublish";
EditorPageBinding.MESSAGE_PERSIST="persist";
EditorPageBinding.MESSAGE_REFRESH="refresh";
EditorPageBinding.message=null;
EditorPageBinding.isTabbing=false;
EditorPageBinding._registry=new Map();
EditorPageBinding.register=function(page){
var map=EditorPageBinding._registry;
if(!map.hasEntries()){
top.app.bindingMap.broadcasterHasOpenEditors.enable();
}
map.set(page.key,page);
};
EditorPageBinding.unregister=function(page){
var map=EditorPageBinding._registry;
map.del(page.key);
if(!map.hasEntries()){
top.app.bindingMap.broadcasterHasOpenEditors.disable();
}
};
function EditorPageBinding(){
this.logger=SystemLogger.getLogger("EditorPageBinding");
this.isDirty=false;
this._tabBoxBinding=null;
this._tabBinding=null;
this._windowBinding=null;
this._isGeneratingPreview=false;
this._isPreviewWindowVisible=false;
this._message=null;
this._messages=null;
this._messengers=null;
this._isWaitingForPreview=false;
this._isPreviewing=false;
}
EditorPageBinding.prototype.toString=function(){
return "[EditorPageBinding]";
};
EditorPageBinding.prototype.onBindingRegister=function(){
EditorPageBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_DIRTY);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(EditorPageBinding.ACTION_SAVE);
this.addActionListener(EditorPageBinding.ACTION_SAVE_AND_PUBLISH);
this.addActionListener(ResponseBinding.ACTION_SUCCESS);
this.addActionListener(ResponseBinding.ACTION_FAILURE);
this.addActionListener(ResponseBinding.ACTION_OOOOKAY);
EditorPageBinding.register(this);
this._invalidBindings=new Map();
this._messengers=new List();
this._messages=new List();
};
EditorPageBinding.prototype.onBindingDispose=function(){
this.dispatchAction(EditorPageBinding.ACTION_CLEAN);
if(this._isPreviewWindowVisible==true){
setTimeout(function(){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_OFF);
},250);
}
EditorPageBinding.unregister(this);
EditorPageBinding.superclass.onBindingDispose.call(this);
};
EditorPageBinding.prototype.onBeforePageInitialize=function(){
this._setupPreviewListeners();
EditorPageBinding.superclass.onBeforePageInitialize.call(this);
};
EditorPageBinding.prototype.onPageInitialize=function(){
EditorPageBinding.superclass.onPageInitialize.call(this);
this.enableSaveAs();
};
EditorPageBinding.prototype._setupPreviewListeners=function(){
var box=this.bindingDocument.getElementById(EditorPageBinding.ID_MAINTABBOX);
var tab=this.bindingDocument.getElementById(EditorPageBinding.ID_PREVIEWTAB);
var win=this.bindingDocument.getElementById(EditorPageBinding.ID_PREVIEWWINDOW);
if(box!=null){
this._tabBoxBinding=UserInterface.getBinding(box);
this._tabBoxBinding.addActionListener(TabBoxBinding.ACTION_SELECTED,this);
this._tabBoxBinding.addActionListener(TabBoxBinding.ACTION_UNSELECTED,this);
if(tab!=null&&win!=null){
this._tabBinding=UserInterface.getBinding(tab);
this._windowBinding=UserInterface.getBinding(win);
this._windowBinding.addActionListener(WindowBinding.ACTION_LOADED,this);
this._windowBinding.addActionListener(WindowBinding.ACTION_ONLOAD,this);
this.subscribe(BroadcastMessages.HIGHLIGHT_KEYWORDS);
if(this._tabBinding.isSelected){
this._startPreview();
}
}
}
};
EditorPageBinding.prototype.onSaveSuccess=function(){
this.enableSave(false);
this.enableSaveAs();
this.cleanAllDataBindings();
this.isDirty=false;
EditorPageBinding.message=null;
this.dispatchAction(EditorPageBinding.ACTION_CLEAN);
};
EditorPageBinding.prototype.handleAction=function(_d83){
EditorPageBinding.superclass.handleAction.call(this,_d83);
var _d84=_d83.target;
switch(_d83.type){
case EditorPageBinding.ACTION_SAVE:
this.postMessage(EditorPageBinding.MESSAGE_SAVE);
break;
case EditorPageBinding.ACTION_SAVE_AND_PUBLISH:
this.postMessage(EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH);
break;
case ResponseBinding.ACTION_OOOOKAY:
if(Application.isDeveloperMode){
}
break;
case ResponseBinding.ACTION_SUCCESS:
if(Application.isDeveloperMode){
}
if(this._messengers.hasEntries()){
var _d85=-1;
this._messengers.each(function(page){
var res=page.bindingWindow==_d84.bindingWindow;
if(res){
page.bindingWindow.DataManager.isDirty=false;
if(_d85==-1){
_d85=0;
}
}else{
_d85++;
}
return res;
});
if(_d85>-1){
this._messengers.del(_d85);
}
if(!this._messengers.hasEntries()){
switch(this._message){
case EditorPageBinding.MESSAGE_SAVE:
this._saveEditorPage();
break;
case EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH:
this._saveAndPublishEditorPage();
break;
case EditorPageBinding.MESSAGE_PERSIST:
this._refresh();
this._message=null;
if(this._isWaitingForPreview){
this._isWaitingForPreview=false;
this._startPreview();
}
break;
}
}
}else{
this._refresh();
this._message=null;
}
break;
case ResponseBinding.ACTION_FAILURE:
if(Application.isDeveloperMode){
}
this._message=null;
this._messengers=new List();
break;
case Binding.ACTION_DIRTY:
if(this.canSave()){
if(!this.isDirty){
this.enableSave(true);
this.isDirty=true;
this.dispatchAction(EditorPageBinding.ACTION_DIRTY);
}
}
_d83.consume();
break;
case Binding.ACTION_INVALID:
this.enableSave(false);
this._invalidBindings.set(_d84.key,_d84);
if(_d84 instanceof FieldsBinding){
this._updateStatusBar();
}
break;
case Binding.ACTION_VALID:
this._invalidBindings.del(_d84.key);
if(_d84 instanceof FieldsBinding){
this._updateStatusBar();
}
if(!this._invalidBindings.hasEntries()){
this.enableSave(true);
}
break;
case TabBoxBinding.ACTION_SELECTED:
if(_d84==this._tabBoxBinding){
if(this._windowBinding!=null){
var tab=_d84.getSelectedTabBinding();
if(tab.getID()==EditorPageBinding.ID_PREVIEWTAB){
this._isPreviewing=true;
if(this._messengers.hasEntries()){
this._isWaitingForPreview=true;
}else{
this._startPreview();
}
}else{
if(this._isPreviewing){
this._isPreviewing=false;
this._stopPreview();
}
}
}
}
_d83.consume();
break;
case TabBoxBinding.ACTION_UNSELECTED:
if(_d84==this._tabBoxBinding){
this.postMessage(EditorPageBinding.MESSAGE_PERSIST);
}
_d83.consume();
break;
case WindowBinding.ACTION_LOADED:
if(_d84==this._windowBinding){
if(this._isGeneratingPreview==true){
this._generatePreview();
this._isGeneratingPreview=false;
}
_d83.consume();
}
break;
case WindowBinding.ACTION_ONLOAD:
if(_d84==this._windowBinding){
if(_d84.getContentWindow().isPostBackDocument!=true){
if(Client.isPrism){
Prism.enableCache();
}
var self=this;
setTimeout(function(){
Application.unlock(self);
},100);
if(EventBroadcaster.hasSubscribers(BroadcastMessages.XHTML_MARKUP_ON)){
var _d8a=WindowBinding.getMarkup(this._windowBinding);
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_ON,_d8a);
}
}
}
break;
}
};
EditorPageBinding.prototype.canSave=function(){
return this.bindingWindow.bindingMap.savebutton!=null;
};
EditorPageBinding.prototype.doSave=function(){
var _d8b=this.bindingWindow.bindingMap.savebutton;
if(_d8b!=null&&!_d8b.isDisabled){
_d8b.fireCommand();
}
};
EditorPageBinding.prototype._saveEditorPage=function(){
if(this.validateAllDataBindings(true)){
this.bindingWindow.DataManager.isDirty=false;
var _d8c=this.bindingWindow.bindingMap.__REQUEST;
if(_d8c!=null){
_d8c.postback(EditorPageBinding.MESSAGE_SAVE);
}else{
this.logger.error("Save aborted: Could not locate RequestBinding");
}
}
};
EditorPageBinding.prototype._saveAndPublishEditorPage=function(){
if(this.validateAllDataBindings(true)){
this.bindingWindow.DataManager.isDirty=false;
var _d8d=this.bindingWindow.bindingMap.__REQUEST;
if(_d8d!=null){
_d8d.postback(EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH);
}else{
this.logger.error("Save and publish aborted: Could not locate RequestBinding");
}
}
};
EditorPageBinding.prototype._refresh=function(){
if(Application.isDeveloperMode){
}
this.postMessage(EditorPageBinding.MESSAGE_REFRESH);
};
EditorPageBinding.prototype.postMessage=function(_d8e){
this._message=null;
switch(_d8e){
case EditorPageBinding.MESSAGE_SAVE:
case EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH:
this._postMessageToDescendants(_d8e,this._messengers);
if(!this._messengers.hasEntries()){
if(_d8e==EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH){
this._saveAndPublishEditorPage();
}else{
this._saveEditorPage();
}
}else{
this._message=_d8e;
}
break;
case EditorPageBinding.MESSAGE_PERSIST:
this._message=_d8e;
EditorPageBinding.superclass.postMessage.call(this,_d8e,this._messengers);
break;
case EditorPageBinding.MESSAGE_REFRESH:
EditorPageBinding.superclass.postMessage.call(this,_d8e,this._messengers);
break;
}
};
EditorPageBinding.prototype.handleBroadcast=function(_d8f,arg){
EditorPageBinding.superclass.handleBroadcast.call(this,_d8f,arg);
switch(_d8f){
case BroadcastMessages.HIGHLIGHT_KEYWORDS:
var _d91=arg;
if(UserInterface.isBindingVisible(this._windowBinding)){
WindowBinding.highlightKeywords(this._windowBinding,_d91);
}
break;
}
};
EditorPageBinding.prototype.onActivate=function(){
EditorPageBinding.superclass.onActivate.call(this);
if(this._isPreviewWindowVisible==true){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_ACTIVATE);
}
};
EditorPageBinding.prototype.onDeactivate=function(){
EditorPageBinding.superclass.onDeactivate.call(this);
if(this._isPreviewWindowVisible==true){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_DEACTIVATE);
}
};
EditorPageBinding.prototype._updateStatusBar=function(){
var _d92=new List();
this._invalidBindings.each(function(key,_d94){
var list=_d94.getInvalidLabels();
if(list){
list.each(function(_d96){
_d92.add(_d96);
});
}
});
if(_d92.hasEntries()){
var _d97="";
while(_d92.hasNext()){
_d97+=_d92.getNext().toLowerCase();
if(_d92.hasNext()){
_d97+=", ";
}else{
_d97+=".";
}
}
var _d98=StringBundle.getString("ui","Website.App.StatusBar.ErrorInField");
StatusBar.error(_d98+" "+_d97);
}else{
StatusBar.clear();
}
};
EditorPageBinding.prototype._startPreview=function(){
Application.lock(this);
this._isGeneratingPreview=true;
if(Client.isPrism){
Prism.disableCache();
}
this._windowBinding.setURL(WindowBinding.POSTBACK_URL);
};
EditorPageBinding.prototype._stopPreview=function(){
this._windowBinding.reset();
if(Application.isLocked){
Application.unlock(this);
}
};
EditorPageBinding.prototype.enableSave=function(_d99){
var _d9a=this.bindingDocument.getElementById("broadcasterCanSave");
if(_d9a){
var _d9b=UserInterface.getBinding(_d9a);
if(_d99){
_d9b.enable();
}else{
_d9b.disable();
}
}else{
throw new Error("A required BroadcasterBinding could not be located.");
}
};
EditorPageBinding.prototype.enableSaveAs=function(){
var _d9c=this.bindingDocument.getElementById(EditorPageBinding.ID_SAVEASBUTTON);
if(_d9c!=null){
UserInterface.getBinding(_d9c).enable();
}
};
EditorPageBinding.prototype.handleInvalidData=function(){
this.logger.error("INVALID DATA :(");
if(this._isGeneratingPreview){
this._isGeneratingPreview=false;
this._windowBinding.error();
this._message=null;
this._messengers=new List();
Application.unlock(this);
}
};
EditorPageBinding.prototype._generatePreview=function(){
var _d9d=this._windowBinding.getContentDocument().title;
if(_d9d==WindowBinding.POSTBACK_TITLE){
if(this.validateAllDataBindings()){
this.manifestAllDataBindings();
var _d9e=this._tabBinding.getCallBackID();
var list=new List();
new List(this.bindingDocument.forms[0].elements).each(function(_da0){
if(_da0.name=="__EVENTTARGET"&&_d9e){
_da0.value=_d9e;
}
list.add({name:_da0.name,value:_da0.value});
});
var url=String(this.bindingDocument.location);
this._windowBinding.getContentWindow().submit(list,url);
this._latestPostbackList=list.reset();
}else{
this.handleInvalidData();
}
}
};
ResponsePageBinding.prototype=new DialogPageBinding;
ResponsePageBinding.prototype.constructor=ResponsePageBinding;
ResponsePageBinding.superclass=DialogPageBinding.prototype;
function ResponsePageBinding(){
this.logger=SystemLogger.getLogger("ResponsePageBinding");
this.responseid=null;
}
ResponsePageBinding.prototype.toString=function(){
return "[ResponsePageBinding]";
};
ResponsePageBinding.prototype.parseDOMProperties=function(){
ResponsePageBinding.superclass.parseDOMProperties.call(this);
var _da2=this.getProperty("responseid");
this.responseid=_da2;
};
ResponsePageBinding.prototype.onBindingAttach=function(){
ResponsePageBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ResponseBinding.ACTION_SUCCESS);
this.addActionListener(ResponseBinding.ACTION_FAILURE);
this.addActionListener(ResponseBinding.ACTION_OOOOKAY);
};
ResponsePageBinding.prototype.handleAction=function(_da3){
ResponsePageBinding.superclass.handleAction.call(this,_da3);
switch(_da3.type){
case ResponseBinding.ACTION_SUCCESS:
this.onDialogAccept();
break;
case ResponseBinding.ACTION_FAILURE:
break;
}
};
ResponsePageBinding.prototype.onDialogAccept=function(){
this.response=Dialog.RESPONSE_ACCEPT;
if(this.responseid&&this.bindingDocument.getElementById(this.responseid)){
this.result=this.bindingDocument.getElementById(this.responseid).value;
}
ResponsePageBinding.superclass.onDialogAccept.call(this);
};
WizardPageBinding.prototype=new DialogPageBinding;
WizardPageBinding.prototype.constructor=WizardPageBinding;
WizardPageBinding.superclass=DialogPageBinding.prototype;
WizardPageBinding.ID_NEXTBUTTON="nextbutton";
WizardPageBinding.ID_PREVIOUSBUTTON="previousbutton";
WizardPageBinding.ID_FINISHBUTTON="finishbutton";
WizardPageBinding.ACTION_NAVIGATE_NEXT="wizardnavigatenext";
WizardPageBinding.ACTION_NAVIGATE_PREVIOUS="wizardnavigateprevious";
WizardPageBinding.ACTION_FINISH="wizardfinish";
function WizardPageBinding(){
this.logger=SystemLogger.getLogger("WizardPageBinding");
return this;
}
WizardPageBinding.prototype.toString=function(){
return "[WizardPageBinding]";
};
WizardPageBinding.prototype.onPageInitialize=function(){
WizardPageBinding.superclass.onPageInitialize.call(this);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_NEXT,this);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_PREVIOUS,this);
this.addActionListener(WizardPageBinding.ACTION_FINISH,this);
};
WizardPageBinding.prototype.handleAction=function(_da4){
WizardPageBinding.superclass.handleAction.call(this,_da4);
var _da5=_da4.target;
switch(_da4.type){
case WizardPageBinding.ACTION_NAVIGATE_NEXT:
case WizardPageBinding.ACTION_FINISH:
if(this.validateAllDataBindings()==true){
this.doPostBack(_da5);
}else{
_da4.consume();
}
break;
case WizardPageBinding.ACTION_NAVIGATE_PREVIOUS:
this.doPostBack(_da5);
break;
case Binding.ACTION_INVALID:
this._enableNextAndFinish(false);
_da4.consume();
break;
case Binding.ACTION_VALID:
this._enableNextAndFinish(true);
_da4.consume();
break;
}
};
WizardPageBinding.prototype._enableNextAndFinish=function(_da6){
var next=this.bindingWindow.bindingMap.nextbutton;
var _da8=this.bindingWindow.bindingMap.finishbutton;
if(next){
next.setDisabled(!_da6);
}
if(_da8){
_da8.setDisabled(!_da6);
}
};
MarkupAwarePageBinding.prototype=new PageBinding;
MarkupAwarePageBinding.prototype.constructor=MarkupAwarePageBinding;
MarkupAwarePageBinding.superclass=PageBinding.prototype;
function MarkupAwarePageBinding(){
this.logger=SystemLogger.getLogger("MarkupAwarePageBinding");
this._isActivated=false;
this._isWaiting=false;
return this;
}
MarkupAwarePageBinding.prototype.toString=function(){
return "[MarkupAwarePageBinding]";
};
MarkupAwarePageBinding.prototype.onBeforePageInitialize=function(){
MarkupAwarePageBinding.superclass.onBeforePageInitialize.call(this);
this.subscribe(BroadcastMessages.XHTML_MARKUP_ON);
this.subscribe(BroadcastMessages.XHTML_MARKUP_OFF);
this.subscribe(BroadcastMessages.XHTML_MARKUP_ACTIVATE);
this.subscribe(BroadcastMessages.XHTML_MARKUP_DEACTIVATE);
};
MarkupAwarePageBinding.prototype.handleBroadcast=function(_da9,arg){
MarkupAwarePageBinding.superclass.handleBroadcast.call(this,_da9,arg);
var self=this;
switch(_da9){
case BroadcastMessages.XHTML_MARKUP_ON:
this._activate(true);
this._handleMarkup(arg);
break;
case BroadcastMessages.XHTML_MARKUP_OFF:
this._activate(false);
break;
case BroadcastMessages.XHTML_MARKUP_ACTIVATE:
this._isWaiting=true;
this._activate(true);
setTimeout(function(){
self._isWaiting=false;
},20);
break;
case BroadcastMessages.XHTML_MARKUP_DEACTIVATE:
setTimeout(function(){
if(!self._isActivated){
self._activate(false);
}
},0);
break;
}
};
MarkupAwarePageBinding.prototype.onActivate=function(){
MarkupAwarePageBinding.superclass.onActivate.call(this);
this._activate(true);
this._isActivated=true;
};
MarkupAwarePageBinding.prototype.onDeactivate=function(){
MarkupAwarePageBinding.superclass.onDeactivate.call(this);
this._isActivated=false;
var self=this;
setTimeout(function(){
if(!self._isWaiting){
self._activate(false);
}
},0);
};
MarkupAwarePageBinding.prototype._handleMarkup=function(_dad){
};
MarkupAwarePageBinding.prototype._activate=function(_dae){
};
SystemToolBarBinding.prototype=new ToolBarBinding;
SystemToolBarBinding.prototype.constructor=SystemToolBarBinding;
SystemToolBarBinding.superclass=ToolBarBinding.prototype;
function SystemToolBarBinding(){
this.logger=SystemLogger.getLogger("SystemToolBarBinding");
this._currentProfileKey=null;
this._actionFolderNames={};
this._actionProfile=null;
this._moreActionsWidth=0;
this._moreActions=null;
this._activePosition=SystemAction.activePositions.NavigatorTree;
return this;
}
SystemToolBarBinding.prototype.toString=function(){
return "[SystemToolBarBinding]";
};
SystemToolBarBinding.prototype.onBindingAttach=function(){
SystemToolBarBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.subscribe(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED);
this.subscribe(this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST);
this.subscribe(BroadcastMessages.INVOKE_DEFAULT_ACTION);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
}else{
this.hide();
}
};
SystemToolBarBinding.prototype.onBindingInitialize=function(){
var _daf=this.bindingWindow.bindingMap.moreactionstoolbargroup;
this._moreActionsWidth=_daf.boxObject.getDimension().w;
_daf.hide();
var _db0=this.boxObject.getDimension().h;
this.bindingElement.style.height=_db0+"px";
var self=this;
var _db2=this.bindingWindow.bindingMap.moreactionsbutton;
_db2.addActionListener(ButtonBinding.ACTION_COMMAND,{handleAction:function(_db3){
self._showMoreActions();
_db3.consume();
}});
var _db4=this.bindingWindow.bindingMap.moreactionspopup;
_db4.addActionListener(MenuItemBinding.ACTION_COMMAND,{handleAction:function(_db5){
var item=_db5.target;
self._handleSystemAction(item.associatedSystemAction);
}});
SystemToolBarBinding.superclass.onBindingInitialize.call(this);
};
SystemToolBarBinding.prototype.handleBroadcast=function(_db7,arg){
SystemToolBarBinding.superclass.handleBroadcast.call(this,_db7,arg);
switch(_db7){
case BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED:
var self=this;
if(arg!=null){
if(arg.activePosition==this.getActivePosition()){
if(arg.actionProfile!=null&&arg.actionProfile.hasEntries()){
this._actionProfile=arg.actionProfile;
var key=this._getProfileKey();
if(key!=this._currentProfileKey){
setTimeout(function(){
self.emptyLeft();
self._actionFolderNames={};
self.buildLeft();
self._currentProfileKey=key;
},0);
}
}else{
setTimeout(function(){
self.emptyLeft();
self._actionFolderNames={};
self._currentProfileKey=null;
var _dbb=self.bindingWindow.bindingMap.moreactionstoolbargroup;
if(_dbb!=null){
_dbb.hide();
}
},0);
}
}
}
break;
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
var _dbc=this.bindingWindow.WindowManager;
this._toolBarBodyLeft.refreshToolBarGroups();
this._containAllButtons();
break;
case BroadcastMessages.INVOKE_DEFAULT_ACTION:
var self=this;
setTimeout(function(){
self._invokeDefaultAction();
},0);
break;
}
};
SystemToolBarBinding.prototype._getProfileKey=function(){
var _dbd=new String("");
this._actionProfile.each(function(_dbe,list){
list.each(function(_dc0){
_dbd+=_dc0.getHandle()+";"+_dc0.getKey()+";";
if(_dc0.isDisabled()){
_dbd+="isDisabled='true';";
}
});
});
return _dbd;
};
SystemToolBarBinding.prototype.handleAction=function(_dc1){
SystemToolBarBinding.superclass.handleAction.call(this,_dc1);
switch(_dc1.type){
case ButtonBinding.ACTION_COMMAND:
var _dc2=_dc1.target;
this._handleSystemAction(_dc2.associatedSystemAction);
break;
}
};
SystemToolBarBinding.prototype._handleSystemAction=function(_dc3){
if(_dc3!=null){
var list=ExplorerBinding.getFocusedTreeNodeBindings();
if(list.hasEntries()){
var _dc5=list.getFirst();
var _dc6=_dc5.node;
}
SystemAction.invoke(_dc3,_dc6);
}
};
SystemToolBarBinding.prototype.buildLeft=function(){
if(this.isInitialized&&this._actionProfile!=null&&this._actionProfile.hasEntries()){
var doc=this.bindingDocument;
var self=this;
this._actionProfile.each(function(_dc9,list){
var _dcb=new List();
list.reset();
while(list.hasNext()){
var _dcc=list.getNext();
var _dcd=null;
if(_dcc.isInToolBar()){
if(_dcc.isInFolder()){
alert("IsInFolder not implemented!");
}else{
_dcd=self.getToolBarButtonBinding(_dcc);
}
}
if(_dcd!=null){
_dcb.add(_dcd);
}
}
if(_dcb.hasEntries()){
var _dce=ToolBarGroupBinding.newInstance(doc);
_dcb.each(function(_dcf){
_dce.add(_dcf);
});
self.addLeft(_dce);
}
});
this.attachRecursive();
this._containAllButtons();
}
};
SystemToolBarBinding.prototype._containAllButtons=function(){
var _dd0=this.bindingWindow.bindingMap.toolsbutton;
var _dd1=this.bindingWindow.bindingMap.moreactionstoolbargroup;
var _dd2=_dd0.bindingElement.offsetLeft-this._moreActionsWidth;
var _dd3=0;
var _dd4=new List();
var _dd5,_dd6=this._toolBarBodyLeft.getDescendantBindingsByLocalName("toolbarbutton");
while((_dd5=_dd6.getNext())!=null){
if(!_dd5.isVisible){
_dd5.show();
}
_dd3+=_dd5.boxObject.getDimension().w;
if(_dd3>=_dd2){
_dd4.add(_dd5);
_dd5.hide();
}
}
if(_dd4.hasEntries()){
var _dd7=_dd4.getFirst().bindingElement.parentNode;
UserInterface.getBinding(_dd7).setLayout(ToolBarGroupBinding.LAYOUT_LAST);
this._moreActions=new List();
while((_dd5=_dd4.getNext())!=null){
this._moreActions.add(_dd5.associatedSystemAction);
}
_dd1.show();
}else{
this._moreActions=null;
_dd1.hide();
}
};
SystemToolBarBinding.prototype._showMoreActions=function(){
if(this._moreActions!=null){
var _dd8=this.bindingWindow.bindingMap.moreactionspopup;
_dd8.empty();
while((action=this._moreActions.getNext())!=null){
var item=MenuItemBinding.newInstance(_dd8.bindingDocument);
item.setLabel(action.getLabel());
item.setToolTip(action.getToolTip());
item.imageProfile=new ImageProfile({image:action.getImage(),imageDisabled:action.getDisabledImage()});
if(action.isDisabled()){
item.disable();
}
item.associatedSystemAction=action;
_dd8.add(item);
}
_dd8.attachRecursive();
this._moreActions=null;
}
};
SystemToolBarBinding.prototype.getToolBarButtonBinding=function(_dda){
var _ddb=ToolBarButtonBinding.newInstance(this.bindingDocument);
var _ddc=_dda.getLabel();
var _ddd=_dda.getToolTip();
var _dde=_dda.getImage();
var _ddf=_dda.isDisabled();
if(_dde&&_dde.indexOf("size=")==-1){
_dde=_dde+"&size="+this.getImageSize();
_ddb.imageProfile=new ImageProfile({image:_dde});
}
if(_ddc){
_ddb.setLabel(_ddc);
}
if(_ddd){
_ddb.setToolTip(_ddd);
}
if(_dda.isDisabled()){
_ddb.disable();
}
_ddb.associatedSystemAction=_dda;
return _ddb;
};
SystemToolBarBinding.prototype._invokeDefaultAction=function(){
var _de0=this.getDescendantBindingByLocalName("toolbarbutton");
if(_de0!=null){
_de0.fireCommand();
}
};
SystemToolBarBinding.prototype.getActivePosition=function(){
return this._activePosition;
};
SystemToolBarBinding.newInstance=function(_de1){
var _de2=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbar",_de1);
return UserInterface.registerBinding(_de2,SystemToolBarBinding);
};
SystemTreeBinding.prototype=new TreeBinding;
SystemTreeBinding.prototype.constructor=SystemTreeBinding;
SystemTreeBinding.superclass=TreeBinding.prototype;
SystemTreeBinding.HAS_NO_MEMORY=false;
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
SystemTreeBinding.URL_DIALOG_DETAILEDPASTE="${root}/content/dialogs/systemtrees/detailedpaste.aspx";
function SystemTreeBinding(){
this.logger=SystemLogger.getLogger("SystemTreeBinding");
this.perspectiveNode=null;
this._defaultTreeNode=null;
this._isActionProfileAware=true;
this._activePosition=SystemAction.activePositions.NavigatorTree;
this._actionGroup=null;
this._backupfocushandle=null;
this._tempSelectedNode=null;
this._tempSelectionTimeout=false;
this._entityTokenRegistry=null;
this._refreshingTreeNodes=null;
this._refreshToken=null;
this.isLockedToEditor=true;
this.isLockFeatureFocus=false;
this._restorableFocusHandle=null;
}
SystemTreeBinding.prototype.toString=function(){
return "[SystemTreeBinding]";
};
SystemTreeBinding.prototype.onBindingRegister=function(){
SystemTreeBinding.superclass.onBindingRegister.call(this);
this.perspectiveNode=StageBinding.perspectiveNode;
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_FOCUS);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_CUT);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_COPY);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_PASTE);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL);
this.subscribe(BroadcastMessages.DOCKTABBINDING_SELECT);
this.subscribe(BroadcastMessages.STAGEDIALOG_OPENED);
this.addActionListener(SystemTreeNodeBinding.ACTION_REFRESHED_YEAH);
this.addActionListener(TreeNodeBinding.ACTION_COMMAND);
this._entityTokenRegistry=new Map();
this._refreshingTreeNodes=new Map();
if(this.getProperty("actionaware")==false){
this._isActionProfileAware=false;
}else{
this.setContextMenu(top.app.bindingMap.systemtreepopup);
}
if(this.getProperty("treeselector")==true){
this._activePosition=SystemAction.activePositions.SelectorTree;
}
if(this.getProperty("locktoeditor")!=null){
this.isLockedToEditor=this.getProperty("locktoeditor");
}
};
SystemTreeBinding.prototype.add=function(_de3){
var _de4=SystemTreeBinding.superclass.add.call(this,_de3);
if(!this._defaultTreeNode){
if(_de3 instanceof SystemTreeNodeBinding){
this._defaultTreeNode=_de3;
}
}
return _de4;
};
SystemTreeBinding.prototype.handleAction=function(_de5){
SystemTreeBinding.superclass.handleAction.call(this,_de5);
var _de6=_de5.target;
switch(_de5.type){
case TreeNodeBinding.ACTION_ONFOCUS:
case TreeNodeBinding.ACTION_ONMULTIFOCUS:
this._restorableFocusHandle=null;
this._handleSystemTreeFocus();
break;
case SystemTreeNodeBinding.ACTION_REFRESHED_YEAH:
this._updateRefreshingTrees(_de6.key);
this._updateFocusedNode();
_de5.consume();
break;
case TreeNodeBinding.ACTION_DISPOSE:
case TreeNodeBinding.ACTION_BLUR:
var self=this;
setTimeout(function(){
if(!self._focusedTreeNodeBindings.hasEntries()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{position:self._activePosition});
}
},0);
if(_de5.type==TreeNodeBinding.ACTION_BLUR){
this._restorableFocusHandle=_de6.getHandle();
}
break;
case TreeNodeBinding.ACTION_COMMAND:
EventBroadcaster.broadcast(BroadcastMessages.INVOKE_DEFAULT_ACTION);
_de5.consume();
break;
}
};
SystemTreeBinding.prototype.focus=function(){
SystemTreeBinding.superclass.focus.call(this);
if(this.isFocused){
this._handleSystemTreeFocus();
}
};
SystemTreeBinding.prototype._focusDefault=function(){
this._attemptRestorableFocus();
if(!this.getFocusedTreeNodeBindings().hasEntries()){
SystemTreeBinding.superclass._focusDefault.call(this);
}
};
SystemTreeBinding.prototype._attemptRestorableFocus=function(){
if(this._treeNodeBindings.has(this._restorableFocusHandle)){
var _de8=this._treeNodeBindings.get(this._restorableFocusHandle);
this.focusSingleTreeNodeBinding(_de8);
}
this._restorableFocusHandle=null;
};
SystemTreeBinding.prototype._handleSystemTreeFocus=function(){
if(this.getFocusedTreeNodeBindings().hasEntries()){
this._computeClipboardSetup();
this._computeRefreshSetup();
if(this._isActionProfileAware){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{activePosition:this._activePosition,actionProfile:this.getCompiledActionProfile()});
}
}
};
SystemTreeBinding.prototype.registerTreeNodeBinding=function(_de9){
SystemTreeBinding.superclass.registerTreeNodeBinding.call(this,_de9);
var reg=this._entityTokenRegistry;
var _deb=_de9.node.getEntityToken();
if(reg.has(_deb)){
reg.get(_deb).add(_de9);
}else{
reg.set(_deb,new List([_de9]));
}
var _dec=null;
if(this.isLockedToEditor){
if(_deb==StageBinding.entityToken){
if(_de9.node.isTreeLockEnabled()){
_dec=_de9;
}
}
}else{
if(this._backupfocushandle!=null){
if(this._backupfocushandle==_de9.node.getHandle()){
_dec=_de9;
}
}
}
if(_dec!=null){
this.focusSingleTreeNodeBinding(_dec);
}
};
SystemTreeBinding.prototype.unRegisterTreeNodeBinding=function(_ded){
SystemTreeBinding.superclass.unRegisterTreeNodeBinding.call(this,_ded);
var reg=this._entityTokenRegistry;
var _def=_ded.node.getEntityToken();
if(reg.has(_def)){
var list=reg.get(_def);
list.del(_ded);
if(!list.hasEntries()){
reg.del(_def);
}
}else{
this.logger.fatal("SystemTreeBinding out of synch: unRegisterTreeNodeBinding");
if(Application.isDeveloperMode){
Dialog.error("Attention Developer","Tree is out of synch. Please reproduce this bug and file a report.");
}
}
if(!this.isLockedToEditor){
if(_ded.isFocused&&this._backupfocushandle==null){
this._backupfocushandle=_ded.node.getHandle();
var self=this;
setTimeout(function(){
self._backupfocushandle=null;
},200);
}
}
};
SystemTreeBinding.prototype._updateRefreshingTrees=function(key){
var _df3=this._refreshingTreeNodes;
if(_df3.hasEntries()&&_df3.has(key)){
_df3.del(key);
if(!_df3.hasEntries()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this._refreshToken);
this._refreshToken=null;
this._attemptRestorableFocus();
}
}
};
SystemTreeBinding.prototype._updateFocusedNode=function(){
if(!this._focusedTreeNodeBindings.hasEntries()&&this._activePosition!=SystemAction.activePositions.SelectorTree){
var _df4=StageBinding.entityToken;
if(_df4!=null){
this._focusTreeNodeByEntityToken(_df4);
}
}
};
SystemTreeBinding.prototype._computeClipboardSetup=function(){
var _df5=false;
var _df6=this.getFocusedTreeNodeBindings();
if(this._activePosition==SystemAction.activePositions.SelectorTree){
_df5=false;
}else{
if(_df6.hasEntries()){
_df5=true;
while(_df5&&_df6.hasNext()){
var _df7=_df6.getNext();
if(!_df7.isDraggable){
_df5=false;
}
}
}
}
SystemTreePopupBinding.isCutAllowed=_df5;
};
SystemTreeBinding.prototype._computeRefreshSetup=function(){
SystemTreePopupBinding.isRefreshAllowed=SystemTreeBinding.clipboard===null;
};
SystemTreeBinding.prototype.handleBroadcast=function(_df8,arg){
SystemTreeBinding.superclass.handleBroadcast.call(this,_df8,arg);
switch(_df8){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
if(arg!=null||this.isFocused){
this._handleCommandBroadcast(_df8,arg);
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_CUT:
case BroadcastMessages.SYSTEMTREEBINDING_COPY:
case BroadcastMessages.SYSTEMTREEBINDING_PASTE:
if(this.isFocused){
this._handleCommandBroadcast(_df8);
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL:
this.collapse(true);
break;
case BroadcastMessages.DOCKTABBINDING_SELECT:
if(this.isLockedToEditor){
var tab=arg;
if(tab.getHandle()!="Composite.Management.Explorer"){
this._handleDockTabSelect(tab);
}
}
break;
case BroadcastMessages.STAGEDIALOG_OPENED:
if(this.isLockedToEditor){
this.blurSelectedTreeNodes();
}
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{activePosition:this._activePosition});
break;
case BroadcastMessages.SYSTEMTREEBINDING_FOCUS:
var self=this,_dfc=arg;
setTimeout(function(){
if(_dfc!=null){
self._focusTreeNodeByEntityToken(_dfc);
}
},250);
break;
}
};
SystemTreeBinding.prototype._handleDockTabSelect=function(tab){
var _dfe=tab.perspectiveNode==null;
if(!_dfe){
_dfe=tab.perspectiveNode==this.perspectiveNode;
}
if(_dfe){
var self=this,_e00=tab.getEntityToken();
setTimeout(function(){
if(_e00!=null){
self._focusTreeNodeByEntityToken(_e00);
}
},250);
}
};
SystemTreeBinding.prototype._focusTreeNodeByEntityToken=function(_e01,_e02){
this.isLockFeatureFocus=true;
var _e03=null;
if(this._entityTokenRegistry.has(_e01)){
var list=this._entityTokenRegistry.get(_e01);
list.each(function(tn){
var _e06=true;
if(tn.node.isTreeLockEnabled()){
_e03=tn;
_e06=false;
}
return _e06;
});
if(_e03!=null){
if(!_e03.isFocused){
this.focusSingleTreeNodeBinding(_e03,true);
}else{
_e03.dispatchAction(TreeNodeBinding.ACTION_FOCUSED);
}
}
}
this.isLockFeatureFocus=false;
if(_e03==null&&_e02!=true){
Application.lock(this);
StatusBar.busy();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
self._fetchTreeForEntityToken(_e01);
self._focusTreeNodeByEntityToken(_e01,true);
}
Application.unlock(self);
StatusBar.clear();
},0);
}
};
SystemTreeBinding.prototype._fetchTreeForEntityToken=function(_e08){
var _e09=new List();
if(this._activePosition==SystemAction.activePositions.SelectorTree){
var _e0a=this.getRootTreeNodeBindings();
while(_e0a.hasNext()){
var _e0b=_e0a.getNext();
_e09.add(_e0b.node.getEntityToken());
}
}else{
_e09.add(StageBinding.perspectiveNode.getEntityToken());
}
while(_e09.hasNext()){
var _e0c=_e09.getNext();
var _e0d=this.getOpenSystemNodes();
var map=System.getInvisibleBranch(_e0c,_e08,_e0d);
if(map==null){
this.isLockedToEditor=false;
if(Application.isDeveloperMode){
Dialog.warning("Ouch!","Because the web service failed, tree has disabled the lock-tree-to-editor "+"feature. Otherwise, re-focus would fire the error indefinitely. Please try again.");
}
}else{
if(map.hasEntries()){
var self=this;
var _e10=this._treeNodeBindings;
var _e11=new Map();
function fix(_e12,list){
if(!_e12.hasBeenOpened){
if(list.hasEntries()){
list.each(function(node){
if(!_e10.has(node.getHandle())){
var _e15=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
_e11.set(node.getHandle(),_e15);
_e12.add(_e15);
}
});
_e12.attachRecursive();
}
}
_e12.open(true);
}
map.each(function(_e16,list){
if(_e10.has(_e16)){
var _e18=_e10.get(_e16);
fix(_e18,list);
}else{
if(_e11.has(_e16)){
var _e19=_e11.get(_e16);
fix(_e19,list);
}else{
}
}
});
}
}
}
};
SystemTreeBinding.prototype._handleCommandBroadcast=function(_e1a,arg){
switch(_e1a){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
var _e1c=arg;
if(_e1c!=null){
this._invokeServerRefresh(_e1c);
}else{
this._invokeManualRefresh();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_CUT:
if(SystemTreeBinding.clipboard!=null){
SystemTreeBinding.clipboard.hideDrag();
}
var _e1d=this.getFocusedTreeNodeBindings().getFirst();
SystemTreeBinding.clipboardOperation=SystemTreePopupBinding.CMD_CUT;
SystemTreeBinding.clipboard=_e1d;
_e1d.showDrag();
break;
case BroadcastMessages.SYSTEMTREEBINDING_COPY:
var _e1d=this.getFocusedTreeNodeBindings().getFirst();
SystemTreeBinding.clipboardOperation=SystemTreePopupBinding.CMD_COPY;
SystemTreeBinding.clipboard=_e1d;
break;
case BroadcastMessages.SYSTEMTREEBINDING_PASTE:
this._handlePaste();
break;
}
};
SystemTreeBinding.prototype._invokeServerRefresh=function(_e1e){
if(_e1e!=null&&_e1e=="null"){
if(Application.isDeveloperMode){
alert("Saa har vi balladen.");
}
}
if(this._entityTokenRegistry.has(_e1e)){
var list=this._entityTokenRegistry.get(_e1e).reset();
this._refreshToken=_e1e;
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this._refreshToken);
while(list.hasNext()){
var _e20=list.getNext();
this._refreshingTreeNodes.set(_e20.key,true);
setTimeout(function(){
_e20.refresh(true);
},0);
}
}
};
SystemTreeBinding.prototype._invokeManualRefresh=function(){
var _e21=this.getFocusedTreeNodeBindings().getFirst();
if(_e21){
var _e22=_e21.getLabel();
var _e23=_e21.getAncestorBindingByLocalName("treenode");
if(_e23){
_e21=_e23;
}
this._refreshToken=null;
this._refreshingTreeNodes.set(_e21.key,true);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,null);
if(!StatusBar.state){
var _e24=StringBundle.getString("ui","Website.App.StatusBar.Refreshing");
StatusBar.busy(_e24,[_e22]);
}
_e21.refresh();
}
};
SystemTreeBinding.prototype._handlePaste=function(){
var _e25=SystemTreeBinding.clipboard;
if(_e25){
var type=_e25.dragType;
var _e27=this.getFocusedTreeNodeBindings().getFirst();
if(_e27.dragAccept){
if(_e27.acceptor.isAccepting(type)){
this._performPaste(_e27);
}else{
Dialog.message(StringBundle.getString("ui","Website.Misc.Trees.DialogTitle.PasteTypeNotAllowed"),StringBundle.getString("ui","Website.Misc.Trees.DialogText.PasteTypeNotAllowed"));
}
}else{
Dialog.message(StringBundle.getString("ui","Website.Misc.Trees.DialogTitle.PasteNotAllowed"),StringBundle.getString("ui","Website.Misc.Trees.DialogText.PasteNotAllowed"));
}
}
};
SystemTreeBinding.prototype._performPaste=function(_e28){
var self=this;
function update(){
MessageQueue.update();
Application.unlock(self);
}
if(_e28.node.hasDetailedDropSupport()){
if(_e28.node.hasChildren()){
var _e2a=_e28.node.getChildren();
Dialog.invokeModal(SystemTreeBinding.URL_DIALOG_DETAILEDPASTE,{handleDialogResponse:function(_e2b,_e2c){
if(_e2b==Dialog.RESPONSE_ACCEPT){
Application.lock(self);
var _e2d=_e2c.get("switch");
var _e2e=_e2c.get("sibling");
if(_e2d=="after"){
_e2e++;
}
var _e2f=_e28.accept(SystemTreeBinding.clipboard,_e2e);
if(_e2f){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
setTimeout(update,0);
}else{
update();
}
}
}},_e2a);
}else{
Application.lock(self);
var _e30=_e28.accept(SystemTreeBinding.clipboard,0);
if(_e30){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
setTimeout(update,0);
}else{
update();
}
}
}else{
Application.lock(self);
var _e30=_e28.accept(SystemTreeBinding.clipboard,0);
if(_e30){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
}
update();
}
};
SystemTreeBinding.prototype.selectDefault=function(){
var _e31=System.getDefaultEntityToken(this.perspectiveNode.getEntityToken());
if(_e31!=null){
this._focusTreeNodeByEntityToken(_e31);
}else{
if(this._defaultTreeNode){
this._defaultTreeNode.focus();
this._defaultTreeNode=null;
}
}
};
SystemTreeBinding.prototype.collapse=function(_e32){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{position:this._activePosition});
if(_e32){
this.blurSelectedTreeNodes();
var _e33=this.getRootTreeNodeBindings();
_e33.each(function(_e34){
if(_e34.isContainer&&_e34.isOpen){
_e34.close();
_e34.hasBeenOpened=false;
_e34.empty();
}
});
}else{
SystemTreeBinding.superclass.collapse.call(this);
}
};
SystemTreeBinding.prototype.setLockToEditor=function(_e35){
if(_e35!=this.isLockedToEditor){
this.isLockedToEditor=_e35;
if(_e35){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR);
}
}
};
SystemTreeBinding.prototype.getOpenSystemNodes=function(){
var list=new List([StageBinding.perspectiveNode]);
if(this._activePosition==SystemAction.activePositions.SelectorTree){
list=new List();
}
var _e37=this.getRootTreeNodeBindings();
_e37.each(function(_e38){
var _e39=_e38.getOpenSystemNodes();
if(_e39!=null&&_e39.hasEntries()){
list.merge(_e39);
}else{
if(_e38.isOpen){
list.add(_e38.node);
}
}
});
return list;
};
SystemTreeBinding.prototype.focusSingleTreeNodeBinding=function(_e3a){
SystemTreeBinding.superclass.focusSingleTreeNodeBinding.call(this,_e3a);
if(_e3a!=null){
this._handleSystemTreeFocus();
}
};
SystemTreeBinding.prototype.setActionGroup=function(_e3b){
if(_e3b){
var list=new List(_e3b.split(" "));
this._actionGroup={};
while(list.hasNext()){
this._actionGroup[list.getNext()]=true;
}
}
};
SystemTreeBinding.prototype.getCompiledActionProfile=function(){
var _e3d=new Map();
var _e3e=this.getFocusedTreeNodeBindings();
var _e3f=_e3e.getFirst().node.getActionProfile();
if(_e3f!=null){
var self=this;
_e3f.each(function(_e41,list){
var _e43=new List();
list.each(function(_e44){
if(_e44.getActivePositions()&self._activePosition){
if(!self._actionGroup||self._actionGroup[_e44.getGroupName()]){
_e43.add(_e44);
}
}
});
if(_e43.hasEntries()){
_e3d.set(_e41,_e43);
}
});
}
_e3d.activePosition=this._activePosition;
return _e3d;
};
SystemTreePopupBinding.prototype=new PopupBinding;
SystemTreePopupBinding.prototype.constructor=SystemTreePopupBinding;
SystemTreePopupBinding.superclass=PopupBinding.prototype;
SystemTreePopupBinding.CMD_CUT="cut";
SystemTreePopupBinding.CMD_COPY="copy";
SystemTreePopupBinding.CMD_PASTE="paste";
SystemTreePopupBinding.CMD_REFRESH="refresh";
SystemTreePopupBinding.isCutAllowed=false;
SystemTreePopupBinding.isRefreshAllowed=true;
function SystemTreePopupBinding(){
this.logger=SystemLogger.getLogger("SystemTreePopupBinding");
this._currentProfileKey=null;
this._actionProfile=null;
this.selectedTreeNodeBinding=null;
}
SystemTreePopupBinding.prototype.onBindingRegister=function(){
SystemTreePopupBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED);
this.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
};
SystemTreePopupBinding.prototype.onBindingAttach=function(){
SystemTreePopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
SystemTreePopupBinding.prototype.handleBroadcast=function(_e45,arg){
SystemTreePopupBinding.superclass.handleBroadcast.call(this,_e45,arg);
switch(_e45){
case BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED:
if(arg!=null&&arg.actionProfile!=null){
this._actionProfile=arg.actionProfile;
}else{
this._currentProfileKey=null;
}
break;
}
};
SystemTreePopupBinding.prototype._getProfileKey=SystemToolBarBinding.prototype._getProfileKey;
SystemTreePopupBinding.prototype.show=function(){
var key=this._getProfileKey();
if(key!=this._currentProfileKey){
this.disposeContent();
this.constructContent();
this._currentProfileKey=key;
}
this._setupClipboardItems();
this._setupRefreshItem();
SystemTreePopupBinding.superclass.show.call(this);
};
SystemTreePopupBinding.prototype._setupClipboardItems=function(){
var cut=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_CUT);
var copy=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_COPY);
var _e4a=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_PASTE);
cut.setDisabled(!SystemTreePopupBinding.isCutAllowed);
copy.setDisabled(!SystemTreePopupBinding.isCutAllowed);
_e4a.setDisabled(SystemTreeBinding.clipboard==null);
};
SystemTreePopupBinding.prototype._setupRefreshItem=function(){
var _e4b=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_REFRESH);
_e4b.setDisabled(!SystemTreePopupBinding.isRefreshAllowed);
};
SystemTreePopupBinding.prototype.handleAction=function(_e4c){
SystemTreePopupBinding.superclass.handleAction.call(this,_e4c);
switch(_e4c.type){
case MenuItemBinding.ACTION_COMMAND:
var _e4d=_e4c.target;
var _e4e=_e4d.associatedSystemAction;
if(_e4e){
var list=ExplorerBinding.getFocusedTreeNodeBindings();
if(list.hasEntries()){
var _e50=list.getFirst();
var _e51=_e50.node;
}
SystemAction.invoke(_e4e,_e51);
}else{
var cmd=_e4d.getProperty("cmd");
if(cmd){
this._handleCommand(cmd);
}
}
this._currentProfileKey=null;
break;
}
};
SystemTreePopupBinding.prototype._handleCommand=function(cmd){
var _e54=null;
switch(cmd){
case SystemTreePopupBinding.CMD_CUT:
_e54=BroadcastMessages.SYSTEMTREEBINDING_CUT;
break;
case SystemTreePopupBinding.CMD_COPY:
_e54=BroadcastMessages.SYSTEMTREEBINDING_COPY;
break;
case SystemTreePopupBinding.CMD_PASTE:
_e54=BroadcastMessages.SYSTEMTREEBINDING_PASTE;
break;
case SystemTreePopupBinding.CMD_REFRESH:
_e54=BroadcastMessages.SYSTEMTREEBINDING_REFRESH;
break;
}
if(_e54){
setTimeout(function(){
EventBroadcaster.broadcast(_e54);
},0);
}
};
SystemTreePopupBinding.prototype.disposeContent=function(){
var _e55=new List(DOMUtil.getElementsByTagName(this.bindingElement,"menugroup"));
while(_e55.hasNext()){
var _e56=UserInterface.getBinding(_e55.getNext());
if(!_e56.getProperty("rel")){
_e56.dispose();
}
}
};
SystemTreePopupBinding.prototype.constructContent=function(){
if(this._actionProfile!=null){
var doc=this.bindingDocument;
var _e58=new List();
var self=this;
this._actionProfile.each(function(_e5a,list){
var _e5c=MenuGroupBinding.newInstance(doc);
list.each(function(_e5d){
var _e5e=self.getMenuItemBinding(_e5d);
_e5c.add(_e5e);
});
_e58.add(_e5c);
});
_e58.reverse();
while(_e58.hasNext()){
this._bodyBinding.addFirst(_e58.getNext());
}
this._bodyBinding.attachRecursive();
}
};
SystemTreePopupBinding.prototype.getMenuItemBinding=function(_e5f){
var _e60=MenuItemBinding.newInstance(this.bindingDocument);
var _e61=_e5f.getLabel();
var _e62=_e5f.getToolTip();
var _e63=_e5f.getImage();
var _e64=_e5f.getDisabledImage();
var _e65=_e5f.isCheckBox();
if(_e61){
_e60.setLabel(_e61);
}
if(_e62){
_e60.setToolTip(_e62);
}
if(_e63){
_e60.imageProfile=new ImageProfile({image:_e63,imageDisabled:_e64});
}
if(_e65){
_e60.setType(MenuItemBinding.TYPE_CHECKBOX);
if(_e5f.isChecked()){
_e60.check(true);
}
}
if(_e5f.isDisabled()){
_e60.disable();
}
_e60.associatedSystemAction=_e5f;
return _e60;
};
SystemTreePopupBinding.prototype.snapToMouse=function(e){
var node=e.target?e.target:e.srcElement;
var name=DOMUtil.getLocalName(node);
var _e69=null;
if(name!="tree"){
switch(name){
case "treenode":
break;
default:
node=DOMUtil.getAncestorByLocalName("treenode",node);
if(node!=null){
_e69=UserInterface.getBinding(node);
if(_e69.isDisabled){
_e69=null;
}
}
break;
}
if(_e69!=null&&_e69.node!=null&&_e69.node.getActionProfile()!=null){
SystemTreePopupBinding.superclass.snapToMouse.call(this,e);
}
}
};
SystemTreeNodeBinding.prototype=new TreeNodeBinding;
SystemTreeNodeBinding.prototype.constructor=SystemTreeNodeBinding;
SystemTreeNodeBinding.superclass=TreeNodeBinding.prototype;
SystemTreeNodeBinding.ACTION_REFRESHED="systemtreenoderefreshed";
SystemTreeNodeBinding.ACTION_REFRESHED_YEAH="systemtreenoderefreshedyeah!";
SystemTreeNodeBinding.MAX_CHILD_IMPORT=10000;
function SystemTreeNodeBinding(){
this.logger=SystemLogger.getLogger("SystemTreeNodeBinding");
this.perspectiveNode=null;
this._isForcedOpen=false;
this.node=null;
this.autoExpand=false;
}
SystemTreeNodeBinding.prototype.onBindingAttach=function(){
this.addActionListener(SystemTreeNodeBinding.ACTION_REFRESHED);
this.subscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCE_OPEN);
this.isDisabled=this.node.isDisabled();
var _e6a=this.node.getLabel();
if(_e6a){
this.setLabel(_e6a);
}
var _e6b=this.node.getToolTip();
if(_e6b){
this.setToolTip(_e6b);
}
var _e6c=this.node.getHandle();
if(_e6c){
this.setHandle(_e6c);
}
var bag=this.node.getPropertyBag();
if(bag){
for(var key in bag){
switch(key.toLowerCase()){
case "id":
case "key":
throw new Error("Illegal propertybag key: "+key);
break;
default:
this.setProperty(key,bag[key]);
break;
}
}
}
SystemTreeNodeBinding.superclass.onBindingAttach.call(this);
this.perspectiveNode=this.containingTreeBinding.perspectiveNode;
};
SystemTreeNodeBinding.prototype._initializeBindingDragAndDropFeatures=function(){
if(this.node.hasDragType()){
this.setProperty("dragtype",this.node.getDragType());
}
if(this.node.hasDragAccept()){
var _e6f="";
var list=this.node.getDragAccept();
while(list.hasNext()){
_e6f+=list.getNext();
if(list.hasNext()){
_e6f+=" ";
}
}
this.setProperty("dragaccept",_e6f);
}
SystemTreeNodeBinding.superclass._initializeBindingDragAndDropFeatures.call(this);
};
SystemTreeNodeBinding.prototype.handleAction=function(_e71){
SystemTreeNodeBinding.superclass.handleAction.call(this,_e71);
switch(_e71.type){
case SystemTreeNodeBinding.ACTION_REFRESHED:
if(_e71.target==this){
if(!this.isOpen){
this.hasBeenOpened=false;
_e71.consume();
}
}
break;
}
};
SystemTreeNodeBinding.prototype.handleBroadcast=function(_e72,arg){
SystemTreeNodeBinding.superclass.handleBroadcast.call(this,_e72,arg);
switch(_e72){
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCE_OPEN:
if(arg==this.node.getEntityToken()){
if(this.isContainer&&!this.isOpen){
this._isForcedOpen=true;
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN,this);
var self=this;
setTimeout(function(){
self.open();
},0);
}
}
break;
}
};
SystemTreeNodeBinding.prototype._computeImageProfile=function(){
};
SystemTreeNodeBinding.prototype.computeImage=function(){
var _e75=null;
var _e76=this.node.getImageProfile();
if(_e76){
if(this.isOpen){
_e75=_e76.getActiveImage();
}else{
_e75=_e76.getDefaultImage();
}
}
if(!_e75){
_e75=SystemTreeNodeBinding.superclass.computeImage.call(this);
}
return _e75;
};
SystemTreeNodeBinding.prototype.open=function(_e77){
var _e78=this.isContainer&&!this.isOpen;
var _e79=!this.hasBeenOpened;
SystemTreeNodeBinding.superclass.open.call(this);
if(_e78&&(_e79||SystemTreeBinding.HAS_NO_MEMORY)&&_e77!=true){
this.refresh();
if(this._isForcedOpen){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN,this);
this._isForcedOpen=false;
}
}
};
SystemTreeNodeBinding.prototype.refresh=function(){
var _e7a=null;
if(this.isContainer){
_e7a=this.getOpenSystemNodes();
}
this.isRefreshing=true;
Application.lock(this);
StatusBar.busy();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
self._performRefresh(_e7a);
Application.unlock(self);
}else{
Application.unlock(Application,true);
}
StatusBar.clear();
},0);
};
SystemTreeNodeBinding.prototype._performRefresh=function(_e7c){
if(_e7c!=null){
this._refreshBranch(_e7c);
}else{
this._refreshChildren();
}
this.isRefreshing=false;
this.isContainer=DOMUtil.getElementsByTagName(this.bindingElement,"treenode").item(0)!=null;
this.updateClassNames();
this.dispatchAction(SystemTreeNodeBinding.ACTION_REFRESHED);
this.dispatchAction(SystemTreeNodeBinding.ACTION_REFRESHED_YEAH);
};
SystemTreeNodeBinding.prototype._refreshChildren=function(){
var _e7d=new List();
var _e7e=this.node.getChildren();
this.empty();
if(_e7e.hasEntries()){
this._insertTreeNodesRegulated(_e7e);
}
};
SystemTreeNodeBinding.prototype._insertTreeNodesRegulated=function(_e7f){
var _e80=0;
var _e81=new List([]);
while(_e7f.hasEntries()&&_e80<=SystemTreeNodeBinding.MAX_CHILD_IMPORT){
var _e82=SystemTreeNodeBinding.newInstance(_e7f.extractFirst(),this.bindingDocument);
_e82.autoExpand=this.autoExpand;
this.add(_e82);
_e82.attach();
_e80++;
if(this.autoExpand){
if(_e80==1&&!_e7f.hasEntries()||LocalStore.openedNodes.has(_e82.node)){
_e81.add(_e82);
}
}
}
if(_e7f.hasEntries()){
this._insertBufferTreeNode(_e7f);
}
_e81.each(function(node){
if(node.isContainer&&!node.isOpen){
var self=node;
setTimeout(function(){
self.open();
},0);
}
});
};
SystemTreeNodeBinding.prototype._insertBufferTreeNode=function(_e85){
alert("Max treenode count reached. This is not handled!");
alert("TODO: SystemTreeNodeBinding#._insertBufferTreeNode");
};
SystemTreeNodeBinding.prototype._refreshBranch=function(list){
var _e87=this.node.getDescendantBranch(list);
if(_e87.hasEntries()){
this.XXX(_e87);
}
};
SystemTreeNodeBinding.prototype.XXX=function(_e88){
var self=this;
var map=new Map();
this.empty();
_e88.each(function(key,_e8c){
if(_e8c.hasEntries()){
_e8c.each(function(node){
var _e8e=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
map.set(node.getHandle(),_e8e);
if(map.has(key)){
var _e8f=map.get(key);
_e8f.add(_e8e);
_e8f.isOpen=true;
_e8f.hasBeenOpened=true;
node.searchToken=_e8f.node.searchToken;
}else{
if(key==self.node.getHandle()){
self.add(_e8e);
node.searchToken=self.node.searchToken;
}else{
}
}
});
}
});
this.attachRecursive();
_e88.dispose();
map.dispose();
};
SystemTreeNodeBinding.prototype.getOpenDescendants=function(){
var _e90=new TreeCrawler();
var _e91=new List();
_e90.mode=TreeCrawler.MODE_GETOPEN;
_e90.crawl(this.bindingElement,_e91);
if(_e91.hasEntries()){
_e91.extractFirst();
}
_e90.dispose();
return _e91;
};
SystemTreeNodeBinding.prototype.getOpenSystemNodes=function(){
var _e92=null;
var list=this.getOpenDescendants();
if(list.hasEntries()){
_e92=new List([this.node]);
list.each(function(_e94){
_e92.add(_e94.node);
});
}
return _e92;
};
SystemTreeNodeBinding.prototype.updateClassNames=function(){
if(!this.isRefreshing){
SystemTreeNodeBinding.superclass.updateClassNames.call(this);
}
};
SystemTreeNodeBinding.prototype.acceptTreeNodeBinding=function(_e95,_e96){
var _e97=(SystemTreeBinding.clipboardOperation==SystemTreePopupBinding.CMD_COPY);
if(_e95 instanceof SystemTreeNodeBinding){
if(TreeService.ExecuteDropElementAction){
TreeService.ExecuteDropElementAction(_e95.node.getData(),this.node.getData(),_e96?_e96:this.containingTreeBinding.getDropIndex(),Application.CONSOLE_ID,_e97);
}
}
};
SystemTreeNodeBinding.prototype.invokeManagedFocus=function(e){
if(!this.isFocused){
SystemTreeNodeBinding.superclass.invokeManagedFocus.call(this);
var tree=this.containingTreeBinding;
if(tree.isLockedToEditor&&!tree.isLockFeatureFocus){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS,this);
}
}
};
SystemTreeNodeBinding.prototype.hasChildren=function(){
return this.node.hasChildren();
};
SystemTreeNodeBinding.newInstance=function(node,_e9b){
var _e9c=DOMUtil.createElementNS(Constants.NS_UI,"ui:treenode",_e9b);
var _e9d=UserInterface.registerBinding(_e9c,SystemTreeNodeBinding);
_e9d.node=node;
return _e9d;
};
SystemPageBinding.prototype=new PageBinding;
SystemPageBinding.prototype.constructor=SystemPageBinding;
SystemPageBinding.superclass=PageBinding.prototype;
function SystemPageBinding(){
this.logger=SystemLogger.getLogger("SystemPageBinding");
this.node=null;
this._tree=null;
}
SystemPageBinding.prototype.toString=function(){
return "[SystemPageBinding]";
};
SystemPageBinding.prototype.onBindingRegister=function(){
SystemPageBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
};
SystemPageBinding.prototype.setPageArgument=function(_e9e){
this.node=_e9e;
SystemPageBinding.superclass.setPageArgument.call(this,_e9e);
};
SystemPageBinding.prototype.onBeforePageInitialize=function(){
if(this.node){
this._tree=this.bindingWindow.bindingMap.tree;
if(this._tree){
this._buildTree();
}else{
throw "SystemPageBinding requires a SystemTreeBinding";
}
}else{
throw "SystemPageBinding requires a SystemNode";
}
SystemPageBinding.superclass.onBeforePageInitialize.call(this);
};
SystemPageBinding.prototype._buildTree=function(){
var _e9f=this.node.getChildren();
if(_e9f.hasEntries()){
while(_e9f.hasNext()){
var node=SystemTreeNodeBinding.newInstance(_e9f.getNext(),this.bindingDocument);
this._tree.add(node);
node.attach();
}
}
};
SystemPageBinding.prototype._refreshTree=function(){
var _ea1=this._tree._treeBodyBinding.getChildBindingsByLocalName("treenode");
_ea1.each(function(root){
if(!root.isContainer){
root.isOpen=true;
}
});
var _ea3=new TreeCrawler();
var _ea4=new List();
_ea3.mode=TreeCrawler.MODE_GETOPEN;
_ea3.crawl(this.bindingElement,_ea4);
_ea3.dispose();
var list=new List([this.node]);
_ea4.each(function(_ea6){
list.add(_ea6.node);
});
this._tree.empty();
var _ea7=this.node.getDescendantBranch(list);
if(_ea7.hasEntries()){
var self=this;
var map=new Map();
_ea7.each(function(key,_eab){
_eab.each(function(node){
var _ead=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
map.set(node.getHandle(),_ead);
if(map.has(key)){
var _eae=map.get(key);
_eae.add(_ead);
_eae.isOpen=true;
}else{
if(key==self.node.getHandle()){
self._tree.add(_ead);
}
}
});
});
this._tree.attachRecursive();
}
};
SystemPageBinding.prototype.onAfterPageInitialize=function(){
SystemPageBinding.superclass.onAfterPageInitialize.call(this);
this._tree.selectDefault();
};
SystemPageBinding.prototype.handleAction=function(_eaf){
SystemPageBinding.superclass.handleAction.call(this,_eaf);
switch(_eaf.type){
case ButtonBinding.ACTION_COMMAND:
var _eb0=_eaf.target;
switch(_eb0.getID()){
case "locktreebutton":
this._tree.setLockToEditor(_eb0.isChecked);
break;
case "collapsebutton":
this._tree.collapse();
break;
}
break;
}
};
SystemPageBinding.prototype.handleBroadcast=function(_eb1,arg){
SystemPageBinding.superclass.handleBroadcast.call(this,_eb1,arg);
switch(_eb1){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
var _eb3=arg;
if(this.node&&this.node.getEntityToken()==_eb3){
try{
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,_eb3);
var self=this;
Application.lock(this);
setTimeout(function(){
self._refreshTree();
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,_eb3);
Application.unlock(self);
},0);
}
catch(exception){
alert(exception);
SystemDebug.stack(arguments);
}
}
break;
}
};
StageContainerBinding.prototype=new FlexBoxBinding;
StageContainerBinding.prototype.constructor=StageContainerBinding;
StageContainerBinding.superclass=FlexBoxBinding.prototype;
function StageContainerBinding(){
this.logger=SystemLogger.getLogger("StageContainerBinding");
}
StageContainerBinding.prototype.toString=function(){
return "[StageContainerBinding]";
};
StageContainerBinding.prototype.onBindingAttach=function(){
StageContainerBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.APPLICATION_OPERATIONAL);
};
StageContainerBinding.prototype.handleBroadcast=function(_eb5,arg){
StageContainerBinding.superclass.handleBroadcast.call(this,_eb5,arg);
var _eb7=this.bindingWindow.WindowManager;
switch(_eb5){
case BroadcastMessages.APPLICATION_OPERATIONAL:
this.subscribe(_eb7.WINDOW_RESIZED_BROADCAST);
this._fit();
this.reflex();
break;
case _eb7.WINDOW_RESIZED_BROADCAST:
if(Client.isMozilla==true){
this._fit();
this.reflex();
}else{
Application.lock(this);
var self=this;
setTimeout(function(){
self._fit();
self.reflex();
Application.unlock(self);
},0);
}
break;
}
};
StageContainerBinding.prototype._fit=function(){
var _eb9=this.bindingWindow.WindowManager;
this.bindingElement.style.width=_eb9.getWindowDimensions().w+"px";
};
StageBinding.prototype=new FocusBinding;
StageBinding.prototype.constructor=StageBinding;
StageBinding.superclass=FocusBinding.prototype;
StageBinding.bindingInstance=null;
StageBinding.perspectiveNode=null;
StageBinding.entityToken=null;
StageBinding.treeSelector=null;
StageBinding.handleViewPresentation=function(_eba){
if(StageBinding.isViewOpen(_eba)){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEW,_eba);
}else{
var _ebb=ViewDefinitions[_eba];
StageBinding.presentViewDefinition(_ebb);
}
};
StageBinding.isViewOpen=function(_ebc){
return StageBinding.bindingInstance._activeViewDefinitions[_ebc]!=null;
};
StageBinding.presentViewDefinition=function(_ebd){
if(_ebd.label!=null){
var _ebe=StringBundle.getString("ui","Website.App.StatusBar.Opening");
StatusBar.busy(_ebe,[_ebd.label]);
}else{
StatusBar.busy();
}
StageBinding.bindingInstance._presentViewDefinition(_ebd);
};
function StageBinding(){
this.logger=SystemLogger.getLogger("StageBinding");
this._activeViewDefinitions={};
this._decksBinding=null;
this._explorerBinding=null;
this._isStageReady=false;
this._isExplorerReady=false;
this._isDecksReady=false;
this._dockBindings=new Map();
this._isShowingStart=false;
this._isShowingDefaultStart=false;
this.isActivationAware=false;
return this;
}
StageBinding.prototype.toString=function(){
return "[StageBinding]";
};
StageBinding.prototype.onBindingRegister=function(){
StageBinding.superclass.onBindingRegister.call(this);
StageBinding.bindingInstance=this;
StageBoxHandlerAbstraction.onBindingRegister.call(this);
this.addActionListener(ExplorerBinding.ACTION_INITIALIZED);
this.addActionListener(StageDecksBinding.ACTION_INITIALIZED);
this.addActionListener(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
this.addActionListener(TabBoxBinding.ACTION_ATTACHED);
this.addActionListener(TabBoxBinding.ACTION_SELECTED);
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(ExplorerBinding.ACTION_DECK_LOADED);
this.addActionListener(StageDeckBinding.ACTION_LOADED);
this.addActionListener(ErrorBinding.ACTION_INITIALIZE);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
this.subscribe(BroadcastMessages.VIEW_OPENED);
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
this.subscribe(BroadcastMessages.DOCK_MAXIMIZED);
this.subscribe(BroadcastMessages.DOCK_NORMALIZED);
var root=System.getRootNode();
this._initializeRootActions(root);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,{handleBroadcast:function(_ec0,arg){
if(arg==root.getEntityToken()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
}
}});
var _ec2=System.getPerspectiveNodes();
if(_ec2.hasEntries()){
this._initializeSystemViewDefinitions(_ec2);
}else{
top.app.bindingMap.stagecontainer.hide();
this._onStageReady();
Dialog.message(StringBundle.getString("ui","Website.Dialogs.NoAccessTitle"),StringBundle.getString("ui","Website.Dialogs.NoAccessText"));
}
};
StageBinding.prototype._renameThisMethod=function(){
if(LocalStore.isInitialized){
this._initializeWorkbenchLayout();
}else{
var self=this;
EventBroadcaster.subscribe(BroadcastMessages.LOCALSTORE_INITIALIZED,{handleBroadcast:function(){
self._initializeWorkbenchLayout();
}});
}
};
StageBinding.prototype._initializeWorkbenchLayout=function(){
if(this._explorerBinding){
var _ec4=null;
if(LocalStore.isEnabled){
_ec4=LocalStore.getProperty(LocalStore.SELECTED_PERSPECTIVE_HANDLE);
}
if(_ec4&&ViewDefinitions[_ec4]){
alert("StageBinding#_initializeWorkbenchLayout !!!!");
this._explorerBinding.setSelectionByHandle(unescape(_ec4));
}else{
this._explorerBinding.setSelectionDefault();
}
}else{
this._onStageReady();
}
};
StageBinding.prototype._onStageReady=function(){
if(!this._isStageReady){
if(!Application.hasStartPage||!Application.hasExternalConnection){
top.app.bindingMap.defaultstartdeck.select();
this._isShowingDefaultStart=true;
}
EventBroadcaster.broadcast(BroadcastMessages.STAGE_INITIALIZED);
this._isStageReady=true;
}
};
StageBinding.prototype._initializeRootActions=function(root){
var _ec6=root.getActionProfile();
if(_ec6&&_ec6.hasEntries()){
var _ec7=top.app.bindingMap.toolsmenugroup;
if(_ec7){
_ec6.each(function(_ec8,list){
list.each(function(_eca){
var item=MenuItemBinding.newInstance(_ec7.bindingDocument);
item.setLabel(_eca.getLabel());
item.setToolTip(_eca.getToolTip());
item.setImage(_eca.getImage());
item.setDisabled(_eca.isDisabled());
item.associatedSystemAction=_eca;
var _ecc=_ec7;
var tag=_eca.getTag();
if(tag!=null){
switch(tag){
case SystemAction.TAG_CHANGEFROMLANGUAGE:
_ecc=top.app.bindingMap.translationsmenugroup;
break;
}
}
_ecc.add(item);
});
});
_ec7.attachRecursive();
}
}
};
StageBinding.prototype._initializeSystemViewDefinitions=function(_ece){
while(_ece.hasNext()){
var node=_ece.getNext();
var _ed0=node.getHandle();
ViewDefinitions[_ed0]=new SystemViewDefinition(node);
}
};
StageBinding.prototype.handleAction=function(_ed1){
StageBinding.superclass.handleAction.call(this,_ed1);
var _ed2=_ed1.target;
switch(_ed1.type){
case StageDecksBinding.ACTION_INITIALIZED:
if(!Application.isOperational){
ProgressBarBinding.notch(4);
}
this._decksBinding=_ed2;
this._inflateBinding(_ed2);
_ed1.consume();
break;
case ExplorerBinding.ACTION_INITIALIZED:
if(!Application.isOperational){
ProgressBarBinding.notch(4);
}
this._explorerBinding=_ed2;
this._inflateBinding(_ed2);
_ed1.consume();
break;
case ExplorerMenuBinding.ACTION_SELECTIONCHANGED:
if(!Application.isOperational){
ProgressBarBinding.notch(5);
}
this.handlePerspectiveChange(_ed2);
_ed1.consume();
break;
case TabBoxBinding.ACTION_ATTACHED:
if(_ed2 instanceof DockBinding){
switch(_ed2.reference){
case DockBinding.START:
case DockBinding.ABSBOTTOMLEFT:
case DockBinding.ABSBOTTOMRIGHT:
case DockBinding.ABSRIGHTTOP:
case DockBinding.ABSRIGHTBOTTOM:
this._dockBindings.set(_ed2.reference,_ed2);
break;
}
this.handleAttachedDock(_ed2);
_ed1.consume();
}
break;
case TabBoxBinding.ACTION_SELECTED:
if(_ed2 instanceof DockBinding){
this.handleSelectedDockTab(_ed2.getSelectedTabBinding());
_ed1.consume();
}
break;
case WindowBinding.ACTION_LOADED:
break;
case ExplorerBinding.ACTION_DECK_LOADED:
this._isExplorerReady=true;
if(this._isDecksReady==true){
if(!this._isStageReady){
ProgressBarBinding.notch(3);
this._onStageReady();
}
}
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
if(!this._isFlexAbort&&Application.isOperational){
this._isFlexAbort=true;
this.reflex(true);
var self=this;
setTimeout(function(){
if(Client.isMozilla==true){
self.reflex(true);
}
self._isFlexAbort=false;
},0);
}
_ed1.consume();
break;
case StageDeckBinding.ACTION_LOADED:
this._isDecksReady=true;
if(this._isExplorerReady==true){
if(!this._isStageReady){
this._onStageReady();
}
}
break;
case ErrorBinding.ACTION_INITIALIZE:
_ed1.consume();
break;
}
StageBoxHandlerAbstraction.handleAction.call(this,_ed1);
};
StageBinding.prototype.handleBroadcast=function(_ed4,arg){
StageBinding.superclass.handleBroadcast.call(this,_ed4,arg);
switch(_ed4){
case BroadcastMessages.VIEW_OPENED:
Application.unlock(this);
break;
case BroadcastMessages.VIEW_CLOSED:
var _ed6=arg;
this._dontView(_ed6);
break;
case BroadcastMessages.COMPOSITE_START:
this._showStart(true);
break;
case BroadcastMessages.COMPOSITE_STOP:
this._showStart(false);
break;
case BroadcastMessages.DOCK_MAXIMIZED:
this._stabilizeExplorer();
if(this._isShowingStart){
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}
break;
case BroadcastMessages.DOCK_NORMALIZED:
this._stabilizeExplorer();
break;
}
};
StageBinding.prototype._stabilizeExplorer=function(){
if(Client.isExplorer==true){
var self=this;
if(Client.isExplorer==true){
setTimeout(function(){
self.reflex(true);
},0);
}
}
};
StageBinding.prototype._showStart=function(_ed8){
if(_ed8!=this._isShowingStart){
var view=ViewBinding.getInstance("Composite.Management.Start");
var dock=this._dockBindings.get(DockBinding.START);
var _edb=this.bindingWindow.bindingMap.maindecks;
if(_ed8){
_edb.select("startdeck");
view.show();
}else{
view.hide();
_edb.select("stagedeck");
if(dock!=null&&dock.isActive){
dock.deActivate();
}
}
this._isShowingStart=_ed8;
}
};
StageBinding.prototype._inflateBinding=function(_edc){
for(var _edd in ViewDefinitions){
var _ede=ViewDefinitions[_edd];
if(_ede instanceof SystemViewDefinition){
_edc.mountDefinition(_ede);
}
}
var _edf=(this._decksBinding!=null&&this._explorerBinding!=null);
if(_edf){
var self=this;
setTimeout(function(){
self._renameThisMethod();
},0);
}
};
StageBinding.prototype.iterateContainedStageBoxBindings=function(mode){
var _ee2=new StageCrawler();
_ee2.mode=mode;
_ee2.crawl(this.bindingElement);
_ee2.dispose();
};
StageBinding.prototype.handlePerspectiveChange=function(_ee3){
var _ee4=_ee3.getSelectionHandle();
this._decksBinding.setSelectionByHandle(_ee4);
if(LocalStore.isEnabled){
LocalStore.setProperty(LocalStore.SELECTED_PERSPECTIVE_HANDLE,escape(_ee4));
}
};
StageBinding.prototype.handleAttachedDock=function(_ee5){
var _ee6=_ee5.getTabBindings();
if(_ee6.hasEntries()){
while(_ee6.hasNext()){
var _ee7=_ee6.getNext();
var _ee8=_ee7.getHandle();
if(_ee8){
if(_ee8=="Composite.Management.Start"&&(!Application.hasStartPage||!Application.hasExternalConnection)){
}else{
var _ee9=ViewDefinitions[_ee8];
if(_ee9){
this._view(_ee5,_ee7,_ee9,false);
}else{
alert("StageBinding: no such predefined viewdefinition ("+_ee8+")");
}
}
}
}
}
};
StageBinding.prototype._presentViewDefinition=function(_eea){
var _eeb=null;
var _eec=false;
switch(_eea.position){
case Dialog.MODAL:
_eeb=app.bindingMap.masterdialogset.getModalInstance();
break;
case Dialog.NON_MODAL:
_eeb=app.bindingMap.masterdialogset.getInstance();
break;
default:
if(this._dockBindings.hasEntries()){
switch(_eea.position){
case DockBinding.ABSBOTTOMLEFT:
case DockBinding.ABSBOTTOMRIGHT:
case DockBinding.ABSRIGHTTOP:
case DockBinding.ABSRIGHTBOTTOM:
_eeb=this._dockBindings.get(_eea.position);
break;
case DockBinding.EXTERNAL:
window.open(_eea.url);
_eec=true;
break;
default:
var _eed=this._decksBinding.getSelectedDeckBinding();
_eeb=_eed.getDockBindingByReference(_eea.position);
if(this._isShowingStart){
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}else{
if(this._isShowingDefaultStart){
var _eee=this.bindingWindow.bindingMap.maindecks;
_eee.select("stagedeck");
this._isShowingDefaultStart=false;
}
}
break;
}
}else{
_eec=true;
}
break;
}
if(!_eec){
if(_eeb!=null){
this._view(_eeb,null,_eea,true);
}else{
throw "StageBinding: Could not position view: "+_eea.handle;
}
}
};
StageBinding.prototype._view=function(_eef,_ef0,_ef1,_ef2){
var _ef3=_ef1.handle;
if(_ef1.isMutable){
_ef3+=KeyMaster.getUniqueKey();
}
if(this._activeViewDefinitions[_ef3]){
var _ef4=ViewBinding.getInstance(_ef3);
if(_ef4!=null){
_ef4.update();
}else{
this.logger.error("Could not update ViewBinding (declared open): \n"+_ef3);
}
}else{
this._activeViewDefinitions[_ef3]=_ef1;
Application.lock(this);
switch(_eef.constructor){
case DockBinding:
if(_ef2){
_eef.prepareNewView(_ef1);
}else{
_eef.prepareOpenView(_ef1,_ef0);
}
break;
case StageDialogBinding:
if(_ef2){
_eef.prepareNewView(_ef1);
}
break;
}
}
};
StageBinding.prototype._dontView=function(_ef5){
if(this._activeViewDefinitions[_ef5]!=null){
delete this._activeViewDefinitions[_ef5];
}else{
this.logger.debug("Could not unregister active view: "+_ef5);
}
};
StageBinding.prototype.handleSelectedDockTab=function(_ef6){
};
StageCrawler.prototype=new BindingCrawler;
StageCrawler.prototype.constructor=StageCrawler;
StageCrawler.superclass=BindingCrawler.prototype;
StageCrawler.ID="stagecrawler";
StageCrawler.MODE_MAXIMIZE="maximize";
StageCrawler.MODE_UNMAXIMIZE="minimize";
function StageCrawler(){
this.mode=StageCrawler.MODE_MAXIMIZE;
this.id=StageCrawler.ID;
this._construct();
return this;
}
StageCrawler.prototype._construct=function(){
StageCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_ef8){
var _ef9=UserInterface.getBinding(_ef8);
var _efa=null;
if(_ef9){
switch(_ef9.constructor){
case StageSplitBoxBinding:
case StageSplitPanelBinding:
case StageSplitterBinding:
switch(self.mode){
case StageCrawler.MODE_MAXIMIZE:
_ef9.handleMaximization();
break;
case StageCrawler.MODE_UNMAXIMIZE:
_ef9.handleUnMaximization();
break;
}
break;
case DockBinding:
_efa=NodeCrawler.SKIP_NODE;
break;
}
}
return _efa;
});
};
StageDialogSetBinding.prototype=new DialogSetBinding;
StageDialogSetBinding.prototype.constructor=StageDialogSetBinding;
StageDialogSetBinding.superclass=DialogSetBinding.prototype;
function StageDialogSetBinding(){
this.logger=SystemLogger.getLogger("StageDialogSetBinding");
this._dialogs=new List();
}
StageDialogSetBinding.prototype.toString=function(){
return "[StageDialogSetBinding]";
};
StageDialogSetBinding.prototype.getInstance=function(){
var _efb=null;
this._dialogs.each(function(_efc){
if(!_efc.isVisible){
_efb=_efc;
}
return _efb!=null;
});
if(!_efb){
this._newInstance();
_efb=this._dialogs.getLast();
}
_efb.setModal(false);
return _efb;
};
StageDialogSetBinding.prototype.getModalInstance=function(){
var _efd=this.getInstance();
_efd.setModal(true);
return _efd;
};
StageDialogSetBinding.prototype._newInstance=function(){
var _efe=this.add(StageDialogBinding.newInstance(this.bindingDocument));
this._dialogs.add(_efe);
_efe.attach();
};
StageDialogBinding.prototype=new DialogBinding;
StageDialogBinding.prototype.constructor=StageDialogBinding;
StageDialogBinding.superclass=DialogBinding.prototype;
function StageDialogBinding(){
this.logger=SystemLogger.getLogger("StageDialogBinding");
this._viewBinding=null;
this._pageBinding=null;
this._dialogResponseHandler=null;
this._isFirstPage=true;
return this;
}
StageDialogBinding.prototype.toString=function(){
return "[StageDialogBinding]";
};
StageDialogBinding.prototype.onBindingRegister=function(){
StageDialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(PageBinding.ACTION_DETACHED);
this.addActionListener(DialogPageBinding.ACTION_RESPONSE);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(ViewBinding.ACTION_ONCLOSE);
this.addActionListener(ViewBinding.ACTION_CLOSED);
this.addActionListener(ErrorBinding.ACTION_INITIALIZE);
this.addActionListener(PageBinding.ACTION_UPDATING);
this.addActionListener(PageBinding.ACTION_UPDATED);
this.addActionListener(DialogBinding.ACTION_CLOSE);
this.subscribe(BroadcastMessages.KEY_ESCAPE);
};
StageDialogBinding.prototype.onBindingAttach=function(){
StageDialogBinding.superclass.onBindingAttach.call(this);
this.defaultSetup();
};
StageDialogBinding.prototype.prepareNewView=function(_eff){
if(_eff instanceof DialogViewDefinition){
var _f00=ViewBinding.newInstance(this.bindingDocument);
_f00.setDefinition(_eff);
_f00.setType(ViewBinding.TYPE_DIALOGVIEW);
if(_eff.handler){
if(Interfaces.isImplemented(IDialogResponseHandler,_eff.handler)){
this._dialogResponseHandler=_eff.handler;
}else{
throw "IDialogResponseHandler not implemented";
}
}
this._viewBinding=_f00;
this._body.add(_f00);
_f00.attach();
_f00.initialize();
}
};
StageDialogBinding.prototype.handleAction=function(_f01){
StageDialogBinding.superclass.handleAction.call(this,_f01);
var _f02=_f01.target;
switch(_f01.type){
case PageBinding.ACTION_INITIALIZED:
this._handleInitializedPageBinding(_f02);
_f01.consume();
break;
case PageBinding.ACTION_DETACHED:
if(_f02.bindingDocument==this._viewBinding.getContentDocument()){
this._pageBinding=null;
}
_f01.consume();
break;
case DialogPageBinding.ACTION_RESPONSE:
if(_f02.response){
this._handleDialogPageResponse(_f02);
}
_f01.consume();
break;
case Binding.ACTION_INVALID:
this._disableDialogAcceptButton(true);
_f01.consume();
break;
case Binding.ACTION_VALID:
this._disableDialogAcceptButton(false);
_f01.consume();
break;
case ViewBinding.ACTION_ONCLOSE:
this.close();
_f01.consume();
break;
case ViewBinding.ACTION_CLOSED:
this._isFirstPage=true;
_f01.consume();
break;
case ErrorBinding.ACTION_INITIALIZE:
_f01.consume();
break;
case PageBinding.ACTION_UPDATING:
this._isUpdating=true;
_f01.consume();
break;
case PageBinding.ACTION_UPDATED:
if(this._isUpdating){
this._isUpdating=false;
this._fit();
}
_f01.consume();
break;
case Binding.ACTION_UPDATED:
if(!this._isUpdating){
this._fit();
}
_f01.consume();
break;
case DialogBinding.ACTION_CLOSE:
if(_f02==this){
this._viewBinding.dispose();
this.defaultSetup();
}
break;
}
};
StageDialogBinding.prototype.handleBroadcast=function(_f03,arg){
StageDialogBinding.superclass.handleBroadcast.call(this,_f03,arg);
switch(_f03){
case BroadcastMessages.KEY_ESCAPE:
if(this.isVisible==true){
if(!PopupBinding.hasActiveInstances()){
this._defaultClose();
}
}
break;
}
};
StageDialogBinding.prototype._fit=function(_f05){
var _f06=new FitnessCrawler();
var list=new List();
if(_f05){
_f06.mode=FitnessCrawler.MODE_BRUTAL;
}
_f06.crawl(this.bindingElement,list);
_f06.dispose();
if(list.hasEntries()){
list.reverse();
list.each(function(_f08){
_f08.fit(_f05);
});
list.dispose();
this._fitMe();
}
};
StageDialogBinding.prototype._fitMe=function(){
if(this._pageBinding!=null){
this._pageBinding.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(this._pageBinding);
this._pageBinding.enableAutoHeightLayoutMode(false);
var _f09=this.getDimension().h;
this.reflex(true);
var self=this;
if(this.getDimension().h==_f09){
var self=this;
setTimeout(function(){
self.reflex(true);
},0);
}
}
};
StageDialogBinding.prototype._handleContextMenuItemBinding=function(_f0b){
var cmd=_f0b.getProperty("cmd");
switch(cmd){
case DialogTitleBarPopupBinding.CMD_CLOSE:
this._defaultClose();
break;
case DialogTitleBarPopupBinding.CMD_REFRESH:
this._titlebar.setLabel(DockTabBinding.LABEL_TABLOADING);
this._titlebar.setImage(DockTabBinding.IMG_TABLOADING);
this._pageBinding=null;
this._viewBinding.reload(Application.isDeveloperMode);
break;
case DialogTitleBarPopupBinding.CMD_VIEWSOURCE:
case DialogTitleBarPopupBinding.CMD_VIEWGENERATED:
case DialogTitleBarPopupBinding.CMD_VIEWSERIALIZED:
this._viewSource(cmd);
break;
default:
alert("TODO!");
break;
}
};
StageDialogBinding.prototype._viewSource=DockTabBinding.prototype._viewSource;
StageDialogBinding.prototype._handleInitializedPageBinding=function(_f0d){
if(_f0d.bindingDocument==this._viewBinding.getContentDocument()){
if(_f0d instanceof DialogPageBinding){
if(this._pageBinding==null){
this._parsePageBinding(_f0d);
}
this._pageBinding=_f0d;
if(_f0d.height=="auto"){
_f0d.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(_f0d);
_f0d.enableAutoHeightLayoutMode(false);
this.reflex(true);
}
}
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
if(this._isFirstPage){
EventBroadcaster.broadcast(BroadcastMessages.VIEW_COMPLETED,this._viewBinding.getHandle());
EventBroadcaster.broadcast(BroadcastMessages.STAGEDIALOG_OPENED);
}
}else{
if(_f0d.isDialogSubPage){
this._pageBinding.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(_f0d);
this._pageBinding.enableAutoHeightLayoutMode(false);
this._fit(true);
this.reflex(true);
}
}
this._isFirstPage=false;
};
StageDialogBinding.prototype._disableDialogAcceptButton=function(_f0e){
var _f0f=this._viewBinding.getContentDocument().getElementById("dialogacceptbutton");
if(_f0f){
var _f10=UserInterface.getBinding(_f0f);
_f10.setDisabled(_f0e);
}
};
StageDialogBinding.prototype._handleDialogPageResponse=function(_f11){
if(this._dialogResponseHandler!=null){
this._dialogResponseHandler.handleDialogResponse(_f11.response,_f11.result!=null?_f11.result:null);
}
var self=this;
setTimeout(function(){
self.close();
},0);
};
StageDialogBinding.prototype.handleInvokedControl=function(_f13){
if(_f13.controlType==ControlBinding.TYPE_CLOSE){
this._defaultClose();
}
StageDialogBinding.superclass.handleInvokedControl.call(this,_f13);
};
StageDialogBinding.prototype.buildDescendantBindings=function(){
StageDialogBinding.superclass.buildDescendantBindings.call(this);
this._titlebar.setContextMenu(app.bindingMap.dialogtitlebarpopup);
var self=this;
this._titlebar.handleAction=function(_f15){
switch(_f15.type){
case MenuItemBinding.ACTION_COMMAND:
if(_f15.listener==this.contextMenuBinding){
self._handleContextMenuItemBinding(_f15.target);
}
break;
}
};
};
StageDialogBinding.prototype._parsePageBinding=function(_f16){
var _f17=_f16.label;
var _f18=_f16.image;
var _f19=_f16.width;
var _f1a=_f16.height;
var _f1b=_f16.controls;
var _f1c=_f16.isResizable;
if(_f17){
this.setLabel(_f17);
}
if(_f18){
this.setImage(_f18);
}
if(_f19||_f1a){
var old=this.getDimension();
var nev=new Dimension();
if(this._isFirstPage){
nev.w=_f19?_f19:old.w;
}else{
nev.w=old.w;
}
nev.h=(_f1a!=null&&_f1a!="auto")?_f1a:old.h;
this.setDimension(nev);
}
if(_f1b){
this.controlBindings[ControlBinding.TYPE_MAXIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_MINIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_CLOSE].hide();
var type,_f20=new List(_f1b.split(" "));
while((type=_f20.getNext())!=null){
this.controlBindings[type].show();
}
}
if(_f1c!=this._isResizable){
this.setResizable(_f1c);
}
if(_f1a=="auto"){
this._fixAutoHeight(_f16);
}
if(_f16==this._pageBinding){
this.centerOnScreen();
}
if(!this.isOpen){
this.reflex(true);
this.open(true);
}
};
StageDialogBinding.prototype._fixAutoHeight=function(_f21){
var dim=this.getDimension();
var _f23=0;
var _f24=0;
if(_f21.isDialogSubPage){
_f21=this._pageBinding;
}
if(this._isFirstPage){
_f23=_f21.width!=null?_f21.width:dim.w;
}else{
_f23=dim.w;
}
_f24=_f21.bindingElement.offsetHeight;
_f24+=this._titlebar.bindingElement.offsetHeight;
_f24+=4;
if(_f24<dim.h){
_f24=dim.h;
}
if(_f21.minheight!=null){
if(_f24<_f21.minheight){
_f24=_f21.minheight;
}
}
this.setDimension(new Dimension(_f23,_f24));
};
StageDialogBinding.prototype._defaultClose=function(){
if(this._dialogResponseHandler!=null){
this._dialogResponseHandler.handleDialogResponse(Dialog.RESPONSE_CANCEL);
}
this.close();
};
StageDialogBinding.prototype.open=function(){
StageDialogBinding.superclass.open.call(this);
if(this.isVisible==true){
this._viewBinding.onActivate();
}
};
StageDialogBinding.prototype.defaultSetup=function(){
this.setImage(LabelBinding.DEFAULT_IMAGE);
this.setLabel("");
this.setDimension(new Dimension(DialogBinding.DEFAULT_WIDTH,DialogBinding.DEFAULT_HEIGHT));
this.controlBindings[ControlBinding.TYPE_MAXIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_MINIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_CLOSE].show();
this._pageBinding=null;
this._dialogResponseHandler=null;
if(!this._isResizable){
this.setResizable(true);
}
};
StageDialogBinding.prototype.setPosition=function(p){
StageDialogBinding.superclass.setPosition.call(this,p);
this._body.dispatchAction(Binding.ACTION_POSITIONCHANGED);
};
StageDialogBinding.prototype.setDimension=function(dim){
StageDialogBinding.superclass.setDimension.call(this,dim);
this._body.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
};
StageDialogBinding.prototype.activate=function(){
if(!this.isActive){
StageDialogBinding.superclass.activate.call(this);
this._viewBinding.onActivate();
}
};
StageDialogBinding.prototype.deActivate=function(){
if(this.isActive==true){
StageDialogBinding.superclass.deActivate.call(this);
this._viewBinding.onDeactivate();
}
};
StageDialogBinding.newInstance=function(_f27){
var _f28=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialog",_f27);
var _f29=UserInterface.registerBinding(_f28,StageDialogBinding);
_f29.setProperty("controls","minimize maximize close");
return _f29;
};
FitnessCrawler.prototype=new Crawler;
FitnessCrawler.prototype.constructor=FitnessCrawler;
FitnessCrawler.superclass=Crawler.prototype;
FitnessCrawler.ID="fitnesscrawler";
FitnessCrawler.MODE_BRUTAL="brutal fitness";
FitnessCrawler.MODE_TRAINING="train fitness";
function FitnessCrawler(){
this.id=FitnessCrawler.ID;
this.mode=FitnessCrawler.MODE_TRAINING;
this._construct();
return this;
}
FitnessCrawler.prototype._construct=function(){
FitnessCrawler.superclass._construct.call(this);
this.addFilter(function(_f2a,list){
var _f2c=null;
var _f2d=UserInterface.getBinding(_f2a);
if(!_f2d.isVisible){
_f2c=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
}
return _f2c;
});
this.addFilter(function(_f2e,list){
var _f30=null;
var _f31=UserInterface.getBinding(_f2e);
if(_f31.isAttached){
if(Interfaces.isImplemented(IFit,_f31)){
if(!_f31.isFit||this.mode==FitnessCrawler.MODE_BRUTAL){
list.add(_f31);
}
}
}
return null;
});
};
StageDecksBinding.prototype=new DecksBinding;
StageDecksBinding.prototype.constructor=StageDecksBinding;
StageDecksBinding.superclass=DecksBinding.prototype;
StageDecksBinding.NODENAME_DECK="stagedeck";
StageDecksBinding.ACTION_INITIALIZED="stagedecks initialized";
function StageDecksBinding(){
this.logger=SystemLogger.getLogger("StageDecksBinding");
this._decks={};
}
StageDecksBinding.prototype.toString=function(){
return "[StageDecksBinding]";
};
StageDecksBinding.prototype.onBindingInitialize=function(){
StageDecksBinding.superclass.onBindingInitialize.call(this);
this.dispatchAction(StageDecksBinding.ACTION_INITIALIZED);
};
StageDecksBinding.prototype.mountDefinition=function(_f32){
var _f33=StageDeckBinding.newInstance(this.bindingDocument);
_f33.handle=_f32.handle;
_f33.perspectiveNode=_f32.node;
this._decks[_f33.handle]=_f33;
this.add(_f33);
_f33.attach();
};
StageDecksBinding.prototype.setSelectionByHandle=function(_f34){
var _f35=this._decks[_f34];
StageBinding.perspectiveNode=_f35.perspectiveNode;
this.select(_f35);
};
StageDeckBinding.prototype=new DeckBinding;
StageDeckBinding.prototype.constructor=StageDeckBinding;
StageDeckBinding.superclass=DeckBinding.prototype;
StageDeckBinding.ACTION_LOADED="stagedeck loaded";
StageDeckBinding.NODENAME_DECKS="stagedecks";
StageDeckBinding.DEFAULT_URL="${root}/content/misc/stage/stagedeck.aspx";
StageDeckBinding.CLASSNAME_TOOLS_OPEN="toolsopen";
function StageDeckBinding(){
this.logger=SystemLogger.getLogger("StageDeckBinding");
this.handle=null;
this.perspectiveNode=null;
this.isReady=false;
this._isStageDeckBindingInitialized=false;
this._dockBindings=null;
this._dockBindingCount=0;
this.windowBinding=null;
this.isSubPanelMaximized=false;
}
StageDeckBinding.prototype.toString=function(){
return "[StageDeckBinding]";
};
StageDeckBinding.prototype.onBindingRegister=function(){
StageDeckBinding.superclass.onBindingRegister.call(this);
StageBoxHandlerAbstraction.onBindingRegister.call(this);
this._dockBindings=new Map();
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(TabBoxBinding.ACTION_ATTACHED);
};
StageDeckBinding.prototype.handleAction=function(_f36){
StageDeckBinding.superclass.handleAction.call(this,_f36);
var _f37=_f36.target;
switch(_f36.type){
case WindowBinding.ACTION_LOADED:
if(_f37==this.windowBinding){
top.app.bindingMap.stagedeckscover.hide();
this.removeActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(StageSplitBoxBinding.ACTION_DOCK_EMPTIED);
this.addActionListener(StageSplitBoxBinding.ACTION_DOCK_OPENED);
this.dispatchAction(StageDeckBinding.ACTION_LOADED);
_f36.consume();
}
break;
case TabBoxBinding.ACTION_ATTACHED:
if(_f37 instanceof DockBinding){
this._dockBindings.set(_f37.reference,_f37);
_f37.perspectiveNode=this.perspectiveNode;
}
break;
case StageSplitBoxBinding.ACTION_DOCK_OPENED:
this._dockBindingCount++;
if(this._dockBindingCount==2){
this._dockBindings.get("main").showControls(true);
}
_f36.consume();
break;
case StageSplitBoxBinding.ACTION_DOCK_EMPTIED:
this._dockBindingCount--;
if(this._dockBindingCount==1){
this._dockBindings.get("main").showControls(false);
}
_f36.consume();
break;
}
StageBoxHandlerAbstraction.handleAction.call(this,_f36);
StageDeckBinding.superclass.handleAction.call(this,_f36);
};
StageDeckBinding.prototype.iterateContainedStageBoxBindings=function(mode){
var _f39=new StageCrawler();
_f39.mode=mode;
_f39.crawl(this.windowBinding.getContentDocument().body);
_f39.dispose();
};
StageDeckBinding.prototype.select=function(){
if(!this._isStageDeckBindingInitialized){
this.initialize();
}
StageDeckBinding.superclass.select.call(this);
};
StageDeckBinding.prototype.getDockBindingByReference=function(_f3a){
return this._dockBindings.get(_f3a);
};
StageDeckBinding.prototype.initialize=function(){
if(!this._isStageDeckBindingInitialized){
top.app.bindingMap.stagedeckscover.show();
this.windowBinding=this.add(WindowBinding.newInstance(this.bindingDocument));
var url=StageDeckBinding.DEFAULT_URL+"?handle="+this.handle;
this.windowBinding.setURL(url);
this.windowBinding.attach();
this._isStageDeckBindingInitialized=true;
}
};
StageDeckBinding.newInstance=function(_f3c){
var _f3d=DOMUtil.createElementNS(Constants.NS_UI,"ui:stagedeck",_f3c);
var _f3e=UserInterface.registerBinding(_f3d,StageDeckBinding);
return _f3e;
};
StageDeckRootBinding.prototype=new RootBinding;
StageDeckRootBinding.prototype.constructor=StageDeckRootBinding;
StageDeckRootBinding.superclass=RootBinding.prototype;
StageDeckRootBinding.DEFAULT_TEMPLATE="defaultstagedeck.xml";
function StageDeckRootBinding(){
this.logger=SystemLogger.getLogger("StageDeckRootBinding");
}
StageDeckRootBinding.prototype.toString=function(){
return "[StageDeckRootBinding]";
};
StageSplitBoxBinding.prototype=new SplitBoxBinding;
StageSplitBoxBinding.prototype.constructor=StageSplitBoxBinding;
StageSplitBoxBinding.superclass=SplitBoxBinding.prototype;
StageSplitBoxBinding.ACTION_HIDE="stagesplitboxbinding hide";
StageSplitBoxBinding.ACTION_SHOW="stagesplitboxbinding show";
StageSplitBoxBinding.ACTION_DOCK_EMPTIED="stagesplitbox says dock emptied";
StageSplitBoxBinding.ACTION_DOCK_OPENED="stagesplitbox says dock opened";
function StageSplitBoxBinding(){
this.logger=SystemLogger.getLogger("StageSplitBoxBinding");
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
return this;
}
StageSplitBoxBinding.prototype.toString=function(){
return "[StageSplitBoxBinding]";
};
StageSplitBoxBinding.prototype.onBindingRegister=function(){
StageSplitBoxBinding.superclass.onBindingRegister.call(this);
StageBoxAbstraction.onBindingRegister.call(this);
this.addActionListener(DockBinding.ACTION_EMPTIED,this);
this.addActionListener(DockBinding.ACTION_OPENED,this);
this.addActionListener(StageSplitBoxBinding.ACTION_SHOW,this);
this.addActionListener(StageSplitBoxBinding.ACTION_HIDE,this);
};
StageSplitBoxBinding.prototype.handleAction=function(_f3f){
StageSplitBoxBinding.superclass.handleAction.call(this,_f3f);
StageBoxAbstraction.handleAction.call(this,_f3f);
var _f40=_f3f.target;
var _f41=null;
var _f42=null;
switch(_f3f.type){
case DockBinding.ACTION_EMPTIED:
_f42=this.getChildBindingByLocalName("splitter");
if(_f42.isVisible){
_f42.hide();
}
_f41=this.getDescendantBindingsByLocalName("dock");
if(_f41.getFirst().isEmpty&&_f41.getLast().isEmpty){
if(_f41.getFirst().type!=DockBinding.TYPE_EDITORS){
this.dispatchAction(StageSplitBoxBinding.ACTION_HIDE);
this.hide();
}
}else{
this.flex();
this.invokeLayout();
}
this.dispatchAction(StageSplitBoxBinding.ACTION_DOCK_EMPTIED);
_f3f.consume();
break;
case DockBinding.ACTION_OPENED:
_f41=this.getDescendantBindingsByLocalName("dock");
if(!_f41.getFirst().isEmpty&&!_f41.getLast().isEmpty){
_f42=this.getChildBindingByLocalName("splitter");
if(!_f42.isVisible){
_f42.show();
}
}
if(!this.isVisible){
this.show();
this.dispatchAction(StageSplitBoxBinding.ACTION_SHOW);
}
this.flex();
this.invokeLayout();
this.dispatchAction(StageSplitBoxBinding.ACTION_DOCK_OPENED);
_f3f.consume();
break;
case StageSplitBoxBinding.ACTION_HIDE:
if(_f40!=this){
_f42=this.getChildBindingByLocalName("splitter");
if(_f42.isVisible){
_f42.hide();
}
this.invokeLayout();
_f3f.consume();
}
break;
case StageSplitBoxBinding.ACTION_SHOW:
if(_f40!=this){
var _f43=this.getChildBindingsByLocalName("splitpanel");
if(_f43.getFirst().isVisible&&_f43.getLast().isVisible){
_f42=this.getChildBindingByLocalName("splitter");
if(!_f42.isVisible){
_f42.show();
}
}
this.invokeLayout();
_f3f.consume();
}
break;
}
};
StageSplitBoxBinding.prototype.handleMaximization=function(){
StageBoxAbstraction.handleMaximization.call(this);
};
StageSplitBoxBinding.prototype.handleUnMaximization=function(){
StageBoxAbstraction.handleUnMaximization.call(this);
};
StageSplitBoxBinding.prototype.flex=function(){
if(this.isMaximizedForReal==null){
StageSplitBoxBinding.superclass.flex.call(this);
}
};
StageSplitBoxBinding.prototype.handleCrawler=function(_f44){
StageSplitBoxBinding.superclass.handleCrawler.call(this,_f44);
switch(_f44.id){
case FlexBoxCrawler.ID:
if(this.isMaximizedForReal==false){
_f44.response=NodeCrawler.SKIP_CHILDREN;
}
break;
}
};
StageSplitBoxBinding.prototype.hasBothPanelsVisible=function(){
var _f45=this.getChildBindingsByLocalName("splitpanel");
return _f45.getFirst().isVisible&&_f45.getLast().isVisible;
};
StageSplitBoxBinding.prototype.hasBothPanelsFixed=function(){
var _f46=this.getChildBindingsByLocalName("splitpanel");
return _f46.getFirst().isFixed&&_f46.getLast().isFixed;
};
StageSplitPanelBinding.prototype=new SplitPanelBinding;
StageSplitPanelBinding.prototype.constructor=StageSplitPanelBinding;
StageSplitPanelBinding.superclass=SplitPanelBinding.prototype;
StageSplitPanelBinding.ACTION_LAYOUTUPDATE="stagesplitpanel layout changed";
function StageSplitPanelBinding(){
this.logger=SystemLogger.getLogger("StageSplitPanelBinding");
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
this._isInvisibilized=false;
this.isActive=true;
this.isFixed=false;
}
StageSplitPanelBinding.prototype.toString=function(){
return "[StageSplitPanelBinding]";
};
StageSplitPanelBinding.prototype.onBindingRegister=function(){
StageSplitPanelBinding.superclass.onBindingRegister.call(this);
StageBoxAbstraction.onBindingRegister.call(this);
this.addActionListener(DockBinding.ACTION_OPENED,this);
this.addActionListener(DockBinding.ACTION_EMPTIED,this);
this.addActionListener(StageSplitBoxBinding.ACTION_HIDE,this);
this.addActionListener(StageSplitBoxBinding.ACTION_SHOW,this);
this.addActionListener(StageSplitPanelBinding.ACTION_LAYOUTUPDATE,this);
};
StageSplitPanelBinding.prototype.handleAction=function(_f47){
StageSplitPanelBinding.superclass.handleAction.call(this,_f47);
StageBoxAbstraction.handleAction.call(this,_f47);
switch(_f47.type){
case DockBinding.ACTION_EMPTIED:
case StageSplitBoxBinding.ACTION_HIDE:
if(this.isMaximized==true){
this.normalize();
}
var dock=this.getContainedDock();
if(dock&&dock.type==DockBinding.TYPE_EDITORS){
this._invisibilize(true);
if(_f47.type==StageSplitBoxBinding.ACTION_HIDE){
_f47.consume();
}
}else{
this.hide();
if(this.isFixed==true){
this.setFix(false);
}
}
if(_f47.type==DockBinding.ACTION_EMPTIED){
var self=this;
setTimeout(function(){
self.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
},0);
}
break;
case DockBinding.ACTION_OPENED:
case StageSplitBoxBinding.ACTION_SHOW:
var dock=this.getContainedDock();
if(dock&&dock.type==DockBinding.TYPE_EDITORS){
this._invisibilize(false);
if(_f47.type==StageSplitBoxBinding.ACTION_SHOW){
_f47.consume();
}
}else{
this.show();
if(this.isFixed==true){
this.setFix(false);
}
}
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
var _f4a=_f47.target;
if(_f4a!=this&&_f4a.getContainedDock()){
if(this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_VERTICAL){
var _f4b=_f4a._containingSplitBoxBinding;
if(_f4b.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL){
var _f4c=_f4b.getChildBindingsByLocalName("splitpanel");
var _f4d=_f4c.getFirst();
var _f4e=_f4c.getLast();
if(this.isFixed==true){
if(!_f4d.isFixed||!_f4e.isFixed||(!_f4b.hasBothPanelsVisible()&&_f4a.isMinimizedForReal)){
this.setFix(false);
_f47.consume();
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
}
}else{
if(_f4b.hasBothPanelsFixed()||(!_f4b.hasBothPanelsVisible()&&_f4a.isMinimizedForReal)){
this.setFix(_f4a.getContainedDock().getHeight());
_f47.consume();
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
}
}
}
}else{
}
}
break;
}
};
StageSplitPanelBinding.prototype.handleMaximization=function(){
StageBoxAbstraction.handleMaximization.call(this);
var _f4f=this.getContainedDock();
if(_f4f){
if(this.isMaximizePrepared==true){
}else{
_f4f.interceptDisplayChange(false);
}
}
};
StageSplitPanelBinding.prototype.handleUnMaximization=function(){
StageBoxAbstraction.handleUnMaximization.call(this);
var _f50=this.getContainedDock();
if(_f50){
if(_f50.type==DockBinding.TYPE_EDITORS){
if(_f50.isEmpty){
this._invisibilize(true);
}
}
if(this.isMaximized==true){
this.normalize();
}else{
_f50.interceptDisplayChange(true);
}
}
};
StageSplitPanelBinding.prototype.maximize=function(){
if(this.isMinimized==true){
this.normalize(true);
}
StageSplitPanelBinding.superclass.maximize.call(this);
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
var _f51=this.getContainedDock();
if(_f51){
_f51.activate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_MAXIMIZED,_f51);
}
};
StageSplitPanelBinding.prototype.minimize=function(){
var _f52=this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL;
var _f53=this.getContainedDock();
if(_f53){
_f53.collapse(_f52);
if(!_f52){
this.setFix(_f53.getHeight());
}else{
this.setFix(_f53.getWidth());
}
}
if(this.isMaximized==true){
this.normalize(true);
}
StageSplitPanelBinding.superclass.minimize.call(this);
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
if(_f53&&_f53.isActive){
_f53.deActivate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_MINIMIZED,_f53);
}
};
StageSplitPanelBinding.prototype.normalize=function(_f54){
var _f55=this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL;
var _f56=this.getContainedDock();
if(_f56){
if(this.isMinimized==true){
_f56.unCollapse(_f55);
this.setFix(false);
}
}
StageSplitPanelBinding.superclass.normalize.call(this);
if(!_f54){
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
if(_f56){
_f56.activate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_NORMALIZED,_f56);
}
}
};
StageSplitPanelBinding.prototype.getContainedDock=function(){
return this.getChildBindingByLocalName("dock");
};
StageSplitPanelBinding.prototype.invisibilize=function(_f57){
var _f58=true;
var dock=this.getContainedDock();
if(dock!=null&&dock.type==DockBinding.TYPE_EDITORS){
if(dock.isEmpty==true){
_f58=false;
}
}
if(_f58==true){
this._invisibilize(_f57);
}
};
StageSplitPanelBinding.prototype._invisibilize=function(_f5a){
if(_f5a!=this._isInvisibilized){
if(_f5a){
this.bindingElement.style.visibility="hidden";
}else{
this.bindingElement.style.visibility="visible";
}
this._isInvisibilized=!this._isInvisibilized;
}
};
StageSplitterBinding.prototype=new SplitterBinding;
StageSplitterBinding.prototype.constructor=StageSplitterBinding;
StageSplitterBinding.superclass=SplitterBinding.prototype;
function StageSplitterBinding(){
this.logger=SystemLogger.getLogger("StageSplitterBinding");
this._wasHidden=null;
}
StageSplitterBinding.prototype.toString=function(){
return "[StageSplitterBinding]";
};
StageSplitterBinding.prototype.handleMaximization=function(){
this._wasHidden=!this.isVisible;
this.bindingElement.style.display="none";
};
StageSplitterBinding.prototype.handleUnMaximization=function(){
if(!this._wasHidden){
this.bindingElement.style.display="block";
this._wasHidden=null;
}
};
StageSplitterBinding.prototype.onDragStart=function(_f5b){
var _f5c=top.app.bindingMap.stagesplittercover;
var _f5d=this._containingSplitBoxBinding.getOrient();
switch(_f5d){
case SplitBoxBinding.ORIENT_HORIZONTAL:
_f5c.bindingElement.style.cursor="e-resize";
break;
case SplitBoxBinding.ORIENT_VERTICAL:
_f5c.bindingElement.style.cursor="n-resize";
break;
}
_f5c.show();
var body=top.app.bindingMap.stagesplitterbody;
body.setPosition(this.getPosition());
body.setDimension(this.getDimension());
body.setOrient(_f5d);
body.show();
this.isDragging=true;
};
StageSplitterBinding.prototype.onDrag=function(diff){
this._updateSplitterBodyPosition(this.getEvaluatedDiff(diff));
};
StageSplitterBinding.prototype.onDragStop=function(diff){
this._updateSplitterBodyPosition(this.getEvaluatedDiff(diff));
top.app.bindingMap.stagesplitterbody.hide();
top.app.bindingMap.stagesplittercover.hide();
this.isDragging=false;
this.offset=this._containingSplitBoxBinding.isHorizontalOrient()?diff.x:diff.y;
this.dispatchAction(SplitterBinding.ACTION_DRAGGED);
};
StageSplitterBinding.prototype._updateSplitterBodyPosition=function(diff){
var pos=this.getPosition();
pos.x+=diff.x;
pos.y+=diff.y;
app.bindingMap.stagesplitterbody.setPosition(pos);
};
StageSplitterBinding.prototype.getPosition=function(){
return DOMUtil.getUniversalPosition(this.bindingElement);
};
StageSplitterBinding.prototype.getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
StageSplitterBodyBinding.prototype=new Binding;
StageSplitterBodyBinding.prototype.constructor=StageSplitterBodyBinding;
StageSplitterBodyBinding.superclass=Binding.prototype;
function StageSplitterBodyBinding(){
this.logger=SystemLogger.getLogger("StageSplitterBodyBinding");
this._orient=null;
}
StageSplitterBodyBinding.prototype.toString=function(){
return "[StageSplitterBodyBinding]";
};
StageSplitterBodyBinding.prototype.setOrient=function(_f63){
this._orient=_f63;
this.attachClassName(_f63);
};
StageSplitterBodyBinding.prototype.setPosition=function(pos){
var _f65=true;
var _f66=true;
switch(this._orient){
case SplitBoxBinding.ORIENT_HORIZONTAL:
_f66=false;
break;
case SplitBoxBinding.ORIENT_VERTICAL:
_f65=false;
break;
}
if(_f65){
this.bindingElement.style.left=pos.x+"px";
}
if(_f66){
this.bindingElement.style.top=pos.y+"px";
}
};
StageSplitterBodyBinding.prototype.setDimension=function(dim){
this.bindingElement.style.width=dim.w+"px";
this.bindingElement.style.height=dim.h+"px";
};
StageSplitterBodyBinding.prototype.show=function(){
this.bindingElement.style.display="block";
};
StageSplitterBodyBinding.prototype.hide=function(){
this.bindingElement.style.display="none";
this.detachClassName(SplitBoxBinding.ORIENT_HORIZONTAL);
this.detachClassName(SplitBoxBinding.ORIENT_VERTICAL);
this._orient=null;
};
StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED="hidden stagebox stuff updated";
function StageBoxAbstraction(){
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
this.isHiddenForReal=null;
}
StageBoxAbstraction.onBindingRegister=function(){
this.addActionListener(ControlBoxBinding.ACTION_MAXIMIZE);
this.addActionListener(ControlBoxBinding.ACTION_MINIMIZE);
this.addActionListener(ControlBoxBinding.ACTION_NORMALIZE);
this.addActionListener(TabBoxBinding.ACTION_UPDATED);
};
StageBoxAbstraction.handleAction=function(_f68){
switch(_f68.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
this.isMaximizePrepared=true;
break;
case ControlBoxBinding.ACTION_MINIMIZE:
this.isMinimizedForReal=true;
break;
case ControlBoxBinding.ACTION_NORMALIZE:
this.isMaximizePrepared=false;
this.isMinimizedForReal=null;
break;
case TabBoxBinding.ACTION_UPDATED:
if(_f68.target instanceof DockBinding){
if(this.isHiddenForReal){
this.dispatchAction(StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED);
}else{
if(this.isMinimizedForReal){
this.normalize();
}
}
}
_f68.consume();
break;
}
};
StageBoxAbstraction.handleMaximization=function(){
if(this.isMaximizePrepared==true){
this.isMaximizedForReal=true;
this.isHiddenForReal=false;
this.isFlexible=false;
if(Client.isMozilla==true){
var _f69=this.bindingElement.style;
_f69.position="absolute";
_f69.width="100%";
_f69.height="100%";
_f69.top="0";
_f69.left="0";
}else{
this.attachClassName("maximized");
if(this instanceof StageSplitPanelBinding){
StageBoxAbstraction._emulateBasicCSS(this,true);
}
}
}else{
this.isMaximizedForReal=false;
this.isHiddenForReal=true;
if(this instanceof StageSplitPanelBinding){
this.invisibilize(true);
}
}
};
StageBoxAbstraction.handleUnMaximization=function(){
if(this.isMaximizedForReal==true){
this.isFlexible=true;
if(Client.isMozilla==true){
var _f6a=this.bindingElement.style;
_f6a.position="relative";
_f6a.width="auto";
_f6a.height="auto";
_f6a.top="auto";
_f6a.left="auto";
}else{
this.detachClassName("maximized");
if(this instanceof StageSplitPanelBinding){
StageBoxAbstraction._emulateBasicCSS(this,false);
}
}
}else{
if(this instanceof StageSplitPanelBinding){
this.invisibilize(false);
}
}
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isHiddenForReal=null;
};
StageBoxAbstraction._emulateBasicCSS=function(_f6b,_f6c){
var _f6d=_f6b.bindingElement.style;
var _f6e=_f6b.bindingElement.parentNode;
var box=_f6b._containingSplitBoxBinding;
if(Client.isExplorer==true){
if(_f6c){
_f6b._unmodifiedFlexMethod=_f6b.flex;
_f6b.flex=function(){
_f6d.width=_f6e.offsetWidth+"px";
_f6d.height=_f6e.offsetHeight+"px";
};
}else{
_f6d.width="100%";
_f6d.height="100%";
if(!box.isHorizontalOrient()){
setTimeout(function(){
_f6d.width="auto";
_f6d.height="auto";
box.reflex(true);
},0);
}
_f6b.flex=_f6b._unmodifiedFlexMethod;
_f6b._unmodifiedFlexMethod=null;
}
}
};
function StageBoxHandlerAbstraction(){
this.isSubPanelMaximized=false;
}
StageBoxHandlerAbstraction.onBindingRegister=function(){
this.addActionListener(ControlBoxBinding.ACTION_MAXIMIZE,this);
this.addActionListener(ControlBoxBinding.ACTION_NORMALIZE,this);
this.addActionListener(StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED,this);
this.addActionListener(StageSplitPanelBinding.ACTION_LAYOUTUPDATE,this);
};
StageBoxHandlerAbstraction.handleAction=function(_f70){
var _f71=_f70.target;
switch(_f70.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
case ControlBoxBinding.ACTION_NORMALIZE:
if(_f71 instanceof StageSplitPanelBinding){
StageBoxHandlerAbstraction.handleControlBoxAction.call(this,_f70);
_f70.consume();
}
break;
case StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED:
if(this.isSubPanelMaximized){
this.iterateContainedStageBoxBindings(StageCrawler.MODE_UNMAXIMIZE);
this.isSubPanelMaximized=false;
}
_f70.consume();
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
break;
}
};
StageBoxHandlerAbstraction.handleControlBoxAction=function(_f72){
var mode=null;
switch(_f72.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
if(!this.isSubPanelMaximized){
mode=StageCrawler.MODE_MAXIMIZE;
this.isSubPanelMaximized=true;
}
break;
case ControlBoxBinding.ACTION_NORMALIZE:
if(this.isSubPanelMaximized){
mode=StageCrawler.MODE_UNMAXIMIZE;
this.isSubPanelMaximized=false;
}
break;
}
if(mode!=null){
this.iterateContainedStageBoxBindings(mode);
}
};
StageMenuBarBinding.prototype=new MenuBarBinding;
StageMenuBarBinding.prototype.constructor=StageMenuBarBinding;
StageMenuBarBinding.superclass=MenuBarBinding.prototype;
function StageMenuBarBinding(){
this.logger=SystemLogger.getLogger("StageMenuBarBinding");
this._rootNode=null;
}
StageMenuBarBinding.prototype.toString=function(){
return "[StageMenuBarBinding]";
};
StageMenuBarBinding.prototype.onBindingAttach=function(){
StageMenuBarBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.addActionListener(MenuItemBinding.ACTION_COMMAND);
}else{
Binding.prototype.hide.call(this);
}
};
StageMenuBarBinding.prototype.handleAction=function(_f74){
StageMenuBarBinding.superclass.handleAction.call(this,_f74);
switch(_f74.type){
case MenuItemBinding.ACTION_COMMAND:
var _f75=_f74.target.associatedSystemAction;
if(Application.isLoggedIn){
if(!this._rootNode){
this._rootNode=System.getRootNode();
}
if(_f75){
SystemAction.invoke(_f75,this._rootNode);
}
}
_f74.consume();
break;
}
};
StageViewMenuItemBinding.prototype=new MenuItemBinding;
StageViewMenuItemBinding.prototype.constructor=StageViewMenuItemBinding;
StageViewMenuItemBinding.superclass=MenuItemBinding.prototype;
function StageViewMenuItemBinding(){
this.logger=SystemLogger.getLogger("StageViewMenuItemBinding");
this._handle=null;
}
StageViewMenuItemBinding.prototype.toString=function(){
return "[StageViewMenuItemBinding]";
};
StageViewMenuItemBinding.prototype.onBindingAttach=function(){
StageViewMenuItemBinding.superclass.onBindingAttach.call(this);
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.subscribe(BroadcastMessages.VIEW_OPENED);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
this.subscribe(BroadcastMessages.STAGE_INITIALIZED);
}
};
StageViewMenuItemBinding.prototype.buildDOMContent=function(){
StageViewMenuItemBinding.superclass.buildDOMContent.call(this);
var _f76=this.getProperty("handle");
if(_f76){
this._handle=_f76;
if(StageBinding.isViewOpen(_f76)){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.check(true);
}
}
this.oncommand=function(){
var self=this;
Application.lock(self);
setTimeout(function(){
StageBinding.handleViewPresentation(_f76);
Application.unlock(self);
},Client.hasTransitions?Animation.DEFAULT_TIME:0);
};
}else{
throw new Error("StageViewMenuItemBinding: missing handle");
}
};
StageViewMenuItemBinding.prototype.setHandle=function(_f78){
this.setProperty("handle",_f78);
};
StageViewMenuItemBinding.prototype.handleBroadcast=function(_f79,arg){
StageViewMenuItemBinding.superclass.handleBroadcast.call(this,_f79,arg);
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
switch(_f79){
case BroadcastMessages.STAGE_INITIALIZED:
if(this.isChecked){
this.fireCommand();
}
break;
case BroadcastMessages.VIEW_OPENED:
if(arg==this._handle){
this.check(true);
}
break;
case BroadcastMessages.VIEW_CLOSED:
if(arg==this._handle){
this.uncheck(true);
}
break;
}
}
};
StageViewMenuItemBinding.newInstance=function(_f7b){
var _f7c=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_f7b);
UserInterface.registerBinding(_f7c,StageViewMenuItemBinding);
return UserInterface.getBinding(_f7c);
};
StageStatusBarBinding.prototype=new ToolBarBinding;
StageStatusBarBinding.prototype.constructor=StageStatusBarBinding;
StageStatusBarBinding.superclass=ToolBarBinding.prototype;
function StageStatusBarBinding(){
this.logger=SystemLogger.getLogger("StageStatusBarBinding");
this._label=null;
}
StageStatusBarBinding.prototype.toString=function(){
return "[StageStatusBarBinding]";
};
StageStatusBarBinding.prototype.onBindingInitialize=function(){
this._label=this.bindingWindow.bindingMap.statusbarlabel;
StatusBar.initialize(this);
StageStatusBarBinding.superclass.onBindingInitialize.call(this);
};
StageStatusBarBinding.prototype.setLabel=function(_f7d){
this._label.setLabel(_f7d);
};
StageStatusBarBinding.prototype.setImage=function(_f7e){
this._label.setImage(_f7e);
};
StageStatusBarBinding.prototype.clear=function(){
this._label.setLabel(null);
this._label.setImage(false);
};
StageStatusBarBinding.prototype.startFadeOut=function(_f7f){
this.logger.debug("START FADEOUT");
};
ExplorerBinding.prototype=new FlexBoxBinding;
ExplorerBinding.prototype.constructor=ExplorerBinding;
ExplorerBinding.superclass=FlexBoxBinding.prototype;
ExplorerBinding.ACTION_INITIALIZED="explorer initialized";
ExplorerBinding.ACTION_DECK_LOADED="explorer deck loaded";
ExplorerBinding.PERSPECTIVE_CONTENT="Content";
ExplorerBinding.PERSPECTIVE_MEDIA="Media";
ExplorerBinding.PERSPECTIVE_DATA="Datas";
ExplorerBinding.PERSPECTIVE_DESIGN="Design";
ExplorerBinding.PERSPECTIVE_FUNCTIONS="Functions";
ExplorerBinding.PERSPECTIVE_USERS="Users";
ExplorerBinding.PERSPECTIVE_SYSTEM="System";
ExplorerBinding.bindingInstance=null;
ExplorerBinding.getFocusedTreeNodeBindings=function(){
var _f80=ExplorerBinding.bindingInstance.getSelectedDeckBinding();
var _f81=_f80.getAssociatedView();
var _f82=_f81.getContentWindow().bindingMap.tree;
var _f83=_f82.getFocusedTreeNodeBindings();
if(!_f83.hasEntries()&&StageBinding.treeSelector){
_f83=StageBinding.treeSelector.getFocusedTreeNodeBindings();
}
return _f83;
};
ExplorerBinding.saveFocusedNodes=function(){
var _f84=this.getFocusedTreeNodeBindings();
LocalStore.focuseNodes.clear();
_f84.each(function(_f85){
LocalStore.focuseNodes.add(_f85.node);
});
};
ExplorerBinding.restoreFocuseNodes=function(){
var _f86=LocalStore.focuseNodes.getEntityTokens();
var _f87=ExplorerBinding.bindingInstance.getSelectedDeckBinding();
var _f88=_f87.getAssociatedView();
var _f89=_f88.getContentWindow().bindingMap.tree;
_f86=new List(TreeService.GetCurrentLocaleEntityTokens(_f86.toArray()));
_f86.each(function(_f8a){
_f89._focusTreeNodeByEntityToken(_f8a);
});
LocalStore.focuseNodes.clear();
};
function ExplorerBinding(){
this.logger=SystemLogger.getLogger("ExplorerBinding");
this._decksBinding=null;
this._menuBinding=null;
this._splitterBinding=null;
this._dragStart=0;
this._dragSlot=0;
this._dragHeight=0;
return this;
}
ExplorerBinding.prototype.toString=function(){
return "[ExplorerBinding]";
};
ExplorerBinding.prototype.onBindingAttach=function(){
ExplorerBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(Binding.ACTION_DRAG);
this._decksBinding=this.addMember(this.getDescendantBindingByLocalName("explorerdecks"));
this._splitterBinding=this.addMember(this.getDescendantBindingByLocalName("explorersplitter"));
this._menuBinding=this.addMember(this.getDescendantBindingByLocalName("explorermenu"));
};
ExplorerBinding.prototype.onBindingInitialize=function(){
ExplorerBinding.bindingInstance=this;
ExplorerBinding.superclass.onBindingInitialize.call(this);
this.dispatchAction(ExplorerBinding.ACTION_INITIALIZED);
};
ExplorerBinding.prototype.handleAction=function(_f8b){
ExplorerBinding.superclass.handleAction.call(this,_f8b);
var _f8c=_f8b.target;
switch(_f8b.type){
case ExplorerMenuBinding.ACTION_SELECTIONCHANGED:
this._decksBinding.setSelectionByHandle(this._menuBinding.getSelectionHandle());
var tag=this._menuBinding.getSelectionTag();
EventBroadcaster.broadcast(BroadcastMessages.PERSPECTIVE_CHANGED,tag);
break;
case ViewBinding.ACTION_LOADED:
this.dispatchAction(ExplorerBinding.ACTION_DECK_LOADED);
_f8b.consume();
break;
case Binding.ACTION_DRAG:
if(_f8c instanceof ExplorerSplitterBinding){
_f8c.dragger.registerHandler(this);
}
_f8b.consume();
}
};
ExplorerBinding.prototype.setSelectionByHandle=function(_f8e){
this._menuBinding.setSelectionByHandle(_f8e);
};
ExplorerBinding.prototype.setSelectionDefault=function(){
this._menuBinding.setSelectionDefault();
};
ExplorerBinding.prototype.getSelectedDeckBinding=function(){
return this._decksBinding.getSelectedDeckBinding();
};
ExplorerBinding.prototype.mountDefinition=function(_f8f){
if(_f8f instanceof SystemViewDefinition){
this._decksBinding.mountDefinition(_f8f);
this._menuBinding.mountDefinition(_f8f);
}
};
ExplorerBinding.prototype.onDragStart=function(_f90){
var _f91=this._menuBinding.getDescendantBindingsByLocalName("explorertoolbarbutton");
if(_f91.hasEntries()){
var _f92=_f91.getFirst();
this._dragStart=_f92.boxObject.getLocalPosition().y;
this._dragSlot=0;
if(this._dragHeight==0){
this._dragHeight=_f92.boxObject.getDimension().h;
}
this.bindingWindow.bindingMap.explorercover.show();
}
};
ExplorerBinding.prototype.onDrag=function(diff){
var y=this._dragStart+diff.y;
if(y>this._dragStart+this._dragSlot+this._dragHeight){
if(this._menuBinding.showLess()){
this._decksBinding.expandBy(this._dragHeight);
this._dragSlot+=this._dragHeight;
}
}
if(y<this._dragStart+this._dragSlot){
if(this._menuBinding.showMore()){
this._decksBinding.expandBy(-this._dragHeight);
this._dragSlot-=this._dragHeight;
}
}
};
ExplorerBinding.prototype.onDragStop=function(diff){
this.bindingWindow.bindingMap.explorercover.hide();
};
ExplorerDecksBinding.prototype=new DecksBinding;
ExplorerDecksBinding.prototype.constructor=ExplorerDecksBinding;
ExplorerDecksBinding.superclass=DecksBinding.prototype;
ExplorerDecksBinding.NODENAME_DECK="explorerdeck";
function ExplorerDecksBinding(){
this.logger=SystemLogger.getLogger("ExplorerDecksBinding");
this._decks={};
return this;
}
ExplorerDecksBinding.prototype.onBindingAttach=function(){
ExplorerDecksBinding.superclass.onBindingAttach.call(this);
this.addActionListener(PageBinding.ACTION_ATTACHED);
};
ExplorerDecksBinding.prototype.toString=function(){
return "[ExplorerDecksBinding]";
};
ExplorerDecksBinding.prototype.mountDefinition=function(_f96){
if(_f96 instanceof SystemViewDefinition){
var _f97=ViewBinding.newInstance(this.bindingDocument);
_f97.setType(ViewBinding.TYPE_EXPLORERVIEW);
_f97.setDefinition(_f96);
var _f98=ExplorerDeckBinding.newInstance(this.bindingDocument);
_f98.setAssociatedView(_f97);
this._decks[_f96.handle]=_f98;
_f98.add(_f97);
this.add(_f98);
function attach(){
_f98.attach();
_f97.attach();
}
if(Client.isWebKit){
setTimeout(function(){
attach();
},0);
}else{
attach();
}
}
};
ExplorerDecksBinding.prototype.setSelectionByHandle=function(_f99){
var _f9a=this._decks[_f99];
this.select(_f9a);
};
DecksBinding.prototype.expandBy=function(_f9b){
var deck=this.getSelectedDeckBinding();
if(deck){
var _f9d=this.bindingElement.offsetHeight+_f9b;
var view=deck.getAssociatedView();
this.bindingElement.style.height=_f9d+"px";
this.reflex(true);
}
};
ExplorerDecksBinding.newInstance=function(_f9f){
var _fa0=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorerdecks",_f9f);
return UserInterface.registerBinding(_fa0,ExplorerDecksBinding);
};
ExplorerDeckBinding.prototype=new DeckBinding;
ExplorerDeckBinding.prototype.constructor=ExplorerDeckBinding;
ExplorerDeckBinding.superclass=DeckBinding.prototype;
ExplorerDeckBinding.NODENAME_DECKS="explorerdecks";
function ExplorerDeckBinding(){
this.logger=SystemLogger.getLogger("ExplorerDeckBinding");
this._entityToken=null;
this._isRefreshRequired=false;
this._viewBinding=null;
this._isExplorerDeckBindingInitialized=false;
return this;
}
ExplorerDeckBinding.prototype.toString=function(){
return "[ExplorerDeckBinding]";
};
ExplorerDeckBinding.prototype.onBindingRegister=function(){
ExplorerDeckBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
};
ExplorerDeckBinding.prototype.setAssociatedView=function(_fa1){
this._viewBinding=_fa1;
};
ExplorerDeckBinding.prototype.getAssociatedView=function(){
return this._viewBinding;
};
ExplorerDeckBinding.prototype.select=function(){
if(!this._isExplorerDeckBindingInitialized){
Application.lock(this);
var _fa2=StringBundle.getString("ui","Website.App.StatusBar.Loading");
var _fa3=this._viewBinding.getDefinition().label;
StatusBar.busy(_fa2,[_fa3]);
this.bindingWindow.bindingMap.explorerdeckscover.show();
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this._viewBinding.initialize();
}
if(this._isRefreshRequired==true){
this._refreshTree();
this._isRefreshRequired=false;
}else{
ExplorerDeckBinding.superclass.select.call(this);
this.dispatchAction(DockTabBinding.ACTION_UPDATE_VISUAL);
}
};
ExplorerDeckBinding.prototype.handleAction=function(_fa4){
ExplorerDeckBinding.superclass.handleAction.call(this,_fa4);
var _fa5=_fa4.target;
switch(_fa4.type){
case PageBinding.ACTION_INITIALIZED:
if(_fa5 instanceof SystemPageBinding){
this._isExplorerDeckBindingInitialized=true;
this._entityToken=_fa5.node.getEntityToken();
this.removeActionListener(PageBinding.ACTION_INITIALIZED);
this.bindingWindow.bindingMap.explorerdeckscover.hide();
this.dispatchAction(DockTabBinding.ACTION_UPDATE_VISUAL);
Application.unlock(this);
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
}
break;
}
};
ExplorerDeckBinding.prototype.handleBroadcast=function(_fa6,arg){
ExplorerDeckBinding.superclass.handleBroadcast.call(this,_fa6,arg);
switch(_fa6){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL:
if(this.isSelected==true){
this._refreshTree();
}else{
if(this._entityToken!=null){
this._isRefreshRequired=true;
}
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHED:
this.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED);
this.select();
break;
}
};
ExplorerDeckBinding.prototype._refreshTree=function(){
if(this._entityToken!=null){
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,this._entityToken);
}
};
ExplorerDeckBinding.prototype._collapseTree=function(){
alert("ExplorerDeckBinding: collapse tree!");
};
ExplorerDeckBinding.prototype.getLabel=function(){
var _fa8=null;
if(this._isExplorerDeckBindingInitialized){
_fa8=this._viewBinding.getDefinition().label;
}else{
_fa8=DockTabBinding.LABEL_TABLOADING;
}
return _fa8;
};
ExplorerDeckBinding.prototype.getImage=function(){
var _fa9=null;
if(this._isExplorerDeckBindingInitialized){
_fa9=this._viewBinding.getDefinition().image;
}else{
_fa9=DockTabBinding.IMG_TABLOADING;
}
return _fa9;
};
ExplorerDeckBinding.prototype.getToolTip=function(){
var _faa=null;
if(this._isExplorerDeckBindingInitialized){
_faa=this._viewBinding.getDefinition().toolTip;
}
return _faa;
};
ExplorerDeckBinding.newInstance=function(_fab){
var _fac=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorerdeck",_fab);
return UserInterface.registerBinding(_fac,ExplorerDeckBinding);
};
ExplorerSplitterBinding.prototype=new Binding;
ExplorerSplitterBinding.prototype.constructor=ExplorerSplitterBinding;
ExplorerSplitterBinding.superclass=Binding.prototype;
function ExplorerSplitterBinding(){
this.logger=SystemLogger.getLogger("ExplorerSplitterBinding");
this.isDraggable=true;
return this;
}
ExplorerSplitterBinding.prototype.toString=function(){
return "[ExplorerSplitterBinding]";
};
ExplorerMenuBinding.prototype=new Binding;
ExplorerMenuBinding.prototype.constructor=ExplorerMenuBinding;
ExplorerMenuBinding.superclass=Binding.prototype;
ExplorerMenuBinding.ACTION_SELECTIONCHANGED="explorermenu selectionchanged";
function ExplorerMenuBinding(){
this.logger=SystemLogger.getLogger("ExplorerMenuBinding");
this._maxButtons=new Map();
this._maxList=new List();
this._minButtons=new Map();
this._minList=new List();
this._index=-1;
this._maxGroup=null;
this._minGroup=null;
this._selectedHandle=null;
this._selectedTag=null;
}
ExplorerMenuBinding.prototype.toString=function(){
return "[ExplorerMenuBinding]";
};
ExplorerMenuBinding.prototype.onBindingRegister=function(){
ExplorerMenuBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RadioGroupBinding.ACTION_SELECTIONCHANGED,this);
};
ExplorerMenuBinding.prototype.onBindingAttach=function(){
ExplorerMenuBinding.superclass.onBindingAttach.call(this);
this.addMember(this.getChildBindingByLocalName("explorertoolbar"));
this.addMember(this.getChildBindingByLocalName("toolbar"));
};
ExplorerMenuBinding.prototype.onMemberInitialize=function(_fad){
switch(_fad.constructor){
case ExplorerToolBarBinding:
this._maxGroup=_fad.getToolBarGroupByIndex(0);
break;
case ToolBarBinding:
this._minGroup=_fad.getToolBarGroupByIndex(0);
break;
}
ExplorerMenuBinding.superclass.onMemberInitialize.call(this,_fad);
};
ExplorerMenuBinding.prototype.mountDefinition=function(_fae){
this._maxButtons.set(_fae.handle,this._mountMaxButton(_fae));
this._minButtons.set(_fae.handle,this._mountMinButton(_fae));
this._index++;
};
ExplorerMenuBinding.prototype._mountMaxButton=function(_faf){
var _fb0=ExplorerToolBarButtonBinding.newInstance(this.bindingDocument,ExplorerToolBarButtonBinding.TYPE_LARGE);
_fb0.setLabel(_faf.label);
_fb0.setToolTip(_faf.toolTip);
_fb0.handle=_faf.handle;
_fb0.node=_faf.node;
this._maxGroup.add(_fb0);
this._maxList.add(_fb0);
_fb0.attach();
if(Client.isPad){
_fb0.hide();
}
return _fb0;
};
ExplorerMenuBinding.prototype._mountMinButton=function(_fb1){
var _fb2=ExplorerToolBarButtonBinding.newInstance(this.bindingDocument,ExplorerToolBarButtonBinding.TYPE_NORMAL);
_fb2.setLabel(_fb1.label);
_fb2.setToolTip(_fb1.label);
_fb2.handle=_fb1.handle;
_fb2.node=_fb1.node;
this._minGroup.addFirst(_fb2);
this._minList.add(_fb2);
_fb2.attach();
if(!Client.isPad){
_fb2.hide();
}
return _fb2;
};
ExplorerMenuBinding.prototype.handleAction=function(_fb3){
ExplorerMenuBinding.superclass.handleAction.call(this,_fb3);
switch(_fb3.type){
case RadioGroupBinding.ACTION_SELECTIONCHANGED:
var _fb4=_fb3.target;
var _fb5=_fb4.getCheckedButtonBinding();
var _fb6=_fb5.handle;
switch(_fb4){
case this._maxGroup:
this._minGroup.setCheckedButtonBinding(this._minButtons.get(_fb6),true);
break;
case this._minGroup:
this._maxGroup.setCheckedButtonBinding(this._maxButtons.get(_fb6),true);
break;
}
this._selectedHandle=_fb6;
this._selectedTag=_fb5.node.getTag();
this.dispatchAction(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
_fb3.consume();
break;
}
};
ExplorerMenuBinding.prototype.setSelectionByHandle=function(_fb7){
var _fb8=this._maxButtons.get(_fb7);
if(_fb8){
_fb8.check();
}else{
this.setSelectionDefault();
}
};
ExplorerMenuBinding.prototype.getSelectionHandle=function(){
return this._selectedHandle;
};
ExplorerMenuBinding.prototype.getSelectionTag=function(){
return this._selectedTag;
};
ExplorerMenuBinding.prototype.setSelectionDefault=function(){
if(this._maxList.hasEntries()){
this._maxList.getFirst().check();
}
};
ExplorerMenuBinding.prototype.showMore=function(){
var _fb9=false;
var max=this._maxList.getLength()-1;
if(!this._maxList.get(max).isVisible){
this._index++;
this._maxList.get(this._index).show();
this._minList.get(this._index).hide();
_fb9=true;
}
return _fb9;
};
ExplorerMenuBinding.prototype.showLess=function(){
var _fbb=false;
if(this._maxList.get(0).isVisible){
this._maxList.get(this._index).hide();
this._minList.get(this._index).show();
this._index--;
_fbb=true;
}
return _fbb;
};
ExplorerToolBarBinding.prototype=new ToolBarBinding;
ExplorerToolBarBinding.prototype.constructor=ExplorerToolBarBinding;
ExplorerToolBarBinding.superclass=ToolBarBinding.prototype;
function ExplorerToolBarBinding(){
this.logger=SystemLogger.getLogger("ExplorerToolBarBinding");
this._hasDefaultContent=false;
}
ExplorerToolBarBinding.prototype.toString=function(){
return "[ExplorerToolBarBinding]";
};
ExplorerToolBarBinding.prototype.onBindingRegister=function(){
ExplorerToolBarBinding.superclass.onBindingRegister.call(this);
this.setImageSize(ToolBarBinding.IMAGESIZE_LARGE);
};
ExplorerToolBarBinding.newInstance=function(_fbc){
var _fbd=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorertoolbar",_fbc);
return UserInterface.registerBinding(_fbd,ExplorerToolBarBinding);
};
ExplorerToolBarButtonBinding.prototype=new ToolBarButtonBinding;
ExplorerToolBarButtonBinding.prototype.constructor=ExplorerToolBarButtonBinding;
ExplorerToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
ExplorerToolBarButtonBinding.TYPE_NORMAL="normal";
ExplorerToolBarButtonBinding.TYPE_LARGE="large";
function ExplorerToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ExplorerToolBarButtonBinding");
this.isRadioButton=true;
this.explorerToolBarButtonType=null;
this.node=null;
}
ExplorerToolBarButtonBinding.prototype.toString=function(){
return "[ExplorerToolBarButtonBinding]";
};
ExplorerToolBarButtonBinding.prototype.onBindingAttach=function(){
var _fbe=this.explorerToolBarButtonType==ExplorerToolBarButtonBinding.TYPE_LARGE;
var _fbf=_fbe?ToolBarBinding.IMAGESIZE_LARGE:ToolBarBinding.IMAGESIZE_NORMAL;
this.imageProfile=this.node.getImageProfile(_fbf);
ExplorerToolBarButtonBinding.superclass.onBindingAttach.call(this);
};
ExplorerToolBarButtonBinding.newInstance=function(_fc0,_fc1){
var _fc2=(_fc1==ExplorerToolBarButtonBinding.TYPE_LARGE?"ui:explorertoolbarbutton":"ui:toolbarbutton");
var _fc3=DOMUtil.createElementNS(Constants.NS_UI,_fc2,_fc0);
var _fc4=UserInterface.registerBinding(_fc3,ExplorerToolBarButtonBinding);
_fc4.explorerToolBarButtonType=_fc1;
return _fc4;
};
EditorBinding.prototype=new WindowBinding;
EditorBinding.prototype.constructor=EditorBinding;
EditorBinding.superclass=WindowBinding.prototype;
EditorBinding.isActive=false;
EditorBinding.ACTION_ATTACHED=null;
EditorBinding.URL_DIALOG_MOZ_CONFIGURE="${root}/content/dialogs/wysiwygeditor/mozsecuritynote/mozsecuritynote.aspx";
EditorBinding.URL_UPDATERENDERING="${root}/content/dialogs/functions/editFunctionCall.aspx?type={0}";
EditorBinding.ABSURD_NUMBER=-999999999;
EditorBinding.LINE_BREAK_ENTITY_HACK="C1.LINE.BREAK.ENTITY.HACK";
EditorBinding.invokeFunctionEditorDialog=function(_fc5,_fc6,type){
type=type?type:"";
var _fc8=FunctionService.GetCustomEditorSettingsByMarkup(_fc5);
var def=ViewDefinitions["Composite.Management.PostBackDialog"];
if(!_fc8){
def.width=500;
def.height=520;
}else{
var dim=top.WindowManager.getWindowDimensions();
def.width=_fc8.Width?(_fc8.Width>dim.w?dim.w:_fc8.Width):undefined;
def.height=_fc8.Height?(_fc8.Height>dim.h?dim.h:_fc8.Height):undefined;
if(_fc8.Url){
_fc8.Url=_fc8.Url.indexOf("?")>-1?_fc8.Url+"&consoleId="+Application.CONSOLE_ID:_fc8.Url+"?consoleId="+Application.CONSOLE_ID;
}
}
def.label="${string:Composite.Web.FormControl.FunctionCallsDesigner:DialogTitle}";
def.image="${icon:parameter_overloaded}";
def.handler=_fc6;
def.argument={url:_fc8?_fc8.Url:EditorBinding.URL_UPDATERENDERING.replace("{0}",type),list:new List([{name:"functionmarkup",value:_fc5}])};
StageBinding.presentViewDefinition(def);
};
EditorBinding._components=new Map();
EditorBinding._editors=new Map();
EditorBinding.registerComponent=function(_fcb,_fcc){
var _fcd=EditorBinding._components;
var _fce=EditorBinding._editors;
var key=_fcc.key;
var _fd0=Interfaces.isImplemented(IWysiwygEditorComponent,_fcb);
if(!_fd0){
_fd0=Interfaces.isImplemented(ISourceEditorComponent,_fcb);
}
if(_fd0){
if(_fce.has(key)){
_fce.get(key).initializeEditorComponent(_fcb);
}else{
if(!_fcd.has(key)){
_fcd.set(key,new List());
}
_fcd.get(key).add(_fcb);
}
}else{
throw "Editor component interface not implemented: "+_fcb;
}
};
EditorBinding.claimComponents=function(_fd1,_fd2){
var _fd3=EditorBinding._components;
var _fd4=EditorBinding._editors;
var key=_fd2.key;
_fd4.set(key,_fd1);
var list=null;
if(_fd3.has(key)){
list=_fd3.get(key).copy();
_fd3.del(key);
}
return list;
};
function EditorBinding(){
this.logger=SystemLogger.getLogger("EditorBinding");
this.action_initialized=null;
this.url_default=null;
this._popupBinding=null;
this._startContent=null;
this._explorerBookmark=null;
this.isDirty=false;
this.isDialogMode=false;
this.isFocusable=true;
this.isFocused=false;
this._isActivated=false;
this._Binding=null;
this._url=null;
this.isBlockingActions=true;
this._isFinalized=false;
this._bookmark=null;
this._checksum=null;
this.crawlerFilters=new List([FocusCrawler.ID,FitnessCrawler.ID]);
}
EditorBinding.prototype.toString=function(){
return "[EditorBinding]";
};
EditorBinding.prototype.onBindingRegister=function(){
EditorBinding.superclass.onBindingRegister.call(this);
this._url=this.url_default;
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
var name=this.getProperty("name");
if(name==null||name==""){
name="generated"+KeyMaster.getUniqueKey();
}
this._registerWithDataManager(name);
};
EditorBinding.prototype.onBindingAttach=function(){
Application.lock(this);
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
this._setup();
this.setURL(this._url);
this.addActionListener(Binding.ACTION_DIRTY);
EditorBinding.superclass.onBindingAttach.call(this);
};
EditorBinding.prototype._setup=function(){
var _fd8=this.getProperty("value");
if(_fd8!=null){
_fd8=decodeURIComponent(_fd8);
this._startContent=_fd8;
}
};
EditorBinding.prototype.onBindingDispose=function(){
EditorBinding.superclass.onBindingDispose.call(this);
var name=this.getProperty("name");
if(name!=null){
var _fda=this.bindingWindow.DataManager;
_fda.unRegisterDataBinding(name);
}
};
EditorBinding.prototype._initialize=function(){
this.subscribe(BroadcastMessages.STAGEDIALOG_OPENED);
this.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP);
if(this._startContent==null){
this._startContent=new String("");
}
this.addEditorEvents();
var self=this;
setTimeout(function(){
self._finalize();
},0);
};
EditorBinding.prototype._finalize=function(){
this.resetUndoRedo();
this._popupBinding=this.getEditorPopupBinding();
Application.unlock(this);
this._isFinalized=true;
this.dispatchAction(this.action_initialized);
};
EditorBinding.prototype.initializeEditorComponents=function(_fdc){
var _fdd=EditorBinding.claimComponents(this,_fdc);
if(_fdd!=null){
while(_fdd.hasNext()){
this.initializeEditorComponent(_fdd.getNext());
}
}
};
EditorBinding.prototype._registerWithDataManager=function(name){
if(name&&name!=""){
var _fdf=this.bindingWindow.DataManager;
if(_fdf.getDataBinding(name)){
_fdf.unRegisterDataBinding(name);
}
_fdf.registerDataBinding(name,this);
}
};
EditorBinding.prototype.addEditorEvents=function(){
var _fe0=this.getEditorDocument();
if(_fe0!=null){
Application.framework(_fe0);
DOMEvents.addEventListener(_fe0,DOMEvents.CONTEXTMENU,this);
DOMEvents.addEventListener(_fe0,DOMEvents.KEYPRESS,this);
DOMEvents.addEventListener(_fe0,DOMEvents.MOUSEDOWN,this);
DOMEvents.addEventListener(_fe0,DOMEvents.MOUSEMOVE,this);
}
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEDOWN,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
};
EditorBinding.prototype.checkForDirty=function(_fe2){
if(!this.isDirty||!this.bindingWindow.DataManager.isDirty){
if(_fe2==true){
this.bindingWindow.DataManager.dirty(this);
}else{
var self=this;
setTimeout(function(){
self._checkForRealDirty();
},0);
}
}
};
EditorBinding.prototype._checkForRealDirty=function(){
var _fe4=this.getCheckSum();
if(_fe4!=this._checksum){
this.bindingWindow.DataManager.dirty(this);
this._checksum=_fe4;
}
};
EditorBinding.prototype.getCheckSum=function(){
var _fe5=null;
if(Binding.exists(this._pageBinding)){
_fe5=this._pageBinding.getCheckSum(this._checksum);
}
return _fe5;
};
EditorBinding.prototype.handleEvent=function(e){
EditorBinding.superclass.handleEvent.call(this,e);
var _fe7=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.CONTEXTMENU:
if(Client.isFirefox&&e.ctrlKey){
}else{
DOMEvents.preventDefault(e);
this._popupBinding.editorBinding=this;
this.handleContextMenu(e);
}
break;
case DOMEvents.KEYPRESS:
this.checkForDirty();
if(!this._isActivated||this.isFocusable&&!this.isFocused){
this._activateEditor(true);
}
break;
case DOMEvents.MOUSEDOWN:
if(_fe7.ownerDocument==this.getEditorDocument()){
if(!this._isActivated||this.isFocusable&&!this.isFocused){
this._activateEditor(true);
}
}
break;
case DOMEvents.MOUSEMOVE:
if(Client.isExplorer||Client.isExplorer11){
if(Application.isBlurred){
if(!this._isActivated){
this.getContentWindow().focus();
}
}
}
break;
}
};
EditorBinding.prototype.handleContextMenu=function(e){
this.createBookmark();
this._popupBinding.snapToMouse(e);
};
EditorBinding.prototype.handleBroadcast=function(_fe9,arg){
EditorBinding.superclass.handleBroadcast.call(this,_fe9,arg);
var _feb=null;
switch(_fe9){
case BroadcastMessages.STAGEDIALOG_OPENED:
if(this._isActivated){
this._activateEditor(false);
}
break;
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
if(!this.isDialogMode){
try{
var _fec=true;
if(arg instanceof Binding){
if(Interfaces.isImplemented(IEditorControlBinding,arg)==true){
if(arg.isEditorControlBinding){
_fec=false;
}
}
}else{
_feb=DOMEvents.getTarget(arg);
if(_feb&&_feb.ownerDocument==this.getEditorDocument()){
_fec=false;
}
}
if(_fec){
if(this._isActivated){
this._activateEditor(false);
}
}
}
catch(exception){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP);
throw exception;
}
}
break;
}
};
EditorBinding.prototype._activateEditor=function(_fed){
if(_fed!=this._isActivated){
this._isActivated=_fed;
EditorBinding.isActive=_fed;
var _fee=this.getEditorWindow().standardEventHandler;
var _fef=this.getContentWindow().bindingMap.broadcasterIsActive;
if(_fef!=null){
if(_fed){
if(this.hasBookmark()){
this.deleteBookmark();
}
_fef.enable();
if(Client.isExplorer){
this._sanitizeExplorer();
}
this.focus();
_fee.enableNativeKeys(true);
}else{
_fef.disable();
_fee.disableNativeKeys();
this.blur();
}
}else{
throw "Required broadcaster not found";
}
}
};
EditorBinding.prototype._sanitizeExplorer=function(){
if(Client.isExplorer){
var _ff0=this.getEditorDocument().selection.createRange();
_ff0.select();
}
};
EditorBinding.prototype._sanitizeMozilla=function(){
};
EditorBinding.prototype.hasSelection=function(){
var _ff1=false;
try{
var _ff2=this.getEditorWindow().getSelection();
if(_ff2!=null){
_ff1=_ff2.toString().length>0;
if(!_ff1){
var _ff3=_ff2.getRangeAt(0);
var frag=_ff3.cloneContents();
var _ff5=this.getEditorDocument().createElement("element");
while(frag.hasChildNodes()){
_ff5.appendChild(frag.firstChild);
}
var img=_ff5.getElementsByTagName("img").item(0);
if(img!=null){
if(!VisualEditorBinding.isReservedElement(img)){
_ff1=true;
}
}
}
}
}
catch(exception){
}
return _ff1;
};
EditorBinding.prototype.isCommandEnabled=function(_ff7){
var _ff8=true;
switch(_ff7){
case "Cut":
case "Copy":
case "Paste":
_ff8=this.getEditorDocument().queryCommandEnabled(_ff7);
break;
}
return _ff8;
};
EditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _ffc=false;
this.restoreBookmark();
switch(cmd){
case "Cut":
case "Copy":
case "Paste":
var _ffd=null;
if(cmd=="Paste"){
_ffd=null;
}else{
_ffd=this.hasSelection();
}
try{
this.getEditorDocument().execCommand(cmd,gui,_ffd);
}
catch(mozillaSecurityException){
if(Client.isMozilla==true){
Dialog.invokeModal(EditorBinding.URL_DIALOG_MOZ_CONFIGURE);
}else{
throw "Clipboard operation malfunction. Contact your developer.";
}
}
finally{
_ffc=true;
}
break;
}
return _ffc;
};
EditorBinding.prototype.getButtonForCommand=function(cmd){
var _fff=this.getContentWindow().bindingMap.toolbar;
var _1000=_fff.getButtonForCommand(cmd);
if(!_1000){
throw "No button for command "+cmd;
}
return _1000;
};
EditorBinding.prototype.getName=function(){
return this.getProperty("name");
};
EditorBinding.prototype.dirty=DataBinding.prototype.dirty;
EditorBinding.prototype.clean=function(){
this.isDirty=false;
this._checksum=this.getCheckSum();
};
EditorBinding.prototype.enableDialogMode=function(){
if(!this.isDialogMode){
this.isDialogMode=true;
if(!this.hasBookmark()){
this.createBookmark();
}
var self=this;
setTimeout(function(){
self._activateEditor(false);
},0);
}
};
EditorBinding.prototype.disableDialogMode=function(){
if(this.isDialogMode){
if(this.hasBookmark()){
this.restoreBookmark();
}
var self=this;
setTimeout(function(){
self.isDialogMode=false;
self.blurEditor();
},100);
}
};
EditorBinding.prototype.blurEditor=function(){
var input=this.getContentDocument().getElementById("focusableinput");
if(input!=null){
input.style.display="block";
FocusBinding.focusElement(input);
input.style.display="none";
}else{
throw "Required element not found: focusableinput";
}
};
EditorBinding.prototype.handleAction=function(_1004){
EditorBinding.superclass.handleAction.call(this,_1004);
var _1005=_1004.target;
var self=this;
var _1007=this.shadowTree.iframe;
switch(_1004.type){
case Binding.ACTION_DIRTY:
if(_1004.target!=this){
this.checkForDirty();
}
break;
}
};
EditorBinding.prototype._onPageInitialize=function(_1008){
if(this._pageBinding==null){
this.reflex();
if(this._coverBinding!=null&&this._coverBinding.isVisible){
this._coverBinding.hide();
}
}
EditorBinding.superclass._onPageInitialize.call(this,_1008);
};
EditorBinding.prototype.handleElement=function(_1009){
return true;
};
EditorBinding.prototype.updateElement=function(_100a){
return true;
};
EditorBinding.prototype.focus=DataBinding.prototype.focus;
EditorBinding.prototype.blur=DataBinding.prototype.blur;
EditorBinding.prototype.manifest=function(){
this.shadowTree.dotnetinput.value=encodeURIComponent(this.getValue());
};
EditorBinding.prototype.getEditorWindow=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getEditorDocument=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getEditorPopupBinding=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.createBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.restoreBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.hasBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.deleteBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.resetUndoRedo=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.validate=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getValue=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getResult=Binding.ABSTRACT_METHOD;
EditorPopupBinding.prototype=new PopupBinding;
EditorPopupBinding.prototype.constructor=EditorPopupBinding;
EditorPopupBinding.superclass=PopupBinding.prototype;
EditorPopupBinding.CONTENT_TEMPLATE=null;
function EditorPopupBinding(){
this.logger=SystemLogger.getLogger("EditorPopupBinding");
this._isEditorPopupBindingInitialized=false;
this.editorBinding=null;
}
EditorPopupBinding.prototype.toString=function(){
return "[EditorPopupBinding]";
};
EditorPopupBinding.prototype.show=function(){
if(!this._isEditorPopupBindingInitialized){
var self=this;
Application.lock(this);
setTimeout(function(){
self._initialize();
Application.unlock(self);
},0);
}else{
EditorPopupBinding.superclass.show.call(this);
}
};
EditorPopupBinding.prototype._initialize=function(){
if(!this._isEditorPopupBindingInitialized){
this.subTreeFromString(Templates.getTemplateElementText(this.constructor.CONTENT_TEMPLATE));
this._bodyBinding=this.getChildBindingByLocalName("menubody");
this.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
this._indexMenuContent();
this._isEditorPopupBindingInitialized=true;
this._onInitialize();
}
};
EditorPopupBinding.prototype._onInitialize=function(){
this._configure();
this.show();
};
EditorPopupBinding.prototype.configure=function(){
if(this._isEditorPopupBindingInitialized){
this._configure();
}
};
EditorPopupBinding.prototype._configure=Binding.ABSTRACT_METHOD;
EditorPopupBinding.prototype._showMenuGroups=function(rel){
var _100d=this._menuGroups[rel];
if(_100d instanceof List){
_100d.each(function(group){
group.show();
});
}
};
EditorPopupBinding.prototype._hideMenuGroups=function(rel){
var _1010=this._menuGroups[rel];
if(_1010 instanceof List){
_1010.each(function(group){
group.hide();
});
}
};
EditorPopupBinding.prototype.handleAction=function(_1012){
EditorPopupBinding.superclass.handleAction.call(this,_1012);
var _1013=_1012.target;
if(_1012.type==MenuItemBinding.ACTION_COMMAND){
this.hide();
var cmd=_1013.getProperty("cmd");
var gui=_1013.getProperty("gui");
var val=_1013.getProperty("val");
this.handleCommand(cmd,gui,val);
}
};
EditorPopupBinding.prototype.handleCommand=Binding.ABSTRACT_METHOD;
EditorClickButtonBinding.prototype=new ClickButtonBinding;
EditorClickButtonBinding.prototype.constructor=EditorClickButtonBinding;
EditorClickButtonBinding.superclass=ClickButtonBinding.prototype;
function EditorClickButtonBinding(){
this.logger=SystemLogger.getLogger("EditorClickButtonBinding");
this._editorBinding=null;
this.isEditorControlBinding=true;
this.isEditorSimpleControl=true;
this.cmd=null;
this.val=null;
this.gui=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this._codePressFrame=null;
this._codePressEngine=null;
}
EditorClickButtonBinding.prototype.toString=function(){
return "[EditorClickButtonBinding]";
};
EditorClickButtonBinding.prototype.onBindingAttach=function(){
EditorClickButtonBinding.superclass.onBindingAttach.call(this);
this._setupEditorButton();
};
EditorClickButtonBinding.prototype._setupEditorButton=function(){
this.cmd=this.getProperty("cmd");
this.val=this.getProperty("val");
this.gui=this.getProperty("gui");
if(this.getProperty("editorcontrol")==false){
this.isEditorControlBinding=false;
}
var _1017=this.bindingWindow.bindingMap.tinywindow;
var _1018=this.bindingWindow.bindingMap.codepresswindow;
if(_1017){
EditorBinding.registerComponent(this,_1017);
}else{
if(_1018){
EditorBinding.registerComponent(this,_1018);
}
}
};
EditorClickButtonBinding.prototype.buildDOMContent=function(){
EditorClickButtonBinding.superclass.buildDOMContent.call(this);
this._buildDesignModeSanitizer();
};
EditorClickButtonBinding.prototype.initializeComponent=function(_1019,_101a,_101b,theme){
this._editorBinding=_1019;
this._tinyEngine=_101a;
this._tinyInstance=_101b;
this._tinyTheme=theme;
this._setupEditorBookmarking();
};
EditorClickButtonBinding.prototype.initializeSourceEditorComponent=function(_101d,frame,_101f){
this._editorBinding=_101d;
this._codePressFrame=frame;
this._codePressEngine=_101f;
};
EditorClickButtonBinding.prototype._buildDesignModeSanitizer=function(){
if(Client.isExplorer||Client.isExplorer11){
var img=this.bindingDocument.createElement("img");
img.className="designmodesanitizer";
img.src=Resolver.resolve("${root}/images/blank.png");
img.ondragstart=function(e){
e.preventDefault();
};
this.shadowTree.designmodesanitizer=img;
this.bindingElement.appendChild(img);
}
};
EditorClickButtonBinding.prototype._setupEditorBookmarking=function(){
var _1022=this._editorBinding;
if(_1022!=null){
var self=this;
var _1024={handleEvent:function(e){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!_1022.hasBookmark()){
_1022.createBookmark();
}
break;
case DOMEvents.MOUSEUP:
if(self.isEditorSimpleControl){
if(self.popupBinding==null){
if(_1022.hasBookmark()){
_1022.restoreBookmark();
}
}
}
break;
}
}};
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEDOWN,_1024);
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEUP,_1024);
}
};
EditorClickButtonBinding.newInstance=function(_1026){
var _1027=DOMUtil.createElementNS(Constants.NS_UI,"ui:clickbutton",_1026);
return UserInterface.registerBinding(_1027,EditorClickButtonBinding);
};
EditorToolBarButtonBinding.prototype=new ToolBarButtonBinding;
EditorToolBarButtonBinding.prototype.constructor=EditorToolBarButtonBinding;
EditorToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
function EditorToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("EditorToolBarButtonBinding");
this._editorBinding=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.isEditorSimpleControl=true;
this.isEditorControlBinding=true;
this.cmd=null;
this.val=null;
this.gui=null;
}
EditorToolBarButtonBinding.prototype.toString=function(){
return "[EditorToolBarButtonBinding]";
};
EditorToolBarButtonBinding.prototype.onBindingAttach=function(){
EditorToolBarButtonBinding.superclass.onBindingAttach.call(this);
this._setupEditorButton();
};
EditorToolBarButtonBinding.prototype._setupEditorButton=EditorClickButtonBinding.prototype._setupEditorButton;
EditorToolBarButtonBinding.prototype.buildDOMContent=function(){
EditorToolBarButtonBinding.superclass.buildDOMContent.call(this);
this._buildDesignModeSanitizer();
};
EditorToolBarButtonBinding.prototype.initializeComponent=EditorClickButtonBinding.prototype.initializeComponent;
EditorToolBarButtonBinding.prototype.initializeSourceEditorComponent=EditorClickButtonBinding.prototype.initializeSourceEditorComponent;
EditorToolBarButtonBinding.prototype._buildDesignModeSanitizer=EditorClickButtonBinding.prototype._buildDesignModeSanitizer;
EditorToolBarButtonBinding.prototype._setupEditorBookmarking=EditorClickButtonBinding.prototype._setupEditorBookmarking;
EditorToolBarButtonBinding.newInstance=function(_1028){
var _1029=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_1028);
return UserInterface.registerBinding(_1029,EditorToolBarButtonBinding);
};
EditorSelectorBinding.prototype=new SelectorBinding;
EditorSelectorBinding.prototype.constructor=EditorSelectorBinding;
EditorSelectorBinding.superclass=SelectorBinding.prototype;
function EditorSelectorBinding(){
this.logger=SystemLogger.getLogger("EditorSelectorBinding");
this._editorBinding=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.BUTTON_IMPLEMENTATION=EditorClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=EditorMenuItemBinding;
this.isFocusable=false;
this.isEditorControlBinding=true;
this.isSearchSelectionEnabled=false;
}
EditorSelectorBinding.prototype.toString=function(){
return "[EditorSelectorBinding]";
};
EditorSelectorBinding.prototype.onBindingAttach=function(){
if(this.getProperty("editorcontrol")==false){
this.isEditorControlBinding=false;
this.BUTTON_IMPLEMENTATION=ClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=MenuItemBinding;
}
var _102a=this.bindingWindow.bindingMap.tinywindow;
EditorBinding.registerComponent(this,_102a);
if(Client.isPad){
this.setProperty("width",140);
}
EditorSelectorBinding.superclass.onBindingAttach.call(this);
};
EditorSelectorBinding.prototype.buildButton=function(){
EditorSelectorBinding.superclass.buildButton.call(this);
this._buttonBinding.isEditorSimpleControl=false;
if(this.isEditorControlBinding==false){
this._buttonBinding.isEditorControlBinding=false;
}
};
EditorSelectorBinding.prototype.initializeComponent=function(_102b,_102c,_102d,theme){
this._editorBinding=_102b;
this._tinyEngine=_102c;
this._tinyInstance=_102d;
this._tinyTheme=theme;
};
EditorSelectorBinding.prototype.handleAction=function(_102f){
EditorSelectorBinding.superclass.handleAction.call(this,_102f);
switch(_102f.type){
case MenuItemBinding.ACTION_COMMAND:
if(this._editorBinding.hasBookmark()){
var self=this;
setTimeout(function(){
if(!self._editorBinding.isDialogMode){
self._editorBinding.restoreBookmark();
self._tinyInstance.focus();
}
},0);
}
break;
}
};
EditorSelectorBinding.prototype._grabKeyboard=function(){
};
EditorSelectorBinding.prototype._releaseKeyboard=function(){
};
EditorMenuItemBinding.prototype=new MenuItemBinding;
EditorMenuItemBinding.prototype.constructor=EditorMenuItemBinding;
EditorMenuItemBinding.superclass=MenuItemBinding.prototype;
function EditorMenuItemBinding(){
this.logger=SystemLogger.getLogger("EditorMenuItemBinding");
this.isEditorControlBinding=true;
}
EditorMenuItemBinding.prototype.toString=function(){
return "[EditorMenuItemBinding]";
};
EditorMenuItemBinding.prototype.buildDOMContent=function(){
EditorMenuItemBinding.superclass.buildDOMContent.call(this);
if(Client.isExplorer||Client.isExplorer11){
this._buildDesignModeSanitizer();
}
};
EditorMenuItemBinding.prototype._buildDesignModeSanitizer=function(){
if(Client.isExplorer||Client.isExplorer11){
var img=this.bindingDocument.createElement("img");
img.className="designmodesanitizer";
img.src=Resolver.resolve("${root}/images/blank.png");
img.ondragstart=function(e){
e.preventDefault();
};
this.shadowTree.designmodesanitizer=img;
this.bindingElement.appendChild(img);
}
};
EditorMenuItemBinding.newInstance=function(_1033){
var _1034=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_1033);
return UserInterface.registerBinding(_1034,EditorMenuItemBinding);
};
VisualEditorBinding.prototype=new EditorBinding;
VisualEditorBinding.prototype.constructor=VisualEditorBinding;
VisualEditorBinding.superclass=EditorBinding.prototype;
VisualEditorBinding.FUNCTION_CLASSNAME="compositeFunctionWysiwygRepresentation";
VisualEditorBinding.FIELD_CLASSNAME="compositeFieldReferenceWysiwygRepresentation";
VisualEditorBinding.HTML_CLASSNAME="compositeHtmlWysiwygRepresentation";
VisualEditorBinding.ACTION_INITIALIZED="visualeditor initialized";
VisualEditorBinding.DEFAULT_CONTENT="<p></p>";
VisualEditorBinding.URL_DIALOG_CONTENTERROR="${root}/content/dialogs/wysiwygeditor/errors/contenterror.aspx";
VisualEditorBinding.XHTML="<html xmlns=\"http://www.w3.org/1999/xhtml\">\n\t<head></head>\n\t<body>\n${body}\n\t</body>\n</html>";
VisualEditorBinding.getTinyLessClassName=function(_1035){
var i=0,_1037,_1038=[],split=_1035.split(" ");
while((_1037=split[i++])!=null){
if(_1037.length>=3&&_1037.substring(0,3)=="mce"){
continue;
}else{
if(_1037.length>=14&&_1037.substring(0,14)=="compositemedia"){
continue;
}
}
_1038.push(_1037);
}
return _1038.join(" ");
};
VisualEditorBinding.getStructuredContent=function(_103a){
var _103b=null;
WebServiceProxy.isFaultHandler=false;
var soap=XhtmlTransformationsService.TinyContentToStructuredContent(_103a);
if(soap instanceof SOAPFault){
}else{
_103b=soap.XhtmlFragment;
if(!_103b){
_103b="";
}
}
WebServiceProxy.isFaultHandler=true;
return _103b;
};
VisualEditorBinding.getTinyContent=function(_103d,_103e){
var _103f=null;
if(_103d==null||_103d==""){
_103d=VisualEditorBinding.DEFAULT_CONTENT;
}
WebServiceProxy.isFaultHandler=false;
var soap=_103e.getSoapTinyContent(_103d);
if(soap instanceof SOAPFault){
var _1041=soap;
var _1042={handleDialogResponse:function(){
_103e.dispatchAction(Binding.ACTION_VALID);
}};
Dialog.invokeModal(VisualEditorBinding.URL_DIALOG_CONTENTERROR,_1042,_1041);
}else{
_103f=soap.XhtmlFragment;
if(_103f==null){
_103f=new String("");
}
_103f=_103f.replace(/\s+<li>/g,"<li>");
}
WebServiceProxy.isFaultHandler=true;
return _103f;
};
VisualEditorBinding.isImage=function(_1043){
return _1043&&_1043.nodeName=="IMG";
};
VisualEditorBinding.isImageElement=function(_1044){
return VisualEditorBinding.isImage(_1044)&&!VisualEditorBinding.isReservedElement(_1044);
};
VisualEditorBinding.isReservedElement=function(_1045){
if(VisualEditorBinding.isFunctionElement(_1045)){
return true;
}
if(VisualEditorBinding.isFieldElement(_1045)){
return true;
}
if(VisualEditorBinding.isHtmlElement(_1045)){
return true;
}
return false;
};
VisualEditorBinding.isFunctionElement=function(_1046){
return VisualEditorBinding.isImage(_1046)&&CSSUtil.hasClassName(_1046,VisualEditorBinding.FUNCTION_CLASSNAME);
};
VisualEditorBinding.isFieldElement=function(_1047){
return VisualEditorBinding.isImage(_1047)&&CSSUtil.hasClassName(_1047,VisualEditorBinding.FIELD_CLASSNAME);
};
VisualEditorBinding.isHtmlElement=function(_1048){
return VisualEditorBinding.isImage(_1048)&&CSSUtil.hasClassName(_1048,VisualEditorBinding.HTML_CLASSNAME);
};
function VisualEditorBinding(){
this.logger=SystemLogger.getLogger("VisualEditorBinding");
this.action_initialized=VisualEditorBinding.ACTION_INITIALIZED;
this.url_default="${root}/content/misc/editors/visualeditor/visualeditor.aspx";
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.embedableFieldConfiguration=null;
this._xhtml=null;
this._previewPageId=null;
this._previewTemplateId=null;
this._previewPlaceholder=null;
return this;
}
VisualEditorBinding.prototype.onBindingRegister=function(){
VisualEditorBinding.superclass.onBindingRegister.call(this);
StringBundle.getString("Composite.Web.VisualEditor","Preload.Key");
};
VisualEditorBinding.prototype.onBindingAttach=function(){
var _1049=this.getProperty("embedablefieldstypenames");
if(_1049!=null){
this.embedableFieldConfiguration=VisualEditorFieldGroupConfiguration.getConfiguration(_1049);
}
var _104a=this.getProperty("formattingconfiguration");
if(_104a!=null){
this._url+="?config="+_104a;
}
this._previewPageId=this.getProperty("previewpageid");
if(this._previewPageId==null){
this._previewPageId="00000000-0000-0000-0000-000000000000";
}
this._previewTemplateId=this.getProperty("previewtemplateid");
if(this._previewTemplateId==null){
this._previewTemplateId="00000000-0000-0000-0000-000000000000";
}
this._previewPlaceholder=this.getProperty("previewplaceholder");
VisualEditorBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.TINYMCE_INITIALIZED);
};
VisualEditorBinding.prototype.toString=function(){
return "[VisualEditorBinding]";
};
VisualEditorBinding.prototype.handleBroadcast=function(_104b,arg){
VisualEditorBinding.superclass.handleBroadcast.call(this,_104b,arg);
var _104d=this.getContentWindow().bindingMap.tinywindow;
var _104e=_104d.getContentWindow();
switch(_104b){
case BroadcastMessages.TINYMCE_INITIALIZED:
if(arg.broadcastWindow==_104e){
this._tinyEngine=arg.tinyEngine;
this._tinyInstance=arg.tinyInstance;
this._tinyTheme=arg.tinyTheme;
this._tinyTheme.initC1(this,this._tinyEngine,this._tinyInstance);
if(this._startContent==" "){
this._startContent=VisualEditorBinding.DEFAULT_CONTENT;
}
this._startContent=this.normalizeToDocument(this._startContent);
this._startContent=this.extractBody(this._startContent);
arg.tinyInstance.setContent(VisualEditorBinding.getTinyContent(this._startContent,this),{format:"raw"});
this.initializeEditorComponents(_104d);
this._initialize();
this.unsubscribe(BroadcastMessages.TINYMCE_INITIALIZED);
}
break;
}
};
VisualEditorBinding.prototype.initializeEditorComponent=function(_104f){
_104f.initializeComponent(this,this._tinyEngine,this._tinyInstance,this._tinyTheme);
};
VisualEditorBinding.prototype._finalize=function(){
VisualEditorBinding.superclass._finalize.call(this);
this._maybeShowEditor();
};
VisualEditorBinding.prototype._onPageInitialize=function(_1050){
VisualEditorBinding.superclass._onPageInitialize.call(this,_1050);
this._maybeShowEditor();
};
VisualEditorBinding.prototype._maybeShowEditor=function(){
if(this._isFinalized&&this._pageBinding!=null){
this._checksum=this.getCheckSum();
this._pageBinding.showEditor(true);
}
};
VisualEditorBinding.prototype.extractBody=function(html){
var _1052=null;
var re=/(<body\s*[^>]*>)([\S\s]*)(<\/body>)/i;
var match=html.match(re);
if(match){
_1052=match[2];
this._xhtml=html.replace(re,"$1\n${body}\n\t$3");
}else{
_1052=new String("");
this._xhtml=VisualEditorBinding.XHTML;
}
return _1052;
};
VisualEditorBinding.prototype.normalizeToDocument=function(_1055){
var _1056=_1055;
if(!this._isNormalizedDocument(_1055)){
_1056=this._getHtmlMarkup().replace("${body}",_1055);
}
return _1056;
};
VisualEditorBinding.prototype._isNormalizedDocument=function(_1057){
var _1058=false;
var doc=XMLParser.parse(_1057,true);
if(doc!=null){
if(doc.documentElement.nodeName=="html"){
_1058=true;
}
}
if(Client.isWebKit){
if(_1057.indexOf("<html")!==0){
_1058=false;
}
}
return _1058;
};
VisualEditorBinding.prototype._getHtmlMarkup=function(){
return this._xhtml!=null?this._xhtml:VisualEditorBinding.XHTML;
};
VisualEditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _105d=VisualEditorBinding.superclass.handleCommand.call(this,cmd,gui,val);
if(!_105d){
try{
this._tinyInstance.execCommand(cmd,gui,val);
this.checkForDirty();
}
catch(e){
SystemDebug.stack(arguments);
}
_105d=true;
}
return _105d;
};
VisualEditorBinding.prototype.handleContextMenu=function(e){
var _105f=DOMEvents.getTarget(e);
this._popupBinding.configure(this._tinyInstance,this._tinyEngine,_105f);
VisualEditorBinding.superclass.handleContextMenu.call(this,e);
};
VisualEditorBinding.prototype.getEditorWindow=function(){
return DOMUtil.getParentWindow(this.getEditorDocument());
};
VisualEditorBinding.prototype.getEditorDocument=function(){
return this._tinyInstance.getDoc();
};
VisualEditorBinding.prototype.getEditorPopupBinding=function(){
return app.bindingMap.visualeditorpopup;
};
VisualEditorBinding.prototype.createBookmark=function(){
this._bookmark=this._tinyInstance.selection.getBookmark(true);
};
VisualEditorBinding.prototype.restoreBookmark=function(){
if(this.hasBookmark()){
this._tinyInstance.selection.moveToBookmark(this._bookmark);
this.deleteBookmark();
}
};
VisualEditorBinding.prototype.hasBookmark=function(){
return this._bookmark!=null;
};
VisualEditorBinding.prototype.deleteBookmark=function(){
this._bookmark=null;
};
VisualEditorBinding.prototype.resetUndoRedo=function(){
this._tinyInstance.undoManager.clear();
this._tinyInstance.undoManager.add();
if(this._pageBinding!=null){
this._pageBinding.updateUndoBroadcasters();
}
};
VisualEditorBinding.prototype.validate=function(){
return this._pageBinding.validate();
};
VisualEditorBinding.prototype.getValue=function(){
return this._pageBinding.getContent();
};
VisualEditorBinding.prototype.setValue=function(value){
if(this._isFinalized){
if(Binding.exists(this._pageBinding)){
this._pageBinding.setContent(value);
}
}else{
if(this._startContent==null){
this._startContent=value;
}
}
};
VisualEditorBinding.prototype.getResult=function(){
};
VisualEditorBinding.prototype.clean=function(){
VisualEditorBinding.superclass.clean.call(this);
if(this._pageBinding!=null){
this._pageBinding.clean();
}
};
VisualEditorBinding.prototype.getSoapTinyContent=function(_1061){
return XhtmlTransformationsService.StructuredContentToTinyContentMultiTemplate(_1061,this._previewPageId,this._previewTemplateId,this._previewPlaceholder);
};
VisualEditorBinding.prototype.getImageTagForFunctionCall=function(_1062){
return XhtmlTransformationsService.GetImageTagForFunctionCall2(_1062,this._previewPageId,this._previewTemplateId,this._previewPlaceholder);
};
VisualEditorBinding.prototype.focus=function(){
VisualEditorBinding.superclass.focus.call(this);
if(Client.isExplorer&&this._tinyInstance){
this._tinyInstance.selection.setRng(this._tinyInstance.selection.getRng());
}
};
VisualEditorBinding.prototype.setResult=function(_1063){
};
VisualEditorPopupBinding.prototype=new EditorPopupBinding;
VisualEditorPopupBinding.prototype.constructor=VisualEditorPopupBinding;
VisualEditorPopupBinding.superclass=EditorPopupBinding.prototype;
VisualEditorPopupBinding.CONTENT_TEMPLATE="wysiwygeditor/popup.xml";
function VisualEditorPopupBinding(){
this.logger=SystemLogger.getLogger("VisualEditorPopupBinding");
this.tinyElement=null;
this.tinyEngine=null;
this.tinyInstance=null;
this.hasSelection=false;
}
VisualEditorPopupBinding.prototype.toString=function(){
return "[VisualEditorPopupBinding]";
};
VisualEditorPopupBinding.prototype.configure=function(_1064,_1065,_1066){
var _1067=this.editorBinding.hasSelection();
this.tinyInstance=_1064;
this.tinyEngine=_1065;
this.tinyElement=_1066;
this.hasSelection=_1067;
VisualEditorPopupBinding.superclass.configure.call(this);
};
VisualEditorPopupBinding.prototype.handleCommand=function(cmd,gui,val){
this.editorBinding.blurEditor();
this.editorBinding.handleCommand(cmd,gui?gui:false,val);
};
VisualEditorPopupBinding.prototype._configure=function(){
if(this._isEditorPopupBindingInitialized){
this._configureLinkGroup();
this._configureInsertGroup();
this._configureTableGroup();
this._configureRenderingGroup();
this._configureFieldGroup();
this._configureImageGroup();
this._configureSpellCheckGroup();
}
};
VisualEditorPopupBinding.prototype._configureLinkGroup=function(){
var _106b=false;
if(this.hasSelection){
_106b=true;
}else{
if(this.tinyElement){
if(this.tinyElement.nodeName=="A"&&!this.tinyElement.getAttribute("name")){
_106b=true;
}else{
if(this.tinyElement.nodeName=="IMG"){
_106b=true;
}
}
}
}
if(_106b){
this._showMenuGroups("link");
this._configureLinkGroupDetails();
}else{
this._hideMenuGroups("link");
}
};
VisualEditorPopupBinding.prototype._configureLinkGroupDetails=function(){
var _106c=this.getMenuItemForCommand("compositeInsertLink");
var _106d=this.getMenuItemForCommand("unlink");
var _106e=this.editorBinding.getButtonForCommand("compositeInsertLink");
var _106f=this.editorBinding.getButtonForCommand("unlink");
_106d.setDisabled(_106f.isDisabled);
if(_106d.isDisabled){
_106c.setLabel("${string:Composite.Web.VisualEditor:ContextMenu.LabelLink}");
}else{
_106c.setLabel("${string:Composite.Web.VisualEditor:ContextMenu.LabelLinkProperties}");
}
};
VisualEditorPopupBinding.prototype._configureInsertGroup=function(){
var _1070=this.editorBinding.embedableFieldConfiguration;
var item=this.getMenuItemForCommand("compositeInsertFieldParent");
var doc=this.bindingDocument;
if(item){
item.dispose();
}
item=MenuItemBinding.newInstance(doc);
item.setLabel("${string:Composite.Web.VisualEditor:ContextMenu.LabelField}");
item.image="${icon:fields}";
item.imageDisabled="${icon:fields-disabled}";
item.setProperty("cmd","compositeInsertFieldParent");
if(_1070){
var _1073=_1070.getGroupNames();
if(_1073.hasEntries()){
var popup=MenuPopupBinding.newInstance(doc);
var body=popup.add(MenuBodyBinding.newInstance(doc));
var group=body.add(MenuGroupBinding.newInstance(doc));
_1073.each(function(_1077){
var _1078=_1070.getFieldNames(_1077);
_1078.each(function(_1079){
var i=group.add(MenuItemBinding.newInstance(doc));
i.setLabel(_1079);
i.setImage("${icon:field}");
i.setProperty("cmd","compositeInsertField");
i.setProperty("val",_1077+":"+_1079);
group.add(i);
});
});
item.add(popup);
}
}else{
item.disable();
}
this._menuGroups["insertions"].getFirst().add(item);
item.attachRecursive();
this._menuItems["compositeInsertFieldParent"]=item;
};
VisualEditorPopupBinding.prototype._configureTableGroup=function(){
var _107b=this.tinyInstance.dom.getParent(this.tinyElement,"table,td");
var _107c=null;
var _107d=null;
if(_107b){
if(_107b.nodeName=="TD"){
_107c=_107b.getAttribute("colspan");
_107d=_107b.getAttribute("rowspan");
}
this._menuItems["mceTableSplitCells"].setDisabled(_107c=="1"&&_107d=="1");
this._menuItems["mceTablePasteRowBefore"].setDisabled(this.tinyInstance.tableRowClipboard==null);
this._menuItems["mceTablePasteRowAfter"].setDisabled(this.tinyInstance.tableRowClipboard==null);
}
if(_107b){
this._showMenuGroups("table");
}else{
this._hideMenuGroups("table");
}
};
VisualEditorPopupBinding.prototype._configureRenderingGroup=function(){
if(VisualEditorBinding.isFunctionElement(this.tinyElement)){
this._showMenuGroups("rendering");
}else{
this._hideMenuGroups("rendering");
}
};
VisualEditorPopupBinding.prototype._configureFieldGroup=function(){
if(VisualEditorBinding.isFieldElement(this.tinyElement)){
this._showMenuGroups("field");
}else{
this._hideMenuGroups("field");
}
};
VisualEditorPopupBinding.prototype._configureImageGroup=function(){
if(VisualEditorBinding.isImageElement(this.tinyElement)){
this._showMenuGroups("image");
}else{
this._hideMenuGroups("image");
}
};
VisualEditorPopupBinding.prototype._configureSpellCheckGroup=function(){
if(Client.isFirefox){
this._showMenuGroups("spellcheck");
}else{
this._hideMenuGroups("spellcheck");
}
};
VisualEditorFormattingConfiguration._configurations=new Map();
VisualEditorFormattingConfiguration._options=null;
VisualEditorFormattingConfiguration.getConfiguration=function(_107e){
var _107f=VisualEditorFormattingConfiguration._configurations;
if(!_107f.has(_107e)){
_107f.set(_107e,new VisualEditorFormattingConfiguration());
}
return _107f.get(_107e);
};
VisualEditorFormattingConfiguration._getOptions=function(){
if(VisualEditorFormattingConfiguration._options==null){
var p="Composite.Web.VisualEditor";
VisualEditorFormattingConfiguration._options={"p":StringBundle.getString(p,"FormatSelector.LabelParagraph"),"address":StringBundle.getString(p,"FormatSelector.LabelAddress"),"blockquote":StringBundle.getString(p,"FormatSelector.LabelBlockQuote"),"div":StringBundle.getString(p,"FormatSelector.LabelDivision"),"h1":StringBundle.getString(p,"FormatSelector.LabelHeading1"),"h2":StringBundle.getString(p,"FormatSelector.LabelHeading2"),"h3":StringBundle.getString(p,"FormatSelector.LabelHeading3"),"h4":StringBundle.getString(p,"FormatSelector.LabelHeading4"),"h5":StringBundle.getString(p,"FormatSelector.LabelHeading5"),"h6":StringBundle.getString(p,"FormatSelector.LabelHeading6")};
}
return VisualEditorFormattingConfiguration._options;
};
function VisualEditorFormattingConfiguration(_1081){
this._options=VisualEditorFormattingConfiguration._getOptions();
}
VisualEditorFormattingConfiguration.prototype.getFormattingOptions=function(){
return this._options;
};
VisualEditorFieldGroupConfiguration._configurations=new Map();
VisualEditorFieldGroupConfiguration.getConfiguration=function(_1082){
var _1083=null;
var _1084=VisualEditorFieldGroupConfiguration._configurations;
if(!_1084.has(_1082)){
_1084.set(_1082,new VisualEditorFieldGroupConfiguration(EditorConfigurationService.GetEmbedableFieldGroupConfigurations(_1082)));
}
return _1084.get(_1082);
};
function VisualEditorFieldGroupConfiguration(_1085){
var _1086=new Map();
new List(_1085).each(function(group){
var map=new Map();
new List(group.Fields).each(function(field){
map.set(field.Name,{xhtml:field.XhtmlRepresentation,xml:field.XhtmlRepresentation});
});
_1086.set(group.GroupName,map);
});
this._groups=_1086;
}
VisualEditorFieldGroupConfiguration.prototype.getGroupNames=function(){
return this._groups.toList(true);
};
VisualEditorFieldGroupConfiguration.prototype.getFieldNames=function(_108a){
return this._groups.get(_108a).toList(true);
};
VisualEditorFieldGroupConfiguration.prototype.getTinyMarkup=function(_108b,_108c){
return this._groups.get(_108b).get(_108c).xhtml;
};
VisualEditorFieldGroupConfiguration.prototype.getStructuredMarkup=function(name){
return this._groups.get(groupname).get(fieldname).xml;
};
VisualMultiEditorBinding.prototype=new VisualEditorBinding;
VisualMultiEditorBinding.prototype.constructor=VisualMultiEditorBinding;
VisualMultiEditorBinding.superclass=VisualEditorBinding.prototype;
function VisualMultiEditorBinding(){
this.logger=SystemLogger.getLogger("VisualMultiEditorBinding");
this._hasPlaceHolders=false;
this._textareaname=null;
this._textareas=null;
this._xhtmls=null;
return this;
}
VisualMultiEditorBinding.prototype.toString=function(){
return "[VisualMultiEditorBinding]";
};
VisualMultiEditorBinding.prototype._maybeShowEditor=function(){
if(this._hasPlaceHolders){
VisualMultiEditorBinding.superclass._maybeShowEditor.call(this);
}
};
VisualMultiEditorBinding.prototype._setup=function(){
this._xhtmls=new Map();
var _108e=this.getDescendantElementsByLocalName("textarea");
while(_108e.hasNext()){
var _108f=_108e.getNext();
if(_108f.getAttribute("selected")=="true"){
this._startContent=_108f.value;
this._textareaname=_108f.getAttribute("placeholderid");
}
}
if(this._startContent==null){
this._startContent=VisualEditorBinding.DEFAULT_CONTENT;
}
};
VisualMultiEditorBinding.prototype._initialize=function(){
var self=this;
this._registerWithDataManager("generated"+KeyMaster.getUniqueKey());
var _1091=this.getContentWindow().bindingMap.templatetree;
_1091.addActionListener(TreeBinding.ACTION_SELECTIONCHANGED,{handleAction:function(_1092){
var _1093=_1091.getSelectedTreeNodeBindings().getFirst();
self._placeHolderSelected(_1093.textareaname);
_1092.consume();
}});
_1091.addActionListener(Binding.ACTION_FOCUSED,{handleAction:function(_1094){
self._activateEditor(false);
}});
this._updatePlaceHolders();
var _1095=this.getContentWindow().bindingMap.toolsplitter;
_1095.unCollapse();
VisualMultiEditorBinding.superclass._initialize.call(this);
};
VisualMultiEditorBinding.prototype._updatePlaceHolders=function(){
templatetree=this.getContentWindow().bindingMap.templatetree;
var _1096=this.getDescendantElementsByLocalName("textarea");
templatetree.empty();
if(_1096.hasEntries()){
this._hasPlaceHolders=true;
this._parsePlaceHolders(_1096);
if(this._isFinalized){
this._pageBinding.showEditor(true);
}
}else{
this._hasPlaceHolders=false;
this._noPlaceHolders();
if(this._isFinalized){
this._pageBinding.showEditor(false);
}
}
};
VisualMultiEditorBinding.prototype._parsePlaceHolders=function(_1097){
this._textareas=new Map();
while(_1097.hasNext()){
var _1098=_1097.getNext();
var _1099=_1098.getAttribute("placeholderid");
this._textareas.set(_1099,{placeholderid:_1099,placeholdername:_1098.getAttribute("placeholdername"),placeholdermarkup:_1098.value,textareaelement:_1098,isSelected:_1098.getAttribute("selected")=="true"});
}
var _109a=new Map();
this._textareas.each(function(name,_109c){
var _109d=templatetree.add(TreeNodeBinding.newInstance(templatetree.bindingDocument));
_109d.setLabel(_109c.placeholdername);
_109d.setImage("${icon:placeholder}");
_109d.setProperty("placeholder",true);
_109d.textareaname=name;
_109a.set(_109c.placeholdername,_109d);
if(_109c.isSelected){
selected=_109d;
}
});
templatetree.attachRecursive();
if(selected!=null){
var _109e=this._textareas.get(selected.textareaname);
this._textareaname=selected.textareaname;
this._placeholdername=_109e.placeholdername;
this._setContentFromPlaceHolder(selected.textareaname);
selected.focus();
}
};
VisualMultiEditorBinding.prototype._noPlaceHolders=function(){
var _109f=this.getContentWindow().bindingMap.templatetree;
var _10a0=_109f.add(TreeNodeBinding.newInstance(_109f.bindingDocument));
_10a0.setLabel(StringBundle.getString("Composite.Web.VisualEditor","TemplateTree.NoTemplateWarning"));
_10a0.setImage("${icon:warning}");
_10a0.attach();
var _10a1=this.getContentWindow().bindingMap.statusbar;
_10a1.setPlaceHolderName(null);
};
VisualMultiEditorBinding.prototype._setContentFromPlaceHolder=function(name){
if(this._isFinalized==true){
var _10a3=this._textareas.get(name);
var _10a4=_10a3.placeholdermarkup;
this.setValue(this.normalizeToDocument(_10a4));
this.resetUndoRedo();
}
};
VisualMultiEditorBinding.prototype._placeHolderSelected=function(_10a5){
if(this._isFinalized==true){
if(this._textareaname&&this._textareas.has(this._textareaname)){
this._textareas.get(this._textareaname).placeholdermarkup=this.getValue();
}
}
this._textareaname=_10a5;
this._placeholdername=this._textareas.get(this._textareaname).placeholdername;
var _10a6=this.getContentWindow().bindingMap.statusbar;
_10a6.setPlaceHolderName(this._placeholdername);
if(this._isFinalized==true){
var self=this;
Application.lock(self);
setTimeout(function(){
self._setContentFromPlaceHolder(_10a5);
Application.unlock(self);
},0);
}
};
VisualMultiEditorBinding.prototype.extractBody=function(html){
var _10a9=VisualMultiEditorBinding.superclass.extractBody.call(this,html);
this._xhtmls.set(this._textareaname,this._xhtml);
return _10a9;
};
VisualMultiEditorBinding.prototype._getHtmlMarkup=function(){
var _10aa=VisualEditorBinding.XHTML;
if(this._xhtmls.has(this._textareaname)){
_10aa=this._xhtmls.get(this._textareaname);
if(_10aa==null){
_10aa=VisualEditorBinding.XHTML;
}
}
return _10aa;
};
VisualMultiEditorBinding.prototype.manifest=function(){
if(this._textareas!=null&&this._textareas.hasEntries()){
this._textareas.get(this._textareaname).placeholdermarkup=this.getValue();
this._textareas.each(function(name,_10ac){
_10ac.textareaelement.value=_10ac.placeholdermarkup;
});
}
};
VisualMultiEditorBinding.prototype.updateElement=function(_10ad,_10ae){
var _10af=_10ad.getElementsByTagName("div").item(0);
var _10b0=_10ae.getElementsByTagName("div").item(0);
var _10b1=new List(_10af.getElementsByTagName("textarea"));
var _10b2=new List(_10b0.getElementsByTagName("textarea"));
var _10b3=false;
if(_10b1.getLength()!=_10b2.getLength()){
_10b3=true;
}else{
var index=0;
_10b1.each(function(_10b5,index){
var _10b7=_10b2.get(index);
var newid=_10b5.getAttribute("placeholderid");
var oldid=_10b7.getAttribute("placeholderid");
var _10ba=_10b5.getAttribute("placeholdername");
var _10bb=_10b7.getAttribute("placeholdername");
if(newid!=oldid||_10ba!=_10bb){
_10b3=true;
}
return !_10b3;
});
}
if(_10b3){
var html=null;
if(_10af.innerHTML!=null){
html=_10af.innerHTML;
}else{
html=DOMSerializer.serialize(_10af);
html=html.substring(html.indexOf(">")+1,html.length);
html=html.substring(0,html.lastIndexOf("<"));
}
var div=this.bindingElement.getElementsByTagName("div").item(0);
if(div!=null){
div.innerHTML=html;
}
this._updatePlaceHolders();
}
return true;
};
VisualMultiTemplateEditorBinding.prototype=new VisualMultiEditorBinding;
VisualMultiTemplateEditorBinding.prototype.constructor=VisualMultiTemplateEditorBinding;
VisualMultiTemplateEditorBinding.superclass=VisualMultiEditorBinding.prototype;
function VisualMultiTemplateEditorBinding(){
this.logger=SystemLogger.getLogger("VisualMultiTemplateEditorBinding");
this._oldtextareas=null;
this._pageId=null;
this._templatePreview=null;
return this;
}
VisualMultiTemplateEditorBinding.prototype.toString=function(){
return "[VisualMultiTemplateEditorBinding]";
};
VisualMultiTemplateEditorBinding.prototype.onBindingAttach=function(){
VisualMultiTemplateEditorBinding.superclass.onBindingAttach.call(this);
this._oldtextareas=new Map();
if(this.getProperty("pageid")){
this._pageId=this.getProperty("pageid");
}
};
VisualMultiTemplateEditorBinding.prototype._onPageInitialize=function(_10be){
VisualMultiTemplateEditorBinding.superclass._onPageInitialize.call(this,_10be);
if(this.bindingElement.offsetWidth>1000){
this.getContentWindow().bindingMap.visualeditorsplitbox.setLayout("4:1");
}
};
VisualMultiTemplateEditorBinding.prototype._initialize=function(){
var self=this;
var _10c0=this.getDescendantBindingByLocalName("selector");
_10c0.attach();
this._populateTemplateSelector();
var _10c1=this.getContentWindow().bindingMap.templateselector;
_10c1.addActionListener(SelectorBinding.ACTION_SELECTIONCHANGED,{handleAction:function(){
setTimeout(function(){
self._onTemplateSelectionChanged();
},0);
}});
this.getContentWindow().bindingMap.templatetoolbar.show();
VisualMultiTemplateEditorBinding.superclass._initialize.call(this);
};
VisualMultiTemplateEditorBinding.prototype._populateTemplateSelector=function(){
var _10c2=this.getDescendantBindingByLocalName("selector");
var _10c3=this.getContentWindow().bindingMap.templateselector;
_10c2.selections.each(function(_10c4){
_10c4.imageProfile=new ImageProfile({image:"${icon:page-template-template}"});
});
_10c3.populateFromList(_10c2.selections);
};
VisualMultiTemplateEditorBinding.prototype._onTemplateSelectionChanged=function(){
var _10c5=this.getDescendantBindingByLocalName("selector");
var _10c6=this.getContentWindow().bindingMap.templateselector;
_10c5.selectByValue(_10c6.getValue());
_10c5.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
this.checkForDirty(true);
};
VisualMultiTemplateEditorBinding.prototype._parsePlaceHolders=function(_10c7){
this.updateTemplatePreview();
var nev=this._textareas;
var old=this._oldtextareas;
if(nev!=null){
nev.each(function(key,value){
old.set(key,value);
});
}
this._textareas=new Map();
function compute(_10cc,_10cd){
var _10ce=_10cd;
if(old.has(_10cc)){
_10ce=old.get(_10cc).placeholdermarkup;
}
return _10ce;
}
while(_10c7.hasNext()){
var _10cf=_10c7.getNext();
var _10d0=_10cf.getAttribute("placeholderid");
this._textareas.set(_10d0,{placeholderid:_10d0,placeholdername:_10cf.getAttribute("placeholdername"),placeholdermarkup:compute(_10d0,_10cf.value),textareaelement:_10cf,isSelected:_10cf.getAttribute("selected")=="true"});
}
var _10d1=null;
var _10d2=this.getContentWindow().bindingMap.templatetree;
var _10d3=new Map();
this._textareas.each(function(name,_10d5){
var _10d6=_10d2.add(TreeNodeBinding.newInstance(_10d2.bindingDocument));
_10d6.setLabel(_10d5.placeholdername);
_10d6.setImage("${icon:placeholder}");
_10d6.setProperty("placeholder",true);
_10d6.textareaname=name;
_10d3.set(_10d5.placeholdername,_10d6);
if(_10d5.isSelected){
_10d1=_10d6;
}
});
_10d2.attachRecursive();
if(_10d1!=null){
var _10d7=true;
if(this._oldtextareas.hasEntries()){
_10d7=false;
var map=new Map();
this._textareas.each(function(id,_10da){
map.set(_10da.placeholdername,true);
});
if(!map.has(this._placeholdername)){
_10d7=true;
}
}
if(_10d7){
var _10db=this._textareas.get(_10d1.textareaname);
this._textareaname=_10d1.textareaname;
this._placeholdername=_10db.placeholdername;
this._setContentFromPlaceHolder(_10d1.textareaname);
_10d1.focus();
}else{
var _10dc=_10d3.get(this._placeholdername);
this._textareaname=_10dc.textareaname;
_10dc.focus();
}
}
};
VisualMultiTemplateEditorBinding.prototype._placeHolderSelected=function(name){
VisualMultiTemplateEditorBinding.superclass._placeHolderSelected.call(this,name);
this.updatePlaceHoldeWidth(name);
};
VisualMultiTemplateEditorBinding.prototype.updateElement=function(_10de,_10df){
var _10e0=_10de.getElementsByTagName("ui:selector").item(0);
var _10e1=_10df.getElementsByTagName("ui:selector").item(0);
var _10e2=false;
if(_10e0!=null&&_10e1!=null){
var _10e3=new List(_10e0.getElementsByTagName("ui:selection"));
var _10e4=new List(_10e1.getElementsByTagName("ui:selection"));
if(_10e3.getLength()!=_10e4.getLength()){
_10e2=true;
}else{
_10e3.each(function(_10e5,index){
var _10e7=_10e5.getAttribute("value");
var _10e8=_10e4.get(index).getAttribute("value");
if(_10e7!=_10e8){
_10e2=true;
}
return !_10e2;
});
}
}
if(_10e2){
var div=this.bindingElement.getElementsByTagName("div").item(1);
this.bindingWindow.DocumentManager.detachBindings(div,true);
div.innerHTML=DOMSerializer.serialize(_10e0);
this.bindingWindow.DocumentManager.attachBindings(div);
this._populateTemplateSelector();
}
return VisualMultiTemplateEditorBinding.superclass.updateElement.call(this,_10de,_10df);
};
VisualMultiTemplateEditorBinding.prototype.updatePlaceHoldeWidth=function(_10ea){
if(_10ea==undefined){
_10ea=this._textareaname;
}
var self=this;
if(this._templatePreview){
new List(this._templatePreview.Placeholders).each(function(_10ec){
if(_10ec.PlaceholderId==_10ea){
self._tinyInstance.getBody().style.maxWidth=(_10ec.ClientRectangle.Width+52)+"px";
return false;
}
});
}
};
VisualMultiTemplateEditorBinding.prototype.updateTemplatePreview=function(){
var _10ed=this._pageId;
var _10ee=this.getDescendantBindingByLocalName("selector").getValue();
this._templatePreview=null;
var self=this;
PageTemplateService.GetTemplatePreviewInformation(_10ed,_10ee,function(_10f0){
self._templatePreview=_10f0;
self.updatePlaceHoldeWidth();
});
};
VisualMultiTemplateEditorBinding.prototype.getSoapTinyContent=function(_10f1){
var _10f2=this._pageId;
var _10f3=this._textareaname;
var _10f4=this.getDescendantBindingByLocalName("selector").getValue();
return XhtmlTransformationsService.StructuredContentToTinyContentMultiTemplate(_10f1,_10f2,_10f4,_10f3);
};
VisualMultiTemplateEditorBinding.prototype.getImageTagForFunctionCall=function(_10f5){
var _10f6=this._pageId;
var _10f7=this._textareaname;
var _10f8=this.getDescendantBindingByLocalName("selector").getValue();
return XhtmlTransformationsService.GetImageTagForFunctionCall2(_10f5,_10f6,_10f8,_10f7);
};
CodeMirrorEditorPopupBinding.prototype=new EditorPopupBinding;
CodeMirrorEditorPopupBinding.prototype.constructor=CodeMirrorEditorPopupBinding;
CodeMirrorEditorPopupBinding.superclass=EditorPopupBinding.prototype;
CodeMirrorEditorPopupBinding.CONTENT_TEMPLATE="sourceeditor/popup.xml";
function CodeMirrorEditorPopupBinding(){
this.logger=SystemLogger.getLogger("CodeMirrorEditorPopupBinding");
this._editorBinding=null;
this._codePressFrame=null;
this._codePressEngine=null;
}
CodeMirrorEditorPopupBinding.prototype.toString=function(){
return "[CodeMirrorEditorPopupBinding]";
};
CodeMirrorEditorPopupBinding.prototype.configure=function(_10f9,frame,_10fb){
this._editorBinding=_10f9;
this._codePressFrame=frame;
this._codePressEngine=_10fb;
WysiwygEditorPopupBinding.superclass.configure.call(this);
};
CodeMirrorEditorPopupBinding.prototype._configure=function(){
switch(this._editorBinding.syntax){
case SourceEditorBinding.syntax.XML:
case SourceEditorBinding.syntax.XSL:
case SourceEditorBinding.syntax.HTML:
this._showMenuGroups("xml");
break;
default:
this._hideMenuGroups("xml");
break;
}
};
CodeMirrorEditorPopupBinding.prototype.handleCommand=function(cmd,gui,val){
var win=this._editorBinding.getContentWindow();
var but=null;
switch(cmd){
case "compositeInsert":
but=win.bindingMap.insertbutton;
break;
case "compositeFormat":
but=win.bindingMap.formatbutton;
break;
}
if(but!=null){
but.handleCommand(cmd,gui,val);
}
};
CodeMirrorEditorBinding.prototype=new EditorBinding;
CodeMirrorEditorBinding.prototype.constructor=CodeMirrorEditorBinding;
CodeMirrorEditorBinding.superclass=EditorBinding.prototype;
CodeMirrorEditorBinding.ACTION_INITIALIZED="codemirroreditor initialized";
CodeMirrorEditorBinding.syntax={TEXT:"text",XML:"xml",XSL:"xsl",HTML:"html",CSS:"css",JAVASCRIPT:"js",CSHARP:"cs",CSHTML:"cshtml",ASPX:"aspx",SQL:"sql",SASS:"sass"};
function CodeMirrorEditorBinding(){
this.logger=SystemLogger.getLogger("CodeMirrorEditorBinding");
this.action_initialized=CodeMirrorEditorBinding.ACTION_INITIALIZED;
this.url_default="${root}/content/misc/editors/codemirroreditor/codemirroreditor.aspx";
this._editorWindowBinding=null;
this._codemirrorWindow=null;
this._codemirrorEditor=null;
this._codemirrorWrapperElement=null;
this.syntax=new String(CodeMirrorEditorBinding.syntax.TEXT);
this._isPlainEditMode=false;
this.isFocusable=true;
this._isEmbedded=false;
this._hasStrictValidation=false;
this._strictSave=true;
this._validator=null;
this._startContent="";
return this;
}
CodeMirrorEditorBinding.prototype.toString=function(){
return "[CodeMirrorEditorBinding]";
};
CodeMirrorEditorBinding.prototype.onBindingRegister=function(){
CodeMirrorEditorBinding.superclass.onBindingRegister.call(this);
StringBundle.getString("Composite.Web.SourceEditor","Preload.Key");
};
CodeMirrorEditorBinding.prototype.onBindingAttach=function(){
this.subscribe(BroadcastMessages.CODEMIRROR_LOADED);
if(this.getProperty("embedded")==true){
this._isEmbedded=true;
}
var _1101=this.getProperty("validate");
if(_1101==true){
this._hasStrictValidation=true;
}
var _1102=this.getProperty("strictsave");
if(_1102===false){
this._strictSave=false;
}
var _1103=this.getProperty("validator");
if(_1103!=null){
this._validator=_1103;
}
this.syntax=this.getProperty("syntax");
if(this.getProperty("debug")){
this._startContent=Templates.getPlainText("sourcecodeeditor/"+this.syntax+".txt");
}
CodeMirrorEditorBinding.superclass.onBindingAttach.call(this);
};
CodeMirrorEditorBinding.prototype.handleBroadcast=function(_1104,arg){
CodeMirrorEditorBinding.superclass.handleBroadcast.call(this,_1104,arg);
switch(_1104){
case BroadcastMessages.CODEMIRROR_LOADED:
var _1106=this.getContentWindow().bindingMap.codemirrorwindow;
if(_1106!=null){
var _1107=_1106.getContentWindow();
if(arg.broadcastWindow==_1107){
this._codemirrorWindow=_1107;
this._codemirrorEditor=arg.codemirrorEditor;
this._codemirrorWrapperElement=arg.codemirrorEditor.getWrapperElement();
switch(this.syntax){
case CodeMirrorEditorBinding.syntax.XML:
this._codemirrorEditor.setOption("mode","application/xml");
break;
case CodeMirrorEditorBinding.syntax.XSL:
case CodeMirrorEditorBinding.syntax.HTML:
this._codemirrorEditor.setOption("mode","text/html");
break;
case CodeMirrorEditorBinding.syntax.CSS:
this._codemirrorEditor.setOption("mode","text/css");
break;
case CodeMirrorEditorBinding.syntax.CSHARP:
this._codemirrorEditor.setOption("mode","text/x-csharp");
break;
case CodeMirrorEditorBinding.syntax.CSHTML:
this._codemirrorEditor.setOption("mode","application/x-cshtml");
break;
case CodeMirrorEditorBinding.syntax.JAVASCRIPT:
this._codemirrorEditor.setOption("mode","text/javascript");
break;
case CodeMirrorEditorBinding.syntax.ASPX:
this._codemirrorEditor.setOption("mode","application/x-aspx");
break;
case CodeMirrorEditorBinding.syntax.SASS:
this._codemirrorEditor.setOption("mode","text/x-sass");
break;
case CodeMirrorEditorBinding.syntax.SQL:
this._codemirrorEditor.setOption("mode","");
break;
case CodeMirrorEditorBinding.syntax.TEXT:
this._codemirrorEditor.setOption("mode","");
break;
}
this.initializeEditorComponents(_1106);
var self=this;
this._codemirrorEditor.on("change",function(e){
self.checkForDirty();
});
this._codemirrorEditor.on("focus",function(e){
self._activateEditor(true);
});
if(this._pageBinding!=null){
this._initialize();
}
this.unsubscribe(_1104);
}
}
break;
}
};
CodeMirrorEditorBinding.prototype._onPageInitialize=function(_110b){
CodeMirrorEditorBinding.superclass._onPageInitialize.call(this,_110b);
if(Client.isExplorer||this._codemirrorEditor!=null){
this._initialize();
}
};
CodeMirrorEditorBinding.prototype._activateEditor=function(_110c){
if(_110c!=this._isActivated||this.isFocusable&&!this.isFocused){
this._isActivated=_110c;
EditorBinding.isActive=_110c;
var _110d=this._codemirrorWindow.standardEventHandler;
if(_110c){
_110d.enableNativeKeys(true);
}else{
_110d.disableNativeKeys();
}
var _110e=this.getContentWindow().bindingMap.broadcasterIsActive;
if(_110e!=null){
if(_110c){
_110e.enable();
}else{
_110e.disable();
}
}
if(_110c){
this.focus();
this._codemirrorWindow.focus();
}else{
this._codemirrorWindow.blur();
this.blur();
}
}
};
CodeMirrorEditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _1112=CodeMirrorEditorBinding.superclass.handleCommand.call(this,cmd,val);
return _1112;
};
CodeMirrorEditorBinding.prototype._finalize=function(){
this.setContent(this._startContent);
CodeMirrorEditorBinding.superclass._finalize.call(this);
};
CodeMirrorEditorBinding.prototype.initializeEditorComponent=function(_1113){
_1113.initializeSourceEditorComponent(this,this._codemirrorEditor);
};
CodeMirrorEditorBinding.prototype.clean=function(){
CodeMirrorEditorBinding.superclass.clean.call(this);
this.getContentWindow().bindingMap.editorpage.clean();
};
CodeMirrorEditorBinding.prototype.handleContextMenu=function(e){
};
CodeMirrorEditorBinding.prototype.getEditorPopupBinding=function(){
return top.app.bindingMap.sourcecodeeditorpopup;
};
CodeMirrorEditorBinding.prototype.getEditorWindow=function(){
return this._codemirrorWindow;
};
CodeMirrorEditorBinding.prototype.getEditorDocument=function(){
if(this._codemirrorWrapperElement!=null){
return this._codemirrorWrapperElement.ownerDocument;
}
return null;
};
CodeMirrorEditorBinding.prototype.setContent=function(_1115){
if(!this._isFinalized){
if(_1115!=this._startContent){
this._startContent=_1115;
}
}
if(this.isInitialized&&this.getContentWindow().bindingMap!=null){
this.getContentWindow().bindingMap.editorpage.setContent(_1115);
this.resetUndoRedo();
this._checksum=this.getCheckSum();
}
return true;
};
CodeMirrorEditorBinding.prototype.getContent=function(){
var _1116=this.getContentWindow().bindingMap.editorpage.getContent();
return _1116?_1116:"";
};
CodeMirrorEditorBinding.prototype.resetUndoRedo=function(){
this._codemirrorEditor.clearHistory();
};
CodeMirrorEditorBinding.prototype.cover=function(_1117){
if(this._pageBinding!=null){
this._pageBinding.cover(_1117);
}
};
CodeMirrorEditorBinding.prototype.updateElement=function(_1118){
if(_1118!=null&&this.shadowTree.dotnetinput!=null){
var value=_1118.getAttribute("value");
if(value!=null&&value!=this.shadowTree.dotnetinput.value){
this.setValue(decodeURIComponent(value));
}
}
return true;
};
CodeMirrorEditorBinding.prototype.blurEditor=function(){
};
CodeMirrorEditorBinding.prototype.validate=function(){
var _111a=true;
var _111b=this.getContent();
if(this._validator!=null){
_111a=Validator.validateInformed(_111b,this._validator);
}else{
switch(this.syntax){
case CodeMirrorEditorBinding.syntax.XML:
case CodeMirrorEditorBinding.syntax.XSL:
case CodeMirrorEditorBinding.syntax.HTML:
var _111c=_111b.replace("&nbsp;","&#160;").replace("&ldquo;","\xe2\u20ac\u0153").replace("&rdguo;","\xe2\u20ac\ufffd").replace("&lsquo;","\xe2\u20ac\u02dc").replace("&rsquo;","\xe2\u20ac\u2122").replace("&laquo;","\xc2\xab").replace("&raquo;","\xc2\xbb").replace("&lsaquo;","\xe2\u20ac\xb9").replace("&rsaquo;","\xe2\u20ac\xba").replace("&bull;","\xe2\u20ac\xa2").replace("&deg;","\xc2\xb0").replace("&hellip;","\xe2\u20ac\xa6").replace("&trade;","\xe2\u201e\xa2").replace("&copy;","\xc2\xa9").replace("&reg;","\xc2\xae").replace("&mdash;","\xe2\u20ac\u201d").replace("&ndash;","\xe2\u20ac\u201c").replace("&sup2;","\xc2\xb2").replace("&sup3;","\xc2\xb3").replace("&frac14;","\xc2\xbc").replace("&frac12;","\xc2\xbd").replace("&frac34;","\xc2\xbe").replace("&times;","\xc3\u2014").replace("&larr;","\xe2\u2020\ufffd").replace("&rarr;","\xe2\u2020\u2019").replace("&uarr;","\xe2\u2020\u2018").replace("&darr;","\xe2\u2020\u201c").replace("&middot;","\xc2\xb7").replace("<!doctype","<!DOCTYPE");
if(_111c!=_111b){
_111b=_111c;
this.setContent(_111c);
}
_111a=XMLParser.isWellFormedDocument(_111b,true,!this._strictSave);
if(_111a==true&&this._hasStrictValidation){
switch(this.syntax){
case CodeMirrorEditorBinding.syntax.HTML:
_111a=this._isValidHTML(_111b);
break;
}
}
break;
}
}
return _111a;
};
CodeMirrorEditorBinding.prototype._isValidHTML=function(xml){
var _111e=true;
var doc=XMLParser.parse(xml);
var _1120=new List();
if(doc!=null){
var root=doc.documentElement;
if(root.nodeName!="html"){
_1120.add("MissingHtml");
}
if(root.namespaceURI!=Constants.NS_XHTML){
_1120.add("NamespaceURI");
}
var head=null,body=null;
var _1124=new List(root.childNodes);
while(_1124.hasNext()){
var child=_1124.getNext();
if(child.nodeType==Node.ELEMENT_NODE){
switch(child.nodeName){
case "head":
if(head!=null){
_1120.add("MultipleHead");
}
if(body!=null){
_1120.add("HeadBodyIndex");
}
head=child;
break;
case "body":
if(body!=null){
_1120.add("MultipleBody");
}
body=child;
break;
default:
_1120.add("NotAllowedHtmlChild");
}
}
}
if(head==null){
_1120.add("MissingHead");
}
if(body==null){
_1120.add("MissingBody");
}
}
if(_1120.hasEntries()){
_111e=false;
Dialog.error(StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML.DialogTitle"),StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML."+_1120.getFirst()));
}
return _111e;
};
CodeMirrorEditorBinding.prototype._isValidXSL=function(){
return true;
};
CodeMirrorEditorBinding.prototype.getValue=CodeMirrorEditorBinding.prototype.getContent;
CodeMirrorEditorBinding.prototype.setValue=CodeMirrorEditorBinding.prototype.setContent;
CodeMirrorEditorBinding.prototype.getResult=CodeMirrorEditorBinding.prototype.getContent;
CodeMirrorEditorBinding.prototype.setResult=CodeMirrorEditorBinding.prototype.setContent;
CodeMirrorEditorBinding.prototype.createBookmark=function(){
};
CodeMirrorEditorBinding.prototype.restoreBookmark=function(){
};
CodeMirrorEditorBinding.prototype.hasBookmark=function(){
};
CodeMirrorEditorBinding.prototype.deleteBookmark=function(){
};
CodeMirrorEditorBinding.prototype.getCheckSum=function(){
var _1126=null;
var page=this._pageBinding;
if(page!=null){
_1126=page.getCheckSum();
}
return _1126;
};
ThrobberBinding.prototype=new Binding;
ThrobberBinding.prototype.constructor=ThrobberBinding;
ThrobberBinding.superclass=Binding.prototype;
ThrobberBinding.URL_DEFAULT=Resolver.resolve("${skin}/throbber/throbber.gif");
ThrobberBinding.URL_ACTIVATE=Resolver.resolve("${skin}/throbber/throbber_activate.gif");
ThrobberBinding.URL_DEACTIVATE=Resolver.resolve("${skin}/throbber/throbber_deactivate.gif");
function ThrobberBinding(){
this.logger=SystemLogger.getLogger("ThrobberBinding");
this._isPlaying=false;
return this;
}
ThrobberBinding.prototype.toString=function(){
return "[ThrobberBinding]";
};
ThrobberBinding.prototype.onBindingRegister=function(){
ThrobberBinding.superclass.onBindingRegister.call(this);
this._setImage(ThrobberBinding.URL_DEFAULT);
if(Application.hasStartPage&&Application.hasExternalConnection){
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
this.subscribe(BroadcastMessages.START_COMPOSITE);
this.bindingElement.title=" Composite Start ";
this.attachClassName("active");
this.addEventListener(DOMEvents.CLICK,{handleEvent:function(){
EventBroadcaster.broadcast(BroadcastMessages.START_COMPOSITE);
}});
}
};
ThrobberBinding.prototype.handleBroadcast=function(_1128,arg){
ThrobberBinding.superclass.handleBroadcast.call(this,_1128,arg);
switch(_1128){
case BroadcastMessages.COMPOSITE_START:
case BroadcastMessages.START_COMPOSITE:
this.hide();
break;
case BroadcastMessages.COMPOSITE_STOP:
this.show();
break;
}
};
ThrobberBinding.prototype.play=function(){
if(!this._isPlaying){
this._setImage(ThrobberBinding.URL_ACTIVATE);
this._isPlaying=true;
}
};
ThrobberBinding.prototype.stop=function(){
if(this._isPlaying==true){
this._setImage(ThrobberBinding.URL_DEACTIVATE?ThrobberBinding.URL_DEACTIVATE:ThrobberBinding.URL_DEFAULT);
this._isPlaying=false;
}
};
ThrobberBinding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
ThrobberBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
ThrobberBinding.prototype._setImage=function(url){
this.bindingElement.style.backgroundImage="url(\""+url+"\")";
};
ProgressBarBinding.prototype=new Binding;
ProgressBarBinding.prototype.constructor=ProgressBarBinding;
ProgressBarBinding.superclass=Binding.prototype;
ProgressBarBinding.WIDTH=190;
ProgressBarBinding.NOTCH=9;
ProgressBarBinding._bindingInstance=null;
ProgressBarBinding.notch=function(_112b){
var bar=ProgressBarBinding._bindingInstance;
if(bar!=null){
bar.notch(_112b);
}
};
function ProgressBarBinding(){
this.logger=SystemLogger.getLogger("ProgressBarBinding");
this._cover=null;
return this;
}
ProgressBarBinding.prototype.toString=function(){
return "[ProgressBarBinding]";
};
ProgressBarBinding.prototype.onBindingAttach=function(){
ProgressBarBinding.superclass.onBindingAttach.call(this);
ProgressBarBinding._bindingInstance=this;
this._cover=this.add(CoverBinding.newInstance(this.bindingDocument));
this._cover.setBusy(false);
this._cover.setWidth(ProgressBarBinding.WIDTH);
this.shadowTree.cover=this._cover;
};
ProgressBarBinding.prototype.notch=function(_112d){
_112d=_112d?_112d:1;
var width=this._cover.getWidth()-(ProgressBarBinding.NOTCH*_112d);
this._cover.setWidth(width>=0?width:0);
};
StartMenuItemBinding.prototype=new MenuItemBinding;
StartMenuItemBinding.prototype.constructor=StartMenuItemBinding;
StartMenuItemBinding.superclass=MenuItemBinding.prototype;
function StartMenuItemBinding(){
this.logger=SystemLogger.getLogger("StartMenuItemBinding");
this.type=MenuItemBinding.TYPE_CHECKBOX;
}
StartMenuItemBinding.prototype.toString=function(){
return "[StartMenuItemBinding]";
};
StartMenuItemBinding.prototype.onBindingRegister=function(){
StartMenuItemBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
};
StartMenuItemBinding.prototype.handleBroadcast=function(_112f,arg){
StartMenuItemBinding.superclass.handleBroadcast.call(this,_112f,arg);
switch(_112f){
case BroadcastMessages.COMPOSITE_START:
if(!this.isChecked){
this.check(true);
}
break;
case BroadcastMessages.COMPOSITE_STOP:
if(this.isChecked){
this.uncheck(true);
}
break;
}
};
StartMenuItemBinding.prototype.setChecked=function(_1131,_1132){
StartMenuItemBinding.superclass.setChecked.call(this,_1131,_1132);
if(!_1132){
if(this.isChecked){
EventBroadcaster.broadcast(BroadcastMessages.START_COMPOSITE);
}else{
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}
}
};
StartMenuItemBinding.newInstance=function(_1133){
var _1134=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_1133);
UserInterface.registerBinding(_1134,StartMenuItemBinding);
return UserInterface.getBinding(_1134);
};
KeySetBinding.prototype=new Binding;
KeySetBinding.prototype.constructor=KeySetBinding;
KeySetBinding.superclass=Binding.prototype;
KeySetBinding.keyEventHandlers={};
KeySetBinding.registerKeyEventHandler=function(doc,key,_1137,_1138){
var _1139=KeySetBinding.keyEventHandlers;
if(Interfaces.isImplemented(IKeyEventHandler,_1138,true)==true){
if(_1137!="*"){
_1137=KeySetBinding._sanitizeKeyModifiers(_1137);
}
var code=window.KeyEventCodes[key];
if(!code){
code=key.charCodeAt(0);
}
if(!_1139[doc]){
_1139[doc]={};
}
if(!_1139[doc][code]){
_1139[doc][code]={};
}
_1139[doc][code][_1137]=_1138;
}
};
KeySetBinding.handleKey=function(doc,e){
var _113d=false;
var code=e.keyCode;
var _113f=KeySetBinding.keyEventHandlers;
if(_113f[doc]&&_113f[doc][code]){
var _1140="[default]";
_1140+=code!=KeyEventCodes.VK_SHIFT?e.shiftKey?" shift":"":"";
if(Client.isMac){
_1140+=code!=KeyEventCodes.VK_COMMAND?e.metaKey?" control":"":"";
}else{
_1140+=code!=KeyEventCodes.VK_CONTROL?e.ctrlKey?" control":"":"";
}
var _1141=_113f[doc][code][_1140];
if(_1141==null){
_1141=_113f[doc][code]["*"];
}
if(_1141!=null){
_1141.handleKeyEvent(e);
_113d=true;
}
}
return _113d;
};
KeySetBinding._sanitizeKeyModifiers=function(_1142){
var _1143="[default]";
var mods={};
if(_1142){
new List(_1142.split(" ")).each(function(_1145){
mods[_1145]=true;
});
function check(_1146){
if(mods[_1146]){
_1143+=" "+_1146;
}
}
check("shift");
check("control");
}
return _1143;
};
function KeySetBinding(){
this.logger=SystemLogger.getLogger("KeySetBinding");
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
KeySetBinding.prototype.toString=function(){
return "[KeySetBinding]";
};
KeySetBinding.prototype.onBindingAttach=function(){
KeySetBinding.superclass.onBindingAttach.call(this);
var self=this;
var keys=new List(DOMUtil.getElementsByTagName(this.bindingElement,"key"));
keys.each(function(key){
var _114a=key.getAttribute("oncommand");
var _114b=key.getAttribute("preventdefault")=="true";
KeySetBinding.registerKeyEventHandler(self.bindingDocument,key.getAttribute("key"),key.getAttribute("modifiers"),{handleKeyEvent:function(e){
DOMEvents.stopPropagation(e);
if(_114b){
DOMEvents.preventDefault(e);
}
var _114d=self.bindingWindow.WindowManager;
top.setTimeout(function(){
Binding.evaluate(_114a,self);
},0);
}});
});
};
CursorBinding.prototype=new Binding;
CursorBinding.prototype.constructor=CursorBinding;
CursorBinding.superclass=Binding.prototype;
CursorBinding.fadeIn=function(_114e){
if(_114e instanceof CursorBinding){
_114e.setOpacity(0);
_114e.show();
new Animation({modifier:9,onstep:function(_114f){
_114e.setOpacity(Math.sin(_114f*Math.PI/180));
},onstop:function(){
_114e.setOpacity(1);
}}).play();
}
};
CursorBinding.fadeOut=function(_1150){
if(_1150 instanceof CursorBinding){
new Animation({modifier:9,onstep:function(_1151){
_1150.setOpacity(Math.cos(_1151*Math.PI/180));
},onstop:function(){
_1150.hide();
}}).play();
}
};
CursorBinding.moveOut=function(_1152,_1153,_1154){
if(_1152 instanceof CursorBinding){
_1154.x-=16;
_1154.y-=16;
new Animation({modifier:3,onstep:function(_1155){
var tal=Math.sin(_1155*Math.PI/180);
_1152.setPosition(new Point(((1-tal)*_1153.x)+((0+tal)*_1154.x),((1-tal)*_1153.y)+((0+tal)*_1154.y)));
},onstop:function(){
CursorBinding.fadeOut(_1152);
}}).play();
}
};
function CursorBinding(){
this.logger=SystemLogger.getLogger("CursorBinding");
this._labelBinding=null;
this._opacity=1;
this.isAccepting=true;
return this;
}
CursorBinding.prototype.toString=function(){
return "[CursorBinding]";
};
CursorBinding.prototype.onBindingAttach=function(){
CursorBinding.superclass.onBindingAttach.call(this);
this._labelBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
var image=this.getProperty("image");
if(image!=null){
this.setImage(image);
}
this._stopIndicatorBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
this._stopIndicatorBinding.attachClassName("indicator");
this._stopIndicatorBinding.setImage("${icon:cancel}");
this.hide();
this._stopIndicatorBinding.hide();
};
CursorBinding.prototype.setImage=function(url){
this._labelBinding.setImage(url);
};
CursorBinding.prototype.showAcceptance=function(){
this.isAccepting=true;
if(Client.isMozilla){
this._stopIndicatorBinding.hide();
}else{
var self=this;
setTimeout(function(){
if(self.isAccepting){
self._stopIndicatorBinding.hide();
}
},0);
}
};
CursorBinding.prototype.hideAcceptance=function(){
this.isAccepting=false;
if(Client.isMozilla){
this._stopIndicatorBinding.show();
}else{
var self=this;
setTimeout(function(){
if(!self.isAccepting){
self._stopIndicatorBinding.show();
}
},0);
}
};
CursorBinding.prototype.show=function(){
CursorBinding.superclass.show.call(this);
};
CursorBinding.prototype.setOpacity=function(_115b){
this.bindingElement.style.opacity=new String(_115b);
this._opacity=_115b;
};
CursorBinding.prototype.getOpacity=function(){
return this._opacity;
};
CursorBinding.prototype.setPosition=function(pos){
this.bindingElement.style.left=pos.x+"px";
this.bindingElement.style.top=pos.y+"px";
};
CursorBinding.prototype.getPosition=function(){
return new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
};
CursorBinding.prototype.fadeIn=function(){
CursorBinding.fadeIn(this);
};
CursorBinding.prototype.fadeOut=function(){
CursorBinding.fadeOut(this);
};
CoverBinding.prototype=new Binding;
CoverBinding.prototype.constructor=CoverBinding;
CoverBinding.superclass=Binding.prototype;
CoverBinding.CLASSNAME_TRANSPARENT="transparent";
CoverBinding.fadeOut=function(cover){
function setOpacity(_115e){
cover.bindingElement.style.opacity=new String(_115e);
}
if(cover instanceof CoverBinding){
new Animation({modifier:18,onstep:function(_115f){
if(Binding.exists(cover)){
setOpacity(Math.cos(_115f*Math.PI/180));
}
},onstop:function(){
if(Binding.exists(cover)){
cover.hide();
}
}}).play();
}
};
CoverBinding.fadeIn=function(cover){
function setOpacity(_1161){
cover.bindingElement.style.MozOpacity=new String(_1161);
}
if(cover instanceof CoverBinding){
new Animation({modifier:18,onstart:function(){
if(Binding.exists(cover)){
setOpacity(0);
cover.show();
}
},onstep:function(_1162){
if(Binding.exists(cover)){
setOpacity(Math.sin(_1162*Math.PI/180));
}
},onstop:function(){
setOpacity(1);
}}).play();
}
};
function CoverBinding(){
this.logger=SystemLogger.getLogger("CoverBinding");
this._isBusy=true;
this._isTransparent=false;
this._position=null;
return this;
}
CoverBinding.prototype.toString=function(){
return "[CoverBinding]";
};
CoverBinding.prototype.onBindingRegister=function(){
CoverBinding.superclass.onBindingRegister.call(this);
if(this.getProperty("blockevents")){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
this.addEventListener(DOMEvents.MOUSEMOVE);
this.addEventListener(DOMEvents.CLICK);
this.addEventListener(DOMEvents.DOUBLECLICK);
}
if(this.getProperty("transparent")==true){
this.setTransparent(true);
}
if(this.getProperty("busy")==false){
this._isBusy=false;
}
if(this._isBusy){
this.bindingElement.style.cursor="wait";
}
};
CoverBinding.prototype.show=function(){
CoverBinding.superclass.show.call(this);
if(this._isBusy&&this.isVisible){
this.addEventListener(DOMEvents.MOUSEMOVE);
}
};
CoverBinding.prototype.hide=function(){
CoverBinding.superclass.hide.call(this);
if(this._isBusy&&!this.isVisible&&this._position){
UncoverBinding.uncover(this._position);
this.removeEventListener(DOMEvents.MOUSEMOVE);
}
};
CoverBinding.prototype.handleEvent=function(e){
CoverBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEMOVE:
this._position=DOMUtil.getUniversalMousePosition(e);
break;
}
};
CoverBinding.prototype.setBusy=function(_1164){
if(_1164!=this._isBusy){
if(_1164){
this.bindingElement.style.cursor="wait";
}else{
this.bindingElement.style.cursor="default";
}
this._isBusy=_1164;
}
};
CoverBinding.prototype.setTransparent=function(_1165){
if(_1165!=this._isTransparent){
if(_1165){
this.attachClassName(CoverBinding.CLASSNAME_TRANSPARENT);
}else{
this.detachClassName(CoverBinding.CLASSNAME_TRANSPARENT);
}
this._isTransparent=_1165;
}
};
CoverBinding.prototype.setWidth=function(width){
if(width>=0){
this.bindingElement.style.width=new String(width+"px");
}
};
CoverBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
CoverBinding.prototype.setHeight=function(_1167){
if(_1167>=0){
this.bindingElement.style.height=new String(_1167+"px");
}
};
CoverBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
CoverBinding.newInstance=function(_1168){
var _1169=DOMUtil.createElementNS(Constants.NS_UI,"ui:cover",_1168);
return UserInterface.registerBinding(_1169,CoverBinding);
};
UncoverBinding.prototype=new Binding;
UncoverBinding.prototype.constructor=UncoverBinding;
UncoverBinding.superclass=Binding.prototype;
UncoverBinding._bindingInstance=null;
UncoverBinding.uncover=function(pos){
var _116b=UncoverBinding._bindingInstance;
if(Binding.exists(_116b)){
_116b.setPosition(pos);
}
};
function UncoverBinding(){
this.logger=SystemLogger.getLogger("UncoverBinding");
UncoverBinding._bindingInstance=this;
}
UncoverBinding.prototype.toString=function(){
return "[UncoverBinding]";
};
UncoverBinding.prototype.setPosition=function(pos){
this.bindingElement.style.display="block";
var dim=this.boxObject.getDimension();
pos.x-=0.5*dim.w;
pos.y-=0.5*dim.h;
pos.x=pos.x<0?0:pos.x;
pos.y=pos.y<0?0:pos.y;
this.bindingElement.style.left=String(pos.x)+"px";
this.bindingElement.style.top=String(pos.y)+"px";
this.bindingElement.style.cursor="wait";
var self=this;
setTimeout(function(){
self.bindingElement.style.cursor="default";
self.bindingElement.style.display="none";
},0);
};
TheatreBinding.prototype=new Binding;
TheatreBinding.prototype.constructor=TheatreBinding;
TheatreBinding.superclass=Binding.prototype;
TheatreBinding.CLASSNAME_INITIALIZED="initialized";
function TheatreBinding(){
this._isPlaying=false;
this._isFading=false;
this._canvas=null;
return this;
}
TheatreBinding.prototype.toString=function(){
return "[TheatreBinding]";
};
TheatreBinding.prototype.onBindingAttach=function(){
TheatreBinding.superclass.onBindingAttach.call(this);
this._canvas=document.createElement("canvas");
this.bindingElement.appendChild(this._canvas);
};
TheatreBinding.prototype.play=function(_116f){
this._isFading=_116f==true;
if(!this._isPlaying){
Application.lock(this);
this.show();
this._isPlaying=true;
if(this._isFading){
this._fade();
}
}
};
TheatreBinding.prototype._fade=function(){
var _1170=this._canvas.getContext("2d");
var alpha=parseInt(0);
TheatreBinding._interval=top.setInterval(function(){
if(alpha<0.5){
_1170.fillStyle="rgba(0,0,0,"+new String(alpha)+")";
_1170.clearRect(0,0,300,150);
_1170.fillRect(0,0,300,150);
alpha+=0.002;
}else{
top.clearInterval(TheatreBinding._interval);
TheatreBinding._interval=null;
}
},50);
};
TheatreBinding.prototype.stop=function(){
if(this._isPlaying){
if(this._isFading){
if(TheatreBinding._interval!=null){
top.clearInterval(TheatreBinding._interval);
}
var _1172=this._canvas.getContext("2d");
_1172.clearRect(0,0,300,150);
}
Application.unlock(this,true);
this.hide();
this._isPlaying=false;
}
};
SourceCodeViewerBinding.prototype=new WindowBinding;
SourceCodeViewerBinding.prototype.constructor=SourceCodeViewerBinding;
SourceCodeViewerBinding.superclass=WindowBinding.prototype;
SourceCodeViewerBinding.ACTION_INITIALIZED="sourcecodeviewer initialized";
SourceCodeViewerBinding.URL_DEFAULT="${root}/content/misc/viewers/sourcecodeviewer/viewsourcecontent.aspx";
SourceCodeViewerBinding.syntax={XML:"xml"};
SourceCodeViewerBinding.stylesheets={"xml":Resolver.resolve("${root}/transformations/viewsource-xml.xsl")};
function SourceCodeViewerBinding(){
this.logger=SystemLogger.getLogger("SourceCodeViewerBinding");
this._syntax=null;
this._transformer=null;
}
SourceCodeViewerBinding.prototype.toString=function(){
return "[SourceCodeViewerBinding]";
};
SourceCodeViewerBinding.prototype.onBindingAttach=function(){
this._syntax=this.getProperty("syntax");
switch(this._syntax){
case SourceCodeViewerBinding.syntax.XML:
var _1173=SourceCodeViewerBinding.stylesheets[this._syntax];
this._transformer=new XSLTransformer();
this._transformer.importStylesheet(_1173);
break;
default:
throw "SourceCodeViewer: Syntax error!";
this._syntax=null;
break;
}
var _1174=DOMUtil.getElementsByTagName(this.bindingElement,"textarea").item(0);
if(_1174){
this._startcontent=_1174.value;
}
this.setURL(SourceCodeViewerBinding.URL_DEFAULT);
this.addActionListener(WindowBinding.ACTION_ONLOAD);
SourceCodeViewerBinding.superclass.onBindingAttach.call(this);
};
SourceCodeViewerBinding.prototype.handleAction=function(_1175){
SourceCodeViewerBinding.superclass.handleAction.call(this,_1175);
switch(_1175.type){
case WindowBinding.ACTION_ONLOAD:
if(_1175.target==this){
if(this._startcontent){
this.view(this._startcontent);
}
this.dispatchAction(SourceCodeViewerBinding.ACTION_INITIALIZED);
_1175.consume();
}
break;
}
SourceCodeViewerBinding.superclass.handleAction.call(this,_1175);
};
SourceCodeViewerBinding.prototype.view=function(arg){
switch(this._syntax){
case SourceCodeViewerBinding.syntax.XML:
this._viewXML(arg);
break;
}
};
SourceCodeViewerBinding.prototype._viewXML=function(arg){
var doc=null;
if(arg){
if(typeof arg==Types.STRING){
doc=XMLParser.parse(arg);
}else{
if(arg.nodeType&&arg.nodeType==Node.DOCUMENT_NODE){
doc=object;
}
}
}
if(doc){
var _1179=this._transformer.transformToString(doc);
this._inject(_1179);
}
};
SourceCodeViewerBinding.prototype._viewHTML=function(arg){
};
SourceCodeViewerBinding.prototype._viewJavascript=function(arg){
};
SourceCodeViewerBinding.prototype._inject=function(_117c){
this.getContentDocument().body.innerHTML=_117c;
};
PersistanceBinding.prototype=new Binding;
PersistanceBinding.prototype.constructor=PersistanceBinding;
PersistanceBinding.superclass=Binding.prototype;
PersistanceBinding.USERDATAKEY="persistance";
PersistanceBinding.GLOBALSTOREKEY=document.location.host;
PersistanceBinding.TEMPLATE="storagetemplates/persistance.xml";
function PersistanceBinding(){
this.logger=SystemLogger.getLogger("PersistanceBinding");
this._resolver=null;
return this;
}
PersistanceBinding.prototype.toString=function(){
return "[PersistanceBinding]";
};
PersistanceBinding.prototype.getPersistanceMap=function(){
var doc=null;
var map=null;
if(Client.isExplorer==true){
doc=this._getDocExplorer();
}else{
doc=this._getDocMozilla();
}
if(doc!=null){
this._document=doc;
this.logger.fine(DOMSerializer.serialize(doc,true));
map=this._getPersistanceMap(this._document);
}
return map;
};
PersistanceBinding.prototype.persist=function(map){
var doc=this._getPersistanceDoc(map);
alert(DOMSerializer.serialize(doc,true));
if(Client.isExplorer==true){
this._persistDocExplorer(doc);
}else{
this._persistDocMozilla(doc);
}
};
PersistanceBinding.prototype._getPersistanceMap=function(doc){
var map={};
if(this._resolver==null){
this._resolver=new XPathResolver();
this._resolver.setNamespacePrefixResolver({"p":Constants.NS_PERSISTANCE});
}
var list=this._resolver.resolveAll("p:persist",doc.documentElement);
while(list.hasNext()){
var _1184=list.getNext();
var id=_1184.getAttribute("id");
map[id]={};
var atts=this._resolver.resolveAll("p:att",_1184);
while(atts.hasNext()){
var att=atts.getNext();
var name=att.getAttribute("name");
var value=att.getAttribute("value");
map[id][name]=value;
}
}
return map;
};
PersistanceBinding.prototype._getPersistanceDoc=function(map){
var doc=this._document;
var elm=doc.documentElement;
elm.setAttribute("version",Installation.versionString);
while(elm.hasChildNodes()){
elm.removeChild(elm.lastChild);
}
for(var id in map){
var _118e=DOMUtil.createElementNS(Constants.NS_PERSISTANCE,"persist",doc);
_118e.setAttribute("id",id);
for(var name in map[id]){
var att=DOMUtil.createElementNS(Constants.NS_PERSISTANCE,"att",doc);
att.setAttribute("name",name);
att.setAttribute("value",map[id][name]);
_118e.appendChild(att);
}
elm.appendChild(_118e);
}
return doc;
};
PersistanceBinding.prototype._getDocExplorer=function(){
this.bindingElement.load(PersistanceBinding.USERDATAKEY);
var doc=this.bindingElement.XMLDocument;
if(doc.documentElement.namespaceURI==""){
var file=PersistanceBinding.TEMPLATE;
var text=Templates.getTemplateElementText(file);
doc.loadXML(text);
var elm=doc.documentElement;
while(elm.hasChildNodes()){
elm.removeChild(elm.firstChild);
}
}
return doc;
};
PersistanceBinding.prototype._persistDocExplorer=function(doc){
var text=DOMSerializer.serialize(doc,true);
this.bindingElement.XMLDocument.loadXML(text);
this.bindingElement.save(PersistanceBinding.USERDATAKEY);
};
PersistanceBinding.prototype._getDocMozilla=function(){
delete window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance;
var doc=null;
var _1198=window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance;
if(_1198){
doc=XMLParser.parse(_1198);
}else{
var file=PersistanceBinding.TEMPLATE;
doc=Templates.getTemplateDocument(file);
var elm=doc.documentElement;
while(elm.hasChildNodes()){
elm.removeChild(elm.lastChild);
}
}
return doc;
};
PersistanceBinding.prototype._persistDocMozilla=function(doc){
var _119c=DOMSerializer.serialize(doc,true);
window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance=_119c;
};
LocalizationSelectorBinding.prototype=new SelectorBinding;
LocalizationSelectorBinding.prototype.constructor=LocalizationSelectorBinding;
LocalizationSelectorBinding.superclass=SelectorBinding.prototype;
function LocalizationSelectorBinding(){
this.logger=SystemLogger.getLogger("LocalizationSelectorBinding");
return this;
}
LocalizationSelectorBinding.prototype.toString=function(){
return "[LocalizationSelectorBinding]";
};
LocalizationSelectorBinding.prototype.onBindingAttach=function(){
LocalizationSelectorBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.UPDATE_LANGUAGES);
this.subscribe(BroadcastMessages.TOLANGUAGE_UPDATED);
this._populateFromLanguages(Localization.languages);
};
LocalizationSelectorBinding.prototype.handleBroadcast=function(_119d,arg){
LocalizationSelectorBinding.superclass.handleBroadcast.call(this,_119d,arg);
switch(_119d){
case BroadcastMessages.TOLANGUAGE_UPDATED:
ExplorerBinding.restoreFocuseNodes();
break;
case BroadcastMessages.UPDATE_LANGUAGES:
this._populateFromLanguages(arg);
break;
case BroadcastMessages.SAVE_ALL_DONE:
this.unsubscribe(BroadcastMessages.SAVE_ALL_DONE);
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
this._invokeAction();
break;
}
};
LocalizationSelectorBinding.prototype._populateFromLanguages=function(list){
if(list!=null&&list.hasEntries()&&list.getLength()>1){
var _11a0=new List();
list.each(function(lang){
_11a0.add(new SelectorBindingSelection(lang.Name,lang.SerializedActionToken,lang.IsCurrent,null));
});
this.populateFromList(_11a0);
this.show();
}else{
this.hide();
}
};
LocalizationSelectorBinding.prototype.populateFromList=function(list){
LocalizationSelectorBinding.superclass.populateFromList.call(this,list);
this._backupSelectionValue=this._selectionValue;
};
LocalizationSelectorBinding.prototype.onValueChange=function(){
ExplorerBinding.saveFocusedNodes();
var self=this;
Dialog.warning(StringBundle.getString(StringBundle.UI,"UserElementProvider.ChangeOtherActiveLocaleDialogTitle"),StringBundle.getString(StringBundle.UI,"UserElementProvider.ChangeOtherActiveLocaleDialogText"),Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_11a4){
switch(_11a4){
case Dialog.RESPONSE_ACCEPT:
if(Application.hasDirtyDockTabs()){
self.subscribe(BroadcastMessages.SAVE_ALL_DONE);
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL);
}else{
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
self._invokeAction();
}
self._backupSelectionValue=self.getValue();
break;
case Dialog.RESPONSE_CANCEL:
self.selectByValue(self._backupSelectionValue);
break;
}
}});
};
LocalizationSelectorBinding.prototype._invokeAction=function(){
var token=this.getValue();
var root=SystemNode.taggedNodes.get("Root");
var _11a7=new SystemAction({Label:"Generated Action: Change Locale",ActionToken:token});
SystemAction.invoke(_11a7,root);
};
ResponseBinding.prototype=new Binding;
ResponseBinding.prototype.constructor=ResponseBinding;
ResponseBinding.superclass=Binding.prototype;
ResponseBinding.ACTION_SUCCESS="response success";
ResponseBinding.ACTION_OOOOKAY="response ooookay";
ResponseBinding.ACTION_FAILURE="response failure";
function ResponseBinding(){
this.logger=SystemLogger.getLogger("ResponseBinding");
return this;
}
ResponseBinding.prototype.toString=function(){
return "[ResponseBinding]";
};
ResponseBinding.prototype.onBindingAttach=function(){
ResponseBinding.superclass.onBindingAttach.call(this);
this.propertyMethodMap["checksum"]=this._update;
this._update();
};
ResponseBinding.prototype._update=function(){
if(this.getProperty("dirty")===true){
this.dispatchAction(Binding.ACTION_DIRTY);
}
var _11a8=this.getProperty("status");
if(_11a8!=null){
switch(_11a8){
case "success":
this.dispatchAction(ResponseBinding.ACTION_SUCCESS);
break;
case "failure":
this.dispatchAction(ResponseBinding.ACTION_FAILURE);
break;
case "ooookay":
this.dispatchAction(ResponseBinding.ACTION_OOOOKAY);
break;
}
}
var index=this.getProperty("messagequeueindex");
if(index!=null){
if(index>MessageQueue.index){
MessageQueue.update(true);
}
}
};
function UserInterfaceMapping(map){
this.logger=SystemLogger.getLogger("UserInterfaceMapping");
if(Client.isExplorer){
this.map={};
for(var m in map){
this.map[m.replace("ui:","")]=map[m];
}
}else{
this.map=map;
}
}
UserInterfaceMapping.prototype.merge=function(_11ac){
for(var _11ad in _11ac.map){
this.map[_11ad]=_11ac.getBindingImplementation(_11ad);
}
};
UserInterfaceMapping.prototype.getBindingImplementation=function(_11ae){
var _11af=null;
var name=_11ae.nodeName.toLowerCase();
if(this.map[name]){
_11af=this.map[name];
}
return _11af;
};
var UserInterface=new function(){
var _11b1=(Client.isMozilla?MozEditorTextBoxBinding:IEEditorTextBoxBinding);
var _11b2=new UserInterfaceMapping({"body":RootBinding,"ui:binding":Binding,"ui:box":Binding,"ui:dialog":DialogBinding,"ui:dialoghead":DialogHeadBinding,"ui:dialogbody":DialogBodyBinding,"ui:dialogmatrix":DialogMatrixBinding,"ui:dialogset":DialogSetBinding,"ui:dialogborder":DialogBorderBinding,"ui:dialogcover":DialogCoverBinding,"ui:titlebar":DialogTitleBarBinding,"ui:titlebarbody":DialogTitleBarBodyBinding,"ui:window":WindowBinding,"ui:controlgroup":ControlGroupBinding,"ui:control":ControlBinding,"ui:menubar":MenuBarBinding,"ui:menu":MenuBinding,"ui:menubody":MenuBodyBinding,"ui:menugroup":MenuGroupBinding,"ui:menuitem":MenuItemBinding,"ui:menupopup":MenuPopupBinding,"ui:tabbox":TabBoxBinding,"ui:tabs":TabsBinding,"ui:tab":TabBinding,"ui:tabpanels":TabPanelsBinding,"ui:tabpanel":TabPanelBinding,"ui:splitbox":SplitBoxBinding,"ui:splitpanel":SplitPanelBinding,"ui:splitter":SplitterBinding,"ui:decks":DecksBinding,"ui:deck":DeckBinding,"ui:toolbar":ToolBarBinding,"ui:toolbargroup":ToolBarGroupBinding,"ui:toolbarbody":ToolBarBodyBinding,"ui:toolbarbutton":ToolBarButtonBinding,"ui:toolbarlabel":ToolBarLabelBinding,"ui:labelbox":LabelBinding,"ui:text":TextBinding,"ui:clickbutton":ClickButtonBinding,"ui:tree":TreeBinding,"ui:treebody":TreeBodyBinding,"ui:treenode":TreeNodeBinding,"ui:flexbox":FlexBoxBinding,"ui:scrollbox":ScrollBoxBinding,"ui:popupset":PopupSetBinding,"ui:popup":PopupBinding,"ui:matrix":MatrixBinding,"ui:sourceeditor":CodeMirrorEditorBinding,"ui:visualeditor":VisualEditorBinding,"ui:visualmultieditor":VisualMultiEditorBinding,"ui:visualmultitemplateeditor":VisualMultiTemplateEditorBinding,"ui:wysiwygeditortoolbarbutton":EditorToolBarButtonBinding,"ui:dock":DockBinding,"ui:docktabs":DockTabsBinding,"ui:docktab":DockTabBinding,"ui:dockpanels":DockPanelsBinding,"ui:dockpanel":DockPanelBinding,"ui:page":PageBinding,"ui:editorpage":EditorPageBinding,"ui:dialogpage":DialogPageBinding,"ui:pagebody":DialogPageBodyBinding,"ui:wizardpage":WizardPageBinding,"ui:explorer":ExplorerBinding,"ui:explorerdecks":ExplorerDecksBinding,"ui:explorerdeck":ExplorerDeckBinding,"ui:explorersplitter":ExplorerSplitterBinding,"ui:explorermenu":ExplorerMenuBinding,"ui:explorertoolbar":ExplorerToolBarBinding,"ui:explorertoolbarbutton":ExplorerToolBarButtonBinding,"ui:stagecontainer":StageContainerBinding,"ui:stage":StageBinding,"ui:stagedecks":StageDecksBinding,"ui:stagedeck":StageDeckBinding,"ui:viewset":ViewSetBinding,"ui:view":ViewBinding,"ui:broadcasterset":BroadcasterSetBinding,"ui:broadcaster":BroadcasterBinding,"ui:fields":FieldsBinding,"ui:fieldgroup":FieldGroupBinding,"ui:field":FieldBinding,"ui:fielddesc":FieldDescBinding,"ui:fielddata":FieldDataBinding,"ui:fieldhelp":FieldHelpBinding,"ui:datainput":DataInputBinding,"ui:selector":SelectorBinding,"ui:simpleselector":SimpleSelectorBinding,"ui:multiselector":MultiSelectorBinding,"ui:datainputselector":DataInputSelectorBinding,"ui:datainputdialog":DataInputDialogBinding,"ui:urlinputdialog":UrlInputDialogBinding,"ui:datainputbutton":DataInputButtonBinding,"ui:textbox":TextBoxBinding,"ui:editortextbox":_11b1,"ui:radiodatagroup":RadioDataGroupBinding,"ui:radio":RadioDataBinding,"ui:checkbutton":CheckButtonBinding,"ui:checkbox":CheckBoxBinding,"ui:checkboxgroup":CheckBoxGroupBinding,"ui:datadialog":DataDialogBinding,"ui:postbackdialog":PostBackDataDialogBinding,"ui:nullpostbackdialog":NullPostBackDataDialogBinding,"ui:htmldatadialog":HTMLDataDialogBinding,"ui:functioneditor":FunctionEditorDataBinding,"ui:parametereditor":ParameterEditorDataBinding,"ui:keyset":KeySetBinding,"ui:cover":CoverBinding,"ui:uncover":UncoverBinding,"ui:cursor":CursorBinding,"ui:dialogtoolbar":DialogToolBarBinding,"ui:focus":FocusBinding,"ui:balloonset":BalloonSetBinding,"ui:balloon":BalloonBinding,"ui:error":ErrorBinding,"ui:throbber":ThrobberBinding,"ui:progressbar":ProgressBarBinding,"ui:lazybinding":LazyBindingBinding,"ui:sourcecodeviewer":SourceCodeViewerBinding,"ui:theatre":TheatreBinding,"ui:persistance":PersistanceBinding,"ui:filepicker":FilePickerBinding,"ui:request":RequestBinding,"ui:response":ResponseBinding});
var _11b3=SystemLogger.getLogger("UserInterface");
var keys={};
this.registerBinding=function(_11b5,impl){
var _11b7=null;
if(!this.hasBinding(_11b5)){
var _11b8=DOMUtil.getParentWindow(_11b5);
if(DOMUtil.getLocalName(_11b5)!="bindingmapping"){
if(!impl&&_11b5.getAttribute("binding")!=null){
var _11b9=_11b5.getAttribute("binding");
impl=_11b8[_11b9];
if(impl==null){
throw "No such binding in scope: "+_11b9;
}
}
if(!impl){
var _11ba=_11b8.DocumentManager;
if(_11ba){
var _11bb=_11ba.customUserInterfaceMapping;
if(_11bb){
impl=_11bb.getBindingImplementation(_11b5);
}
}
}
if(!impl){
impl=_11b2.getBindingImplementation(_11b5);
}
if(impl!=null&&!Application.isMalFunctional){
try{
_11b7=new impl();
}
catch(exception){
Application.isMalFunctional=true;
alert("No such binding!\n"+exception.message+(exception.stack?"\n"+exception.stack:""));
throw (exception);
}
}
if(_11b7){
var key=KeyMaster.getUniqueKey();
_11b5.setAttribute("key",key);
_11b7.key=key;
if(!_11b5.id){
_11b5.id=key;
}
keys[key]={element:_11b5,binding:_11b7};
_11b7.onBindingRegister();
}
}
}
return _11b7;
};
this.unRegisterBinding=function(_11bd){
terminate(_11bd);
};
function terminate(_11be){
if(Binding.exists(_11be)==true){
var key=_11be.key;
Binding.destroy(_11be);
if(key){
if(keys[key]){
keys[key].binding=null;
keys[key].element=null;
delete keys[key];
_11be=null;
}else{
_11b3.error("URGH: "+key);
}
}
}
}
this.getElement=function(_11c0){
var _11c1=null;
if(keys[_11c0.key]){
_11c1=keys[_11c0.key].element;
}
return _11c1;
};
this.getBinding=function(_11c2){
var _11c3=null;
if(_11c2&&_11c2.nodeType==Node.ELEMENT_NODE){
try{
var key=_11c2.getAttribute("key");
if(key&&keys[key]){
_11c3=keys[key].binding;
}
}
catch(exception){
alert("getBinding exception occured on element:\n\n\t\t"+_11c2);
if(exception.stack){
alert(exception.stack);
}
}
}
return _11c3;
};
this.getBindingByKey=function(key){
var _11c6=null;
if(keys[key]){
_11c6=keys[key].binding;
}
return _11c6;
};
this.hasBinding=function(_11c7){
return this.getBinding(_11c7)!=null;
};
this.isBindingVisible=function(_11c8){
var _11c9=Application.isOperational;
if(_11c9==true){
var _11ca=new Crawler();
_11ca.type=NodeCrawler.TYPE_ASCENDING;
_11ca.id="visibilitycrawler";
_11ca.addFilter(function(_11cb){
var b=UserInterface.getBinding(_11cb);
var res=0;
if(!b.isVisible){
_11c9=false;
res=NodeCrawler.STOP_CRAWLING;
}
return res;
});
_11ca.crawl(_11c8.bindingElement);
_11ca.dispose();
}
return _11c9;
};
var _11ce=null;
this.getBindingCount=function(){
var count=0;
for(var key in keys){
count++;
}
return count;
};
this.setPoint=function(){
_11ce={};
for(var key in keys){
_11ce[key]=true;
}
};
this.getPoint=function(){
var _11d2=null;
if(_11ce){
_11d2=new List();
for(var key in keys){
if(!_11ce[key]){
_11d2.add(key);
}
}
}
return _11d2;
};
this.clearPoint=function(){
_11ce=null;
};
this.trackUndisposedBindings=function(){
var _11d4=null;
for(var key in keys){
var entry=keys[key];
if(!entry.binding||!entry.element||!Binding.exists(entry.binding)){
if(!_11d4){
_11d4="Bindings illdisposed: ";
}
_11d4+=entry.binding+" ";
}
}
if(_11d4!=null){
_11b3.error(_11d4);
}
};
this.autoTrackDisposedBindings=function(_11d7){
if(_11d7){
if(!window.disposedbindingtrackinterval){
window.disposedbindingtrackinterval=window.setInterval(UserInterface.trackUndisposedBindings,10000);
this.trackUndisposedBindings();
}
}else{
if(window.disposedbindingtrackinterval){
window.clearInterval(window.disposedbindingtrackinterval);
window.disposedbindingtrackinterval=null;
}
}
};
};
function SOAPMessage(){
}
SOAPMessage.prototype={document:null,envelope:null,header:null,body:null,fault:null};
SOAPRequest.prototype=new SOAPMessage;
SOAPRequest.prototype.constructor=SOAPRequest;
SOAPRequest.superclass=SOAPMessage.prototype;
SOAPRequest.resolver=new XPathResolver();
SOAPRequest.resolver.setNamespacePrefixResolver({"soap":Constants.NS_ENVELOPE,"xhtml":Constants.NS_XHTML});
SOAPRequest.newInstance=function(_11d8,_11d9){
var _11da=_11d8+"/"+_11d9;
var _11db=new SOAPRequest(_11da);
var _11dc=SOAPRequest.resolver;
_11db.document=Templates.getTemplateDocument("soapenvelope.xml");
_11db.envelope=_11dc.resolve("soap:Envelope",_11db.document);
_11db.header=_11dc.resolve("soap:Header",_11db.envelope);
_11db.body=_11dc.resolve("soap:Body",_11db.envelope);
return _11db;
};
SOAPRequest._parseResponse=function(_11dd){
var _11de=null;
var _11df=false;
var doc=_11dd.responseXML;
if(doc!=null&&doc.documentElement!=null){
switch(doc.documentElement.namespaceURI){
case Constants.NS_ENVELOPE:
_11de=SOAPRequestResponse.newInstance(_11dd.responseXML);
if(Application.isOffLine){
EventBroadcaster.broadcast(BroadcastMessages.SERVER_ONLINE);
}
break;
case Constants.NS_XHTML:
if(!Application.isOffLine){
var body=SOAPRequest.resolver.resolve("xhtml:html/xhtml:body",_11dd.responseXML);
if(body&&body.getAttribute("id")=="offline"){
_11df=true;
}
}
break;
case Constants.NS_DOMPARSEERROR:
var cry=DOMSerializer.serialize(doc);
SystemLogger.getLogger("SOAPRequest._parseResponse (static)").error(cry);
if(Application.isDeveloperMode){
alert("SOAPRequest parseerror! \n\n"+cry);
}
break;
default:
if(Application.isDeveloperMode){
alert("SOAPRequest: "+doc.documentElement.namespaceURI);
}
break;
}
}else{
if(!Application.isOffLine&&!Application.isLoggedOut){
var text=_11dd.responseText;
if(_11dd.status==503||text.indexOf("id=\"offline\"")>-1){
_11df=true;
}else{
var cry="Invalid SOAP response: \n\n"+_11dd.responseText;
SystemLogger.getLogger("SOAPRequest._parseResponse (static)").error(cry);
if(Application.isDeveloperMode){
alert("Invalid SOAP response");
window.open("about:blank").document.write(_11dd.responseText);
}
}
}
}
if(_11df==true){
EventBroadcaster.broadcast(BroadcastMessages.SERVER_OFFLINE);
}
return _11de;
};
function SOAPRequest(_11e4){
this.logger=SystemLogger.getLogger("SOAPRequest");
this.action=_11e4;
return this;
}
SOAPRequest.prototype.invoke=function(url){
var _11e6=DOMUtil.getXMLHTTPRequest();
var _11e7=null;
_11e6.open("post",url,false);
_11e6.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_11e6.setRequestHeader("SOAPAction",this.action);
try{
_11e6.send(this.document);
_11e7=SOAPRequest._parseResponse(_11e6);
}
catch(exception){
var error="Dysfuntion in SOAP invoke: "+url;
if(this.document!=null){
error+="\n"+DOMSerializer.serialize(this.document,true);
}
this.logger.error(error);
throw exception;
}
_11e6=null;
return _11e7;
};
SOAPRequest.prototype.asyncInvoke=function(url,_11ea){
var _11eb=DOMUtil.getXMLHTTPRequest();
_11eb.open("post",url,true);
_11eb.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_11eb.setRequestHeader("SOAPAction",this.action);
_11eb.onreadystatechange=function(){
if(_11eb.readyState==4){
var _11ec=SOAPRequest._parseResponse(_11eb);
_11ea(_11ec);
_11eb=null;
}
};
_11eb.send(this.document);
};
SOAPRequest.prototype.dispose=function(){
for(var _11ed in this){
this[_11ed]=null;
}
};
SOAPRequestResponse.prototype=new SOAPMessage;
SOAPRequestResponse.prototype.constructor=SOAPRequestResponse;
SOAPRequestResponse.superclass=SOAPMessage.prototype;
function SOAPRequestResponse(){
}
SOAPRequestResponse.logger=SystemLogger.getLogger("SOAPRequestResponse");
SOAPRequestResponse.resolver=new XPathResolver();
SOAPRequestResponse.resolver.setNamespacePrefixResolver({"soap":Constants.NS_ENVELOPE});
SOAPRequestResponse.newInstance=function(doc){
var _11ef=null;
if(doc&&doc.documentElement){
_11ef=new SOAPRequestResponse();
var _11f0=SOAPRequestResponse.resolver;
_11ef.document=doc;
_11ef.envelope=_11f0.resolve("soap:Envelope",_11ef.document);
_11ef.header=_11f0.resolve("soap:Header",_11ef.envelope);
_11ef.body=_11f0.resolve("soap:Body",_11ef.envelope);
var fault=_11f0.resolve("soap:Fault",_11ef.body);
if(fault){
SOAPRequestResponse.logger.fatal(DOMSerializer.serialize(fault,true));
_11ef.fault={element:fault,faultNamespaceURI:fault.namespaceURI,faultCode:DOMUtil.getTextContent(_11f0.resolve("faultcode",fault)),faultString:DOMUtil.getTextContent(_11f0.resolve("faultstring",fault)),detail:fault.getElementsByTagName("detail").item(0)};
}
}
return _11ef;
};
function SOAPFault(_11f2,_11f3,_11f4){
this._operationName=_11f2;
this._operationAddress=_11f3;
this._faultString=_11f4;
}
SOAPFault.prototype.getOperationName=function(){
return this._operationName;
};
SOAPFault.prototype.getOperationAddress=function(){
return this._operationAddress;
};
SOAPFault.prototype.getFaultString=function(){
return this._faultString;
};
SOAPFault.newInstance=function(_11f5,fault){
return new SOAPFault(_11f5.name,_11f5.address,fault.faultString);
};
function SOAPEncoder(wsdl,_11f8){
this.logger=SystemLogger.getLogger("SOAPEncoder");
this._wsdl=wsdl;
this._operation=_11f8;
this._namespace=wsdl.getTargetNamespace();
}
SOAPEncoder.prototype.encode=function(args){
var _11fa=SOAPRequest.newInstance(this._namespace,this._operation);
var root=this._appendElement(_11fa.body,this._operation);
var _11fc=this._wsdl.getSchema();
var _11fd=_11fc.lookup(this._operation);
var _11fe=_11fd.getListedDefinitions();
while(_11fe.hasNext()){
var def=_11fe.getNext();
var elm=this._appendElement(root,def.name);
var val=args.getNext();
this._resolve(elm,def,val);
}
return _11fa;
};
SOAPEncoder.prototype._resolve=function(_1202,_1203,value){
var _1205=this._wsdl.getSchema();
if(_1203.isSimpleValue){
this._appendText(_1202,value,_1203.type=="string");
}else{
var _1206=_1205.lookup(_1203.type);
if(_1206 instanceof SchemaSimpleType){
alert("SOAPEncoder: SchemaSimpleType support not implemented!");
}else{
var defs=_1206.getListedDefinitions();
if(_1206.isArray){
var _1208=new List(value);
var def=defs.getNext();
while(_1208.hasNext()){
var elm=this._appendElement(_1202,def.name);
var val=_1208.getNext();
this._resolve(elm,def,val);
}
}else{
if(typeof value==="undefined"){
this.logger.error("SOAPEncoder: value is undefined");
}else{
while(defs.hasNext()){
try{
var def=defs.getNext();
var elm=this._appendElement(_1202,def.name);
var val=value[def.name];
this._resolve(elm,def,val);
}
catch(exception){
this.logger.error("Mysterius malfunction in "+this._operation+":\n\n"+def.name+": "+value);
}
}
}
}
}
}
};
SOAPEncoder.prototype._appendElement=function(node,name){
var child=DOMUtil.createElementNS(this._namespace,name,node.ownerDocument);
node.appendChild(child);
return child;
};
SOAPEncoder.prototype._appendText=function(_120f,value,_1211){
if(value!=null){
value=new String(value);
var safe=new String("");
var chars=value.split("");
var _1214=false;
var i=0,c;
while(c=chars[i++]){
var _1217=true;
var code=c.charCodeAt(0);
switch(code){
case 9:
case 10:
case 13:
_1217=false;
break;
default:
if((code>=32&&code<=55295)||(code>=57344&&code<=65533)||(code>=65536&&code<=1114111)){
_1217=false;
}
break;
}
if(!_1217){
safe+=c;
}else{
_1214=true;
}
}
if(_1214){
this.logger.debug("Illegal XML character(s) was deleted from the string: "+value);
}
_120f.appendChild(_120f.ownerDocument.createTextNode(safe));
}
};
function SOAPDecoder(wsdl,_121a){
this._wsdl=wsdl;
this._operation=_121a;
this._resolver=new XPathResolver();
this._resolver.setNamespacePrefixResolver({"result":wsdl.getTargetNamespace()});
}
SOAPDecoder.prototype.resolve=function(xpath,node){
return this._resolver.resolve("result:"+xpath,node);
};
SOAPDecoder.prototype.resolveAll=function(xpath,node){
return this._resolver.resolveAll("result:"+xpath,node);
};
SOAPDecoder.prototype.decode=function(_121f){
var _1220=null;
var _1221=this._wsdl.getSchema();
var id=this._operation+"Response";
var _1223=this.resolve(id,_121f.body);
var _1224=_1221.lookup(id);
var _1225=_1224.getListedDefinitions();
while(!_1220&&_1225.hasNext()){
var def=_1225.getNext();
var elm=this.resolve(def.name,_1223);
if(def.type==SchemaDefinition.TYPE_XML_DOCUMENT){
_1220=DOMUtil.getDOMDocument();
var e=elm.getElementsByTagName("*").item(0);
_1220.appendChild(_1220.importNode(e,true));
}else{
_1220=this._compute(elm,def);
}
}
return _1220;
};
SOAPDecoder.prototype._compute=function(_1229,_122a){
var _122b=null;
var _122c=this._wsdl.getSchema();
if(_122a.isSimpleValue){
_122b=this._getSimpleValue(_1229,_122a.type);
}else{
var _122d=_122c.lookup(_122a.type);
if(_122d instanceof SchemaSimpleType){
_122b=this._getSimpleValue(_1229,_122d.restrictionType);
}else{
var defs=_122d.getListedDefinitions();
if(_122d.isArray){
_122b=[];
var def=defs.getNext();
var elms=this.resolveAll(def.type,_1229);
while(elms.hasNext()){
var elm=elms.getNext();
_122b.push(this._compute(elm,def));
}
}else{
if(_1229==null){
_122b=null;
}else{
_122b={};
defs.reset();
while(defs.hasNext()){
var def=defs.getNext();
var elm=this.resolve(def.name,_1229);
if(elm){
_122b[def.name]=this._compute(elm,def);
}else{
if(def.isRequired){
throw new Error("SOAPDecoder: invalid SOAP response.");
}
}
}
}
}
}
}
return _122b;
};
SOAPDecoder.prototype._getSimpleValue=function(_1232,type){
var _1234=null;
if(_1232!=null&&_1232.firstChild&&_1232.firstChild.nodeType==Node.TEXT_NODE){
if(Client.isMozilla&&_1232.childNodes.length>1){
_1232.normalize();
}
_1234=_1232.firstChild.data;
switch(type){
case Schema.types.STRING:
_1234=_1234;
break;
case Schema.types.INT:
case Schema.types.FLOAT:
case Schema.types.DOUBLE:
_1234=Number(_1234);
break;
case Schema.types.BOOLEAN:
_1234=_1234=="true";
break;
default:
throw ("SOAPDecoder: schema type \""+type+"\" not handled.");
break;
}
}
return _1234;
};
Schema.prototype=new XPathResolver;
Schema.prototype.constructor=Schema;
Schema.superclass=XPathResolver.prototype;
Schema.types={STRING:"string",INT:"int",FLOAT:"float",DOUBLE:"double",BOOLEAN:"boolean"};
Schema.notSupportedException=new Error("Schema: Schema structure not supported!");
function Schema(_1235){
this.logger=SystemLogger.getLogger("Schema");
this._map=this._parseSchema(_1235);
}
Schema.prototype._parseSchema=function(_1236){
this.setNamespacePrefixResolver({"wsdl":Constants.NS_WSDL,"soap":Constants.NS_SOAP,"s":Constants.NS_SCHEMA});
var _1237={};
var entry=null;
var rules=this.resolveAll("s:*[@name]",_1236);
while(rules.hasNext()){
var rule=rules.getNext();
switch(DOMUtil.getLocalName(rule)){
case "element":
entry=new SchemaElementType(this,rule);
break;
case "complexType":
entry=new SchemaComplexType(this,rule);
break;
case "simpleType":
entry=new SchemaSimpleType(this,rule);
break;
}
_1237[rule.getAttribute("name")]=entry;
}
return _1237;
};
Schema.prototype.lookup=function(name){
return this._map[name];
};
SchemaDefinition.TYPE_XML_DOCUMENT="xmldocument";
function SchemaDefinition(_123c){
this.logger=SystemLogger.getLogger("SchemaDefinition");
this.isRequired=null;
this.type=null;
this._parse(_123c);
}
SchemaDefinition.prototype._parse=function(_123d){
var min=_123d.getAttribute("minOccurs");
var max=_123d.getAttribute("maxOccurs");
var type=_123d.getAttribute("type");
this.name=_123d.getAttribute("name");
this.isRequired=min!="0";
if(type){
var split=type.split(":");
var sort=split[0];
var _1243=split[1];
this.isSimpleValue=sort!="tns";
this.type=_1243;
}else{
var elm=_123d.getElementsByTagName("*").item(0);
if(elm&&DOMUtil.getLocalName(elm)=="complexType"&&elm.getAttribute("mixed")=="true"){
elm=elm.getElementsByTagName("*").item(0);
if(elm&&DOMUtil.getLocalName(elm)=="sequence"){
elm=elm.getElementsByTagName("*").item(0);
if(DOMUtil.getLocalName(elm)=="any"){
this.type=SchemaDefinition.TYPE_XML_DOCUMENT;
}
}
}
}
};
function SchemaType(){
}
SchemaType.prototype={};
SchemaElementType.prototype=new SchemaType;
SchemaElementType.prototype.constructor=SchemaElementType;
SchemaElementType.superclass=SchemaType.prototype;
function SchemaElementType(_1245,_1246){
this.logger=SystemLogger.getLogger("SchemaElementType");
this._definitions=new List();
this._parseListedDefinitions(_1245,_1246);
}
SchemaElementType.prototype._parseListedDefinitions=function(_1247,_1248){
var els=_1247.resolveAll("s:complexType/s:sequence/s:element",_1248);
if(els.hasEntries()){
while(els.hasNext()){
this._definitions.add(new SchemaDefinition(els.getNext()));
}
}else{
this.logger.warn("SchemaElementType: Unparsed SchemaDefinition encountered.");
throw Schema.notSupportedException;
}
};
SchemaElementType.prototype.getListedDefinitions=function(){
return this._definitions.copy();
};
SchemaComplexType.prototype=new SchemaType;
SchemaComplexType.prototype.constructor=SchemaComplexType;
SchemaComplexType.superclass=SchemaType.prototype;
function SchemaComplexType(_124a,_124b){
this._definitions=new List();
this._parseListedDefinitions(_124a,_124b);
this.isArray=_124b.getAttribute("name").indexOf("ArrayOf")>-1;
}
SchemaComplexType.prototype._parseListedDefinitions=function(_124c,_124d){
var els=_124c.resolveAll("s:sequence/s:element",_124d);
if(els.hasEntries()){
while(els.hasNext()){
var el=els.getNext();
this._definitions.add(new SchemaDefinition(el));
}
}else{
throw Schema.notSupportedException;
}
};
SchemaComplexType.prototype.getListedDefinitions=function(){
return this._definitions.copy();
};
SchemaSimpleType.prototype=new SchemaType;
SchemaSimpleType.prototype.constructor=SchemaSimpleType;
SchemaSimpleType.superclass=SchemaType.prototype;
function SchemaSimpleType(_1250,_1251){
this.restrictionType=null;
this._parse(_1250,_1251);
}
SchemaSimpleType.prototype._parse=function(_1252,_1253){
var _1254=_1252.resolve("s:restriction",_1253);
if(_1254){
this.restrictionType=_1254.getAttribute("base").split(":")[1];
}else{
throw Schema.notSupportedException;
}
};
WebServiceResolver.prototype=new XPathResolver;
WebServiceResolver.prototype.constructor=WebServiceResolver;
WebServiceResolver.superclass=XPathResolver.prototype;
function WebServiceResolver(url){
this.logger=SystemLogger.getLogger("WebServiceResolver");
this._root=this._getDocumentElement(url);
this._schema=null;
if(this._root){
this.setNamespacePrefixResolver({"wsdl":Constants.NS_WSDL,"soap":Constants.NS_SOAP,"s":Constants.NS_SCHEMA});
this._schema=new Schema(this.resolve("wsdl:types/s:schema",this._root));
}
this._WSDLURL=url;
}
WebServiceResolver.prototype._getDocumentElement=function(url){
var _1257=null;
var _1258=DOMUtil.getXMLHTTPRequest();
_1258.open("get",url,false);
_1258.send(null);
if(_1258.responseXML){
_1257=_1258.responseXML.documentElement;
}else{
alert(_1258.responseText);
throw new Error("WebServiceResolver: Could not read WSDL: "+url);
}
return _1257;
};
WebServiceResolver.prototype.getPortAddress=function(){
return this._WSDLURL.split("?WSDL")[0];
};
WebServiceResolver.prototype.getTargetNamespace=function(){
return this._root.getAttribute("targetNamespace");
};
WebServiceResolver.prototype.getOperations=function(){
var _1259=new List();
var _125a=this.resolveAll("wsdl:portType/wsdl:operation",this._root);
if(_125a.hasEntries()){
while(_125a.hasNext()){
var _125b=_125a.getNext();
var name=_125b.getAttribute("name");
_1259.add(new WebServiceOperation(name,this.getPortAddress(),new SOAPEncoder(this,name),new SOAPDecoder(this,name)));
}
}else{
throw new Error("WebServiceResolver: No portType found.");
}
return _1259;
};
WebServiceResolver.prototype.getSchema=function(){
return this._schema;
};
function WebServiceOperation(name,_125e,_125f,_1260){
this.name=name;
this.address=_125e;
this.encoder=_125f;
this.decoder=_1260;
}
WebServiceOperation.prototype={name:null,address:null,encoder:null,decoder:null};
WebServiceProxy.isLoggingEnabled=true;
WebServiceProxy.isDOMResult=false;
WebServiceProxy.isFaultHandler=true;
function WebServiceProxy(){
this.logger=SystemLogger.getLogger("WebServiceProxy");
}
WebServiceProxy.createProxy=function(url){
var wsdl=new WebServiceResolver(url);
var proxy=new WebServiceProxy();
var _1264=wsdl.getOperations();
_1264.each(function(_1265){
proxy[_1265.name]=WebServiceProxy.createProxyOperation(_1265);
});
return proxy;
};
WebServiceProxy.prototype._log=function(_1266,_1267){
if(WebServiceProxy.isLoggingEnabled&&Application.isDeveloperMode&&_1267){
var log=_1267 instanceof SOAPRequest?"SOAPRequest for ":"SOAPResponse from ";
log+=_1266.address+": "+_1266.name+"\n\n";
log+=DOMSerializer.serialize(_1267.document,true);
this.logger.fine(log);
}
};
WebServiceProxy.createProxyOperation=function(_1269){
return function(){
var _126a=new List(arguments);
var _126b=null;
if(typeof (_126a.getLast())=="function"){
var _126c=_126a.extractLast();
var _126d=_1269.encoder.encode(_126a);
this._log(_1269,_126d);
var self=this;
var _126f=_126d.asyncInvoke(_1269.address,function(_1270){
self._log(_1269,_1270);
if(_1270){
if(_1270.fault){
_126b=SOAPFault.newInstance(_1269,_1270.fault);
if(WebServiceProxy.isFaultHandler){
WebServiceProxy.handleFault(_126b,_126d,_1270);
}
}else{
if(WebServiceProxy.isDOMResult){
_126b=_1270.document;
}else{
_126b=_1269.decoder.decode(_1270);
}
}
}
_126d.dispose();
_126c(_126b);
});
}else{
var _126d=_1269.encoder.encode(new List(arguments));
this._log(_1269,_126d);
var _126f=_126d.invoke(_1269.address);
this._log(_1269,_126f);
if(_126f){
if(_126f.fault){
_126b=SOAPFault.newInstance(_1269,_126f.fault);
if(WebServiceProxy.isFaultHandler){
WebServiceProxy.handleFault(_126b,_126d,_126f);
}
}else{
if(WebServiceProxy.isDOMResult){
_126b=_126f.document;
}else{
_126b=_1269.decoder.decode(_126f);
}
}
}
_126d.dispose();
return _126b;
}
};
};
WebServiceProxy.handleFault=function(_1271,_1272,_1273){
try{
Dialog.invokeModal(Dialog.URL_SERVICEFAULT,null,{soapFault:_1271,soapRequest:_1272,soapResponse:_1273});
}
catch(exception){
alert(_1271.getFaultString());
}
};
var ConfigurationService=null;
var ConsoleMessageQueueService=null;
var EditorConfigurationService=null;
var FlowControllerService=null;
var InstallationService=null;
var LocalizationService=null;
var LoginService=null;
var MarkupFormatService=null;
var PageService=null;
var ReadyService=null;
var SecurityService=null;
var SEOService=null;
var SourceValidationService=null;
var StringService=null;
var TreeService=null;
var XhtmlTransformationsService=null;
var FunctionService=null;
window.MessageQueue=new function(){
this.INTERVAL_ONLINE=5*1000;
this.INTERVAL_OFFLINE=1*1000;
this._actions=new List();
this._index={};
this.index=0;
var _1274=SystemLogger.getLogger("MessageQueue");
var _1275=null;
var _1276=0;
var _1277=null;
var _1278=new Map();
var _1279=new Map();
var _127a=false;
var _127b=false;
var _127c=false;
var _127d=false;
var _127e={"Main":DockBinding.MAIN,"External":DockBinding.EXTERNAL,"BottomLeft":DockBinding.BOTTOMLEFT,"BottomRight":DockBinding.BOTTOMRIGHT,"RightTop":DockBinding.RIGHTTOP,"RightBottom":DockBinding.RIGHTBOTTOM,"AbsBottomLeft":DockBinding.ABSBOTTOMLEFT,"AbsBottomRight":DockBinding.ABSBOTTOMRIGHT};
this.initialize=function(){
_1275=ConsoleMessageQueueService;
_1276=_1275.GetCurrentSequenceNumber("dummyparam!");
this.index=_1276;
EventBroadcaster.subscribe(BroadcastMessages.VIEW_COMPLETED,this);
EventBroadcaster.subscribe(BroadcastMessages.VIEW_CLOSED,this);
EventBroadcaster.subscribe(BroadcastMessages.SERVER_OFFLINE,this);
EventBroadcaster.subscribe(BroadcastMessages.SERVER_ONLINE,this);
window.messageQueueInterval=window.setInterval(MessageQueue._autoupdate,MessageQueue.INTERVAL_ONLINE);
};
this._autoupdate=function(){
if(!_127a){
if(!MessageQueue._actions.hasEntries()){
var _127f=WebServiceProxy.isLoggingEnabled;
if(Application.isLoggedIn){
_127b=true;
WebServiceProxy.isLoggingEnabled=false;
MessageQueue.update();
WebServiceProxy.isLoggingEnabled=_127f;
_127b=false;
}
}
}
};
this._pokeserver=function(){
if(_127a==true){
if(ReadyService.IsServerReady(true)){
MessageQueue._lockSystem(false);
}
}
};
this.update=function(_1280){
if(Application.isLoggedIn){
EventBroadcaster.broadcast(BroadcastMessages.MESSAGEQUEUE_REQUESTED,_127b);
this._updateMessages(_1280);
}
};
this._updateMessages=function(_1281){
if(_127c){
_127d=true;
}else{
_127c=true;
var self=this;
var _1283=function(_1284){
if(_1284!=null){
if(Types.isDefined(_1284.CurrentSequenceNumber)){
var _1285=_1284.CurrentSequenceNumber;
if(_1285<self.index){
_1274.debug("SERVER WAS RESTARTED! old messagequeue index: "+self.index+", new messagequeue index: "+_1285);
}
self.index=_1285;
var _1286=new List(_1284.ConsoleActions);
if(_1286.hasEntries()){
self.evaluate(_1286);
}else{
if(!self._actions.hasEntries()){
broadcastUpdateEvaluated();
}
}
}else{
_1274.error("No sequencenumber in MessageQueue response!");
}
}
_127c=false;
if(_127d){
_127d=false;
self._updateMessages();
}
};
if(_1281){
_1283(_1275.GetMessages(Application.CONSOLE_ID,this.index));
}else{
_1275.GetMessages(Application.CONSOLE_ID,this.index,_1283);
}
}
};
this.evaluate=function(_1287){
var _1288=new List();
if(_1287.hasEntries()){
_1287.each(function(_1289){
if(this._index[_1289.Id]!=true){
_1288.add(_1289);
}
this._index[_1289.Id]=true;
},this);
if(_1288.hasEntries()){
if(this._actions.hasEntries()){
this._actions.merge(_1288);
}else{
this._actions=_1288;
}
this._nextAction();
}
}
};
this._closeAllViews=function(_128a){
var _128b="(No reason)";
if(_128a!=null){
_128b=_128a.Reason;
}
var title="Warning";
var text="The server has requested a close of all active editors for the following reason: \"${reason}\". It is recommended that you accept this request by clicking OK.";
text=text.replace("${reason}",_128b);
var self=this;
Dialog.warning(title,text,Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_128f){
if(_128f==Dialog.RESPONSE_ACCEPT){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
}
self._nextAction();
}});
};
this._nextAction=function(){
var _1290=null;
if(this._actions.hasEntries()){
var _1291=this._actions.extractFirst();
_1276=_1291.SequenceNumber;
_1274.debug("MessageQueue action: "+_1291.ActionType+" > QUEUE-MAX-SEQNUM: "+this.index+" > CURRENT SEQNUM: "+_1276+" > ACTIONS-LEFT: "+this._actions.getLength());
switch(_1291.ActionType){
case "OpenView":
_1290=_1291.OpenViewParams;
if(_1290.ViewType=="ModalDialog"){
openDialogView(_1290);
}else{
_1277=_1290.ViewId;
openView(_1290);
}
break;
case "CloseView":
_1290=_1291.CloseViewParams;
_1277=_1290.ViewId;
closeView(_1290);
break;
case "RefreshTree":
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,_1291.RefreshTreeParams.EntityToken);
var debug="REFRESHING TREES: "+_1278.countEntries()+"\n";
_1278.each(function(token){
debug+="\n\tTOKEN: "+token;
});
_1274.debug(debug);
if(!_1278.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
this._nextAction();
}
break;
case "SelectElement":
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_FOCUS,_1291.BindEntityTokenToViewParams.EntityToken);
this._nextAction();
break;
case "MessageBox":
openMessageBox(_1291.MessageBoxParams);
break;
case "OpenViewDefinition":
_1290=_1291.OpenViewDefinitionParams;
_1277=_1290.Handle;
openViewDefinition(_1290);
break;
case "LogEntry":
logEntry(_1291.LogEntryParams);
this._nextAction();
break;
case "Reboot":
Application.reload(true);
break;
case "LockSystem":
MessageQueue._lockSystem(true);
break;
case "BroadcastMessage":
_1290=_1291.BroadcastMessageParams;
_1274.debug("Server says: EventBroadcaster.broadcast ( \""+_1290.Name+"\", "+_1290.Value+" )");
EventBroadcaster.broadcast(_1290.Name,_1290.Value);
this._nextAction();
break;
case "CollapseAndRefresh":
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
if(!_1278.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
this._nextAction();
}
break;
case "CloseAllViews":
this._closeAllViews(_1291.CloseAllViewsParams);
break;
case "SaveStatus":
saveStatus(_1291.SaveStatusParams);
this._nextAction();
break;
case "DownloadFile":
Download.init(_1291.DownloadFileParams.Url);
this._nextAction();
break;
case "ExpandTreeNode":
this._nextAction();
break;
case "BindEntityTokenToView":
_1290=_1291.BindEntityTokenToViewParams;
EventBroadcaster.broadcast(BroadcastMessages.BIND_TOKEN_TO_VIEW,{handle:_1290.ViewId,entityToken:_1290.EntityToken});
this._nextAction();
break;
case "OpenGenericView":
_1290=_1291.OpenGenericViewParams;
openGenericView(_1290);
break;
case "OpenExternalView":
_1290=_1291.OpenExternalViewParams;
openExternalView(_1290);
break;
default:
Dialog.error("Dysfunction","Unhandled action: "+_1291.ActionType);
break;
}
}else{
broadcastUpdateEvaluated();
}
};
function broadcastUpdateEvaluated(){
EventBroadcaster.broadcast(BroadcastMessages.MESSAGEQUEUE_EVALUATED,_127b);
}
function logEntry(_1294){
var _1295=_1294.Level.toLowerCase();
SystemLogger.getLogger(_1294.SenderId)[_1295](_1294.Message);
}
function openView(_1296){
var list=paramsToList(_1296.Argument);
if(list.hasEntries()){
var def=ViewDefinition.clone("Composite.Management.PostBackView",_1296.ViewId);
def.entityToken=_1296.EntityToken;
def.flowHandle=_1296.FlowHandle;
def.position=_127e[_1296.ViewType],def.label=_1296.Label;
def.image=_1296.Image;
def.toolTip=_1296.ToolTip;
def.argument={"url":_1296.Url,"list":list};
StageBinding.presentViewDefinition(def);
}else{
StageBinding.presentViewDefinition(new HostedViewDefinition({handle:_1296.ViewId,entityToken:_1296.EntityToken,flowHandle:_1296.FlowHandle,position:_127e[_1296.ViewType],url:_1296.Url,label:_1296.Label,image:_1296.Image,toolTip:_1296.ToolTip}));
}
}
function openDialogView(_1299){
StageBinding.presentViewDefinition(new DialogViewDefinition({handle:_1299.ViewId,flowHandle:_1299.FlowHandle,position:Dialog.MODAL,url:_1299.Url,handler:{handleDialogResponse:function(){
setTimeout(function(){
MessageQueue._nextAction();
},250);
}}}));
}
function openMessageBox(_129a){
var _129b=_129a.DialogType.toLowerCase();
if(_129b=="question"){
throw "Not supported!";
}else{
if(Client.isWebKit){
alert(_129a.Title+"\n"+_129a.Message);
}else{
Dialog[_129b](_129a.Title,_129a.Message,null,{handleDialogResponse:function(){
setTimeout(function(){
MessageQueue._nextAction();
},250);
}});
}
}
}
function openViewDefinition(_129c){
var map={};
var _129e=false;
new List(_129c.Argument).each(function(entry){
map[entry.Key]=entry.Value;
_129e=true;
});
var proto=ViewDefinitions[_129c.Handle];
if(proto!=null){
var def=null;
if(proto.isMutable==false){
def=proto;
}else{
def=new HostedViewDefinition();
for(var prop in proto){
def[prop]=proto[prop];
}
def.handle=_129c.ViewId;
}
def.argument=_129e?map:null;
StageBinding.presentViewDefinition(def);
}else{
throw "Unknown ViewDefinition: "+param.Handle;
}
}
function openGenericView(_12a3){
var def=ViewDefinition.clone("Composite.Management.GenericView",_12a3.ViewId);
def.label=_12a3.Label;
def.toolTip=_12a3.ToolTip;
def.image=_12a3.Image;
def.argument={"url":_12a3.Url,"list":paramsToList(_12a3.UrlPostArguments)};
StageBinding.presentViewDefinition(def);
}
function openExternalView(_12a5){
var def=ViewDefinition.clone("Composite.Management.ExternalView",_12a5.ViewId);
def.label=_12a5.Label;
def.toolTip=_12a5.ToolTip;
def.image=_12a5.Image;
def.url=_12a5.Url,StageBinding.presentViewDefinition(def);
}
function closeView(_12a7){
if(StageBinding.isViewOpen(_12a7.ViewId)){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEW,_12a7.ViewId);
}else{
MessageQueue._nextAction();
}
}
function saveStatus(_12a8){
EventBroadcaster.broadcast(BroadcastMessages.CURRENT_SAVED,{handle:_12a8.ViewId,isSuccess:_12a8.Succeeded});
}
this._lockSystem=function(_12a9){
var _12aa=top.bindingMap.offlinetheatre;
if(_12a9){
_12aa.play(true);
window.clearInterval(window.messageQueueInterval);
window.messageQueueInterval=window.setInterval(MessageQueue._pokeserver,MessageQueue.INTERVAL_OFFLINE);
}else{
_12aa.stop();
window.clearInterval(window.messageQueueInterval);
window.messageQueueInterval=window.setInterval(MessageQueue._autoupdate,MessageQueue.INTERVAL_ONLINE);
var self=this;
setTimeout(function(){
if(self._actions.hasEntries()){
self._nextAction();
}
},0);
}
_127a=_12a9;
};
this.handleBroadcast=function(_12ac,arg){
switch(_12ac){
case BroadcastMessages.APPLICATION_LOGIN:
this.initialize();
break;
case BroadcastMessages.VIEW_COMPLETED:
case BroadcastMessages.VIEW_CLOSED:
if(_1277!=null&&arg==_1277){
_1277=null;
this._nextAction();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHING:
if(arg!=null){
_1278.set(arg,true);
}else{
_1274.debug("Saa har vi balladen!");
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHED:
if(_1278.hasEntries()){
_1278.del(arg);
_1274.debug("Refreshed tree: "+arg+"\n("+_1278.countEntries()+" trees left!)");
if(!_1278.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
setTimeout(function(){
MessageQueue._nextAction();
},0);
}
}
break;
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN:
_1279.set(arg,true);
break;
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN:
if(_1279.hasEntries()==true){
_1279.del(arg);
if(!_1279.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN,this);
MessageQueue._nextAction();
}
}
break;
case BroadcastMessages.SERVER_OFFLINE:
MessageQueue._lockSystem(true);
break;
case BroadcastMessages.SERVER_ONLINE:
MessageQueue._lockSystem(false);
break;
}
};
function paramsToList(_12ae){
var list=new List();
new List(_12ae).each(function(entry){
list.add({name:entry.Key,value:entry.Value});
});
return list;
}
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,this);
};
var ViewDefinitions={"Composite.Management.Null":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.Null"}),"Composite.Management.PostBackDialog":new DialogViewDefinition({handle:"Composite.Management.PostBackDialog",isMutable:true,position:Dialog.MODAL,url:"${root}/content/dialogs/postback/postbackdialog.aspx",argument:{"url":null,"list":null}}),"Composite.Management.PostBackView":new HostedViewDefinition({handle:"Composite.Management.PostBackView",isMutable:true,position:DockBinding.MAIN,url:"${root}/postback.aspx",argument:{"url":null,"list":null}}),"Composite.Management.GenericView":new HostedViewDefinition({handle:"Composite.Management.GenericView",isMutable:true,position:DockBinding.MAIN,url:"${root}/content/views/generic/generic.aspx",label:null,image:null,toolTip:null,argument:{"url":null,"list":null}}),"Composite.Management.ExternalView":new HostedViewDefinition({handle:"Composite.Management.ExternalView",isMutable:true,position:DockBinding.EXTERNAL,url:null,label:null,image:null,toolTip:null}),"Composite.Management.Start":new HostedViewDefinition({handle:"Composite.Management.Start",position:DockBinding.START,label:"Welcome Travellers",url:"${root}/content/views/start/start.aspx"}),"Composite.Management.About":new DialogViewDefinition({handle:"Composite.Management.About",position:Dialog.MODAL,url:"${root}/content/dialogs/about/about.aspx"}),"Composite.Management.PermissionEditor":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.PermissionEditor",position:DockBinding.MAIN,url:"${root}/content/views/editors/permissioneditor/permissioneditor.aspx",argument:{serializedEntityToken:"entityTokenType='Composite\\.Plugins\\.Elements\\.ElementProviders\\.VirtualElementProvider\\.VirtualElementProviderEntityToken,Composite'entityToken='_EntityToken_Type_=\\'Composite\\\\\\.Plugins\\\\\\.Elements\\\\\\.ElementProviders\\\\\\.VirtualElementProvider\\\\\\.VirtualElementProviderEntityToken,Composite\\'_EntityToken_Source_=\\'VirtualElementProvider\\'_EntityToken_Id_=\\'DesignPerspective\\''\""}}),"Composite.Management.SystemLog":new HostedViewDefinition({handle:"Composite.Management.SystemLog",position:DockBinding.ABSBOTTOMLEFT,label:"System Log",url:"${root}/content/views/dev/systemlog/systemlog.aspx"}),"Composite.Management.Developer":new HostedViewDefinition({handle:"Composite.Management.Developer",position:DockBinding.ABSBOTTOMRIGHT,label:"Developer",url:"${root}/content/views/dev/developer/developer.aspx"}),"Composite.Management.IconPack.System":new HostedViewDefinition({handle:"Composite.Management.IconPack.System",position:DockBinding.ABSBOTTOMLEFT,label:"Freja",image:"${icon:icon}",url:"${root}/content/views/dev/icons/system/Default.aspx"}),"Composite.Management.IconPack.Republic":new HostedViewDefinition({handle:"Composite.Management.IconPack.Republic",position:DockBinding.ABSBOTTOMLEFT,label:"Republic",image:"${icon:icon}",url:"${root}/content/views/dev/icons/files/republic.aspx"}),"Composite.Management.IconPack.Harmony":new HostedViewDefinition({handle:"Composite.Management.IconPack.Harmony",position:DockBinding.ABSBOTTOMLEFT,label:"Harmony",image:"${icon:icon}",url:"${root}/content/views/dev/icons/files/harmony.aspx"}),"Composite.Management.Explorer":new HostedViewDefinition({handle:"Composite.Management.Explorer",position:DockBinding.EXPLORER,url:"${root}/content/views/explorer/explorer.aspx",label:"Explorer"}),"Composite.Management.Options":new DialogViewDefinition({handle:"Composite.Management.Options",position:Dialog.MODAL,url:"${root}/content/dialogs/options/options.aspx",label:"Options"}),"Composite.Management.VisualEditorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.VisualEditorDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/wysiwygeditor/wysiwygeditordialog.aspx",width:1024,argument:{"formattingconfiguration":null,"elementclassconfiguration":null,"configurationstylesheet":null,"presentationstylesheet":null,"embedablefieldstypenames":null}}),"Composite.Management.MultiSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.MultiSelectorDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/multiselector/multiselectordialog.aspx"}),"Composite.Management.Search":new HostedViewDefinition({handle:"Composite.Management.Search",position:DockBinding.RIGHTBOTTOM,url:"${root}/content/views/search/search.aspx",label:"Search",image:"${icon:view_search}",argument:null}),"Composite.Management.Browser":new HostedViewDefinition({isMutable:false,handle:"Composite.Management.Browser",position:DockBinding.MAIN,perspective:ExplorerBinding.PERSPECTIVE_CONTENT,label:"Page Browser",image:"${icon:page-view-administrated-scope}",toolTip:"Browse unpublished pages",url:"${root}/content/views/browser/browser.aspx",argument:{"URL":null}}),"Composite.Management.SEOAssistant":new HostedViewDefinition({handle:"Composite.Management.SEOAssistant",position:DockBinding.RIGHTTOP,perspective:ExplorerBinding.PERSPECTIVE_CONTENT,url:"${root}/content/views/seoassist/seoassist.aspx",label:"${string:Composite.Web.SEOAssistant:SEOAssistant}",image:"${icon:seoassistant}",toolTip:"Search engine optimization"}),"Composite.Management.SourceCodeViewer":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.SourceCodeViewer",position:DockBinding.ABSBOTTOMLEFT,url:"${root}/content/views/dev/viewsource/viewsource.aspx",argument:{"action":null,"viewBinding":null}}),"Composite.User.SourceCodeViewer":new HostedViewDefinition({isMutable:true,handle:"Composite.User.SourceCodeViewer",position:DockBinding.BOTTOMLEFT,url:"${root}/content/views/dev/viewsource/viewsource.aspx",argument:{"action":null,"viewBinding":null}}),"Composite.Management.Help":new HostedViewDefinition({label:"${string:Website.App.LabelHelp}",image:"${icon:help}",handle:"Composite.Management.Help",position:DockBinding.ABSRIGHTTOP,url:"${root}/content/views/help/help.aspx"}),"Composite.Management.Dialog.Translations":new DialogViewDefinition({handle:"Composite.Management.TranslationsDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/translations/translations.aspx",label:"Translations",image:"${icon:users-changepublicculture}"}),"Composite.Management.ImageSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.ImageSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_IMAGESELECTOR,argument:{label:"${string:Composite.Management:Website.Image.SelectDialog.Title}",image:"${icon:image}",selectionProperty:"ElementType",selectionValue:"image/jpeg image/gif image/png image/bmp image/tiff image/svg+xml",selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider",search:"MediaFileElementProvider.WebImages"}]}}),"Composite.Management.MediaWritableFolderSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.MediaWritableFolderSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.Folder.SelectDialog.Title}",image:"${icon:image}",selectionProperty:"ReadOnly",selectionValue:"False",selectionResult:"EntityToken",actionGroup:"Folder",nodes:[{key:"MediaFileElementProvider",search:"MediaFileElementProvider.WritableFolders"}]}}),"Composite.Management.EmbeddableMediaSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.EmbeddableMediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.Media.SelectDialog.Title}",image:"${icon:media}",selectionProperty:"ElementType",selectionValue:null,selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider",search:null}]}}),"Composite.Management.FrontendFileSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.EmbeddableMediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.FrontendFile.SelectDialog.Title}",image:"${icon:media}",selectionProperty:"ElementType",selectionValue:null,selectionResult:"Uri",nodes:[{key:"LayoutFileElementProvider"}],width:480}}),"Composite.Management.PageSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.PageSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Page.SelectDialog.Title}",image:"${icon:page}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"PageElementProvider"}]}}),"Composite.Management.PageIdSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.PageIdSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Page.SelectDialog.Title}",image:"${icon:page}",selectionProperty:"DataId",selectionValue:null,selectionResult:"DataId",nodes:[{key:"PageElementProvider"}]}}),"Composite.Management.LinkableSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.LinkableSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.ContentLink.SelectDialog.Title}",image:"${icon:link}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"PageElementProvider"},{key:"MediaFileElementProvider"}]}}),"Composite.Management.MediaSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.MediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.ContentLink.SelectDialog.Title}",image:"${icon:link}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider"}]}}),"Composite.Management.FunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.FunctionSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Function.SelectDialog.Title}",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllFunctionsElementProvider"}]}}),"Composite.Management.WidgetFunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.WidgetFunctionSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Widget.SelectDialog.Title}",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllWidgetFunctionsElementProvider"}]}}),"Composite.Management.XhtmlDocumentFunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.XhtmlDocumentFunctionSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Function.SelectDialog.Title}",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllFunctionsElementProvider",search:"AllFunctionsElementProvider.VisualEditorFunctions"}]}})};
var KickStart=new function(){
var _12b1=false;
var _12b2=null;
var _12b3=false;
var _12b4=Client.qualifies();
var _12b5="admin";
var _12b6="123456";
if(!_12b4){
document.location="unsupported.aspx";
return;
}
this.fireOnLoad=function(){
if(Client.isPad&&Client.isOS7&&window.innerHeight!=document.documentElement.clientHeight){
document.documentElement.style.height=window.innerHeight+"px";
}
Application.lock(this);
fileEventBroadcasterSubscriptions(true);
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,this);
SetupService=WebServiceProxy.createProxy(Constants.URL_WSDL_SETUPSERVICE);
ReadyService=WebServiceProxy.createProxy(Constants.URL_WSDL_READYSERVICE);
LoginService=WebServiceProxy.createProxy(Constants.URL_WSDL_LOGINSERVICE);
InstallationService=WebServiceProxy.createProxy(Constants.URL_WSDL_INSTALLSERVICE);
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_KICKSTART);
setTimeout(function(){
Persistance.initialize();
},0);
};
this.handleBroadcast=function(_12b7){
switch(_12b7){
case BroadcastMessages.PERSISTANCE_INITIALIZED:
kickStart(_12b7);
break;
case BroadcastMessages.APPLICATION_STARTUP:
break;
case BroadcastMessages.KEY_ENTER:
this.login();
break;
case BroadcastMessages.APPLICATION_LOGIN:
var _12b8=window.bindingMap.appwindow;
_12b8.setURL("app.aspx");
break;
case BroadcastMessages.APPLICATION_OPERATIONAL:
showWorkbench();
break;
case BroadcastMessages.APPLICATION_SHUTDOWN:
if(bindingMap.decks!=null){
bindingMap.decks.select("shutdowndeck");
}
bindingMap.cover.show();
break;
}
};
function fileEventBroadcasterSubscriptions(_12b9){
new List([BroadcastMessages.PERSISTANCE_INITIALIZED,BroadcastMessages.APPLICATION_STARTUP,BroadcastMessages.APPLICATION_LOGIN,BroadcastMessages.APPLICATION_OPERATIONAL]).each(function(_12ba){
if(_12b9){
EventBroadcaster.subscribe(_12ba,KickStart);
}else{
EventBroadcaster.unsubscribe(_12ba,KickStart);
}
});
}
function kickStart(_12bb){
switch(_12bb){
case BroadcastMessages.PERSISTANCE_INITIALIZED:
_12b1=true;
break;
}
if(_12b1){
if(bindingMap.decks!=null&&LoginService.IsLoggedIn(true)){
accessGranted();
}else{
if(bindingMap.decks!=null){
splashScreenData();
showLogin();
}else{
showWelcome();
}
}
}
}
function splashScreenData(){
var ver=document.getElementById("version");
ver.firstChild.data=ver.firstChild.data.replace("${version}",Installation.versionPrettyString);
var build=document.getElementById("build");
build.firstChild.data=build.firstChild.data.replace("${build}",Installation.versionString);
}
function showWelcome(){
Application.unlock(KickStart);
if(window.Welcome!=null){
Welcome.test();
}
}
function showLogin(){
EventBroadcaster.subscribe(BroadcastMessages.KEY_ENTER,KickStart);
Application.unlock(KickStart);
bindingMap.decks.select("logindeck");
setTimeout(function(){
if(Application.isDeveloperMode&&Application.isLocalHost){
DataManager.getDataBinding("username").setValue(_12b5);
DataManager.getDataBinding("password").setValue(_12b6);
}
setTimeout(function(){
DataManager.getDataBinding("username").focus();
},250);
},0);
}
function watchProgress(){
window.progressOnRegistrationInterval=window.setInterval(function(){
if(ReadyService.IsServerReady(true)){
window.clearInterval(window.progressOnRegistrationInterval);
window.progressOnRegistrationInterval=null;
splashScreenData();
showLogin();
}
},2000);
}
function showWorkbench(){
setTimeout(function(){
bindingMap.cover.hide();
fileEventBroadcasterSubscriptions(false);
Application.unlock(KickStart);
},PageBinding.TIMEOUT);
}
this.login=function(){
Application.lock(KickStart);
setTimeout(function(){
if(bindingMap.toppage.validateAllDataBindings()){
KickStart.doLogin(DataManager.getDataBinding("username").getResult(),DataManager.getDataBinding("password").getResult());
}else{
Application.unlock(KickStart);
}
},25);
};
this.doLogin=function(_12be,_12bf){
var _12c0=WebServiceProxy.isLoggingEnabled;
WebServiceProxy.isLoggingEnabled=false;
WebServiceProxy.isFaultHandler=false;
var _12c1=false;
var _12c2=LoginService.ValidateAndLogin(_12be,_12bf);
if(_12c2 instanceof SOAPFault){
alert(_12c2.getFaultString());
}else{
_12c1=_12c2;
}
if(_12c1){
EventBroadcaster.unsubscribe(BroadcastMessages.KEY_ENTER,KickStart);
accessGranted();
}else{
Application.unlock(KickStart);
if(bindingMap.decks!=null){
accesssDenied();
}
}
WebServiceProxy.isFaultHandler=true;
if(_12c0){
WebServiceProxy.isLoggingEnabled=true;
}
};
function accessGranted(){
setTimeout(function(){
if(bindingMap.decks!=null){
bindingMap.decks.select("loadingdeck");
}
setTimeout(function(){
Application.login();
},0);
},0);
}
function accesssDenied(){
var _12c3=DataManager.getDataBinding("username");
var _12c4=DataManager.getDataBinding("password");
_12c3.blur();
_12c4.blur();
_12c3.setValue("");
_12c4.setValue("");
_12c3.clean();
_12c4.clean();
_12c3.focus();
document.getElementById("loginerror").style.display="block";
var _12c5={handleAction:function(_12c6){
document.getElementById("loginerror").style.display="none";
_12c6.target.removeActionListener(Binding.ACTION_DIRTY,_12c5);
}};
bindingMap.loginfields.addActionListener(Binding.ACTION_DIRTY,_12c5);
}
WindowManager.fireOnLoad(this);
if(!_12b4){
UpdateManager.isEnabled=false;
}
};

