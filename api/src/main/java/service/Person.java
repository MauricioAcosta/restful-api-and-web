package service;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
//import javax.persistence.Table;

@Entity // This tells Hibernate to make a table out of this class
//@Table(name="users")
public class Person {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotNull
	private String nombre;

	@ManyToOne
	private Person madre;

	@ManyToOne
	private Person padre;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Person getMadre() {
		return madre;
	}

	public void setMadre(Person madre) {
		this.madre = madre;
	}

	public Person getPadre() {
		return padre;
	}

	public void setPadre(Person padre) {
		this.padre = padre;
	}

}
