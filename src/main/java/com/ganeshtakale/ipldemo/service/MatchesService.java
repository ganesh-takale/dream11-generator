package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.model.Matches;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.repository.MatchesRepository;
import com.ganeshtakale.ipldemo.repository.TeamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class MatchesService {

	@Autowired
	MatchesRepository mr;

	public Iterable<Matches> getAll() {
		return mr.findAll();
	}

	public Iterable<Matches> getByDate(Date date) {
		return mr.findByDateTime(date);
	}
}
