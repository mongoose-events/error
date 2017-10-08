'use strict';

/**
 * @param {Error} err
 *
 * @returns {undefined}
 */
function errorEventListener( err ) {
  var db = this;

  if ( db.base.options.debug ) {
    console.error( '[debug]', new Date, 'error on mongodb://%host:%port/%database'
      .replace( '%host', db.host )
      .replace( '%port', db.port )
      .replace( '%database', db.name )
    );
  }

  db.error = err;
}

module.exports = errorEventListener;
