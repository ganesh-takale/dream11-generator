package com.ganeshtakale.ipldemo.controller;

import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.service.PlayersService;
import com.ganeshtakale.ipldemo.service.TeamsService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PlayersController {
	@Autowired
	PlayersService ps;

	@GetMapping("/players")
	public Iterable<Players> getAll() {
		return ps.getAll();
	}

	@GetMapping("/players/{teamId}")
	public List<Players> getByTeam(@PathVariable long teamId) {
		return ps.getByTeam(teamId);
	}

	@GetMapping("/player/{playerId}")
	public Players getById(@PathVariable long playerId) {
		return ps.getById(playerId);
	}

	@GetMapping("/players/{teamId}/{type}")
	public List<Players> getByTeam(@PathVariable long teamId, @PathVariable String type) {
		return ps.getByTeamAndType(teamId,type);
	}

	@PostMapping("/player/{playerId}")
	public JSONObject getById(@PathVariable long playerId, @RequestBody Players player) {
		return ps.updatePlayer(playerId,player);
	}
}
