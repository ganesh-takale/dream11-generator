package com.ganeshtakale.ipldemo.repository;

import com.ganeshtakale.ipldemo.model.Matches;
import com.ganeshtakale.ipldemo.model.Players;
import com.ganeshtakale.ipldemo.model.Teams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface MatchesRepository extends JpaRepository<Matches,Long> {

	Iterable<Matches> findByDateTime(Date date);

}
