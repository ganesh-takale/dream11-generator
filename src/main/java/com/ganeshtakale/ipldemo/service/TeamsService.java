package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.repository.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamsService {

	@Autowired
	TeamsRepository teamsRepository;

	public Iterable<Teams> getAll() {
		return teamsRepository.findAll();
	}

}
