/******************************************************************************* 
 * Copyright (c) 2015 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0 
 * which accompanies this distribution, and is available at 
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 *******************************************************************************/

package org.eclipse.dirigible.ide.publish;

public class PublishException extends Exception {

	private static final long serialVersionUID = 1L;

	public PublishException() {
		super();
	}

	public PublishException(String message) {
		super(message);
	}

	public PublishException(Throwable ex) {
		super(ex);
	}

	public PublishException(String message, Throwable ex) {
		super(message, ex);
	}

}
