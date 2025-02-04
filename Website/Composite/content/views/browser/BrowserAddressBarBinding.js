BrowserAddressBarBinding.prototype = new DataInputBinding;
BrowserAddressBarBinding.prototype.constructor = BrowserAddressBarBinding;
BrowserAddressBarBinding.superclass = DataInputBinding.prototype;

BrowserAddressBarBinding.URL_404 = "${root}/content/views/browser/errors/404.aspx";

/**
 * @class
 */
function BrowserAddressBarBinding () {

	/**
	 * @type {SystemLogger}
	 */
	this.logger = SystemLogger.getLogger ( "BrowserAddressBarBinding" );
	
	/**
	* @type {BrowserPathBinding}
	*/
	this.pathBinding = null;

	/*
	 * Returnable.
	 */
	return this;
}

/**
 * Identifies binding.
 */
BrowserAddressBarBinding.prototype.toString = function () {

	return "[BrowserAddressBarBinding]";
}

/**
 * @overloads {DataInputBinding#onBindingAttach}
 */
BrowserAddressBarBinding.prototype.onBindingAttach = function () {
	
	BrowserAddressBarBinding.superclass.onBindingAttach.call ( this );
	this.addActionListener ( Binding.ACTION_DIRTY );
	
	/*
	 * Rig up the Go button.
	 */
	var go = this.bindingWindow.bindingMap.go;
	this._goButton = go;
	var self = this;
	go.oncommand = function () {
		self.go ();
	}

	//Hide go button as obsolute
	//TODO remove button
	go.hide();



	this.pathBinding = BrowserPathBinding.newInstance(this.bindingDocument);
	this.shadowTree.box.appendChild(this.pathBinding.bindingElement);
	this.pathBinding.attach();

	this.shadowTree.path = BrowserPathBinding;


}

/**
 * @overloads {Binding#onBindingRegister}
 */
BrowserAddressBarBinding.prototype.onBindingRegister = function () {

	BrowserAddressBarBinding.superclass.onBindingRegister.call(this);

	this.addEventListener(DOMEvents.CLICK);

}


/**
 * Maximize to available width (crappy javascript layout alert).
 * @param {int} avail
 */
BrowserAddressBarBinding.prototype.maximize = function ( avail ) {
	
	var width = avail;
	if (this.bindingWindow.bindingMap.addressrightgroup) {
		width = width - this.bindingWindow.bindingMap.addressrightgroup.boxObject.getDimension().w;
	}

	this.bindingElement.style.width = (width - 10) + "px";
	this.bindingElement.parentNode.style.width = (width - 8) + "px";
}

/**
 * @overwrites {DataInputBinding#onfocus}
 */
BrowserAddressBarBinding.prototype.onfocus = function () {
	
	this.subscribe ( BroadcastMessages.KEY_ENTER );
}

/**
 * @overwrites {DataInputBinding#onfocus}
 */
BrowserAddressBarBinding.prototype.onblur = function () {
	
	this.unsubscribe ( BroadcastMessages.KEY_ENTER );
}

/**
 * @implements {IBroadcastListener}
 * @overloads {DataInputBinding#handleBroadcast}
 * @param {string} broadcast
 * @param {object} arg
 */
BrowserAddressBarBinding.prototype.handleBroadcast = function ( broadcast, arg ) {
	
	BrowserAddressBarBinding.superclass.handleBroadcast.call ( this, broadcast, arg );
	
	switch ( broadcast ) {
		case BroadcastMessages.KEY_ENTER :
			this.go ();
			break;
	}
}
 
/**
 * @implements {IActionHandler}
 * @overloads {Binding#handleAction}
 * @param {Action} action
 */
BrowserAddressBarBinding.prototype.handleAction = function ( action ) {
	
	BrowserAddressBarBinding.superclass.handleAction.call ( this, action );
	
	switch ( action.type ) {
		case Binding.ACTION_DIRTY :
			if ( action.target == this ) {
				this._goButton.enable ();
			}
			break;
	}
}

/**
 * @implements {IEventListener}
 * @overloads {Binding#handleEvent}
 * @param {MouseEvent} e
 */
BrowserAddressBarBinding.prototype.handleEvent = function (e) {

	BrowserAddressBarBinding.superclass.handleEvent.call(this, e);

	switch (e.type) {
		case DOMEvents.CLICK:
			if (e.target === this.pathBinding.bindingElement) {
				this._hideBreadcrumb();
				this.shadowTree.input.value = "";
				this.shadowTree.input.focus();
				
			}
			break;
	}
}


/**
 * @overloads {DataInputBinding#setValue}
 * @param {string} value
 */
BrowserAddressBarBinding.prototype.setValue = function (value) {

	BrowserAddressBarBinding.superclass.setValue.call ( this, value );
	this._goButton.disable ();
	this.isDirty = false;
}

/**
 * Load URL in addressbar.
 */
BrowserAddressBarBinding.prototype.go = function () {

	var url = this.getValue().replace(/\s/g, ""); // kill whitespace

		if (url.length > 0) {

		url = this._cleanupURL(url);
		this.setValue(url);
		this.blur();
		Application.lock(this);

		var self = this;
		setTimeout(function () {

			url = PageService.ConvertAbsolutePageUrlToRelative(url);

			var status = self._getRequestStatus(url);
			if (status == 200) {
				self.bindingWindow.bindingMap.browserpage.setURL(url);
			} else {
				self._showWarning(status);
			}
			Application.unlock(self);
		}, 0);
	}
}

