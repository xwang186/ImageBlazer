/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _ErrorsBase2=require('./ErrorsBase');var _ErrorsBase3=_interopRequireDefault(_ErrorsBase2); /**
 * Errors declaration
 * @class
 */var Errors=(function(_ErrorsBase){_inherits(Errors,_ErrorsBase);function Errors(){_classCallCheck(this,Errors);_get(Object.getPrototypeOf(Errors.prototype),'constructor',this).call(this); /**
         * Error code returned when a manifest parsing error occurs
         */this.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE = 10; /**
         * Error code returned when a manifest loading error occurs
         */this.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE = 11; /**
         * Error code returned when a xlink loading error occurs
         */this.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE = 12; /**
         * Error code returned when the update of segments list has failed
         */this.SEGMENTS_UPDATE_FAILED_ERROR_CODE = 13;this.SEGMENTS_UNAVAILABLE_ERROR_CODE = 14;this.SEGMENT_BASE_LOADER_ERROR_CODE = 15;this.TIME_SYNC_FAILED_ERROR_CODE = 16;this.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE = 17;this.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE = 18;this.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE = 19;this.APPEND_ERROR_CODE = 20;this.REMOVE_ERROR_CODE = 21;this.DATA_UPDATE_FAILED_ERROR_CODE = 22; /**
         * Error code returned when MediaSource is not supported by the browser
         */this.CAPABILITY_MEDIASOURCE_ERROR_CODE = 23; /**
         * Error code returned when Protected contents are not supported
         */this.CAPABILITY_MEDIAKEYS_ERROR_CODE = 24;this.DOWNLOAD_ERROR_ID_MANIFEST_CODE = 25; /*
         *@deprecated
         */this.DOWNLOAD_ERROR_ID_MANIFEST = 'manifest';this.DOWNLOAD_ERROR_ID_SIDX_CODE = 26;this.DOWNLOAD_ERROR_ID_CONTENT_CODE = 27; /*
         *@deprecated
         */this.DOWNLOAD_ERROR_ID_CONTENT = 'content';this.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE = 28; /*
         *@deprecated
         */this.DOWNLOAD_ERROR_ID_INITIALIZATION = 'initialization';this.DOWNLOAD_ERROR_ID_XLINK_CODE = 29; /*
         *@deprecated
         */this.DOWNLOAD_ERROR_ID_XLINK = 'xlink';this.MANIFEST_ERROR_ID_CODEC_CODE = 30;this.MANIFEST_ERROR_ID_PARSE_CODE = 31; /**
         * Error code returned when no stream (period) has been detected in the manifest
         */this.MANIFEST_ERROR_ID_NOSTREAMS_CODE = 32; /**
         * Error code returned when something wrong has append during subtitles parsing (TTML or VTT)
         */this.TIMED_TEXT_ERROR_ID_PARSE_CODE = 33; /**
         * Error code returned when a 'muxed' media type has been detected in the manifest. This type is not supported
         */this.MANIFEST_ERROR_ID_MULTIPLEXED_CODE = 34; /**
         * Error code returned when a media source type is not supported
         */this.MEDIASOURCE_TYPE_UNSUPPORTED_CODE = 35;this.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE = 'parsing failed for ';this.MANIFEST_LOADER_LOADING_FAILURE_ERROR_MESSAGE = 'Failed loading manifest: ';this.XLINK_LOADER_LOADING_FAILURE_ERROR_MESSAGE = 'Failed loading Xlink element: ';this.SEGMENTS_UPDATE_FAILED_ERROR_MESSAGE = 'Segments update failed';this.SEGMENTS_UNAVAILABLE_ERROR_MESSAGE = 'no segments are available yet';this.SEGMENT_BASE_LOADER_ERROR_MESSAGE = 'error loading segments';this.TIME_SYNC_FAILED_ERROR_MESSAGE = 'Failed to synchronize time';this.FRAGMENT_LOADER_NULL_REQUEST_ERROR_MESSAGE = 'request is null';this.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE = 'Failed to resolve a valid URL';this.APPEND_ERROR_MESSAGE = 'chunk is not defined';this.REMOVE_ERROR_MESSAGE = 'buffer is not defined';this.DATA_UPDATE_FAILED_ERROR_MESSAGE = 'Data update failed';this.CAPABILITY_MEDIASOURCE_ERROR_MESSAGE = 'mediasource is not supported';this.CAPABILITY_MEDIAKEYS_ERROR_MESSAGE = 'mediakeys is not supported';this.TIMED_TEXT_ERROR_MESSAGE_PARSE = 'parsing error :';this.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE = 'Error creating source buffer of type : ';}return Errors;})(_ErrorsBase3['default']);var errors=new Errors();exports['default'] = errors;module.exports = exports['default'];
//# sourceMappingURL=Errors.js.map
