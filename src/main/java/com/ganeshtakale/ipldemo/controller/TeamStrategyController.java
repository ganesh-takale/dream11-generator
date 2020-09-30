package com.ganeshtakale.ipldemo.controller;

import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.TeamStrategy;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.service.TeamStrategyService;
import com.ganeshtakale.ipldemo.service.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TeamStrategyController {
	@Autowired
	TeamStrategyService tss;

	@GetMapping("/team-strategy")
	public Iterable<TeamStrategy> getAll() {
		return tss.getAll();
	}

	@GetMapping("/team-strategy/{id}")
	public TeamStrategy getById(@PathVariable long id) {
		return tss.getById(id);
	}


}
