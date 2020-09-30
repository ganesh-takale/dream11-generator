package com.ganeshtakale.ipldemo.bean;

import com.ganeshtakale.ipldemo.model.Teams;
import lombok.Data;

@Data
public class MatchBean {

	private String dateTime;

	private Teams team1;

	private Teams team2;

	private String location;

	public MatchBean() {
	}
}
