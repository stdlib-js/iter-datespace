/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isDateObject = require( '@stdlib/assert-is-date-object' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Converts a value to a JavaScript timestamp.
*
* @private
* @param {*} value - value to convert
* @returns {(NonNegativeInteger|Error)} either a JavaScript timestamp or an error object
*/
function convert( value ) {
	if ( isString( value ) ) {
		value = Date.parse( value );
		if ( value !== value ) {
			return new TypeError( format( '0Oh3z', value ) );
		}
		return value;
	}
	if ( isNonNegativeInteger( value ) ) {
		return value;
	}
	if ( isDateObject( value ) ) {
		return value.getTime();
	}
	return new TypeError( format( '0Oh40', value ) );
}


// EXPORTS //

module.exports = convert;
