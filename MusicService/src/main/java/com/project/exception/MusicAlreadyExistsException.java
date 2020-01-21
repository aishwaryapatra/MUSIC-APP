package com.project.exception;

public class MusicAlreadyExistsException extends Exception {

	public MusicAlreadyExistsException(String string) {
		System.out.println(string);

	}

	@Override
	public String getLocalizedMessage() {

		return super.getLocalizedMessage();
	}

	@Override
	public StackTraceElement[] getStackTrace() {

		return super.getStackTrace();
	}

	@Override
	public void setStackTrace(StackTraceElement[] arg0) {
		super.setStackTrace(arg0);
	}

	@Override
	public String toString() {

		return super.toString();
	}

}
