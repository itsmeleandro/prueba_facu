package com.disenio.tpi;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLException;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
import com.mysql.jdbc.Statement;




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

			Statement stmt = (Statement) conn.createStatement();
			String query1 = "INSERT INTO empleado " + "VALUES (4, 'leandro')";
			stmt.executeUpdate(query1);

		} catch (ClassNotFoundException | SQLException e) {
			System.out.println("Conexion no okis");
			e.printStackTrace();

		}
	}



}





