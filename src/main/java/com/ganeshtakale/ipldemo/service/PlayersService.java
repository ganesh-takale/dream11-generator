package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.bean.PlayerBean;
import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.repository.PlayersRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

	public Players getById(long id) {
		Optional<Players> player = playersRepository.findById(id);
		return player.orElse(null);
	}

	public JSONObject updatePlayer(long id, Players players) {
		JSONObject response = new JSONObject();
		Optional<Players> player = playersRepository.findById(id);
		if (player.isPresent()) {
			Players players1 = player.get();
			players1.setType(players.getType());
			players1.setCredits(players.getCredits());
			players1.setInPlaying11(players.isInPlaying11());
			playersRepository.save(players1);
			response.put("status_cd","1");
			response.put("message","Details of "+players1.getName() +" updated successfully");
		} else {
			response.put("status_cd","0");
			response.put("message","Player does not exist for ID:"+id);
		}
		return response;
	}

	public List<PlayerBean> getPlaying11(long teamId){
		Iterable<Players> players = playersRepository.findByTeam_IdAndInPlaying11(teamId, true);
		List<PlayerBean> playing11 = new ArrayList<>();
		for(Players p: players){
			PlayerBean bean = new PlayerBean();
			bean.setName(p.getName());
			bean.setCredits(Double.parseDouble(p.getCredits()));
			bean.setRole(p.getType());
			bean.setTeam(p.getTeam().getCode());
			playing11.add(bean);
		}
		return playing11;
	}
}
