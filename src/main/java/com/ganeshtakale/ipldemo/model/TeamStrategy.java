package com.ganeshtakale.ipldemo.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@Entity
@Table(name = "team_strategy")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeamStrategy implements Serializable {
	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "WICKETKEEPER")
	private long wicketkeeper;

	@Column(name = "BATSMAN")
	private long batsman;

	@Column(name = "ALLROUNDER")
	private long allrounder;

	@Column(name = "BOWLER")
	private long bowler;

	public TeamStrategy() {
	}

}
