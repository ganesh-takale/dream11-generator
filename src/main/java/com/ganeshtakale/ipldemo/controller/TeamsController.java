package com.ganeshtakale.ipldemo.controller;

import com.ganeshtakale.ipldemo.bean.PlayerBean;
import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.service.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TeamsController {
	@Autowired
	TeamsService ts;

	@GetMapping("/teams")
	public Iterable<Teams> getAll() {
		return ts.getAll();
	}

	@GetMapping("/generate-teams")
	public List<List<PlayerBean>> generateTeams(@RequestParam(value = "team1") long team1,
			@RequestParam(value = "team2") long team2,@RequestParam(value = "strategyId") long strId) {
		return ts.generateTeams(team1,team2,strId);
	}

}
