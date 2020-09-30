package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.TeamStrategy;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.repository.TeamStrategyRepository;
import com.ganeshtakale.ipldemo.repository.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeamStrategyService {

	@Autowired
	TeamStrategyRepository tsr;

	public Iterable<TeamStrategy> getAll() {
		return tsr.findAll();
	}

	public TeamStrategy getById(long id) {
		Optional<TeamStrategy> player = tsr.findById(id);
		return player.orElse(null);
	}
}
