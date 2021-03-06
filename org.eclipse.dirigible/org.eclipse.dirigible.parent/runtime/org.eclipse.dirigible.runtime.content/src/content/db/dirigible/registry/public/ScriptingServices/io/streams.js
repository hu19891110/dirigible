/*******************************************************************************
 * Copyright (c) 2015 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 *******************************************************************************/

/* globals $ java javax */
/* eslint-env node, dirigible */

/**
 * Read the stream content as a byte array
 */
exports.read = function(inputStream) {
	var internalBytes = $.IOUtils.toByteArray(inputStream.getInternalObject());
	return exports.toJavaScriptBytes(internalBytes);
};

/**
 * Read the stream to a byte array
 */
exports.write = function(outputStream, bytes) {
	var internalBytes = exports.toJavaBytes(bytes);
	$.IOUtils.write(internalBytes, outputStream.getInternalObject());
};

/**
 * Read the stream content as a String
 */
exports.readText = function(inputStream) {
	var internalBytes = $.IOUtils.toByteArray(inputStream.getInternalObject());
	return new java.lang.String(internalBytes);
};

/**
 * Read the stream to a byte array
 */
exports.writeText = function(outputStream, text) {
	$.IOUtils.write(text, outputStream.getInternalObject());
};

/**
 * Copy the input stream content to an output stream
 */
exports.copy = function(inputStream, outputStream) {
	$.IOUtils.copy(inputStream.getInternalObject(), outputStream.getInternalObject());
};

/**
 * Copy the input stream large (>2GB) content to an output stream
 */
exports.copyLarge = function(inputStream, outputStream) {
	$.IOUtils.copyLarge(inputStream.getInternalObject(), outputStream.getInternalObject());
};

/**
 * InputStream object. To be used internally by the API layer
 */
exports.InputStream = function(internalInputStream) {
	this.internalInputStream = internalInputStream;
	this.getInternalObject = inputStreamGetInternalObject;
};

function inputStreamGetInternalObject() {
	return this.internalInputStream;
}

/**
 * OutputStream object. To be used internally by the API layer
 */
exports.OutputStream = function(internalOutputStream) {
	this.internalOutputStream = internalOutputStream;
	this.getInternalObject = outputStreamGetInternalObject;
};

function outputStreamGetInternalObject() {
	return this.internalOutputStream;
}

/**
 * Create an ByteArrayInputStream for byte array provided
 */
exports.createByteArrayInputStream = function(bytes) {
	return new exports.ByteArrayInputStream(bytes);
};

/**
 * ByteArrayInputStream object.
 */
exports.ByteArrayInputStream = function(bytes) {
	var internalBytes = exports.toJavaBytes(bytes);
	this.internalInputStream = new java.io.ByteArrayInputStream(internalBytes);
	this.getInternalObject = byteArrayInputStreamGetInternalObject;
};

function byteArrayInputStreamGetInternalObject() {
	return this.internalInputStream;
}

/**
 * Create a ByteArrayOutputStream
 */
exports.createByteArrayOutputStream = function() {
	return new exports.ByteArrayOutputStream();
};

/**
 * ByteArrayOutputStream object.
 */
exports.ByteArrayOutputStream = function() {
	this.internalOutputStream = new java.io.ByteArrayOutputStream();
	this.getInternalObject = byteArrayOutputStreamGetInternalObject;
	this.getBytes = byteArrayOutputStreamGetBytes;
	this.getText = byteArrayOutputStreamGetText;
};

function byteArrayOutputStreamGetInternalObject() {
	return this.internalOutputStream;
}

function byteArrayOutputStreamGetBytes() {
	var internalBytes = this.internalOutputStream.toByteArray();
	return exports.toJavaScriptBytes(internalBytes);
}

function byteArrayOutputStreamGetText() {
	var bytes = this.getBytes();
	var text = String.fromCharCode.apply(String, bytes);
	return text;
}

/**
 * Convert the native JavaScript byte array to Java one. To be used internally by the API layer
 */
exports.toJavaBytes = function(bytes) {
	var internalBytes = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, bytes.length);
	for (var i=0; i<bytes.length; i++) {
		internalBytes[i] = bytes[i];
	}
	return internalBytes;
};

/**
 * Convert the Java byte array to a native JavaScript one. To be used internally by the API layer
 */
exports.toJavaScriptBytes = function(internalBytes) {
	var bytes = [];
	for (var i=0; i<internalBytes.length; i++) {
		bytes.push(internalBytes[i]);
	}
	return bytes;
};
