package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.bean.MatchBean;
import com.ganeshtakale.ipldemo.model.Matches;
import com.ganeshtakale.ipldemo.repository.MatchesRepository;
import com.ganeshtakale.ipldemo.utlis.DateFormatUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MatchesService {

	@Autowired
	MatchesRepository mr;

	public Iterable<Matches> getAll() {
		return mr.findAll();
	}

	public List<MatchBean> getUpcomingMatches() {
		List<MatchBean> matchBeans = new ArrayList<>();
		Date from = new Date();
		Date to = new Date();
		from.setDate(to.getDate() - 1);
		to.setDate(to.getDate() + 2);
		Iterable<Matches> byDateTime = mr.findByDateTime(from, to);
		for (Matches matches : byDateTime) {
			MatchBean bean = new MatchBean();
			bean.setTeam1(matches.getTeam1());
			bean.setTeam2(matches.getTeam2());
			bean.setLocation(matches.getLocation());
			bean.setDateTime(DateFormatUtil
					.formatDateToString(matches.getDateTime(), DateFormatUtil.YYYYMMdd_Hyphen_with_24H_time));
			matchBeans.add(bean);
		}
		return matchBeans;
	}
}
