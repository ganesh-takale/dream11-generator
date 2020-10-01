package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.bean.PlayerBean;
import com.ganeshtakale.ipldemo.enums.PlayerRole;
import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.TeamStrategy;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.repository.TeamsRepository;
import com.ganeshtakale.ipldemo.utlis.PlayerCombinationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TeamsService {

	@Autowired
	TeamsRepository tr;

	@Autowired
	PlayersService ps;

	@Autowired
	TeamStrategyService ts;

	public Iterable<Teams> getAll() {
		return tr.findAll();
	}

	public List<List<PlayerBean>> generateTeams(long team1, long team2, long strId) {
		List<List<PlayerBean>> collect= new ArrayList<>();
		Teams t1 = tr.findById(team1).orElse(null);
		Teams t2 = tr.findById(team2).orElse(null);
		if(t1 != null && t2 != null) {
			List<PlayerBean> team1Playing11 = ps.getPlaying11(team1);
			List<PlayerBean> team2Playing11 = ps.getPlaying11(team2);
			TeamStrategy strategy = ts.getById(strId);
			List<List<PlayerBean>> wkCombination = combineRoles(team1Playing11, team2Playing11, strategy.getWicketkeeper(),
					PlayerRole.WK);
			List<List<PlayerBean>> batCombination = combineRoles(team1Playing11, team2Playing11, strategy.getBatsman(),
					PlayerRole.BAT);
			List<List<PlayerBean>> allCombination = combineRoles(team1Playing11, team2Playing11, strategy.getAllrounder(),
					PlayerRole.ALL);
			List<List<PlayerBean>> bowCombination = combineRoles(team1Playing11, team2Playing11, strategy.getBowler(),
					PlayerRole.BOW);
			List<List<PlayerBean>> combinedListWkBat = PlayerCombinationUtils.combine2List(wkCombination, batCombination);
			List<List<PlayerBean>> combinedListWkBatAll = PlayerCombinationUtils.combine2List(combinedListWkBat, allCombination);
			List<List<PlayerBean>> combinedListWkBatAllBowl = PlayerCombinationUtils.combine2List(combinedListWkBatAll, bowCombination);
			collect = combinedListWkBatAllBowl.stream().filter(team -> {
				long t1Count = team.stream().filter(p-> t1.getCode().equals(p.getTeam())).count();
				long t2Count = team.stream().filter(p-> t2.getCode().equals(p.getTeam())).count();
				return t1Count <= 7 && t2Count <= 7;
			}).filter(team -> {
				double totalCredits = team.stream().map(PlayerBean::getCredits).mapToDouble(d-> d).sum();
				return !(totalCredits > 100);
			}).collect(Collectors.toList());
		}
		return collect;
	}

	private List<List<PlayerBean>> combineRoles(List<PlayerBean> team1Playing11, List<PlayerBean> team2Playing11, long strategy,
			PlayerRole wk2) {
		List<PlayerBean> wk = new ArrayList<>();
		wk.addAll(team1Playing11.stream().filter(players -> wk2.name().equals(players.getRole()))
				.collect(Collectors.toList()));
		wk.addAll(team2Playing11.stream().filter(players -> wk2.name().equals(players.getRole()))
				.collect(Collectors.toList()));
		return PlayerCombinationUtils.createCombination(wk, wk.size(), Long.valueOf(strategy).intValue());
	}
}
