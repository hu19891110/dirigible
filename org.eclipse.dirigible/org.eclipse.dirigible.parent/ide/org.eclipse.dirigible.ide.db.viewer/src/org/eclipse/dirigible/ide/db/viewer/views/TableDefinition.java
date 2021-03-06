/*******************************************************************************
 * Copyright (c) 2015 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * Contributors:
 * SAP - initial API and implementation
 *******************************************************************************/

package org.eclipse.dirigible.ide.db.viewer.views;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.dirigible.ide.db.viewer.views.DatabaseViewContentProvider.Capability;

/**
 * TAble definition object contains necessary information to accurately pinpoint
 * a table in the DB
 */
public class TableDefinition {

	private static final String EMPTY = ""; //$NON-NLS-1$
	private static final String DOT = "."; //$NON-NLS-1$
	private static final String QUOTES = "\""; //$NON-NLS-1$

	private String catalogName = null;
	private String schemaName = null;
	private final String tableName;

	private List<Capability> capabilities;
	private String contentScript;

	public TableDefinition(String tableName) {
		super();
		this.tableName = tableName;
		this.capabilities = new ArrayList<Capability>();
	}

	public TableDefinition(String catalogName, String schemaName, String tableName) {
		this(tableName);
		this.catalogName = catalogName;
		this.schemaName = schemaName;
	}

	public TableDefinition(String catalogName, String schemaName, String tableName, List<Capability> capabilities) {
		this(catalogName, schemaName, tableName);
		this.capabilities = capabilities;
	}

	/**
	 * Catalog name or null if missing
	 *
	 * @return Catalog name or null if missing
	 */
	public String getCatalogName() {
		return catalogName;
	}

	/**
	 * Schema name or null if missing
	 *
	 * @return Schema name or null if missing
	 */
	public String getSchemaName() {
		return schemaName;
	}

	/**
	 * Table name
	 *
	 * @return table name
	 */
	public String getTableName() {
		return tableName;
	}

	public void setContentScript(String script) {
		this.contentScript = script;
	}

	public String getContentScript() {
		return this.contentScript;
	}

	public List<Capability> getCapabilities() {
		return this.capabilities;
	}

	@Override
	public int hashCode() {
		return getFqn().hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		// TODO: consider capabilities too
		if (TableDefinition.class.isInstance(obj)) {
			TableDefinition nDef = (TableDefinition) obj;
			String nDefString = nDef.getCatalogName() + DOT + nDef.getSchemaName() + DOT + nDef.getTableName();
			String oDefString = getCatalogName() + DOT + getSchemaName() + DOT + getTableName();
			return nDefString.equals(oDefString);
		}
		return super.equals(obj);
	}

	public String getFqn() {
		return (getSchemaName() != null ? QUOTES + getSchemaName() + QUOTES + DOT : EMPTY) + QUOTES + getTableName() + QUOTES;
	}

}
