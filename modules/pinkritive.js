//#region TAGS
    function h1( _elements=[], _parameters="", _write=false )     { let _t=tagMaker('h1', _elements, _parameters);     if(_write){document.write(_t);} return _t; } // <h1>
    function h2( _elements=[], _parameters="", _write=false )     { let _t=tagMaker('h2', _elements, _parameters);     if(_write){document.write(_t);} return _t; } // <h2>
    function h3( _elements=[], _parameters="", _write=false )     { let _t=tagMaker('h3', _elements, _parameters);     if(_write){document.write(_t);} return _t; } // <h3>
    function h4( _elements=[], _parameters="", _write=false )     { let _t=tagMaker('h4', _elements, _parameters);     if(_write){document.write(_t);} return _t; } // <h4>
    function h5( _elements=[], _parameters="", _write=false )     { let _t=tagMaker('h5', _elements, _parameters);     if(_write){document.write(_t);} return _t; } // <h5>
    function h6( _elements=[], _parameters="", _write=false )     { let _t=tagMaker('h6', _elements, _parameters);     if(_write){document.write(_t);} return _t; } // <h6>
    function p( _elements=[], _parameters="", _write=false )      { let _t=tagMaker('p', _elements, _parameters);      if(_write){document.write(_t);} return _t; } // <p>
    function div( _elements=[], _parameters="", _write=false )    { let _t=tagMaker('div', _elements, _parameters);    if(_write){document.write(_t);} return _t; } // <div>
    function header( _elements=[], _parameters="", _write=false ) { let _t=tagMaker('header', _elements, _parameters); if(_write){document.write(_t);} return _t; } // <header>
    function main( _elements=[], _parameters="", _write=false )   { let _t=tagMaker('main', _elements, _parameters);   if(_write){document.write(_t);} return _t; } // <main>
    function a( _elements=[], _parameters="", _write=false )      { let _t=tagMaker('a', _elements, _parameters);      if(_write){document.write(_t);} return _t; } // <a>
//#endregion



//#region OUT TAGS
    /* === OUT TAGS === */
    function write( _text="" ) { document.write(_text); }

    /* === TAG MAKER === */
    function tagMaker( _tag="", _elements=[], _parameters="" ) {
        let _el = "";
        _elements.forEach(element => {
            _el += element;
        });
        return( `<${_tag} ${ _parameters }>${ _el }</${_tag}>` );
    }
//#endregion