package br.bridge.mariaeduarda.petshopApp.exception;


import java.util.ArrayList;
import java.util.List;

import graphql.ErrorClassification;
import graphql.GraphQLError;
import graphql.language.SourceLocation;

public class GraphQLException extends RuntimeException implements GraphQLError {

	String customMessage;

	public GraphQLException(String customMessage) {
		this.customMessage = customMessage;
	}

	@Override
	public String getMessage() {
		return customMessage;
	}

	@Override
	public List<SourceLocation> getLocations() {
		return new ArrayList<SourceLocation>();
	}

	@Override
	public ErrorClassification getErrorType() {
		return null;
	}
}
