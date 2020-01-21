package com.project.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.project.model.User;

@Aspect
@Component
public class LoggingAspect {
	private Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

	@AfterReturning(pointcut = "execution(* com.project.service.UserServiceImpl.login(..))", returning = "returnValue")
	public void logAdterLogged(JoinPoint joinPoint, User returnValue) {
		logger.info("=========Verifying logged in User==========");
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getSignature().getDeclaringTypeName();
		logger.debug("Advice applied after " + className + ":" + methodName);
		logger.info("====================");
		if (returnValue != null) {
			logger.info("The user has succesfully logged in UserEmail=" + returnValue.getEmail());

		} else {
			logger.info("The user has not succesfully logged in");
		}
	}

	@Before("execution(* com.project.service.UserServiceImpl.saveuser(..))")
	public void logBerforeLogging(JoinPoint joinPoint) {
		logger.info("=========Before Before Logging==========");
		String methodName = joinPoint.getSignature().getName();
		String className = joinPoint.getSignature().getDeclaringTypeName();
		logger.debug("Advice applied at " + className + ":" + methodName);
	}

}
