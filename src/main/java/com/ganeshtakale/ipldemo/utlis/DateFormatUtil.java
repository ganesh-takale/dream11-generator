package com.ganeshtakale.ipldemo.utlis;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatUtil {

	public static final String YYYYMMdd_Hyphen_with_24H_time = "yyyy-MM-dd HH:mm:ss";

	public static Date formatDate(Date date, String formatStyle) {
		Date formattedDate = null;
		try {
			if (date != null) {
				SimpleDateFormat format = new SimpleDateFormat(formatStyle);
				String formatedDate = format.format(date);
				formattedDate = format.parse(formatedDate);
			}
		} catch (ParseException e) {
			formattedDate = date;
		}
		return formattedDate;
	}

	public static String formatDateToString(Date date, String formatStyle) {
		String formattedDate = null;
		if (date != null) {
			SimpleDateFormat format = new SimpleDateFormat(formatStyle);
			formattedDate = format.format(date);
		}
		return formattedDate;
	}
}
