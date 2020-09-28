package com.ganeshtakale.ipldemo.controller;

import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.service.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TeamsController {
	@Autowired
	TeamsService ts;

	@GetMapping("/teams")
	public Iterable<Teams> getAll() {
		return ts.getAll();
	}

}
