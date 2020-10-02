package com.ganeshtakale.ipldemo.service;

import com.ganeshtakale.ipldemo.bean.PlayerBean;
import com.ganeshtakale.ipldemo.enums.PlayerRole;
import com.ganeshtakale.ipldemo.model.TeamStrategy;
import com.ganeshtakale.ipldemo.model.Teams;
import com.ganeshtakale.ipldemo.repository.TeamsRepository;
import com.ganeshtakale.ipldemo.utlis.DateFormatUtil;
import com.ganeshtakale.ipldemo.utlis.PlayerCombinationUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeamsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(TeamsService.class);

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

	public String generateReport(long team1, long team2, long strId) {
		JSONObject response = new JSONObject();
		Teams t1 = tr.findById(team1).orElse(null);
		Teams t2 = tr.findById(team2).orElse(null);
		TeamStrategy strategy = ts.getById(strId);
		List<List<PlayerBean>> lists = generateTeams(team1, team2, strId);
		Workbook wb = new XSSFWorkbook();
		Sheet sheet = wb.createSheet();
		int rowIndex = 0;
		writeHeader(sheet, rowIndex++, strategy);
		for(List<PlayerBean> pb: lists) {
			Row dataRow = sheet.createRow(rowIndex);
			double totalCredits = pb.stream().map(PlayerBean::getCredits).mapToDouble(d-> d).sum();
			int cellIndex = 0;
			Cell cell = dataRow.createCell(cellIndex++);
			cell.setCellValue(totalCredits);
			cell.setCellType(CellType.NUMERIC);
			for(PlayerBean b : pb) {
				cell = dataRow.createCell(cellIndex++);
				cell.setCellValue(b.getName()+"("+b.getTeam()+"-"+b.getCredits()+")");
				cell.setCellType(CellType.STRING);
			}
			rowIndex++;
		}
		sheet.autoSizeColumn(0);
		sheet.autoSizeColumn(1);
		sheet.autoSizeColumn(2);
		sheet.autoSizeColumn(3);
		sheet.autoSizeColumn(4);
		sheet.autoSizeColumn(5);
		sheet.autoSizeColumn(6);
		sheet.autoSizeColumn(7);
		sheet.autoSizeColumn(8);
		sheet.autoSizeColumn(9);
		sheet.autoSizeColumn(10);
		sheet.autoSizeColumn(11);

		Date date = new Date();
		String reportPath = "/home/perennial/Demo/Dream11-Reports/";
		String timeStamp = DateFormatUtil.formatDateToString(date, "yyyyMMddHHmmss");
		String filePath = reportPath + t1.getCode() + "vs"+t2.getCode()+"_"+ timeStamp +".xlsx";
		try (FileOutputStream fos = new FileOutputStream(new File(filePath))) {
			wb.write(fos);
			wb.close();
			response.put("message","Report generated successfully");
			response.put("status_cd","1");
		} catch (IOException e){
			LOGGER.error("error while writing workbook", e);
			response.put("message","Failed to generate report");
			response.put("status_cd","0");
		}
		return response.toString();
	}

	private void writeHeader(Sheet sheet, int i, TeamStrategy strategy) {
		long wicketkeeper = strategy.getWicketkeeper();
		long batsman = strategy.getBatsman();
		long allrounder = strategy.getAllrounder();
		long bowler = strategy.getBowler();
		Row row = sheet.createRow(i);
		int cellIndex =0;
		Cell cell = row.createCell(cellIndex++);
		cell.setCellValue("Total Credits");
		cell.setCellType(CellType.STRING);
		for (long l = 1;l<=wicketkeeper;l++ ) {
			cell = row.createCell(cellIndex);
			cell.setCellValue("WICKETKEEPER-"+l);
			cell.setCellType(CellType.STRING);
//			sheet.autoSizeColumn(cellIndex, true);
			cellIndex++;
		}
		for (long l = 1;l<=batsman;l++ ) {
			cell = row.createCell(cellIndex);
			cell.setCellValue("BATSMAN-"+l);
			cell.setCellType(CellType.STRING);
//			sheet.autoSizeColumn(cellIndex, true);
			cellIndex++;
		}
		for (long l = 1;l<=allrounder;l++ ) {
			cell = row.createCell(cellIndex);
			cell.setCellValue("ALLROUNDER-"+l);
			cell.setCellType(CellType.STRING);
//			sheet.autoSizeColumn(cellIndex, true);
			cellIndex++;
		}
		for (long l = 1;l<=bowler;l++ ) {
			cell = row.createCell(cellIndex);
			cell.setCellValue("BOWLER-"+l);
			cell.setCellType(CellType.STRING);
//			sheet.autoSizeColumn(cellIndex, false);
			cellIndex++;
		}
	}
}
