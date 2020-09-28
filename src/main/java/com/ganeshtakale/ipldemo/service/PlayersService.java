package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.repository.PlayersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlayersService {

	@Autowired
	PlayersRepository playersRepository;

	public Iterable<Players> getAll() {
		return playersRepository.findAll();
	}

	public List<Players> getByTeam(long teamId) {
		Iterable<Players> players = playersRepository.findByTeam_Id(teamId);
		List<Players> players1 = new ArrayList<>();
		if(players != null) {
			for (Players p : players) {
				p.setTeam(null);
				players1.add(p);
			}
		}
		return players1;
	}

	public List<Players> getByTeamAndType(long teamId, String type) {
		Iterable<Players> players = playersRepository.findByTeam_IdAndType(teamId, type);
		List<Players> players1 = new ArrayList<>();
		if(players != null) {
			for (Players p : players) {
				p.setTeam(null);
				p.setType(null);
				players1.add(p);
			}
		}
		return players1;
	}
}
