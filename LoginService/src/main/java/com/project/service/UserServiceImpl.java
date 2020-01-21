package com.project.service;

import java.util.Optional;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.project.exception.UserExistsException;
import com.project.model.User;
import com.project.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository ur;

	@Override
	public User getDetails(String email) {
		User u = new User();
		u = ur.findByEmail(email);
		return u;
	}

	@Override
	public User login(String email, String password) {
		Optional<User> userSearch = ur.findById(email);
		User us = null;
		if (userSearch.isPresent()) {
			us = userSearch.get();

			boolean matched = BCrypt.checkpw(password, us.getPassword());
			System.out.println("Inside User Servic Impl");
			System.out.println(matched);
			if (!matched) {
				us = null;
			}
		}
		return us;
	}

	@Override
	public void saveuser(User u) throws UserExistsException {

		Optional<User> optUser = ur.findById(u.getEmail());
		if (optUser.isPresent()) {
			throw new UserExistsException();
		}
		String hashpw = BCrypt.hashpw(u.getPassword(), BCrypt.gensalt());
		this.sendFromGMail(u.getEmail());
		System.out.println(hashpw);
		u.setPassword(hashpw);
		ur.save(u);

	}

	private void sendFromGMail(String emailuser) {
		System.out.println("hi shittu");
		String from = "musicappstack@gmail.com";
		String pass = "music123app";
		String to = emailuser;
		String subject = "Welcome to MUsic App";
		String body = "You have registered successfully !";
		Properties props = System.getProperties();
		String host = "smtp.gmail.com";
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", host);
		props.put("mail.smtp.user", from);
		props.put("mail.smtp.password", pass);
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		Session session = Session.getDefaultInstance(props);
		MimeMessage message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress(from));
			InternetAddress toAddress = new InternetAddress(to);
			message.addRecipient(Message.RecipientType.TO, toAddress);
			message.setSubject(subject);
			message.setText(body);
			Transport transport = session.getTransport("smtp");
			transport.connect(host, from, pass);
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
		} catch (AddressException ae) {
			ae.printStackTrace();
		} catch (MessagingException me) {
			me.printStackTrace();
		}
	}

	@Autowired
	public void UserServiceImpl(UserRepository userRepo) {

		this.ur = userRepo;

	}

}
