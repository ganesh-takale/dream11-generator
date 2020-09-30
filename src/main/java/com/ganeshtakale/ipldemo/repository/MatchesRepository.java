package com.ganeshtakale.ipldemo.repository;

import com.ganeshtakale.ipldemo.model.Matches;
import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.Teams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface MatchesRepository extends JpaRepository<Matches,Long> {

	@Query("select a from Matches a where a.dateTime between  :from and :to")
	List<Matches> findByDateTime(
			@Param("from") Date from,@Param("to") Date to);

}
