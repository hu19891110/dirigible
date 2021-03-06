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

package org.eclipse.dirigible.runtime.job;

public class JobsException extends Exception {

	private static final long serialVersionUID = -8501048973010704244L;

	public JobsException(String arg0) {
		super(arg0);
	}

	public JobsException(Throwable arg0) {
		super(arg0);
	}

	public JobsException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

}
