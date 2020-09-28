package com.ganeshtakale.ipldemo.repository;

import com.ganeshtakale.ipldemo.model.Players;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayersRepository extends CrudRepository<Players,Integer>{

	Iterable<Players> findByTeam_Id(long teamId);

	Iterable<Players> findByTeam_IdAndType(long teamId, String type);
}