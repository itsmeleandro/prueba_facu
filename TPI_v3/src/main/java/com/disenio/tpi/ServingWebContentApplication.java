package com.disenio.tpi;

import com.mysql.jdbc.Connection;

import java.sql.DriverManager;
import java.sql.SQLException;


public class ServingWebContentApplication {

	public static  void main(String[] args) {
		// String url = "jdbc:mysql://localhost:3306/disenio";
		// String user = "root";
		// String password = "12345";

		try {
			Class.forName("com.mysql.jdbc.Driver");

			DriverManager.getConnection("jdbc:mysql://localhost:3306/disenio","root","12345");
			Connection conn = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/disenio","root","12345");
			System.out.println("Conexion okis");

			//Statement stmt = (Statement) conn.createStatement();
			//String query1 = "INSERT INTO empleado " + "VALUES (4, 'leandro')";
			//stmt.executeUpdate(query1);

		} catch (ClassNotFoundException | SQLException e) {
			System.out.println("Conexion no okis");
			e.printStackTrace();

		}
	}



}





