package com.ganeshtakale.ipldemo.controller;

import com.ganeshtakale.ipldemo.bean.MatchBean;
import com.ganeshtakale.ipldemo.model.Matches;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.repository.MatchesRepository;
import com.ganeshtakale.ipldemo.service.MatchesService;
import com.ganeshtakale.ipldemo.service.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MatchesController {
	@Autowired
	MatchesService ms;

	@GetMapping("/matches")
	public Iterable<Matches> getAll() {
		return ms.getAll();
	}

	@GetMapping("/matches/upcoming")
	public List<MatchBean> getUpcomingMatches() {
		return ms.getUpcomingMatches();
	}

}