/**
 * This is an attempt to make the addressbar "autoguess" missing 
 * elements of an entered URL. It may not be the best code, but...
 * @param {string} url
 * @return {string}
 */
BrowserAddressBarBinding.prototype._cleanupURL = function ( url ) {
	
	var hasProto = false;
	var hasHost = false;
	
	var proto = document.location.protocol;
	var port = document.location.port;
	var host = document.location.host;
	
	if ( url.charAt ( 0 ) == "/" ) {
		if ( url.indexOf ( host ) == -1 ) {
			var p = port == "" ? "" : ( ":" + port );
			url = host + p + url;
		}
	}
	
	var split = url.split ( proto );
	if ( split.length == 2 && split [ 0 ] == "" ) {
		hasProto = true;
	}
	if ( !hasProto ) {
		if ( url.charAt ( 0 ) == "/" ) {
			url = proto + "/" + url;
		} else {
			url = proto + "//" + url;
		}
	}
	
	return url;
}

/**
 * Show warning dialog.
 * @param {int} status
 */
BrowserAddressBarBinding.prototype._showWarning = function ( status ) {
	
	var title = null;
	var text = null;
	
	switch ( status ) {
		case 0 : // external domain
			title = "AddressBar.Invalid.DialogTitle.External";
			text = "AddressBar.Invalid.DialogText.External";
			break;
		case 400 : // bad request
			title = "AddressBar.Invalid.DialogTitle.BadRequest";
			text = "AddressBar.Invalid.DialogText.BadRequest";
			break;
		case 401 : // unauthorized
		case 403 :
			title = "AddressBar.Invalid.DialogTitle.Unauthorized";
			text = "AddressBar.Invalid.DialogText.Unauthorized";
			break;
		case 404 : // not found
			title = "AddressBar.Invalid.DialogTitle.NotFound";
			text = "AddressBar.Invalid.DialogText.NotFound";
			break;
		case 500 : // internal error
			title = "AddressBar.Invalid.DialogTitle.InternalError";
			text = "AddressBar.Invalid.DialogText.InternalError";
			break;
		default : // default
			this.logger.debug ( "Exotic status code: " + status );
			title = "AddressBar.Invalid.DialogTitle.Default";
			text = "AddressBar.Invalid.DialogText.Default";
			break;
	}
	
	Dialog.warning ( 
		StringBundle.getString ( "Composite.Web.PageBrowser", title ), 
		StringBundle.getString ( "Composite.Web.PageBrowser", text ) 
	);
}

/**
 * Extract the HTTP response code from an URL request.
 * @param {string} url
 * @return {int}
 */
BrowserAddressBarBinding.prototype._getRequestStatus = function ( url ) {
	
	var result = 0;
	var request = DOMUtil.getXMLHTTPRequest ();
	try {
		request.open ( "get", url, false );
		request.send ( null );
		result = request.status;
	} catch ( accessDeniedException ) {
		result = 0;
	}
	return result;
}

/**
 * Blur.
 * @implements {IData}
 */
BrowserAddressBarBinding.prototype.blur = function () {

	BrowserAddressBarBinding.superclass.blur.call(this);
	if (this.isBreadcrumb && !this.shadowTree.input.value && !this.pathBinding.isVisible)
		this._showBreadcrumb();
}


/**
 * Show breadcrumb
 */
BrowserAddressBarBinding.prototype.showBreadcrumb = function (node) {

	var pathBinding = this.pathBinding;
	pathBinding.detachRecursive();
	pathBinding.bindingElement.innerHTML = "";
	var self = this;
	System.getParents(node.getHandle()).reverse().each(
		function (parent) {
			var button = ToolBarButtonBinding.newInstance(pathBinding.bindingDocument);

			button.setLabel(parent.getLabel());

			pathBinding.add(button);
			button.attach();

			button.entityToken = parent.getEntityToken();
			button.oncommand = function () {

				self.bindingWindow.bindingMap.browserpage.push(parent);

			}

		}, this
	);


	var button = ToolBarButtonBinding.newInstance(pathBinding.bindingDocument);
	button.setLabel(node.getLabel());
	pathBinding.add(button);
	button.attach();
	this.shadowTree.input.value = "";
	this.shadowTree.input.style.display = "none";
	this.pathBinding.show();
	this.isBreadcrumb = true;
}


/**
 * Hide breadcrumb
 */
BrowserAddressBarBinding.prototype.showAddreesbar = function () {

	this._hideBreadcrumb();
	this.isBreadcrumb = true;
}


/**
 * Hide breadcrumb
 */
BrowserAddressBarBinding.prototype._hideBreadcrumb = function () {
	this.pathBinding.hide();
	this.shadowTree.input.style.display = "block";
}


/**
 * Hide breadcrumb
 */
BrowserAddressBarBinding.prototype._showBreadcrumb = function () {
	this.shadowTree.input.style.display = "none";
	this.pathBinding.show();
}
