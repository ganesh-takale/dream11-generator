package com.ganeshtakale.ipldemo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Entity
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Players implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "CREDITS")
	private String credits;

	@Column(name = "TYPE")
	private String type;

	@Column(name = "IN_PLAYING11", columnDefinition = "BIT", length = 1)
	private boolean inPlaying11;

	@ManyToOne(cascade = CascadeType.ALL)
	private Teams team;

	public Players() {
	}

	public Players(String name, String credits) {
		super();
		this.name = name;
		this.credits = credits;
	}

}
