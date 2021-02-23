/*!
 * global-var <https://github.com/AndreasPizsa/global-var>
 *
 * Copyright (c) 2016, Andreas Pizsa.
 * Licensed under the MIT License.
 */

'use strict';

var getGlobal = Function('return this');

module.exports = getGlobal();
module.exports.getGlobal = getGlobal;
